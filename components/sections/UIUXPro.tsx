"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const bentoItems = [
  {
    title: "AI-First Development",
    description: "Building next-gen applications powered by artificial intelligence.",
    icon: "🧠",
    size: "large",
    gradient: "from-primary/10 to-purple-500/5",
  },
  {
    title: "3D Web Experiences",
    description: "Immersive Three.js and WebGL creations.",
    icon: "🌐",
    size: "small",
    gradient: "from-blue-500/10 to-cyan-500/5",
  },
  {
    title: "Pixel-Perfect UI",
    description: "Obsessive attention to every detail.",
    icon: "✨",
    size: "small",
    gradient: "from-purple-500/10 to-pink-500/5",
  },
  {
    title: "Motion Design",
    description: "Fluid animations that delight users.",
    icon: "🎯",
    size: "medium",
    gradient: "from-orange-500/10 to-yellow-500/5",
  },
  {
    title: "Scalable SaaS",
    description: "Architecture that grows with your users.",
    icon: "⚡",
    size: "medium",
    gradient: "from-green-500/10 to-emerald-500/5",
  },
];

const marqueeItems = [
  "Next.js", "React", "TypeScript", "Three.js", "Framer Motion",
  "Tailwind CSS", "Node.js", "Python", "PostgreSQL", "Prisma",
  "AI/ML", "SaaS", "GSAP", "WebGL", "R3F",
];

function BentoGrid() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" size="md" className="mb-4">
            Design System
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Premium <span className="text-gradient">UI/UX</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every pixel crafted with intention. Every interaction designed to delight.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large item spanning 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="sm:col-span-2 row-span-2"
          >
            <SpotlightCard className="glass rounded-2xl p-6 sm:p-8 h-full bg-gradient-to-br from-primary/5 to-purple-500/5 gradient-border">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="font-display text-xl font-semibold mb-2">
                AI-First Development
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building next-generation applications powered by artificial intelligence,
                from smart automation to predictive analytics.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["LLMs", "RAG", "AI Agents", "Prompt Engineering"].map((tag) => (
                  <Badge key={tag} variant="outline" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Small items */}
          {bentoItems.slice(1).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className={
                item.size === "medium" ? "sm:col-span-2" : ""
              }
            >
              <SpotlightCard
                className={`glass rounded-2xl p-6 h-full bg-gradient-to-br ${item.gradient}`}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display font-semibold mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="relative py-12 overflow-hidden border-y border-white/[0.06]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, setIdx) => (
          <div key={setIdx} className="flex shrink-0">
            {marqueeItems.map((item, i) => (
              <div
                key={`${setIdx}-${i}`}
                className="mx-6 flex items-center gap-3"
              >
                <span className="font-display text-lg font-semibold text-gradient">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SpotlightShowcase() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Interactive Motion",
              desc: "Hover for magnetic effects, smooth transitions, and micro-interactions.",
              icon: "🔄",
            },
            {
              title: "Glassmorphism",
              desc: "Premium glass effects with backdrop blur and subtle borders.",
              icon: "💎",
            },
            {
              title: "Dynamic Gradients",
              desc: "Animated gradient orbs and aurora effects that respond to scroll.",
              icon: "🌈",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <SpotlightCard className="glass rounded-2xl p-6 text-center h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function UIUXPro() {
  return (
    <>
      <BentoGrid />
      <Marquee />
      <SpotlightShowcase />
    </>
  );
}
