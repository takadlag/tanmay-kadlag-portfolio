"use client";

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
    { key: "all", label: "All Chapters" },
    { key: "roots", label: "Origins & JNV" },
    { key: "vnit", label: "VNIT & Yoga" },
    { key: "deloitte", label: "Deloitte & AI" },
  ];

  const filteredEvents = TIMELINE_EVENTS.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="odyssey" className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-amber-400 uppercase tracking-widest">
            CHRONICLES OF TRANSFORMATION
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-1">
            The Life Odyssey: Sangamner to Global AI
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => onSelectCategory(f.key)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition ${
                activeCategory === f.key
                  ? "bg-cyan-500 text-slate-950 font-semibold"
                  : "glass text-slate-300 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 space-y-10">
        {filteredEvents.map((event) => (
          <div key={event.id} className="relative group">
            <div
              className={`w-4 h-4 rounded-full ${event.dotColor} border-4 border-slate-950 absolute -left-[33px] sm:-left-[49px] top-1.5`}
            />
            <div className="glass glass-hover rounded-2xl p-6 transition duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs text-cyan-300 uppercase">
                  {event.chapter}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 text-slate-200 border border-white/10">
                  {event.badge}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                {event.title}
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                {event.description}
              </p>

              {event.highlights && (
                <div className="grid sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10 text-xs">
                  {event.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="bg-white/[0.02] p-3 rounded-lg"
                    >
                      <strong className={`${h.color} block font-mono mb-1`}>
                        {h.label}
                      </strong>
                      <span className="text-slate-300">{h.text}</span>
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
