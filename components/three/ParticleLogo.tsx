"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleLogoProps {
  progress?: number;
}

export default function ParticleLogo({ progress = 0 }: ParticleLogoProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 2000;

  const { positions, targetPositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const target = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Random start positions (scattered in space)
      const r = 5 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Target: "K" shape approximation + circle
      const t = i / count;
      if (t < 0.4) {
        // Vertical line of K
        target[i * 3] = -0.5;
        target[i * 3 + 1] = (t / 0.4) * 1.5 - 0.75;
        target[i * 3 + 2] = 0;
      } else if (t < 0.7) {
        // Upper diagonal
        const lt = (t - 0.4) / 0.3;
        target[i * 3] = -0.5 + lt * 0.8;
        target[i * 3 + 1] = lt * 0.5;
        target[i * 3 + 2] = 0;
      } else {
        // Lower diagonal + ecosystem nodes
        const lt = (t - 0.7) / 0.3;
        const angle = lt * Math.PI * 2;
        const nr = 1.5 + Math.random() * 2;
        target[i * 3] = Math.cos(angle) * nr;
        target[i * 3 + 1] = Math.sin(angle) * nr * 0.5;
        target[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
      }
    }

    return { positions: pos, targetPositions: target };
  }, []);

  const currentPositions = useRef(new Float32Array(count * 3));
  currentPositions.current.set(positions);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < count * 3; i++) {
      arr[i] += (targetPositions[i] - arr[i]) * 0.02 * progress;
    }
    posAttr.needsUpdate = true;

    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[currentPositions.current, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#2563EB"
        size={0.03}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
