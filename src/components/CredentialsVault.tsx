"use client";

import { Award, Trophy, ShieldCheck } from "lucide-react";
import { TECH_STACK, CERTIFICATIONS } from "../data/portfolioData";

export default function CredentialsVault() {
  return (
    <section id="skills" className="space-y-10 scroll-mt-28">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-white/10 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
          <span>TECHNICAL COMPETENCY &amp; VERIFIED CREDENTIALS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Core Technical Skills &amp; <span className="sacred-gold-text font-serif italic">Recognition Vault</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
          Production competencies across distributed computing, Lakehouse architectures, cloud orchestration, predictive ML models, and corporate honors.
        </p>
      </div>

      {/* 5 Consolidated Technical Skill Categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {TECH_STACK.map((group) => (
          <div
            key={group.category}
            className="glass glass-hover rounded-3xl p-5 border border-slate-200 dark:border-white/10 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 block uppercase tracking-wider">
                {group.category}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/5 font-medium text-[11px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dual Columns: Certifications & Recognition */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Accredited Certifications */}
        <div className="lg:col-span-6 glass rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-lg space-y-5">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span>Accredited Certifications</span>
            </h3>
            <span className="font-mono text-xs text-slate-500">Verified</span>
          </div>

          <div className="space-y-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="p-4 rounded-2xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition hover:border-cyan-500/40"
              >
                <div className="space-y-0.5">
                  <strong className="text-slate-900 dark:text-white block text-sm font-semibold font-sans">
                    {cert.title}
                  </strong>
                  <span className="text-slate-500 dark:text-slate-400 font-sans text-xs block">
                    {cert.issuer}
                  </span>
                </div>
                <span className="font-mono text-xs text-cyan-700 dark:text-cyan-300 font-bold shrink-0 self-start sm:self-center">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Wall of Recognition (6x 2025 Honors) */}
        <div className="lg:col-span-6 glass rounded-3xl p-6 sm:p-8 border border-amber-500/20 shadow-lg space-y-5">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>Client &amp; Leadership Honors (&ldquo;Dots of Fame&rdquo;)</span>
            </h3>
            <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-bold">
              6x Honors (2025)
            </span>
          </div>

          <div className="space-y-3.5">
            {/* Unilever UniOps Award */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
              <div className="flex flex-wrap justify-between font-mono text-[10px] text-amber-800 dark:text-amber-300 uppercase tracking-wider font-bold gap-1">
                <span>UNILEVER UNIOPS • CLIENT RECOGNITION</span>
                <span>SHILPA MURTHY (GLOBAL TECH DIR.)</span>
              </div>
              <p className="text-slate-800 dark:text-slate-200 font-sans text-xs leading-relaxed italic">
                &ldquo;Awarded to Tanmay Kadlag as a symbol of your outstanding commitment and invaluable contribution towards the iQ Project.&rdquo;
              </p>
            </div>

            {/* 2x Move The Dot Team Award */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1.5">
              <div className="flex flex-wrap justify-between font-mono text-[10px] text-emerald-800 dark:text-emerald-300 uppercase tracking-wider font-bold gap-1">
                <span>2x DELOITTE &ldquo;MOVE THE DOT — TEAM&rdquo; HONORS</span>
                <span>JUN 23 &amp; NOV 08, 2025</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-sans text-xs leading-relaxed">
                Recognized for leadership and engineering execution on Team iQ, launching the recommendation pilot phase across Vietnam, Thailand, Indonesia, and the Philippines into full-scale live operations.
              </p>
            </div>

            {/* 3x Walk The Dot Peer Recognitions */}
            <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 space-y-1.5">
              <div className="flex flex-wrap justify-between font-mono text-[10px] text-cyan-700 dark:text-cyan-300 uppercase tracking-wider font-bold gap-1">
                <span>3x &ldquo;WALK THE DOT&rdquo; PEER AWARDS</span>
                <span>JAN, MAR &amp; NOV 2025</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-sans text-xs leading-relaxed">
                Celebrated by colleagues (Sudhanva Gudi, Swati Kumari, Sumedh Kannalwar) for technical mentorship, PySpark pipeline debugging, and cross-functional team collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
