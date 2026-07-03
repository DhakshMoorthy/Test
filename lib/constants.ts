export const COLORS = {
  background: "#FFFFFF",
  surface: "#F8FAFC",
  surfaceLight: "#F1F5F9",
  accent: "#2563EB",
  accentLight: "#3B82F6",
  accentGlow: "#60A5FA",
  text: "#0F172A",
  textMuted: "#64748B",
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
} as const;

export const DEPARTMENTS = [
  { id: "finance", label: "Finance", angle: 0 },
  { id: "hr", label: "HR", angle: 51 },
  { id: "sales", label: "Sales", angle: 102 },
  { id: "crm", label: "CRM", angle: 153 },
  { id: "manufacturing", label: "Manufacturing", angle: 204 },
  { id: "warehouse", label: "Warehouse", angle: 255 },
  { id: "procurement", label: "Procurement", angle: 306 },
] as const;

export const ORDER_STEPS = [
  { id: "order", label: "Order Placed", icon: "🛒" },
  { id: "stock", label: "Stock Check", icon: "📦" },
  { id: "production", label: "Production", icon: "⚙️" },
  { id: "delivery", label: "Delivery", icon: "🚛" },
  { id: "invoice", label: "Invoice", icon: "📄" },
  { id: "payment", label: "Payment", icon: "💰" },
] as const;

export const AI_AGENTS = [
  { id: "forecast", label: "Demand Forecasting", description: "Predict demand with AI-driven models" },
  { id: "anomaly", label: "Risk Detection", description: "Spot anomalies before they escalate" },
  { id: "approve", label: "Auto Approvals", description: "Smart workflow automation" },
  { id: "inventory", label: "Cost Optimization", description: "Reduce spend across operations" },
] as const;

export const INDUSTRIES = [
  { id: "manufacturing", label: "Manufacturing", color: "#2563EB", description: "Smart factories with real-time production tracking" },
  { id: "retail", label: "Retail", color: "#7C3AED", description: "Omnichannel inventory and customer experience" },
  { id: "healthcare", label: "Healthcare", color: "#10B981", description: "Patient records and supply chain compliance" },
  { id: "construction", label: "Construction", color: "#F59E0B", description: "Project costing and resource allocation" },
  { id: "logistics", label: "Logistics", color: "#06B6D4", description: "Fleet management and route optimization" },
  { id: "automotive", label: "Automotive", color: "#EF4444", description: "Supply chain and quality control" },
] as const;

export const KPI_METRICS = [
  { id: "costs", label: "Operating Costs", direction: "down" as const, value: 30, icon: "📉" },
  { id: "productivity", label: "Productivity", direction: "up" as const, value: 45, icon: "📈" },
  { id: "decisions", label: "Faster Decisions", direction: "up" as const, value: 60, icon: "⚡" },
  { id: "satisfaction", label: "Customer Satisfaction", direction: "up" as const, value: 35, icon: "😊" },
  { id: "manual", label: "Manual Work", direction: "down" as const, value: 70, icon: "🤖" },
  { id: "accuracy", label: "Data Accuracy", direction: "up" as const, value: 100, icon: "✓" },
] as const;

export const COMPANY_STATS = [
  { label: "Years", value: 25, suffix: "+" },
  { label: "Happy Customers", value: 1000, suffix: "+" },
  { label: "Countries", value: 50, suffix: "+" },
  { label: "Support", value: 24, suffix: "/7" },
] as const;

export const CHAOS_WARNINGS = [
  { text: "Data mismatch", type: "danger" },
  { text: "Out of stock!", type: "danger" },
  { text: "Payment delayed", type: "warning" },
  { text: "Manual approval pending", type: "warning" },
] as const;

export const NAV_LINKS = [
  { href: "#solution", label: "Solutions" },
  { href: "#industries", label: "Industries" },
  { href: "#journey", label: "Services" },
  { href: "#ai", label: "Resources" },
  { href: "#finale", label: "About Us" },
] as const;

export const HERO_STATS = [
  { label: "Revenue", value: "$2.4M", trend: "+12%" },
  { label: "Profit", value: "$680K", trend: "+8%" },
  { label: "Cost Saved", value: "$320K", trend: "+15%" },
] as const;
