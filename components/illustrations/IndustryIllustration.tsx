"use client";

import { INDUSTRIES } from "@/lib/constants";
import { GOLD, FactoryBuilding, WarehouseRack, Person, SapScreen, Truck } from "./shared";

function IndustryScene({ type, color }: { type: string; color: string }) {
  switch (type) {
    case "manufacturing":
      return (
        <g>
          <FactoryBuilding x={60} y={80} w={100} h={60} />
          <Person x={130} y={155} variant="worker" />
          <SapScreen x={170} y={90} label="PP" />
        </g>
      );
    case "retail":
      return (
        <g>
          <rect x="50" y="90" width="120" height="50" rx="4" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
          <rect x="60" y="70" width="100" height="15" rx="2" fill={color} />
          <text x="110" y="80" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">RETAIL</text>
          <Person x={100} y={150} variant="office" />
          <SapScreen x={150} y={100} label="SD" />
        </g>
      );
    case "healthcare":
      return (
        <g>
          <rect x="70" y="85" width="90" height="55" rx="4" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="1" />
          <rect x="100" y="70" width="30" height="20" rx="2" fill="#10B981" />
          <text x="115" y="83" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">+</text>
          <Person x={120} y={150} variant="office" />
          <SapScreen x={60} y={95} label="EH" />
        </g>
      );
    case "energy":
      return (
        <g>
          <rect x="80" y="100" width="20" height="40" rx="2" fill="#9CA3AF" />
          <ellipse cx="90" cy="95" rx="8" ry="5" fill="#D1D5DB" opacity="0.7" />
          <rect x="120" y="110" width="50" height="30" rx="2" fill={GOLD.pale} stroke={color} strokeWidth="1" />
          <Person x={100} y={155} variant="worker" />
        </g>
      );
    case "logistics":
      return (
        <g>
          <WarehouseRack x={70} y={90} />
          <Truck x={150} y={120} />
          <Person x={120} y={155} variant="worker" />
        </g>
      );
    case "financial":
      return (
        <g>
          <rect x="60" y="80" width="130" height="65" rx="4" fill="#1F2937" />
          <SapScreen x={75} y={90} w={55} h={35} label="FI/CO" />
          <SapScreen x={140} y={90} w={40} h={35} label="TR" />
          <Person x={130} y={155} variant="manager" />
        </g>
      );
    default:
      return <FactoryBuilding x={80} y={90} />;
  }
}

export default function IndustryIllustration({ index = 0 }: { index?: number }) {
  const industry = INDUSTRIES[index] ?? INDUSTRIES[0];

  return (
    <svg viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect x="30" y="50" width="500" height="280" rx="12" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="1" />
      <rect x="30" y="50" width="500" height="40" rx="12" fill={industry.color} opacity="0.15" />
      <text x="280" y="76" textAnchor="middle" fill={industry.color} fontSize="12" fontWeight="800">{industry.label}</text>

      <IndustryScene type={industry.id} color={industry.color} />

      <rect x="50" y="300" width="460" height="1" fill="#E5E7EB" />
      {INDUSTRIES.map((ind, i) => (
        <circle key={ind.id} cx={80 + i * 70} cy={330} r={i === index ? 6 : 4} fill={i === index ? ind.color : "#D1D5DB"} />
      ))}
    </svg>
  );
}
