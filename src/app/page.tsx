"use client";

import { useState } from "react";
import NeuralCanvas from "../components/NeuralCanvas";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LifeOdyssey from "../components/LifeOdyssey";
import ApacNerveCentre from "../components/ApacNerveCentre";
import ArchitectureLabs from "../components/ArchitectureLabs";
import CredentialsVault from "../components/CredentialsVault";
import Testimonials from "../components/Testimonials";
import ArtifactGallery from "../components/ArtifactGallery";
import ZenCore from "../components/ZenCore";
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
    <>
      <NeuralCanvas />
      <Navbar recruiterMode={recruiterMode} onToggleLens={handleToggleLens} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 space-y-28">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <LifeOdyssey
            activeCategory={timelineCategory}
            onSelectCategory={setTimelineCategory}
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ApacNerveCentre />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ArchitectureLabs />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <CredentialsVault />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ArtifactGallery />
        </ScrollReveal>

        {!recruiterMode && (
          <ScrollReveal delay={100}>
            <ZenCore />
          </ScrollReveal>
        )}

        <ScrollReveal delay={100}>
          <ContactSection />
        </ScrollReveal>
      </main>

      <footer className="border-t border-white/10 glass py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-white text-lg">
              {PROFILE_DATA.name.toUpperCase()}
            </p>
            <p className="font-mono text-xs text-slate-400">
              {PROFILE_DATA.role} • {PROFILE_DATA.location}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-200 transition"
            >
              {PROFILE_DATA.email}
            </a>
            <a
              href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, "")}`}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-slate-200 transition"
            >
              {PROFILE_DATA.phone}
            </a>
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-purple-500/20 text-slate-200 transition"
            >
              GitHub (takadlag)
            </a>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:opacity-90 transition"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-white/10 text-center">
          <p className="font-mono text-xs text-slate-500">
            © {new Date().getFullYear()} {PROFILE_DATA.name}. Crafted with
            discipline, data, and a touch of prana.
          </p>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}