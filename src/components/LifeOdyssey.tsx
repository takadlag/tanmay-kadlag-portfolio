"use client";

import { Compass } from "lucide-react";
import { TIMELINE_EVENTS } from "../data/portfolioData";

interface LifeOdysseyProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export default function LifeOdyssey({
  activeCategory,
  onSelectCategory,
}: LifeOdysseyProps) {
  const filters = [
    { key: "all", label: "All Adhyayas (अध्याय)" },
    { key: "roots", label: "Origins • JNV" },
    { key: "vnit", label: "VNIT • Yoga Gold" },
    { key: "deloitte", label: "Deloitte • AI Karma" },
  ];

  const filteredEvents = TIMELINE_EVENTS.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="odyssey" className="space-y-8 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-serif tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>जीवन यात्रा // THE SACRED ODYSSEY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            From Navodaya Roots to <span className="sacred-gold-text font-serif italic">Global Envoy</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl font-sans">
            The formative chapters that sculpted Tanmay&apos;s ethos: rural self-reliance, academic excellence, competitive yogic mastery, and enterprise engineering leadership.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl glass border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-900/80">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => onSelectCategory(f.key)}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs transition ${
                activeCategory === f.key
                  ? "bg-amber-500 text-white dark:text-slate-950 font-bold shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clean Timeline Stream */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-amber-500/30 dark:border-amber-500/20 space-y-8">
        {filteredEvents.map((event, index) => (
          <div key={event.id} className="relative group">
            {/* Sacred Node Marker */}
            <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-2 border-amber-500 text-amber-600 dark:text-amber-400 flex items-center justify-center font-serif text-[10px] font-bold absolute -left-[37px] sm:-left-[53px] top-1 shadow-md">
              {index + 1}
            </div>

            {/* Chapter Card */}
            <div className="glass glass-hover rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 shadow-lg space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-3">
                <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase">
                  {event.chapter}
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
                  {event.badge}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {event.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                {event.description}
              </p>

              {event.highlights && (
                <div className="grid sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200 dark:border-white/10">
                  {event.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/60 dark:border-white/5"
                    >
                      <strong className="text-amber-600 dark:text-cyan-400 block font-mono text-xs mb-1">
                        {h.label}
                      </strong>
                      <span className="text-slate-700 dark:text-slate-300 text-xs">
                        {h.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
