"use client";

import { INDUSTRIES } from "@/lib/constants";
import { G, DEFS } from "./shared";

/* Isometric mini-scene for each industry */
function IsoFactory({ color }: { color: string }) {
  return (
    <g transform="translate(40,32)">
      {/* Building */}
      <path d="M0,30 L0,-8 L18,-20 L36,-8 L36,30 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.2" />
      <path d="M0,30 L-18,20 L-18,-18 L0,-8 Z" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1.2" />
      <path d="M36,30 L54,20 L54,-18 L36,-8 Z" fill={color} opacity="0.3" stroke={color} strokeWidth="1.2" />
      {/* Windows */}
      <rect x="6" y="-4" width="9" height="9" rx="1" fill={color} opacity="0.6" />
      <rect x="21" y="-4" width="9" height="9" rx="1" fill={color} opacity="0.6" />
      {/* Chimney */}
      <rect x="12" y="-22" width="6" height="14" rx="1" fill="#9CA3AF" />
      <ellipse cx="15" cy="-24" rx="4" ry="2" fill="#E5E7EB" opacity="0.7" />
      {/* Ground */}
      <rect x="-18" y="28" width="72" height="4" rx="1" fill="#E5E7EB" />
    </g>
  );
}
function IsoCart({ color }: { color: string }) {
  return (
    <g transform="translate(38,38)">
      {/* Store */}
      <rect x="0" y="-15" width="44" height="42" rx="3" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />
      <rect x="0" y="-15" width="44" height="14" rx="3" fill={color} />
      <text x="22" y="-4" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="800">RETAIL</text>
      {/* Shelves */}
      <rect x="4" y="4"  width="14" height="10" rx="2" fill={color} opacity="0.3" />
      <rect x="22" y="4" width="14" height="10" rx="2" fill={color} opacity="0.3" />
      <rect x="4" y="18" width="14" height="8"  rx="2" fill={color} opacity="0.2" />
      <rect x="22" y="18" width="14" height="8"  rx="2" fill={color} opacity="0.2" />
    </g>
  );
}
function IsoHospital({ color }: { color: string }) {
  return (
    <g transform="translate(38,32)">
      <rect x="0" y="-15" width="44" height="46" rx="3" fill="#F0FDF4" stroke="#6EE7B7" strokeWidth="1" />
      <rect x="0" y="-15" width="44" height="14" rx="3" fill={color} />
      {/* cross */}
      <rect x="18" y="-13" width="8" height="20" rx="1" fill="#fff" />
      <rect x="12" y="-7"  width="20" height="8"  rx="1" fill="#fff" />
      <rect x="14" y="8"  width="16" height="14" rx="2" fill="#fff" stroke={color} strokeWidth="0.8" />
      <rect x="4" y="5"  width="8" height="8" rx="1" fill={color} opacity="0.3" />
      <rect x="32" y="5" width="8" height="8" rx="1" fill={color} opacity="0.3" />
    </g>
  );
}
function IsoOilRig({ color }: { color: string }) {
  return (
    <g transform="translate(38,38)">
      <rect x="16" y="0" width="6" height="24" rx="1" fill="#9CA3AF" />
      <polygon points="19,-20 8,0 30,0" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="1" />
      <rect x="8" y="22" width="24" height="8" rx="2" fill={color} opacity="0.4" />
      <rect x="0" y="28" width="40" height="4" rx="1" fill="#E5E7EB" />
      <rect x="4" y="16" width="12" height="10" rx="2" fill={color} opacity="0.25" />
    </g>
  );
}
function IsoTruck({ color }: { color: string }) {
  return (
    <g transform="translate(30,45)">
      <rect x="0" y="-10" width="30" height="18" rx="2" fill={color} />
      <rect x="26" y="-16" width="18" height="24" rx="2" fill={G.d} />
      <rect x="28" y="-12" width="14" height="8" rx="1" fill="#BFDBFE" opacity="0.7" />
      <circle cx="8" cy="12" r="5" fill="#1F2937" />
      <circle cx="8" cy="12" r="3" fill="#374151" />
      <circle cx="30" cy="12" r="5" fill="#1F2937" />
      <circle cx="30" cy="12" r="3" fill="#374151" />
      <circle cx="42" cy="12" r="5" fill="#1F2937" />
      <circle cx="42" cy="12" r="3" fill="#374151" />
    </g>
  );
}
function IsoFinance({ color }: { color: string }) {
  return (
    <g transform="translate(38,35)">
      <rect x="0" y="-18" width="44" height="50" rx="3" fill="#1F2937" />
      <rect x="0" y="-18" width="44" height="12" rx="3" fill={color} />
      <text x="22" y="-9" textAnchor="middle" fill="#090909" fontSize="5" fontWeight="900">FINANCE</text>
      <rect x="4" y="0" width="16" height="12" rx="2" fill={color} opacity="0.25" />
      <rect x="24" y="0" width="16" height="12" rx="2" fill={color} opacity="0.15" />
      {[0,1,2].map(i => (
        <rect key={i} x={5 + i * 14} y={18} width="10" height={6 + i * 3} rx="1" fill={color} opacity="0.5" />
      ))}
    </g>
  );
}

const SCENES = [IsoFactory, IsoCart, IsoHospital, IsoOilRig, IsoTruck, IsoFinance];

export default function IndustryIllustration({ index = 0 }: { index?: number }) {
  const industry = INDUSTRIES[index] ?? INDUSTRIES[0];
  const Scene = SCENES[index] ?? SCENES[0];

  return (
    <svg viewBox="0 0 600 440" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs dangerouslySetInnerHTML={{ __html: DEFS }} />

      {/* ── MAIN CARD ── */}
      <rect x="20" y="20" width="560" height="400" rx="20" fill="#fff" filter="url(#cardShadow)" />
      <rect x="20" y="20" width="560" height="400" rx="20" fill="#fff" stroke="#F0E8D0" strokeWidth="1.5" />

      {/* Header band */}
      <rect x="20" y="20" width="560" height="54" rx="20" fill={industry.color} opacity="0.1" />
      <rect x="20" y="54" width="560" height="20" fill={industry.color} opacity="0.1" />
      <text x="300" y="55" textAnchor="middle" fill={industry.color} fontSize="16" fontWeight="900">{industry.label}</text>
      <text x="300" y="72" textAnchor="middle" fill="#9CA3AF" fontSize="8">{industry.description}</text>

      {/* ── LARGE INDUSTRY SCENE ── */}
      <g transform="translate(60, 80)">
        <Scene color={industry.color} />
      </g>

      {/* ── SAP MODULE BADGES ── */}
      {[
        "SAP S/4HANA",
        "SAP Analytics",
        "SAP BTP",
        "SAP Joule AI",
      ].map((badge, i) => (
        <g key={badge}>
          <rect x={44 + i * 132} y="330" width="118" height="26" rx="13"
            fill={G.pale} stroke={G.p} strokeWidth="1" />
          <text x={103 + i * 132} y="346" textAnchor="middle" fill={G.d} fontSize="7.5" fontWeight="700">{badge}</text>
        </g>
      ))}

      {/* ── INDUSTRY SELECTOR DOTS ── */}
      <g transform="translate(220, 385)">
        {INDUSTRIES.map((ind, i) => (
          <circle key={ind.id} cx={i * 28} cy={0} r={i === index ? 7 : 5}
            fill={i === index ? ind.color : "#E5E7EB"}
            stroke={i === index ? ind.color : "none"} />
        ))}
      </g>
    </svg>
  );
}
