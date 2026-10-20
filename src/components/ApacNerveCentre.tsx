"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { APAC_MARKETS } from "../data/portfolioData";

export default function ApacNerveCentre() {
  const [selectedKey, setSelectedKey] = useState<string>("ph");
  const activeMarket =
    APAC_MARKETS.find((m) => m.key === selectedKey) || APAC_MARKETS[0];

  return (
    <section id="nerve-centre" className="space-y-8">
      <div>
        <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
          ENTERPRISE FMCG IMPACT // 2024–2026
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-1">
          The iQ Innovation Nerve Centre
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Select an Asia-Pacific market node to inspect the ML architecture,
          statistical transformation, and production outcomes.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-4 space-y-2.5">
          {APAC_MARKETS.map((m) => {
            const isSelected = m.key === selectedKey;
            return (
              <button
                key={m.key}
                onClick={() => setSelectedKey(m.key)}
                className={`w-full text-left p-4 rounded-xl glass transition flex items-center justify-between ${
                  isSelected
                    ? "border-cyan-400 bg-cyan-500/10"
                    : "hover:border-white/20"
                }`}
              >
                <div>
                  <span className={`font-mono text-xs block ${m.tabSub}`}>
                    {m.code}
                  </span>
                  <span className="font-display font-bold text-white text-base">
                    {m.tabLabel}
                  </span>
                </div>
                <ChevronRight
                  className={`w-5 h-5 ${
                    isSelected ? "text-cyan-400" : "text-slate-400"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-8 glass rounded-2xl p-6 sm:p-8 border border-cyan-500/30 cyber-glow min-h-[340px] flex flex-col justify-between">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 inline-block">
              {activeMarket.badge}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {activeMarket.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {activeMarket.description}
            </p>
            <div className="grid sm:grid-cols-3 gap-3 pt-4">
              {activeMarket.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-white/10"
                >
                  <span className="font-mono text-[11px] text-slate-400 uppercase block">
                    {metric.label}
                  </span>
                  <span className="font-display text-lg font-bold text-cyan-400 mt-0.5 block">
                    {metric.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-emerald-300">
            ★ IMPACT VERIFIED: {activeMarket.recognition}
          </div>
        </div>
      </div>
    </section>
  );
}
