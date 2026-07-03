"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

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
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
  });

  return (
    <mesh ref={ref} position={[position[0], height / 2, position[2]]}>
      <boxGeometry args={[0.4, height, 0.4]} />
      <meshStandardMaterial
        color={smart ? "#1e40af" : "#334155"}
        emissive={smart ? "#2563EB" : "#000000"}
        emissiveIntensity={smart ? 0.3 : 0}
      />
    </mesh>
  );
}

function Drone({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.x = position[0] + Math.sin(t) * 1.5;
    ref.current.position.z = position[2] + Math.cos(t * 0.7) * 1;
    ref.current.position.y = position[1] + Math.sin(t * 2) * 0.2;
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[0.15, 0.05, 0.15]} />
        <meshStandardMaterial color="#2563EB" emissive="#2563EB" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.1, 0, 0.1]}>
        <boxGeometry args={[0.08, 0.01, 0.02]} />
        <meshStandardMaterial color="#60A5FA" />
      </mesh>
      <mesh position={[-0.1, 0, -0.1]}>
        <boxGeometry args={[0.08, 0.01, 0.02]} />
        <meshStandardMaterial color="#60A5FA" />
      </mesh>
    </group>
  );
}

function SolarPanel({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = -Math.PI / 6 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });

  return (
    <mesh ref={ref} position={position} rotation={[-Math.PI / 6, 0, 0]}>
      <boxGeometry args={[0.3, 0.02, 0.2]} />
      <meshStandardMaterial color="#1e3a8a" emissive="#2563EB" emissiveIntensity={0.2} />
    </mesh>
  );
}

export default function SmartCity({ progress = 0 }: SmartCityProps) {
  const smartThreshold = progress;

  const buildings: { pos: [number, number, number]; height: number }[] = [
    { pos: [-1.5, 0, -1], height: 1.2 },
    { pos: [-0.5, 0, -0.5], height: 0.8 },
    { pos: [0.5, 0, -1], height: 1.5 },
    { pos: [1.5, 0, 0], height: 1.0 },
    { pos: [-1, 0, 1], height: 0.6 },
    { pos: [0, 0, 0.5], height: 1.8 },
    { pos: [1, 0, 1.2], height: 0.9 },
  ];

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#0A0E14" />
      </mesh>

      {buildings.map((b, i) => (
        <Building
          key={i}
          position={b.pos}
          height={b.height}
          smart={i / buildings.length < smartThreshold}
        />
      ))}

      {progress > 0.3 && <Drone position={[0, 2, 0]} />}
      {progress > 0.5 && <SolarPanel position={[2, 0.3, -1.5]} />}
      {progress > 0.5 && <SolarPanel position={[2.3, 0.3, -1.2]} />}

      {/* Glowing delivery routes */}
      {progress > 0.2 && (
        <>
          <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0.5]}>
            <planeGeometry args={[4, 0.05]} />
            <meshStandardMaterial
              color="#2563EB"
              emissive="#2563EB"
              emissiveIntensity={0.8}
              transparent
              opacity={0.6}
            />
          </mesh>
          <mesh position={[0, 0.02, 0.8]} rotation={[-Math.PI / 2, 0, -0.3]}>
            <planeGeometry args={[3, 0.05]} />
            <meshStandardMaterial
              color="#2563EB"
              emissive="#2563EB"
              emissiveIntensity={0.8}
              transparent
              opacity={0.6}
            />
          </mesh>
        </>
      )}

      <ambientLight intensity={0.3 + progress * 0.3} />
      <directionalLight position={[5, 10, 5]} intensity={0.5 + progress * 0.3} />
    </group>
  );
}
