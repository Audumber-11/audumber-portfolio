"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { skills } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import SkillOrbit from "@/components/3d/SkillOrbit";

const categories = ["All", "Frontend", "Backend", "AI", "Design"];

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" size="md" className="mb-4">
            Skills & Tools
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with daily to build cutting-edge applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] sm:h-[500px] hidden lg:block"
          >
            <SkillOrbit />
          </motion.div>

          {/* Skills grid */}
          <div>
            {/* Category filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-2 mb-8 flex-wrap"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground bg-white/[0.02] border border-white/5 hover:border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <AnimatePresence mode="wait">
                {filteredSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative group"
                  >
                    <div
                      className={`glass rounded-xl p-4 text-center transition-all duration-300 ${
                        hoveredSkill === skill.name
                          ? "border-primary/30 shadow-lg shadow-primary/5"
                          : ""
                      }`}
                    >
                      <div className="font-display font-semibold text-sm mb-2">
                        {skill.name}
                      </div>
                      {/* Proficiency bar */}
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isVisible ? { width: `${skill.level}%` } : {}
                          }
                          transition={{
                            duration: 1,
                            delay: 0.5 + i * 0.05,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
                        />
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-1">
                        {skill.level}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
