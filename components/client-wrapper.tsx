"use client";

import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import UIUXPro from "@/components/sections/UIUXPro";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export function ClientWrapper() {
  return (
    <>
      <Navigation />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <UIUXPro />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
