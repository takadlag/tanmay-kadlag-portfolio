"use client";

import { Quote, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "../data/portfolioData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="space-y-8 scroll-mt-24">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-white/10 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-serif tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>संवाद & विश्वास // VOICES OF LEADERSHIP & PEERS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Client & Team <span className="sacred-gold-text font-serif italic">Testimonials</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl font-sans">
          Firsthand endorsements from Deloitte engineering managers, project directors, and team collaborators.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="glass glass-hover rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 shadow-lg relative overflow-hidden flex flex-col justify-between space-y-6"
          >
            <Quote className="w-10 h-10 text-amber-500/15 dark:text-white/[0.06] absolute top-4 right-4 pointer-events-none" />

            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic relative z-10 font-sans">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
              <p className="font-display font-bold text-slate-900 dark:text-white text-sm">
                {t.name}
              </p>
              <p className="font-mono text-[11px] text-amber-700 dark:text-cyan-400 mt-0.5">
                {t.role} &bull; {t.org}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
