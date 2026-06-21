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
    category: "Travel · iOS & Android",
    title: "Elevate & Earn",
    description:
      "A polished mobile experience for discovering, booking, and sharing premium destination moments with a smooth ambassador referral flow.",
    tags: ["Flutter", "Firebase", "Figma", "Animations"],
    appStoreLink: "https://apps.apple.com/in/app/preqt/id6751903472",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.preqt.app",
    caseStudyLink: "/case-study/malahat",
    color: "#120200",
    accent: "#000",
    imageUrl: "/assets/mockups/malahat.png",
    mockupContent: {
      headline: "Book better.",
      subline: "Explore, refer, and earn.",
    },
  },
  {
    id: "02",
    category: "Finance · iOS & Android",
    title: "PrEqt",
    description:
      "A private equity and pre-IPO platform where I contributed to Flutter app features and web admin workflows while at Webninjaz.",
    tags: ["Flutter", "React", "REST APIs", "Admin Panel"],
    appStoreLink: "#",
    playStoreLink: "#",
    caseStudyLink: "/case-study/preqt",
    color: "#5f3b05",
    accent: "#d6a928",
    imageUrl: "/assets/mockups/preqt.png",
    mockupContent: {
      headline: "Track funding.",
      subline: "Monitor deals in real time.",
    },
  },
];

export const experience = [
  {
    company: "Akoode Technologies · Full-time",
    role: "Software Application Developer",
    period: "Nov 2025 — Present",
    location: "Gurugram, Haryana, India · On-site",
    description:
      "Working as a Flutter developer on live client projects, building production features, integrating APIs, and implementing scalable UI components. I also contribute to testing, bug fixing, and deployment to keep the app experience smooth for end users.",
    tags: ["Flutter", "Dart", "Firebase", "API Integration", "Testing", "Deployment"],
  },
  {
    company: "Webninjaz · Full-time",
    role: "Associate Software Developer",
    period: "Aug 2025 — Nov 2025",
    location: "Noida, Uttar Pradesh, India · On-site",
    description:
      "Developed and deployed responsive web applications using React.js and Next.js, improving performance with SSR, SSG, code splitting, and lazy loading. Built reusable UI components, integrated REST APIs, and worked with Context API and Redux to keep state management scalable.",
    tags: ["React", "Next.js", "Redux", "REST APIs", "SSR", "Tailwind CSS"],
  },
  {
    company: "Novexus Technologies Pvt. Ltd. · Internship",
    role: "Web Developer",
    period: "Jun 2024 — Oct 2024",
    location: "Noida, Uttar Pradesh, India · Hybrid",
    description:
      "Built a responsive web application that consumed REST APIs and presented data through smooth, interactive UI elements. Using React, Tailwind CSS, and JavaScript, I added animations and features that improved user engagement by around 20%, while collaborating with an Agile team and using Git for fast, reliable updates.",
    tags: ["React", "JavaScript", "Tailwind CSS", "CSS", "Git", "Agile"],
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
