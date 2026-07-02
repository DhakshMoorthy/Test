export const NAV_ITEMS = [
  { label: "Products", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Capabilities", href: "#ai" },
  { label: "Services", href: "#approach" },
  { label: "About", href: "#expertise" },
] as const;

export const SITE = {
  name: "Kannanware",
  logo: "/assets/static/kw-logo.png",
  logoFooter: "/assets/static/kw-logo-footer.CgOMN5zW.png",
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
    { value: "10x", label: "Faster Reconciliation" },
    { value: "95%", label: "Prediction Accuracy" },
    { value: "60%", label: "Manual Work Reduced" },
  ],
} as const;

export const METRICS = [
  { value: "15+", label: "Enterprise Clients", sub: "Multi-city Coverage" },
  { value: "35K", label: "Project Hours Delivered", sub: "Cost-Effective Delivery" },
  { value: "10+", label: "Years Domain Expertise", sub: "Domain Specialists" },
  { value: "80%", label: "SAP-Certified Consultants", sub: "Local Talent, Global Standards" },
  { value: "10+", label: "Industry Verticals Served", sub: "Manufacturing to BFSI" },
] as const;

export const EXPERTISE = {
  eyebrow: "Our Value Proposition",
  title: "Your SAP Partner for Operational Transformation",
  description:
    "From our Chennai delivery centre, we help enterprises transform with SAP — combining GST compliance, manufacturing and compliance alignment, and cost-effective delivery. Whether you're scaling manufacturing, digitising BFSI, or modernising retail, we deliver SAP excellence built for regulated workflows.",
  cards: [
    {
      title: "Statutory and Process Expertise",
      description:
        "80%+ SAP-certified consultants with GST, e-invoicing, TDS, MCA reporting, and statutory accounting built into every implementation. We speak your regulatory language.",
    },
    {
      title: "Chennai Delivery Centre",
      description:
        "Our delivery hub delivers cost-effective, high-quality SAP S/4HANA and Cloud ERP with experienced consultants and global standards, and seamless integration with your teams.",
    },
    {
      title: "Manufacturing-Aligned Delivery",
      description:
        "Purpose-built for local manufacturing, BFSI, FMCG, and services. PLI schemes, local growth programs, and digital business ecosystem — we help you capitalise.",
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
    "Our advisory and delivery teams combine deep SAP expertise with GST, statutory accounting, and RBI compliance knowledge to design SAP S/4HANA and cloud ERP roadmaps aligned with digital business ecosystem.",
  steps: [
    {
      step: "01",
      title: "Advisory: SAP Strategy & Blueprint",
      description:
        "We define SAP transformation strategies for enterprises, aligned with GST, statutory accounting, RBI regulations, and digital business ecosystem.",
    },
    {
      step: "02",
      title: "Execution: Implement & Deliver",
      description:
        "Our Chennai-based specialists deliver SAP S/4HANA and Cloud ERP implementations tailored for enterprises with full localization.",
    },
    {
      step: "03",
      title: "Experts as a Service: On-Demand Talent",
      description:
        "Leverage SAP talent pool through on-demand access to certified functional and technical experts from our Chennai delivery centre.",
    },
  ],
  detail: {
    title: "Advisory: SAP Strategy & Blueprint",
    description:
      "As an SAP implementation partner for enterprises, Kannanware helps organizations define clear SAP transformation strategies that comply with GST, statutory accounting, and RBI regulations.",
    deliverables: [
      "Statutory assessment",
      "GST & compliance roadmap",
      "SAP transformation blueprint",
      "Business case & ROI",
    ],
    image: "/assets/static/step-advisory-optimized.DGH23-zf.jpg",
  },
  stepDetails: [
    {
      title: "Advisory: SAP Strategy & Blueprint",
      description:
        "As an SAP implementation partner for enterprises, Kannanware helps organizations define clear SAP transformation strategies that comply with GST, statutory accounting, and RBI regulations.",
      deliverables: ["Statutory assessment", "GST & compliance roadmap", "SAP transformation blueprint", "Business case & ROI"],
      image: "/assets/static/step-advisory-optimized.DGH23-zf.jpg",
    },
    {
      title: "Execution: Implement & Deliver",
      description:
        "Our Chennai-based specialists deliver SAP S/4HANA and Cloud ERP implementations tailored for enterprises with full localization — GST, e-invoicing, TDS, and statutory compliance at every milestone.",
      deliverables: ["S/4HANA configuration", "GST & e-invoicing setup", "Data migration & validation", "UAT & go-live support"],
      image: "/assets/static/step-advisory-optimized.DGH23-zf.jpg",
    },
    {
      title: "Experts as a Service: On-Demand Talent",
      description:
        "Leverage our SAP talent pool through on-demand access to certified functional and technical experts from our Chennai delivery centre — flexible, cost-effective, and scalable.",
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
    "SAP Joule is transforming how businesses interact with their SAP systems. Kannanware helps organisations embed Joule across finance, procurement, and HR — automating GST reconciliation, predicting cash flows in INR, and generating real-time insights tailored to the statutory reporting landscape.",
  capabilities: [
    {
      title: "AI Financial Insights",
      description:
        "Surface GST mismatches, TDS variances, and P&L trends across your local entities with natural language queries.",
    },
    {
      title: "Predictive Forecasting",
      description:
        "Forecast INR cash positions, seasonal demand, and working capital needs using embedded ML.",
    },
    {
      title: "Intelligent Process Automation",
      description:
        "Automate GST reconciliation, e-invoicing, TDS journal entries, and MCA compliance workflows with AI.",
    },
    {
      title: "Conversational Analytics",
      description:
        "Ask questions in English or Hindi and get instant insights from your SAP data across all local entities.",
    },
  ],
} as const;

export const DELIVERY = {
  eyebrow: "SAP Activate Methodology",
  title: "Proven delivery from our delivery model.",
  description:
    "Our Chennai delivery centre follows SAP Activate methodology with localized accelerators — delivering cost-effective, high-quality outcomes for enterprises.",
  phases: [
    { phase: "01", title: "Explore: Design & Blueprint", description: "Map local business processes and design an SAP roadmap for enterprises." },
    { phase: "02", title: "Realise: Configure & Develop", description: "Configure SAP with GST, TDS, e-invoicing, and statutory compliance at every milestone." },
    { phase: "03", title: "Deploy: Test & Go Live", description: "AI-accelerated testing with statutory validation ensures GST compliance from day one." },
    { phase: "04", title: "Run: Stabilize & Support", description: "Post go-live hypercare with Chennai-based PrimeCare and continuous statutory compliance." },
  ],
  detail: {
    title: "Explore: Design & Blueprint",
    description:
      "We immerse ourselves in your business operations — interviewing stakeholders, auditing current systems, and mapping every process with localized regulatory requirements.",
    deliverables: ["Statutory process maps", "GST and statutory architecture", "Risk-prioritised roadmap", "INR business case & ROI model"],
    image: "/assets/static/method-discover.BBjv2god.jpg",
  },
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
        "Post go-live hypercare with Chennai-based PrimeCare and continuous statutory compliance monitoring to keep your SAP landscape running at peak performance.",
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
    "SAP solutions for CFO teams — automating GST compliance, streamlining Ind AS reporting, accelerating period-end closes, and delivering real-time analytics in INR across multi-entity business operations.",
  services: [
    { title: "SAP FI/CO", description: "End-to-end financial integrity with GST, TDS, and Ind AS compliance", tags: ["GST reconciliation", "Ind AS compliance", "MCA filing accuracy"] },
    { title: "SAP Analytics Cloud (SAC)", description: "Real-time insight into local P&L, GST analytics, and INR forecasting", tags: ["Decision speed", "Forecast accuracy"] },
    { title: "Group Reporting", description: "Ind AS consolidation with MCA audit trails and statutory disclosure", tags: ["MCA audit readiness", "Statutory close cycle"] },
    { title: "Intercompany Reconciliation", description: "Automated IC reconciliation across local entities with GST matching", tags: ["GST ITC matching", "TDS reconciliation"] },
    { title: "Fiori for Finance", description: "Role-based experience for CFO teams with GST dashboards", tags: ["UX efficiency", "Adoption rates"] },
  ],
} as const;

export const INDUSTRIES = {
  eyebrow: "Industries",
  title: "Serving key industries.",
  description:
    "Kannanware brings deep SAP expertise to the sectors powering business growth — from manufacturing and automotive to BFSI and consumer goods.",
  list: [
    "Discrete Manufacturing",
    "Automotive & Auto Components",
    "BFSI (Banking & Insurance)",
    "Energy & Utilities",
    "Consumer & FMCG",
    "Agro & Food Processing",
  ],
  featured: {
    badge: "20+ manufacturers",
    title: "Discrete Manufacturing",
    description:
      "Driving local manufacturing excellence with integrated SAP solutions for manufacturers across automotive, engineering, and industrial sectors.",
    challenges: ["Production planning & BOM", "GST & e-invoicing compliance", "Quality management & ISO", "Shop floor integration"],
    image: "/assets/static/industry-energy.DIT308Jg.jpg",
  },
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
    { label: "Our Team", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const CONTACT = {
  title: "Start your SAP journey.",
  description:
    "Speak with our team about S/4HANA, Cloud ERP, GROW with SAP, or on-demand SAP experts from our Chennai delivery centre.",
  cta: "Get in Touch",
} as const;
