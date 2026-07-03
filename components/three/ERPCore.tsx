"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Float, Text } from "@react-three/drei";
import * as THREE from "three";
import { DEPARTMENTS } from "@/lib/constants";
import { smoothMat, PALETTE } from "@/lib/three/materials";

function DepartmentNode({
  label,
  angle,
  connected,
}: {
  label: string;
  angle: number;
  connected: boolean;
}) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * 2;
  const z = Math.sin(rad) * 2;

  return (
    <Float speed={1} floatIntensity={connected ? 0.12 : 0.05}>
      <group position={[x, 0.12, z]}>
        <RoundedBox args={[0.5, 0.2, 0.5]} radius={0.06} smoothness={4}>
          <primitive
            object={smoothMat(connected ? PALETTE.accent : PALETTE.white, {
              emissive: connected ? PALETTE.accent : "#000000",
              emissiveIntensity: connected ? 0.2 : 0,
            })}
            attach="material"
          />
        </RoundedBox>
        <Text
          position={[0, 0.28, 0]}
          fontSize={0.09}
          color={connected ? PALETTE.accent : PALETTE.muted}
          anchorX="center"
        >
          {label}
        </Text>
      </group>
    </Float>
  );
}

function ConnectionBeam({ angle, active }: { angle: number; active: boolean }) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * 1;
  const z = Math.sin(rad) * 1;

  return (
    <mesh position={[x, 0.1, z]} rotation={[0, -rad + Math.PI / 2, Math.PI / 2]}>
      <cylinderGeometry args={[0.012, 0.012, 1, 12]} />
      <meshStandardMaterial
        color={active ? PALETTE.accent : "#E2E8F0"}
        emissive={active ? PALETTE.accent : "#000000"}
        emissiveIntensity={active ? 0.5 : 0}
        transparent
        opacity={active ? 0.85 : 0.35}
      />
    </mesh>
  );
}

interface ERPCoreProps {
  progress?: number;
  rotationProgress?: number;
}

export default function ERPCore({ progress = 0, rotationProgress = 0 }: ERPCoreProps) {
  const coreRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!coreRef.current) return;
    coreRef.current.rotation.y = rotationProgress * Math.PI * 0.5 + Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
  });

  const connectedCount = Math.floor(progress * DEPARTMENTS.length);

  return (
    <group ref={coreRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.8, 64]} />
        <primitive object={smoothMat(PALETTE.platform)} attach="material" />
      </mesh>

      <Float speed={1.2} floatIntensity={0.15}>
        <group position={[0, 0.35, 0]}>
          <RoundedBox args={[0.65, 0.65, 0.65]} radius={0.1} smoothness={6}>
            <primitive
              object={smoothMat(PALETTE.accent, {
                emissive: PALETTE.accent,
                emissiveIntensity: 0.3,
                metalness: 0.15,
              })}
              attach="material"
            />
          </RoundedBox>
          <Text position={[0, 0, 0.33]} fontSize={0.08} color="#fff" anchorX="center">
            Kannanware
          </Text>
          <Text position={[0, -0.1, 0.33]} fontSize={0.05} color="#BFDBFE" anchorX="center">
            ERP
          </Text>
        </group>
      </Float>

      {DEPARTMENTS.map((dept, i) => (
        <group key={dept.id}>
          <ConnectionBeam angle={dept.angle} active={i < connectedCount} />
          <DepartmentNode label={dept.label} angle={dept.angle} connected={i < connectedCount} />
        </group>
      ))}
    </group>
  );
}
