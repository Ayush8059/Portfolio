import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Line, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const skillIcons = {
  'React': '⚛️',
  'Node.js': '🟢',
  'Python': '🐍',
  'TensorFlow': '🧠',
  'MongoDB': '🍃',
  'PostgreSQL': '🐘',
  'AWS': '☁️',
  'Docker': '🐳',
};

function SkillOrb({ position, skill, color }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
      <pointLight position={[0, 0, 0]} intensity={1} color={color} distance={5} />
    </group>
  );
}

function OrbitRing({ radius, color, rotation }) {
  const pointsRef = useRef();

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.z += 0.0005;
    }
  });

  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      pts.push(
        new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0)
      );
    }
    return pts;
  }, [radius]);

  return (
    <group ref={pointsRef} rotation={rotation}>
      <Line points={points} color={color} lineWidth={1} transparent opacity={0.3} />
    </group>
  );
}

function SkillsScene() {
  const { camera } = useThree();

  // Skills positioned in orbital rings
  const skillsData = [
    // Inner ring - Frontend
    { skill: 'React', angle: 0, radius: 3, color: '#61dafb' },
    { skill: 'JavaScript', angle: Math.PI * 0.5, radius: 3, color: '#f7df1e' },
    // Middle ring - Backend
    { skill: 'Node.js', angle: 0, radius: 5, color: '#68a063' },
    { skill: 'Python', angle: Math.PI * 0.67, radius: 5, color: '#3776ab' },
    { skill: 'PostgreSQL', angle: Math.PI * 1.33, radius: 5, color: '#336791' },
    // Outer ring - ML/Data
    { skill: 'TensorFlow', angle: 0, radius: 7, color: '#ff6f20' },
    { skill: 'MongoDB', angle: Math.PI * 0.5, radius: 7, color: '#13aa52' },
    { skill: 'AWS', angle: Math.PI, radius: 7, color: '#ff9900' },
  ];

  useFrame(({ camera }) => {
    // Tilt camera based on scroll position for parallax effect
    camera.position.z = 12;
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00FFD1" />

      {/* Orbit Rings */}
      <OrbitRing radius={3} color="#00FFD1" rotation={[0, 0, 0]} />
      <OrbitRing radius={5} color="#7B2FFF" rotation={[0.2, 0, 0]} />
      <OrbitRing radius={7} color="#FF4D6D" rotation={[0.4, 0.1, 0]} />

      {/* Center Core */}
      <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00FFD1"
          emissive="#00FFD1"
          emissiveIntensity={0.8}
        />
      </Sphere>
      <pointLight position={[0, 0, 0]} intensity={2} color="#00FFD1" distance={10} />

      {/* Skill Orbs */}
      {skillsData.map((skill, i) => {
        const x = Math.cos(skill.angle) * skill.radius;
        const y = Math.sin(skill.angle) * skill.radius;
        return (
          <SkillOrb
            key={i}
            position={[x, y, 0]}
            skill={skill.skill}
            color={skill.color}
          />
        );
      })}
    </>
  );
}

export default function SkillsOrbit() {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden glass-card">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <SkillsScene />
      </Canvas>
    </div>
  );
}
