"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { projects } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const categories = ["All", "SaaS", "AI", "Full Stack", "Dashboard"];

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
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
            Projects
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Projects that showcase my skills in AI, full-stack, and creative development.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-12 flex-wrap"
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

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <SpotlightCard
                  className="glass rounded-2xl overflow-hidden h-full group cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  {/* Project image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 via-purple-500/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                    <div className="relative z-20 text-center p-4">
                      <div className="font-display text-lg font-semibold text-gradient">
                        {project.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {project.metrics}
                      </div>
                    </div>
                    {/* Animated gradient overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
                  </div>

                  <div className="p-5">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="default" size="sm">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" size="sm">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      <Button variant="primary" size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto"
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;
                return (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <Badge variant="primary">{project.category}</Badge>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" size="md">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="primary" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">View Live</a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">View Source</a>
                      </Button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
