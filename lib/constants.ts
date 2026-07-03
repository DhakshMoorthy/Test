export const COLORS = {
  background: "#05070A",
  surface: "#0A0E14",
  surfaceLight: "#111820",
  accent: "#2563EB",
  accentLight: "#3B82F6",
  accentGlow: "#60A5FA",
  text: "#F8FAFC",
  textMuted: "#94A3B8",
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
  { id: "order", label: "Customer places order", icon: "🛒" },
  { id: "sales", label: "Sales confirms", icon: "✅" },
  { id: "warehouse", label: "Warehouse checks stock", icon: "📦" },
  { id: "robot", label: "Robot picks items", icon: "🤖" },
  { id: "forklift", label: "Forklift transports pallet", icon: "🚜" },
  { id: "truck", label: "Truck loads", icon: "🚛" },
  { id: "invoice", label: "Invoice generated", icon: "📄" },
  { id: "payment", label: "Finance receives payment", icon: "💰" },
  { id: "dashboard", label: "Dashboard updates instantly", icon: "📊" },
] as const;

export const AI_AGENTS = [
  { id: "anomaly", label: "Detect anomalies", description: "Real-time pattern recognition" },
  { id: "approve", label: "Approve purchase orders", description: "Smart workflow automation" },
  { id: "forecast", label: "Forecast demand", description: "Predictive analytics engine" },
  { id: "maintenance", label: "Predict maintenance", description: "IoT-driven insights" },
  { id: "inventory", label: "Recommend inventory", description: "Optimal stock levels" },
  { id: "risk", label: "Flag financial risks", description: "Proactive compliance" },
] as const;

export const INDUSTRIES = [
  { id: "manufacturing", label: "Manufacturing", color: "#3B82F6", description: "Smart factories with real-time production tracking" },
  { id: "retail", label: "Retail", color: "#8B5CF6", description: "Omnichannel inventory and customer experience" },
  { id: "healthcare", label: "Healthcare", color: "#10B981", description: "Patient records and supply chain compliance" },
  { id: "construction", label: "Construction", color: "#F59E0B", description: "Project costing and resource allocation" },
  { id: "logistics", label: "Logistics", color: "#06B6D4", description: "Fleet management and route optimization" },
  { id: "automotive", label: "Automotive", color: "#EF4444", description: "Supply chain and quality control" },
] as const;

export const GROWTH_METRICS = [
  { id: "costs", label: "Costs", direction: "down" as const, value: 32 },
  { id: "productivity", label: "Productivity", direction: "up" as const, value: 47 },
  { id: "revenue", label: "Revenue", direction: "up" as const, value: 58 },
  { id: "satisfaction", label: "Customer Satisfaction", direction: "up" as const, value: 41 },
  { id: "speed", label: "Speed", direction: "up" as const, value: 63 },
] as const;

export const CHAOS_WARNINGS = [
  "Where is my order?",
  "Payment delayed",
  "Inventory mismatch",
  "Manual approval pending",
] as const;

export const NAV_LINKS = [
  { href: "#chaos", label: "The Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#journey", label: "Journey" },
  { href: "#ai", label: "AI" },
  { href: "#industries", label: "Industries" },
] as const;
