"use client";

import { G, DEFS } from "./shared";

export default function FinaleIllustration() {
  const rings = [120, 180, 255];
  const nodeCounts = [6, 10, 16];
  const cx = 300, cy = 200;

  return (
    <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs dangerouslySetInnerHTML={{ __html: DEFS }} />
      <defs>
        <radialGradient id="ecosGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={G.p} stopOpacity="0.2" />
          <stop offset="100%" stopColor={G.p} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="coreGrad" cx="38%" cy="32%" r="60%">
          <stop offset="0%"   stopColor={G.l} />
          <stop offset="60%"  stopColor={G.p} />
          <stop offset="100%" stopColor={G.d} />
        </radialGradient>
      </defs>

      <rect width="600" height="400" fill="url(#ecosGlow)" />

      {/* orbit rings */}
      {rings.map((r, i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="none"
          stroke={G.p} strokeWidth="0.7" opacity={0.18 + i * 0.04}
          strokeDasharray={i === 1 ? "4 5" : "none"} />
      ))}

      {/* nodes on orbits */}
      {rings.map((r, ri) =>
        Array.from({ length: nodeCounts[ri] }, (_, ni) => {
          const angle = (ni / nodeCounts[ri]) * Math.PI * 2;
          const nx = cx + Math.cos(angle) * r;
          const ny = cy + Math.sin(angle) * r;
          const labels = ["FI","HR","SD","MM","PP","CRM","TM","WM","CO","TR","BTP","SAC","GRC","PS","HCM","QM","PM","RE","RAR","EWM","FBL","MDG"];
          const lbl = labels[(ri * 5 + ni) % labels.length];
          const nodeR = ri === 0 ? 13 : ri === 1 ? 10 : 8;
          return (
            <g key={`${ri}-${ni}`}>
              <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={G.p} strokeWidth="0.5" opacity="0.18" />
              <circle cx={nx} cy={ny} r={nodeR} fill={G.pale} stroke={G.p} strokeWidth="1.2" />
              <text x={nx} y={ny + 4} textAnchor="middle" fill={G.d} fontSize={ri === 0 ? 6 : 5} fontWeight="800">{lbl}</text>
            </g>
          );
        })
      )}

      {/* central orb */}
      <circle cx={cx} cy={cy} r="72" fill={G.p} opacity="0.12" />
      <circle cx={cx} cy={cy} r="56" fill="url(#coreGrad)" filter="url(#cardShadow)" />
      <text x={cx} y={cy + 8} textAnchor="middle" fill="#fff" fontSize="32" fontWeight="900">K</text>
      <text x={cx} y={cy + 25} textAnchor="middle" fill={G.pale} fontSize="7" fontWeight="700">KANNANWARE</text>

      {/* industry labels outside orbit */}
      {[
        { angle: -80,  label: "Manufacturing" },
        { angle: -10,  label: "Financial Svcs" },
        { angle:  60,  label: "Healthcare" },
        { angle: 130,  label: "Logistics" },
        { angle: 200,  label: "Energy" },
        { angle: 270,  label: "Retail" },
      ].map(({ angle, label }) => {
        const a = (angle * Math.PI) / 180;
        const lx = cx + Math.cos(a) * 318;
        const ly = cy + Math.sin(a) * 318;
        return (
          <g key={label}>
            <rect x={lx - 54} y={ly - 12} width="108" height="24" rx="12"
              fill={G.pale} stroke={G.p} strokeWidth="1.2" />
            <text x={lx} y={ly + 5} textAnchor="middle" fill={G.d} fontSize="8" fontWeight="800">{label}</text>
          </g>
        );
      })}
    </svg>
  );
}
