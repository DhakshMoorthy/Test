"use client";

import { GOLD, SapScreen } from "./shared";

export default function AIIllustration() {
  return (
    <svg viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="aiGlow" cx="50%" cy="40%" r="45%">
          <stop offset="0%" stopColor={GOLD.primary} stopOpacity="0.2" />
          <stop offset="100%" stopColor={GOLD.primary} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="560" height="400" fill="url(#aiGlow)" />

      {/* AI Robot character */}
      <g className="animate-float" transform="translate(230, 80)">
        <ellipse cx="50" cy="200" rx="70" ry="12" fill={GOLD.primary} opacity="0.2" />
        <rect x="20" y="100" width="60" height="70" rx="16" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2" />
        <rect x="30" y="60" width="40" height="45" rx="20" fill={GOLD.primary} />
        <circle cx="42" cy="78" r="5" fill="#fff" />
        <circle cx="58" cy="78" r="5" fill="#fff" />
        <circle cx="42" cy="78" r="2.5" fill="#090909" />
        <circle cx="58" cy="78" r="2.5" fill="#090909" />
        <rect x="38" y="88" width="24" height="4" rx="2" fill={GOLD.dark} />
        <rect x="5" y="110" width="18" height="40" rx="8" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1" />
        <rect x="77" y="110" width="18" height="40" rx="8" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1" />
        <rect x="30" y="170" width="15" height="35" rx="6" fill="#374151" />
        <rect x="55" y="170" width="15" height="35" rx="6" fill="#374151" />
        <text x="50" y="130" textAnchor="middle" fill={GOLD.dark} fontSize="6" fontWeight="700">SAP JOULE</text>
      </g>

      {/* Floating capability cards */}
      {[
        { x: 40, y: 60, label: "Demand\nForecast" },
        { x: 420, y: 70, label: "Risk\nDetection" },
        { x: 30, y: 250, label: "Auto\nApprovals" },
        { x: 430, y: 260, label: "Cost\nOptimize" },
      ].map((card, i) => (
        <g key={i} className="animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
          <rect x={card.x} y={card.y} width="100" height="55" rx="8" fill="#fff" stroke={GOLD.primary} strokeWidth="1.5" />
          <text x={card.x + 50} y={card.y + 20} textAnchor="middle" fill="#374151" fontSize="7" fontWeight="600">{card.label.split("\n")[0]}</text>
          <text x={card.x + 50} y={card.y + 30} textAnchor="middle" fill="#374151" fontSize="7" fontWeight="600">{card.label.split("\n")[1]}</text>
          <circle cx={card.x + 50} cy={card.y + 42} r="4" fill={GOLD.primary} />
        </g>
      ))}

      <SapScreen x={220} y={300} w={120} h={50} label="SAC Analytics" />
      <rect x={240} y={320} width="80" height="20" rx="2" fill={GOLD.pale} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={248 + i * 18} y={328 - i * 3} width="10" height={12 + i * 4} rx="1" fill={GOLD.primary} opacity={0.5 + i * 0.15} />
      ))}
    </svg>
  );
}
