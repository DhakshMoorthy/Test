"use client";

import { GOLD, SapScreen, Person, WarehouseRack, Forklift, Truck, DataFlow } from "./shared";

const STEPS = [
  { label: "Order Placed",   icon: "🛒", desc: "Customer places order online" },
  { label: "Sales Confirm",  icon: "✅", desc: "SAP SD auto-confirms availability" },
  { label: "Stock Check",    icon: "📦", desc: "WM checks warehouse in real-time" },
  { label: "Pick & Pack",    icon: "🤖", desc: "Picker locates, packs items" },
  { label: "Dispatch",       icon: "🚛", desc: "TM schedules truck route" },
  { label: "Invoice + Pay",  icon: "💰", desc: "FI generates invoice automatically" },
];

export default function OrderFlowIllustration({ activeStep = 0 }: { activeStep?: number }) {
  const stW = 160;
  const startX = 60;

  return (
    <svg viewBox="0 0 1200 540" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="pipeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={GOLD.primary} />
          <stop offset="100%" stopColor={GOLD.light} />
        </linearGradient>
      </defs>

      {/* Background panel */}
      <rect x="20" y="30" width="1160" height="480" rx="12" fill="#FAFAFA" stroke="#F0F0F0" strokeWidth="1" />

      {/* ── STEP NODES (top row) ── */}
      <line x1={startX + 20} y1="120" x2={startX + 20 + (STEPS.length - 1) * stW} y2="120"
        stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round" />
      {activeStep > 0 && (
        <line x1={startX + 20} y1="120" x2={startX + 20 + activeStep * stW} y2="120"
          stroke="url(#pipeGrad)" strokeWidth="4" strokeLinecap="round" />
      )}

      {STEPS.map((step, i) => {
        const cx = startX + 20 + i * stW;
        const active = i === activeStep;
        const done = i < activeStep;
        return (
          <g key={step.label}>
            {/* connector dot */}
            <circle cx={cx} cy={120} r={active ? 20 : done ? 16 : 12}
              fill={done ? GOLD.primary : active ? GOLD.primary : "#E5E7EB"}
              stroke={active ? GOLD.dark : "none"} strokeWidth="3" />
            <text x={cx} y={125} textAnchor="middle" fill={done || active ? "#090909" : "#9CA3AF"} fontSize="9" fontWeight="700">{i + 1}</text>

            {/* label below */}
            <text x={cx} y={154} textAnchor="middle" fill={active ? GOLD.dark : "#64748B"} fontSize="8" fontWeight={active ? "800" : "600"}>{step.label}</text>
            <text x={cx} y={168} textAnchor="middle" fill="#94A3B8" fontSize="6.5">{step.desc}</text>
          </g>
        );
      })}

      {/* ── SCENE PANEL (below) ── */}
      <rect x="40" y="195" width="1120" height="280" rx="8" fill="#fff" stroke="#F3F3F3" strokeWidth="1" />

      {/* Step 0 — Customer + laptop */}
      {activeStep === 0 && (
        <g>
          <Person x={200} y={400} variant="office" />
          <SapScreen x={160} y={305} w={100} h={65} label="Customer Portal" />
          <text x="220" y={490} textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="600">Customer places order online</text>
        </g>
      )}

      {/* Step 1 — Sales team + SAP SD */}
      {activeStep === 1 && (
        <g>
          <SapScreen x={450} y={260} w={120} h={75} label="SAP SD — SO Created" />
          <Person x={530} y={400} variant="manager" />
          <Person x={600} y={402} variant="office" facing="left" />
          <text x="580" y={490} textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="600">Sales order auto-confirmed in SAP SD</text>
        </g>
      )}

      {/* Step 2 — Warehouse stock check */}
      {activeStep === 2 && (
        <g>
          <WarehouseRack x={380} y={240} />
          <WarehouseRack x={460} y={240} />
          <WarehouseRack x={540} y={240} />
          <WarehouseRack x={620} y={240} />
          <SapScreen x={700} y={265} w={110} h={65} label="SAP WM — In Stock ✓" />
          <Person x={540} y={400} variant="worker" />
          <text x="580" y={490} textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="600">WM system confirms stock availability in real-time</text>
        </g>
      )}

      {/* Step 3 — Picker + forklift */}
      {activeStep === 3 && (
        <g>
          <WarehouseRack x={300} y={240} />
          <WarehouseRack x={380} y={240} />
          <Forklift x={500} y={320} />
          <Forklift x={640} y={320} />
          <Person x={580} y={405} variant="worker" />
          <Person x={660} y={403} variant="worker" facing="left" />
          <SapScreen x={740} y={260} w={110} h={65} label="EWM — Pick Order" />
          <text x="600" y={490} textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="600">SAP EWM creates pick order — worker picks & packs</text>
        </g>
      )}

      {/* Step 4 — Truck + TM */}
      {activeStep === 4 && (
        <g>
          <Truck x={340} y={310} />
          <Truck x={530} y={310} />
          <Truck x={720} y={310} />
          <SapScreen x={850} y={265} w={120} h={65} label="SAP TM — Routing" />
          <Person x={500} y={415} variant="worker" />
          <Person x={680} y={413} variant="worker" facing="left" />
          <text x="600" y={490} textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="600">SAP TM auto-assigns trucks and optimises delivery route</text>
        </g>
      )}

      {/* Step 5 — Invoice + payment */}
      {activeStep >= 5 && (
        <g>
          <SapScreen x={350} y={250} w={130} h={75} label="FI — Invoice Auto" />
          <SapScreen x={510} y={250} w={130} h={75} label="FI — Payment Rcvd" />
          <SapScreen x={670} y={250} w={130} h={75} label="CO — P&L Updated" />
          <Person x={520} y={415} variant="manager" />
          <Person x={620} y={413} variant="office" facing="left" />
          {/* green check */}
          <circle cx="860" cy="340" r="40" fill="#D1FAE5" stroke="#6EE7B7" strokeWidth="2" />
          <text x="860" y="346" textAnchor="middle" fill="#059669" fontSize="26" fontWeight="900">✓</text>
          <text x="860" y="366" textAnchor="middle" fill="#059669" fontSize="7" fontWeight="700">Order Complete</text>
          <text x="600" y={490} textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="600">Invoice generated, payment received, dashboard updated instantly</text>
        </g>
      )}

      {/* Flowing data line across the bottom */}
      <DataFlow x1={60} y1={480} x2={1140} y2={480} />
      <text x="600" y={510} textAnchor="middle" fill={GOLD.dark} fontSize="7" fontWeight="600">Real-time SAP data flow — zero manual handoffs</text>
    </svg>
  );
}
