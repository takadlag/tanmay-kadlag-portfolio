import { Award, Trophy, Code2 } from "lucide-react";
import { TECH_STACK, CERTIFICATIONS } from "../data/portfolioData";

export default function CredentialsVault() {
  return (
    <section id="credentials" className="space-y-10">
      <div>
        <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
          VERIFIED CREDENTIALS & HONORS
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-1">
          Tech Stack, Certifications & Recognition Vault
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TECH_STACK.map((group) => (
          <div
            key={group.category}
            className="glass rounded-xl p-5 border border-white/10"
          >
            <p
              className={`font-mono text-xs uppercase mb-3 flex items-center gap-2 ${group.color}`}
            >
              <Code2 className="w-4 h-4" /> {group.category}
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded bg-white/5 text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 glass rounded-2xl p-6 border border-white/10 space-y-4">
          <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" /> Accredited Certifications
            (2023–2025)
          </h3>
          <div className="space-y-3 text-xs">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="p-3 rounded-xl bg-white/[0.03] flex justify-between items-center"
              >
                <div>
                  <strong className="text-white block text-sm">
                    {cert.title}
                  </strong>
                  <span className="text-slate-400">{cert.issuer}</span>
                </div>
                <span className="font-mono text-cyan-300 shrink-0 ml-2">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 glass rounded-2xl p-6 border border-emerald-500/20 space-y-4">
          <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" /> Wall of Recognition
            (&ldquo;Dots of Fame&rdquo;)
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/30">
              <div className="flex justify-between font-mono text-[11px] text-amber-300 mb-1">
                <span>UNILEVER UNIOPS • CLIENT AWARD</span>
                <span>SHILPA MURTHY (GLOBAL TECH DIRECTOR)</span>
              </div>
              <p className="text-slate-200 font-medium">
                &ldquo;Awarded to Tanmay Kadlag as a symbol of your outstanding
                commitment and invaluable contribution towards iQ Project.&rdquo;
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <div className="flex justify-between font-mono text-[11px] text-emerald-300 mb-1">
                <span>2x DELOITTE &ldquo;MOVE THE DOT — TEAM&rdquo; AWARDS</span>
                <span>JUN 23, 2025 & NOV 08, 2025</span>
              </div>
              <p className="text-slate-300">
                &ldquo;Incredible achievement with the iQ recommendation
                engine... launching pilot phase in Vietnam, Thailand, Indonesia,
                and the Philippines to full-scale live operations.&rdquo; —{" "}
                <em>Rohan Dawar & Pramod Jain</em>
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex justify-between font-mono text-[11px] text-cyan-300 mb-1">
                <span>3x &ldquo;WALK THE DOT&rdquo; PEER RECOGNITIONS</span>
                <span>JAN, MAR & NOV 2025</span>
              </div>
              <p className="text-slate-300">
                Celebrated by colleagues (
                <em>Sudhanva Gudi, Swati Kumari, Sumedh Kannalwar</em>) for
                unwavering mentorship, collaboration, and technical guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
