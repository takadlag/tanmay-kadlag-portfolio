"use client";

import { useState } from "react";
import { MEDALLION_LAYERS } from "../data/portfolioData";

export default function ArchitectureLabs() {
  const [layer, setLayer] = useState<"bronze" | "silver" | "gold">("bronze");

  return (
    <section id="architecture" className="space-y-8">
      <div>
        <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
          DEEP-DIVE ENGINEERING CASE STUDIES
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-1">
          Cloud & Medallion Architecture Blueprints
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
                DATABRICKS • PYSPARK • DELTA LAKE • AWS S3
              </span>
              <span className="font-mono text-xs text-slate-400">
                119.93B Rev Tracked
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              End-to-End FMCG Post-Merger Data Lakehouse
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Unified disparate raw CSV data from Amazon S3 after a simulated
              FMCG merger into a single ACID-compliant source of truth on
              Databricks. Engineered historical backfills and daily incremental
              loads with <code className="text-cyan-300 font-mono">MERGE INTO</code>{" "}
              Change Data Capture (CDC) logic and integrated{" "}
              <strong className="text-white">Databricks Genie</strong> for
              natural-language stakeholder queries.
            </p>

            <div className="pt-2">
              <p className="font-mono text-[11px] text-slate-400 uppercase mb-2">
                Click Layer to Inspect Pipeline Stage:
              </p>
              <div className="grid grid-cols-3 gap-2">
                {(["bronze", "silver", "gold"] as const).map((key) => {
                  const item = MEDALLION_LAYERS[key];
                  const active = layer === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setLayer(key)}
                      className={`p-2.5 rounded-lg text-left transition border ${
                        active
                          ? "bg-cyan-500/20 border-cyan-400"
                          : "bg-slate-800/60 border-white/10"
                      }`}
                    >
                      <span className="font-mono text-xs text-white font-bold block">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {item.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-3 p-3.5 rounded-xl bg-slate-950/90 border border-white/10 font-mono text-xs text-slate-300">
                {MEDALLION_LAYERS[layer].detail}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center font-mono text-xs">
            <div className="p-2 rounded bg-white/[0.02]">
              <span className="text-cyan-400 font-bold block">ACID + CDC</span>
              <span className="text-[10px] text-slate-400">MERGE INTO Upserts</span>
            </div>
            <div className="p-2 rounded bg-white/[0.02]">
              <span className="text-emerald-400 font-bold block">STAR SCHEMA</span>
              <span className="text-[10px] text-slate-400">Fact & Dim Gold</span>
            </div>
            <div className="p-2 rounded bg-white/[0.02]">
              <span className="text-amber-400 font-bold block">GENIE AI</span>
              <span className="text-[10px] text-slate-400">NL Self-Service BI</span>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                GCP • BIGQUERY • SQL • LOOKER STUDIO
              </span>
              <span className="font-mono text-xs text-slate-400">
                5,000+ Students Analyzed
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              Cloud-Native Student Placement ELT Pipeline
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Architected an end-to-end Google Cloud ELT pipeline ingesting raw
              demographic and placement CSVs into Cloud Storage, transforming via{" "}
              <strong className="text-white">BigQuery</strong> materialized views
              (<code className="text-cyan-300 font-mono">placement_dataset.final_df</code>
              ), and powering a live cross-filtered{" "}
              <strong className="text-white">Looker Studio Data Canvas</strong>.
            </p>

            <div className="p-4 rounded-xl bg-slate-950/90 border border-white/10 space-y-3">
              <p className="font-mono text-xs text-emerald-400 uppercase font-semibold">
                Key Statistical Discoveries Surfacing from BigQuery:
              </p>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between font-mono mb-1">
                    <span className="text-slate-300">
                      Zero Backlogs Placement Probability
                    </span>
                    <span className="text-emerald-400 font-bold">94.0%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-400 h-full rounded-full"
                      style={{ width: "94%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-mono mb-1">
                    <span className="text-slate-300">
                      ≥1 Active Backlog (&ldquo;The Backlog Cliff Effect&rdquo;)
                    </span>
                    <span className="text-rose-400 font-bold">
                      73.0% (-21% Drop)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="bg-rose-500 h-full rounded-full"
                      style={{ width: "73%" }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 pt-1">
                💡 <strong className="text-white">Internship Multiplier:</strong>{" "}
                Proved internship experience has a{" "}
                <strong className="text-cyan-300">
                  2x stronger statistical correlation
                </strong>{" "}
                with high packages (&gt;15 LPA; ₹16.15L placed average) than CGPA
                alone.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center font-mono text-xs">
            <div className="p-2 rounded bg-white/[0.02]">
              <span className="text-cyan-400 font-bold block">86.06%</span>
              <span className="text-[10px] text-slate-400">Overall Placement</span>
            </div>
            <div className="p-2 rounded bg-white/[0.02]">
              <span className="text-emerald-400 font-bold block">₹16.15 LPA</span>
              <span className="text-[10px] text-slate-400">Avg Placed Salary</span>
            </div>
            <div className="p-2 rounded bg-white/[0.02]">
              <span className="text-amber-400 font-bold block">2.0x</span>
              <span className="text-[10px] text-slate-400">Internship vs CGPA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
