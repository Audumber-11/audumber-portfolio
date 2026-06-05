"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Sphere({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const particles = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 0.5;
      positions[i * 3] = Math.sin(phi) * Math.cos(theta) * r;
      positions[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * r;
      positions[i * 3 + 2] = Math.cos(phi) * r;
      const c = new THREE.Color().setHSL(0.6 + Math.random() * 0.1, 0.8, 0.5);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      meshRef.current.rotation.y += 0.005;

      // Follow mouse
      const targetX = mouse.x * 0.3;
      const targetY = mouse.y * 0.2;
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    }
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 4;
      lightRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.3) * 4;
    }
  });

  return (
    <group>
      {/* Main sphere */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef} scale={1.5}>
          <icosahedronGeometry args={[1, 2]} />
          <MeshDistortMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            distort={0.15}
            speed={2}
            transparent
            opacity={0.95}
          />
        </mesh>
      </Float>

      {/* Orbiting particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles.positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[particles.colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          transparent
          opacity={0.8}
          vertexColors
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Glow light */}
      <pointLight ref={lightRef} color="#3b82f6" intensity={2} distance={10} decay={2} />
    </group>
  );
}

export default function AISphere() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div className="w-full h-full" onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <Sphere mouse={mouse.current} />
      </Canvas>
    </div>
  );
}
