"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleLogoProps {
  progress?: number;
}

export default function ParticleLogo({ progress = 0 }: ParticleLogoProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1200;

  const { targetPositions } = useMemo(() => {
    const target = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = i / count;
      if (t < 0.35) {
        target[i * 3] = -0.4;
        target[i * 3 + 1] = (t / 0.35) * 1.2 - 0.6;
        target[i * 3 + 2] = 0;
      } else if (t < 0.6) {
        const lt = (t - 0.35) / 0.25;
        target[i * 3] = -0.4 + lt * 0.7;
        target[i * 3 + 1] = lt * 0.4;
        target[i * 3 + 2] = 0;
      } else {
        const angle = ((t - 0.6) / 0.4) * Math.PI * 2;
        const r = 1.2 + Math.random() * 1.5;
        target[i * 3] = Math.cos(angle) * r;
        target[i * 3 + 1] = Math.sin(angle) * r * 0.4;
        target[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
      }
    }
    return { targetPositions: target };
  }, []);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    const speed = 0.015 * Math.max(progress, 0.2);

    for (let i = 0; i < count * 3; i++) {
      arr[i] += (targetPositions[i] - arr[i]) * speed;
    }
    posAttr.needsUpdate = true;
    pointsRef.current.rotation.y += 0.001;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#2563EB"
        size={0.025}
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
