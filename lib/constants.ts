export const personalInfo = {
  name: "Audumber Bhujang",
  role: "AI Developer • Creative Engineer • SaaS Builder",
  subtitle:
    "I build futuristic AI products, immersive web experiences, and scalable systems.",
  description:
    "Portfolio of Audumber Bhujang — AI Engineer, Full Stack Developer, and Creative Technologist crafting premium digital experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://audumber.dev",
  email: "audumberbhujang8999@gmail.com",
  location: "India",
  availability: "Open for AI Internships",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/audumber-11",
  linkedin: "https://www.linkedin.com/in/audumber-bhujang-4b0130237",
  twitter: "https://twitter.com/audumber",
} as const;

export const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const achievements = [
  { value: "25", suffix: "+", label: "Projects Shipped" },
  { value: "1.2K", suffix: "+", label: "GitHub Stars" },
  { value: "42", suffix: " ☕", label: "Coffee per Week" },
  { value: "250K", suffix: "+", label: "Lines of Code" },
] as const;

export const skills = [
  { name: "Next.js", category: "Frontend", level: 95 },
  { name: "React", category: "Frontend", level: 95 },
  { name: "TypeScript", category: "Frontend", level: 92 },
  { name: "Tailwind CSS", category: "Frontend", level: 96 },
  { name: "Framer Motion", category: "Frontend", level: 90 },
  { name: "Three.js", category: "Frontend", level: 80 },
  { name: "Node.js", category: "Backend", level: 88 },
  { name: "Python", category: "Backend", level: 85 },
  { name: "PostgreSQL", category: "Backend", level: 82 },
  { name: "Prisma", category: "Backend", level: 86 },
  { name: "UI/UX Design", category: "Design", level: 88 },
  { name: "AI Tools", category: "AI", level: 90 },
  { name: "Ollama", category: "AI", level: 82 },
  { name: "SaaS Development", category: "Backend", level: 90 },
  { name: "Prompt Engineering", category: "AI", level: 92 },
  { name: "Motion Design", category: "Design", level: 85 },
] as const;

export const projects = [
  {
    id: "01",
    title: "AI Habit Tracker SaaS",
    description:
      "A subscription-based habit tracking SaaS powered by AI-generated insights, predictive analytics, and adaptive nudges.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "OpenAI"],
    category: "SaaS",
    live: "#",
    github: "#",
    metrics: "1.2K+ Active Users • $2.4K MRR",
  },
  {
    id: "02",
    title: "WhatsApp CRM AI",
    description:
      "Conversational AI platform that turns WhatsApp into a smart CRM — auto-replies, lead scoring, and intent detection.",
    tags: ["Node.js", "Python", "OpenAI", "Redis", "PostgreSQL"],
    category: "AI",
    live: "#",
    github: "#",
    metrics: "180K Messages/mo • 94% Accuracy",
  },
  {
    id: "03",
    title: "Student Management System",
    description:
      "Modern academic platform for managing students, attendance, performance, and AI-driven study recommendations.",
    tags: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "Tailwind"],
    category: "Full Stack",
    live: "#",
    github: "#",
    metrics: "12+ Schools • 4.5K Students",
  },
  {
    id: "04",
    title: "AI Productivity Dashboard",
    description:
      "A command center for makers — track tasks, projects, deep-work hours, and let AI summarize your week.",
    tags: ["Next.js", "TypeScript", "D3.js", "OpenAI", "Supabase"],
    category: "Dashboard",
    live: "#",
    github: "#",
    metrics: "40+ Components • 8 Integrations",
  },
  {
    id: "05",
    title: "Portfolio Generator",
    description:
      "An AI tool that generates a stunning developer portfolio from a GitHub username in under 30 seconds.",
    tags: ["Next.js", "OpenAI", "GitHub API", "Tailwind"],
    category: "AI",
    live: "#",
    github: "#",
    metrics: "320+ Portfolios • 28s Avg Time",
  },
  {
    id: "06",
    title: "Smart Task Planner",
    description:
      "AI-powered task manager that auto-prioritizes, schedules, and breaks down complex goals into executable steps.",
    tags: ["Next.js", "OpenAI", "DndKit", "PostgreSQL", "Redis"],
    category: "Dashboard",
    live: "#",
    github: "#",
    metrics: "850+ Users • 60K Tasks",
  },
] as const;

export const experience = [
  {
    id: "exp-1",
    type: "Learning",
    period: "2024 - Present",
    title: "AI Engineering Deep-Dive",
    company: "Self-Directed",
    description:
      "Mastered LLMs, RAG, vector databases, prompt engineering, and built multiple production AI products.",
    highlights: [
      "Built SaaS products with AI features",
      "Explored RAG systems and AI agents",
      "Deployed production-ready AI applications",
    ],
  },
  {
    id: "exp-2",
    type: "Freelance",
    period: "2024",
    title: "Full Stack Developer",
    company: "Independent Freelance",
    description:
      "Delivered full-stack web applications and SaaS platforms for clients, handling everything from design to deployment.",
    highlights: [
      "Built 5+ production applications",
      "Implemented payment systems",
      "Designed and deployed RESTful APIs",
    ],
  },
  {
    id: "exp-3",
    type: "Creative",
    period: "2023 - Present",
    title: "Creative Developer",
    company: "Open Source & Personal Projects",
    description:
      "Building immersive web experiences with Three.js, GSAP, and Framer Motion while contributing to open source.",
    highlights: [
      "Created interactive 3D web experiences",
      "Contributed to open source projects",
      "Built premium UI component libraries",
    ],
  },
  {
    id: "exp-4",
    type: "Internship",
    period: "2023",
    title: "Software Engineering Intern",
    company: "AI Startup",
    description:
      "Worked on AI-powered tools and internal dashboards, gaining hands-on experience with modern web technologies.",
    highlights: [
      "Built internal tools and dashboards",
      "Integrated AI APIs into products",
      "Collaborated on product roadmap",
    ],
  },
  {
    id: "exp-5",
    type: "Learning",
    period: "2022 - 2023",
    title: "Web Development Foundations",
    company: "Self-Taught Journey",
    description:
      "Started with HTML, CSS, and JavaScript, progressing to modern frameworks and full-stack development.",
    highlights: [
      "Learned React, Node.js, and TypeScript",
      "Built first full-stack application",
      "Started contributing to open source",
    ],
  },
] as const;

export const SITE_CONFIG = {
  name: "Audumber Bhujang",
  role: "AI Developer • Creative Engineer • SaaS Builder",
  tagline:
    "I build futuristic AI products, immersive web experiences, and scalable systems.",
  description:
    "Portfolio of Audumber Bhujang — AI Engineer, Full Stack Developer, and Creative Technologist crafting premium digital experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://audumber.dev",
  email: "audumberbhujang8999@gmail.com",
  location: "India",
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB || "https://github.com/audumber-11",
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/in/audumber-bhujang-4b0130237",
    twitter:
      process.env.NEXT_PUBLIC_TWITTER || "https://twitter.com/audumber",
  },
  resumeUrl: "/resume.pdf",
} as const;

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
] as const;

export const HERO_BADGES = [
  "AI Engineer",
  "Full Stack",
  "Creative Dev",
  "SaaS Builder",
  "Open Source",
] as const;

export const KEYBOARD_SHORTCUTS = [
  { key: "⌘ K", label: "Command menu" },
  { key: "G H", label: "Go to Home" },
  { key: "G P", label: "Go to Projects" },
  { key: "G C", label: "Go to Contact" },
  { key: "T", label: "Toggle theme" },
  { key: "M", label: "Toggle music" },
] as const;
