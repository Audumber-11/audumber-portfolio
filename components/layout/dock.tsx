"use client";

import { motion } from "framer-motion";
import {
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
} from "lucide-react";

const items = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: Briefcase, label: "Work", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/audumber-11" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/audumber" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/audumber" },
];

export function Dock() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
    >
      <div className="glass-strong spotlight flex items-center gap-1 rounded-2xl border border-white/10 p-2 shadow-2xl">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            data-cursor="hover"
            aria-label={item.label}
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-white/[0.06] hover:text-foreground"
          >
            <item.icon className="h-4 w-4" />
            <span className="pointer-events-none absolute -top-9 scale-90 whitespace-nowrap rounded-md border border-white/10 bg-background/90 px-2 py-1 text-[10px] font-medium text-foreground opacity-0 backdrop-blur-md transition-all group-hover:scale-100 group-hover:opacity-100">
              {item.label}
            </span>
          </a>
        ))}
        <div className="mx-1 h-6 w-px bg-white/10" />
        {socials.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            aria-label={item.label}
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-white/[0.06] hover:text-foreground"
          >
            <item.icon className="h-4 w-4" />
            <span className="pointer-events-none absolute -top-9 scale-90 whitespace-nowrap rounded-md border border-white/10 bg-background/90 px-2 py-1 text-[10px] font-medium text-foreground opacity-0 backdrop-blur-md transition-all group-hover:scale-100 group-hover:opacity-100">
              {item.label}
            </span>
          </a>
        ))}
        <div className="mx-1 h-6 w-px bg-white/10" />
        <button
          data-cursor="hover"
          aria-label="AI Assistant"
          className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-[0_0_20px_-5px_rgba(167,139,250,0.6)] transition-transform hover:scale-105"
        >
          <Sparkles className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 ring-2 ring-background" />
        </button>
      </div>
    </motion.div>
  );
}
