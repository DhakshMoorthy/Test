"use client";

import { GOLD, SapScreen, Person, WarehouseRack, Forklift, AlertBadge } from "./shared";

export default function ChaosIllustration() {
  return (
    <svg viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect x="40" y="120" width="200" height="120" rx="6" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5" />
      <text x="140" y="145" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontWeight="600">DISCONNECTED OFFICE</text>

      {/* Messy desks */}
      {[70, 120, 170].map((dx, i) => (
        <g key={dx} transform={`rotate(${i * 8 - 8}, ${dx + 20}, 200)`}>
          <rect x={dx} y="180" width="40" height="8" rx="2" fill="#D1D5DB" />
          <SapScreen x={dx + 4} y={160} w={32} h={22} label="???" />
        </g>
      ))}

      {/* Frustrated people */}
      <Person x={90} y={210} variant="manager" />
      <Person x={160} y={215} variant="office" facing="left" />
      <Person x={210} y={208} variant="worker" />

      {/* Flying papers */}
      {[[100, 150], [180, 140], [150, 170]].map(([px, py], i) => (
        <rect key={i} x={px} y={py} width="10" height="14" rx="1" fill="#fff" stroke="#ccc" strokeWidth="0.5" transform={`rotate(${20 + i * 15}, ${px}, ${py})`} className="animate-float" style={{ animationDelay: `${i * 0.5}s` }} />
      ))}

      {/* Warehouse chaos */}
      <rect x="320" y="110" width="200" height="140" rx="6" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5" />
      <WarehouseRack x={340} y={125} />
      <Forklift x={420} y={200} />
      <rect x={360} y={190} width="30" height="25" rx="2" fill={GOLD.pale} stroke={GOLD.primary} strokeWidth="1" transform="rotate(12, 375, 202)" />
      <rect x={400} y={175} width="25" height="20" rx="2" fill={GOLD.pale} stroke={GOLD.primary} strokeWidth="1" transform="rotate(-8, 412, 185)" />

      <AlertBadge x={60} y={100} text="Data mismatch" />
      <AlertBadge x={300} y={90} text="Out of stock!" />
      <AlertBadge x={120} y={250} text="Payment delayed" />
      <AlertBadge x={350} y={260} text="Approval pending" />

      {/* Red alert pulses */}
      {[[140, 190], [400, 160], [200, 230]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill="#EF4444" opacity="0.6" className="animate-float" />
      ))}

      <Person x={380} y={230} variant="worker" facing="left" />
      <text x="420" y="250" textAnchor="middle" fill="#B91C1C" fontSize="7" fontWeight="600">Overflow</text>
    </svg>
  );
}
