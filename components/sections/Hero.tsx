"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AISphere from "@/components/3d/AISphere";
import FloatingLaptop from "@/components/3d/FloatingLaptop";
import ParticleField from "@/components/3d/ParticleField";
import GridBackground from "@/components/3d/GridBackground";

const typewriterWords = [
  "AI Developer",
  "Creative Engineer",
  "SaaS Builder",
  "Full Stack Developer",
  "UI/UX Engineer",
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typewriterWords[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
    } else {
      timeout = setTimeout(
        () => {
          setCurrentText(
            isDeleting
              ? currentText.slice(0, -1)
              : currentWord.slice(0, currentText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <GridBackground />
      <ParticleField />

      {/* 3D Sphere */}
      <div className="absolute inset-0 z-[2]">
        <AISphere />
      </div>

      {/* Floating Laptop - right side */}
      <div className="absolute right-[-5%] top-[15%] w-[45%] h-[60%] z-[2] hidden xl:block">
        <FloatingLaptop />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background z-[3]" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent z-[3]" />

      {/* Content */}
      <div className="relative z-10 container-wide px-4 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6 flex-wrap"
          >
            <Badge variant="glow" size="md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
              {personalInfo.availability}
            </Badge>
            <Badge variant="outline" size="md">
              Based in {personalInfo.location}
            </Badge>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          >
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-10 sm:h-12 flex items-center justify-center mb-6"
          >
            <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              {currentText}
              <span className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 animate-blink align-middle" />
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <Button
              variant="glow"
              size="lg"
              onClick={scrollToProjects}
              className="group"
            >
              View My Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={personalInfo.resumeUrl} download>Download Resume</a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-primary/30 transition-all duration-200 group"
            >
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-primary/30 transition-all duration-200 group"
            >
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-primary/30 transition-all duration-200 group"
            >
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] right-[10%]"
            >
              <Badge variant="glow" size="md" className="px-3 py-1.5">
                ⚡ AI Native
              </Badge>
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[35%] left-[8%]"
            >
              <Badge variant="outline" size="md" className="px-3 py-1.5">
                🚀 25+ Projects
              </Badge>
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[30%] right-[12%]"
            >
              <Badge variant="primary" size="md" className="px-3 py-1.5">
                ✦ Open to Work
              </Badge>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
