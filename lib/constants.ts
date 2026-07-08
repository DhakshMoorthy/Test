const CDN =
  "https://images.squarespace-cdn.com/content/v1/65a693f6b63149536bd675b4";

export const SITE = {
  name: "Wrightfully Fit",
  tagline: "Fitness Beyond the Gym.",
  description:
    "Personal training, luxury wellness retreats, and premium wellness products in Turks & Caicos.",
  logo: "/assets/logo.webp",
  instagram: "https://www.instagram.com/wrightfullyfit_tci/",
  shopUrl: "https://www.wrightfullyfit.com/shop",
  email: "info@wrightfullyfit.com",
  phone: "+1 (649) 946-3713",
  address: "Saltmills Plaza, Grace Bay, Providenciales, Turks & Caicos",
} as const;

export const NAV = [
  { label: "Why Us", href: "#why" },
  { label: "Programs", href: "#programs" },
  { label: "Method", href: "#method" },
  { label: "Retreats", href: "#retreats" },
  { label: "Shop", href: "#shop" },
  { label: "Contact", href: "#contact" },
] as const;

export const PILLARS = [
  {
    id: "gym",
    label: "01 — Gym",
    title: "POWER.\nPERFORMANCE.\nPRECISION.",
    description:
      "Personal training, group classes, functional fitness, strength training, and nutrition coaching at our state-of-the-art Grace Bay gym.",
    cta: "Explore Gym",
    href: "#programs",
    image: "/assets/hero/trainer.jpg",
  },
  {
    id: "retreat",
    label: "02 — Wellness Retreat",
    title: "RETREAT.\nRELAX.\nRESULTS.",
    description:
      "Immersive 4-day experiences — beach workouts, yoga, recovery, healthy cuisine, island adventures, and luxury accommodations.",
    cta: "Discover Retreat",
    href: "#retreats",
    image: "/assets/hero/wellness.jpg",
  },
  {
    id: "shop",
    label: "03 — Shop",
    title: "GEAR UP.\nSHOW UP.\nLEVEL UP.",
    description:
      "Premium apparel, accessories, supplements, and branded wellness products for those who demand excellence.",
    cta: "Visit Shop",
    href: "#shop",
    image: "/assets/hero/shop.jpg",
  },
] as const;

export const STATS = [
  { value: 4, suffix: "", label: "Day Retreats" },
  { value: 1, suffix: "", label: "Grace Bay Location" },
  { value: 1, suffix: ":1", label: "Personal Training" },
  { value: 100, suffix: "%", label: "Commitment" },
] as const;

export const PROGRAMS = [
  {
    title: "Personal Training",
    subtitle: "Your perfect workout, built for you",
    description:
      "Stay motivated with one-on-one coaching. Certified trainers design progressive programs for strength, mobility, and real results.",
    image: `${CDN}/81b3d0cb-d4e9-4af5-856d-83cdb435f9e6/_MG_6124-Edit.jpg?format=1500w`,
    tag: "Most Popular",
  },
  {
    title: "Group Fitness",
    subtitle: "Energy that pushes you forward",
    description:
      "Join our group programs and get in shape fast. High-energy classes that keep you accountable and progressing.",
    image: `${CDN}/0280f3e4-d5c3-4c20-956a-055a2b839aec/group2.jpg?format=1500w`,
    tag: null,
  },
  {
    title: "Cardio Program",
    subtitle: "Endurance engineered",
    description:
      "Let our trainers build your perfect cardio workout — custom programs to boost endurance and elevate performance.",
    image: `${CDN}/1705495320927-0AOWWC3W8VJN1VN9XQX1/image-asset.jpeg?format=1500w`,
    tag: null,
  },
  {
    title: "Wellness Retreats",
    subtitle: "Four days. Total transformation.",
    description:
      "Immersive 4-day health and wellness retreats that rejuvenate your body, mind, and spirit in paradise.",
    image: `${CDN}/1724156555197-FZXT0RBYNRL4XVMYFGT9/unsplash-image-li4dxZ0KYRw.jpg?format=1500w`,
    tag: "Signature",
  },
] as const;

