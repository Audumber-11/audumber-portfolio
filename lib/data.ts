export type Skill = {
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "AI / ML"
    | "Design"
    | "Tools"
    | "Database";
  level: number;
  color: string;
  icon: string;
};

export const SKILLS: Skill[] = [
  { name: "Next.js", category: "Frontend", level: 95, color: "#ffffff", icon: "▲" },
  { name: "React", category: "Frontend", level: 95, color: "#61dafb", icon: "⚛" },
  { name: "TypeScript", category: "Frontend", level: 92, color: "#3178c6", icon: "TS" },
  { name: "Tailwind CSS", category: "Frontend", level: 96, color: "#38bdf8", icon: "🌊" },
  { name: "Framer Motion", category: "Frontend", level: 90, color: "#ff0080", icon: "✦" },
  { name: "Three.js", category: "Frontend", level: 80, color: "#915eff", icon: "◈" },
  { name: "Node.js", category: "Backend", level: 88, color: "#83cd29", icon: "⬢" },
  { name: "Python", category: "AI / ML", level: 85, color: "#3776ab", icon: "🐍" },
  { name: "PostgreSQL", category: "Database", level: 82, color: "#336791", icon: "🐘" },
  { name: "Prisma", category: "Backend", level: 86, color: "#2d3748", icon: "◆" },
  { name: "UI/UX Design", category: "Design", level: 88, color: "#ff4d6d", icon: "✺" },
  { name: "AI Tools", category: "AI / ML", level: 90, color: "#a855f7", icon: "◉" },
  { name: "Ollama", category: "AI / ML", level: 82, color: "#000000", icon: "🦙" },
  { name: "SaaS Development", category: "Backend", level: 90, color: "#10b981", icon: "▰" },
  { name: "Prompt Engineering", category: "AI / ML", level: 92, color: "#f59e0b", icon: "✎" },
  { name: "Motion Design", category: "Design", level: 85, color: "#ec4899", icon: "≋" },
];

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: "AI" | "SaaS" | "Full Stack" | "Productivity" | "Tooling";
  tech: string[];
  metrics: { label: string; value: string }[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "AI Habit Tracker SaaS",
    slug: "ai-habit-tracker",
    description:
      "A subscription-based habit tracking SaaS powered by AI-generated insights, predictive analytics, and adaptive nudges.",
    longDescription:
      "End-to-end SaaS product with subscription billing, AI-driven habit recommendations, daily streaks, push notifications, and a beautiful analytics dashboard. Built with Next.js 15, Prisma, and a custom LLM integration.",
    category: "SaaS",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "OpenAI"],
    metrics: [
      { label: "Active Users", value: "1.2K+" },
      { label: "Retention", value: "78%" },
      { label: "MRR", value: "$2.4K" },
    ],
    image: "/projects/habit-tracker.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "02",
    title: "WhatsApp CRM AI",
    slug: "whatsapp-crm-ai",
    description:
      "Conversational AI platform that turns WhatsApp into a smart CRM — auto-replies, lead scoring, and intent detection.",
    longDescription:
      "A multi-tenant CRM that integrates the WhatsApp Business API with a fine-tuned LLM for intent classification, sentiment analysis, and automated customer journeys.",
    category: "AI",
    tech: ["Node.js", "Python", "OpenAI", "Redis", "PostgreSQL"],
    metrics: [
      { label: "Messages/mo", value: "180K" },
      { label: "Accuracy", value: "94%" },
      { label: "Latency", value: "<1.2s" },
    ],
    image: "/projects/whatsapp-crm.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    accent: "from-emerald-500 to-cyan-500",
  },
  {
    id: "03",
    title: "Student Management System",
    slug: "student-management",
    description:
      "Modern academic platform for managing students, attendance, performance, and AI-driven study recommendations.",
    longDescription:
      "A full-stack education platform with role-based access, real-time attendance, AI study planner, and a parent-teacher communication hub.",
    category: "Full Stack",
    tech: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "Tailwind"],
    metrics: [
      { label: "Schools", value: "12+" },
      { label: "Students", value: "4.5K" },
      { label: "Uptime", value: "99.9%" },
    ],
    image: "/projects/sms.png",
    liveUrl: "#",
    githubUrl: "#",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    id: "04",
    title: "AI Productivity Dashboard",
    slug: "ai-productivity-dashboard",
    description:
      "A command center for makers — track tasks, projects, deep-work hours, and let AI summarize your week.",
    longDescription:
      "A premium dashboard with real-time analytics, AI-generated weekly retrospectives, focus-mode timer, and integrations with Notion, GitHub, and Linear.",
    category: "Productivity",
    tech: ["Next.js", "TypeScript", "D3.js", "OpenAI", "Supabase"],
    metrics: [
      { label: "Components", value: "40+" },
      { label: "Integrations", value: "8" },
      { label: "Performance", value: "98" },
    ],
    image: "/projects/dashboard.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    accent: "from-orange-500 to-pink-500",
  },
  {
    id: "05",
    title: "Portfolio Generator",
    slug: "portfolio-generator",
    description:
      "An AI tool that generates a stunning developer portfolio from a GitHub username in under 30 seconds.",
    longDescription:
      "Plug in your GitHub username and let AI analyze your repos, contributions, and tech stack to generate a personalized, deploy-ready portfolio.",
    category: "Tooling",
    tech: ["Next.js", "OpenAI", "GitHub API", "Tailwind"],
    metrics: [
      { label: "Portfolios", value: "320+" },
      { label: "Avg time", value: "28s" },
      { label: "Stars", value: "1.4K" },
    ],
    image: "/projects/portfolio-gen.png",
    liveUrl: "#",
    githubUrl: "#",
    accent: "from-yellow-500 to-orange-500",
  },
  {
    id: "06",
    title: "Smart Task Planner",
    slug: "smart-task-planner",
    description:
      "AI-powered task manager that auto-prioritizes, schedules, and breaks down complex goals into executable steps.",
    longDescription:
      "An intelligent task planner with natural-language input, calendar sync, energy-aware scheduling, and predictive completion estimates.",
    category: "AI",
    tech: ["Next.js", "OpenAI", "DndKit", "PostgreSQL", "Redis"],
    metrics: [
      { label: "Users", value: "850+" },
      { label: "Tasks", value: "60K" },
      { label: "NPS", value: "72" },
    ],
    image: "/projects/task-planner.png",
    liveUrl: "#",
    githubUrl: "#",
    accent: "from-purple-500 to-pink-500",
  },
];

