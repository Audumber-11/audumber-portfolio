"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Laptop({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const screenGlowRef = useRef<THREE.Mesh>(null);
  const lidRef = useRef<THREE.Group>(null);

  // Generate keyboard key positions
  const keys = useMemo(() => {
    const rows = 4;
    const cols = 10;
    const keyW = 0.08;
    const keyH = 0.06;
    const gap = 0.02;
    const startX = -(cols * (keyW + gap)) / 2 + keyW / 2;
    const startZ = -(rows * (keyH + gap)) / 2 + keyH / 2;
    const result: { x: number; z: number }[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        result.push({
          x: startX + c * (keyW + gap),
          z: startZ + r * (keyH + gap),
        });
      }
    }
    return result;
  }, []);

  // Screen code content (lines rendered as emissive strips)
  const codeLines = useMemo(() => {
    const lines: { y: number; width: number }[] = [];
    for (let i = 0; i < 12; i++) {
      lines.push({
        y: 0.35 - i * 0.055,
        width: 0.15 + Math.random() * 0.4,
      });
    }
    return lines;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Mouse reactive rotation
      const targetRotX = mouse.y * 0.15;
      const targetRotY = mouse.x * 0.25;
      groupRef.current.rotation.x +=
        (targetRotX - groupRef.current.rotation.x) * 0.03;
      groupRef.current.rotation.y +=
        (targetRotY - groupRef.current.rotation.y) * 0.03;
    }

    if (screenGlowRef.current) {
      // Pulse the screen glow
      const pulse = 0.8 + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
      (screenGlowRef.current.material as THREE.MeshBasicMaterial).opacity =
        pulse * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Ambient glow under laptop */}
      <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.5, 2.5]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.04}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* === BASE (Keyboard deck) === */}
      <group position={[0, -0.25, 0]}>
        {/* Main base */}
        <mesh>
          <boxGeometry args={[1.8, 0.06, 1.2]} />
          <meshPhysicalMaterial
            color="#1a1d24"
            metalness={0.9}
            roughness={0.3}
            envMapIntensity={0.5}
          />
        </mesh>

        {/* Keyboard well */}
        <mesh position={[0, 0.03, 0.1]}>
          <boxGeometry args={[1.3, 0.02, 0.7]} />
          <meshPhysicalMaterial
            color="#0d0f13"
            metalness={0.8}
            roughness={0.6}
          />
        </mesh>

        {/* Keys */}
        {keys.map((key, i) => (
          <mesh
            key={i}
            position={[key.x, 0.06, key.z + 0.1]}
          >
            <boxGeometry args={[0.075, 0.015, 0.055]} />
            <meshPhysicalMaterial
              color="#2a2d36"
              metalness={0.3}
              roughness={0.7}
              emissive="#3b82f6"
              emissiveIntensity={0.02 + Math.random() * 0.03}
            />
          </mesh>
        ))}

        {/* Trackpad */}
        <mesh position={[0, 0.03, -0.35]}>
          <boxGeometry args={[0.35, 0.01, 0.2]} />
          <meshPhysicalMaterial
            color="#252830"
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>

        {/* Front edge accent light */}
        <mesh position={[0, -0.01, 0.65]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.6, 0.005, 0.01]} />
          <meshBasicMaterial
            color="#3b82f6"
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>

      {/* === LID / SCREEN === */}
      <group ref={lidRef} position={[0, 0.35, 0.55]} rotation={[-0.15, 0, 0]}>
        {/* Lid shell */}
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[1.8, 0.8, 0.04]} />
          <meshPhysicalMaterial
            color="#1a1d24"
            metalness={0.9}
            roughness={0.2}
            envMapIntensity={0.8}
          />
        </mesh>

        {/* Screen bezel */}
        <mesh position={[0, 0.4, 0.025]}>
          <planeGeometry args={[1.65, 0.65]} />
          <meshPhysicalMaterial
            color="#0a0c10"
            metalness={0.5}
            roughness={0.8}
          />
        </mesh>

        {/* Screen display area */}
        <mesh position={[0, 0.4, 0.03]}>
          <planeGeometry args={[1.5, 0.55]} />
          <meshPhysicalMaterial
            color="#0d1117"
            emissive="#1a2332"
            emissiveIntensity={0.4}
            metalness={0.1}
            roughness={0.9}
          />
        </mesh>

        {/* Code lines on screen */}
        {codeLines.map((line, i) => (
          <mesh
            key={i}
            position={[
              -0.55 + line.width / 2,
              0.4 + line.y,
              0.035,
            ]}
          >
            <planeGeometry args={[line.width, 0.015]} />
            <meshBasicMaterial
              color={
                i % 3 === 0
                  ? "#7c3aed"
                  : i % 3 === 1
                  ? "#3b82f6"
                  : "#22c55e"
              }
              transparent
              opacity={0.4 + Math.random() * 0.3}
            />
          </mesh>
        ))}

        {/* Screen glow/light spill */}
        <mesh
          ref={screenGlowRef}
          position={[0, 0.4, -0.02]}
        >
          <planeGeometry args={[1.8, 0.9]} />
          <meshBasicMaterial
            color="#3b82f6"
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Top edge accent */}
        <mesh position={[0, 0.82, 0]}>
          <boxGeometry args={[0.3, 0.01, 0.01]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.5} />
        </mesh>

        {/* Camera dot */}
        <mesh position={[0, 0.78, 0.025]}>
          <sphereGeometry args={[0.012, 8, 8]} />
          <meshBasicMaterial color="#1a1d24" />
        </mesh>
      </group>

      {/* === HINGE === */}
      <mesh position={[0, 0.08, 0.55]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 1.6, 16]} />
        <meshPhysicalMaterial
          color="#1a1d24"
          metalness={0.9}
          roughness={0.3}
        />
      </mesh>

      {/* === Floating particles around laptop === */}
      {Array.from({ length: 30 }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const radius = 1.2 + Math.random() * 0.8;
        const heightOffset = (Math.random() - 0.5) * 1.5;
        const size = 0.005 + Math.random() * 0.01;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle + i) * radius,
              heightOffset,
              Math.sin(angle + i) * radius,
            ]}
          >
            <sphereGeometry args={[size, 6, 6]} />
            <meshBasicMaterial
              color="#3b82f6"
              transparent
              opacity={0.2 + Math.random() * 0.3}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function FloatingLaptop() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div className="w-full h-full" onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: [0, 0.2, 4.5], fov: 35 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <directionalLight position={[-3, 2, -2]} intensity={0.2} color="#3b82f6" />
        <pointLight position={[0, 3, 2]} intensity={0.5} color="#3b82f6" />
        <Float
          speed={1.2}
          rotationIntensity={0.04}
          floatIntensity={0.3}
        >
          <Laptop mouse={mouse.current} />
        </Float>
      </Canvas>
    </div>
  );
}
