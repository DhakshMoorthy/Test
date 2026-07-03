"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { smoothMat, PALETTE } from "@/lib/three/materials";

interface SmartCityProps {
  progress?: number;
}

function Building({
  position,
  height,
  smart,
}: {
  position: [number, number, number];
  height: number;
  smart: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current || !smart) return;
    const mat = ref.current.material as THREE.MeshPhysicalMaterial;
    mat.emissiveIntensity = 0.1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
  });

  return (
    <RoundedBox
      ref={ref}
      args={[0.28, height, 0.28]}
      radius={0.04}
      smoothness={3}
      position={[position[0], height / 2 + 0.02, position[2]]}
    >
      <primitive
        object={smoothMat(smart ? "#DBEAFE" : PALETTE.white, {
          emissive: smart ? PALETTE.accent : "#000000",
          emissiveIntensity: smart ? 0.1 : 0,
        })}
        attach="material"
      />
    </RoundedBox>
  );
}

export default function SmartCity({ progress = 0 }: SmartCityProps) {
  const buildings: { pos: [number, number, number]; height: number }[] = [
    { pos: [-1.2, 0, -0.8], height: 0.9 },
    { pos: [-0.4, 0, -0.3], height: 0.6 },
    { pos: [0.4, 0, -0.6], height: 1.1 },
    { pos: [1.1, 0, 0.1], height: 0.75 },
    { pos: [-0.8, 0, 0.7], height: 0.5 },
    { pos: [0.1, 0, 0.5], height: 1.3 },
    { pos: [0.9, 0, 0.8], height: 0.65 },
  ];

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.5, 48]} />
        <primitive object={smoothMat(PALETTE.floor)} attach="material" />
      </mesh>

      {buildings.map((b, i) => (
        <Building
          key={i}
          position={b.pos}
          height={b.height}
          smart={i / buildings.length < progress}
        />
      ))}

      {progress > 0.3 && (
        <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0.4]}>
          <planeGeometry args={[3, 0.04]} />
          <meshStandardMaterial
            color={PALETTE.accent}
            emissive={PALETTE.accent}
            emissiveIntensity={0.4}
            transparent
            opacity={0.5}
          />
        </mesh>
      )}
    </group>
  );
}
