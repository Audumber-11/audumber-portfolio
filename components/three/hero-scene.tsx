"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
  Icosahedron,
  Torus,
  Points,
  PointMaterial,
  Environment,
  Sparkles,
  Trail,
} from "@react-three/drei";
import * as THREE from "three";

function MouseRig({ children }: { children: React.ReactNode }) {
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.y * 0.4 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return <>{children}</>;
}

function AISphere() {
  const ref = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -state.clock.elapsedTime * 0.1;
      innerRef.current.rotation.z = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <group>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
        <Sphere ref={ref} args={[1.4, 96, 96]} scale={1.4}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.45}
            speed={1.6}
            roughness={0.15}
            metalness={0.85}
            emissive="#7c3aed"
            emissiveIntensity={0.35}
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.5}>
        <Icosahedron ref={innerRef} args={[1.7, 1]}>
          <meshStandardMaterial
            color="#ec4899"
            wireframe
            transparent
            opacity={0.35}
            emissive="#ec4899"
            emissiveIntensity={0.2}
          />
        </Icosahedron>
      </Float>

      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.6}>
        <Torus args={[2.4, 0.015, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial
            color="#a78bfa"
            emissive="#a78bfa"
            emissiveIntensity={1.2}
            toneMapped={false}
          />
        </Torus>
      </Float>

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
        <Torus
          args={[2.7, 0.012, 16, 100]}
          rotation={[Math.PI / 4, Math.PI / 3, 0]}
        >
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={1}
            toneMapped={false}
          />
        </Torus>
      </Float>
    </group>
  );
}

function ParticleCloud() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const r = 6 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function OrbitingNode({
  radius,
  speed,
  offset,
  color,
  size = 0.12,
}: {
  radius: number;
  speed: number;
  offset: number;
  color: string;
  size?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.elapsedTime * speed + offset;
      ref.current.position.set(
        Math.cos(t) * radius,
        Math.sin(t * 0.7) * 0.6,
        Math.sin(t) * radius
      );
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6], fov: 45 }}
    >
      <fog attach="fog" args={["#000000", 8, 18]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#a78bfa" />
      <pointLight position={[-10, -5, 5]} intensity={1} color="#ec4899" />
      <pointLight position={[0, 5, -5]} intensity={0.8} color="#22d3ee" />

      <MouseRig>
        <AISphere />
        <ParticleCloud />
        <Sparkles
          count={120}
          scale={10}
          size={2.5}
          speed={0.4}
          opacity={0.8}
          color="#a78bfa"
        />
        <Sparkles
          count={60}
          scale={8}
          size={3}
          speed={0.2}
          opacity={0.6}
          color="#ec4899"
        />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <OrbitingNode
            key={i}
            radius={3 + (i % 3) * 0.6}
            speed={0.3 + (i % 4) * 0.05}
            offset={(i / 6) * Math.PI * 2}
            color={["#a78bfa", "#ec4899", "#22d3ee", "#f59e0b", "#10b981", "#f0abfc"][i]}
            size={0.08 + (i % 3) * 0.04}
          />
        ))}
      </MouseRig>

      <Environment preset="city" />
    </Canvas>
  );
}