export const TRANSFORMATIONS = [
  {
    name: "Sarah M.",
    result: "Lost 18 lbs in 12 weeks",
    quote:
      "Training at Wrightfully Fit completely changed my relationship with fitness. The coaches pushed me beyond what I thought possible.",
    image: `${CDN}/d9d7c4cc-fb8d-4f0a-9f89-6786f93f2692/_MG_6076-Edit.jpg?format=1000w`,
    before: "Struggled with consistency",
    after: "18 lbs lighter, stronger mindset",
  },
  {
    name: "James T.",
    result: "First wellness retreat complete",
    quote:
      "The retreat was life-changing. Beach workouts at sunrise, incredible food, and a team that genuinely cares.",
    image: `${CDN}/8618a1e0-62e1-4d02-af72-ad7177c399bc/_MG_6016-Edit.jpg?format=1000w`,
    before: "Burned out, needed reset",
    after: "Recharged body and mind",
  },
  {
    name: "Elena R.",
    result: "Strength & confidence gained",
    quote:
      "From my first session to now, I've never felt stronger. The Grace Bay gym is world-class.",
    image: `${CDN}/8bf41b37-3f81-4a08-9f20-0643acdd3a02/_MG_5941-Edit.jpg?format=1000w`,
    before: "New to structured training",
    after: "Personal bests across the board",
  },
] as const;

export const METHOD_STEPS = [
  {
    step: "01",
    title: "Nutrition",
    description:
      "Expert nutrition counsellors design fueling strategies that support your training, recovery, and lifestyle goals.",
  },
  {
    step: "02",
    title: "Training",
    description:
      "Progressive programming with world-class equipment and certified coaches who push you to your Wrightfully best.",
  },
  {
    step: "03",
    title: "Recovery",
    description:
      "Mobility work, active recovery, and retreat experiences that restore your body between intense sessions.",
  },
  {
    step: "04",
    title: "Lifestyle",
    description:
      "Fitness that fits island life — whether you're a resident, resort guest, or villa visitor in Grace Bay.",
  },
  {
    step: "05",
    title: "Accountability",
    description:
      "Coaches who track your progress, celebrate wins, and keep you committed to the results you came for.",
  },
] as const;

export const COACH = {
  name: "Founder & Head Coach",
  title: "Passion for Wellness, Rooted in Paradise",
  bio: [
    "Wrightfully Fit was born from a belief that extraordinary fitness experiences shouldn't be confined to ordinary gyms. Nestled in the heart of Grace Bay, we created a space where world-class training meets the natural beauty of Turks & Caicos.",
    "From personalized coaching to immersive wellness retreats, every program reflects a commitment to helping you retreat, relax, and achieve real results.",
  ],
  philosophy:
    "Be your Wrightfully best — in the gym, on the beach, and in every moment between.",
  image: `${CDN}/48beee9f-39b5-45f1-a213-995e16cf4541/PHOTO-2024-03-20-11-04-56.jpg?format=1500w`,
  timeline: [
    { year: "Grace Bay", event: "Opened at Saltmills Plaza" },
    { year: "Retreats", event: "Launched 4-day wellness retreats" },
    { year: "Community", event: "Built island fitness community" },
    { year: "Today", event: "Training locals & visitors daily" },
  ],
} as const;

export const GALLERY = [
  { src: "/assets/gallery/gym-1.jpg", alt: "Personal training session" },
  { src: "/assets/gallery/gym-2.jpg", alt: "Strength training at gym" },
  { src: "/assets/gallery/retreat-1.jpg", alt: "Beach wellness" },
  { src: "/assets/gallery/retreat-2.jpg", alt: "Outdoor recovery" },
  { src: `${CDN}/0280f3e4-d5c3-4c20-956a-055a2b839aec/group2.jpg?format=1200w`, alt: "Group fitness" },
  { src: `${CDN}/81b3d0cb-d4e9-4af5-856d-83cdb435f9e6/_MG_6124-Edit.jpg?format=1200w`, alt: "Coaching session" },
] as const;

