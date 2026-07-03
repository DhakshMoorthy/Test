"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ORDER_STEPS } from "@/lib/constants";

interface OrderFlowProps {
  activeStep?: number;
}

function DataLine({
  from,
  to,
  active,
}: {
  from: [number, number, number];
  to: [number, number, number];
  active: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const mid: [number, number, number] = [
    (from[0] + to[0]) / 2,
    0.5,
    (from[2] + to[2]) / 2,
  ];
  const length = Math.sqrt(
    Math.pow(to[0] - from[0], 2) + Math.pow(to[2] - from[2], 2)
  );
  const angle = Math.atan2(to[2] - from[2], to[0] - from[0]);

  useFrame((state) => {
    if (!ref.current || !active) return;
    ref.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.1;
  });

  return (
    <mesh
      ref={ref}
      position={mid}
      rotation={[0, -angle, Math.PI / 2]}
    >
      <cylinderGeometry args={[0.03, 0.03, length, 8]} />
      <meshStandardMaterial
        color={active ? "#2563EB" : "#1e293b"}
        emissive={active ? "#2563EB" : "#000000"}
        emissiveIntensity={active ? 1 : 0}
        transparent
        opacity={active ? 0.9 : 0.15}
      />
    </mesh>
  );
}

function Station({
  position,
  active,
  completed,
}: {
  position: [number, number, number];
  label: string;
  active: boolean;
  completed: boolean;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current || !active) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3) * 0.05;
  });

  const color = completed ? "#10B981" : active ? "#2563EB" : "#334155";

  return (
    <group ref={ref} position={position}>
      <mesh>
        <cylinderGeometry args={[0.2, 0.25, 0.15, 6]} />
        <meshStandardMaterial
          color={color}
          emissive={active || completed ? color : "#000000"}
          emissiveIntensity={active ? 0.8 : completed ? 0.4 : 0}
        />
      </mesh>
      {(active || completed) && (
        <pointLight color={color} intensity={0.5} distance={1.5} />
      )}
    </group>
  );
}

export default function OrderFlow({ activeStep = 0 }: OrderFlowProps) {
  const positions: [number, number, number][] = [
    [-3, 0.1, 0],
    [-2, 0.1, 1],
    [-0.5, 0.1, 1.5],
    [0.5, 0.1, 1],
    [1.5, 0.1, 0.5],
    [2.5, 0.1, 0],
    [3, 0.1, -1],
    [2, 0.1, -1.5],
    [0, 0.1, -2],
  ];

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="#0A0E14" />
      </mesh>

      {ORDER_STEPS.map((step, i) => (
        <Station
          key={step.id}
          position={positions[i]}
          label={step.label}
          active={i === activeStep}
          completed={i < activeStep}
        />
      ))}

      {positions.slice(0, -1).map((from, i) => (
        <DataLine
          key={i}
          from={from}
          to={positions[i + 1]}
          active={i < activeStep}
        />
      ))}

      {/* Moving package */}
      {activeStep < positions.length && (
        <MovingPackage
          from={positions[Math.max(0, activeStep - 1)]}
          to={positions[activeStep]}
        />
      )}
    </group>
  );
}

function MovingPackage({
  from,
  to,
}: {
  from: [number, number, number];
  to: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = (Math.sin(state.clock.elapsedTime * 2) + 1) / 2;
    ref.current.position.x = from[0] + (to[0] - from[0]) * t;
    ref.current.position.z = from[2] + (to[2] - from[2]) * t;
    ref.current.position.y = 0.3 + Math.sin(state.clock.elapsedTime * 4) * 0.1;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.15, 0.15, 0.15]} />
      <meshStandardMaterial
        color="#f59e0b"
        emissive="#f59e0b"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}
