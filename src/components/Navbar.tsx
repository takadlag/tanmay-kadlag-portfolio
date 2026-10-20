"use client";

import { useState } from "react";
import { Sparkles, ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { PROFILE_DATA } from "../data/portfolioData";

interface NavbarProps {
  recruiterMode: boolean;
  onToggleLens: () => void;
}

export default function Navbar({ recruiterMode, onToggleLens }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "#hero", label: "Prana" },
    { href: "#karma", label: "Karma (Pipelines)" },
    { href: "#odyssey", label: "Odyssey" },
    { href: "#sanctum", label: "Inner Sanctum" },
    { href: "#credentials", label: "Vault" },
    { href: "#gallery", label: "Gallery" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-3">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
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
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                2026
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-500 dark:text-cyan-400 tracking-widest uppercase block mt-0.5">
              प्राण // PIPELINES
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition hover:text-amber-600 dark:hover:text-cyan-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gradient-to-r after:from-amber-500 after:to-cyan-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2.5">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-amber-500/20 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-amber-400 hover:scale-105 active:scale-95 transition shadow-sm"
            aria-label={theme === "dark" ? "Switch to Surya (Light) Theme" : "Switch to Chandra (Dark) Theme"}
            title={theme === "dark" ? "Surya Theme (Light)" : "Chandra Theme (Dark)"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-slate-800" />
            )}
          </button>

          {/* Recruiter Fast-Track Lens Button */}
          <button
            onClick={onToggleLens}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border border-cyan-500/30 dark:border-cyan-500/40 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 transition"
            aria-label={
              recruiterMode
                ? "Switch to Full Journey mode"
                : "Switch to Recruiter Fast-Track mode"
            }
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{recruiterMode ? "Lens: Fast-Track" : "Lens: Full Odyssey"}</span>
          </button>

          {/* Connect CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-500 text-white dark:text-slate-950 font-sans shadow-md hover:brightness-105 active:scale-98 transition"
          >
            Connect <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl border border-slate-300/40 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/5 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-200 dark:border-white/10 ${
          mobileOpen ? "max-h-[500px] opacity-100 py-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-mono uppercase text-slate-700 dark:text-slate-300 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-cyan-400 transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                onToggleLens();
                setMobileOpen(false);
              }}
              className="w-full py-2.5 rounded-lg text-xs font-mono border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-center"
            >
              Toggle {recruiterMode ? "Full Odyssey" : "Recruiter Fast-Track"}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 rounded-lg text-xs font-semibold text-center bg-gradient-to-r from-amber-500 to-cyan-500 text-white dark:text-slate-950"
            >
              Get In Touch
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
