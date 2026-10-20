"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Download, FileText, MapPin, Award, CheckCircle2 } from "lucide-react";
import { PROFILE_DATA } from "../data/portfolioData";
import CountUp from "./CountUp";

export default function Hero() {
  const [breathPhase, setBreathPhase] = useState<"Inhale (Puraka)" | "Hold (Kumbhaka)" | "Exhale (Rechaka)">("Inhale (Puraka)");

  // Subtle Pranayama Breath Rhythm (4s Inhale, 4s Hold, 4s Exhale)
  useEffect(() => {
    const phases: ("Inhale (Puraka)" | "Hold (Kumbhaka)" | "Exhale (Rechaka)")[] = [
      "Inhale (Puraka)",
      "Hold (Kumbhaka)",
      "Exhale (Rechaka)",
    ];
    let currentIdx = 0;
    const interval = setInterval(() => {
      currentIdx = (currentIdx + 1) % 3;
      setBreathPhase(phases[currentIdx]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-6 sm:pt-10">
      {/* Sacred Subtle Yantra Aura in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Vision & Narrative */}
        <div className="lg:col-span-7 space-y-6">
          {/* Sanskrit Sloka / Sacred Philosophy Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-serif tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span className="font-semibold">योगः कर्मसु कौशलम्</span>
            <span className="opacity-40">|</span>
            <span className="font-mono text-[11px] tracking-normal uppercase">
              Excellence in Action — Gita 2.50
            </span>
          </div>

          {/* Clean, Majestic Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Where Yogic Stillness Powers{" "}
            <span className="gradient-text font-serif italic">500M+ Record</span>{" "}
            Neural Pipelines.
          </h1>

          {/* Decluttered, High-Clarity Introduction */}
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            I&apos;m <strong className="text-slate-900 dark:text-white">{PROFILE_DATA.name}</strong> — a
            Machine Learning & Big Data Engineer at{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">Deloitte (iQ Innovation Team)</span>,{" "}
            <span className="font-semibold text-amber-600 dark:text-amber-400">VNIT Nagpur &apos;22</span> alumnus, and{" "}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">JENESYS 2.0 India Envoy to Japan</span>.
            I translate ancient yogic equilibrium into hyper-scalable Delta Lakehouses and autonomous FMCG intelligence.
          </p>

          {/* Real-time Interactive Pranayama Breathing Bar */}
          <div className="glass rounded-2xl p-4 border border-amber-500/20 max-w-xl flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 font-serif font-bold text-sm">
                प्रा
              </div>
              <div>
                <span className="block font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Active Mindfulness Rhythm
                </span>
                <span className="font-serif font-semibold text-slate-800 dark:text-amber-200 text-xs">
                  {breathPhase}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] text-slate-600 dark:text-slate-300">
                Deloitte iQ Pune
              </span>
            </div>
          </div>

          {/* Streamlined Primary CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/docs/Tanmay_Kadlag_ML_Engineer.pdf"
              download
              className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-500 text-white dark:text-slate-950 hover:brightness-105 active:scale-98 transition flex items-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Download className="w-4 h-4" /> Download ML Resume
            </a>
            <a
              href="/docs/Tanmay_Kadlag_BigData_Engineer.pdf"
              download
              className="px-5 py-3.5 rounded-xl font-semibold text-sm glass glass-hover text-slate-800 dark:text-white flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Big Data CV
            </a>
            <a
              href="#odyssey"
              className="px-5 py-3.5 rounded-xl font-medium text-xs font-mono text-amber-700 dark:text-amber-300 hover:underline flex items-center gap-1.5"
            >
              Explore Odyssey →
            </a>
          </div>
        </div>

        {/* Right Column: Sacred Mandala Profile Card */}
        <div className="lg:col-span-5">
          <div className="glass rounded-3xl p-6 sm:p-8 border border-amber-500/20 shadow-2xl relative overflow-hidden group">
            {/* Corner Decorative Sanskrit Accent */}
            <div className="absolute top-3 right-4 font-serif text-[10px] tracking-widest text-slate-400/40 uppercase pointer-events-none">
              तपस्या • कौशलम्
            </div>

            {/* Profile Avatar with Sacred Halo */}
            <div className="flex flex-col sm:flex-row items-center gap-5 border-b border-slate-200 dark:border-white/10 pb-6 mb-6 text-center sm:text-left">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-tr from-amber-500 via-cyan-500 to-emerald-500 shrink-0 shadow-xl group-hover:scale-105 transition duration-500">
                <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-900">
                  <Image
                    src="/prof.jpg"
                    alt="Tanmay Ramrao Kadlag"
                    fill
                    sizes="96px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono text-[10px]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Deloitte iQ Team</span>
                </div>
                <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  Tanmay Kadlag
                </h2>
                <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  Machine Learning & Big Data Engineer
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-[11px] font-mono text-slate-400">
                  <MapPin className="w-3 h-3 text-rose-500" />
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* 4 Decluttered Pillars / Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-100/60 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5">
                <span className="font-display font-black text-2xl text-cyan-600 dark:text-cyan-400 block">
                  <CountUp target="500M+" />
                </span>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                  Monthly Records
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-100/60 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5">
                <span className="font-display font-black text-2xl text-emerald-600 dark:text-emerald-400 block">
                  <CountUp target="2TB+" />
                </span>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                  Delta Lakehouse
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-100/60 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5">
                <span className="font-display font-black text-2xl text-amber-600 dark:text-amber-400 block">
                  <CountUp target="30%" />
                </span>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                  Forecast Accuracy Gain
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-100/60 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5">
                <span className="font-display font-black text-2xl text-rose-600 dark:text-rose-400 block flex items-center gap-1">
                  <span>6x</span>
                  <Award className="w-4 h-4 text-amber-500 inline" />
                </span>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                  2025 Deloitte Honors
                </span>
              </div>
            </div>

            {/* Quick LinkedIn & GitHub verification bar */}
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono">
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 dark:hover:text-cyan-400 transition"
              >
                github.com/takadlag
              </a>
              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 dark:text-amber-400 hover:underline transition font-semibold"
              >
                LinkedIn Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
