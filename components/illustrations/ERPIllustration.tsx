"use client";

import { GOLD, SapScreen, Person, Forklift, Truck, DataFlow } from "./shared";

export default function ERPIllustration({ progress = 1 }: { progress?: number }) {
  const opacity = (connected: boolean) => (connected ? 1 : 0.35);

  const depts = [
    { label: "Finance", x: 120, y: 160, connected: progress > 0.1 },
    { label: "HR", x: 180, y: 120, connected: progress > 0.25 },
    { label: "Sales", x: 380, y: 120, connected: progress > 0.4 },
    { label: "CRM", x: 440, y: 160, connected: progress > 0.55 },
    { label: "Mfg", x: 440, y: 260, connected: progress > 0.7 },
    { label: "Warehouse", x: 380, y: 300, connected: progress > 0.8 },
    { label: "Procure", x: 120, y: 260, connected: progress > 0.9 },
  ];

  return (
    <svg viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <ellipse cx="280" cy="220" rx="200" ry="90" fill={GOLD.pale} stroke={GOLD.light} strokeWidth="1" />

      {depts.map((d) => (
        <g key={d.label} opacity={opacity(d.connected)}>
          <rect x={d.x - 30} y={d.y - 20} width="60" height="40" rx="6" fill="#fff" stroke={d.connected ? GOLD.primary : "#D1D5DB"} strokeWidth="1.5" />
          <SapScreen x={d.x - 20} y={d.y - 14} w={40} h={24} label={d.label.slice(0, 3).toUpperCase()} />
          <text x={d.x} y={d.y + 28} textAnchor="middle" fill="#64748B" fontSize="6" fontWeight="600">{d.label}</text>
          {d.connected && <DataFlow x1={d.x} y1={d.y} x2={280} y2={210} />}
        </g>
      ))}

      <g className="animate-float">
        <rect x="240" y="175" width="80" height="70" rx="10" fill={GOLD.primary} />
        <rect x="248" y="183" width="64" height="54" rx="8" fill={GOLD.dark} />
        <text x="280" y="205" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="800">KANNANWARE</text>
        <text x="280" y="220" textAnchor="middle" fill={GOLD.pale} fontSize="7" fontWeight="600">SAP S/4HANA</text>
        <text x="280" y="235" textAnchor="middle" fill="#fff" fontSize="5" opacity="0.8">Unified Core</text>
      </g>

      <Person x={200} y={320} variant="office" />
      <Person x={320} y={318} variant="manager" facing="left" />
      <Forklift x={250} y={300} />
      <Truck x={350} y={310} />

      {progress > 0.5 && (
        <>
          <circle cx="280" cy="140" r="16" fill="#090909" stroke={GOLD.primary} strokeWidth="2" />
          <text x="280" y="144" textAnchor="middle" fill={GOLD.primary} fontSize="5" fontWeight="700">AI</text>
        </>
      )}
    </svg>
  );
}
