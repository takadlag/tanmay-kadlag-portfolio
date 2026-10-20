"use client";

import { useState } from "react";
import { Award, Palette, Music, Languages, Sparkles } from "lucide-react";

interface Limb {
  sanskrit: string;
  english: string;
  meaning: string;
  engineeringParallel: string;
}

export default function InnerSanctum() {
  const [activeLimbIndex, setActiveLimbIndex] = useState(0);

  const limbs: Limb[] = [
    {
      sanskrit: "यम // Yama",
      english: "Ethical Conduct",
      meaning: "Truthfulness, non-harm, and integrity toward all beings.",
      engineeringParallel: "Data Governance, Ethical AI & Transparent Enterprise Systems.",
    },
    {
      sanskrit: "नियम // Niyama",
      english: "Personal Discipline",
      meaning: "Purity of intention, contentment, and relentless self-study (Svadhyaya).",
      engineeringParallel: "Clean Architecture, Rigorous Testing & Continuous Self-Education.",
    },
    {
      sanskrit: "आसन // Asana",
      english: "Physical Equilibrium",
      meaning: "Steady and comfortable posture; stability under intense pressure.",
      engineeringParallel: "Resilient Infrastructure & Ergonomic High-Endurance Execution.",
    },
    {
      sanskrit: "प्राणायाम // Pranayama",
      english: "Breath Mastery",
      meaning: "Regulating the universal life force (Prana) to quiet the nervous system.",
      engineeringParallel: "Optimized High-Throughput Streaming & Dynamic Buffer Regulation.",
    },
    {
      sanskrit: "प्रत्याहार // Pratyahara",
      english: "Sensory Inwardness",
      meaning: "Withdrawing awareness from external distractions and sensory chatter.",
      engineeringParallel: "Noise Filtering, Deep Work Sessions & Hyper-Focused Debugging.",
    },
    {
      sanskrit: "धारणा // Dharana",
      english: "Laser Concentration",
      meaning: "Holding consciousness upon a single focal point without wavering.",
      engineeringParallel: "Targeted Model Tuning, Algorithmic Optimization & Mathematical Rigor.",
    },
    {
      sanskrit: "ध्यान // Dhyana",
      english: "Meditative Absorption",
      meaning: "Unbroken stream of awareness; effortless dissolution of friction.",
      engineeringParallel: "Engineering Flow State & Macro Architectural Intuition.",
    },
    {
      sanskrit: "समाधि // Samadhi",
      english: "Integral Harmony",
      meaning: "Complete transcendence of ego; unity of actor, action, and purpose.",
      engineeringParallel: "Holistic System Convergence & Nishkama Karma (Selfless Craft).",
    },
  ];

  const activeLimb = limbs[activeLimbIndex];

  return (
    <section id="sanctum" className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-serif tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>अन्तःकरण // INNER SANCTUM & ASHTANGA YOGA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Yogic Engine of <span className="sacred-gold-text font-serif italic">Disciplined Mastery</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl font-sans">
            Sparked by Swami Vivekananda&apos;s teachings in Class VIII and forged competitively with VNIT Nagpur&apos;s Yoga Team under Awadhesh Sir. High-velocity systems require absolute inner stillness.
          </p>
        </div>

        {/* Patanjali Sutra Quote */}
        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs font-serif text-amber-800 dark:text-amber-300 max-w-sm">
          <span className="font-bold block text-sm mb-0.5">योगश्चित्तवृत्तिनिरोधः</span>
          <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400">
            &ldquo;Yoga is the stilling of the mind&apos;s fluctuations.&rdquo; — Yoga Sutras 1.2
          </span>
        </div>
      </div>

      {/* Ashtanga 8 Limbs Interactive Arena */}
      <div className="glass rounded-3xl p-6 sm:p-8 border border-amber-500/20 shadow-xl space-y-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider block">
              The 8 Petals of Ashtanga // Click to Inspect Philosophy & Engineering Parallel
            </span>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Selected: Limb {activeLimbIndex + 1} of 8
          </span>
        </div>

        {/* 8 Limbs Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {limbs.map((limb, idx) => {
            const isSelected = activeLimbIndex === idx;
            return (
              <button
                key={limb.sanskrit}
                onClick={() => setActiveLimbIndex(idx)}
                className={`p-3 rounded-2xl text-center transition-all duration-200 border ${
                  isSelected
                    ? "bg-amber-500 text-white dark:text-slate-950 font-bold shadow-lg shadow-amber-500/20 scale-102 border-amber-500"
                    : "glass hover:border-amber-400/40 text-slate-700 dark:text-slate-300"
                }`}
              >
                <span className="font-mono text-[10px] block opacity-70">
                  0{idx + 1}
                </span>
                <span className="font-serif text-xs block mt-1 font-semibold truncate">
                  {limb.sanskrit.split("//")[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Limb Expanded Insight Card */}
        <div className="p-6 rounded-2xl bg-amber-500/5 dark:bg-slate-900/60 border border-amber-500/20 grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-2">
            <span className="font-mono text-xs text-amber-600 dark:text-amber-400 uppercase tracking-widest block font-semibold">
              Yogic Foundation:
            </span>
            <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
              {activeLimb.sanskrit} • {activeLimb.english}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {activeLimb.meaning}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-950/80 border border-amber-500/20 space-y-1.5 shadow-inner">
            <span className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400 uppercase font-bold block">
              ⚡ Digital Parallel in Production ML:
            </span>
            <p className="text-slate-800 dark:text-slate-200 text-sm font-sans font-medium">
              {activeLimb.engineeringParallel}
            </p>
          </div>
        </div>
      </div>

      {/* Creative & Cultural Roots Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Yoga Gold */}
        <div className="glass glass-hover rounded-3xl p-5 border border-slate-200 dark:border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
            VNIT IG Gold Medalist
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            Clinched Gold at VNIT Nagpur Institute Gathering and represented VNIT at the All-India Inter-NIT Yoga Meet (NIT Silchar).
          </p>
        </div>

        {/* Card 2: Sketching */}
        <div className="glass glass-hover rounded-3xl p-5 border border-slate-200 dark:border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
            <Palette className="w-5 h-5" />
          </div>
          <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
            Fine Sketching & Art
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            Capturing sacred temples, natural landscapes, and portraits with patience, geometrical proportion, and deep observation.
          </p>
        </div>

        {/* Card 3: Acoustic Guitar */}
        <div className="glass glass-hover rounded-3xl p-5 border border-slate-200 dark:border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Music className="w-5 h-5" />
          </div>
          <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
            Acoustic Strings
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            Trained in rhythm and melody at JNV Takli Dhokeshwar; performing across campus festivals and regional cultural stages.
          </p>
        </div>

        {/* Card 4: Languages */}
        <div className="glass glass-hover rounded-3xl p-5 border border-slate-200 dark:border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <Languages className="w-5 h-5" />
          </div>
          <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
            Trilingual Communicator
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
            Full professional proficiency in English, paired with native fluency in Marathi and Hindi for seamless multi-cultural collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
