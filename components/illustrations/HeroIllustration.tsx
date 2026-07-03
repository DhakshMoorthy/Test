"use client";

import { G, DEFS, FinanceIcon, HRIcon, SalesIcon, CRMIcon, MfgIcon, WarehouseIcon, ProcureIcon } from "./shared";

interface NodeProps {
  cx: number; cy: number; label: string;
  lx: number; ly: number;
  children: React.ReactNode;
}

function DeptNode({ cx, cy, label, lx, ly, children }: NodeProps) {
  return (
    <g>
      {/* connection line */}
      <line x1={cx} y1={cy} x2={lx} y2={ly}
        stroke={G.p} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
      {/* dot on cube end */}
      <circle cx={lx} cy={ly} r="4" fill={G.p} />
      {/* outer glow ring */}
      <circle cx={cx} cy={cy} r="32" fill={G.pale} filter="url(#cardShadow)" />
      <circle cx={cx} cy={cy} r="32" fill="#fff" stroke={G.p} strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r="22" fill={G.soft} />
      {/* icon */}
      <g transform={`translate(${cx},${cy})`}>{children}</g>
      {/* label */}
      <text x={cx} y={cy + 48} textAnchor="middle" fill="#374151" fontSize="10" fontWeight="700">{label}</text>
    </g>
  );
}

export default function HeroIllustration() {
  /* Platform center: (300, 330). Cube top at (300, 190). */
  const cubeTop: [number, number] = [300, 235];

  const nodes = [
    { cx: 300, cy: 62,  label: "Finance",     lx: 300,        ly: cubeTop[1]-18, Icon: FinanceIcon   },
    { cx: 112, cy: 175, label: "HR",           lx: cubeTop[0]-46, ly: cubeTop[1]+8, Icon: HRIcon      },
    { cx: 488, cy: 175, label: "Sales",        lx: cubeTop[0]+46, ly: cubeTop[1]+8, Icon: SalesIcon   },
    { cx: 102, cy: 330, label: "Warehouse",    lx: cubeTop[0]-46, ly: cubeTop[1]+50, Icon: WarehouseIcon },
    { cx: 498, cy: 330, label: "CRM",          lx: cubeTop[0]+46, ly: cubeTop[1]+50, Icon: CRMIcon    },
    { cx: 300, cy: 430, label: "Manufacturing",lx: 300,        ly: cubeTop[1]+68, Icon: MfgIcon       },
    { cx: 188, cy: 76,  label: "Procurement",  lx: cubeTop[0]-28, ly: cubeTop[1]-12, Icon: ProcureIcon },
  ];

  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <defs dangerouslySetInnerHTML={{ __html: DEFS }} />
      <defs>
        <radialGradient id="platGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#fff" />
          <stop offset="100%" stopColor={G.soft} />
        </radialGradient>
        <radialGradient id="platGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={G.p} stopOpacity="0.12" />
          <stop offset="100%" stopColor={G.p} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cubeTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={G.l} />
          <stop offset="100%" stopColor={G.p} />
        </linearGradient>
        <linearGradient id="cubeLeft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={G.d} />
          <stop offset="100%" stopColor={G.p} />
        </linearGradient>
        <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={G.p} />
          <stop offset="100%" stopColor="#e8970a" />
        </linearGradient>
      </defs>

      {/* ── PLATFORM ── */}
      {/* shadow */}
      <ellipse cx="300" cy="355" rx="225" ry="40" fill="rgba(15,23,42,0.06)" />
      {/* edge */}
      <path d="M 75,330 A 225,72 0 0,0 525,330 L 525,348 A 225,72 0 0,1 75,348 Z"
        fill={G.soft} opacity="0.7" />
      {/* outer glow */}
      <ellipse cx="300" cy="330" rx="225" ry="72" fill="url(#platGlow)" />
      {/* surface */}
      <ellipse cx="300" cy="330" rx="222" ry="70" fill="url(#platGrad)" stroke={G.line} strokeWidth="1.2" />

      {/* surface grid on platform */}
      {[-150,-75,0,75,150].map(dx => (
        <line key={dx} x1={300+dx} y1={330-70*Math.sqrt(1-(dx/222)**2)} x2={300+dx} y2={330+70*Math.sqrt(1-(dx/222)**2)}
          stroke={G.soft} strokeWidth="0.8" opacity="0.6" />
      ))}
      {[-40,-20,0,20,40].map(dy => {
        const rx2 = 222 * Math.sqrt(1-(dy/70)**2);
        return <line key={dy} x1={300-rx2} y1={330+dy} x2={300+rx2} y2={330+dy}
          stroke={G.soft} strokeWidth="0.8" opacity="0.6" />;
      })}

      {/* ── DEPT NODES (draw under cube) ── */}
      {nodes.map(({ cx, cy, label, lx, ly, Icon }) => (
        <DeptNode key={label} cx={cx} cy={cy} label={label} lx={lx} ly={ly}>
          <Icon s={10} c={G.d} />
        </DeptNode>
      ))}

      {/* ── ISOMETRIC CUBE ── */}
      {/* cube drop shadow */}
      <ellipse cx="300" cy="318" rx="55" ry="16" fill="rgba(15,23,42,0.12)" />
      {/* top face */}
      <path d="M 300,185 L 356,218 L 300,251 L 244,218 Z" fill="url(#cubeTop)" />
      {/* left face */}
      <path d="M 244,218 L 300,251 L 300,311 L 244,278 Z" fill="url(#cubeLeft)" />
      {/* right face */}
      <path d="M 356,218 L 300,251 L 300,311 L 356,278 Z" fill="url(#cubeRight)" />
      {/* top face edge lines */}
      <path d="M 300,185 L 356,218 L 300,251 L 244,218 Z" fill="none" stroke="#fff" strokeWidth="0.8" opacity="0.5" />
      {/* logo text on top face */}
      <text x="300" y="218" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="900" transform="skewX(-10) skewY(5)">KANNANWARE</text>
      <text x="300" y="233" textAnchor="middle" fill={G.pale} fontSize="6.5" fontWeight="700" transform="skewX(-10) skewY(5)">ERP</text>
      {/* glowing dot on top */}
      <circle cx="300" cy="168" r="8" fill="#090909" stroke={G.p} strokeWidth="2" filter="url(#glowFilter)" />
      <text x="300" y="172" textAnchor="middle" fill={G.p} fontSize="5.5" fontWeight="800">AI</text>
    </svg>
  );
}
