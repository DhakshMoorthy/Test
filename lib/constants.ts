const CDN =
  "https://images.squarespace-cdn.com/content/v1/65a693f6b63149536bd675b4";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Gym", href: "#gym" },
  { label: "Wellness Retreats", href: "#retreats" },
  { label: "Shop", href: "#shop" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_STATS = [
  { label: "Personal Training", value: "1:1", suffix: "" },
  { label: "Wellness Retreats", value: "4", suffix: "-Day" },
  { label: "Grace Bay", value: "1", suffix: " Location" },
  { label: "Expert Coaches", value: "10", suffix: "+" },
] as const;

export const HERO_SLIDES = [
  {
    id: "intro",
    eyebrow: "Turks & Caicos",
    title: "Fitness Beyond the Gym.",
    description:
      "Personal training, luxury wellness retreats, and premium wellness products in Turks & Caicos.",
    cta: "Book a Session",
    ctaHref: "#contact",
    ctaSecondary: "Explore Retreats",
    ctaSecondaryHref: "#retreats",
    image: "/assets/hero/gym.jpg",
  },
  {
    id: "gym",
    eyebrow: "Grace Bay Gym",
    title: "Train at Wrightfully Fit",
    description:
      "Personal training, group classes, functional fitness, strength training, and nutrition coaching — all in our state-of-the-art Grace Bay gym at Saltmills Plaza.",
    cta: "Explore the Gym",
    ctaHref: "#gym",
    ctaSecondary: null,
    ctaSecondaryHref: null,
    image: "/assets/hero/gym.jpg",
  },
  {
    id: "retreats",
    eyebrow: "Wellness Retreats",
    title: "RETREAT. RELAX. RESULTS.",
    description:
      "Fitness, yoga, recovery, beach workouts, healthy cuisine, island adventures, and luxury accommodations — immersive 4-day experiences in Turks & Caicos.",
    cta: "Discover Retreats",
    ctaHref: "#retreats",
    ctaSecondary: null,
    ctaSecondaryHref: null,
    image: "/assets/hero/retreats.jpg",
  },
  {
    id: "shop",
    eyebrow: "Premium Shop",
    title: "Shop Wrightfully Fit",
    description:
      "Premium apparel, accessories, supplements, and branded wellness products — crafted for those who demand excellence in every detail.",
    cta: "Visit the Shop",
    ctaHref: "#shop",
    ctaSecondary: null,
    ctaSecondaryHref: null,
    image: "/assets/hero/shop.jpg",
  },
] as const;

export const MERCH_PRODUCTS = [
  {
    name: "Classic Dad Hat — Green Camo",
    price: "From $28",
    image: "/assets/merch/hat.jpg",
  },
  {
    name: "Wrightfully Fit Apparel",
    price: "From $35",
    image: "/assets/merch/apparel.jpeg",
  },
  {
    name: "Branded Athletic Wear",
    price: "From $40",
    image: "/assets/merch/group.jpg",
  },
  {
    name: "Wellness Essentials",
    price: "From $22",
    image: "/assets/merch/essentials.jpeg",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    icon: "MapPin",
    title: "Prime Grace Bay Location",
    description:
      "Centrally located at Saltmills Plaza in the heart of Grace Bay — ideal for island visitors staying in villas or luxury resorts.",
  },
  {
    icon: "Users",
    title: "World-Class Coaching",
    description:
      "Certified personal trainers and nutrition counsellors who design progressive programs tailored to your goals and lifestyle.",
  },
  {
    icon: "Palmtree",
    title: "Paradise Setting",
    description:
      "Train surrounded by turquoise waters and white sand beaches. Wellness has never felt this inspiring.",
  },
  {
    icon: "Sparkles",
    title: "Holistic Approach",
    description:
      "From in-gym training to immersive retreats, we address fitness, recovery, nutrition, and mental wellbeing as one.",
  },
] as const;

export const PROGRAMS = [
  {
    title: "Personal Training",
    description:
      "One-on-one sessions with expert coaches who build your perfect workout — strength, mobility, and results.",
    image: `${CDN}/81b3d0cb-d4e9-4af5-856d-83cdb435f9e6/_MG_6124-Edit.jpg?format=1000w`,
    tag: "Most Popular",
  },
  {
    title: "Group Fitness",
    description:
      "High-energy group classes that keep you motivated, accountable, and progressing alongside a supportive community.",
    image: `${CDN}/0280f3e4-d5c3-4c20-956a-055a2b839aec/group2.jpg?format=1000w`,
    tag: null,
  },
  {
    title: "Cardio & Conditioning",
    description:
      "Custom cardio programs designed by our trainers to boost endurance, burn fat, and elevate your performance.",
    image: `${CDN}/1705495320927-0AOWWC3W8VJN1VN9XQX1/image-asset.jpeg?format=1000w`,
    tag: null,
  },
  {
    title: "Wellness Retreats",
    description:
      "Four-day immersive experiences blending fitness, yoga, recovery, beach workouts, and island adventures.",
    image: `${CDN}/1724156555197-FZXT0RBYNRL4XVMYFGT9/unsplash-image-li4dxZ0KYRw.jpg?format=1000w`,
    tag: "Signature",
  },
] as const;

export const TRANSFORMATIONS = [
  {
    name: "Sarah M.",
    result: "Lost 18 lbs in 12 weeks",
    quote:
      "Training at Wrightfully Fit completely changed my relationship with fitness. The coaches pushed me beyond what I thought possible.",
    image: `${CDN}/d9d7c4cc-fb8d-4f0a-9f89-6786f93f2692/_MG_6076-Edit.jpg?format=800w`,
  },
  {
    name: "James T.",
    result: "Completed first wellness retreat",
    quote:
      "The retreat was life-changing. Beach workouts at sunrise, incredible food, and a team that genuinely cares about your wellbeing.",
    image: `${CDN}/8618a1e0-62e1-4d02-af72-ad7177c399bc/_MG_6016-Edit.jpg?format=800w`,
  },
  {
    name: "Elena R.",
    result: "Gained strength & confidence",
    quote:
      "From my first session to now, I've never felt stronger. The Grace Bay gym is world-class and the community is incredible.",
    image: `${CDN}/8bf41b37-3f81-4a08-9f20-0643acdd3a02/_MG_5941-Edit.jpg?format=800w`,
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Michael & Lisa K.",
    role: "Wellness Retreat Guests",
    quote:
      "We came for a vacation and left transformed. The combination of luxury accommodations, expert training, and island adventures was beyond anything we expected.",
    rating: 5,
  },
  {
    name: "David P.",
    role: "Personal Training Client",
    quote:
      "As a frequent visitor to Turks & Caicos, having Wrightfully Fit at Saltmills Plaza is a game-changer. Professional, welcoming, and results-driven.",
    rating: 5,
  },
  {
    name: "Amanda S.",
    role: "Group Fitness Member",
    quote:
      "The energy in every class is electric. I've made lifelong friends and achieved fitness goals I never thought I'd reach in paradise.",
    rating: 5,
  },
] as const;

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: `${CDN}/573069e2-5e31-46aa-b4ad-adc11611dd44/_MG_6085-Edit.jpg?format=600w`,
    alt: "Training at Wrightfully Fit gym",
  },
  {
    id: 2,
    image: `${CDN}/1724156555197-FZXT0RBYNRL4XVMYFGT9/unsplash-image-li4dxZ0KYRw.jpg?format=600w`,
    alt: "Beach wellness session",
  },
  {
    id: 3,
    image: `${CDN}/0280f3e4-d5c3-4c20-956a-055a2b839aec/group2.jpg?format=600w`,
    alt: "Group fitness class",
  },
  {
    id: 4,
    image: `${CDN}/44a0dfb9-d79b-4a26-ac14-e59cf40d3bbb/AdobeStock_657869411.jpeg?format=600w`,
    alt: "Wellness retreat experience",
  },
  {
    id: 5,
    image: `${CDN}/81b3d0cb-d4e9-4af5-856d-83cdb435f9e6/_MG_6124-Edit.jpg?format=600w`,
    alt: "Strength training session",
  },
  {
    id: 6,
    image: `${CDN}/48beee9f-39b5-45f1-a213-995e16cf4541/PHOTO-2024-03-20-11-04-56.jpg?format=600w`,
    alt: "Island fitness lifestyle",
  },
] as const;

