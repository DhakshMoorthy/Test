export const GOLD = {
  primary: "#faab18",
  light: "#fbbf24",
  dark: "#d4890a",
  pale: "#fff8eb",
  line: "#fcd34d",
  glow: "rgba(250,171,24,0.35)",
} as const;

export function SapScreen({ x, y, w = 48, h = 32, label = "SAP" }: { x: number; y: number; w?: number; h?: number; label?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="4" fill="#1a1a1a" stroke={GOLD.primary} strokeWidth="1.5" />
      <rect x={x + 4} y={y + 4} width={w - 8} height={6} rx="1" fill={GOLD.primary} opacity="0.8" />
      <text x={x + w / 2} y={y + 9} textAnchor="middle" fill="#090909" fontSize="4" fontWeight="700">{label}</text>
      <rect x={x + 4} y={y + 14} width={w * 0.6} height={3} rx="1" fill="#333" />
      <rect x={x + 4} y={y + 20} width={w * 0.4} height={3} rx="1" fill="#333" />
      <rect x={x + 4} y={y + 26} width={w * 0.7} height={3} rx="1" fill={GOLD.dark} opacity="0.5" />
    </g>
  );
}

export function Person({
  x, y, scale = 1, variant = "office", facing = "right",
}: { x: number; y: number; scale?: number; variant?: "office" | "worker" | "manager"; facing?: "left" | "right" }) {
  const flip = facing === "left" ? -1 : 1;
  const skin = "#E8B89D";
  const suit = variant === "worker" ? "#4B5563" : variant === "manager" ? "#1F2937" : "#374151";
  const accent = variant === "worker" ? GOLD.primary : "#6B7280";

  return (
    <g transform={`translate(${x},${y}) scale(${flip * scale},${scale})`}>
      {variant === "worker" && (
        <ellipse cx="0" cy="-28" rx="9" ry="3" fill={GOLD.primary} />
      )}
      <rect x="-5" y="-18" width="10" height="14" rx="3" fill={suit} />
      <rect x="-4" y="-6" width="3.5" height="10" rx="1.5" fill="#1F2937" />
      <rect x="0.5" y="-6" width="3.5" height="10" rx="1.5" fill="#1F2937" />
      <circle cx="0" cy="-22" r="5" fill={skin} />
      {variant === "office" && (
        <rect x="-8" y="-16" width="6" height="8" rx="1" fill="#fff" stroke="#ccc" strokeWidth="0.5" />
      )}
      {variant === "manager" && (
        <rect x="-6" y="-20" width="12" height="2" rx="1" fill={accent} />
      )}
      <rect x="-7" y="-10" width="14" height="1" fill={accent} opacity="0.6" />
    </g>
  );
}

export function WarehouseRack({ x, y }: { x: number; y: number }) {
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

export function Forklift({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="0" y="8" width="28" height="12" rx="2" fill={GOLD.primary} />
      <rect x="22" y="0" width="4" height="20" rx="1" fill="#94A3B8" />
      <rect x="18" y="0" width="8" height="3" rx="1" fill="#64748B" />
      <circle cx="6" cy="22" r="4" fill="#1F2937" />
      <circle cx="22" cy="22" r="4" fill="#1F2937" />
      <circle cx="6" cy="22" r="2" fill="#4B5563" />
      <circle cx="22" cy="22" r="2" fill="#4B5563" />
    </g>
  );
}

export function Truck({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="0" y="6" width="36" height="14" rx="2" fill={GOLD.dark} />
      <rect x="28" y="2" width="12" height="18" rx="2" fill={GOLD.primary} />
      <rect x="30" y="6" width="8" height="6" rx="1" fill="#BFDBFE" opacity="0.6" />
      <circle cx="8" cy="22" r="4" fill="#1F2937" />
      <circle cx="28" cy="22" r="4" fill="#1F2937" />
    </g>
  );
}

export function FactoryBuilding({ x, y, w = 60, h = 45 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="0" y="0" width={w} height={h} rx="2" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" />
      {[8, 24, 40].map((col) => (
        <rect key={col} x={col} y="8" width="10" height="12" rx="1" fill="#BFDBFE" opacity="0.5" />
      ))}
      <rect x={w / 2 - 4} y={-12} width="8" height="14" rx="1" fill="#9CA3AF" />
      <ellipse cx={w / 2} cy={-14} rx="3" ry="2" fill="#D1D5DB" opacity="0.6" className="animate-float" />
    </g>
  );
}

export function DataFlow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={GOLD.primary}
      strokeWidth="2"
      strokeLinecap="round"
      className="animate-dash"
      opacity="0.7"
    />
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
