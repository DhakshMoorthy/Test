"use client";

import { GOLD, FactoryBuilding, Person, Truck, SapScreen } from "./shared";

export default function GrowthIllustration({ progress = 0.5 }: { progress?: number }) {
  return (
    <svg viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect x="20" y="250" width="520" height="80" rx="4" fill="#F3F4F6" />

      {/* Smart buildings */}
      {[
        { x: 50, h: 70 }, { x: 120, h: 50 }, { x: 190, h: 90 },
        { x: 280, h: 60 }, { x: 360, h: 80 }, { x: 430, h: 55 }, { x: 490, h: 75 },
      ].map((b, i) => {
        const smart = i / 7 < progress;
        return (
          <g key={i}>
            <rect
              x={b.x} y={250 - b.h} width="45" height={b.h} rx="3"
              fill={smart ? GOLD.pale : "#E5E7EB"}
              stroke={smart ? GOLD.primary : "#D1D5DB"}
              strokeWidth="1"
            />
            {smart && (
              <>
                <rect x={b.x + 8} y={250 - b.h + 10} width="8" height="8" rx="1" fill={GOLD.primary} opacity="0.5" />
                <SapScreen x={b.x + 5} y={250 - b.h + 25} w={35} h={20} label="IoT" />
              </>
            )}
          </g>
        );
      })}

      {/* Glowing delivery routes */}
      {progress > 0.3 && (
        <path d="M 60 280 Q 200 260 350 270 T 520 280" stroke={GOLD.primary} strokeWidth="2" fill="none" className="animate-dash" opacity="0.6" />
      )}

      {/* Solar panels */}
      {progress > 0.5 && (
        <g transform="translate(400, 200)">
          {[0, 1, 2].map((i) => (
            <rect key={i} x={i * 18} y="0" width="15" height="10" rx="1" fill={GOLD.dark} transform={`rotate(-20, ${i * 18}, 0)`} />
          ))}
        </g>
      )}

      {/* AI drone */}
      {progress > 0.4 && (
        <g className="animate-float" transform="translate(300, 120)">
          <ellipse cx="0" cy="0" rx="20" ry="6" fill="#374151" />
          <line x1="-25" y1="0" x2="-40" y2="-8" stroke="#6B7280" strokeWidth="1.5" />
          <line x1="25" y1="0" x2="40" y2="-8" stroke="#6B7280" strokeWidth="1.5" />
          <circle cx="0" cy="2" r="3" fill={GOLD.primary} />
        </g>
      )}

      <Truck x={150} y={270} />
      <Person x={250} y={290} variant="office" />
      <Person x={320} y={288} variant="manager" facing="left" />

      <FactoryBuilding x={60} y={160} w={70} h={50} />
    </svg>
  );
}
