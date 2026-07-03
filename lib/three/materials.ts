import * as THREE from "three";

export const BRAND = {
  primary: "#faab18",
  light: "#fbbf24",
  dark: "#d4890a",
  pale: "#fff8eb",
  soft: "#fef3c7",
  glow: "#fcd34d",
} as const;

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
  floor: "#FFF8EB",
  platform: "#FEF3C7",
  wall: "#E8E8E8",
  accent: BRAND.primary,
  accentSoft: BRAND.light,
  warm: BRAND.dark,
  danger: "#EF4444",
  success: "#10B981",
  muted: "#64748B",
  white: "#FFFFFF",
} as const;
