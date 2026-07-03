/* Legacy alias so old illustration files still compile */
export const GOLD = { primary: "#faab18", light: "#fbbf24", dark: "#d4890a", pale: "#fff8eb", glow: "#fcd34d", line: "#fcd34d" } as const;

export function SapScreen({ x = 0, y = 0, w = 48, h = 32, label = "SAP" }: { x?: number; y?: number; w?: number; h?: number; label?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="4" fill="#1a1a1a" stroke={GOLD.primary} strokeWidth="1.5" />
      <rect x={x + 4} y={y + 4} width={w - 8} height={6} rx="1" fill={GOLD.primary} opacity="0.8" />
      <text x={x + w / 2} y={y + 9} textAnchor="middle" fill="#090909" fontSize="4" fontWeight="700">{label}</text>
      <rect x={x + 4} y={y + 14} width={w * 0.6} height={3} rx="1" fill="#333" />
      <rect x={x + 4} y={y + 20} width={w * 0.4} height={3} rx="1" fill="#333" />
      {h > 30 && <rect x={x + 4} y={y + 26} width={w * 0.7} height={3} rx="1" fill={GOLD.dark} opacity="0.5" />}
    </g>
  );
}

export function DataFlow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={GOLD.primary} strokeWidth="2"
      strokeLinecap="round" className="animate-dash" opacity="0.7" />
  );
}

export function FactoryBuilding({ x = 0, y = 0, w = 60, h = 45 }: { x?: number; y?: number; w?: number; h?: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="0" y="0" width={w} height={h} rx="2" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" />
      {[8, 24, 40].filter(c => c + 14 <= w).map((col) => (
        <rect key={col} x={col} y="8" width="10" height="12" rx="1" fill="#BFDBFE" opacity="0.5" />
      ))}
      <rect x={w / 2 - 4} y={-12} width="8" height="14" rx="1" fill="#9CA3AF" />
      <ellipse cx={w / 2} cy={-14} rx="3" ry="2" fill="#D1D5DB" opacity="0.6" />
    </g>
  );
}

export function AlertBadge({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="0" y="0" width={text.length * 5 + 16} height="14" rx="7" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
      <circle cx="8" cy="7" r="3" fill="#EF4444" />
      <text x="14" y="9" fill="#B91C1C" fontSize="5" fontWeight="600">{text}</text>
    </g>
  );
}

export function Forklift({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="0" y="8" width="28" height="12" rx="2" fill={GOLD.primary} />
      <rect x="22" y="0" width="4" height="20" rx="1" fill="#94A3B8" />
      <rect x="18" y="0" width="8" height="3" rx="1" fill="#64748B" />
      <circle cx="6" cy="22" r="4" fill="#1F2937" /><circle cx="22" cy="22" r="4" fill="#1F2937" />
      <circle cx="6" cy="22" r="2" fill="#4B5563" /><circle cx="22" cy="22" r="2" fill="#4B5563" />
    </g>
  );
}

export function Truck({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="0" y="6" width="36" height="14" rx="2" fill={GOLD.dark} />
      <rect x="28" y="2" width="12" height="18" rx="2" fill={GOLD.primary} />
      <rect x="30" y="6" width="8" height="6" rx="1" fill="#BFDBFE" opacity="0.6" />
      <circle cx="8" cy="22" r="4" fill="#1F2937" /><circle cx="28" cy="22" r="4" fill="#1F2937" />
    </g>
  );
}

export function Person({ x = 0, y = 0, variant = "office", facing = "right", scale = 1 }: { x?: number; y?: number; variant?: "office" | "worker" | "manager"; facing?: "left" | "right"; scale?: number }) {
  const flip = facing === "left" ? -1 : 1;
  const suit = variant === "worker" ? "#4B5563" : variant === "manager" ? "#1F2937" : "#374151";
  return (
    <g transform={`translate(${x},${y}) scale(${flip * scale},${scale})`}>
      {variant === "worker" && <ellipse cx="0" cy="-28" rx="9" ry="3" fill={GOLD.primary} />}
      <rect x="-5" y="-18" width="10" height="14" rx="3" fill={suit} />
      <rect x="-4" y="-6" width="3.5" height="10" rx="1.5" fill="#1F2937" />
      <rect x="0.5" y="-6" width="3.5" height="10" rx="1.5" fill="#1F2937" />
      <circle cx="0" cy="-22" r="5" fill="#E8B89D" />
    </g>
  );
}

export function WarehouseRack({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="0" y="0" width="40" height="50" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
      {[0, 16, 32].map((row) => (
        <g key={row}>
          <line x1="0" y1={row + 4} x2="40" y2={row + 4} stroke="#CBD5E1" strokeWidth="1" />
          {[4, 20, 36].map((col) => (
            <rect key={col} x={col - 6} y={row + 6} width="10" height="8" rx="1" fill={GOLD.pale} stroke={GOLD.light} strokeWidth="0.5" />
          ))}
        </g>
      ))}
    </g>
  );
}

