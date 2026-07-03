"use client";

import { G, DEFS } from "./shared";

const CARDS = [
  { x: 52,  y: 68,  label: "Predicting demand",     sub: "±2% accuracy with ML",     icon: "📈" },
  { x: 376, y: 68,  label: "Approving invoices",    sub: "Auto-approved in seconds",  icon: "✅" },
  { x: 52,  y: 290, label: "Optimizing inventory",  sub: "Reduces overstock 30%",     icon: "📦" },
  { x: 376, y: 290, label: "Monitoring cash flow",  sub: "90-day liquidity forecast",  icon: "💵" },
];

export default function AIIllustration() {
  const cx = 272, cy = 225, r = 72;

  return (
    <svg viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs dangerouslySetInnerHTML={{ __html: DEFS }} />
      <defs>
        <radialGradient id="orbGrad" cx="38%" cy="32%" r="60%">
          <stop offset="0%" stopColor={G.l} />
          <stop offset="55%" stopColor={G.p} />
          <stop offset="100%" stopColor={G.d} />
        </radialGradient>
        <radialGradient id="orbShine" cx="38%" cy="32%" r="40%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <filter id="orbGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="16" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── CONNECTOR LINES ── */}
      {CARDS.map((card, i) => {
        const cardCenterX = card.x + 100;
        const cardCenterY = card.y + 45;
        return (
          <line key={i}
            x1={cardCenterX} y1={cardCenterY}
            x2={cx} y2={cy}
            stroke={G.p} strokeWidth="1.2" strokeDasharray="5 4" opacity="0.5" />
        );
      })}

      {/* ── CAPABILITY CARDS ── */}
      {CARDS.map((card, i) => (
        <g key={i}>
          <rect x={card.x} y={card.y} width="200" height="88" rx="14"
            fill="#fff" filter="url(#cardShadow)" />
          <rect x={card.x} y={card.y} width="200" height="88" rx="14"
            fill="#fff" stroke={G.p} strokeWidth="1.2" />
          {/* icon bg */}
          <rect x={card.x + 14} y={card.y + 16} width="30" height="30" rx="8" fill={G.pale} />
          <text x={card.x + 29} y={card.y + 36} textAnchor="middle" fontSize="14">{card.icon}</text>
          {/* text */}
          <text x={card.x + 54} y={card.y + 29} fill="#1F2937" fontSize="9.5" fontWeight="800">{card.label}</text>
          <text x={card.x + 54} y={card.y + 43} fill="#94A3B8" fontSize="7.5">{card.sub}</text>
          {/* mini bar chart */}
          {[0,1,2,3].map(b => (
            <rect key={b} x={card.x + 14 + b * 14} y={card.y + 60 + (3-b)*3} width="10" height={10+b*4} rx="2"
              fill={G.p} opacity={0.35 + b * 0.18} />
          ))}
          {/* SAP tag */}
          <rect x={card.x + 140} y={card.y + 64} width="46" height="15" rx="7" fill={G.pale} />
          <text x={card.x + 163} y={card.y + 74} textAnchor="middle" fill={G.d} fontSize="6.5" fontWeight="700">SAP Joule</text>
        </g>
      ))}

      {/* ── CENTRAL ORB ── */}
      {/* outer glow */}
      <circle cx={cx} cy={cy} r={r + 22} fill={G.p} opacity="0.08" filter="url(#orbGlow)" />
      <circle cx={cx} cy={cy} r={r + 14} fill={G.soft} opacity="0.5" />
      {/* main orb */}
      <circle cx={cx} cy={cy} r={r} fill="url(#orbGrad)" filter="url(#cardShadow)" />
      {/* shine */}
      <circle cx={cx} cy={cy} r={r} fill="url(#orbShine)" />
      {/* ring */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#fff" strokeWidth="1" opacity="0.3" />
      {/* K letter */}
      <text x={cx} y={cy + 10} textAnchor="middle" fill="#fff" fontSize="52" fontWeight="900"
        style={{ fontFamily: "system-ui, sans-serif" }}>K</text>
      {/* label */}
      <text x={cx} y={cy + r + 20} textAnchor="middle" fill={G.d} fontSize="9" fontWeight="700">SAP Joule AI</text>

      {/* pulse rings */}
      {[1.35, 1.6, 1.9].map((scale, i) => (
        <circle key={i} cx={cx} cy={cy} r={r * scale}
          fill="none" stroke={G.p} strokeWidth="0.8"
          opacity={0.2 - i * 0.06}
          strokeDasharray={i % 2 === 0 ? "none" : "4 4"} />
      ))}
    </svg>
  );
}
