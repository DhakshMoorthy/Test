"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { AI_AGENTS } from "@/lib/constants";

interface AIAgents3DProps {
  activeIndex?: number;
}

function AIOrb({
  position,
  label,
  active,
  index,
}: {
  position: [number, number, number];
  label: string;
  active: boolean;
  index: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y =
      position[1] + Math.sin(t * 1.5 + index) * 0.15;
    ref.current.rotation.y = t * 0.5;
    if (ringRef.current && active) {
      ringRef.current.rotation.z = t * 2;
      ringRef.current.scale.setScalar(1 + Math.sin(t * 3) * 0.1);
    }
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <icosahedronGeometry args={[0.25, 1]} />
        <meshStandardMaterial
          color={active ? "#2563EB" : "#1e40af"}
          emissive={active ? "#2563EB" : "#1e3a8a"}
          emissiveIntensity={active ? 0.8 : 0.3}
          wireframe={!active}
          transparent
          opacity={active ? 1 : 0.6}
        />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[0.35, 0.02, 8, 32]} />
        <meshStandardMaterial
          color="#60A5FA"
          emissive="#2563EB"
          emissiveIntensity={active ? 1 : 0.2}
          transparent
          opacity={active ? 0.8 : 0.3}
        />
      </mesh>
      <Text
        position={[0, -0.5, 0]}
        fontSize={0.08}
        color={active ? "#93c5fd" : "#64748b"}
        anchorX="center"
        maxWidth={1.2}
        textAlign="center"
      >
        {label}
      </Text>
      {active && (
        <pointLight color="#2563EB" intensity={1} distance={2} />
      )}
    </group>
  );
}

export default function AIAgents3D({ activeIndex = 0 }: AIAgents3DProps) {
  const positions: [number, number, number][] = [
    [-2, 1, 0],
    [-1, 1.2, 1.2],
    [0, 1.5, 1.5],
    [1, 1.2, 1.2],
    [2, 1, 0],
    [0, 1, -1.5],
  ];

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#05070A" transparent opacity={0.5} />
      </mesh>

      {AI_AGENTS.map((agent, i) => (
        <AIOrb
          key={agent.id}
          position={positions[i]}
          label={agent.label}
          active={i === activeIndex}
          index={i}
        />
      ))}

      {/* Central AI hub */}
      <mesh position={[0, 0.5, 0]}>
        <octahedronGeometry args={[0.2]} />
        <meshStandardMaterial
          color="#2563EB"
          emissive="#2563EB"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}
