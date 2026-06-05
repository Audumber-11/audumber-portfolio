"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/constants";

const commands = [
  { id: "hero", label: "Go to Home", href: "#hero", icon: "🏠" },
  { id: "about", label: "Go to About", href: "#about", icon: "👤" },
  { id: "skills", label: "Go to Skills", href: "#skills", icon: "⚡" },
  { id: "projects", label: "Go to Projects", href: "#projects", icon: "📁" },
  { id: "experience", label: "Go to Experience", href: "#experience", icon: "💼" },
  { id: "contact", label: "Go to Contact", href: "#contact", icon: "✉️" },
  { id: "resume", label: "Download Resume", href: "/resume.pdf", icon: "📄" },
  { id: "github", label: "Open GitHub", href: personalInfo.github, icon: "🐙" },
  { id: "linkedin", label: "Open LinkedIn", href: personalInfo.linkedin, icon: "💼" },
  { id: "twitter", label: "Open Twitter", href: personalInfo.twitter, icon: "🐦" },
  { id: "email", label: "Send Email", href: `mailto:${personalInfo.email}`, icon: "✉️" },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (cmd: (typeof commands)[0]) => {
    if (cmd.id === "resume" || cmd.id === "github" || cmd.id === "linkedin" || cmd.id === "twitter" || cmd.id === "email") {
      window.open(cmd.href, "_blank");
    } else {
      const el = document.querySelector(cmd.href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);

  return (
    <>
      {/* Hidden shortcut hint */}
      <div className="hidden" aria-hidden />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[15vh]"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg glass rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Search */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-muted-foreground shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    autoFocus
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search commands..."
                    className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground/50 focus:outline-none"
                  />
                  <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs bg-white/5 rounded border border-white/10 text-muted-foreground">
                    ESC
                  </kbd>
                </div>
              </div>

              {/* Results */}
              <div className="p-2 max-h-[320px] overflow-y-auto">
                {filtered.length === 0 ? (
                  <div className="p-6 text-center text-sm text-muted-foreground">
                    <div className="text-2xl mb-2">🔍</div>
                    No results found for &quot;{search}&quot;
                  </div>
                ) : (
                  filtered.map((cmd, i) => (
                    <motion.button
                      key={cmd.id}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.1 }}
                      onClick={() => handleSelect(cmd)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-left group"
                    >
                      <span className="text-lg shrink-0">{cmd.icon}</span>
                      <span className="text-sm flex-1">{cmd.label}</span>
                      <span className="text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        ↵
                      </span>
                    </motion.button>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-white/5 flex items-center justify-between text-[10px] text-muted-foreground">
                <span>⌘K to toggle</span>
                <span>↑↓ to navigate • ↵ to select</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
