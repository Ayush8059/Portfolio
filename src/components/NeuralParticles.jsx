import { useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NeuralMesh() {
  const meshRef = useRef();
  const particlesRef = useRef();
  const { camera, mouse } = useThree();
  
  // Generate neural network-like particle positions
  const particles = useMemo(() => {
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    // Create clustered neural nodes
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 3;
      const height = (Math.random() - 0.5) * 4;

      // Brain-like shape: more particles in center
      const factor = Math.pow(Math.random(), 2);

      positions[i * 3] = Math.cos(angle) * radius * factor;
      positions[i * 3 + 1] = height * factor;
      positions[i * 3 + 2] = Math.sin(angle) * radius * factor;
    }

    return positions;
  }, []);

  useFrame(({ mouse: mouseData }) => {
    if (particlesRef.current) {
      // Mouse repulsion effect
      particlesRef.current.rotation.x += 0.0002;
      particlesRef.current.rotation.y += 0.0003;

      // Warp toward mouse
      particlesRef.current.position.x = mouseData.x * 0.5;
      particlesRef.current.position.y = mouseData.y * 0.3;
    }
  });

  return (
    <>
      {/* Ambient glow sphere (background bloom effect) */}
      <mesh position={[0, 0, -2]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial
          color="#00FFD1"
          emissive="#00FFD1"
          emissiveIntensity={0.2}
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Neural particles */}
      <group ref={particlesRef}>
        <Points positions={particles} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#00FFD1"
            size={0.05}
            sizeAttenuation
            depthWrite={false}
            emissive="#00FFD1"
            toneMapped={false}
          />
        </Points>
      </group>

      {/* Rotating wireframe core */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[2, 4]} />
        <meshStandardMaterial
          color="#7B2FFF"
          emissive="#7B2FFF"
          emissiveIntensity={0.3}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </>
  );
}

export default function NeuralParticles() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <NeuralMesh />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00FFD1" />
      </Canvas>
    </div>
  );
}
