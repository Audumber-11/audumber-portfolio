"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const linkGroups = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: SITE_CONFIG.social.github },
      { label: "LinkedIn", href: SITE_CONFIG.social.linkedin },
      { label: "Twitter", href: SITE_CONFIG.social.twitter },
      { label: "Email", href: `mailto:${SITE_CONFIG.email}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-20">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl">
            <span className="block text-balance text-foreground/90">
              Let's build
            </span>
            <span className="block gradient-text">the future.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-10 border-y border-white/5 py-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-2">
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 font-display text-lg font-bold text-white">
                A
              </div>
              <div>
                <div className="font-display text-lg font-semibold">
                  {SITE_CONFIG.name}
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  AI Engineer • India
                </div>
              </div>
            </a>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Building futuristic AI products, immersive web experiences, and
              scalable systems from India. Open for internships, freelance and
              full-time opportunities.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      data-cursor="hover"
                      className="group inline-flex items-center text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-[length:0%_1px] bg-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                        {l.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Crafted with{" "}
            <Heart className="inline h-3 w-3 fill-fuchsia-500 text-fuchsia-500" />{" "}
            and a lot of <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono">console.log</code>.
          </div>
          <a
            href="#home"
            data-cursor="hover"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
