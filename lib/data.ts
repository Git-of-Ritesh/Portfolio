export const personalInfo = {
  name: "Raj Pandey",
  initials: "RP",
  role: "Mobile App Developer.",
  tagline: "I design and ship scalable, high-performance Flutter apps — from idea to App Store, with obsessive attention to motion, performance, and product detail.",
  availability: "Available for select projects · Q3 2026",
  email: "raj@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

export const stats = [
  { value: "6+", label: "Years Building Mobile" },
  { value: "20+", label: "Apps Shipped to Stores" },
  { value: "1.2M+", label: "Combined Downloads" },
  { value: "4.8★", label: "Avg. App Store Rating" },
];

export const techTicker = [
  "Flutter", "Dart", "Node.js", "Firebase", "Supabase", "Figma", "CI/CD", "GraphQL",
  "TypeScript", "Swift", "Kotlin", "Riverpod", "Bloc", "PostgreSQL", "REST", "WebSockets",
];

export const about = {
  sectionNumber: "01",
  sectionLabel: "About",
  headline: "A craftsman, not a code monkey.",
  paragraphs: [
    "I help startups and product teams turn ambitious ideas into mobile apps that feel inevitable — fast, fluid, and quietly delightful.",
    "For the past six years I've shipped Flutter apps across fintech, health, and creator tooling. I care about the boring stuff recruiters skip over: 60fps lists, cold-start under a second, zero-jank animations, sane CI pipelines.",
    "My loop is simple — talk to users, prototype in Figma, build in Flutter, wire up Node + Supabase, then measure. Repeat until it feels right.",
  ],
};

export const skillCategories = [
  {
    id: "01",
    category: "Mobile",
    skills: ["Flutter", "Dart", "Riverpod", "Bloc", "Swift", "Kotlin"],
  },
  {
    id: "02",
    category: "Backend",
    skills: ["Node.js", "TypeScript", "PostgreSQL", "GraphQL", "REST", "WebSockets"],
  },
  {
    id: "03",
    category: "Platform",
    skills: ["Firebase", "Supabase", "Cloud Functions", "Auth", "Storage", "Realtime"],
  },
  {
    id: "04",
    category: "Design & Ops",
    skills: ["Figma", "Motion", "Fastlane", "GitHub Actions", "Codemagic", "Sentry"],
  },
];

export const projects = [
  {
    id: "01",
    category: "Fintech · iOS & Android",
    title: "Lumen Finance",
    description:
      "A neobank companion that turns chaotic spending into one calm, glanceable feed. Shipped to 220k users with a 4.9 store rating.",
    tags: ["Flutter", "Node.js", "Supabase", "Stripe"],
    appStoreLink: "#",
    caseStudyLink: "#",
    color: "#f0f0f0",
    accent: "#000",
    imageUrl: "/Screenshot 2026-04-19 at 3.40.25 PM.png",
    mockupContent: {
      headline: "Spend less.",
      subline: "Invest smarter, earn boldly.",
    },
  },
  {
    id: "02",
    category: "Health · iOS",
    title: "Pulse Health",
    description:
      "A daily wellness tracker with guided routines and AI-powered insights. Reached #3 in Health & Fitness in 12 markets.",
    tags: ["Flutter", "Firebase", "Figma", "RevenueCat"],
    appStoreLink: "#",
    caseStudyLink: "#",
    color: "#f5f5f5",
    accent: "#000",
    imageUrl: null,
    mockupContent: {
      headline: "Feel better.",
      subline: "Track, reflect, improve daily.",
    },
  },
  {
    id: "03",
    category: "Creator Tools · iOS & Android",
    title: "Craft Studio",
    description:
      "A professional video editing suite for mobile creators. Over 500k installs in the first quarter after launch.",
    tags: ["Flutter", "Node.js", "Supabase", "FFmpeg"],
    appStoreLink: "#",
    caseStudyLink: "#",
    color: "#f8f8f8",
    accent: "#000",
    imageUrl: null,
    mockupContent: {
      headline: "Create more.",
      subline: "Edit stories on the go.",
    },
  },
];

export const experience = [
  {
    company: "Moonshot Labs",
    role: "Senior Flutter Engineer",
    period: "2022 — Present",
    location: "Remote",
    description:
      "Lead developer for 3 client apps — fintech, health, and B2B SaaS. Introduced design tokens, established CI/CD with Codemagic, and cut build times by 60%.",
    tags: ["Flutter", "Node.js", "Firebase", "Codemagic"],
  },
  {
    company: "Helio Studio",
    role: "Flutter Developer",
    period: "2020 — 2022",
    location: "Bangalore, IN",
    description:
      "Built cross-platform apps from scratch, contributed to design system, and implemented BLoC architecture across a team of 8 engineers.",
    tags: ["Flutter", "Dart", "Bloc", "Figma"],
  },
  {
    company: "Freelance",
    role: "Mobile App Consultant",
    period: "2018 — 2020",
    location: "Remote",
    description:
      "Shipped 10+ apps for startups across US, UK, and India. Specialized in rapid prototyping and MVP to App Store pipelines.",
    tags: ["Flutter", "Firebase", "Supabase"],
  },
];

export const blogPosts = [
  {
    slug: "flutter-60fps-tips",
    date: "Apr 12, 2026",
    readTime: "6 min read",
    title: "How I maintain 60fps lists in Flutter with 10,000+ items",
    excerpt:
      "Lazy loading, sliver builders, and a few tricks most devs miss. Here's my exact playbook for silky-smooth Flutter lists.",
    tag: "Performance",
  },
  {
    slug: "supabase-vs-firebase",
    date: "Mar 28, 2026",
    readTime: "8 min read",
    title: "Supabase vs Firebase in 2026: what actually matters for mobile",
    excerpt:
      "After migrating two production apps, here's an honest breakdown of where each backend wins and where it quietly loses.",
    tag: "Backend",
  },
  {
    slug: "ci-cd-codemagic",
    date: "Mar 10, 2026",
    readTime: "5 min read",
    title: "My Codemagic CI/CD setup for zero-friction Flutter releases",
    excerpt:
      "From push to App Store in 18 minutes. Here's the exact workflow file and the pitfalls I've spent 2 years eliminating.",
    tag: "DevOps",
  },
];
