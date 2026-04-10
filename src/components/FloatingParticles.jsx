import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const PARTICLE_COUNT = 3000;

const seededRandom = (index) => {
  const value = Math.sin(index * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const Particles = () => {
  const mesh = useRef();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (seededRandom(i + 1) - 0.5) * 50;
      positions[i * 3 + 1] = (seededRandom(i + 2) - 0.5) * 50;
      positions[i * 3 + 2] = (seededRandom(i + 3) - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00F5FF" transparent opacity={0.6} sizeAttenuation={true} />
    </points>
  );
};

const FloatingParticles = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-cosmic-black pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default FloatingParticles;
