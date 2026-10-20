"use client";

import { useState } from "react";
import { Briefcase, GraduationCap, Globe, Compass } from "lucide-react";
import { TIMELINE_EVENTS } from "../data/portfolioData";

interface LifeOdysseyProps {
  activeCategory?: string;
  onSelectCategory?: (cat: string) => void;
}

export default function LifeOdyssey({
  activeCategory = "all",
  onSelectCategory,
}: LifeOdysseyProps) {
  const [internalCategory, setInternalCategory] = useState<string>("all");
  const currentCategory = onSelectCategory ? activeCategory : internalCategory;
  const setCategory = onSelectCategory || setInternalCategory;

  const filters = [
    { key: "all", label: "Complete Timeline", icon: Compass },
    { key: "deloitte", label: "Professional Engineering (Deloitte)", icon: Briefcase },
    { key: "vnit", label: "University & Competitions (VNIT)", icon: GraduationCap },
    { key: "roots", label: "Formative Roots & Global Envoy", icon: Globe },
  ];

  // Present in reverse chronological order (Deloitte Present -> JNV Roots)
  const orderedEvents = [...TIMELINE_EVENTS].reverse();
  const filteredEvents = orderedEvents.filter(
    (item) => currentCategory === "all" || item.category === currentCategory
  );

  return (
    <section id="experience" className="space-y-10 scroll-mt-28">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PROGRESSION // CHRONICLES OF IMPACT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Experience &amp; <span className="sacred-gold-text font-serif italic">Career Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            Chronological progression from foundational rural discipline through VNIT engineering, international diplomacy in Japan, to industrializing national-scale AI at Deloitte.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl glass border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-900/80">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setCategory(f.key)}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs transition flex items-center gap-1.5 ${
                currentCategory === f.key
                  ? "bg-amber-500 text-white dark:text-slate-950 font-bold shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <f.icon className="w-3.5 h-3.5" />
              <span>{f.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Timeline Stream */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-amber-500/30 dark:border-amber-500/20 space-y-8">
        {filteredEvents.map((event, index) => {
          const isDeloitte = event.category === "deloitte";
          return (
            <div key={event.id} className="relative group">
              {/* Chronological Anchor Marker */}
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-mono text-[10px] font-bold absolute -left-[37px] sm:-left-[53px] top-1 shadow-md transition-colors ${
                  isDeloitte
                    ? "bg-cyan-500 border-cyan-400 text-slate-950 shadow-cyan-500/30 ring-4 ring-cyan-500/20"
                    : "bg-white dark:bg-slate-950 border-amber-500 text-amber-700 dark:text-amber-400"
                }`}
              >
                {index + 1}
              </div>

              {/* Timeline Card */}
              <div
                className={`rounded-3xl p-6 sm:p-8 border shadow-xl transition-all duration-300 space-y-4 ${
                  isDeloitte
                    ? "glass border-cyan-500/30 hover:border-cyan-400/50"
                    : "glass border-slate-200/80 dark:border-white/10 hover:border-amber-500/30"
                }`}
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-3">
                  <span className="font-mono text-xs text-amber-600 dark:text-cyan-400 font-bold tracking-wider uppercase">
                    {event.chapter}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                      isDeloitte
                        ? "bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border-cyan-500/30"
                        : "bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/20"
                    }`}
                  >
                    {event.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                  {event.description}
                </p>

                {/* Technical Highlights / Quantified Evidence */}
                {event.highlights && (
                  <div className="grid sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200 dark:border-white/10">
                    {event.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/5 space-y-1"
                      >
                        <strong className="text-amber-700 dark:text-cyan-400 block font-mono text-xs font-bold">
                          {h.label}
                        </strong>
                        <span className="text-slate-700 dark:text-slate-300 text-xs block leading-relaxed">
                          {h.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
