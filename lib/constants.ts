export const NAV_ITEMS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "AI & Joule", href: "#ai" },
  { label: "Methodology", href: "#approach" },
  { label: "About", href: "#expertise" },
] as const;

export const SITE = {
  name: "Kannanware",
  logo: "/assets/static/kw-logo.png",
  logoFooter: "/assets/static/kw-logo-footer.CgOMN5zW.png",
  stagIcon: "/assets/static/stag-big.png",
  phone: "+91 91507 66678",
  email: "admin@kannanware.com",
  region: "IN",
} as const;

export const HERO = {
  badge: "SAP Transformation with Embedded AI",
  eyebrow: "Cloud ERP and AI for",
  title: "Small & Medium-Sized businesses",
  subtitle:
    "AI-powered SAP solutions purpose-built for small and medium-sized businesses — automating reconciliation, predicting cash flows, strengthening controls, and enabling smarter decisions.",
  pills: ["AI-First Delivery", "Built for growing businesses", "SAP Joule Ready"],
  primaryCta: "Explore AI Solutions",
  secondaryCta: "See AI in Action",
  stats: [
    { value: 10, suffix: "x", label: "Faster Reconciliation" },
    { value: 95, suffix: "%", label: "Prediction Accuracy" },
    { value: 60, suffix: "%", label: "Manual Work Reduced" },
  ],
} as const;

export const METRICS = [
  { value: 15, suffix: "+", label: "Enterprise Clients", sub: "Multi-city Coverage" },
  { value: 35, suffix: "K", label: "Project Hours Delivered", sub: "Cost-Effective Delivery" },
  { value: 10, suffix: "+", label: "Years Domain Expertise", sub: "Domain Specialists" },
  { value: 80, suffix: "%", label: "SAP-Certified Consultants", sub: "Local Talent, Global Standards" },
  { value: 10, suffix: "+", label: "Industry Verticals Served", sub: "Manufacturing to BFSI" },
] as const;

export const EXPERTISE = {
  eyebrow: "Our Value Proposition",
  title: "Your SAP Partner for Operational Transformation",
  description:
    "From our Chennai delivery centre, we help enterprises transform with SAP — combining GST compliance, manufacturing and compliance alignment, and cost-effective delivery.",
  cards: [
    {
      icon: "shield" as const,
      title: "Statutory and Process Expertise",
      description:
        "80%+ SAP-certified consultants with GST, e-invoicing, TDS, MCA reporting, and statutory accounting built into every implementation.",
    },
    {
      icon: "map" as const,
      title: "Chennai Delivery Centre",
      description:
        "Cost-effective, high-quality SAP S/4HANA and Cloud ERP with experienced consultants and global standards, seamlessly integrated with your teams.",
    },
    {
      icon: "factory" as const,
      title: "Manufacturing-Aligned Delivery",
      description:
        "Purpose-built for local manufacturing, BFSI, FMCG, and services — PLI schemes, growth programs, and digital business ecosystem.",
    },
  ],
  checklist: [
    "35K+ Project Hours delivered",
    "15+ enterprise clients across sectors",
    "GST, e-way bill, e-invoicing & RBI compliance expertise",
    "Advisory, Execution & Expert-as-a-Service from one partner",
  ],
  quote:
    "Supporting scalable operations with SAP solutions that power enterprises to compete and grow globally.",
} as const;

