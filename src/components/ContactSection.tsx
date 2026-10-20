"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, Download, Check, Copy, HeartHandshake } from "lucide-react";
import { PROFILE_DATA } from "../data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi Tanmay,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}`;
    const mailtoLink = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
      formData.subject || "Engineering Collaboration / Opportunity"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
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
    <section id="contact" className="space-y-10 scroll-mt-28">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-white/10 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-mono font-medium">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>INITIATE COLLABORATION // OPEN TO IMPACTFUL ROLES</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Connect &amp; <span className="sacred-gold-text font-serif italic">Collaborate</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
          Whether you are looking to architect resilient Big Data Lakehouses, deploy production ML pipelines, or discuss mindful technical leadership — my inbox is open.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Coordinates & Resumes */}
        <div className="lg:col-span-5 space-y-5">
          <div className="glass rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 shadow-lg space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Direct Coordinates
              </h3>
              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono glass border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-cyan-400 transition flex items-center gap-1.5"
                title="Copy email address to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>

            <div className="space-y-3">
              {contactCards.map((c) => (
                <div
                  key={c.label}
                  className="p-3.5 rounded-2xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 flex items-center gap-3.5"
                >
                  <div className={`p-2.5 rounded-xl bg-white dark:bg-slate-900 shadow-sm ${c.color}`}>
                    <c.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                      {c.label}
                    </span>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="font-medium text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-cyan-400 transition text-xs sm:text-sm font-sans"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="font-medium text-slate-900 dark:text-white text-xs sm:text-sm font-sans">
                        {c.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Downloads in Contact Box */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-2.5">
              <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block font-bold">
                Download Official Resumes (PDF):
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
            className="glass rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-lg space-y-5"
          >
            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Direct Email Dispatch
              </h3>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
                Fills and launches your default email client with your message intact.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold"
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Maya Iyer"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-500 dark:focus:border-cyan-400 text-sm transition font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold"
                >
                  Subject / Topic *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g. Lead Big Data Role"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-500 dark:focus:border-cyan-400 text-sm transition font-sans"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="block font-mono text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Share your project scope, team background, or questions..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-500 dark:focus:border-cyan-400 text-sm transition resize-none font-sans"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
              <button
                type="submit"
                className="px-7 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-500 text-white dark:text-slate-950 font-sans shadow-lg shadow-amber-500/20 hover:brightness-105 active:scale-98 transition flex items-center justify-center gap-2"
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Opening Mail Client...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message Directly</span>
                  </>
                )}
              </button>

              <span className="font-mono text-[11px] text-slate-500">
                No third-party tracker • Direct mailto dispatch
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
