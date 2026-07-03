"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { INDUSTRIES } from "@/lib/constants";
import { smoothMat, PALETTE } from "@/lib/three/materials";

function MiniWorld({ color }: { color: string }) {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.1, 32]} />
        <primitive object={smoothMat(PALETTE.platform)} attach="material" />
      </mesh>
      <RoundedBox args={[0.6, 0.35, 0.45]} radius={0.05} position={[0, 0.2, 0]} smoothness={4}>
        <primitive object={smoothMat(color, { roughness: 0.4 })} attach="material" />
      </RoundedBox>
      <mesh position={[0, 0.45, 0.2]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <primitive object={smoothMat(color, { emissive: color, emissiveIntensity: 0.4 })} attach="material" />
      </mesh>
    </group>
  );
}

interface IndustryWorldProps {
  industryIndex?: number;
}

export default function IndustryWorlds({ industryIndex = 0 }: IndustryWorldProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      -industryIndex * 2.8,
      0.08
    );
  });

  return (
    <group ref={groupRef}>
      {INDUSTRIES.map((industry, i) => (
        <group key={industry.id} position={[i * 2.8, 0, 0]}>
          <MiniWorld color={industry.color} />
          <pointLight
            position={[0, 1.5, 0]}
            color={industry.color}
            intensity={i === industryIndex ? 0.6 : 0.15}
            distance={3}
          />
        </group>
      ))}
    </group>
  );
}
