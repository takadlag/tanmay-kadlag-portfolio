"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Database,
  Globe2,
  Cpu,
  ChevronRight,
  Award,
  BarChart3,
} from "lucide-react";
import { APAC_MARKETS, MEDALLION_LAYERS } from "../data/portfolioData";

type EngineeringTab = "apac" | "lakehouse" | "cloud";

export default function KarmaEngineering() {
  const [activeTab, setActiveTab] = useState<EngineeringTab>("apac");
  const [selectedMarketKey, setSelectedMarketKey] = useState<string>("ph");
  const [selectedMedallion, setSelectedMedallion] = useState<"bronze" | "silver" | "gold">("bronze");

  const activeMarket =
    APAC_MARKETS.find((m) => m.key === selectedMarketKey) || APAC_MARKETS[0];
  const activeLayer = MEDALLION_LAYERS[selectedMedallion];

  return (
    <section id="karma" className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-cyan-500" />
            <span>कर्म // SCALED ENGINEERING & DATA LAKEHOUSES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Autonomous Pipelines & <span className="gradient-text font-serif italic">APAC Nerve Centre</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl font-sans">
            Architecting high-throughput data platforms, neural replenishment engines, and 2TB+ Delta architectures across 5 national markets.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="inline-flex p-1.5 rounded-2xl glass border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-900/80 shrink-0">
          <button
            onClick={() => setActiveTab("apac")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition flex items-center gap-2 ${
              activeTab === "apac"
                ? "bg-amber-500 text-white dark:text-slate-950 font-bold shadow-md"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>APAC Markets (5)</span>
          </button>
          <button
            onClick={() => setActiveTab("lakehouse")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition flex items-center gap-2 ${
              activeTab === "lakehouse"
                ? "bg-cyan-500 text-white dark:text-slate-950 font-bold shadow-md"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Medallion Lakehouse</span>
          </button>
          <button
            onClick={() => setActiveTab("cloud")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition flex items-center gap-2 ${
              activeTab === "cloud"
                ? "bg-emerald-500 text-white dark:text-slate-950 font-bold shadow-md"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>GCP & Analytics</span>
          </button>
        </div>
      </div>

      {/* Tab 1: APAC Nerve Centre */}
      {activeTab === "apac" && (
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Market Selector Column */}
          <div className="lg:col-span-4 space-y-2">
            <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block px-1">
              Select Market Node:
            </span>
            {APAC_MARKETS.map((m) => {
              const isSelected = m.key === selectedMarketKey;
              return (
                <button
                  key={m.key}
                  onClick={() => setSelectedMarketKey(m.key)}
                  className={`w-full text-left p-3.5 rounded-2xl glass transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? "border-cyan-500 bg-cyan-500/10 shadow-md ring-1 ring-cyan-500/20"
                      : "hover:border-slate-300 dark:hover:border-white/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                        {m.code}
                      </span>
                      <span className="font-display font-bold text-slate-900 dark:text-white text-sm">
                        {m.tabLabel}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                      {m.tabSub}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition ${
                      isSelected ? "text-cyan-600 dark:text-cyan-400 translate-x-1" : "text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Market Details Card */}
          <div className="lg:col-span-8 glass rounded-3xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
              <div>
                <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 font-mono text-[11px]">
                  {activeMarket.badge}
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mt-2">
                  {activeMarket.title}
                </h3>
              </div>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                Deloitte iQ Hub • 2024–2026
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {activeMarket.description}
            </p>

            {/* Impact Metric Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {activeMarket.metrics.map((met, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5"
                >
                  <span className="font-display font-extrabold text-xl text-slate-900 dark:text-white block">
                    {met.val}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                    {met.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Recognition Banner */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs">
              <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-800 dark:text-amber-200 block font-semibold">
                  Client & Leadership Commendation:
                </strong>
                <p className="text-slate-700 dark:text-slate-300 mt-0.5">
                  {activeMarket.recognition}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Medallion Lakehouse Engine */}
      {activeTab === "lakehouse" && (
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 glass rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                DATABRICKS • PYSPARK • DELTA LAKE • AWS S3
              </span>
              <span className="font-mono text-xs text-slate-500">
                119.93B Rev Tracked
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              End-to-End FMCG Post-Merger Data Lakehouse
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Unified disparate raw CSV data from Amazon S3 after a simulated FMCG merger into an ACID-compliant single source of truth on Databricks. Engineered historical backfills and daily incremental loads with <code className="text-cyan-600 dark:text-cyan-300 font-mono">MERGE INTO</code> Change Data Capture (CDC) and natural-language querying via Databricks Genie.
            </p>

            {/* Medallion Layer Selector */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block">
                Select Pipeline Layer to Inspect:
              </span>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {(["bronze", "silver", "gold"] as const).map((key) => {
                  const item = MEDALLION_LAYERS[key];
                  const active = selectedMedallion === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedMedallion(key)}
                      className={`p-3 rounded-2xl text-left transition border ${
                        active
                          ? "bg-cyan-500/10 border-cyan-500 shadow-md ring-1 ring-cyan-500/20"
                          : "glass hover:border-slate-300 dark:hover:border-white/20"
                      }`}
                    >
                      <span className="font-mono text-[10px] text-slate-400 block uppercase">
                        {item.title}
                      </span>
                      <strong className="font-display text-sm text-slate-900 dark:text-white block mt-0.5">
                        {item.subtitle}
                      </strong>
                    </button>
                  );
                })}
              </div>

              {/* Active Layer Details */}
              <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-cyan-600 dark:text-cyan-400">
                  <span className="font-bold">{activeLayer.title} • {activeLayer.subtitle}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-sans text-xs leading-relaxed">
                  {activeLayer.detail}
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden glass border border-slate-200 dark:border-white/10 shadow-2xl group">
              <div className="relative aspect-[4/3] w-full bg-slate-900">
                <Image
                  src="/images/projects/databricks-medallion.jpeg"
                  alt="Databricks Medallion Lakehouse Architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-t border-slate-200 dark:border-white/10">
                <span className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400 block font-semibold">
                  MEDALLION ARCHITECTURE RUNTIME
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                  Automated Delta Lake pipelines running with schema enforcement, partition pruning, and ACID guarantees.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Cloud & Analytics */}
      {activeTab === "cloud" && (
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 glass rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                GCP • BIGQUERY • LOOKER • CLOUD FUNCTIONS
              </span>
              <span className="font-mono text-xs text-slate-500">
                12 KPIs Unified
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Enterprise Cloud Analytics & Governance
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Designed enterprise Google Cloud Platform (GCP) and Looker dashboards providing C-suite visibility into supply chain lead times, distributor service levels, and promotion lift. Combined serverless Cloud Functions with BigQuery partition tables for sub-second analytical aggregations.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-100/60 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5">
                <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold block">
                  BigQuery Partitioning
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Day-partitioned Delta tables reducing query scanning cost by 65%.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-100/60 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5">
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-bold block">
                  Looker Studio Live
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Dynamic parameterized dashboards for real-time distributor visibility.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden glass border border-slate-200 dark:border-white/10 shadow-2xl group">
              <div className="relative aspect-[4/3] w-full bg-slate-900">
                <Image
                  src="/images/projects/gcp-looker-dashboard.png"
                  alt="GCP Looker Dashboard"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-t border-slate-200 dark:border-white/10">
                <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 block font-semibold">
                  PRODUCTION GOVERNANCE CONSOLE
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                  End-to-end monitoring of distributor stock levels, SKU velocity, and prediction variance.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
