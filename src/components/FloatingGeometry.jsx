import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const FloatingGeometry = () => {
  const meshRef = useRef();
  const torusRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.x = time * 0.1;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.3;
      torusRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group>
        {/* Core Icosahedron */}
        <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#00F5FF"
            emissive="#00F5FF"
            emissiveIntensity={0.5}
            wireframe
            distort={0.4}
            speed={2}
          />
        </mesh>
        
        {/* Outer Orbiting Torus */}
        <mesh ref={torusRef} position={[0, 0, 0]} scale={2.5}>
          <torusGeometry args={[1.5, 0.02, 16, 100]} />
          <meshStandardMaterial color="#7B2FFF" emissive="#7B2FFF" emissiveIntensity={1} />
        </mesh>
      </group>
    </Float>
  );
};

export default FloatingGeometry;
