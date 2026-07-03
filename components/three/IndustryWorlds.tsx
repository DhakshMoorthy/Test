"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { INDUSTRIES } from "@/lib/constants";

interface IndustryWorldProps {
  industryIndex?: number;
}

function ManufacturingWorld() {
  return (
    <group>
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1.5, 0.6, 1]} />
        <meshStandardMaterial color="#334155" />
      </mesh>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[-0.4 + i * 0.4, 0.7, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.5]} />
          <meshStandardMaterial color="#3B82F6" emissive="#2563EB" emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function RetailWorld() {
  return (
    <group>
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[1.2, 0.5, 0.8]} />
        <meshStandardMaterial color="#8B5CF6" />
      </mesh>
      <mesh position={[0, 0.6, 0.35]}>
        <boxGeometry args={[0.8, 0.15, 0.05]} />
        <meshStandardMaterial color="#a78bfa" emissive="#8B5CF6" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function HealthcareWorld() {
  return (
    <group>
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[1, 0.7, 0.8]} />
        <meshStandardMaterial color="#ecfdf5" />
      </mesh>
      <mesh position={[0, 0.75, 0.35]}>
        <boxGeometry args={[0.3, 0.3, 0.05]} />
        <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function ConstructionWorld() {
  return (
    <group>
      <mesh position={[-0.3, 0.4, 0]} rotation={[0, 0, 0.1]}>
        <boxGeometry args={[0.15, 0.8, 0.15]} />
        <meshStandardMaterial color="#F59E0B" />
      </mesh>
      <mesh position={[0.2, 0.25, 0]} rotation={[0, 0, -0.05]}>
        <boxGeometry args={[1, 0.5, 0.6]} />
        <meshStandardMaterial color="#78716c" />
      </mesh>
    </group>
  );
}

function LogisticsWorld() {
  return (
    <group>
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.8, 0.2, 0.3]} />
        <meshStandardMaterial color="#06B6D4" />
      </mesh>
      <mesh position={[0.5, 0.1, 0.2]}>
        <boxGeometry args={[0.4, 0.2, 0.25]} />
        <meshStandardMaterial color="#0891b2" />
      </mesh>
    </group>
  );
}

function AutomotiveWorld() {
  return (
    <group>
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[0.9, 0.24, 0.4]} />
        <meshStandardMaterial color="#EF4444" />
      </mesh>
      <mesh position={[0.35, 0.15, 0]}>
        <boxGeometry args={[0.2, 0.18, 0.35]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>
    </group>
  );
}

const WORLDS = [
  ManufacturingWorld,
  RetailWorld,
  HealthcareWorld,
  ConstructionWorld,
  LogisticsWorld,
  AutomotiveWorld,
];

export default function IndustryWorlds({ industryIndex = 0 }: IndustryWorldProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.x = -industryIndex * 4;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {INDUSTRIES.map((industry, i) => {
        const World = WORLDS[i];
        return (
          <group key={industry.id} position={[i * 4, 0, 0]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
              <planeGeometry args={[3, 3]} />
              <meshStandardMaterial color="#111820" />
            </mesh>
            <World />
            <pointLight
              position={[0, 2, 0]}
              color={industry.color}
              intensity={i === industryIndex ? 1 : 0.3}
              distance={3}
            />
          </group>
        );
      })}
    </group>
  );
}
