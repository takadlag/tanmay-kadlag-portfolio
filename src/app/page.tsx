"use client";

import { useState } from "react";
import SacredCanvas from "../components/SacredCanvas";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectUniverse from "../components/ProjectUniverse";
import LifeOdyssey from "../components/LifeOdyssey";
import InnerSanctum from "../components/InnerSanctum";
import CredentialsVault from "../components/CredentialsVault";
import Testimonials from "../components/Testimonials";
import ArtifactGallery from "../components/ArtifactGallery";
import ContactSection from "../components/ContactSection";
import ScrollReveal from "../components/ScrollReveal";
import BackToTop from "../components/BackToTop";
import { PROFILE_DATA } from "../data/portfolioData";

export default function HomePage() {
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [timelineCategory, setTimelineCategory] = useState("all");

  const handleToggleLens = () => {
    const nextState = !recruiterMode;
    setRecruiterMode(nextState);
    setTimelineCategory(nextState ? "deloitte" : "all");
  };

  return (
    <div className="min-h-screen relative flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <SacredCanvas />
      <Navbar recruiterMode={recruiterMode} onToggleLens={handleToggleLens} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 space-y-24 sm:space-y-32 flex-1">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ProjectUniverse />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <LifeOdyssey
            activeCategory={timelineCategory}
            onSelectCategory={setTimelineCategory}
          />
        </ScrollReveal>

        {!recruiterMode && (
          <ScrollReveal delay={100}>
            <InnerSanctum />
          </ScrollReveal>
        )}

        <ScrollReveal delay={100}>
          <CredentialsVault />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ArtifactGallery />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ContactSection />
        </ScrollReveal>
      </main>

      {/* Sacred Footer */}
      <footer className="border-t border-slate-200 dark:border-white/10 glass py-12 mt-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-serif font-bold text-amber-600 dark:text-amber-400 text-lg">
                ॐ
              </span>
              <p className="font-display font-bold text-slate-900 dark:text-white text-base tracking-tight">
                {PROFILE_DATA.name.toUpperCase()}
              </p>
            </div>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
              {PROFILE_DATA.role} &bull; {PROFILE_DATA.team}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-cyan-400 text-slate-700 dark:text-slate-300 transition border border-slate-200/80 dark:border-white/5"
            >
              {PROFILE_DATA.email}
            </a>
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 text-slate-700 dark:text-slate-300 transition border border-slate-200/80 dark:border-white/5"
            >
              GitHub (takadlag)
            </a>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-cyan-500 text-white dark:text-slate-950 font-bold hover:brightness-105 transition shadow-sm"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-200 dark:border-white/10 text-center space-y-1">
          <p className="font-serif text-xs text-amber-700 dark:text-amber-400/80">
            &ldquo;कर्मण्येवाधिकारस्ते मा फलेषु कदाचन&rdquo; — Bhagavad Gita
          </p>
          <p className="font-mono text-[11px] text-slate-500">
            &copy; {new Date().getFullYear()} {PROFILE_DATA.name}. Architected with yogic mindfulness, deterministic data pipelines, and timeless prana.
          </p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}