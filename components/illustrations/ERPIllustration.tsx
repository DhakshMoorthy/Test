"use client";

import { GOLD, SapScreen, Person, Forklift, Truck, DataFlow, WarehouseRack, FactoryBuilding } from "./shared";

export default function ERPIllustration({ progress = 1 }: { progress?: number }) {
  const conn = (threshold: number) => progress >= threshold;
  const op = (t: number) => (conn(t) ? 1 : 0.28);

  const departments = [
    { label: "Finance / CO",  x: 160,  y: 180, screen: "FI/CO", threshold: 0.05 },
    { label: "HR / Payroll",  x: 160,  y: 340, screen: "HCM",   threshold: 0.2  },
    { label: "Sales / CRM",   x: 420,  y: 120, screen: "SD/CRM", threshold: 0.35 },
    { label: "Manufacturing", x: 760,  y: 130, screen: "PP/QM",  threshold: 0.5  },
    { label: "Warehouse",     x: 980,  y: 240, screen: "WM/EWM", threshold: 0.65 },
    { label: "Procurement",   x: 980,  y: 380, screen: "MM/SRM", threshold: 0.78 },
    { label: "Analytics/BI",  x: 580,  y: 460, screen: "SAC",    threshold: 0.9  },
  ];

  return (
    <svg viewBox="0 0 1200 560" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="erpGlow" cx="50%" cy="50%" r="42%">
          <stop offset="0%" stopColor={GOLD.primary} stopOpacity="0.22" />
          <stop offset="100%" stopColor={GOLD.primary} stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="560" cy="280" rx="440" ry="190" fill="url(#erpGlow)" />
      <ellipse cx="560" cy="380" rx="420" ry="90" fill="#FFF8EB" stroke={GOLD.light} strokeWidth="1" opacity="0.6" />

      {/* Department nodes */}
      {departments.map((d) => (
        <g key={d.label} opacity={op(d.threshold)}>
          <rect x={d.x - 65} y={d.y - 30} width="130" height="60" rx="8" fill="#fff"
            stroke={conn(d.threshold) ? GOLD.primary : "#E5E7EB"} strokeWidth={conn(d.threshold) ? 2 : 1} />
          <SapScreen x={d.x - 55} y={d.y - 24} w={75} h={40} label={d.screen} />
          <text x={d.x} y={d.y + 42} textAnchor="middle" fill="#64748B" fontSize="7" fontWeight="700">{d.label}</text>
          {conn(d.threshold) && <DataFlow x1={d.x} y1={d.y} x2={560} y2={280} />}
        </g>
      ))}

      {/* Central hub */}
      <g className="animate-float">
        <circle cx="560" cy="280" r="88" fill={GOLD.primary} opacity="0.15" />
        <rect x="490" y="228" width="140" height="104" rx="16" fill={GOLD.primary} />
        <rect x="500" y="238" width="120" height="84" rx="12" fill={GOLD.dark} />
        <text x="560" y="268" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="900">KANNANWARE</text>
        <text x="560" y="286" textAnchor="middle" fill={GOLD.pale} fontSize="9" fontWeight="700">SAP S/4HANA Cloud</text>
        <text x="560" y="302" textAnchor="middle" fill={GOLD.glow} fontSize="7">● Real-time · Unified · AI-First</text>
      </g>

      {/* Joule AI */}
      {conn(0.5) && (
        <g>
          <circle cx="560" cy="175" r="36" fill="#0F0F0F" stroke={GOLD.primary} strokeWidth="2.5" />
          <text x="560" y="171" textAnchor="middle" fill={GOLD.primary} fontSize="9" fontWeight="800">SAP JOULE</text>
          <text x="560" y="184" textAnchor="middle" fill="#fff" fontSize="7">AI Copilot</text>
          <line x1="560" y1="211" x2="560" y2="228" stroke={GOLD.primary} strokeWidth="2" strokeDasharray="4 3" />
        </g>
      )}

      {/* Ground scene characters */}
      <Person x={300}  y={450} variant="manager" />
      <Person x={380}  y={452} variant="office" facing="left" />
      <Person x={680}  y={450} variant="worker" />
      <Person x={750}  y={450} variant="worker" facing="left" />
      <Forklift x={500} y={440} />
      <Truck x={600} y={440} />

      {/* Warehouse on right */}
      {conn(0.65) && (
        <>
          <WarehouseRack x={1050} y={260} />
          <WarehouseRack x={1110} y={260} />
        </>
      )}
      {/* Factory on right top */}
      {conn(0.5) && <FactoryBuilding x={840} y={90} w={120} h={80} />}

      {/* Progress glow ring */}
      <circle cx="560" cy="280" r="115" fill="none" stroke={GOLD.primary} strokeWidth="1.5" strokeDasharray="720"
        strokeDashoffset={720 - 720 * progress} strokeLinecap="round"
        style={{ transformOrigin: "560px 280px", transform: "rotate(-90deg)" }} opacity="0.6" />
    </svg>
  );
}
