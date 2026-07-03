"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { DEPARTMENTS } from "@/lib/constants";

interface ERPCoreProps {
  progress?: number;
  rotationProgress?: number;
}

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
  const x = Math.cos(rad) * 2.5;
  const z = Math.sin(rad) * 2.5;
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = 0.3 + Math.sin(state.clock.elapsedTime * 2 + angle) * 0.05;
  });

  return (
    <group position={[x, 0, z]}>
      <mesh ref={ref}>
        <boxGeometry args={[0.5, 0.3, 0.5]} />
        <meshStandardMaterial
          color={connected ? "#2563EB" : "#334155"}
          emissive={connected ? "#2563EB" : "#000000"}
          emissiveIntensity={connected ? 0.5 : 0}
        />
      </mesh>
      <Text
        position={[0, 0.35, 0]}
        fontSize={0.12}
        color={connected ? "#60A5FA" : "#64748b"}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
      {connected && (
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color="#60A5FA"
            emissive="#2563EB"
            emissiveIntensity={1}
          />
        </mesh>
      )}
    </group>
  );
}

function ConnectionBeam({
  angle,
  active,
}: {
  angle: number;
  active: boolean;
}) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * 1.25;
  const z = Math.sin(rad) * 1.25;

  return (
    <mesh position={[x, 0.5, z]} rotation={[0, -rad + Math.PI / 2, Math.PI / 2]}>
      <cylinderGeometry args={[0.02, 0.02, 1.25, 8]} />
      <meshStandardMaterial
        color={active ? "#2563EB" : "#1e293b"}
        emissive={active ? "#2563EB" : "#000000"}
        emissiveIntensity={active ? 0.8 : 0}
        transparent
        opacity={active ? 0.9 : 0.2}
      />
    </mesh>
  );
}

export default function ERPCore({ progress = 0, rotationProgress = 0 }: ERPCoreProps) {
  const coreRef = useRef<THREE.Group>(null);
  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!coreRef.current) return;
    coreRef.current.rotation.y = rotationProgress * Math.PI * 2;
    if (cubeRef.current) {
      cubeRef.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime) * 0.08;
      cubeRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const connectedCount = Math.floor(progress * DEPARTMENTS.length);

  return (
    <group ref={coreRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#0A0E14" />
      </mesh>

      {/* ERP Core Cube */}
      <group ref={cubeRef}>
        <mesh>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial
            color="#2563EB"
            emissive="#2563EB"
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <Text
          position={[0, 0, 0.41]}
          fontSize={0.1}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Kannanware
        </Text>
        <Text
          position={[0, -0.12, 0.41]}
          fontSize={0.06}
          color="#93c5fd"
          anchorX="center"
          anchorY="middle"
        >
          ERP
        </Text>
        <pointLight color="#2563EB" intensity={2} distance={3} />
      </group>

      {/* Department connections */}
      {DEPARTMENTS.map((dept, i) => (
        <group key={dept.id}>
          <ConnectionBeam angle={dept.angle} active={i < connectedCount} />
          <DepartmentNode
            label={dept.label}
            angle={dept.angle}
            connected={i < connectedCount}
          />
        </group>
      ))}
    </group>
  );
}