export const APPROACH = {
  eyebrow: "Our Approach",
  title: "How Kannanware Delivers SAP Excellence",
  description:
    "Our advisory and delivery teams combine deep SAP expertise with GST, statutory accounting, and RBI compliance knowledge.",
  steps: [
    {
      step: "01",
      icon: "lightbulb" as const,
      title: "Advisory: SAP Strategy & Blueprint",
      description:
        "SAP transformation strategies aligned with GST, statutory accounting, RBI regulations, and digital business ecosystem.",
    },
    {
      step: "02",
      icon: "cog" as const,
      title: "Execution: Implement & Deliver",
      description:
        "Chennai-based S/4HANA and Cloud ERP implementations tailored for enterprises with full localization.",
    },
    {
      step: "03",
      icon: "users" as const,
      title: "Experts as a Service: On-Demand Talent",
      description:
        "On-demand access to certified functional and technical experts from our Chennai delivery centre.",
    },
  ],
  stepDetails: [
    {
      title: "Advisory: SAP Strategy & Blueprint",
      description:
        "Kannanware helps organizations define clear SAP transformation strategies that comply with GST, statutory accounting, and RBI regulations.",
      deliverables: ["Statutory assessment", "GST & compliance roadmap", "SAP transformation blueprint", "Business case & ROI"],
      image: "/assets/static/step-advisory-optimized.DGH23-zf.jpg",
    },
    {
      title: "Execution: Implement & Deliver",
      description:
        "Our Chennai-based specialists deliver SAP S/4HANA and Cloud ERP implementations with GST, e-invoicing, TDS, and statutory compliance at every milestone.",
      deliverables: ["S/4HANA configuration", "GST & e-invoicing setup", "Data migration & validation", "UAT & go-live support"],
      image: "/assets/static/step-advisory-optimized.DGH23-zf.jpg",
    },
    {
      title: "Experts as a Service: On-Demand Talent",
      description:
        "Leverage our SAP talent pool through on-demand access to certified functional and technical experts — flexible, cost-effective, and scalable.",
      deliverables: ["Certified SAP consultants", "Flexible engagement models", "Knowledge transfer", "Scalable project teams"],
      image: "/assets/static/step-advisory-optimized.DGH23-zf.jpg",
    },
  ],
} as const;

export const AI_SECTION = {
  eyebrow: "AI-Powered SAP",
  title: "AI-Powered SAP with Joule",
  lead: "Bringing AI-driven intelligence to enterprises.",
  description:
    "SAP Joule is transforming how businesses interact with their SAP systems. Kannanware helps organisations embed Joule across finance, procurement, and HR.",
  demos: [
    {
      icon: "chart" as const,
      title: "AI Financial Insights",
      query: "Show GST mismatches across all entities for Q3",
      response: "Found 3 GST mismatches totalling ₹2.4L across Chennai and Mumbai entities. ITC variance detected in vendor invoices from Oct 2025.",
    },
    {
      icon: "trend" as const,
      title: "Predictive Forecasting",
      query: "Forecast INR cash position for next 90 days",
      response: "Projected surplus of ₹1.2Cr by Q4 with 87% confidence. Seasonal demand spike expected in Nov — recommend increasing working capital buffer by 12%.",
    },
    {
      icon: "automation" as const,
      title: "Process Automation",
      query: "Automate TDS journal entries for vendor payments",
      response: "Configured 14 automation rules across FI/CO modules. Estimated 60% reduction in manual journal entries with full statutory audit trail.",
    },
    {
      icon: "chat" as const,
      title: "Conversational Analytics",
      query: "Compare P&L trends across manufacturing units",
      response: "Unit A margin improved 4.2% QoQ driven by raw material cost optimisation. Unit B shows 2.1% decline — recommend reviewing procurement contracts.",
    },
  ],
} as const;

