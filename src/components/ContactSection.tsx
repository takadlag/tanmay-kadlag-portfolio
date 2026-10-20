"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, Download, CheckCircle2, HeartHandshake } from "lucide-react";
import { PROFILE_DATA } from "../data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi Tanmay,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}`;
    const mailtoLink = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactCards = [
    {
      icon: Mail,
      label: "Direct Email",
      value: PROFILE_DATA.email,
      href: `mailto:${PROFILE_DATA.email}`,
      color: "text-amber-600 dark:text-cyan-400",
    },
    {
      icon: Phone,
      label: "Direct Phone",
      value: PROFILE_DATA.phone,
      href: `tel:${PROFILE_DATA.phone.replace(/\s+/g, "")}`,
      color: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: MapPin,
      label: "Current Base",
      value: PROFILE_DATA.location,
      href: undefined,
      color: "text-rose-600 dark:text-rose-400",
    },
  ];

  return (
    <section id="contact" className="space-y-8 scroll-mt-24">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-white/10 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-serif tracking-wider">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>संवाद & संगति // INITIATE DIALOGUE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Let&apos;s Build Something <span className="sacred-gold-text font-serif italic">Transformative</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl font-sans">
          Whether you are looking to architect resilient Big Data Lakehouses, deploy production ML pipelines, or discuss mindful leadership — my inbox is open.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Resumes */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 shadow-lg space-y-4">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-3">
              Direct Contact Coordinates
            </h3>

            <div className="space-y-3">
              {contactCards.map((c) => (
                <div
                  key={c.label}
                  className="p-3.5 rounded-2xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 flex items-center gap-3.5"
                >
                  <div className={`p-2.5 rounded-xl bg-white dark:bg-slate-900 shadow-sm ${c.color}`}>
                    <c.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">
                      {c.label}
                    </span>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="font-medium text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-cyan-400 transition text-xs sm:text-sm"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="font-medium text-slate-900 dark:text-white text-xs sm:text-sm">
                        {c.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Downloads in Contact Box */}
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-2">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">
                Official Curricula Vitae:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <a
                  href="/docs/Tanmay_Kadlag_ML_Engineer.pdf"
                  download
                  className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 font-semibold text-center hover:bg-amber-500/20 transition flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> ML Resume
                </a>
                <a
                  href="/docs/Tanmay_Kadlag_BigData_Engineer.pdf"
                  download
                  className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-800 dark:text-cyan-300 font-semibold text-center hover:bg-cyan-500/20 transition flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Big Data CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Dispatch Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-lg space-y-4"
          >
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Dispatch a Direct Message
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Priyanshu Sharma"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-500 dark:focus:border-cyan-400 text-sm transition"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider"
                >
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g. Big Data / ML Opportunity"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-500 dark:focus:border-cyan-400 text-sm transition"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="block font-mono text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Share your goals, project details, or collaboration ideas..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-500 dark:focus:border-cyan-400 text-sm transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-500 text-white dark:text-slate-950 font-sans shadow-lg shadow-amber-500/20 hover:brightness-105 active:scale-98 transition flex items-center justify-center gap-2"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Opening Mail Client...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
