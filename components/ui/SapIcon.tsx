import {
  BarChart3,
  Bot,
  Building2,
  Check,
  Cog,
  Factory,
  FileText,
  Handshake,
  LayoutDashboard,
  Lightbulb,
  MapPin,
  MessageSquare,
  RefreshCw,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

const ICONS = {
  shield: ShieldCheck,
  map: MapPin,
  factory: Factory,
  lightbulb: Lightbulb,
  cog: Cog,
  users: Users,
  chart: BarChart3,
  trend: TrendingUp,
  automation: Bot,
  chat: MessageSquare,
  search: Search,
  settings: Settings,
  rocket: Rocket,
  handshake: Handshake,
  ledger: FileText,
  analytics: BarChart3,
  report: Building2,
  sync: RefreshCw,
  dashboard: LayoutDashboard,
} as const;

export type IconName = keyof typeof ICONS;

type Props = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function SapIcon({ name, className = "h-5 w-5", strokeWidth = 1.75 }: Props) {
  const Icon: LucideIcon = ICONS[name];
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}

export function CheckIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return <Check className={className} strokeWidth={2.5} aria-hidden="true" />;
}
