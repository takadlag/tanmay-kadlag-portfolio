"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
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
      label: "Email",
      value: PROFILE_DATA.email,
      href: `mailto:${PROFILE_DATA.email}`,
      color: "text-cyan-400",
      hoverBg: "hover:bg-cyan-500/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: PROFILE_DATA.phone,
      href: `tel:${PROFILE_DATA.phone.replace(/\s+/g, "")}`,
      color: "text-emerald-400",
      hoverBg: "hover:bg-emerald-500/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: PROFILE_DATA.location,
      href: undefined,
      color: "text-amber-400",
      hoverBg: "hover:bg-amber-500/10",
    },
  ];

  return (
    <section id="contact" className="space-y-8">
      <div>
        <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
          LET&apos;S CONNECT // OPEN TO OPPORTUNITIES
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-1">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-sm mt-2 max-w-2xl">
          Whether you&apos;re a recruiter, a collaborator, or someone who shares
          a passion for data and mindfulness — I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          {contactCards.map((card) => {
            const Wrapper = card.href ? "a" : "div";
            const linkProps = card.href
              ? { href: card.href }
              : {};
            return (
              <Wrapper
                key={card.label}
                {...linkProps}
                className={`glass rounded-xl p-4 flex items-center gap-4 border border-white/10 transition duration-300 ${card.hoverBg} group block`}
              >
                <div className={`p-3 rounded-lg bg-white/5 ${card.color}`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-slate-400 uppercase">
                    {card.label}
                  </p>
                  <p className="text-white font-medium text-sm group-hover:text-cyan-300 transition">
                    {card.value}
                  </p>
                </div>
              </Wrapper>
            );
          })}

          {/* Social Links */}
          <div className="flex gap-3 pt-2">
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 glass rounded-xl p-4 text-center border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition group"
            >
              <p className="font-mono text-xs text-cyan-400 mb-1">LinkedIn</p>
              <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition flex items-center justify-center gap-1">
                Connect <ExternalLink className="w-3 h-3" />
              </p>
            </a>
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 glass rounded-xl p-4 text-center border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition group"
            >
              <p className="font-mono text-xs text-purple-400 mb-1">GitHub</p>
              <p className="text-white text-sm font-medium group-hover:text-purple-300 transition flex items-center justify-center gap-1">
                View Code <ExternalLink className="w-3 h-3" />
              </p>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 sm:p-8 border border-white/10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs text-slate-400 uppercase mb-2"
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-xs text-slate-400 uppercase mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition"
                  placeholder="Collaboration Opportunity"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block font-mono text-xs text-slate-400 uppercase mb-2"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition resize-none"
                placeholder="I'd love to discuss..."
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 hover:brightness-110 transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              {sent ? (
                "✓ Email Client Opened!"
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
            <p className="text-[11px] font-mono text-slate-500">
              Opens your default email client with the message pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
