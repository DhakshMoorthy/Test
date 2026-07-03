"use client";

import { GOLD, SapScreen, Person, WarehouseRack, Forklift, Truck, DataFlow } from "./shared";

const STEPS = [
  { label: "Order", x: 60, icon: "🛒" },
  { label: "Sales", x: 140 },
  { label: "Stock", x: 220 },
  { label: "Pick", x: 300 },
  { label: "Ship", x: 380 },
  { label: "Invoice", x: 460 },
];

export default function OrderFlowIllustration({ activeStep = 0 }: { activeStep?: number }) {
  return (
    <svg viewBox="0 0 560 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect x="20" y="40" width="520" height="200" rx="8" fill="#FAFAFA" stroke="#E5E7EB" strokeWidth="1" />

      {/* Pipeline */}
      <line x1="60" y1="100" x2="500" y2="100" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="100" x2={60 + activeStep * 80} y2="100" stroke={GOLD.primary} strokeWidth="3" strokeLinecap="round" />

      {STEPS.map((step, i) => (
        <g key={step.label}>
          <circle cx={step.x} cy={100} r={i <= activeStep ? 14 : 10} fill={i <= activeStep ? GOLD.primary : "#E5E7EB"} stroke={i === activeStep ? GOLD.dark : "none"} strokeWidth="2" />
          <text x={step.x} y={104} textAnchor="middle" fill={i <= activeStep ? "#090909" : "#9CA3AF"} fontSize="6" fontWeight="700">{i + 1}</text>
          <text x={step.x} y={130} textAnchor="middle" fill="#64748B" fontSize="6" fontWeight="600">{step.label}</text>
        </g>
      ))}

      {/* Scene below pipeline changes with step */}
      {activeStep === 0 && <Person x={80} y={180} variant="office" />}
      {activeStep === 1 && <SapScreen x={120} y={165} label="SO" />}
      {activeStep === 2 && <WarehouseRack x={190} y={155} />}
      {activeStep === 3 && (
        <>
          <Person x={270} y={185} variant="worker" />
          <Forklift x={300} y={175} />
        </>
      )}
      {activeStep === 4 && <Truck x={350} y={175} />}
      {activeStep >= 5 && (
        <>
          <SapScreen x={400} y={160} label="FI" />
          <rect x={420} y={200} width="60" height="30" rx="4" fill={GOLD.pale} stroke={GOLD.primary} strokeWidth="1" />
          <text x={450} y={218} textAnchor="middle" fill={GOLD.dark} fontSize="6" fontWeight="700">Dashboard ✓</text>
        </>
      )}

      <DataFlow x1={280} y1={140} x2={450} y2={160} />
      <Person x={480} y={190} variant="manager" facing="left" />
    </svg>
  );
}
