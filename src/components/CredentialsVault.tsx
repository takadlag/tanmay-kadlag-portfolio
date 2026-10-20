"use client";

import { Award, Trophy, Code2, ShieldCheck } from "lucide-react";
import { TECH_STACK, CERTIFICATIONS } from "../data/portfolioData";

export default function CredentialsVault() {
  return (
    <section id="credentials" className="space-y-8 scroll-mt-24">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-white/10 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
          <span>प्रमाण // VERIFIED HONORS & COMPETENCIES</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Tech Stack, Certifications & <span className="sacred-gold-text font-serif italic">Recognition Vault</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl font-sans">
          Proven enterprise competencies across distributed compute, neural architectures, cloud governance, and client accolades.
        </p>
      </div>

      {/* Tech Stack Matrix */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TECH_STACK.map((group) => (
          <div
            key={group.category}
            className="glass glass-hover rounded-3xl p-5 border border-slate-200 dark:border-white/10 space-y-3"
          >
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-cyan-400">
              <Code2 className="w-4 h-4" />
              <span>{group.category}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/5 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dual Columns: Certifications & Recognition */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Certifications */}
        <div className="lg:col-span-6 glass rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-lg space-y-4">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-3">
            <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span>Accredited Certifications</span>
          </h3>
          <div className="space-y-2.5 text-xs">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="p-3.5 rounded-2xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 flex justify-between items-center transition hover:border-cyan-500/40"
              >
                <div>
                  <strong className="text-slate-900 dark:text-white block text-sm font-semibold">
                    {cert.title}
                  </strong>
                  <span className="text-slate-500 dark:text-slate-400 font-sans">
                    {cert.issuer}
                  </span>
                </div>
                <span className="font-mono text-cyan-700 dark:text-cyan-300 shrink-0 ml-3 font-semibold">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Wall of Recognition */}
        <div className="lg:col-span-6 glass rounded-3xl p-6 sm:p-8 border border-amber-500/20 shadow-lg space-y-4">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-3">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span>Wall of Honor (&ldquo;Dots of Fame&rdquo;)</span>
          </h3>
          <div className="space-y-3 text-xs">
            {/* Unilever UniOps Award */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
              <div className="flex justify-between font-mono text-[10px] text-amber-700 dark:text-amber-300 uppercase tracking-wider font-bold">
                <span>UNILEVER UNIOPS • CLIENT RECOGNITION</span>
                <span>SHILPA MURTHY (GLOBAL TECH DIR.)</span>
              </div>
              <p className="text-slate-800 dark:text-slate-200 font-sans text-xs leading-relaxed italic">
                &ldquo;Awarded to Tanmay Kadlag as a symbol of your outstanding commitment and invaluable contribution towards the iQ Project.&rdquo;
              </p>
            </div>

            {/* 2x Move The Dot */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1.5">
              <div className="flex justify-between font-mono text-[10px] text-emerald-700 dark:text-emerald-300 uppercase tracking-wider font-bold">
                <span>2x DELOITTE &ldquo;MOVE THE DOT&rdquo; EXCELLENCE</span>
                <span>JUN & NOV 2025</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-sans text-xs leading-relaxed">
                Recognized for launching the iQ engine pilot phase across Vietnam, Thailand, Indonesia, and the Philippines into live production operations.
              </p>
            </div>

            {/* 3x Walk The Dot */}
            <div className="p-4 rounded-2xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 space-y-1.5">
              <div className="flex justify-between font-mono text-[10px] text-cyan-700 dark:text-cyan-300 uppercase tracking-wider font-bold">
                <span>3x &ldquo;WALK THE DOT&rdquo; PEER AWARDS</span>
                <span>JAN, MAR & NOV 2025</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-sans text-xs leading-relaxed">
                Celebrated by peers for technical mentorship, PySpark pipeline optimization, and steadfast team leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
