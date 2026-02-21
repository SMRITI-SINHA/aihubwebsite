const fs = require('fs');
let content = fs.readFileSync('client/src/pages/ai-hub.tsx', 'utf8');

// Update OrbitControls import and RobotModel code
const importRegex = /import \{ useGLTF, useAnimations, Float, ContactShadows, Environment \} from "@react-three\/drei";/;
if (importRegex.test(content)) {
  content = content.replace(importRegex, 'import { useGLTF, useAnimations, Float, ContactShadows, Environment, OrbitControls } from "@react-three/drei";');
}

const oldRobotModelRegex = /function RobotModel\(\) \{[\s\S]*?return \([\s\S]*?Float>[\s\S]*?\);[\s\S]*?\}/;

// The key changes: 
// 1. Position Y adjusted from -2.5 to -1.2 so the base is visible
// 2. Scale reduced slightly from 3.2 to 2.4 to fit the window better
// 3. Keep the smooth look-at logic but remove extreme angles that might cause glitching
// 4. Added OrbitControls in VoiceAssistantSection (below)
const newRobotModel = `function RobotModel() {
  const { scene, animations } = useGLTF("/models/LexAI_Robot_Final.glb") as any;
  const { actions } = useAnimations(animations, scene);
  const robotRef = useRef<THREE.Group>(null);
  
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const idleAction = actions["Idle"] || actions["Hover_Float"] || (actions && Object.values(actions)[0]);
    if (idleAction) {
      idleAction.reset().fadeIn(0.5).play();
      idleAction.setEffectiveTimeScale(0.5); 
    }
  }, [actions]);

  useFrame((state) => {
    if (!robotRef.current) return;
    
    // Very gentle look-at constraints
    targetRotation.current.y = (state.mouse.x * Math.PI) / 10;
    targetRotation.current.x = -(state.mouse.y * Math.PI) / 15;
    
    currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.05;
    currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.05;
    
    let neckBone: THREE.Object3D | null = null;
    scene.traverse((child: THREE.Object3D) => {
      if (child.name.toLowerCase().includes('neck') || child.name.toLowerCase().includes('head')) {
        neckBone = child;
      }
    });
    
    if (neckBone) {
      (neckBone as THREE.Object3D).rotation.y = currentRotation.current.y;
      (neckBone as THREE.Object3D).rotation.x = currentRotation.current.x;
    } else {
      robotRef.current.rotation.y = currentRotation.current.y;
      robotRef.current.rotation.x = currentRotation.current.x;
    }
  });

  return (
    <Float 
      speed={1.5} 
      rotationIntensity={0.05} 
      floatIntensity={0.2} 
    >
      <primitive 
        ref={robotRef} 
        object={scene} 
        scale={2.4} 
        position={[0, -1.2, 0]} 
      />
    </Float>
  );
}`;

content = content.replace(oldRobotModelRegex, newRobotModel);

// Add OrbitControls to the Canvas so the user can drag to rotate the robot
const canvasRegex = /<Canvas camera=\{\{ position: \[-?0, -?0, 5\], fov: 45 \}\}>[\s\S]*?<\/Canvas>/;
const match = content.match(canvasRegex);

if (match) {
  const newCanvas = match[0].replace(
    /<Environment preset="city" \/>/,
    '<Environment preset="city" />\n              <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />'
  );
  content = content.replace(match[0], newCanvas);
}

// Ensure the shadow is positioned right under the new base height (-1.2)
content = content.replace(/<ContactShadows position=\{\[0, -?[\d.]+, 0\]\}/, '<ContactShadows position={[0, -1.2, 0]}');


fs.writeFileSync('client/src/pages/ai-hub.tsx', content);
