export const personalInfo = {
  name: "Raj Pandey",
  initials: "RP",
  role: "Flutter App Developer.",
  tagline: "I build production-ready Flutter apps for iOS and Android, with clean UI, reliable API integration, Firebase workflows, and store-ready delivery.",
  availability: "Available for select projects · Q3 2026",
  email: "rajpandey3942@gmail.com",
  emailLabel: "Send an email",
  github: "https://github.com/Git-of-Ritesh",
  githubLabel: "github.com/Git-of-Ritesh",
  linkedin: "https://www.linkedin.com/in/ritesh-kumar-pandey-9b3296305/",
  linkedinLabel: "linkedin.com/in/ritesh-kumar-pandey",
  twitter: "https://twitter.com",
};

export const stats = [
  { value: "2+", label: "Years Building Apps" },
  { value: "2", label: "Featured App Projects" },
  { value: "28+", label: "Public Store Downloads + Ratings" },
];

export const techTicker = [
  "Flutter", "Dart", "Firebase", "REST APIs", "Provider", "State Management", "App Store Connect", "Play Console",
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Git", "Testing", "Deployment",
];

export const about = {
  sectionNumber: "01",
  sectionLabel: "About",
  headline: "Flutter-first, product-minded.",
  paragraphs: [
    "I build Flutter apps that are practical to ship: clean screens, predictable state, fast API flows, and interfaces that stay readable on real devices.",
    "Since 2024, I have worked across mobile app development and modern web interfaces, with hands-on experience in Flutter, Dart, Firebase, REST API integration, React, and Next.js. My strongest focus is turning product requirements into stable app features that can reach the App Store and Google Play.",
    "I like the full app-building loop: understand the flow, map the UI, build reusable Flutter widgets, connect backend data, test edge cases, and polish the small interactions that make an app feel dependable.",
  ],
};

export const skillCategories = [
  {
    id: "01",
    category: "Flutter",
    skills: ["Flutter", "Dart", "Reusable Widgets", "Responsive UI", "Animations", "State Management"],
  },
  {
    id: "02",
    category: "App Backend",
    skills: ["Firebase", "REST APIs", "Auth Flows", "Firestore", "Cloud Messaging", "Storage"],
  },
  {
    id: "03",
    category: "Web/Admin",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Admin Panels", "API Wiring"],
  },
  {
    id: "04",
    category: "Delivery",
    skills: ["Git", "Testing", "Debugging", "Play Console", "App Store Connect", "Deployment"],
  },
];

export const projects = [
  {
    id: "01",
    category: "Travel · iOS & Android",
    title: "Elevate & Earn",
    description:
      "A Flutter ambassador app for referral tracking, ticket sales, commissions, tier progress, and campaign updates for Malahat SkyWalk partners.",
    tags: ["Flutter", "Firebase", "REST APIs", "Store Release"],
    appStoreLink: "https://apps.apple.com/in/app/elevate-earn/id6776362324",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.malahatskywalk.elevateandearn&pcampaignid=web_share",
    caseStudyLink: "/case-study/malahat",
    color: "#120200",
    accent: "#000",
    imageUrl: "/assets/mockups/malahat.png",
    mockupContent: {
      headline: "Refer faster.",
      subline: "Track sales and earnings.",
    },
  },
  {
    id: "02",
    category: "Finance · iOS & Android",
    title: "PrEqt",
    description:
      "A private equity and pre-IPO platform where I contributed to Flutter app screens and API-connected web admin workflows while at Webninjaz.",
    tags: ["Flutter", "React", "REST APIs", "Admin Panel"],
    appStoreLink: "https://apps.apple.com/in/app/preqt/id6751903472",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.preqt.app",
    caseStudyLink: "/case-study/preqt",
    color: "#5f3b05",
    accent: "#d6a928",
    imageUrl: "/assets/mockups/preqt.png",
    mockupContent: {
      headline: "Review deals.",
      subline: "Investor workflows made clear.",
    },
  },
];

export const experience = [
  {
    company: "Akoode Technologies · Full-time",
    role: "Software Application Developer",
    period: "Nov 2025 — Present",
    duration: "8 months and counting",
    location: "Gurugram, Haryana, India · On-site",
    description:
      "Working on live Flutter projects, building production screens, integrating APIs, fixing app issues, and implementing reusable UI components. I also support testing and release preparation so the app experience stays stable for end users.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs", "Testing", "Deployment"],
  },
  {
    company: "Webninjaz · Full-time",
    role: "Associate Software Developer",
    period: "Aug 2025 — Nov 2025",
    duration: "4 months",
    location: "Noida, Uttar Pradesh, India · On-site",
    description:
      "Contributed to Flutter app features and React/Next.js admin surfaces for client products. Built reusable UI pieces, connected REST APIs, handled practical state and data flows, and helped keep mobile and web experiences consistent.",
    tags: ["Flutter", "React", "Next.js", "REST APIs", "Admin Panel", "Tailwind CSS"],
  },
  {
    company: "Novexus Technologies Pvt. Ltd. · Internship",
    role: "Web Developer Intern",
    period: "Jun 2024 — Oct 2024",
    duration: "5 months",
    location: "Noida, Uttar Pradesh, India · Hybrid",
    description:
      "Built responsive web interfaces with React, JavaScript, Tailwind CSS, and REST APIs. The internship strengthened my fundamentals in component structure, API-driven UI, Git collaboration, and translating designs into usable screens.",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "Git", "Agile"],
  },
];

