"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

interface SkillNode {
  label: string;
  angle: number;
  radius: number;
  color: string;
}

function OrbitingSkills({ skills }: { skills: SkillNode[] }) {
  const groupRef = useRef<THREE.Group>(null);

  const instances = useMemo(
    () =>
      skills.map((skill) => ({
        ...skill,
        speed: 0.2 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
      })),
    [skills]
  );

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Orbit rings */}
      {[2.5, 3.5, 4.5].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + (i * 0.3), 0, 0]}>
          <ringGeometry args={[radius - 0.01, radius + 0.01, 64]} />
          <meshBasicMaterial
            color="#3b82f6"
            transparent
            opacity={0.08}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {instances.map((skill, i) => {
        const SphereNode = ({ ...props }) => {
          const meshRef = useRef<THREE.Mesh>(null);

          useFrame((state) => {
            if (meshRef.current) {
              const t = state.clock.elapsedTime * skill.speed + skill.offset;
              const x = Math.cos(t + skill.angle) * skill.radius;
              const z = Math.sin(t + skill.angle) * skill.radius;
              meshRef.current.position.set(x, Math.sin(t * 0.5) * 0.3, z);
              meshRef.current.rotation.x += 0.01;
              meshRef.current.rotation.y += 0.02;
            }
          });

          return (
            <mesh ref={meshRef} {...props}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshPhysicalMaterial
                color={skill.color}
                emissive={skill.color}
                emissiveIntensity={0.3}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>
          );
        };

        return (
          <group key={i}>
            <SphereNode />
            <Float speed={1} floatIntensity={0.5}>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore - Text component type inference */}
              <Text
                position={[0, 1.5, 0]}
                fontSize={0.15}
                color="#c0c7d4"
                anchorX="center"
                anchorY="middle"
              >
                {skill.label}
              </Text>
            </Float>
          </group>
        );
      })}

      {/* Center glow */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshPhysicalMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
      <pointLight color="#3b82f6" intensity={3} distance={8} decay={2} />
    </group>
  );
}

export default function SkillOrbit() {
  const skillNodes: SkillNode[] = [
    { label: "Next.js", angle: 0, radius: 2.5, color: "#3b82f6" },
    { label: "React", angle: 0.8, radius: 3, color: "#60a5fa" },
    { label: "Three.js", angle: 1.6, radius: 2.8, color: "#93c5fd" },
    { label: "Python", angle: 2.4, radius: 3.2, color: "#fbbf24" },
    { label: "TypeScript", angle: 3.2, radius: 2.5, color: "#3b82f6" },
    { label: "Node.js", angle: 4.0, radius: 3.5, color: "#34d399" },
    { label: "AI", angle: 4.8, radius: 3, color: "#a78bfa" },
    { label: "PostgreSQL", angle: 5.6, radius: 4, color: "#60a5fa" },
    { label: "Tailwind", angle: 6.4, radius: 3.8, color: "#38bdf8" },
    { label: "GSAP", angle: 7.2, radius: 4.2, color: "#f472b6" },
  ];

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2, 7], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <OrbitingSkills skills={skillNodes} />
      </Canvas>
    </div>
  );
}