export const DELIVERY = {
  eyebrow: "SAP Activate Methodology",
  title: "Proven delivery from our delivery model.",
  description:
    "Our Chennai delivery centre follows SAP Activate methodology with localized accelerators — delivering cost-effective, high-quality outcomes.",
  phases: [
    { phase: "01", icon: "search" as const, title: "Explore: Design & Blueprint", description: "Map local business processes and design an SAP roadmap for enterprises." },
    { phase: "02", icon: "settings" as const, title: "Realise: Configure & Develop", description: "Configure SAP with GST, TDS, e-invoicing, and statutory compliance at every milestone." },
    { phase: "03", icon: "rocket" as const, title: "Deploy: Test & Go Live", description: "AI-accelerated testing with statutory validation ensures GST compliance from day one." },
    { phase: "04", icon: "handshake" as const, title: "Run: Stabilize & Support", description: "Post go-live hypercare with Chennai-based PrimeCare and continuous statutory compliance." },
  ],
  phaseDetails: [
    {
      title: "Explore: Design & Blueprint",
      description:
        "We immerse ourselves in your business operations — interviewing stakeholders, auditing current systems, and mapping every process with localized regulatory requirements.",
      deliverables: ["Statutory process maps", "GST and statutory architecture", "Risk-prioritised roadmap", "INR business case & ROI model"],
      image: "/assets/static/method-discover.BBjv2god.jpg",
    },
    {
      title: "Realise: Configure & Develop",
      description:
        "Configure SAP with GST, TDS, e-invoicing, and statutory compliance at every milestone. Our Chennai team builds and validates solutions aligned to your blueprint.",
      deliverables: ["SAP configuration", "Custom development", "Integration testing", "Statutory validation"],
      image: "/assets/static/method-discover.BBjv2god.jpg",
    },
    {
      title: "Deploy: Test & Go Live",
      description:
        "AI-accelerated testing with statutory validation ensures GST compliance from day one. We manage cutover, hypercare, and a smooth transition to production.",
      deliverables: ["UAT & regression testing", "Cutover planning", "Go-live support", "Hypercare readiness"],
      image: "/assets/static/method-discover.BBjv2god.jpg",
    },
    {
      title: "Run: Stabilize & Support",
      description:
        "Post go-live hypercare with Chennai-based PrimeCare and continuous statutory compliance monitoring.",
      deliverables: ["PrimeCare support", "Statutory compliance monitoring", "Continuous improvement", "AMS & managed services"],
      image: "/assets/static/method-discover.BBjv2god.jpg",
    },
  ],
} as const;

export const GROW = {
  eyebrow: "GROW with SAP",
  title: "Accelerate growth. Grow with SAP.",
  description:
    "Kannanware helps fast-growing mid-companies adopt SAP S/4HANA Cloud with localisations — GST, e-invoicing, and statutory compliance built in from day one.",
  items: [
    { num: "01", title: "Advisory: SAP Strategy & Blueprint", bullets: ["Statutory assessment", "GST & compliance roadmap", "SAP transformation blueprint", "Business case & ROI"] },
    { num: "02", title: "Preconfigured Industry Templates", bullets: ["Discrete Manufacturing", "Automotive & Auto Components", "FMCG & Consumer Goods", "Agro & Food Processing"] },
    { num: "03", title: "End-to-End Implementation", bullets: ["Localized SAP S/4HANA implementation", "GST, e-invoicing, TDS setup", "Payroll and MCA reporting", "Data migration & validation"] },
    { num: "04", title: "Training & Change Management", bullets: ["Hindi & local-language training", "Digital adoption platforms", "Workforce change analysis", "Super-user programmes"] },
    { num: "05", title: "Experts as a Service", bullets: ["Chennai-based SAP consultants", "Flexible on-demand engagement", "Knowledge transfer built-in", "Scalable project teams"] },
  ],
} as const;

export const CFO = {
  eyebrow: "Office of the CFO",
  title: "Empowering Finance Leaders",
  description:
    "SAP solutions for CFO teams — automating GST compliance, streamlining Ind AS reporting, accelerating period-end closes, and delivering real-time analytics in INR.",
  services: [
    { icon: "ledger" as const, title: "SAP FI/CO", description: "End-to-end financial integrity with GST, TDS, and Ind AS compliance", tags: ["GST reconciliation", "Ind AS compliance", "MCA filing accuracy"] },
    { icon: "analytics" as const, title: "SAP Analytics Cloud (SAC)", description: "Real-time insight into local P&L, GST analytics, and INR forecasting", tags: ["Decision speed", "Forecast accuracy"] },
    { icon: "report" as const, title: "Group Reporting", description: "Ind AS consolidation with MCA audit trails and statutory disclosure", tags: ["MCA audit readiness", "Statutory close cycle"] },
    { icon: "sync" as const, title: "Intercompany Reconciliation", description: "Automated IC reconciliation across local entities with GST matching", tags: ["GST ITC matching", "TDS reconciliation"] },
    { icon: "dashboard" as const, title: "Fiori for Finance", description: "Role-based experience for CFO teams with GST dashboards", tags: ["UX efficiency", "Adoption rates"] },
  ],
} as const;

