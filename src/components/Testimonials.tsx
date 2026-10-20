"use client";

import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/portfolioData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="space-y-8">
      <div>
        <p className="font-mono text-xs text-amber-400 uppercase tracking-widest">
          VOICES OF TRUST // PEER &amp; CLIENT RECOGNITION
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-1">
          What Leaders &amp; Colleagues Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className={`glass rounded-2xl p-6 border ${t.color} relative overflow-hidden group hover:border-opacity-70 glass-hover transition duration-300`}
          >
            <Quote className="w-10 h-10 text-white/[0.06] absolute top-4 right-4 group-hover:text-white/[0.12] transition" />

            <p className="text-slate-200 text-sm leading-relaxed italic relative z-10">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="font-display font-bold text-white text-sm">
                {t.name}
              </p>
              <p className="font-mono text-[11px] text-slate-400 mt-0.5">
                {t.role} &bull; {t.org}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
