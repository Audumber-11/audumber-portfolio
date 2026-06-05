"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={cn(
              "flex items-center justify-between rounded-full transition-all duration-500",
              scrolled
                ? "border border-white/10 bg-background/60 px-5 py-2.5 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                : "px-2 py-2"
            )}
          >
            <a
              href="#home"
              className="group flex items-center gap-2"
              data-cursor="hover"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-500 font-display text-sm font-bold text-white shadow-[0_0_20px_-5px_rgba(167,139,250,0.6)]">
                <span>A</span>
                <span className="absolute -inset-px rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-500 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50" />
              </div>
              <span className="hidden font-display text-base font-semibold sm:block">
                {SITE_CONFIG.name.split(" ")[0]}
                <span className="text-violet-400">.</span>
              </span>
            </a>

            <ul className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative inline-flex items-center px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    data-cursor="hover"
                  >
                    <span className="font-mono text-[10px] text-violet-400/60">
                      0{i + 1}
                    </span>
                    <span className="ml-1.5">{link.name}</span>
                    <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-2 md:flex">
              <a
                href={SITE_CONFIG.resumeUrl}
                download
                data-cursor="hover"
                className="inline-flex h-9 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-foreground/90 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.08]"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Resume
              </a>
              <Button
                asChild
                variant="gradient"
                size="sm"
                className="rounded-full"
                data-cursor="hover"
              >
                <a href="#contact">Hire Me</a>
              </Button>
            </div>

            <button
              onClick={() => setOpen((p) => !p)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
              data-cursor="hover"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden"
          >
            <div className="glass-strong rounded-2xl p-4">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-white/5"
                    >
                      <span className="font-mono text-xs text-violet-400">
                        0{i + 1}
                      </span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex gap-2 border-t border-white/10 pt-3">
                <a
                  href={SITE_CONFIG.resumeUrl}
                  className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-center text-sm font-medium"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2.5 text-center text-sm font-medium text-white"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
