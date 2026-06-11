import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Float, Line } from '@react-three/drei';
import * as THREE from 'three';
import heroImage from '../assets/ayush-profile-photo.jpg';

// Scene element containing the 3D card and lights
function PortraitCard() {
  const cardGroupRef = useRef();
  const spotlightRef = useRef();
  const ringRef = useRef();
  const particlesRef = useRef();
  
  // Load texture
  const texture = useTexture(heroImage);

  // Generate background/surrounding floating particles
  const particleCount = 60;
  const particlesPosition = React.useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2;
    }
    return arr;
  }, []);

  useFrame((state) => {
    const { mouse } = state;
    const time = state.clock.getElapsedTime();

    // Smooth card tilt following the mouse
    if (cardGroupRef.current) {
      const targetRotationY = mouse.x * 0.45;
      const targetRotationX = -mouse.y * 0.45;
      
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
      
      // Gentle floating/bobbing motion
      cardGroupRef.current.position.y = Math.sin(time * 1.5) * 0.12;
    }

    // Light tracking mouse for dynamic specular highlights
    if (spotlightRef.current) {
      const targetX = mouse.x * 4;
      const targetY = mouse.y * 4;
      spotlightRef.current.position.x = THREE.MathUtils.lerp(spotlightRef.current.position.x, targetX, 0.1);
      spotlightRef.current.position.y = THREE.MathUtils.lerp(spotlightRef.current.position.y, targetY, 0.1);
    }

    // Orbiting ring rotation
    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.2;
      ringRef.current.rotation.x = Math.sin(time * 0.5) * 0.2 + 0.5;
    }

    // Slow particles rotation
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
      particlesRef.current.rotation.x = time * 0.03;
    }
  });

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight 
        ref={spotlightRef} 
        position={[0, 0, 4]} 
        intensity={2.5} 
        distance={10} 
        color="#00FFD1" 
      />
      <pointLight position={[-3, -3, 2]} intensity={1} color="#7B2FFF" />

      {/* Main 3D Card Group */}
      <group ref={cardGroupRef}>
        
        {/* Floating particles close to the card */}
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
            size={0.08} 
            color="#00FFD1" 
            transparent 
            opacity={0.8} 
            sizeAttenuation 
          />
        </points>

        {/* Orbiting Glowing Ring */}
        <mesh ref={ringRef} position={[0, 0, 0]}>
          <torusGeometry args={[2.2, 0.025, 16, 100]} />
          <meshStandardMaterial 
            color="#7B2FFF" 
            emissive="#7B2FFF" 
            emissiveIntensity={1.5} 
            roughness={0.1}
          />
        </mesh>
        
        {/* Backplate: Translucent futuristic glass with glowing border */}
        <mesh position={[0, 0, -0.05]}>
          <boxGeometry args={[3.1, 4.1, 0.08]} />
          <meshPhysicalMaterial 
            color="#0A0915"
            roughness={0.15}
            metalness={0.1}
            transmission={0.6} // Glass transparency
            thickness={0.8}
            transparent
            opacity={0.85}
            clearcoat={1}
          />
        </mesh>

        {/* Card Border glow effect */}
        <mesh position={[0, 0, -0.06]}>
          <boxGeometry args={[3.15, 4.15, 0.04]} />
          <meshBasicMaterial 
            color="#00FFD1" 
            wireframe 
            transparent 
            opacity={0.3} 
          />
        </mesh>

        {/* Frontplate: Mapped Portrait texture */}
        <mesh position={[0, 0, 0.02]}>
          <planeGeometry args={[3, 4]} />
          <meshStandardMaterial 
            map={texture} 
            roughness={0.2}
            metalness={0.15}
            clearcoat={0.5}
            clearcoatRoughness={0.1}
          />
        </mesh>

      </group>
    </>
  );
}

export default function Hero3DScene() {
  return (
    <div className="w-full h-[350px] md:h-[500px] lg:h-[550px] relative z-20 cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <PortraitCard />
      </Canvas>
    </div>
  );
}
