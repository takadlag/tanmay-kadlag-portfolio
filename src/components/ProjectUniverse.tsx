"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Database,
  Globe2,
  Cpu,
  CheckCircle2,
  Maximize2,
  X,
  Workflow,
} from "lucide-react";
import {
  FLAGSHIP_PROJECTS,
  FlagshipProject,
  APAC_MARKETS,
  MEDALLION_LAYERS,
} from "../data/portfolioData";

export default function ProjectUniverse() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("medallion-lakehouse");
  const [selectedMedallionStage, setSelectedMedallionStage] = useState<"bronze" | "silver" | "gold">("silver");
  const [selectedMarketKey, setSelectedMarketKey] = useState<string>("ph");
  const [modalProject, setModalProject] = useState<FlagshipProject | null>(null);

  const activeProject =
    FLAGSHIP_PROJECTS.find((p) => p.id === selectedProjectId) || FLAGSHIP_PROJECTS[0];
  const activeMarket =
    APAC_MARKETS.find((m) => m.key === selectedMarketKey) || APAC_MARKETS[0];
  const activeMedallion = MEDALLION_LAYERS[selectedMedallionStage];

  return (
    <section id="projects" className="space-y-10 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-medium">
            <Workflow className="w-3.5 h-3.5 text-cyan-500" />
            <span>FEATURED ENGINEERING PORTFOLIO // FLAGSHIP CASE STUDIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Production Data Systems &amp; <span className="gradient-text font-serif italic">AI Architecture</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            Engineered enterprise lakehouses, distributed streaming pipelines, and neural demand forecasting models deployed across national-scale operations.
          </p>
        </div>

        {/* 3 Flagship Project Selector Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl glass border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-900/80 shrink-0">
          {FLAGSHIP_PROJECTS.map((proj) => {
            const isSelected = selectedProjectId === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? "bg-amber-500 text-white dark:text-slate-950 shadow-md ring-1 ring-amber-500/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
                aria-pressed={isSelected}
              >
                {proj.id === "medallion-lakehouse" && <Database className="w-3.5 h-3.5" />}
                {proj.id === "apac-nerve-centre" && <Globe2 className="w-3.5 h-3.5" />}
                {proj.id === "soq-optimization" && <Cpu className="w-3.5 h-3.5" />}
                <span>{proj.title.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Flagship Project Case Study Hub */}
      <div className="glass rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 dark:border-white/10 shadow-2xl space-y-8">
        {/* Project Header Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200 dark:border-white/10 pb-6">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
              {activeProject.tag}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {activeProject.title}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {activeProject.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setModalProject(activeProject)}
              className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold glass glass-hover border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 flex items-center gap-2"
              aria-label={`Open detailed architecture blueprint for ${activeProject.title}`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Inspect Architecture Blueprint</span>
            </button>
          </div>
        </div>

        {/* Narrative Grid: Problem & Role */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="p-5 rounded-2xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
              <span>The Problem &amp; Business Objective</span>
            </span>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-sans">
              {activeProject.problem}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <span>My Role &amp; Engineering Scope</span>
            </span>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-sans">
              {activeProject.role}
            </p>
          </div>
        </div>

        {/* Dynamic Interactive Stage: Medallion Architecture Flow or APAC Market Matrix */}
        {activeProject.id === "medallion-lakehouse" && (
          <div className="p-6 rounded-3xl bg-slate-950 text-white border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest block font-semibold">
                  INTERACTIVE DATA-FLOW ARCHITECTURE
                </span>
                <h4 className="font-display font-bold text-lg text-white mt-0.5">
                  Bronze → Silver → Gold Pipeline Runtime
                </h4>
              </div>
              <span className="font-mono text-xs text-slate-400">
                Click any layer to inspect transformation mechanics:
              </span>
            </div>

            {/* Visual Animated Pipeline Stream */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Bronze Card */}
              <div
                onClick={() => setSelectedMedallionStage("bronze")}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border text-left space-y-3 ${
                  selectedMedallionStage === "bronze"
                    ? "bg-amber-500/20 border-amber-400 ring-2 ring-amber-400/30"
                    : "bg-slate-900 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    STAGE 01 • INGEST
                  </span>
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-base text-white">01. Bronze Layer</h5>
                  <p className="text-xs text-slate-400 mt-1 font-mono">Raw S3 Landing Zone</p>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Appends raw CSV records directly from Amazon S3. Preserves exact historical audit trail and ingestion timestamps.
                </p>
              </div>

              {/* Silver Card */}
              <div
                onClick={() => setSelectedMedallionStage("silver")}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border text-left space-y-3 ${
                  selectedMedallionStage === "silver"
                    ? "bg-cyan-500/20 border-cyan-400 ring-2 ring-cyan-400/30"
                    : "bg-slate-900 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    STAGE 02 • VALIDATE &amp; CDC
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-base text-white">02. Silver Layer</h5>
                  <p className="text-xs text-slate-400 mt-1 font-mono">Cleaned Delta &amp; MERGE INTO</p>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Applies schema enforcement, deduplication, type casting, and Change Data Capture (CDC) upserts with zero data corruption.
                </p>
              </div>

              {/* Gold Card */}
              <div
                onClick={() => setSelectedMedallionStage("gold")}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border text-left space-y-3 ${
                  selectedMedallionStage === "gold"
                    ? "bg-emerald-500/20 border-emerald-400 ring-2 ring-emerald-400/30"
                    : "bg-slate-900 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    STAGE 03 • STAR SCHEMA
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-base text-white">03. Gold Layer</h5>
                  <p className="text-xs text-slate-400 mt-1 font-mono">Databricks SQL &amp; Genie AI</p>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Models business-level Fact and Dimension tables powering 119.93B revenue tracking and natural-language Genie queries.
                </p>
              </div>
            </div>

            {/* Active Stage Technical Detail Inspector */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 font-mono text-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-cyan-400 font-bold block">
                  Active Inspector: {activeMedallion.title} ({activeMedallion.subtitle})
                </span>
                <p className="text-slate-300 font-sans text-xs">{activeMedallion.detail}</p>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-white/5 text-amber-300 border border-white/10 shrink-0">
                PySpark • Delta Lake
              </span>
            </div>
          </div>
        )}

        {/* APAC Multi-Market Explorer (Active when Project 2 is selected) */}
        {activeProject.id === "apac-nerve-centre" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                APAC Market Nodes // Select to Inspect Algorithm &amp; Outcomes
              </span>
              <span className="font-mono text-[11px] text-amber-600 dark:text-amber-400 font-semibold">
                5 Markets Industrialized
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {APAC_MARKETS.map((m) => {
                const isSelected = selectedMarketKey === m.key;
                return (
                  <button
                    key={m.key}
                    onClick={() => setSelectedMarketKey(m.key)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      isSelected
                        ? "bg-cyan-500/10 border-cyan-500 shadow-md ring-1 ring-cyan-500/20"
                        : "glass hover:border-slate-300 dark:hover:border-white/20"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-cyan-600 dark:text-cyan-400 font-bold block">
                      {m.code.split("//")[0].trim()}
                    </span>
                    <strong className="font-display text-xs text-slate-900 dark:text-white block mt-0.5 truncate">
                      {m.tabLabel.split("—")[0].trim()}
                    </strong>
                  </button>
                );
              })}
            </div>

            {/* Selected Market Mini-Console */}
            <div className="p-5 rounded-2xl glass border border-cyan-500/20 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                  {activeMarket.title}
                </h4>
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                  {activeMarket.badge}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                {activeMarket.description}
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                {activeMarket.metrics.map((met, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
                    <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 block">{met.val}</span>
                    <span className="font-mono text-[10px] text-slate-500 block">{met.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quantified Verified Results Grid */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            Verified Quantitative Outcomes &amp; Engineering Impact
          </span>
          <div className="grid sm:grid-cols-3 gap-4">
            {activeProject.results.map((res, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl glass border border-slate-200/80 dark:border-white/10 space-y-1"
              >
                <span className="font-display font-extrabold text-2xl text-slate-900 dark:text-white block">
                  {res.value}
                </span>
                <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 block">
                  {res.label}
                </span>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-snug">
                  {res.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Decisions & Technologies */}
        <div className="grid md:grid-cols-12 gap-6 pt-2 border-t border-slate-200 dark:border-white/10">
          <div className="md:col-span-8 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              Architectural Tradeoffs &amp; Engineering Decisions
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {activeProject.decisions.map((dec, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{dec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              Technologies Utilized
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeProject.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Architectural Blueprint Inspection Modal */}
      {modalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 modal-backdrop flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setModalProject(null)}
        >
          <div
            className="relative max-w-5xl w-full glass rounded-3xl overflow-hidden border border-cyan-500/30 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
                  {modalProject.tag}
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {modalProject.title} — Architecture Blueprint
                </h3>
              </div>
              <button
                onClick={() => setModalProject(null)}
                className="p-2.5 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white transition"
                aria-label="Close architecture modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Primary Blueprint Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              <Image
                src={modalProject.primaryImage}
                alt={modalProject.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-sans">
              {modalProject.imageCaption}
            </p>

            {modalProject.secondaryImage && (
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/10">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block">
                  Production Telemetry / Supporting Screenshot
                </span>
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src={modalProject.secondaryImage}
                    alt="Supporting Telemetry Dashboard"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
