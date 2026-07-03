"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DashboardGlobeProps {
  rotationSpeed?: number;
}

export default function DashboardGlobe({ rotationSpeed = 0.3 }: DashboardGlobeProps) {
  const globeRef = useRef<THREE.Group>(null);
  const dotsRef = useRef<THREE.Points>(null);

  const dotPositions = useRef<Float32Array | null>(null);

  if (!dotPositions.current) {
    const count = 200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 1.2;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi);
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    dotPositions.current = positions;
  }

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed;
    }
  });

  return (
    <group ref={globeRef} position={[2, 0.5, 0]}>
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#0A1628"
          emissive="#1e3a8a"
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
          wireframe
        />
      </mesh>

      <points ref={dotsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[dotPositions.current!, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#2563EB"
          size={0.04}
          transparent
          opacity={0.8}
        />
      </points>

      {/* SAP integration nodes */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i * Math.PI) / 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 1.5,
              Math.sin(angle * 0.5) * 0.3,
              Math.sin(angle) * 1.5,
            ]}
          >
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial
              color="#f59e0b"
              emissive="#f59e0b"
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}

      <pointLight color="#2563EB" intensity={0.5} distance={4} />
    </group>
  );
}
