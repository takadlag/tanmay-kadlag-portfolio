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
      engineeringParallel: "Data Governance, Ethical AI, Privacy Safeguards & Transparent Enterprise Architecture.",
    },
    {
      sanskrit: "नियम // Niyama",
      english: "Personal Discipline",
      meaning: "Purity of intention, contentment, and relentless self-study (Svadhyaya).",
      engineeringParallel: "Clean Modular Code, Automated CI/CD Testing & Continuous Technical Upskilling.",
    },
    {
      sanskrit: "आसन // Asana",
      english: "Physical Equilibrium",
      meaning: "Steady and comfortable posture; composure and stability under sustained pressure.",
      engineeringParallel: "Resilient High-Availability Infrastructure & Endurance for Complex Production Incidents.",
    },
    {
      sanskrit: "प्राणायाम // Pranayama",
      english: "Breath Mastery",
      meaning: "Regulating the universal life-force (Prana) to quiet and synchronize the nervous system.",
      engineeringParallel: "Deterministic High-Throughput Stream Buffering & Dynamic Load Balancing.",
    },
    {
      sanskrit: "प्रत्याहार // Pratyahara",
      english: "Sensory Inwardness",
      meaning: "Withdrawing awareness from external distractions and sensory chatter.",
      engineeringParallel: "Noise Filtering, Deep Work Blocks & Eliminating Telemetry False Positives.",
    },
    {
      sanskrit: "धारणा // Dharana",
      english: "Laser Concentration",
      meaning: "Holding consciousness upon a single focal point without wavering.",
      engineeringParallel: "Single-Threaded Algorithmic Optimization & Deep PySpark Query Profiling.",
    },
    {
      sanskrit: "ध्यान // Dhyana",
      english: "Meditative Absorption",
      meaning: "An unbroken stream of awareness; effortless dissolution of friction.",
      engineeringParallel: "Engineering Flow State & Macro Architectural Intuition.",
    },
    {
      sanskrit: "समाधि // Samadhi",
      english: "Integral Harmony",
      meaning: "Transcendence of ego; pure unity of craftsman, craft, and purpose.",
      engineeringParallel: "Holistic System Convergence & Nishkama Karma (Selfless Craftsmanship).",
    },
  ];

  const activeLimb = limbs[activeLimbIndex];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      setActiveLimbIndex((index + 1) % limbs.length);
    } else if (e.key === "ArrowLeft") {
      setActiveLimbIndex((index - 1 + limbs.length) % limbs.length);
    }
  };

  return (
    <section id="philosophy" className="space-y-10 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FOUNDATIONAL ETHOS // ASHTANGA YOGA &amp; PRANA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Yogic Foundation of <span className="sacred-gold-text font-serif italic">High-Scale Systems</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            Sparked in Class VIII by Swami Vivekananda&apos;s writings and forged with the VNIT Nagpur Yoga Team under Awadhesh Sir. High-velocity systems require absolute inner stillness.
          </p>
        </div>

        {/* Patanjali Yoga Sutra Banner */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs font-serif text-amber-800 dark:text-amber-300 max-w-sm shrink-0">
          <span className="font-bold text-sm block mb-1">योगश्चित्तवृत्तिनिरोधः</span>
          <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400 block">
            &ldquo;Yoga is the intentional stilling of the mind&apos;s modifications.&rdquo; — Yoga Sutras 1.2
          </span>
        </div>
      </div>

      {/* Ashtanga 8 Limbs Interactive Arena */}
      <div className="glass rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-500/20 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-4">
          <div>
            <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
              The Eight Limbs of Ashtanga // Interactive Analogy
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Select or navigate via arrow keys to inspect the spiritual principle and its software engineering parallel:
            </p>
          </div>
          <span className="font-mono text-xs text-slate-500">
            Limb {activeLimbIndex + 1} of 8
          </span>
        </div>

        {/* 8 Limbs Selector Pills (Keyboard Accessible Tabs) */}
        <div
          role="tablist"
          aria-label="Ashtanga Yoga 8 Limbs"
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2"
        >
          {limbs.map((limb, idx) => {
            const isSelected = activeLimbIndex === idx;
            return (
              <button
                key={limb.sanskrit}
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveLimbIndex(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`p-3 rounded-2xl text-center transition-all duration-200 border text-left flex flex-col justify-between ${
                  isSelected
                    ? "bg-amber-500 text-white dark:text-slate-950 font-bold shadow-lg shadow-amber-500/20 scale-102 border-amber-500 ring-2 ring-amber-400/30"
                    : "glass hover:border-amber-400/40 text-slate-700 dark:text-slate-300"
                }`}
              >
                <span className="font-mono text-[10px] block opacity-75">
                  0{idx + 1}
                </span>
                <span className="font-serif text-xs block mt-1 font-semibold truncate">
                  {limb.sanskrit.split("//")[0].trim()}
                </span>
                <span className="font-mono text-[9px] block opacity-60 truncate">
                  {limb.english}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Limb Expanded Card */}
        <div
          role="tabpanel"
          className="p-6 sm:p-8 rounded-2xl bg-amber-500/5 dark:bg-slate-900/60 border border-amber-500/20 grid md:grid-cols-2 gap-6 items-center"
        >
          <div className="space-y-2">
            <span className="font-mono text-xs text-amber-700 dark:text-amber-400 uppercase tracking-widest block font-bold">
              Philosophical Foundation:
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {activeLimb.sanskrit} • {activeLimb.english}
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              {activeLimb.meaning}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-950/80 border border-amber-500/20 space-y-2 shadow-inner">
            <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase font-bold block flex items-center gap-1.5">
              <span>Production Systems &amp; Engineering Analogy:</span>
            </span>
            <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base font-sans font-medium leading-relaxed">
              {activeLimb.engineeringParallel}
            </p>
          </div>
        </div>
      </div>

      {/* Formative Disciplines Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Yoga Gold */}
        <div className="glass glass-hover rounded-3xl p-6 border border-slate-200 dark:border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
            VNIT IG Gold Medalist
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-sans">
            Won Gold at VNIT Nagpur&apos;s Institute Gathering (IG) and represented VNIT among 31 institutes at the 2019 All India Inter-NIT Yoga Tournament (NIT Silchar).
          </p>
        </div>

        {/* Card 2: Sketching */}
        <div className="glass glass-hover rounded-3xl p-6 border border-slate-200 dark:border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
            <Palette className="w-5 h-5" />
          </div>
          <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
            Fine Landscape Art
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-sans">
            Practicing detailed landscape and temple sketching since Navodaya; cultivating observational discipline, proportion, and aesthetic patience.
          </p>
        </div>

        {/* Card 3: Acoustic Guitar */}
        <div className="glass glass-hover rounded-3xl p-6 border border-slate-200 dark:border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Music className="w-5 h-5" />
          </div>
          <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
            Acoustic Strings
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-sans">
            Trained in rhythm and acoustic melody at JNV Takli Dhokeshwar, performing across regional cultural festivals and campus gatherings.
          </p>
        </div>

        {/* Card 4: Languages */}
        <div className="glass glass-hover rounded-3xl p-6 border border-slate-200 dark:border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <Languages className="w-5 h-5" />
          </div>
          <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
            Trilingual Fluency
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-sans">
            Full professional proficiency in English, alongside native fluency in Marathi and Hindi, enabling seamless stakeholder alignment across global regions.
          </p>
        </div>
      </div>
    </section>
  );
}
