"use client";

import { GOLD } from "./shared";

export default function FinaleIllustration() {
  const rings = [140, 200, 270, 350];
  const nodeCounts = [6, 10, 14, 20];

  return (
    <svg viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="finGlow" cx="50%" cy="50%" r="45%">
          <stop offset="0%"   stopColor={GOLD.primary} stopOpacity="0.28" />
          <stop offset="60%"  stopColor={GOLD.primary} stopOpacity="0.06" />
          <stop offset="100%" stopColor={GOLD.primary} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1200" height="560" fill="url(#finGlow)" />

      {/* Orbit rings */}
      {rings.map((r, i) => (
        <circle key={i} cx="600" cy="280" r={r} fill="none"
          stroke={GOLD.primary} strokeWidth="0.8" opacity={0.2 + i * 0.05}
          strokeDasharray={i % 2 === 0 ? "none" : "6 5"} />
      ))}

      {/* Business nodes on orbits */}
      {rings.map((r, ri) =>
        Array.from({ length: nodeCounts[ri] }, (_, ni) => {
          const angle = (ni / nodeCounts[ri]) * Math.PI * 2;
          const nx = 600 + Math.cos(angle) * r;
          const ny = 280 + Math.sin(angle) * r;
          const labels = ["MFG","FIN","HR","WH","SAP","AI","CRM","SD","PP","TR","MM","CO","EWM","TM","GRC","HCM","PS","SAC","FI","QM"];
          const lbl = labels[(ri * 5 + ni) % labels.length];
          return (
            <g key={`${ri}-${ni}`} className="animate-float"
              style={{ animationDelay: `${(ri * 0.4 + ni * 0.15) % 3}s` }}>
              <line x1="600" y1="280" x2={nx} y2={ny}
                stroke={GOLD.primary} strokeWidth="0.5" opacity="0.2" />
              <circle cx={nx} cy={ny} r={ri === 0 ? 12 : ri === 1 ? 10 : ri === 2 ? 8 : 6}
                fill={GOLD.primary} opacity={0.55 + (ri * 0.1)} />
              <text x={nx} y={ny + 4} textAnchor="middle" fill="#090909"
                fontSize={ri === 0 ? 5 : 4} fontWeight="800">{lbl}</text>
            </g>
          );
        })
      )}

      {/* Central hub */}
      <circle cx="600" cy="280" r="88"  fill={GOLD.primary} opacity="0.15" />
      <circle cx="600" cy="280" r="72"  fill={GOLD.primary} opacity="0.25" />
      <circle cx="600" cy="280" r="56"  fill="#090909" />
      <text x="600" y="264" textAnchor="middle" fill={GOLD.primary} fontSize="16" fontWeight="900" letterSpacing="1">KANNANWARE</text>
      <text x="600" y="284" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">SAP · AI · Digital</text>
      <text x="600" y="298" textAnchor="middle" fill={GOLD.glow} fontSize="7" opacity="0.8">● 1000+ Enterprises Connected</text>

      {/* Industry labels around the perimeter */}
      {[
        { angle: -90, label: "Manufacturing" },
        { angle: -30, label: "Financial Services" },
        { angle:  30, label: "Healthcare" },
        { angle:  90, label: "Logistics" },
        { angle: 150, label: "Energy" },
        { angle: 210, label: "Retail" },
      ].map((item) => {
        const a = (item.angle * Math.PI) / 180;
        const r2 = 420;
        const lx = 600 + Math.cos(a) * r2;
        const ly = 280 + Math.sin(a) * r2;
        return (
          <g key={item.label}>
            <rect x={lx - 60} y={ly - 14} width="120" height="28" rx="14"
              fill={GOLD.pale} stroke={GOLD.primary} strokeWidth="1.5" />
            <text x={lx} y={ly + 5} textAnchor="middle" fill={GOLD.dark} fontSize="8" fontWeight="800">{item.label}</text>
          </g>
        );
      })}

      {/* Bottom tagline */}
      <text x="600" y="525" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="600">
        Transforming Businesses with Intelligent ERP &amp; AI
      </text>
    </svg>
  );
}
