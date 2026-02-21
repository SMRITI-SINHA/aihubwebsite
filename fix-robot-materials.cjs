const fs = require('fs');
let content = fs.readFileSync('client/src/pages/ai-hub.tsx', 'utf8');

const oldRobotModelRegex = /function RobotModel\(\) \{[\s\S]*?return \([\s\S]*?<\/Float>[\s\S]*?\);[\s\S]*?\}/;

// We need to traverse the loaded GLTF scene and fix the materials:
// Set depthWrite=true, transparent=false, side=THREE.FrontSide (or DoubleSide)
// to fix the inside-out/transparent rendering issue common with GLB exports
const newRobotModel = `function RobotModel() {
  const { scene } = useGLTF("/models/LexAI_Robot_Final.glb") as any;
  const robotRef = useRef<THREE.Group>(null);

  // Fix material transparency issues on load
  useEffect(() => {
    if (scene) {
      scene.traverse((child: any) => {
        if (child.isMesh && child.material) {
          // Clone material to avoid mutating shared ones
          child.material = child.material.clone();
          
          // Force opaque rendering to fix inside-out/transparency bugs
          child.material.transparent = false;
          child.material.opacity = 1;
          child.material.depthWrite = true;
          child.material.depthTest = true;
          
          // Optional: ensure it renders on both sides if the geometry is single-sided
          child.material.side = THREE.DoubleSide;
          
          child.material.needsUpdate = true;
        }
      });
    }
  }, [scene]);

  return (
    <Float 
      speed={1.5} 
      rotationIntensity={0.05} 
      floatIntensity={0.2} 
    >
      <primitive 
        ref={robotRef} 
        object={scene} 
        scale={2.6} 
        position={[0, -1.8, 0]} 
      />
    </Float>
  );
}`;

content = content.replace(oldRobotModelRegex, newRobotModel);
fs.writeFileSync('client/src/pages/ai-hub.tsx', content);
