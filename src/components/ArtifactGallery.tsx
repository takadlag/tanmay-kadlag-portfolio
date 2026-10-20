"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
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
    { key: "certs", label: "Stanford, Azure & Databricks Certs" },
    { key: "architecture", label: "Lakehouse & GCP Dashboards" },
    { key: "journey", label: "JNV, Japan, VNIT & Yoga Photos" },
  ];

  const items = ARTIFACT_GALLERY.filter(
    (a) => filter === "all" || a.category === filter
  );

  return (
    <section id="vault-gallery" className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
            VERIFIED VISUAL EVIDENCE // CLICK ANY ARTIFACT TO INSPECT
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-1">
            Visual Vault: Awards, Dashboards & Life Collages
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setFilter(t.key)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition ${
                filter === t.key
                  ? "bg-cyan-500 text-slate-950 font-semibold"
                  : "glass text-slate-300 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="glass glass-hover rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between transition duration-300"
          >
            <div className="relative h-52 bg-slate-900 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono bg-slate-950/80 text-cyan-300 border border-cyan-500/30">
                {item.badge}
              </span>
              <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-950/80 text-white opacity-0 group-hover:opacity-100 transition">
                <Maximize2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-display font-bold text-white text-base group-hover:text-cyan-400 transition">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="glass max-w-4xl w-full rounded-2xl overflow-hidden border border-cyan-500/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div>
                <span className="font-mono text-xs text-cyan-400">
                  {activeItem.badge}
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-2 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-slate-950 flex justify-center max-h-[75vh] overflow-auto">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                width={1200}
                height={800}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
                priority
              />
            </div>
            <div className="px-6 py-3 bg-slate-900/90 text-xs text-slate-300">
              {activeItem.subtitle}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
