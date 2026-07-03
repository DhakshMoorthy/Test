import * as THREE from "three";

export function smoothMat(
  color: string,
  opts?: { metalness?: number; roughness?: number; emissive?: string; emissiveIntensity?: number }
) {
  return new THREE.MeshPhysicalMaterial({
    color,
    metalness: opts?.metalness ?? 0.08,
    roughness: opts?.roughness ?? 0.32,
    clearcoat: 0.4,
    clearcoatRoughness: 0.2,
    emissive: opts?.emissive ?? "#000000",
    emissiveIntensity: opts?.emissiveIntensity ?? 0,
  });
}

export const PALETTE = {
  floor: "#E8EDF5",
  platform: "#F1F5F9",
  wall: "#CBD5E1",
  accent: "#2563EB",
  accentSoft: "#93C5FD",
  warm: "#F59E0B",
  danger: "#EF4444",
  success: "#10B981",
  muted: "#64748B",
  white: "#FFFFFF",
} as const;
