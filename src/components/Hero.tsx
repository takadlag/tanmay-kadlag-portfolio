import Image from "next/image";
import { Compass, Globe, Download, Database, Flame } from "lucide-react";
import { PROFILE_DATA } from "../data/portfolioData";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-4">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            DELOITTE iQ INNOVATION TEAM • PUNE, INDIA
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            From <span className="gradient-text">Mindful Discipline</span> to
            National-Scale <span className="gradient-text">ML Pipelines.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            I&apos;m <strong className="text-white">{PROFILE_DATA.name}</strong> — a
            Machine Learning & Big Data Engineer at{" "}
            <strong className="text-emerald-400">Deloitte</strong>,{" "}
            <strong className="text-amber-400">VNIT Nagpur &apos;22</strong> alumnus,{" "}
            <strong className="text-cyan-400">JENESYS 2.0 India Envoy to Japan</strong>
            , and competitive Yogi. I architect 2TB+ Medallion Lakehouses and
            neural forecasting engines that turn 500M+ monthly FMCG records into
            autonomous operational actions.
          </p>

          <div className="glass rounded-xl p-3.5 border border-white/10 font-mono text-xs text-slate-300 flex flex-wrap items-center gap-y-2 gap-x-4">
            <span className="text-cyan-400 font-semibold">$ status --current</span>
            <span>
              ⚡ Leading <strong className="text-white">BD SOQ Optimization</strong> &{" "}
              <strong className="text-white">iQ Nerve Centre</strong>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-amber-300">
              🧘‍♂️ Equilibrium: Yoga, Guitar & Sketching
            </span>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/docs/Tanmay_Kadlag_ML_Engineer.pdf"
              download
              className="px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 hover:brightness-110 transition flex items-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" /> Download ML Resume (PDF)
            </a>
            <a
              href="/docs/Tanmay_Kadlag_BigData_Engineer.pdf"
              download
              className="px-4 py-3 rounded-xl font-semibold text-sm glass hover:border-cyan-400/50 text-white transition flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-cyan-400" /> Big Data CV
            </a>
            <a
              href="#vault-gallery"
              className="px-4 py-3 rounded-xl font-semibold text-sm glass hover:border-amber-400/50 text-amber-300 transition flex items-center gap-2"
            >
              <Compass className="w-4 h-4" /> View Photos & Certificates
            </a>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl font-mono text-xs glass hover:border-cyan-400/50 text-slate-200 transition flex items-center gap-2"
            >
              <Globe className="w-4 h-4 text-cyan-400" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="glass rounded-2xl p-6 border border-cyan-500/20 cyber-glow relative overflow-hidden">
            <div className="flex items-center gap-4 border-b border-white/10 pb-5 mb-5">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-500/20 shrink-0 bg-slate-900">
                <Image
                  src="/prof.jpg"
                  alt="Tanmay Ramrao Kadlag"
                  fill
                  sizes="80px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 font-mono text-[10px] text-emerald-300">
                  VERIFIED PROFILE // 2026
                </span>
                <h2 className="font-display text-xl font-bold text-white mt-1">
                  Tanmay Ramrao Kadlag
                </h2>
                <p className="font-mono text-xs text-slate-400">
                  ML & Big Data Engineer @ Deloitte
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-cyan-300 font-semibold flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" /> ENGINE 01 // BIG DATA & MLOPS
                  </span>
                  <span className="font-mono text-emerald-400">4+ Yrs @ Deloitte</span>
                </div>
                <p className="text-slate-400">
                  PySpark • Scala • Python • Databricks • ADF • Delta Lake • BigQuery
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/20">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-amber-300 font-semibold flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5" /> ENGINE 02 // MINDFULNESS & ETHOS
                  </span>
                  <span className="font-mono text-amber-400">JNV • Japan • VNIT</span>
                </div>
                <p className="text-slate-400">
                  JNV 97% Topper • JENESYS 2.0 Envoy • Inter-NIT Yogi & IG Gold Medalist
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 mt-5 pt-5 border-t border-white/10">
              {PROFILE_DATA.heroMetrics.map((m) => (
                <div
                  key={m.label}
                  className="p-2.5 rounded-lg bg-white/[0.03] text-center"
                >
                  <p className={`font-display text-xl font-bold ${m.color}`}>
                    <CountUp target={m.value} />
                  </p>
                  <p className="font-mono text-[9px] text-slate-400 uppercase mt-0.5">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
