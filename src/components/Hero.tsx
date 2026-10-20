"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, ChevronDown, ArrowRight, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { PROFILE_DATA } from "../data/portfolioData";
import CountUp from "./CountUp";
import NeuralDataCore from "./NeuralDataCore";

export default function Hero() {
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);

  return (
    <section id="hero" className="relative pt-4 sm:pt-8 pb-8 scroll-mt-28">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Vision, Positioning & Verified Metrics */}
        <div className="lg:col-span-7 space-y-6">
          {/* Professional Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>DELOITTE iQ INNOVATION TEAM • PUNE, INDIA</span>
          </div>

          {/* Editorial Headline */}
          <div className="space-y-2">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Engineering Data &amp; <span className="gradient-text font-serif italic">AI Systems</span> at Scale.
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-amber-700 dark:text-amber-300 font-medium">
              Disciplined by yoga. Driven by systems thinking.
            </p>
          </div>

          {/* Concise, Grounded Supporting Copy */}
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            I&apos;m <strong className="text-slate-900 dark:text-white font-bold">{PROFILE_DATA.name}</strong> — a Machine Learning &amp; Big Data Engineer at{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Deloitte</span>,{" "}
            <span className="text-amber-600 dark:text-amber-400 font-semibold">VNIT Nagpur &apos;22 (B.Tech EEE)</span> alumnus, and{" "}
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">JENESYS 2.0 India Envoy to Japan</span>.
            I architect 2TB+ Medallion Delta Lakehouses and high-throughput pipelines that transform 500M+ monthly FMCG records into automated, operational clarity.
          </p>

          {/* At Most Three Prominent, Clearly Labelled Metrics */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-1 max-w-xl">
            <div className="p-4 rounded-2xl glass border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-cyan-600 dark:text-cyan-400 block">
                <CountUp target="500M+" />
              </span>
              <span className="font-mono text-xs font-bold text-slate-900 dark:text-white block mt-1">
                Records / Month
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5 leading-snug">
                Enterprise FMCG Ingestion
              </span>
            </div>

            <div className="p-4 rounded-2xl glass border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-600 dark:text-emerald-400 block">
                <CountUp target="2TB+" />
              </span>
              <span className="font-mono text-xs font-bold text-slate-900 dark:text-white block mt-1">
                Delta Lakehouse
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5 leading-snug">
                ACID CDC Pipelines
              </span>
            </div>

            <div className="p-4 rounded-2xl glass border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-amber-600 dark:text-amber-400 block">
                <CountUp target="30%" />
              </span>
              <span className="font-mono text-xs font-bold text-slate-900 dark:text-white block mt-1">
                Cycle Reduction
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5 leading-snug">
                ADF &amp; Observability
              </span>
            </div>
          </div>

          {/* Primary Action Suite */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {/* Primary Action: Explore Projects */}
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-500 text-white dark:text-slate-950 hover:brightness-105 active:scale-98 transition flex items-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Resume Dropdown Action */}
            <div className="relative">
              <button
                onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm glass glass-hover text-slate-800 dark:text-white flex items-center gap-2 border border-slate-200 dark:border-white/10"
                aria-expanded={resumeDropdownOpen}
                aria-haspopup="true"
              >
                <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resumeDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Accessible Dropdown Menu */}
              {resumeDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-2xl glass border border-slate-200 dark:border-white/10 shadow-2xl p-2 z-30 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-150">
                  <a
                    href="/docs/Tanmay_Kadlag_ML_Engineer.pdf"
                    download
                    onClick={() => setResumeDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-amber-500/10 text-slate-800 dark:text-slate-200 hover:text-amber-700 dark:hover:text-amber-300 transition text-left"
                  >
                    <FileText className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <strong className="block text-xs font-semibold">Machine Learning Engineer</strong>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">PDF • Updated for 2026</span>
                    </div>
                  </a>
                  <a
                    href="/docs/Tanmay_Kadlag_BigData_Engineer.pdf"
                    download
                    onClick={() => setResumeDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-cyan-500/10 text-slate-800 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 transition text-left border-t border-slate-100 dark:border-white/5"
                  >
                    <FileText className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                    <div>
                      <strong className="block text-xs font-semibold">Big Data &amp; Lakehouse Engineer</strong>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">PDF • Updated for 2026</span>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Contact Action */}
            <a
              href="#contact"
              className="px-5 py-3.5 rounded-xl font-medium text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-cyan-400 transition flex items-center gap-1.5"
            >
              Get In Touch →
            </a>
          </div>

          {/* Verified Identity Badge Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-500" />
              <span>VNIT B.Tech EEE &apos;22</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Stanford ML Certified</span>
            </span>
            <span>•</span>
            <span>6x 2025 Deloitte &amp; Client Honors</span>
          </div>
        </div>

        {/* Right Column: Signature Interactive Visual + Profile Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass rounded-3xl p-6 border border-slate-200/80 dark:border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Signature Interactive Visual: Neural Data Core */}
            <NeuralDataCore />

            {/* Profile Bar Anchored Below Signature Visual */}
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden p-[1.5px] bg-gradient-to-tr from-amber-500 via-cyan-500 to-emerald-500 shrink-0 shadow-md">
                  <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-slate-900">
                    <Image
                      src="/prof.jpg"
                      alt="Tanmay Ramrao Kadlag"
                      fill
                      sizes="48px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div>
                  <h2 className="font-display font-bold text-sm text-slate-900 dark:text-white leading-tight">
                    Tanmay Ramrao Kadlag
                  </h2>
                  <p className="font-mono text-[11px] text-slate-500 dark:text-cyan-400">
                    ML &amp; Big Data Engineer @ Deloitte iQ
                  </p>
                </div>
              </div>

              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl font-mono text-xs text-amber-700 dark:text-amber-400 hover:bg-amber-500/10 transition border border-amber-500/20 font-semibold"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
