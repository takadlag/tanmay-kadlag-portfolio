"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, ChevronDown, ArrowRight, ShieldCheck, FileText, CheckCircle2, Maximize2, X } from "lucide-react";
import { PROFILE_DATA } from "../data/portfolioData";
import CountUp from "./CountUp";
import NeuralDataCore from "./NeuralDataCore";

export default function Hero() {
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  const [showPortraitModal, setShowPortraitModal] = useState(false);

  return (
    <section id="hero" className="relative pt-4 sm:pt-8 pb-8 scroll-mt-28">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Vision, Positioning & Verified Metrics */}
        <div className="lg:col-span-7 space-y-6">
          {/* Professional Status Pill & Mobile Identity Preview */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>DELOITTE iQ INNOVATION TEAM • PUNE, INDIA</span>
            </div>
          </div>

          {/* Prominent Mobile Portrait Card (Visible on mobile screens < 640px) */}
          <div className="flex sm:hidden items-center gap-4 p-4 rounded-2xl glass border border-slate-200/80 dark:border-white/10 shadow-lg">
            <div
              onClick={() => setShowPortraitModal(true)}
              className="relative w-20 h-20 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-tr from-amber-500 via-cyan-500 to-emerald-500 shrink-0 shadow-md cursor-pointer"
              title="Tap to view full-resolution portrait"
            >
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-900">
                <Image
                  src="/prof.jpg"
                  alt="Tanmay Ramrao Kadlag"
                  fill
                  sizes="80px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="space-y-0.5">
              <h2 className="font-display font-bold text-base text-slate-900 dark:text-white leading-tight">
                Tanmay Ramrao Kadlag
              </h2>
              <p className="font-mono text-xs text-cyan-700 dark:text-cyan-400 font-medium">
                ML &amp; Big Data Engineer @ Deloitte
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                VNIT &apos;22 • Japan Envoy
              </p>
            </div>
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

            {/* Prominent Profile Showcase Card Anchored Below Signature Visual */}
            <div className="mt-5 pt-5 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
              {/* High-Resolution Portrait with Gradient Aura */}
              <div
                onClick={() => setShowPortraitModal(true)}
                className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden p-[2.5px] bg-gradient-to-tr from-amber-500 via-cyan-500 to-emerald-500 shrink-0 shadow-xl shadow-cyan-500/10 cursor-pointer group/photo transition duration-300 hover:shadow-cyan-500/20"
                title="Click to view full-resolution portrait"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setShowPortraitModal(true);
                }}
              >
                <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-900">
                  <Image
                    src="/prof.jpg"
                    alt="Tanmay Ramrao Kadlag — ML & Big Data Engineer"
                    fill
                    sizes="(max-width: 640px) 112px, 144px"
                    className="object-cover object-center group-hover/photo:scale-108 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white drop-shadow" />
                  </div>
                </div>
                {/* Live Active Status Indicator */}
                <div
                  className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-950 shadow-md"
                  title="Active: Open to High-Impact Opportunities"
                />
              </div>

              {/* Identity & Social Connection Suite */}
              <div className="space-y-2 flex-1 text-center sm:text-left">
                <div>
                  <div className="flex items-center justify-center sm:justify-between gap-2 flex-wrap">
                    <h2 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
                      Tanmay Ramrao Kadlag
                    </h2>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-bold shrink-0">
                      LEAD ENGINEER
                    </span>
                  </div>
                  <p className="font-mono text-xs text-cyan-700 dark:text-cyan-400 mt-0.5 font-medium">
                    ML &amp; Big Data Engineer @ Deloitte iQ
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans mt-0.5">
                    VNIT Nagpur &apos;22 • JENESYS 2.0 Envoy to Japan
                  </p>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-1.5 pt-1 flex-wrap">
                  <a
                    href={PROFILE_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg font-mono text-[11px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 transition border border-amber-500/30 flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <span>→</span>
                  </a>
                  <a
                    href={PROFILE_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-200/70 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 transition border border-slate-300/80 dark:border-white/10"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.instagram.com/tanmay_kadlag/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg font-mono text-[11px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 transition border border-rose-500/30"
                  >
                    Insta
                  </a>
                  <a
                    href="https://www.instagram.com/tanmaystarart/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg font-mono text-[11px] font-semibold text-purple-600 dark:text-purple-400 bg-purple-500/10 hover:bg-purple-500/20 transition border border-purple-500/30"
                  >
                    Art
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Portrait Modal Lightbox */}
      {showPortraitModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 modal-backdrop flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowPortraitModal(false)}
        >
          <div
            className="glass rounded-3xl max-w-lg w-full p-6 border border-slate-200/80 dark:border-white/10 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
                  VERIFIED IDENTITY &bull; PORTRAIT
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  Tanmay Ramrao Kadlag
                </h3>
              </div>
              <button
                onClick={() => setShowPortraitModal(false)}
                className="p-2.5 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white transition"
                aria-label="Close portrait modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-square w-full max-h-[60vh] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-200 dark:border-white/10 shadow-xl">
              <Image
                src="/prof.jpg"
                alt="Tanmay Ramrao Kadlag — Machine Learning & Big Data Engineer"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-sans">
              Machine Learning &amp; Big Data Engineer at Deloitte (iQ Innovation Team, Pune), VNIT Nagpur &apos;22 alumnus (B.Tech EEE), and JENESYS 2.0 Youth Envoy to Japan.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
