const fs = require('fs');
let content = fs.readFileSync('client/src/pages/ai-hub.tsx', 'utf8');

// Replace RobotModel entirely with a static version
const oldRobotModelRegex = /function RobotModel\(\) \{[\s\S]*?return \([\s\S]*?<\/Float>[\s\S]*?\);[\s\S]*?\}/;

const newRobotModel = `function RobotModel() {
  const { scene } = useGLTF("/models/LexAI_Robot_Final.glb") as any;
  const robotRef = useRef<THREE.Group>(null);

  return (
    <primitive 
      ref={robotRef} 
      object={scene} 
      scale={2.6} 
      position={[0, -1.8, 0]} 
    />
  );
}`;

content = content.replace(oldRobotModelRegex, newRobotModel);

// Remove OrbitControls
content = content.replace(/<OrbitControls enableZoom=\{false\} enablePan=\{false\} minPolarAngle=\{Math\.PI \/ 3\} maxPolarAngle=\{Math\.PI \/ 1\.5\} \/>\n\s*/, '');

fs.writeFileSync('client/src/pages/ai-hub.tsx', content);
