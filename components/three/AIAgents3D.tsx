"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Float } from "@react-three/drei";
import * as THREE from "three";
import { smoothMat, PALETTE } from "@/lib/three/materials";

function AIRobot() {
  const headRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!headRef.current) return;
    headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
  });

  return (
    <Float speed={1.2} floatIntensity={0.2}>
      <group ref={headRef} position={[0, 0.6, 0]}>
        <RoundedBox args={[0.5, 0.55, 0.4]} radius={0.12} smoothness={6} position={[0, 0.3, 0]}>
          <primitive object={smoothMat(PALETTE.white)} attach="material" />
        </RoundedBox>
        <mesh position={[0, 0.55, 0.15]}>
          <sphereGeometry args={[0.22, 24, 24]} />
          <primitive
            object={smoothMat(PALETTE.accent, {
              emissive: PALETTE.accent,
              emissiveIntensity: 0.15,
            })}
            attach="material"
          />
        </mesh>
        <mesh position={[-0.1, 0.58, 0.32]}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial color="#fff" emissive={PALETTE.accent} emissiveIntensity={1} />
        </mesh>
        <mesh position={[0.1, 0.58, 0.32]}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial color="#fff" emissive={PALETTE.accent} emissiveIntensity={1} />
        </mesh>
        <RoundedBox args={[0.35, 0.35, 0.25]} radius={0.08} position={[0, 0, 0]} smoothness={4}>
          <primitive object={smoothMat(PALETTE.accentSoft, { metalness: 0.1 })} attach="material" />
        </RoundedBox>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
          <cylinderGeometry args={[0.5, 0.55, 0.06, 32]} />
          <meshStandardMaterial
            color={PALETTE.accent}
            emissive={PALETTE.accent}
            emissiveIntensity={0.2}
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function AIAgents3D() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2, 48]} />
        <primitive object={smoothMat(PALETTE.platform)} attach="material" />
      </mesh>
      <AIRobot />
    </group>
  );
}
