"use client";

import { GOLD, SapScreen, Person, WarehouseRack, Forklift, AlertBadge, Truck, FactoryBuilding } from "./shared";

export default function ChaosIllustration() {
  return (
    <svg viewBox="0 0 1200 580" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">

      {/* ── OFFICE WING — total chaos ── */}
      <rect x="40" y="100" width="380" height="240" rx="8" fill="#FEF9F9" stroke="#FECACA" strokeWidth="2" />
      <text x="230" y="128" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="800">DISCONNECTED SYSTEMS</text>

      {/* Tilted messy desks */}
      {[80, 170, 260, 340].map((dx, i) => (
        <g key={dx} transform={`rotate(${i % 2 === 0 ? 5 : -4}, ${dx + 30}, 230)`}>
          <rect x={dx} y="210" width="70" height="12" rx="2" fill="#CBD5E1" />
          <SapScreen x={dx + 5} y={175} w={60} h={38} label="????" />
        </g>
      ))}
      {/* Frustrated manager with ??? speech */}
      <Person x={120} y={335} variant="manager" />
      <rect x="128" y="280" width="70" height="22" rx="10" fill="#fff" stroke="#F87171" strokeWidth="1.5" />
          <text x="163" y="295" textAnchor="middle" fill="#EF4444" fontSize="7" fontWeight="700">WHERE IS MY ORDER?</text>
      <polygon points="128,302 125,315 140,308" fill="#fff" stroke="#F87171" strokeWidth="1.5" />

      <Person x={220} y={338} variant="office" facing="left" />
      <rect x="170" y="282" width="68" height="22" rx="10" fill="#fff" stroke="#F87171" strokeWidth="1.5" />
      <text x="204" y="297" textAnchor="middle" fill="#EF4444" fontSize="7" fontWeight="700">WRONG DATA!</text>
      <polygon points="215,302 218,315 203,308" fill="#fff" stroke="#F87171" strokeWidth="1.5" />

      <Person x={330} y={333} variant="worker" />

      {/* Flying papers */}
      {[[90,155],[140,140],[200,162],[290,148],[370,158]].map(([px, py], i) => (
        <rect key={i} x={px} y={py} width="16" height="22" rx="2" fill="#fff" stroke="#D1D5DB" strokeWidth="0.8"
          transform={`rotate(${-25 + i * 18}, ${px + 8}, ${py + 11})`} className="animate-float"
          style={{ animationDelay: `${i * 0.4}s` }} />
      ))}

      {/* Alert badges raining down */}
      <AlertBadge x={60}  y={90}  text="Data mismatch" />
      <AlertBadge x={230} y={82}  text="Wrong invoice amount" />
      <AlertBadge x={80}  y={360} text="Manual approval stuck" />
      <AlertBadge x={230} y={365} text="Spreadsheet version?" />

      {/* ── WAREHOUSE CHAOS ── */}
      <rect x="460" y="100" width="340" height="240" rx="8" fill="#FFF7ED" stroke="#FCD34D" strokeWidth="2" />
      <text x="630" y="128" textAnchor="middle" fill="#D97706" fontSize="12" fontWeight="800">WAREHOUSE — OVERFLOWED</text>
      <WarehouseRack x={480} y={140} />
      <WarehouseRack x={560} y={140} />
      <WarehouseRack x={640} y={140} />
      <WarehouseRack x={720} y={140} />

      {/* Tilted/fallen boxes */}
      {[[490,210],[555,215],[630,208],[700,212]].map(([bx, by], i) => (
        <rect key={i} x={bx} y={by} width="40" height="35" rx="3" fill={GOLD.pale} stroke={GOLD.primary} strokeWidth="1.2"
          transform={`rotate(${-12 + i * 8}, ${bx + 20}, ${by + 17})`} />
      ))}

      <Forklift x={490} y={275} />
      <Forklift x={680} y={278} />
      <Person x={580} y={335} variant="worker" />
      <Person x={650} y={333} variant="worker" facing="left" />

      <AlertBadge x={465} y={88}  text="Out of stock!" />
      <AlertBadge x={640} y={350} text="Inventory mismatch" />

      {/* ── TRUCK WAITING (bottom left) ── */}
      <rect x="40" y="400" width="340" height="120" rx="6" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5" />
      <text x="210" y="420" textAnchor="middle" fill="#B91C1C" fontSize="10" fontWeight="700">DELIVERY — DELAYED</text>
      <Truck x={60}  y={435} />
      <Truck x={200} y={435} />
      <Truck x={320} y={435} />
      <Person x={120} y={487} variant="worker" />
      <rect x="125" y="455" width="80" height="20" rx="9" fill="#fff" stroke="#F87171" strokeWidth="1.2" />
      <text x="165" y="469" textAnchor="middle" fill="#EF4444" fontSize="7" fontWeight="700">WHY THE WAIT??</text>
      <AlertBadge x={50} y={395} text="Payment delayed" />

      {/* ── FINANCIAL CHAOS (bottom right) ── */}
      <rect x="460" y="400" width="340" height="120" rx="6" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.5" />
      <text x="630" y="420" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="700">FINANCE — RECONCILING MANUALLY</text>
      <SapScreen x={480} y={430} w={80} h={52} label="FI ???" />
      <SapScreen x={580} y={430} w={80} h={52} label="Excel ??" />
      <SapScreen x={680} y={430} w={80} h={52} label="Access ??" />
      <Person x={540} y={490} variant="manager" />
      <Person x={640} y={492} variant="office" facing="left" />
      <AlertBadge x={470} y={395} text="Month-end not closed" />

      {/* ── FACTORY SILO (far right) ── */}
      <FactoryBuilding x={840} y={100} w={160} h={100} />
      <text x="920" y="220" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontWeight="700">NO VISIBILITY</text>
      <Person x={870} y={300} variant="worker" />
      <Person x={940} y={298} variant="worker" facing="left" />
      <AlertBadge x={855} y={90} text="Production halt" />

      {/* BIG NO-CONNECTION symbol between systems */}
      <line x1="430" y1="190" x2="455" y2="190" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
      <line x1="435" y1="198" x2="450" y2="182" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />

      <line x1="806" y1="230" x2="832" y2="230" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
      <line x1="812" y1="238" x2="826" y2="222" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
