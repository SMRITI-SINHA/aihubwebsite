const fs = require('fs');
let content = fs.readFileSync('client/src/pages/ai-hub.tsx', 'utf8');

// Replace the buggy animation and look-at logic with a smoother, subtle version
const oldModelRegex = /function RobotModel\(\) \{[\s\S]*?return \([\s\S]*?Float>[\s\S]*?\);[\s\S]*?\}/;

const newRobotModel = `function RobotModel() {
  const { scene, animations } = useGLTF("/models/LexAI_Robot_Final.glb") as any;
  const { actions } = useAnimations(animations, scene);
  const robotRef = useRef<THREE.Group>(null);
  
  // Create a target for smooth look-at interpolation
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    // Just play the base Idle/Float animation smoothly
    const idleAction = actions["Idle"] || actions["Hover_Float"] || (actions && Object.values(actions)[0]);
    if (idleAction) {
      idleAction.reset().fadeIn(0.5).play();
      idleAction.setEffectiveTimeScale(0.5); // Slow down the idle animation to make it calm
    }
    
    // We remove the random jumping animations that were causing the "shock" effect
    // and rely on smooth procedural movements and the slowed-down idle state.
  }, [actions]);

  useFrame((state) => {
    if (!robotRef.current) return;
    
    // Calculate target rotation based on mouse (clamped to sensible subtle angles)
    // Map mouse [-1, 1] to a smaller radian range for a cute, subtle look
    targetRotation.current.y = (state.mouse.x * Math.PI) / 8; // Max 22.5 degrees left/right
    targetRotation.current.x = -(state.mouse.y * Math.PI) / 12; // Max 15 degrees up/down
    
    // Very smooth interpolation for the "follow" effect
    currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.05;
    currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.05;
    
    let neckBone: THREE.Object3D | null = null;
    scene.traverse((child: THREE.Object3D) => {
      // Find the neck or head bone to rotate
      if (child.name.toLowerCase().includes('neck') || child.name.toLowerCase().includes('head')) {
        neckBone = child;
      }
    });
    
    if (neckBone) {
      // Apply the smoothed rotation to the bone
      (neckBone as THREE.Object3D).rotation.y = currentRotation.current.y;
      (neckBone as THREE.Object3D).rotation.x = currentRotation.current.x;
    } else {
      // Fallback to rotating the whole model if no bone found
      robotRef.current.rotation.y = currentRotation.current.y;
      robotRef.current.rotation.x = currentRotation.current.x;
    }
  });

  return (
    <Float 
      speed={1.5} // Slower float speed
      rotationIntensity={0.05} // Very subtle rotation drift
      floatIntensity={0.2} // Very subtle up/down movement
    >
      <primitive 
        ref={robotRef} 
        object={scene} 
        scale={3.2} 
        position={[0, -2.5, 0]} 
      />
    </Float>
  );
}`;

content = content.replace(oldModelRegex, newRobotModel);
fs.writeFileSync('client/src/pages/ai-hub.tsx', content);
