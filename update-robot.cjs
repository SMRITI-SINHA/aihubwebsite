const fs = require('fs');
let content = fs.readFileSync('client/src/pages/ai-hub.tsx', 'utf8');

const importRegex = /import \{ useGLTF, Float, ContactShadows, Environment \} from "@react-three\/drei";/;
if (importRegex.test(content)) {
  content = content.replace(importRegex, 'import { useGLTF, useAnimations, Float, ContactShadows, Environment } from "@react-three/drei";\nimport { useEffect } from "react";');
}

const robotModelCodeRegex = /function RobotModel\(\) \{[\s\S]*?return \([\s\S]*?Float>[\s\S]*?\);[\s\S]*?\}/;

const newRobotModelCode = `function RobotModel() {
  const { scene, animations } = useGLTF("/models/LexAI_Robot_Final.glb");
  const { actions, mixer } = useAnimations(animations, scene);
  const robotRef = useRef<THREE.Group>(null);
  
  useEffect(() => {
    // Play idle animation by default if available
    const idleAction = actions["Idle"] || actions["Hover_Float"] || (Object.values(actions)[0]);
    if (idleAction) {
      idleAction.reset().fadeIn(0.5).play();
    }
    
    // Periodically play random animations
    const interval = setInterval(() => {
      const animNames = ["Thinking_Pose", "Wave_Hello", "Excited_Bounce", "Point_Forward"];
      const randomAnim = animNames[Math.floor(Math.random() * animNames.length)];
      
      if (actions[randomAnim]) {
        // Fade out current, fade in new
        mixer.stopAllAction();
        const action = actions[randomAnim];
        action.reset().fadeIn(0.5).play();
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
        
        // Return to idle after animation completes
        mixer.addEventListener('finished', () => {
          if (idleAction) {
            idleAction.reset().fadeIn(0.5).play();
          }
        });
      }
    }, 8000); // Play a random gesture every 8 seconds
    
    return () => {
      clearInterval(interval);
      mixer.removeEventListener('finished');
    };
  }, [actions, mixer]);

  useFrame((state) => {
    if (!robotRef.current) return;
    
    // Make head track mouse (finding the neck/head bone)
    let neckBone = null;
    scene.traverse((child) => {
      if (child.name === 'neck' || child.name === 'Head') {
        neckBone = child;
      }
    });
    
    const targetX = (state.mouse.x * Math.PI) / 4;
    const targetY = (state.mouse.y * Math.PI) / 4;
    
    if (neckBone) {
      // Rotate head/neck
      neckBone.rotation.y += (targetX - neckBone.rotation.y) * 0.1;
      neckBone.rotation.x += (-targetY - neckBone.rotation.x) * 0.1;
    } else {
      // Fallback: rotate whole robot if bones not found easily
      robotRef.current.rotation.y += (targetX - robotRef.current.rotation.y) * 0.1;
      robotRef.current.rotation.x += (-targetY - robotRef.current.rotation.x) * 0.1;
    }

    // Idle animation (floating) is handled by the Float component wrapper
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
      <primitive ref={robotRef} object={scene} scale={2.8} position={[0, -1.8, 0]} />
    </Float>
  );
}`;

content = content.replace(robotModelCodeRegex, newRobotModelCode);

fs.writeFileSync('client/src/pages/ai-hub.tsx', content);