export const blogPosts = [
  {
    slug: "flutter-60fps-tips",
    date: "Apr 12, 2026",
    readTime: "6 min read",
    title: "How I keep Flutter lists smooth in real apps",
    excerpt:
      "Notes on ListView, Slivers, image loading, rebuild control, and the small choices that keep everyday Flutter screens responsive.",
    tag: "Performance",
    intro:
      "A Flutter screen usually feels slow because too much work happens during build, scroll, image loading, or state updates. My goal is simple: keep the UI predictable, keep rebuilds small, and make lists behave well on real Android and iOS devices.",
    sections: [
      {
        heading: "Start with the right list",
        paragraphs: [
          "For most dynamic screens I reach for ListView.builder or SliverList instead of rendering a full list at once. Builder-based lists only create what the user can see, which keeps memory use lower and scrolling more stable.",
          "When a page needs a header, filter bar, and list together, I prefer CustomScrollView with slivers. It keeps the scroll behavior in one place instead of nesting multiple scroll views and fighting layout issues later.",
        ],
      },
      {
        heading: "Control rebuilds",
        paragraphs: [
          "A list item should not rebuild just because a parent screen received unrelated state. I split widgets into small pieces, keep const constructors wherever possible, and move expensive formatting outside the build method.",
          "For state-heavy screens, I try to update only the item or section that changed. That matters for dashboards, referral lists, transaction rows, and screens where backend data refreshes often.",
        ],
      },
      {
        heading: "Make media boring",
        paragraphs: [
          "Images are one of the easiest ways to make a Flutter app feel rough. I use stable image sizes, placeholders, cached loading where appropriate, and avoid layout shifts after images arrive.",
          "The best list is boring in a good way: no jumping heights, no sudden blank space, no heavy shadows on every row, and no animation that competes with scrolling.",
        ],
      },
      {
        heading: "My quick checklist",
        bullets: [
          "Use builder-based lists for dynamic content.",
          "Avoid nested scroll views unless there is a clear reason.",
          "Keep item widgets small and const-friendly.",
          "Move formatting and filtering out of build methods.",
          "Give images and cards stable dimensions.",
          "Test on a mid-range Android device, not only a simulator.",
        ],
      },
    ],
  },
  {
    slug: "supabase-vs-firebase",
    date: "Mar 28, 2026",
    readTime: "8 min read",
    title: "What I check before connecting Firebase to Flutter",
    excerpt:
      "A practical checklist for auth, Firestore structure, storage, notifications, environment setup, and error states before wiring an app.",
    tag: "Firebase",
    intro:
      "Firebase can make a Flutter app move quickly, but only if the structure is clear before screens start depending on it. Before I wire Firebase into an app, I map the auth flow, data shape, loading states, and failure states so the UI does not become fragile later.",
    sections: [
      {
        heading: "Auth comes first",
        paragraphs: [
          "I start by defining what the app needs after login: user id, profile data, role, permissions, and onboarding status. This keeps the app from making random profile checks across multiple screens.",
          "A clean auth flow should answer three questions quickly: is the user logged in, is the profile complete, and where should the app send them next?",
        ],
      },
      {
        heading: "Model the data around screens",
        paragraphs: [
          "Firestore collections should support the screens the app actually renders. For example, a dashboard should not need five unrelated reads just to show a summary. The shape of the data should respect the product flow.",
          "I also decide which data can be live and which data can be fetched on demand. Realtime updates are useful, but they should not be used everywhere by default.",
        ],
      },
      {
        heading: "Plan loading and errors",
        paragraphs: [
          "Every Firebase-backed screen needs clear loading, empty, error, and success states. These states are part of the product, not afterthoughts.",
          "A polished Flutter app should tell users what is happening when a request fails, when data is missing, or when permissions block an action.",
        ],
      },
      {
        heading: "My setup checklist",
        bullets: [
          "Define auth states before building screens.",
          "Keep environment config separate for dev and production.",
          "Design Firestore paths around real app screens.",
          "Add empty and error states early.",
          "Check security rules before release.",
          "Test push notifications on physical devices.",
        ],
      },
    ],
  },
  {
    slug: "ci-cd-codemagic",
    date: "Mar 10, 2026",
    readTime: "5 min read",
    title: "Preparing a Flutter app for store release",
    excerpt:
      "The details I check before release: app icons, permissions, versioning, screenshots, signing, Play Console, App Store Connect, and final QA.",
    tag: "Release",
    intro:
      "A store release is more than pressing build. The app needs correct signing, clean metadata, stable permissions, usable screenshots, and one final pass through the flows users will actually touch.",
    sections: [
      {
        heading: "Prepare the app package",
        paragraphs: [
          "Before a release, I check the app name, icon, bundle id, package name, version number, build number, minimum OS version, and permission descriptions. Small mistakes here can delay a release even when the app itself works.",
          "I also make sure debug-only URLs, test keys, and staging settings are not included in production builds.",
        ],
      },
      {
        heading: "Test the important flows",
        paragraphs: [
          "My release QA starts with the core user journey: login, dashboard, primary action, data refresh, profile/settings, and logout. If the app uses payments, referrals, notifications, or uploads, those flows get their own pass.",
          "I prefer testing on at least one Android phone and one iPhone because store-ready polish often depends on device-specific details.",
        ],
      },
      {
        heading: "Store listing matters",
        paragraphs: [
          "Screenshots, app description, privacy policy, support email, and category selection all affect how professional the app feels. A strong Flutter build deserves a store page that explains the product clearly.",
          "For apps like Elevate & Earn and PrEqt, the listing should make the use case obvious before someone installs it.",
        ],
      },
      {
        heading: "My release checklist",
        bullets: [
          "Confirm production API and Firebase configuration.",
          "Check app icon, splash screen, and display name.",
          "Increment version and build numbers.",
          "Verify signing for Android and iOS.",
          "Run core-flow QA on real devices.",
          "Prepare screenshots, description, privacy policy, and support contact.",
        ],
      },
    ],
  },
];
