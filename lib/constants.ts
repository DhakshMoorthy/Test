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

export const FEATURED_SLIDES = [
  {
    id: "gym",
    title: "Train at Wrightfully Fit",
    description:
      "Personal training, group classes, functional fitness, strength training, and nutrition coaching — all in our state-of-the-art Grace Bay gym at Saltmills Plaza.",
    cta: "Explore the Gym",
    href: "#gym",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80",
    accent: "ocean",
  },
  {
    id: "retreats",
    title: "Luxury Wellness Retreats",
    description:
      "Fitness, yoga, recovery, beach workouts, healthy cuisine, island adventures, and luxury accommodations — immersive 4-day experiences in Turks & Caicos.",
    cta: "Discover Retreats",
    href: "#retreats",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
    accent: "emerald",
  },
  {
    id: "shop",
    title: "Shop Wrightfully Fit",
    description:
      "Premium apparel, accessories, supplements, and branded wellness products — crafted for those who demand excellence in every detail.",
    cta: "Visit the Shop",
    href: "#shop",
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1600&q=80",
    accent: "ocean",
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
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50e?w=800&q=80",
    tag: "Most Popular",
  },
  {
    title: "Group Fitness",
    description:
      "High-energy group classes that keep you motivated, accountable, and progressing alongside a supportive community.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    tag: null,
  },
  {
    title: "Cardio & Conditioning",
    description:
      "Custom cardio programs designed by our trainers to boost endurance, burn fat, and elevate your performance.",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    tag: null,
  },
  {
    title: "Wellness Retreats",
    description:
      "Four-day immersive experiences blending fitness, yoga, recovery, beach workouts, and island adventures.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    tag: "Signature",
  },
] as const;

export const TRANSFORMATIONS = [
  {
    name: "Sarah M.",
    result: "Lost 18 lbs in 12 weeks",
    quote:
      "Training at Wrightfully Fit completely changed my relationship with fitness. The coaches pushed me beyond what I thought possible.",
    image:
      "https://images.unsplash.com/photo-1594381898411-8465977f4b0f?w=600&q=80",
  },
  {
    name: "James T.",
    result: "Completed first wellness retreat",
    quote:
      "The retreat was life-changing. Beach workouts at sunrise, incredible food, and a team that genuinely cares about your wellbeing.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "Elena R.",
    result: "Gained strength & confidence",
    quote:
      "From my first session to now, I've never felt stronger. The Grace Bay gym is world-class and the community is incredible.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    alt: "Morning workout at Grace Bay",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    alt: "Beach yoga session",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80",
    alt: "Group fitness class",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    alt: "Wellness retreat experience",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    alt: "Strength training session",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1545205597-3d1d02acf9ed?w=600&q=80",
    alt: "Recovery and relaxation",
  },
] as const;

export const BLOG_POSTS = [
  {
    title: "5 Reasons to Train in Turks & Caicos",
    excerpt:
      "Discover why Grace Bay is the ultimate destination for fitness enthusiasts seeking sun, sand, and serious results.",
    date: "June 15, 2026",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    category: "Travel & Fitness",
  },
  {
    title: "Inside Our 4-Day Wellness Retreat",
    excerpt:
      "A day-by-day look at what makes Wrightfully Fit retreats the most sought-after wellness experience in the Caribbean.",
    date: "June 8, 2026",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    category: "Wellness Retreats",
  },
  {
    title: "Nutrition Tips from Our Coaches",
    excerpt:
      "Expert guidance on fueling your body for peak performance — whether you're training at the gym or on island time.",
    date: "May 28, 2026",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
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
  instagram: "https://www.instagram.com/wrightfullyfit/",
  email: "info@wrightfullyfit.com",
  phone: "+1 (649) 555-0142",
  address: "Saltmills Plaza, Grace Bay, Providenciales, Turks & Caicos",
} as const;
