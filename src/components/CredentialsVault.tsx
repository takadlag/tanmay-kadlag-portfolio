"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, Trophy, ShieldCheck, Maximize2, X, ExternalLink } from "lucide-react";
import { TECH_STACK, CERTIFICATIONS } from "../data/portfolioData";

export default function CredentialsVault() {
  const [activePreview, setActivePreview] = useState<{
    title: string;
    subtitle: string;
    image: string;
    badge: string;
  } | null>(null);

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
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl font-sans leading-relaxed">
          Production competencies across distributed computing, Lakehouse architectures, cloud orchestration, predictive ML models, and verified corporate honors.
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

      {/* Dual Columns: Certifications with Scans & Wall of Recognition */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Accredited Certifications with Scans */}
        <div className="lg:col-span-6 glass rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-lg space-y-5">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span>Accredited Certifications</span>
            </h3>
            <span className="font-mono text-xs text-cyan-700 dark:text-cyan-400 font-semibold">
              Verified Documents
            </span>
          </div>

          <div className="space-y-3.5">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="p-4 rounded-2xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition hover:border-cyan-500/40 group"
              >
                {/* Thumbnail Preview Scan if Available */}
                {cert.image && (
                  <div
                    onClick={() =>
                      setActivePreview({
                        title: cert.title,
                        subtitle: cert.issuer,
                        image: cert.image!,
                        badge: cert.badge || "Verified Credential",
                      })
                    }
                    className="relative w-20 h-14 rounded-xl overflow-hidden bg-slate-950 border border-slate-300 dark:border-white/10 shrink-0 cursor-pointer group/thumb shadow-sm"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="80px"
                      className="object-cover group-hover/thumb:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}

                <div className="space-y-1 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-slate-900 dark:text-white text-sm font-semibold font-sans">
                      {cert.title}
                    </strong>
                    {cert.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 font-medium">
                        {cert.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 font-sans text-xs block leading-relaxed">
                    {cert.issuer}
                  </span>
                  {cert.credentialId && (
                    <span className="text-cyan-600 dark:text-cyan-400 font-mono text-[10px] block">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-1 shrink-0">
                  <span className="font-mono text-xs text-amber-700 dark:text-amber-400 font-bold">
                    {cert.date}
                  </span>
                  {cert.image && (
                    <button
                      onClick={() =>
                        setActivePreview({
                          title: cert.title,
                          subtitle: cert.issuer,
                          image: cert.image!,
                          badge: cert.badge || "Verified Credential",
                        })
                      }
                      className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                      aria-label={`View full certificate scan for ${cert.title}`}
                    >
                      <span>Preview</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
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

          <div className="space-y-4">
            {/* Unilever UniOps Award with Scan Preview */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap justify-between font-mono text-[10px] text-amber-800 dark:text-amber-300 uppercase tracking-wider font-bold gap-1">
                    <span>UNILEVER UNIOPS &bull; CLIENT RECOGNITION</span>
                    <span>SHILPA MURTHY (GLOBAL TECH DIR.)</span>
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 font-sans text-xs leading-relaxed italic">
                    &ldquo;Awarded to Tanmay Kadlag as a symbol of your outstanding commitment and invaluable contribution towards the iQ Project.&rdquo;
                  </p>
                </div>

                {/* Unilever Certificate Thumbnail */}
                <div
                  onClick={() =>
                    setActivePreview({
                      title: "Unilever UniOps Certificate of Achievement",
                      subtitle: "Awarded by Shilpa Murthy (Global Technology Director) for outstanding commitment to the iQ Project.",
                      image: "/images/awards/unilever-uniops-cert.jpeg",
                      badge: "Client Recognition",
                    })
                  }
                  className="relative w-16 h-14 rounded-xl overflow-hidden bg-slate-950 border border-amber-500/40 shrink-0 cursor-pointer shadow-sm group/thumb"
                >
                  <Image
                    src="/images/awards/unilever-uniops-cert.jpeg"
                    alt="Unilever UniOps Certificate"
                    fill
                    sizes="64px"
                    className="object-cover group-hover/thumb:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2x Move The Dot Team Award with Scan Preview */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap justify-between font-mono text-[10px] text-emerald-800 dark:text-emerald-300 uppercase tracking-wider font-bold gap-1">
                    <span>2x DELOITTE &ldquo;MOVE THE DOT &mdash; TEAM&rdquo; HONORS</span>
                    <span>JUN 23 &amp; NOV 08, 2025</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-sans text-xs leading-relaxed">
                    Recognized for leadership and engineering execution on Team iQ, launching the recommendation pilot phase across Vietnam, Thailand, Indonesia, and the Philippines into full-scale live operations.
                  </p>
                </div>

                {/* Move the Dot Thumbnail */}
                <div
                  onClick={() =>
                    setActivePreview({
                      title: "Deloitte 'Move the Dot - Team' Honor (November 2025)",
                      subtitle: "Consecutive Dot of Fame recognition for flawless production execution on Team iQ.",
                      image: "/images/awards/move-the-dot-nov2025.png",
                      badge: "Move the Dot — Team",
                    })
                  }
                  className="relative w-16 h-14 rounded-xl overflow-hidden bg-slate-950 border border-emerald-500/40 shrink-0 cursor-pointer shadow-sm group/thumb"
                >
                  <Image
                    src="/images/awards/move-the-dot-nov2025.png"
                    alt="Move the Dot Award"
                    fill
                    sizes="64px"
                    className="object-cover group-hover/thumb:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
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

      {/* Lightbox Modal for Certificate / Award Scans */}
      {activePreview && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 modal-backdrop flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActivePreview(null)}
        >
          <div
            className="relative max-w-4xl w-full glass rounded-3xl overflow-hidden border border-cyan-500/30 p-6 sm:p-8 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
              <div>
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
                  {activePreview.badge}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {activePreview.title}
                </h3>
              </div>
              <button
                onClick={() => setActivePreview(null)}
                className="p-2.5 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white transition"
                aria-label="Close credential preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full max-h-[65vh] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
              <Image
                src={activePreview.image}
                alt={activePreview.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-sans">
              {activePreview.subtitle}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
