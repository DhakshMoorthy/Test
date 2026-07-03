"use client";

import { G, DEFS } from "./shared";

const KPIS = [
  { label: "Revenue",    value: "$4.8M",  trend: "+24.5%", color: G.d },
  { label: "Orders",     value: "12,540", trend: "+18.2%", color: "#0284C7" },
  { label: "Profit",     value: "$1.2M",  trend: "+19.1%", color: "#059669" },
  { label: "Cash Flow",  value: "$680K",  trend: "+20.8%", color: "#7C3AED" },
];

const NAV_ITEMS = ["Overview", "Finance", "Sales", "Inventory", "Production", "Reports", "Settings"];
const CHART_PTS = [62,55,70,45,38,52,30,22,18,25,12,8];
const PRODUCTS = [
  { name: "Product A", val: "$12.6 Cr", bar: 70 },
  { name: "Product B", val: "$8.8 Cr",  bar: 50 },
  { name: "Product C", val: "$5.4 Cr",  bar: 30 },
];

export default function DashboardMockup() {
  const fw = 660, fh = 450;
  const sideW = 130, headerH = 38, mainX = sideW, mainY = headerH;
  const mainH = fh - headerH;

  const chartPts = CHART_PTS.map((v, i) => {
    const x = mainX + 22 + i * (190 / (CHART_PTS.length - 1));
    const y = mainY + 208 - v * 1.3;
    return `${x},${y}`;
  }).join(" ");

  const chartArea = [
    `${mainX + 22},${mainY + 208}`,
    ...CHART_PTS.map((v, i) => {
      const x = mainX + 22 + i * (190 / (CHART_PTS.length - 1));
      const y = mainY + 208 - v * 1.3;
      return `${x},${y}`;
    }),
    `${mainX + 22 + 190},${mainY + 208}`,
  ].join(" ");

  return (
    <svg viewBox={`0 0 680 470`} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs dangerouslySetInnerHTML={{ __html: DEFS }} />
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={G.p} stopOpacity="0.22" />
          <stop offset="100%" stopColor={G.p} stopOpacity="0" />
        </linearGradient>
        <clipPath id="dashClip">
          <rect x="10" y="10" width={fw} height={fh} rx="16" />
        </clipPath>
      </defs>

      {/* ── OUTER FRAME ── */}
      <rect x="10" y="10" width={fw} height={fh} rx="16"
        fill="#fff" filter="url(#cardShadow)" />
      <rect x="10" y="10" width={fw} height={fh} rx="16"
        fill="#fff" stroke="#E5E7EB" strokeWidth="1" />

      {/* ── HEADER BAR ── */}
      <rect x="10" y="10" width={fw} height={headerH} rx="0" fill="#FAFAFA"
        style={{ clipPath: "inset(0 0 0 0 round 16px 16px 0 0)" }} />
      <text x="26" y="33" fill="#1F2937" fontSize="11" fontWeight="800">KANNANWARE</text>
      {/* search */}
      <rect x={mainX + 30} y="18" width="130" height="20" rx="6" fill="#F3F4F6" />
      <text x={mainX + 45} y="32" fill="#9CA3AF" fontSize="8">🔍  Search...</text>
      {/* icons */}
      <text x={fw - 60} y="32" fontSize="13">🔔</text>
      <circle cx={fw - 28} cy="29" r="10" fill={G.p} />
      <text x={fw - 28} y="33" textAnchor="middle" fill="#090909" fontSize="7" fontWeight="800">KW</text>
      {/* separator */}
      <line x1="10" y1={mainY} x2={fw + 10} y2={mainY} stroke="#F0F0F0" strokeWidth="1" />

      {/* ── SIDEBAR ── */}
      <rect x="10" y={mainY} width={sideW} height={mainH} fill="#F8F9FA" />
      <line x1={10 + sideW} y1={mainY} x2={10 + sideW} y2={mainY + mainH} stroke="#F0F0F0" />
      {NAV_ITEMS.map((item, i) => {
        const active = i === 0;
        return (
          <g key={item}>
            {active && <rect x="10" y={mainY + 8 + i * 32} width={sideW} height="26" fill={G.pale} />}
            {active && <rect x="10" y={mainY + 8 + i * 32} width="3" height="26" fill={G.p} rx="1" />}
            <text x="26" y={mainY + 25 + i * 32} fill={active ? G.d : "#64748B"}
              fontSize="8.5" fontWeight={active ? "700" : "500"}>{item}</text>
          </g>
        );
      })}

      {/* ── MAIN CONTENT ── */}
      {/* KPI Cards row */}
      {KPIS.map((kpi, i) => {
        const cardX = mainX + 12 + i * 130;
        const cardY = mainY + 12;
        return (
          <g key={kpi.label}>
            <rect x={cardX} y={cardY} width="118" height="62" rx="10"
              fill="#fff" stroke="#F0F0F0" strokeWidth="1" filter="url(#cardShadow)" />
            <text x={cardX + 10} y={cardY + 18} fill="#9CA3AF" fontSize="7" fontWeight="600">{kpi.label}</text>
            <text x={cardX + 10} y={cardY + 36} fill="#1F2937" fontSize="14" fontWeight="800">{kpi.value}</text>
            <rect x={cardX + 10} y={cardY + 43} width="50" height="12" rx="6" fill={`${kpi.color}22`} />
            <text x={cardX + 35} y={cardY + 52} textAnchor="middle" fill={kpi.color} fontSize="6.5" fontWeight="700">↑ {kpi.trend}</text>
            <text x={cardX + 72} y={cardY + 52} fill="#CBD5E1" fontSize="6">vs last qtr</text>
          </g>
        );
      })}

      {/* Revenue Trend Chart */}
      <rect x={mainX + 12} y={mainY + 88} width="210" height="140" rx="10"
        fill="#fff" stroke="#F0F0F0" strokeWidth="1" />
      <text x={mainX + 22} y={mainY + 106} fill="#1F2937" fontSize="8.5" fontWeight="700">Revenue Trend</text>
      <text x={mainX + 22} y={mainY + 120} fill="#9CA3AF" fontSize="7">May 2024 — $4.8 Cr</text>
      {/* Y-axis dashes */}
      {[0,1,2,3].map(i => (
        <line key={i} x1={mainX + 22} y1={mainY + 135 + i * 28} x2={mainX + 215} y2={mainY + 135 + i * 28}
          stroke="#F5F5F5" strokeWidth="1" />
      ))}
      {/* chart fill */}
      <polygon points={chartArea} fill="url(#chartFill)" />
      {/* chart line */}
      <polyline points={chartPts} fill="none" stroke={G.p} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* last point dot */}
      {(() => {
        const pts = chartPts.split(" ");
        const last = pts[pts.length - 1].split(",");
        return <circle cx={last[0]} cy={last[1]} r="4" fill={G.p} stroke="#fff" strokeWidth="1.5" />;
      })()}

      {/* Products list */}
      <rect x={mainX + 234} y={mainY + 88} width="175" height="140" rx="10"
        fill="#fff" stroke="#F0F0F0" strokeWidth="1" />
      <text x={mainX + 244} y={mainY + 106} fill="#1F2937" fontSize="8.5" fontWeight="700">Top Products</text>
      {PRODUCTS.map((p, i) => (
        <g key={p.name}>
          <text x={mainX + 244} y={mainY + 125 + i * 36} fill="#374151" fontSize="7.5" fontWeight="600">{p.name}</text>
          <rect x={mainX + 244} y={mainY + 130 + i * 36} width={p.bar + 10} height="7" rx="3" fill={G.soft} />
          <rect x={mainX + 244} y={mainY + 130 + i * 36} width={p.bar} height="7" rx="3" fill={G.p} />
          <text x={mainX + 365} y={mainY + 137 + i * 36} textAnchor="end" fill={G.d} fontSize="7.5" fontWeight="700">{p.val}</text>
        </g>
      ))}

      {/* Inventory status donut */}
      <rect x={mainX + 420} y={mainY + 88} width="140" height="140" rx="10"
        fill="#fff" stroke="#F0F0F0" strokeWidth="1" />
      <text x={mainX + 430} y={mainY + 106} fill="#1F2937" fontSize="8.5" fontWeight="700">Inventory</text>
      {/* Donut */}
      <circle cx={mainX + 480} cy={mainY + 170} r="30" fill="none" stroke="#F0F0F0" strokeWidth="14" />
      <circle cx={mainX + 480} cy={mainY + 170} r="30" fill="none" stroke={G.p} strokeWidth="14"
        strokeDasharray="113 75" strokeDashoffset="28" strokeLinecap="round" />
      <circle cx={mainX + 480} cy={mainY + 170} r="30" fill="none" stroke="#3B82F6" strokeWidth="14"
        strokeDasharray="47 141" strokeDashoffset="-85" strokeLinecap="round" />
      <circle cx={mainX + 480} cy={mainY + 170} r="30" fill="none" stroke="#E5E7EB" strokeWidth="14"
        strokeDasharray="28 160" strokeDashoffset="-132" strokeLinecap="round" />
      <text x={mainX + 480} y={mainY + 168} textAnchor="middle" fill="#1F2937" fontSize="9" fontWeight="800">65%</text>
      <text x={mainX + 480} y={mainY + 180} textAnchor="middle" fill="#9CA3AF" fontSize="6">In Stock</text>
      {/* Legend */}
      {[
        { c: G.p, t: "In Stock 65%" },
        { c: "#3B82F6", t: "On Order 25%" },
        { c: "#E5E7EB", t: "Low Stock 10%" },
      ].map((l, i) => (
        <g key={i}>
          <rect x={mainX + 425} y={mainY + 116 + i * 14} width="7" height="7" rx="2" fill={l.c} />
          <text x={mainX + 436} y={mainY + 123 + i * 14} fill="#64748B" fontSize="6.5">{l.t}</text>
        </g>
      ))}
    </svg>
  );
}
