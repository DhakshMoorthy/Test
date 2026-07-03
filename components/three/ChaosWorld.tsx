"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Float } from "@react-three/drei";
import * as THREE from "three";
import { smoothMat, PALETTE } from "@/lib/three/materials";

function AlertPulse({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.15;
    ref.current.scale.setScalar(s);
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.06, 16, 16]} />
      <primitive object={smoothMat(PALETTE.danger, { emissive: PALETTE.danger, emissiveIntensity: 0.6 })} attach="material" />
    </mesh>
  );
}

function FloatingDoc({ position, delay }: { position: [number, number, number]; delay: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime + delay;
    ref.current.position.y = position[1] + Math.sin(t * 1.5) * 0.12;
    ref.current.rotation.z = Math.sin(t) * 0.2;
  });
  return (
    <mesh ref={ref} position={position} rotation={[0.3, 0.2, 0.1]}>
      <planeGeometry args={[0.12, 0.16]} />
      <meshStandardMaterial color="#fff" side={THREE.DoubleSide} roughness={0.4} />
    </mesh>
  );
}

interface ChaosWorldProps {
  progress?: number;
}

export default function ChaosWorld({ progress = 0 }: ChaosWorldProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = progress * 0.2;
  });

  const docs = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        pos: [(Math.random() - 0.5) * 2, 0.4 + Math.random(), (Math.random() - 0.5) * 2] as [number, number, number],
        delay: i * 0.4,
      })),
    []
  );

  return (
    <group ref={groupRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.5, 48]} />
        <primitive object={smoothMat(PALETTE.floor)} attach="material" />
      </mesh>

      <RoundedBox args={[2.2, 0.08, 1.6]} radius={0.03} position={[0, 0.04, 0]} smoothness={4}>
        <primitive object={smoothMat("#E2E8F0")} attach="material" />
      </RoundedBox>

      {[[-0.6, 0.12, -0.3], [0.5, 0.12, 0.2], [-0.3, 0.12, 0.5]].map((pos, i) => (
        <RoundedBox key={i} args={[0.45, 0.06, 0.3]} radius={0.02} position={pos as [number, number, number]} smoothness={3}>
          <primitive object={smoothMat(PALETTE.white)} attach="material" />
        </RoundedBox>
      ))}

      {[[-0.5, 0.2, -0.2], [0.4, 0.2, 0.3], [0, 0.2, 0.6]].map((pos, i) => (
        <Float key={i} speed={1.5 + i * 0.2} floatIntensity={0.1}>
          <group position={pos as [number, number, number]}>
            <mesh position={[0, 0.12, 0]}>
              <capsuleGeometry args={[0.04, 0.12, 8, 16]} />
              <primitive object={smoothMat(PALETTE.muted)} attach="material" />
            </mesh>
            <mesh position={[0, 0.28, 0]}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <primitive object={smoothMat("#FCD34D")} attach="material" />
            </mesh>
          </group>
        </Float>
      ))}

      {docs.map((d, i) => (
        <FloatingDoc key={i} position={d.pos} delay={d.delay} />
      ))}

      <group position={[1.2, 0.1, -0.8]}>
        <RoundedBox args={[0.35, 0.12, 0.25]} radius={0.03} smoothness={3}>
          <primitive object={smoothMat(PALETTE.warm)} attach="material" />
        </RoundedBox>
      </group>

      <group position={[-1, 0, 0.9]}>
        {[0, 0.25, 0.5].map((y, i) => (
          <RoundedBox key={i} args={[0.22, 0.22, 0.22]} radius={0.04} position={[i * 0.05, 0.11 + y, i * 0.04]} smoothness={3}>
            <primitive object={smoothMat("#D97706", { roughness: 0.5 })} attach="material" />
          </RoundedBox>
        ))}
      </group>

      <AlertPulse position={[-0.8, 0.6, -0.5]} />
      <AlertPulse position={[0.6, 0.55, 0.4]} />
      <AlertPulse position={[0, 0.7, -0.8]} />
    </group>
  );
}
