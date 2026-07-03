"use client";

import { GOLD, SapScreen, Person } from "./shared";

const CAPABILITIES = [
  { x: 60,   y: 80,  label: "Demand Forecasting",     sub: "ML predicts demand ±2% accuracy", icon: "📈" },
  { x: 340,  y: 60,  label: "Risk Detection",          sub: "Flags anomalies before escalation", icon: "🛡" },
  { x: 620,  y: 80,  label: "Auto Approvals",          sub: "Joule approves POs in seconds",    icon: "⚡" },
  { x: 900,  y: 60,  label: "Cash Flow Prediction",    sub: "SAP FI predicts 90-day liquidity",  icon: "💵" },
  { x: 60,   y: 380, label: "Reconciliation Bot",      sub: "Zero-touch month-end close",        icon: "🔄" },
  { x: 340,  y: 390, label: "Inventory Optimiser",     sub: "Reduces overstock by 30%",          icon: "📦" },
  { x: 620,  y: 380, label: "Predictive Maintenance",  sub: "IoT + SAP PM — zero downtime",      icon: "🔧" },
  { x: 900,  y: 390, label: "Conversational Analytics",sub: "Ask SAP in plain English",          icon: "💬" },
];

export default function AIIllustration() {
  return (
    <svg viewBox="0 0 1200 580" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="aiGlow2" cx="50%" cy="42%" r="45%">
          <stop offset="0%" stopColor={GOLD.primary} stopOpacity="0.18" />
          <stop offset="100%" stopColor={GOLD.primary} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="580" fill="url(#aiGlow2)" />

      {/* ── CAPABILITY CARDS (arranged in 2 rows) ── */}
      {CAPABILITIES.map((c, i) => (
        <g key={i} className="animate-float" style={{ animationDelay: `${i * 0.25}s` }}>
          <rect x={c.x} y={c.y} width="230" height="90" rx="10"
            fill="#fff" stroke={GOLD.primary} strokeWidth="1.5"
            style={{ filter: "drop-shadow(0 4px 12px rgba(250,171,24,0.12))" }} />
          <text x={c.x + 16} y={c.y + 24} fill="#374151" fontSize="16">{c.icon}</text>
          <text x={c.x + 46} y={c.y + 26} fill="#1F2937" fontSize="9" fontWeight="800">{c.label}</text>
          <text x={c.x + 16} y={c.y + 44} fill="#64748B" fontSize="7.5">{c.sub}</text>
          {/* mini chart / bar */}
          {[0,1,2,3].map((b) => (
            <rect key={b} x={c.x + 16 + b * 20} y={c.y + 60 + (3 - b) * 4} width="14" height={12 + b * 5} rx="2"
              fill={GOLD.primary} opacity={0.35 + b * 0.15} />
          ))}
          <circle cx={c.x + 210} cy={c.y + 16} r="6" fill={GOLD.primary} />
          <text x={c.x + 210} y={c.y + 20} textAnchor="middle" fill="#090909" fontSize="7" fontWeight="800">AI</text>
        </g>
      ))}

      {/* ── CENTRAL SAP JOULE ROBOT ── */}
      <g className="animate-float" transform="translate(510, 130)" style={{ animationDelay: "0.1s" }}>
        {/* shadow */}
        <ellipse cx="85" cy="290" rx="90" ry="16" fill={GOLD.primary} opacity="0.18" />
        {/* legs */}
        <rect x="50" y="248" width="22" height="46" rx="8" fill="#374151" />
        <rect x="98" y="248" width="22" height="46" rx="8" fill="#374151" />
        {/* feet */}
        <rect x="42" y="285" width="30" height="12" rx="5" fill="#1F2937" />
        <rect x="98" y="285" width="30" height="12" rx="5" fill="#1F2937" />
        {/* body */}
        <rect x="30" y="160" width="110" height="95" rx="18" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="2" />
        {/* chest screen */}
        <rect x="44" y="174" width="82" height="52" rx="6" fill="#090909" />
        <text x="85" y="197" textAnchor="middle" fill={GOLD.primary} fontSize="8" fontWeight="800">SAP JOULE</text>
        <text x="85" y="210" textAnchor="middle" fill="#fff" fontSize="7">AI Copilot</text>
        <rect x="52" y="217" width="66" height="5" rx="2" fill={GOLD.primary} opacity="0.5" />
        {/* arms */}
        <rect x="-10" y="170" width="44" height="62" rx="12" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1.5" />
        <rect x="136" y="170" width="44" height="62" rx="12" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1.5" />
        {/* hands */}
        <circle cx="7"   cy="235" r="10" fill="#CBD5E1" />
        <circle cx="163" cy="235" r="10" fill="#CBD5E1" />
        {/* neck */}
        <rect x="68" y="138" width="34" height="26" rx="6" fill="#E5E7EB" />
        {/* head */}
        <rect x="34" y="68" width="102" height="78" rx="24" fill={GOLD.primary} />
        {/* visor */}
        <rect x="46" y="82" width="78" height="38" rx="12" fill="#090909" />
        {/* eyes */}
        <circle cx="70" cy="102" r="10" fill="#fff" />
        <circle cx="100" cy="102" r="10" fill="#fff" />
        <circle cx="70" cy="102" r="5" fill={GOLD.primary} />
        <circle cx="100" cy="102" r="5" fill={GOLD.primary} />
        <circle cx="72" cy="100" r="2" fill="#090909" />
        <circle cx="102" cy="100" r="2" fill="#090909" />
        {/* smile */}
        <path d="M 62 118 Q 85 130 108 118" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* antenna */}
        <line x1="85" y1="68" x2="85" y2="50" stroke={GOLD.primary} strokeWidth="3" />
        <circle cx="85" cy="45" r="7" fill={GOLD.primary} />
      </g>

      {/* SAP Analytics Cloud dashboard at bottom */}
      <SapScreen x={460} y={470} w={280} h={70} label="SAP Analytics Cloud — Live Dashboard" />
      {[0,1,2,3,4,5].map((b) => (
        <rect key={b} x={476 + b * 40} y={498 - b * 5} width="28" height={20 + b * 6} rx="2"
          fill={GOLD.primary} opacity={0.3 + b * 0.1} />
      ))}
      <text x="600" y={556} textAnchor="middle" fill="#64748B" fontSize="7" fontWeight="600">Revenue · Inventory · Headcount · Cash — unified in SAP</text>

      {/* People using AI */}
      <Person x={200} y={490} variant="manager" />
      <Person x={960} y={492} variant="office" facing="left" />
    </svg>
  );
}