export const BLOG_POSTS = [
  {
    title: "5 Reasons to Train in Turks & Caicos",
    excerpt:
      "Discover why Grace Bay is the ultimate destination for fitness enthusiasts seeking sun, sand, and serious results.",
    date: "June 15, 2026",
    image: `${CDN}/1724156555197-FZXT0RBYNRL4XVMYFGT9/unsplash-image-li4dxZ0KYRw.jpg?format=800w`,
    category: "Travel & Fitness",
  },
  {
    title: "Inside Our 4-Day Wellness Retreat",
    excerpt:
      "A day-by-day look at what makes Wrightfully Fit retreats the most sought-after wellness experience in the Caribbean.",
    date: "June 8, 2026",
    image: `${CDN}/1706273908197-EZPSIPITKCIJ7WC203KA/image-asset.jpeg?format=800w`,
    category: "Wellness Retreats",
  },
  {
    title: "Nutrition Tips from Our Coaches",
    excerpt:
      "Expert guidance on fueling your body for peak performance — whether you're training at the gym or on island time.",
    date: "May 28, 2026",
    image: `${CDN}/1705495320927-0AOWWC3W8VJN1VN9XQX1/image-asset.jpeg?format=800w`,
    category: "Nutrition",
  },
] as const;

export const FOOTER_LINKS = {
  explore: [
    { label: "The Gym", href: "#gym" },
    { label: "Wellness Retreats", href: "#retreats" },
    { label: "Shop", href: "#shop" },
    { label: "Programs", href: "#programs" },
  ],
  company: [
    { label: "About Us", href: "#founder" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
    { label: "Book a Session", href: "#contact" },
  ],
} as const;

export const SITE_CONFIG = {
  name: "Wrightfully Fit",
  tagline: "Fitness Beyond the Gym.",
  description:
    "Personal training, luxury wellness retreats, and premium wellness products in Turks & Caicos.",
  logo: "/assets/logo.webp",
  logoAlt: "/assets/logo.png",
  instagram: "https://www.instagram.com/wrightfullyfit_tci/",
  shopUrl: "https://www.wrightfullyfit.com/shop",
  email: "info@wrightfullyfit.com",
  phone: "+1 (649) 555-0142",
  address: "Saltmills Plaza, Grace Bay, Providenciales, Turks & Caicos",
} as const;
