"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Maximize2, X, Image as ImageIcon } from "lucide-react";
import { ARTIFACT_GALLERY, ArtifactItem } from "../data/portfolioData";

export default function ArtifactGallery() {
  const [filter, setFilter] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<ArtifactItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null);
    };
    if (activeItem) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [activeItem]);

  const tabs = [
    { key: "all", label: `All Artifacts (${ARTIFACT_GALLERY.length})` },
    { key: "awards", label: "Unilever & Deloitte Awards" },
    { key: "certs", label: "Accredited Certifications" },
    { key: "architecture", label: "System Dashboards" },
    { key: "journey", label: "Japan, VNIT & Yoga Journey" },
  ];

  const items = ARTIFACT_GALLERY.filter(
    (a) => filter === "all" || a.category === filter
  );

  return (
    <section id="gallery" className="space-y-8 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-mono">
            <ImageIcon className="w-3.5 h-3.5 text-cyan-500" />
            <span>चित्र वीथिका // VISUAL EVIDENCE & CERTIFICATE VAULT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Original Certifications & <span className="gradient-text font-serif italic">Photo Artifacts</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl font-sans">
            Direct high-resolution documentation of honors, international delegations, architectural diagrams, and yoga competitions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl glass border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-900/80">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setFilter(t.key)}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs transition ${
                filter === t.key
                  ? "bg-cyan-500 text-white dark:text-slate-950 font-bold shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Clean Artifact Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((artifact) => (
          <div
            key={artifact.id}
            onClick={() => setActiveItem(artifact)}
            className="group glass glass-hover rounded-3xl overflow-hidden cursor-pointer border border-slate-200 dark:border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
              <Image
                src={artifact.image}
                alt={artifact.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/20 text-white backdrop-blur-md">
                  <Maximize2 className="w-3.5 h-3.5" /> Tap to Inspect
                </span>
              </div>
            </div>

            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                  {artifact.badge}
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-cyan-400 transition">
                {artifact.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2">
                {artifact.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* High-Res Modal Lightbox */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full glass rounded-3xl overflow-hidden border border-amber-500/30 p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
              <div>
                <span className="font-mono text-xs text-amber-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
                  {activeItem.badge}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-2 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full max-h-[65vh] rounded-2xl overflow-hidden bg-slate-950">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-sans">
              {activeItem.subtitle}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
