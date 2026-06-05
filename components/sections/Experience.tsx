"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { experience } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

const typeColors: Record<string, string> = {
  Internship: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Freelance: "bg-green-500/10 text-green-400 border-green-500/20",
  Design: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Creative: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Learning: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

export default function Experience() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" size="md" className="mb-4">
            Experience
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The path I&apos;ve taken to become the developer I am today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:-translate-x-px" />

            <div className="space-y-12">
              {experience.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-[7px] md:-translate-x-2 rounded-full bg-primary/20 border-2 border-primary z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Badge
                        variant="outline"
                        size="sm"
                        className={typeColors[item.type]}
                      >
                        {item.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.company}
                    </p>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5">
                      {item.highlights.map((highlight, j) => (
                        <li
                          key={j}
                          className={`text-xs text-muted-foreground/70 flex items-start gap-2 ${
                            i % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          <span className="text-primary mt-0.5 shrink-0">✦</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