export const G = {
  p:    "#faab18",
  l:    "#fbbf24",
  d:    "#d4890a",
  pale: "#fff8eb",
  soft: "#fef3c7",
  glow: "rgba(250,171,24,0.18)",
  line: "#fcd34d",
} as const;

export const DEFS = `
  <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="rgba(15,23,42,0.08)"/>
  </filter>
  <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="rgba(250,171,24,0.35)"/>
  </filter>
  <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
    <feDropShadow dx="0" dy="3" stdDeviation="8" flood-color="rgba(15,23,42,0.06)"/>
  </filter>
`;

/* ── Icon path generators (centered at 0,0) ── */
export function FinanceIcon({ s = 9, c = G.d }: { s?: number; c?: string }) {
  return (
    <g stroke={c} strokeWidth="1.4" strokeLinecap="round">
      <rect x={-s} y={-3} width={s * 0.55} height={8} rx="1" fill={c} stroke="none" opacity="0.9" />
      <rect x={-1.5} y={-7} width={s * 0.55} height={12} rx="1" fill={c} stroke="none" opacity="0.9" />
      <rect x={s - s * 0.45} y={-s + 2} width={s * 0.55} height={s + 3} rx="1" fill={c} stroke="none" opacity="0.9" />
    </g>
  );
}

export function HRIcon({ s = 9, c = G.d }: { s?: number; c?: string }) {
  return (
    <g fill={c}>
      <circle cx="0" cy={-s + 4} r={s * 0.42} />
      <path d={`M ${-s + 1},${s - 1} C ${-s + 1},${-1} ${s - 1},${-1} ${s - 1},${s - 1} Z`} />
    </g>
  );
}

export function SalesIcon({ s = 9, c = G.d }: { s?: number; c?: string }) {
  return (
    <g fill="none" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${-s},${-s + 2} L ${-s + 3},${-s + 2} L ${-s + 6},${s - 4} L ${s - 3},${s - 4} L ${s},${-s + 7} L ${-s + 3},${-s + 7}`} />
      <circle cx={-s + 7} cy={s} r="2.2" fill={c} stroke="none" />
      <circle cx={s - 3} cy={s} r="2.2" fill={c} stroke="none" />
    </g>
  );
}

export function CRMIcon({ s = 9, c = G.d }: { s?: number; c?: string }) {
  return (
    <g fill="none" stroke={c} strokeWidth="1.4" strokeLinecap="round">
      <rect x={-s} y={-s} width={s * 1.4} height={s} rx="3" />
      <path d={`M ${-s + 2},${0} L ${-s},${s * 0.8} L ${-s + 5},${0}`} fill={c} stroke="none" />
      <rect x={-s + 5} y={-s * 0.4} width={s * 1.3} height={s * 0.85} rx="3" />
      <path d={`M ${s - 1},${s * 0.45} L ${s + 2},${s} L ${s - 5},${s * 0.45}`} fill={c} stroke="none" />
    </g>
  );
}

export function MfgIcon({ s = 9, c = G.d }: { s?: number; c?: string }) {
  return (
    <g fill={c}>
      <circle cx="0" cy="0" r={s * 0.45} fill="none" stroke={c} strokeWidth="1.8" />
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x={-1.8} y={-s} width="3.6" height="4.5" rx="1"
          transform={`rotate(${i * 60})`} />
      ))}
    </g>
  );
}

export function WarehouseIcon({ s = 9, c = G.d }: { s?: number; c?: string }) {
  return (
    <g fill="none" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M ${-s},${0} L ${0},${-s} L ${s},${0} L ${s},${s} L ${-s},${s} Z`} />
      <rect x={-2.5} y={s * 0.2} width="5" height={s * 0.8} rx="1" fill={c} stroke="none" />
      <line x1={-s * 0.55} y1={-s * 0.1} x2={-s * 0.55} y2={s * 0.9} />
      <line x1={s * 0.55} y1={-s * 0.1} x2={s * 0.55} y2={s * 0.9} />
    </g>
  );
}

export function ProcureIcon({ s = 9, c = G.d }: { s?: number; c?: string }) {
  return (
    <g fill="none" stroke={c} strokeWidth="1.4" strokeLinecap="round">
      <rect x={-s} y={-s} width={s * 2} height={s * 2} rx="2" />
      <line x1={-s * 0.5} y1={-s * 0.3} x2={s * 0.5} y2={-s * 0.3} />
      <line x1={-s * 0.5} y1={s * 0.1} x2={s * 0.5} y2={s * 0.1} />
      <line x1={-s * 0.5} y1={s * 0.55} x2={0} y2={s * 0.55} />
    </g>
  );
}