export const NUTRITION = {
  title: "Fuel Your Performance",
  description:
    "Our nutrition counsellors work alongside trainers to build sustainable eating habits — whether you're training hard or living on island time.",
  points: [
    "Personalized macro guidance",
    "Meal planning for active lifestyles",
    "Retreat cuisine designed for recovery",
    "Supplements from our premium shop",
  ],
  image: `${CDN}/1705495320927-0AOWWC3W8VJN1VN9XQX1/image-asset.jpeg?format=1500w`,
} as const;

export const RETREAT = {
  title: "Immersive Wellness Retreats",
  description:
    "At Wrightfully Fit Wellness Retreats, we believe in creating experiences that rejuvenate your body, mind, and spirit.",
  experiences: [
    { title: "Beach Workouts", desc: "Sunrise training on Grace Bay" },
    { title: "Yoga & Recovery", desc: "Mindful movement and restoration" },
    { title: "Island Adventures", desc: "Explore Turks & Caicos actively" },
    { title: "Healthy Cuisine", desc: "Chef-prepared wellness meals" },
  ],
  image: "/assets/gallery/retreat-1.jpg",
} as const;

export const PRODUCTS = [
  { name: "Classic Dad Hat", price: "From $28", image: "/assets/merch/hat.jpg" },
  { name: "WFF Apparel", price: "From $35", image: "/assets/merch/apparel.jpeg" },
  { name: "Athletic Wear", price: "From $40", image: "/assets/merch/group.jpg" },
  { name: "Wellness Essentials", price: "From $22", image: "/assets/merch/essentials.jpeg" },
] as const;

export const INSTAGRAM = [
  { src: `${CDN}/573069e2-5e31-46aa-b4ad-adc11611dd44/_MG_6085-Edit.jpg?format=800w`, alt: "Gym training" },
  { src: `${CDN}/1724156555197-FZXT0RBYNRL4XVMYFGT9/unsplash-image-li4dxZ0KYRw.jpg?format=800w`, alt: "Beach wellness" },
  { src: `${CDN}/0280f3e4-d5c3-4c20-956a-055a2b839aec/group2.jpg?format=800w`, alt: "Group class" },
  { src: `${CDN}/44a0dfb9-d79b-4a26-ac14-e59cf40d3bbb/AdobeStock_657869411.jpeg?format=800w`, alt: "Retreat" },
  { src: `${CDN}/81b3d0cb-d4e9-4af5-856d-83cdb435f9e6/_MG_6124-Edit.jpg?format=800w`, alt: "Coaching" },
  { src: `${CDN}/48beee9f-39b5-45f1-a213-995e16cf4541/PHOTO-2024-03-20-11-04-56.jpg?format=800w`, alt: "Island fitness" },
] as const;

export const FAQ = [
  {
    q: "Where is Wrightfully Fit located?",
    a: "We're centrally located at Saltmills Plaza in Grace Bay, Providenciales — ideal for visitors staying in villas or luxury resorts.",
  },
  {
    q: "Do you offer personal training?",
    a: "Yes. Our certified trainers provide one-on-one sessions tailored to your goals — strength, conditioning, mobility, and more.",
  },
  {
    q: "What is the wellness retreat experience?",
    a: "Our 4-day immersive retreats combine fitness, yoga, recovery, healthy cuisine, beach workouts, and island adventures.",
  },
  {
    q: "Can visitors to Turks & Caicos train with you?",
    a: "Absolutely. We welcome island visitors with temporary gym passes and retreat packages designed for travelers.",
  },
  {
    q: "Do you sell merchandise and supplements?",
    a: "Yes — branded athletic apparel, accessories, supplements, and wellness products are available in our shop.",
  },
] as const;