export type TimelineEntry = {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "work" | "achievement" | "project";
};

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2024",
    title: "AI Engineering Deep-Dive",
    organization: "Self-Directed",
    description:
      "Mastered LLMs, RAG, vector databases, prompt engineering, and built multiple production AI products.",
    type: "education",
  },
  {
    year: "2024",
    title: "First SaaS — AI Habit Tracker",
    organization: "Independent",
    description:
      "Designed, built, and launched a subscription SaaS with payments, auth, and AI features.",
    type: "project",
  },
  {
    year: "2023",
    title: "Full Stack Specialization",
    organization: "Self-Directed",
    description:
      "Dived deep into Next.js, TypeScript, system design, and modern DevOps workflows.",
    type: "education",
  },
  {
    year: "2023",
    title: "Open Source Contributions",
    organization: "GitHub",
    description:
      "Started contributing to OSS, building tools, and sharing knowledge with the community.",
    type: "achievement",
  },
  {
    year: "2022",
    title: "Web Development Journey",
    organization: "Self-Taught",
    description:
      "Started with HTML/CSS/JS, fell in love with building for the web, never looked back.",
    type: "education",
  },
  {
    year: "2022",
    title: "First Line of Code",
    organization: "Curiosity",
    description:
      "Wrote `console.log('Hello World')` and a seed was planted that became an obsession.",
    type: "achievement",
  },
];

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

export const STATS: Stat[] = [
  { label: "Projects Shipped", value: 25, suffix: "+" },
  { label: "GitHub Stars", value: 1200, suffix: "+" },
  { label: "Coffee per Week", value: 42, suffix: " ☕" },
  { label: "Lines of Code", value: 250000, suffix: "+" },
];

export const TESTIMONIALS = [
  {
    name: "Senior Engineer",
    role: "FAANG",
    quote:
      "Audumber is the kind of builder every team needs — opinionated, fast, and obsessed with quality.",
  },
  {
    name: "Startup Founder",
    role: "Y Combinator",
    quote:
      "Working with him felt like hiring a full design + engineering team. The output was genuinely impressive.",
  },
  {
    name: "Product Designer",
    role: "Linear",
    quote:
      "Rare to find a developer who thinks in motion, systems, and pixels. He builds like a designer.",
  },
];

export const STACK_GROUPS = [
  {
    name: "Frontend",
    items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    name: "3D & Motion",
    items: ["Three.js", "R3F", "Drei", "Postprocessing", "Lenis"],
  },
  {
    name: "Backend",
    items: ["Node.js", "tRPC", "REST", "GraphQL", "WebSockets"],
  },
  {
    name: "AI & Data",
    items: ["OpenAI", "Ollama", "LangChain", "Vector DBs", "Prompt Eng."],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "Prisma", "Supabase", "Redis", "MongoDB"],
  },
  {
    name: "DevOps",
    items: ["Vercel", "Docker", "GitHub Actions", "AWS", "Cloudflare"],
  },
];
