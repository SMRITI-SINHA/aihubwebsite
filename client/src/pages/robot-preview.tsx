import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Float, ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function RobotModel() {
  const { scene, animations } = useGLTF("/models/LexAI_Robot_Final.glb") as any;
  const { actions } = useAnimations(animations, scene);
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

    if (actions) {
      // Stop all built-in animations to prevent glitches
      Object.values(actions).forEach(action => action?.stop());
    }
  }, [scene, actions]);

  // Add a cute breathing and cursor-following effect
  useFrame((state) => {
    if (robotRef.current) {
      const t = state.clock.getElapsedTime();
      
      // Gentle breathing effect (scaling up and down)
      const baseScale = 2.6;
      const breathingScale = baseScale + Math.sin(t * 2.5) * 0.04;
      robotRef.current.scale.setScalar(breathingScale);
      
      // Make the robot gently look towards the mouse pointer
      const targetX = (state.mouse.x * Math.PI) / 6;
      const targetY = (state.mouse.y * Math.PI) / 8;
      
      // Smoothly interpolate current rotation towards target rotation
      robotRef.current.rotation.y = THREE.MathUtils.lerp(robotRef.current.rotation.y, targetX, 0.05);
      robotRef.current.rotation.x = THREE.MathUtils.lerp(robotRef.current.rotation.x, -targetY, 0.05);
    }
  });

  return (
    <Float 
      speed={3} 
      rotationIntensity={0.15} 
      floatIntensity={1.5} 
    >
      <primitive 
        ref={robotRef} 
        object={scene} 
        scale={2.6} 
        position={[0, -1.8, 0]} 
      />
    </Float>
  );
}

export default function RobotPreview() {
  return (
    <div className="w-full h-screen bg-[#F4F6F8] m-0 p-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <RobotModel />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={5} blur={2} far={4} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
    </div>
  );
}
