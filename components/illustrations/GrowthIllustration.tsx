"use client";

import { GOLD, Person, Truck, SapScreen, FactoryBuilding } from "./shared";

export default function GrowthIllustration({ progress = 0.5 }: { progress?: number }) {
  const p = Math.max(0, Math.min(1, progress));

  const buildings = [
    { x:  80, h:  80, w: 55 },
    { x: 170, h: 130, w: 60 },
    { x: 265, h:  65, w: 50 },
    { x: 350, h: 155, w: 65 },
    { x: 450, h:  90, w: 55 },
    { x: 540, h: 170, w: 70 },
    { x: 650, h:  80, w: 55 },
    { x: 740, h: 140, w: 65 },
    { x: 840, h: 100, w: 58 },
    { x: 935, h: 120, w: 60 },
    { x:1030, h:  75, w: 52 },
    { x:1120, h: 105, w: 55 },
  ];
  const groundY = 420;

  return (
    <svg viewBox="0 0 1240 540" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="100%" stopColor="#FFFCF7" />
        </linearGradient>
      </defs>
      <rect width="1240" height="540" fill="url(#skyGrad)" />

      {/* Sun / AI node in sky */}
      {p > 0.3 && (
        <g className="animate-float">
          <circle cx="1100" cy="80" r="44" fill="#FFF8EB" stroke={GOLD.primary} strokeWidth="2" />
          <circle cx="1100" cy="80" r="30" fill={GOLD.primary} opacity="0.3" />
          <text x="1100" y="74" textAnchor="middle" fill={GOLD.dark} fontSize="9" fontWeight="800">SAP</text>
          <text x="1100" y="88" textAnchor="middle" fill={GOLD.dark} fontSize="9" fontWeight="700">JOULE</text>
        </g>
      )}

      {/* AI drone fleet */}
      {p > 0.4 && [200,420,680,900].map((dx, i) => (
        <g key={i} className="animate-float" style={{ animationDelay: `${i * 0.6}s` }}
          transform={`translate(${dx}, ${60 + i * 18})`}>
          <rect x="-22" y="-6" width="44" height="12" rx="4" fill="#374151" />
          <line x1="-30" y1="-2" x2="-46" y2="-10" stroke="#9CA3AF" strokeWidth="2" />
          <line x1="-30" y1="2"  x2="-46" y2="10"  stroke="#9CA3AF" strokeWidth="2" />
          <line x1="30"  y1="-2" x2="46"  y2="-10" stroke="#9CA3AF" strokeWidth="2" />
          <line x1="30"  y1="2"  x2="46"  y2="10"  stroke="#9CA3AF" strokeWidth="2" />
          <circle cx="0" cy="2" r="5" fill={GOLD.primary} />
          <text x="0" y="6" textAnchor="middle" fill="#090909" fontSize="4" fontWeight="800">IoT</text>
        </g>
      ))}

      {/* Buildings */}
      {buildings.map((b, i) => {
        const smart = i / buildings.length < p;
        return (
          <g key={i}>
            {/* building body */}
            <rect x={b.x} y={groundY - b.h} width={b.w} height={b.h} rx="4"
              fill={smart ? "#FFF8EB" : "#F3F4F6"}
              stroke={smart ? GOLD.primary : "#D1D5DB"} strokeWidth={smart ? 1.5 : 1} />
            {/* windows grid */}
            {Array.from({ length: Math.min(4, Math.floor(b.h / 25)) }, (_, row) =>
              [0, 1].map((col) => (
                <rect key={`${row}-${col}`}
                  x={b.x + 8 + col * (b.w / 2 - 6)}
                  y={groundY - b.h + 12 + row * 22}
                  width={b.w / 2 - 12} height={14} rx="2"
                  fill={smart ? GOLD.pale : "#E5E7EB"} opacity={smart ? 0.9 : 0.6} />
              ))
            )}
            {/* SAP IoT badge on smart buildings */}
            {smart && (
              <>
                <rect x={b.x + 4} y={groundY - b.h + 4} width={b.w - 8} height="14" rx="3"
                  fill={GOLD.primary} opacity="0.8" />
                <text x={b.x + b.w / 2} y={groundY - b.h + 14} textAnchor="middle"
                  fill="#090909" fontSize="5.5" fontWeight="800">SAP IoT</text>
              </>
            )}
            {/* Data beam to sky */}
            {smart && p > 0.5 && (
              <line x1={b.x + b.w / 2} y1={groundY - b.h} x2="1100" y2="80"
                stroke={GOLD.primary} strokeWidth="0.6" opacity="0.25" />
            )}
          </g>
        );
      })}

      {/* Solar panels */}
      {p > 0.55 && [350, 540, 740].map((sx, i) => (
        <g key={i} transform={`translate(${sx}, ${groundY - 175})`}>
          {[0,1,2,3].map((j) => (
            <rect key={j} x={j * 22} y="0" width="18" height="12" rx="2"
              fill={GOLD.dark} transform="rotate(-20, 0, 0)" opacity="0.75" />
          ))}
        </g>
      ))}

      {/* Factory */}
      <FactoryBuilding x={60} y={260} w={80} h={60} />

      {/* Ground road */}
      <rect x="0" y={groundY} width="1240" height="60" fill="#F1F5F9" />
      <line x1="0" y1={groundY} x2="1240" y2={groundY} stroke="#E2E8F0" strokeWidth="1.5" />

      {/* Road markings */}
      {Array.from({ length: 12 }, (_, i) => (
        <rect key={i} x={30 + i * 100} y={groundY + 28} width="60" height="5" rx="2"
          fill="#fff" opacity="0.6" />
      ))}

      {/* Trucks with data trails */}
      <Truck x={120} y={groundY + 10} />
      <Truck x={380} y={groundY + 10} />
      <Truck x={640} y={groundY + 10} />
      <Truck x={900} y={groundY + 10} />

      {/* Glowing route */}
      {p > 0.25 && (
        <path d={`M 60 ${groundY + 32} Q 400 ${groundY + 20} 700 ${groundY + 30} T 1180 ${groundY + 32}`}
          stroke={GOLD.primary} strokeWidth="2.5" fill="none" className="animate-dash" opacity="0.55" />
      )}

      {/* People on street */}
      <Person x={250} y={groundY + 50} variant="office" />
      <Person x={500} y={groundY + 50} variant="manager" facing="left" />
      <Person x={800} y={groundY + 50} variant="worker" />
      <Person x={1050} y={groundY + 50} variant="office" facing="left" />

      {/* Live metrics floating */}
      {p > 0.6 && [
        { x: 110, y: 190, label: "↓30% Costs" },
        { x: 350, y: 155, label: "↑45% Efficiency" },
        { x: 590, y: 145, label: "↑60% Speed" },
        { x: 810, y: 160, label: "↑35% CSAT" },
        { x: 1030, y: 175, label: "↓70% Manual" },
      ].map((m, i) => (
        <g key={i} className="animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
          <rect x={m.x} y={m.y} width="100" height="24" rx="12" fill={GOLD.primary} />
          <text x={m.x + 50} y={m.y + 16} textAnchor="middle" fill="#090909" fontSize="8" fontWeight="800">{m.label}</text>
        </g>
      ))}

      {/* SAP dashboard card */}
      <SapScreen x={440} y={groundY - 55} w={180} h={45} label="SAP Fiori — Smart Ops" />
    </svg>
  );
}
