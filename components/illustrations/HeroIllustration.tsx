"use client";

import { GOLD, SapScreen, Person, WarehouseRack, Forklift, Truck, DataFlow } from "./shared";

export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GOLD.primary} stopOpacity="0.15" />
          <stop offset="100%" stopColor={GOLD.primary} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="platformGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF8EB" />
          <stop offset="100%" stopColor="#FEF3C7" />
        </linearGradient>
      </defs>

      <ellipse cx="280" cy="220" rx="200" ry="80" fill="url(#heroGlow)" />
      <ellipse cx="280" cy="250" rx="180" ry="60" fill="url(#platformGrad)" stroke={GOLD.light} strokeWidth="1" />

      {/* Office wing */}
      <rect x="80" y="170" width="90" height="55" rx="4" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
      <SapScreen x={95} y={178} label="FI/CO" />
      <Person x={155} y={225} variant="office" />
      <Person x={130} y={228} variant="manager" facing="left" />
      <text x="125" y="240" textAnchor="middle" fill="#64748B" fontSize="7" fontWeight="600">Finance</text>

      {/* Warehouse wing */}
      <rect x="390" y="165" width="100" height="60" rx="4" fill="#F9FAFB" stroke="#D1D5DB" strokeWidth="1" />
      <WarehouseRack x={400} y={172} />
      <Forklift x={455} y={210} />
      <Person x={420} y={228} variant="worker" facing="left" />
      <text x="440" y="240" textAnchor="middle" fill="#64748B" fontSize="7" fontWeight="600">Warehouse</text>

      {/* Manufacturing */}
      <rect x="60" y="280" width="80" height="45" rx="3" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" />
      <rect x="75" y="295" width="12" height="20" rx="1" fill="#9CA3AF" />
      <rect x="95" y="300" width="12" height="15" rx="1" fill="#9CA3AF" />
      <Person x={100} y={325} variant="worker" />
      <text x="100" y="340" textAnchor="middle" fill="#64748B" fontSize="6" fontWeight="600">Mfg</text>

      {/* Sales / CRM */}
      <rect x="420" y="285" width="75" height="40" rx="3" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
      <SapScreen x={430} y={292} w={40} h={24} label="CRM" />
      <Person x={475} y={325} variant="office" facing="left" />
      <text x="457" y="340" textAnchor="middle" fill="#64748B" fontSize="6" fontWeight="600">Sales</text>

      {/* Central ERP hub */}
      <g className="animate-float">
        <rect x="248" y="175" width="64" height="64" rx="8" fill={GOLD.primary} />
        <rect x="254" y="181" width="52" height="52" rx="6" fill={GOLD.dark} />
        <text x="280" y="205" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="800">KANNAN</text>
        <text x="280" y="218" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="800">WARE</text>
        <text x="280" y="230" textAnchor="middle" fill={GOLD.pale} fontSize="6" fontWeight="600">SAP ERP</text>
      </g>

      {/* Data connections */}
      <DataFlow x1={170} y1={200} x2={248} y2={207} />
      <DataFlow x1={390} y1={200} x2={312} y2={207} />
      <DataFlow x1={140} y1={280} x2={260} y2={240} />
      <DataFlow x1={420} y1={300} x2={310} y2={240} />
      <DataFlow x1={280} y1={175} x2={280} y2={155} />

      {/* SAP Joule AI node */}
      <circle cx="280" cy="140" r="18" fill="#090909" stroke={GOLD.primary} strokeWidth="2" />
      <text x="280" y="136" textAnchor="middle" fill={GOLD.primary} fontSize="5" fontWeight="700">JOULE</text>
      <text x="280" y="146" textAnchor="middle" fill="#fff" fontSize="4">AI</text>

      <Truck x={200} y={310} />
      <Person x={250} y={310} variant="office" />
    </svg>
  );
}
