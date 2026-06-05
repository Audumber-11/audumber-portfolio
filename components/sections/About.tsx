"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { personalInfo, achievements } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

const timeline = [
  {
    year: "2022",
    title: "Started Coding Journey",
    description: "Began exploring web development and programming fundamentals.",
    icon: "🚀",
  },
  {
    year: "2023",
    title: "Dived into AI/ML",
    description: "Started learning AI/ML concepts, LLMs, and prompt engineering.",
    icon: "🤖",
  },
  {
    year: "2024",
    title: "Full Stack & SaaS Building",
    description: "Built production-ready SaaS products and full-stack applications.",
    icon: "⚡",
  },
  {
    year: "2025",
    title: "AI-Native Development",
    description: "Developing AI-powered products, exploring RAG systems and AI agents.",
    icon: "🧠",
  },
  {
    year: "2026+",
    title: "Building the Future",
    description: "Pushing boundaries with immersive 3D web experiences and AI innovations.",
    icon: "🌟",
  },
];

export default function About() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" size="md" className="mb-4">
            About Me
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            The{" "}
            <span className="text-gradient">Journey</span> So Far
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From a curious developer to an AI-native engineer — building products
            that matter.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 gradient-border">
              <h3 className="font-display text-xl font-semibold mb-4">
                A Builder&apos;s Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a hungry developer from India, deeply passionate about AI and
                  building powerful products. My journey started with curiosity about
                  how websites work and evolved into a full-blown obsession with
                  creating immersive digital experiences.
                </p>
                <p>
                  Today, I focus on building AI-powered SaaS products, exploring the
                  intersection of creative development and artificial intelligence.
                  Every project is an opportunity to push boundaries and learn
                  something new.
                </p>
                <p>
                  I&apos;m currently preparing for AI internships, working on multiple
                  SaaS projects, and constantly exploring emerging technologies.
                  My goal is to build products that make a real impact.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {achievements.map((achievement, i) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/5"
                  >
                    <div className="font-display text-2xl font-bold text-gradient">
                      {achievement.value}{achievement.suffix}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
                    className="relative pl-16 group"
                  >
                    {/* Icon */}
                    <div className="absolute left-4 top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-125 transition-transform">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>

                    {/* Year badge */}
                    <Badge variant="outline" size="sm" className="mb-2">
                      {item.year}
                    </Badge>

                    <h4 className="font-display font-semibold text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
