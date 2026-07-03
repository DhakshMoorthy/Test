"use client";

import { G, DEFS } from "./shared";

export default function GrowthIllustration({ progress = 0.5 }: { progress?: number }) {
  const p = Math.max(0, Math.min(1, progress));
  const groundY = 360;

  const buildings = [
    { x: 52,  h: 95,  w: 44 }, { x: 116, h: 145, w: 50 },
    { x: 185, h: 72,  w: 42 }, { x: 242, h: 180, w: 56 },
    { x: 316, h: 90,  w: 44 }, { x: 372, h: 158, w: 52 },
    { x: 437, h: 82,  w: 44 }, { x: 495, h: 130, w: 50 },
  ];

  return (
    <svg viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs dangerouslySetInnerHTML={{ __html: DEFS }} />
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="100%" stopColor="#FFF8EB" />
        </linearGradient>
      </defs>
      <rect width="600" height="420" fill="url(#skyGrad)" />

      {/* Central K orb in sky */}
      <circle cx="300" cy="90" r="52" fill={G.p} opacity="0.1" />
      <circle cx="300" cy="90" r="40" fill={G.p} opacity="0.18" />
      <circle cx="300" cy="90" r="30" fill="#090909" />
      <text x="300" y="98" textAnchor="middle" fill={G.p} fontSize="22" fontWeight="900">K</text>

      {/* Connection lines from K to smart buildings */}
      {buildings.map((b, i) => {
        const smart = i / buildings.length < p;
        if (!smart) return null;
        return (
          <line key={i} x1="300" y1="90" x2={b.x + b.w / 2} y2={groundY - b.h}
            stroke={G.p} strokeWidth="0.8" opacity="0.25" strokeDasharray="5 4" />
        );
      })}

      {/* Drone fleet */}
      {p > 0.4 && [160, 310, 460].map((dx, i) => (
        <g key={i} className="animate-float" style={{ animationDelay: `${i * 0.7}s` }}
          transform={`translate(${dx}, ${110 + i * 12})`}>
          <rect x="-14" y="-4" width="28" height="8" rx="3" fill="#374151" />
          <line x1="-20" y1="-1" x2="-28" y2="-6" stroke="#9CA3AF" strokeWidth="1.5" />
          <line x1="-20" y1="1"  x2="-28" y2="6"  stroke="#9CA3AF" strokeWidth="1.5" />
          <line x1="20"  y1="-1" x2="28"  y2="-6" stroke="#9CA3AF" strokeWidth="1.5" />
          <line x1="20"  y1="1"  x2="28"  y2="6"  stroke="#9CA3AF" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="4" fill={G.p} />
        </g>
      ))}

      {/* Buildings */}
      {buildings.map((b, i) => {
        const smart = i / buildings.length < p;
        const winRows = Math.max(2, Math.floor(b.h / 28));
        return (
          <g key={i}>
            {/* building */}
            <rect x={b.x} y={groundY - b.h} width={b.w} height={b.h} rx="3"
              fill={smart ? G.pale : "#F3F4F6"}
              stroke={smart ? G.p : "#D1D5DB"} strokeWidth={smart ? 1.5 : 1} />
            {/* windows */}
            {Array.from({ length: winRows }, (_, row) => [0, 1].map(col => (
              <rect key={`${row}-${col}`}
                x={b.x + 6 + col * (b.w / 2 - 5)}
                y={groundY - b.h + 12 + row * 24}
                width={b.w / 2 - 10} height="14" rx="2"
                fill={smart ? G.l : "#E5E7EB"} opacity={smart ? 0.7 : 0.5} />
            )))}
            {/* IoT badge */}
            {smart && (
              <g>
                <rect x={b.x + 4} y={groundY - b.h + 4} width={b.w - 8} height="13" rx="3" fill={G.p} />
                <text x={b.x + b.w / 2} y={groundY - b.h + 13} textAnchor="middle"
                  fill="#090909" fontSize="5" fontWeight="800">SAP IoT</text>
              </g>
            )}
          </g>
        );
      })}

      {/* Solar panels on roofs */}
      {p > 0.55 && [242, 372].map((bx, i) => (
        <g key={i} transform={`translate(${bx + 4}, ${groundY - buildings[i === 0 ? 3 : 5].h - 10})`}>
          {[0,1,2].map(j => (
            <rect key={j} x={j * 14} y="0" width="11" height="8" rx="1"
              fill={G.d} opacity="0.8" transform="rotate(-15,0,0)" />
          ))}
        </g>
      ))}

      {/* Road */}
      <rect x="0" y={groundY} width="600" height="55" fill="#F1F5F9" />
      <line x1="0" y1={groundY} x2="600" y2={groundY} stroke="#E2E8F0" strokeWidth="1.5" />
      {Array.from({ length: 6 }, (_, i) => (
        <rect key={i} x={25 + i * 96} y={groundY + 25} width="60" height="5" rx="2"
          fill="#fff" opacity="0.65" />
      ))}
      {/* Delivery route glow */}
      {p > 0.25 && (
        <path d={`M 30 ${groundY + 28} Q 200 ${groundY + 16} 370 ${groundY + 24} T 570 ${groundY + 28}`}
          stroke={G.p} strokeWidth="2.5" fill="none" opacity="0.5" className="animate-dash" />
      )}

      {/* Metric badges floating */}
      {p > 0.6 && [
        { x: 48,  y: 185, t: "↓30% Costs"   },
        { x: 185, y: 198, t: "↑45% Efficiency" },
        { x: 335, y: 200, t: "↑60% Speed"   },
        { x: 462, y: 188, t: "↑35% CSAT"    },
      ].map((m, i) => (
        <g key={i} className="animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
          <rect x={m.x} y={m.y} width="106" height="22" rx="11" fill={G.p} />
          <text x={m.x + 53} y={m.y + 14} textAnchor="middle"
            fill="#090909" fontSize="7.5" fontWeight="800">{m.t}</text>
        </g>
      ))}
    </svg>
  );
}
