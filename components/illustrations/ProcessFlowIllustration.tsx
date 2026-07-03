"use client";

import { G, DEFS } from "./shared";

const STEPS = [
  {
    label: "Customer",
    sub: "Places order online",
    icon: (c: string) => (
      <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round">
        <circle cx="0" cy="-4" r="4" fill={c} stroke="none" />
        <path d="M-7,5 C-7,1 7,1 7,5" fill={c} stroke="none" />
      </g>
    ),
  },
  {
    label: "Sales",
    sub: "SAP SD confirms",
    icon: (c: string) => (
      <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-8,-2 L-5,-8 H7 L5,-2 Z" />
        <circle cx="-1" cy="4" r="2.5" fill={c} stroke="none" />
        <circle cx="5" cy="4" r="2.5" fill={c} stroke="none" />
      </g>
    ),
  },
  {
    label: "Inventory",
    sub: "WM stock check",
    icon: (c: string) => (
      <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0,-9 L8,-4 L8,4 L0,9 L-8,4 L-8,-4 Z" />
        <path d="M0,-9 L0,9 M-8,-4 L8,-4" />
      </g>
    ),
  },
  {
    label: "Production",
    sub: "PP/QM processing",
    icon: (c: string) => (
      <g>
        <circle cx="0" cy="0" r="4" fill="none" stroke={c} strokeWidth="1.8" />
        {[0,1,2,3,4,5].map(i => (
          <rect key={i} x="-2" y="-9" width="4" height="4.5" rx="1" fill={c}
            transform={`rotate(${i * 60})`} />
        ))}
      </g>
    ),
  },
  {
    label: "Delivery",
    sub: "SAP TM dispatch",
    icon: (c: string) => (
      <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="-8" y="-3" width="10" height="8" rx="1" />
        <path d="M2,-3 L2,5 L8,5 L8,0 L5,-3 Z" />
        <circle cx="-4" cy="7" r="2.5" fill={c} stroke="none" />
        <circle cx="5" cy="7" r="2.5" fill={c} stroke="none" />
      </g>
    ),
  },
  {
    label: "Invoice",
    sub: "FI auto-generated",
    icon: (c: string) => (
      <g fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round">
        <rect x="-6" y="-9" width="12" height="15" rx="2" />
        <line x1="-3" y1="-3" x2="3" y2="-3" />
        <line x1="-3" y1="0" x2="3" y2="0" />
        <line x1="-3" y1="3" x2="1" y2="3" />
      </g>
    ),
  },
];

export default function ProcessFlowIllustration({ activeStep = 0 }: { activeStep?: number }) {
  const nodeSpacing = 88;
  const startX = 62;
  const midY = 160;

  return (
    <svg viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs dangerouslySetInnerHTML={{ __html: DEFS }} />
      <defs>
        <linearGradient id="connLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={G.p} />
          <stop offset="100%" stopColor={G.l} />
        </linearGradient>
      </defs>

      {/* ── CONNECTOR LINES ── */}
      {STEPS.slice(0,-1).map((_, i) => {
        const x1 = startX + i * nodeSpacing + 38;
        const x2 = startX + (i + 1) * nodeSpacing - 38;
        const done = i < activeStep;
        return (
          <g key={i}>
            <line x1={x1} y1={midY} x2={x2} y2={midY}
              stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
            {done && (
              <line x1={x1} y1={midY} x2={x2} y2={midY}
                stroke="url(#connLine)" strokeWidth="3" strokeLinecap="round" />
            )}
            {/* arrow head */}
            <path d={`M ${x2-2},${midY-5} L ${x2+4},${midY} L ${x2-2},${midY+5}`}
              fill="none" stroke={done ? G.p : "#D1D5DB"} strokeWidth="1.5" strokeLinecap="round" />
          </g>
        );
      })}

      {/* ── STEP NODES ── */}
      {STEPS.map((step, i) => {
        const cx = startX + i * nodeSpacing;
        const active = i === activeStep;
        const done = i < activeStep;
        const color = active || done ? G.d : "#94A3B8";
        return (
          <g key={step.label}>
            {/* outer ring (active glow) */}
            {active && <circle cx={cx} cy={midY} r="42" fill={G.pale} filter="url(#glowFilter)" opacity="0.6" />}
            {/* bg circle */}
            <circle cx={cx} cy={midY} r="36" fill={done ? G.soft : active ? "#fff" : "#FAFAFA"}
              stroke={active || done ? G.p : "#E5E7EB"} strokeWidth={active ? "2.5" : "1.5"}
              filter="url(#cardShadow)" />
            {/* inner disc */}
            <circle cx={cx} cy={midY} r="25" fill={active ? G.pale : "transparent"} />
            {/* icon */}
            <g transform={`translate(${cx},${midY})`}>{step.icon(color)}</g>
            {/* step number (top-right of circle) */}
            <circle cx={cx + 24} cy={midY - 24} r="10"
              fill={done ? G.p : active ? G.p : "#E5E7EB"} />
            <text x={cx + 24} y={midY - 20} textAnchor="middle"
              fill={done || active ? "#090909" : "#9CA3AF"} fontSize="7" fontWeight="800">{i + 1}</text>
            {/* label */}
            <text x={cx} y={midY + 52} textAnchor="middle" fill="#1F2937" fontSize="9" fontWeight="700">{step.label}</text>
            <text x={cx} y={midY + 65} textAnchor="middle" fill="#94A3B8" fontSize="7">{step.sub}</text>
          </g>
        );
      })}

      {/* SAP badge bottom */}
      <rect x="220" y="270" width="160" height="28" rx="14" fill={G.pale} stroke={G.p} strokeWidth="1" />
      <text x="300" y="288" textAnchor="middle" fill={G.d} fontSize="8" fontWeight="700">● Powered by SAP S/4HANA — Zero manual handoffs</text>
    </svg>
  );
}
