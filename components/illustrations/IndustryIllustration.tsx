"use client";

import { INDUSTRIES } from "@/lib/constants";
import { GOLD, FactoryBuilding, WarehouseRack, Person, SapScreen, Truck, Forklift } from "./shared";

function ManufacturingScene({ color }: { color: string }) {
  return (
    <g>
      <FactoryBuilding x={80}  y={120} w={180} h={130} />
      <FactoryBuilding x={300} y={155} w={140} h={95} />
      <FactoryBuilding x={480} y={140} w={160} h={110} />
      <SapScreen x={700} y={150} w={130} h={80} label="SAP PP/QM — Production" />
      <SapScreen x={860} y={150} w={130} h={80} label="MES Integration" />
      <Person x={150} y={360} variant="worker" />
      <Person x={220} y={358} variant="worker" facing="left" />
      <Person x={380} y={362} variant="manager" />
      <Forklift x={460} y={340} />
      <Forklift x={600} y={340} />
      <Truck x={720} y={345} />
      <text x="600" y={430} textAnchor="middle" fill={color} fontSize="11" fontWeight="800">SAP Manufacturing — Real-time Production Visibility</text>
    </g>
  );
}
function RetailScene({ color }: { color: string }) {
  return (
    <g>
      {/* Storefront */}
      <rect x="100" y="120" width="280" height="180" rx="6" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2" />
      <rect x="100" y="120" width="280" height="40" rx="6" fill={color} />
      <text x="240" y="148" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="900">RETAIL STORE</text>
      <rect x="130" y="175" width="70" height="90" rx="3" fill="#fff" stroke="#E5E7EB" strokeWidth="1" />
      <rect x="220" y="175" width="70" height="90" rx="3" fill="#fff" stroke="#E5E7EB" strokeWidth="1" />
      <rect x="310" y="175" width="50" height="90" rx="3" fill="#fff" stroke="#E5E7EB" strokeWidth="1" />
      {[[130,180],[220,180],[310,180]].map(([x, y], i) => (
        <g key={i}>
          {[0,1,2].map((r) => <rect key={r} x={x+8} y={y+8+r*26} width="50" height="18" rx="2" fill={GOLD.pale} stroke={GOLD.primary} strokeWidth="0.5" />)}
        </g>
      ))}
      <Person x={200} y={370} variant="office" />
      <Person x={280} y={370} variant="office" facing="left" />
      <Person x={350} y={368} variant="manager" />
      <SapScreen x={450} y={140} w={140} h={85} label="SAP SD — Omnichannel" />
      <SapScreen x={620} y={140} w={140} h={85} label="SAP WM — Replenish" />
      <SapScreen x={790} y={140} w={140} h={85} label="SAP CRM — Loyalty" />
      <Truck x={500} y={340} />
      <text x="600" y={430} textAnchor="middle" fill={color} fontSize="11" fontWeight="800">SAP Retail — Omnichannel Inventory Management</text>
    </g>
  );
}
function HealthcareScene({ color }: { color: string }) {
  return (
    <g>
      <rect x="100" y="110" width="300" height="200" rx="8" fill="#F0FDF4" stroke="#6EE7B7" strokeWidth="2" />
      <rect x="100" y="110" width="300" height="50" rx="8" fill={color} />
      <text x="250" y="143" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="900">HOSPITAL</text>
      <rect x="220" y="112" width="60" height="46" rx="2" fill={color} opacity="0.6" />
      <text x="250" y="141" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="900">+</text>
      {[[120,180],[220,180],[320,180]].map(([x,y],i)=>(
        <g key={i}>
          <rect x={x} y={y} width="70" height="100" rx="4" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="1" />
          <rect x={x+8} y={y+10} width="54" height="30" rx="2" fill="#fff" stroke="#D1FAE5" strokeWidth="0.5" />
        </g>
      ))}
      <Person x={180} y={380} variant="office" />
      <Person x={260} y={382} variant="manager" facing="left" />
      <Person x={350} y={380} variant="office" />
      <SapScreen x={460} y={130} w={140} h={80} label="SAP EH&S — Compliance" />
      <SapScreen x={630} y={130} w={140} h={80} label="SAP MM — Med Supply" />
      <SapScreen x={800} y={130} w={140} h={80} label="SAP FI — Billing" />
      <Truck x={500} y={350} />
      <text x="600" y={430} textAnchor="middle" fill={color} fontSize="11" fontWeight="800">SAP Healthcare — Patient Records & Supply Chain</text>
    </g>
  );
}
function EnergyScene({ color }: { color: string }) {
  return (
    <g>
      {/* Oil rigs / wind turbines */}
      {[80,220,360].map((x,i)=>(
        <g key={i}>
          <rect x={x+20} y={200} width="16" height="100" rx="3" fill="#9CA3AF" />
          <polygon points={`${x+28},200 ${x+48},140 ${x+8},140`} fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="1" />
          <ellipse cx={x+28} cy={250} rx="20" ry="6" fill="#E5E7EB" />
        </g>
      ))}
      {/* Pipeline */}
      <rect x="80" y="310" width="700" height="16" rx="8" fill="#94A3B8" />
      <rect x="80" y="310" width="700" height="8" rx="4" fill={color} opacity="0.5" />
      <Truck x={500} y={350} />
      <Person x={200} y={380} variant="worker" />
      <Person x={320} y={378} variant="worker" facing="left" />
      <SapScreen x={520} y={130} w={150} h={85} label="SAP PS — Asset Mgmt" />
      <SapScreen x={700} y={130} w={150} h={85} label="SAP CMMS — Maint." />
      <SapScreen x={880} y={130} w={150} h={85} label="SAP TRM — Commodity" />
      <text x="600" y={430} textAnchor="middle" fill={color} fontSize="11" fontWeight="800">SAP Energy — Asset Lifecycle & Commodity Trading</text>
    </g>
  );
}
function LogisticsScene({ color }: { color: string }) {
  return (
    <g>
      <WarehouseRack x={80}  y={160} />
      <WarehouseRack x={160} y={160} />
      <WarehouseRack x={240} y={160} />
      <WarehouseRack x={320} y={160} />
      <WarehouseRack x={400} y={160} />
      <Forklift x={100} y={280} />
      <Forklift x={240} y={280} />
      <Forklift x={380} y={280} />
      <Truck x={520} y={270} />
      <Truck x={680} y={270} />
      <Truck x={840} y={270} />
      <Person x={160} y={360} variant="worker" />
      <Person x={320} y={358} variant="worker" facing="left" />
      <Person x={480} y={360} variant="manager" />
      <SapScreen x={700} y={145} w={140} h={80} label="SAP TM — Fleet" />
      <SapScreen x={870} y={145} w={140} h={80} label="SAP EWM — Routes" />
      <text x="600" y={430} textAnchor="middle" fill={color} fontSize="11" fontWeight="800">SAP Logistics — Fleet Management & Route Optimisation</text>
    </g>
  );
}
function FinancialScene({ color }: { color: string }) {
  return (
    <g>
      <rect x="80" y="120" width="380" height="220" rx="8" fill="#1F2937" />
      <text x="270" y="148" textAnchor="middle" fill={GOLD.primary} fontSize="13" fontWeight="900">FINANCIAL SERVICES</text>
      <SapScreen x={100} y={160} w={160} h={90} label="SAP FI/CO — Ledger" />
      <SapScreen x={280} y={160} w={160} h={90} label="SAP TR — Treasury" />
      <SapScreen x={100} y={270} w={160} h={55} label="SAP GRC — Risk" />
      <SapScreen x={280} y={270} w={160} h={55} label="SAP AML — Compliance" />
      <SapScreen x={530} y={145} w={150} h={85} label="SAP SAC — Analytics" />
      <SapScreen x={710} y={145} w={150} h={85} label="Group Reporting (IFRS)" />
      <SapScreen x={890} y={145} w={150} h={85} label="SOX Controls Dashboard" />
      <Person x={200} y={390} variant="manager" />
      <Person x={320} y={392} variant="office" facing="left" />
      <Person x={540} y={390} variant="manager" />
      <text x="600" y={430} textAnchor="middle" fill={color} fontSize="11" fontWeight="800">SAP Finance — SOX Compliance · Treasury · Real-time Close</text>
    </g>
  );
}

const SCENES = [ManufacturingScene, RetailScene, HealthcareScene, EnergyScene, LogisticsScene, FinancialScene];

export default function IndustryIllustration({ index = 0 }: { index?: number }) {
  const industry = INDUSTRIES[index] ?? INDUSTRIES[0];
  const Scene = SCENES[index] ?? SCENES[0];

  return (
    <svg viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect x="20" y="20" width="1160" height="460" rx="12" fill="#FAFAFA" stroke="#F0F0F0" strokeWidth="1" />
      {/* Top bar */}
      <rect x="20" y="20" width="1160" height="55" rx="12" fill={industry.color} opacity="0.12" />
      <text x="600" y="54" textAnchor="middle" fill={industry.color} fontSize="16" fontWeight="900">{industry.label.toUpperCase()} — Industry Module</text>
      {/* Scene content starts at y=80 */}
      <g transform="translate(0, 60)">
        <Scene color={industry.color} />
      </g>
    </svg>
  );
}
