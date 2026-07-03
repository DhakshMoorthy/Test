"use client";

import { GOLD } from "./shared";

export default function FinaleIllustration() {
  const nodes = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * Math.PI * 2;
    const r = 120 + (i % 3) * 30;
    return { x: 280 + Math.cos(angle) * r, y: 200 + Math.sin(angle) * r * 0.6 };
  });

  return (
    <svg viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="finaleGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GOLD.primary} stopOpacity="0.25" />
          <stop offset="100%" stopColor={GOLD.primary} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="560" height="400" fill="url(#finaleGlow)" />

      {nodes.map((n, i) => (
        <g key={i}>
          <line x1="280" y1="200" x2={n.x} y2={n.y} stroke={GOLD.primary} strokeWidth="0.5" opacity="0.3" />
          <circle cx={n.x} cy={n.y} r="4" fill={GOLD.primary} opacity="0.6" className="animate-float" style={{ animationDelay: `${i * 0.15}s` }} />
        </g>
      ))}

      <circle cx="280" cy="200" r="50" fill="#090909" stroke={GOLD.primary} strokeWidth="3" />
      <text x="280" y="198" textAnchor="middle" fill={GOLD.primary} fontSize="10" fontWeight="800">KANNANWARE</text>
      <text x="280" y="212" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="600">SAP · AI</text>

      <text x="280" y="270" textAnchor="middle" fill={GOLD.dark} fontSize="8" fontWeight="600">Digital Ecosystem</text>
    </svg>
  );
}
