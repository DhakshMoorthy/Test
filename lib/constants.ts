export const NAV_ITEMS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
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
  label: "SAP Gold Partner · India",
  title: "SAP excellence for enterprises that scale.",
  subtitle:
    "Implementation, advisory, and managed services — S/4HANA, cloud ERP, and embedded AI from our Chennai delivery centre.",
  primaryCta: "Talk to an expert",
  secondaryCta: "Our solutions",
} as const;

export const STATS = [
  { value: "15+", label: "Enterprise clients" },
  { value: "35K", label: "Project hours" },
  { value: "80%", label: "SAP-certified team" },
  { value: "10+", label: "Industry verticals" },
] as const;

export const SOLUTIONS = [
  {
    title: "Advisory & Blueprint",
    description:
      "SAP strategy aligned to GST, statutory compliance, and your growth roadmap.",
  },
  {
    title: "Implementation",
    description:
      "S/4HANA and Cloud ERP delivery with localisation built in from day one.",
  },
  {
    title: "Experts on Demand",
    description:
      "Certified functional and technical specialists when you need them.",
  },
] as const;

export const INDUSTRIES = [
  "Manufacturing",
  "Automotive",
  "BFSI",
  "FMCG",
  "Energy",
  "Agro & Food",
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "#about" },
    { label: "Offices", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  solutions: [
    { label: "S/4HANA", href: "#solutions" },
    { label: "Cloud ERP", href: "#solutions" },
    { label: "SAP Business AI", href: "#solutions" },
  ],
} as const;