export const INDUSTRIES = {
  eyebrow: "Industries",
  title: "Serving key industries.",
  description:
    "Deep SAP expertise across the sectors powering business growth — from manufacturing and automotive to BFSI and consumer goods.",
  items: [
    {
      name: "Discrete Manufacturing",
      badge: "20+ manufacturers",
      description: "Integrated SAP solutions for manufacturers across automotive, engineering, and industrial sectors.",
      challenges: ["Production planning & BOM", "GST & e-invoicing compliance", "Quality management & ISO", "Shop floor integration"],
      image: "/assets/static/industry-energy.DIT308Jg.jpg",
    },
    {
      name: "Automotive & Auto Components",
      badge: "Tier-1 & Tier-2",
      description: "SAP S/4HANA for automotive supply chains — JIT inventory, vendor collaboration, and statutory compliance.",
      challenges: ["JIT & vendor managed inventory", "Multi-plant consolidation", "Export documentation", "Quality traceability"],
      image: "/assets/static/industry-energy.DIT308Jg.jpg",
    },
    {
      name: "BFSI (Banking & Insurance)",
      badge: "RBI compliant",
      description: "Regulatory-ready SAP implementations for banking, NBFC, and insurance with RBI and IRDAI alignment.",
      challenges: ["RBI regulatory reporting", "Treasury & risk management", "Loan lifecycle automation", "Audit trail compliance"],
      image: "/assets/static/industry-energy.DIT308Jg.jpg",
    },
    {
      name: "Energy & Utilities",
      badge: "Asset-intensive",
      description: "SAP for energy and utilities — asset lifecycle management, billing, and regulatory compliance.",
      challenges: ["Asset lifecycle management", "Revenue & billing automation", "Regulatory reporting", "Field service integration"],
      image: "/assets/static/industry-energy.DIT308Jg.jpg",
    },
    {
      name: "Consumer & FMCG",
      badge: "High-velocity",
      description: "Fast-moving consumer goods with SAP — demand planning, distribution, and GST compliance at scale.",
      challenges: ["Demand forecasting", "Multi-channel distribution", "Batch & expiry tracking", "Trade promotion management"],
      image: "/assets/static/industry-energy.DIT308Jg.jpg",
    },
    {
      name: "Agro & Food Processing",
      badge: "Farm-to-fork",
      description: "End-to-end SAP for agro and food processing — procurement, quality, traceability, and export compliance.",
      challenges: ["Procurement & sourcing", "Quality & batch traceability", "Cold chain logistics", "Export documentation"],
      image: "/assets/static/industry-energy.DIT308Jg.jpg",
    },
  ],
} as const;

export const FOOTER_LINKS = {
  solutions: [
    { label: "S/4HANA", href: "#solutions" },
    { label: "Cloud ERP", href: "#solutions" },
    { label: "SAP Business AI", href: "#ai" },
    { label: "GROW with SAP", href: "#grow" },
    { label: "Managed Services", href: "#approach" },
  ],
  company: [
    { label: "About Us", href: "#expertise" },
    { label: "Our Offices", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const CONTACT = {
  title: "Start your SAP journey.",
  description:
    "Speak with our team about S/4HANA, Cloud ERP, GROW with SAP, or on-demand SAP experts from our Chennai delivery centre.",
  cta: "Get in Touch",
} as const;
