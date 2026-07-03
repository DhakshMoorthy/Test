"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Paper({ position, delay }: { position: [number, number, number]; delay: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime + delay;
    ref.current.position.y = position[1] + Math.sin(t * 2) * 0.3;
    ref.current.rotation.x = Math.sin(t) * 0.5;
    ref.current.rotation.z = Math.cos(t * 1.5) * 0.3;
    ref.current.position.x = position[0] + Math.sin(t * 0.5) * 0.2;
  });
  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[0.15, 0.2]} />
      <meshStandardMaterial color="#f8fafc" side={THREE.DoubleSide} />
    </mesh>
  );
}

function Employee({ position, speed }: { position: [number, number, number]; speed: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.position.x = position[0] + Math.sin(t) * 0.8;
    ref.current.position.z = position[2] + Math.cos(t * 0.7) * 0.5;
  });
  return (
    <group ref={ref} position={position}>
      <mesh position={[0, 0.15, 0]}>
        <capsuleGeometry args={[0.06, 0.15, 4, 8]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>
      <mesh position={[0, 0.35, 0]}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
    </group>
  );
}

function Forklift({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3) * 0.02;
  });
  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[0.4, 0.15, 0.3]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
      <mesh position={[0.25, 0.2, 0]}>
        <boxGeometry args={[0.05, 0.3, 0.05]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
    </group>
  );
}

function Truck({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(Date.now() * 0.001) * 0.1;
  });
  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[0.6, 0.2, 0.25]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
      <mesh position={[0.35, 0.1, 0]}>
        <boxGeometry args={[0.15, 0.15, 0.2]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>
    </group>
  );
}

function InventoryBox({ position, height }: { position: [number, number, number]; height: number }) {
  return (
    <mesh position={[position[0], position[1] + height / 2, position[2]]}>
      <boxGeometry args={[0.3, height, 0.3]} />
      <meshStandardMaterial color="#854d0e" />
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
    const zoom = 1 + progress * 0.5;
    groupRef.current.scale.setScalar(zoom);
  });

  const papers = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        pos: [
          (Math.random() - 0.5) * 3,
          0.5 + Math.random() * 1.5,
          (Math.random() - 0.5) * 3,
        ] as [number, number, number],
        delay: i * 0.3,
      })),
    []
  );

  return (
    <group ref={groupRef}>
      {/* Ground / office floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      {/* Office building walls */}
      <mesh position={[0, 0.5, -2.5]}>
        <boxGeometry args={[5, 1, 0.1]} />
        <meshStandardMaterial color="#334155" />
      </mesh>
      <mesh position={[-2.5, 0.5, 0]}>
        <boxGeometry args={[0.1, 1, 5]} />
        <meshStandardMaterial color="#334155" />
      </mesh>
      <mesh position={[2.5, 0.5, 0]}>
        <boxGeometry args={[0.1, 1, 5]} />
        <meshStandardMaterial color="#334155" />
      </mesh>

      {/* Desks */}
      {[
        [-1, 0.1, -1],
        [1, 0.1, -1],
        [-1, 0.1, 1],
        [1, 0.1, 1],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <boxGeometry args={[0.6, 0.08, 0.4]} />
          <meshStandardMaterial color="#475569" />
        </mesh>
      ))}

      {/* Employees */}
      <Employee position={[-0.8, 0, -0.8]} speed={0.5} />
      <Employee position={[0.8, 0, 0.5]} speed={0.7} />
      <Employee position={[-0.5, 0, 1.2]} speed={0.4} />
      <Employee position={[1.2, 0, -0.5]} speed={0.6} />

      {/* Papers flying */}
      {papers.map((p, i) => (
        <Paper key={i} position={p.pos} delay={p.delay} />
      ))}

      {/* Forklifts waiting */}
      <Forklift position={[-1.8, 0.08, 2]} />
      <Forklift position={[1.8, 0.08, 2]} />

      {/* Trucks delayed */}
      <Truck position={[0, 0.1, 2.8]} />

      {/* Overflowing inventory */}
      <InventoryBox position={[-2, 0, -1.5]} height={0.8} />
      <InventoryBox position={[-2.1, 0, -1.3]} height={1.2} />
      <InventoryBox position={[-1.9, 0, -1.7]} height={1.0} />
      <InventoryBox position={[2, 0, 0.5]} height={1.5} />
      <InventoryBox position={[2.1, 0, 0.7]} height={0.9} />

      {/* Red warning lights */}
      <pointLight position={[0, 1.5, 0]} color="#ef4444" intensity={0.5 + Math.sin(Date.now() * 0.005) * 0.3} distance={4} />
    </group>
  );
}
