"use client";

import { GOLD, SapScreen, Person, WarehouseRack, Forklift, Truck, DataFlow, FactoryBuilding } from "./shared";

export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="hGlow" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={GOLD.primary} stopOpacity="0.18" />
          <stop offset="100%" stopColor={GOLD.primary} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hPlat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF8EB" />
          <stop offset="100%" stopColor="#FEF3C7" />
        </linearGradient>
      </defs>

      <ellipse cx="600" cy="380" rx="520" ry="140" fill="url(#hGlow)" />
      <ellipse cx="600" cy="430" rx="480" ry="90" fill="url(#hPlat)" stroke={GOLD.light} strokeWidth="1" />

      {/* ── FINANCE OFFICE (left) ── */}
      <rect x="60" y="240" width="200" height="120" rx="6" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1.5" />
      <text x="160" y="262" textAnchor="middle" fill="#9CA3AF" fontSize="9" fontWeight="700">FINANCE</text>
      <SapScreen x={75} y={268} w={60} h={40} label="FI/CO" />
      <SapScreen x={155} y={268} w={60} h={40} label="TR" />
      <Person x={110} y={360} variant="manager" />
      <Person x={180} y={362} variant="office" facing="left" />
      <DataFlow x1={260} y1={300} x2={460} y2={320} />

      {/* ── HR OFFICE (far left) ── */}
      <rect x="40" y="390" width="160" height="90" rx="5" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />
      <text x="120" y="408" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontWeight="700">HR</text>
      <SapScreen x={55} y={415} w={55} h={35} label="HCM" />
      <Person x={160} y={475} variant="office" facing="left" />
      <DataFlow x1={200} y1={430} x2={460} y2={360} />

      {/* ── SALES + CRM (top center-left) ── */}
      <rect x="320" y="160" width="200" height="100" rx="6" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="1" />
      <text x="420" y="180" textAnchor="middle" fill="#9CA3AF" fontSize="9" fontWeight="700">SALES / CRM</text>
      <SapScreen x={335} y={188} w={60} h={38} label="SD" />
      <SapScreen x={410} y={188} w={60} h={38} label="CRM" />
      <Person x={380} y={262} variant="office" />
      <Person x={450} y={260} variant="manager" facing="left" />
      <DataFlow x1={420} y1={260} x2={520} y2={320} />

      {/* ── MANUFACTURING (bottom center-left) ── */}
      <FactoryBuilding x={270} y={380} w={140} h={80} />
      <Person x={320} y={462} variant="worker" />
      <Person x={370} y={460} variant="worker" facing="left" />
      <DataFlow x1={340} y1={380} x2={480} y2={350} />

      {/* ── CENTRAL ERP CORE ── */}
      <g className="animate-float">
        <rect x="460" y="275" width="140" height="120" rx="14" fill={GOLD.primary} />
        <rect x="472" y="287" width="116" height="96" rx="10" fill={GOLD.dark} />
        <text x="530" y="322" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="900" letterSpacing="0.5">KANNANWARE</text>
        <text x="530" y="342" textAnchor="middle" fill={GOLD.pale} fontSize="9" fontWeight="700">SAP S/4HANA</text>
        <text x="530" y="358" textAnchor="middle" fill="#fff" fontSize="7" opacity="0.7">AI-First ERP Core</text>
        <rect x="490" y="367" width="80" height="14" rx="7" fill={GOLD.primary} opacity="0.4" />
        <text x="530" y="378" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="600">● LIVE</text>
      </g>
      {/* Joule AI orb */}
      <circle cx="530" cy="240" r="30" fill="#090909" stroke={GOLD.primary} strokeWidth="2" />
      <text x="530" y="236" textAnchor="middle" fill={GOLD.primary} fontSize="7" fontWeight="800">SAP</text>
      <text x="530" y="248" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">JOULE</text>
      <line x1="530" y1="270" x2="530" y2="275" stroke={GOLD.primary} strokeWidth="2" strokeDasharray="3 2" />

      {/* ── WAREHOUSE (right) ── */}
      <rect x="720" y="220" width="230" height="150" rx="6" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="1.5" />
      <text x="835" y="242" textAnchor="middle" fill="#9CA3AF" fontSize="9" fontWeight="700">WAREHOUSE / WM</text>
      <WarehouseRack x={740} y={250} />
      <WarehouseRack x={805} y={250} />
      <WarehouseRack x={870} y={250} />
      <Forklift x={755} y={320} />
      <Person x={840} y={370} variant="worker" facing="left" />
      <Person x={885} y={368} variant="worker" />
      <DataFlow x1={720} y1={300} x2={600} y2={330} />

      {/* ── PROCUREMENT (far right top) ── */}
      <rect x="960" y="210" width="180" height="100" rx="6" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="1" />
      <text x="1050" y="230" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontWeight="700">PROCUREMENT</text>
      <SapScreen x={975} y={238} w={65} h={42} label="MM/SRM" />
      <Person x={1080} y={310} variant="manager" facing="left" />
      <DataFlow x1={960} y1={260} x2={600} y2={310} />

      {/* ── LOGISTICS / TRUCKING (bottom right) ── */}
      <rect x="760" y="420" width="280" height="90" rx="5" fill="#FFF8EB" stroke="#FCD34D" strokeWidth="1.5" />
      <text x="900" y="440" textAnchor="middle" fill="#92400E" fontSize="8" fontWeight="700">LOGISTICS</text>
      <Truck x={780} y={455} />
      <Truck x={880} y={455} />
      <Person x={980} y={500} variant="worker" facing="left" />
      <DataFlow x1={760} y1={460} x2={600} y2={395} />

      {/* ── DATA FLOWS ── */}
      <DataFlow x1={600} y1={275} x2={600} y2={240} />
      <DataFlow x1={530} y1={395} x2={440} y2={430} />
      <DataFlow x1={600} y1={395} x2={600} y2={430} />

      {/* ground line */}
      <line x1="60" y1="510" x2="1140" y2="510" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="6 6" />
    </svg>
  );
}
