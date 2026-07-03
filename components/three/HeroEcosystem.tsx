"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Float, Text } from "@react-three/drei";
import * as THREE from "three";
import { DEPARTMENTS } from "@/lib/constants";
import { smoothMat, PALETTE } from "@/lib/three/materials";

function DeptNode({
  label,
  angle,
  radius = 2.2,
}: {
  label: string;
  angle: number;
  radius?: number;
}) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const z = Math.sin(rad) * radius;

  return (
    <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.15}>
      <group position={[x, 0.15, z]}>
        <RoundedBox args={[0.55, 0.22, 0.55]} radius={0.06} smoothness={4}>
          <primitive object={smoothMat(PALETTE.white)} attach="material" />
        </RoundedBox>
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <primitive object={smoothMat(PALETTE.accent, { emissive: PALETTE.accent, emissiveIntensity: 0.4 })} attach="material" />
        </mesh>
        <Text
          position={[0, 0.42, 0]}
          fontSize={0.1}
          color={PALETTE.muted}
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    </Float>
  );
}

function ConnectionLine({ angle }: { angle: number }) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * 1.1;
  const z = Math.sin(rad) * 1.1;

  return (
    <mesh position={[x, 0.08, z]} rotation={[0, -rad + Math.PI / 2, Math.PI / 2]}>
      <cylinderGeometry args={[0.015, 0.015, 1.1, 12]} />
      <meshStandardMaterial
        color={PALETTE.accentSoft}
        emissive={PALETTE.accent}
        emissiveIntensity={0.3}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

export default function HeroEcosystem() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <circleGeometry args={[3, 64]} />
        <primitive object={smoothMat(PALETTE.platform)} attach="material" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[2.8, 3, 64]} />
        <meshStandardMaterial color={PALETTE.accentSoft} transparent opacity={0.25} />
      </mesh>

      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <group position={[0, 0.35, 0]}>
          <RoundedBox args={[0.7, 0.7, 0.7]} radius={0.12} smoothness={6}>
            <primitive
              object={smoothMat(PALETTE.accent, {
                emissive: PALETTE.accent,
                emissiveIntensity: 0.25,
                metalness: 0.2,
              })}
              attach="material"
            />
          </RoundedBox>
          <Text
            position={[0, 0, 0.36]}
            fontSize={0.07}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            ERP
          </Text>
        </group>
      </Float>

      {DEPARTMENTS.map((dept) => (
        <group key={dept.id}>
          <ConnectionLine angle={dept.angle} />
          <DeptNode label={dept.label} angle={dept.angle} />
        </group>
      ))}
    </group>
  );
}
