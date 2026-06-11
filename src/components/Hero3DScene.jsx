import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import heroImage from '../assets/ayush-profile-photo.jpg';

function PortraitCard() {
  const cardGroupRef = useRef();
  const spotlightRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();
  const particlesRef = useRef();
  
  // Load texture
  const texture = useTexture(heroImage);

  // Generate floating particle wave
  const particleCount = 80;
  const particlesPosition = React.useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3 - 1.5;
    }
    return arr;
  }, []);

  useFrame((state) => {
    const { mouse } = state;
    const time = state.clock.getElapsedTime();

    // Smooth card tilting based on mouse coords
    if (cardGroupRef.current) {
      const targetRotationY = mouse.x * 0.42;
      const targetRotationX = -mouse.y * 0.42;
      
      cardGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        cardGroupRef.current.rotation.y,
        targetRotationY,
        0.08
      );
      cardGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        cardGroupRef.current.rotation.x,
        targetRotationX,
        0.08
      );
      
      // Floating motion
      cardGroupRef.current.position.y = Math.sin(time * 1.6) * 0.1;
    }

    // Dynamic mouse-tracking light
    if (spotlightRef.current) {
      const targetX = mouse.x * 3.5;
      const targetY = mouse.y * 3.5;
      spotlightRef.current.position.x = THREE.MathUtils.lerp(spotlightRef.current.position.x, targetX, 0.1);
      spotlightRef.current.position.y = THREE.MathUtils.lerp(spotlightRef.current.position.y, targetY, 0.1);
    }

    // Spin orbiting rings
    if (ringRef1.current) {
      ringRef1.current.rotation.z = time * 0.15;
      ringRef1.current.rotation.x = Math.sin(time * 0.3) * 0.15 + 0.4;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z = -time * 0.25;
      ringRef2.current.rotation.y = Math.cos(time * 0.4) * 0.15 + 0.3;
    }

    // Spin particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.03;
      particlesRef.current.rotation.x = time * 0.02;
    }
  });

  return (
    <>
      {/* Lighting configuration */}
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />
      
      {/* Tracking specular lights */}
      <pointLight 
        ref={spotlightRef} 
        position={[0, 0, 3.5]} 
        intensity={2.8} 
        distance={9} 
        color="#00F5FF" 
      />
      <pointLight position={[-4, -3, 2]} intensity={1.5} color="#8A2BE2" />

      <group ref={cardGroupRef}>
        
        {/* Floating particles */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particleCount}
              array={particlesPosition}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial 
            size={0.065} 
            color="#00F5FF" 
            transparent 
            opacity={0.7} 
            sizeAttenuation 
          />
        </points>

        {/* Orbit Ring 1 (Neon Violet) */}
        <mesh ref={ringRef1} position={[0, 0, 0]}>
          <torusGeometry args={[2.0, 0.015, 16, 100]} />
          <meshStandardMaterial 
            color="#8A2BE2" 
            emissive="#8A2BE2" 
            emissiveIntensity={1.2} 
            roughness={0.1}
          />
        </mesh>

        {/* Orbit Ring 2 (Electric Cyan) */}
        <mesh ref={ringRef2} position={[0, 0, -0.05]} rotation={[0.5, 0.5, 0]}>
          <torusGeometry args={[2.3, 0.01, 16, 100]} />
          <meshStandardMaterial 
            color="#00F5FF" 
            emissive="#00F5FF" 
            emissiveIntensity={1.0} 
            roughness={0.1}
            transparent
            opacity={0.7}
          />
        </mesh>
        
        {/* Glassmorphic backplate */}
        <mesh position={[0, 0, -0.04]}>
          <boxGeometry args={[2.9, 3.9, 0.06]} />
          <meshPhysicalMaterial 
            color="#0D0B18"
            roughness={0.1}
            metalness={0.05}
            transmission={0.75}
            thickness={0.6}
            transparent
            opacity={0.9}
            clearcoat={1}
          />
        </mesh>

        {/* Glowing border outline */}
        <mesh position={[0, 0, -0.05]}>
          <boxGeometry args={[2.94, 3.94, 0.02]} />
          <meshBasicMaterial 
            color="#00F5FF" 
            wireframe 
            transparent 
            opacity={0.25} 
          />
        </mesh>

        {/* Front Plate: Texture mapping */}
        <mesh position={[0, 0, 0.02]}>
          <planeGeometry args={[2.8, 3.8]} />
          <meshStandardMaterial 
            map={texture} 
            roughness={0.15}
            metalness={0.1}
            clearcoat={0.6}
            clearcoatRoughness={0.08}
          />
        </mesh>

      </group>
    </>
  );
}

export default function Hero3DScene() {
  return (
    <div className="w-full h-[360px] md:h-[480px] lg:h-[520px] relative z-20 cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <PortraitCard />
      </Canvas>
    </div>
  );
}
