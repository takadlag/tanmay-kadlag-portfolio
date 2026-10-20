"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { PROFILE_DATA } from "../data/portfolioData";

interface NavbarProps {
  recruiterMode: boolean;
  onToggleLens: () => void;
}

export default function Navbar({ recruiterMode, onToggleLens }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "#projects", id: "projects", label: "Projects", sub: "Lakehouse & AI" },
    { href: "#experience", id: "experience", label: "Experience", sub: "Odyssey" },
    { href: "#philosophy", id: "philosophy", label: "Philosophy", sub: "Ashtanga" },
    { href: "#skills", id: "skills", label: "Skills & Vault", sub: "Credentials" },
    { href: "#gallery", id: "gallery", label: "Gallery", sub: "Artifacts" },
    { href: "#contact", id: "contact", label: "Contact", sub: "Connect" },
  ];

  // Active section indicator via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["hero", "projects", "experience", "philosophy", "skills", "gallery", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.25, rootMargin: "-80px 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl"
          aria-label="Tanmay Kadlag Portfolio Home"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-rose-500 to-cyan-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md">
            <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center font-serif font-black text-sm tracking-wider text-amber-700 dark:text-amber-400">
              ॐ
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-slate-900 dark:text-white tracking-tight text-sm sm:text-base leading-none">
                {PROFILE_DATA.shortName}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-semibold">
                Deloitte iQ
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-500 dark:text-cyan-400 tracking-widest uppercase block mt-0.5">
              DATA & AI SYSTEMS // PRANA
            </span>
          </div>
        </a>

        {/* Desktop Nav Links with Clear Labels and Subtitles */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-sans"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-xl transition-all duration-200 text-left flex flex-col relative ${
                  isActive
                    ? "bg-amber-500/10 dark:bg-cyan-500/10 text-amber-700 dark:text-cyan-300 font-bold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <span className="text-xs font-semibold leading-tight">{link.label}</span>
                <span className="font-mono text-[9px] text-slate-400 dark:text-slate-500 leading-tight">
                  {link.sub}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-amber-500 to-cyan-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-amber-400 hover:scale-105 active:scale-95 transition shadow-sm focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
            title={theme === "dark" ? "Surya Theme (Light)" : "Chandra Theme (Dark)"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-800" />
            )}
          </button>

          {/* Recruiter Fast-Track Lens Button */}
          <button
            onClick={onToggleLens}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border border-cyan-500/30 dark:border-cyan-500/40 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 transition focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label={
              recruiterMode
                ? "Switch to Full Journey mode"
                : "Switch to Recruiter Fast-Track mode"
            }
            title="Toggles between full narrative and fast-track engineering view"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{recruiterMode ? "Lens: Fast-Track" : "Lens: All Work"}</span>
          </button>

          {/* Connect CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-500 text-white dark:text-slate-950 font-sans shadow-md hover:brightness-105 active:scale-98 transition focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl border border-slate-300/40 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/5 transition focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-200 dark:border-white/10 ${
          mobileOpen
            ? "max-h-[540px] opacity-100 py-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 space-y-1.5" aria-label="Mobile Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition ${
                  isActive
                    ? "bg-amber-500/10 dark:bg-cyan-500/10 text-amber-700 dark:text-cyan-300 font-bold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                <span className="text-sm font-medium">{link.label}</span>
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                  {link.sub}
                </span>
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                onToggleLens();
                setMobileOpen(false);
              }}
              className="w-full py-2.5 rounded-xl text-xs font-mono border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-center font-semibold"
            >
              Toggle {recruiterMode ? "Full Odyssey View" : "Recruiter Fast-Track View"}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 rounded-xl text-xs font-bold text-center bg-gradient-to-r from-amber-500 to-cyan-500 text-white dark:text-slate-950"
            >
              Get In Touch
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
