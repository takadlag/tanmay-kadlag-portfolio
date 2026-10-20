"use client";

import { useState } from "react";
import { Sparkles, ArrowUpRight, Menu, X } from "lucide-react";
import { PROFILE_DATA } from "../data/portfolioData";

interface NavbarProps {
  recruiterMode: boolean;
  onToggleLens: () => void;
}

export default function Navbar({ recruiterMode, onToggleLens }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#odyssey", label: "Life Odyssey" },
    { href: "#nerve-centre", label: "APAC Nerve Centre" },
    { href: "#architecture", label: "Lakehouse & Cloud" },
    { href: "#credentials", label: "Skills & Vault" },
    { href: "#vault-gallery", label: "Visual Gallery" },
    ...(!recruiterMode
      ? [{ href: "#zen", label: "Zen & Roots" }]
      : []),
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 via-emerald-500 to-amber-500 p-[1px]">
            <div className="w-full h-full bg-slate-950 rounded-lg flex items-center justify-center font-display font-bold text-sm tracking-wider text-white">
              TK
            </div>
          </div>
          <div>
            <span className="font-display font-bold text-white tracking-tight block leading-none">
              {PROFILE_DATA.shortName}
            </span>
            <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase">
              Prana // Pipelines
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition ${
                link.href === "#zen"
                  ? "hover:text-amber-400"
                  : "hover:text-cyan-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLens}
            className="px-3 py-1.5 rounded-full text-xs font-mono border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition flex items-center gap-1.5"
            aria-label={
              recruiterMode
                ? "Switch to Full Odyssey mode"
                : "Switch to Recruiter Fast-Track mode"
            }
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {recruiterMode
                ? "Mode: Recruiter Fast-Track"
                : "Mode: Full Odyssey"}
            </span>
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:opacity-90 transition"
          >
            Connect <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg glass text-slate-300 hover:text-white transition"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-6 pt-2 space-y-1 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 text-center"
            >
              Get In Touch
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
