"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, GraduationCap, Globe, Compass, Maximize2, X } from "lucide-react";
import { TIMELINE_EVENTS, TimelineEvent } from "../data/portfolioData";

interface LifeOdysseyProps {
  activeCategory?: string;
  onSelectCategory?: (cat: string) => void;
}

export default function LifeOdyssey({
  activeCategory = "all",
  onSelectCategory,
}: LifeOdysseyProps) {
  const [internalCategory, setInternalCategory] = useState<string>("all");
  const [lightboxEvent, setLightboxEvent] = useState<TimelineEvent | null>(null);

  const currentCategory = onSelectCategory ? activeCategory : internalCategory;
  const setCategory = onSelectCategory || setInternalCategory;

  const filters = [
    { key: "all", label: "Complete Odyssey", icon: Compass },
    { key: "deloitte", label: "Deloitte Engineering", icon: Briefcase },
    { key: "vnit", label: "VNIT & Competitions", icon: GraduationCap },
    { key: "roots", label: "Roots & Global Envoy", icon: Globe },
  ];

  // Reverse chronological: Chapter 05 (Present) down to Chapter 01 (Roots)
  const orderedEvents = [...TIMELINE_EVENTS].reverse();
  const filteredEvents = orderedEvents.filter(
    (item) => currentCategory === "all" || item.category === currentCategory
  );

  return (
    <section id="experience" className="space-y-8 scroll-mt-28">
      {/* Section Header — full-width, never compressed */}
      <div className="border-b border-slate-200 dark:border-white/10 pb-6 space-y-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PROGRESSION // CHRONICLES OF IMPACT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Milestones &amp; <span className="sacred-gold-text font-serif italic">Visual Odyssey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl font-sans leading-relaxed">
            A documentary progression from foundational rural discipline through VNIT engineering, international diplomacy in Japan, to industrializing national-scale AI at Deloitte.
          </p>
        </div>

        {/* Filter Pills — below heading, full-width, wraps naturally */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setCategory(f.key)}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all duration-200 flex items-center gap-2 border ${
                currentCategory === f.key
                  ? "bg-amber-500 text-white dark:text-slate-950 font-bold shadow-md border-amber-500"
                  : "glass text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-amber-400/40 border-slate-200 dark:border-white/10"
              }`}
            >
              <f.icon className="w-3.5 h-3.5" />
              <span>{f.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Timeline Stream with Contextual Photographs */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-amber-500/30 dark:border-amber-500/20 space-y-10">
        {filteredEvents.map((event, index) => {
          const isDeloitte = event.category === "deloitte";
          const hasImage = Boolean(event.image);

          return (
            <div key={event.id} className="relative group">
              {/* Chronological Anchor Marker */}
              <div
                className={`w-7 h-7 rounded-full border-2 flex items-center justify-center font-mono text-[11px] font-bold absolute -left-[39px] sm:-left-[55px] top-2 shadow-md transition-colors ${
                  isDeloitte
                    ? "bg-cyan-500 border-cyan-400 text-slate-950 shadow-cyan-500/30 ring-4 ring-cyan-500/20"
                    : "bg-white dark:bg-slate-950 border-amber-500 text-amber-700 dark:text-amber-400 ring-4 ring-amber-500/10"
                }`}
              >
                0{filteredEvents.length - index}
              </div>

              {/* Timeline Card */}
              <div
                className={`rounded-3xl border shadow-xl transition-all duration-300 overflow-hidden ${
                  isDeloitte
                    ? "glass border-cyan-500/30 hover:border-cyan-400/50"
                    : "glass border-slate-200/80 dark:border-white/10 hover:border-amber-500/30"
                }`}
              >
                {/* Meta Header */}
                <div className="p-5 sm:p-6 pb-3 border-b border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
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

                {/* Editorial Body: Story & Photographic Artifact */}
                <div className="p-5 sm:p-6 space-y-5">
                  <div className={`grid gap-6 items-start ${hasImage ? "lg:grid-cols-12" : "grid-cols-1"}`}>
                    {/* Narrative Column */}
                    <div className={`space-y-4 ${hasImage ? "lg:col-span-7" : "col-span-1"}`}>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                        {event.description}
                      </p>

                      {/* Technical Highlights / Quantified Evidence */}
                      {event.highlights && (
                        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 pt-2">
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

                    {/* Integrated Photo Column */}
                    {hasImage && event.image && (
                      <div className="lg:col-span-5 space-y-2">
                        <div
                          onClick={() => setLightboxEvent(event)}
                          className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-white/10 group/img cursor-pointer shadow-lg"
                        >
                          <Image
                            src={event.image}
                            alt={event.imageCaption || event.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover group-hover/img:scale-105 transition duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/20 text-white backdrop-blur-md">
                              <Maximize2 className="w-3.5 h-3.5" /> Expand Photo
                            </span>
                            {event.imageBadge && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500 text-slate-950 font-bold">
                                {event.imageBadge}
                              </span>
                            )}
                          </div>
                        </div>

                        {event.imageCaption && (
                          <p className="text-slate-500 dark:text-slate-400 text-xs italic font-serif leading-relaxed px-1">
                            {event.imageCaption}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Timeline Photo Lightbox Modal */}
      {lightboxEvent && lightboxEvent.image && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 modal-backdrop flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxEvent(null)}
        >
          <div
            className="relative max-w-4xl w-full glass rounded-3xl overflow-hidden border border-amber-500/30 p-6 sm:p-8 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
              <div>
                <span className="font-mono text-xs text-amber-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
                  {lightboxEvent.chapter}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {lightboxEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxEvent(null)}
                className="p-2.5 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white transition"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full max-h-[65vh] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
              <Image
                src={lightboxEvent.image}
                alt={lightboxEvent.imageCaption || lightboxEvent.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-sans">
              {lightboxEvent.imageCaption || lightboxEvent.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
