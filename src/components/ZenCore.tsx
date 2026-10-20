import { Award, Palette, Music, Languages } from "lucide-react";

export default function ZenCore() {
  const limbs = [
    "1. Yama (Ethics)",
    "2. Niyama (Discipline)",
    "3. Asana (Posture)",
    "4. Pranayama (Breath)",
    "5. Pratyahara (Inwardness)",
    "6. Dharana (Deep Focus)",
    "7. Dhyana (Meditation)",
    "8. Samadhi (Harmony)",
  ];

  return (
    <section
      id="zen"
      className="glass rounded-3xl p-8 sm:p-10 border border-amber-500/30 zen-glow relative overflow-hidden"
    >
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">
            THE INNER OPERATING SYSTEM // ASHTANGA YOGA
          </span>
          <h2 className="font-display text-3xl font-bold text-white">
            &ldquo;Yoga is the journey of the self, through the self, to the
            self.&rdquo;
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Sparked by Swami Vivekananda&apos;s books in 8th grade at JNV and refined
            with the VNIT Nagpur Yoga Team under Awadhesh Sir, my journey from
            beginner postures to winning{" "}
            <strong className="text-amber-300">
              Gold at VNIT&apos;s Institute Gathering
            </strong>{" "}
            and competing at the{" "}
            <strong className="text-amber-300">
              All India Inter-NIT Tournament (NIT Silchar)
            </strong>{" "}
            taught me that high-velocity systems require inner stillness.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
            {limbs.map((limb) => (
              <span
                key={limb}
                className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200"
              >
                {limb}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-3 text-xs">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10">
            <Award className="w-5 h-5 text-amber-400 mb-2" />
            <strong className="text-white block text-sm">
              IG Yoga Gold Medalist
            </strong>
            <p className="text-slate-400 mt-1">
              Clinched Gold at VNIT Nagpur&apos;s Institute Gathering &
              represented VNIT at NIT Silchar (2019).
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10">
            <Palette className="w-5 h-5 text-cyan-400 mb-2" />
            <strong className="text-white block text-sm">
              Sketching & Landscapes
            </strong>
            <p className="text-slate-400 mt-1">
              Dedicated art creator capturing landscapes and portraits with
              precision and patience.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10">
            <Music className="w-5 h-5 text-emerald-400 mb-2" />
            <strong className="text-white block text-sm">
              Acoustic Guitarist
            </strong>
            <p className="text-slate-400 mt-1">
              Trained at JNV Takli Dhokeshwar and performed across regional meets
              and campus gatherings.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10">
            <Languages className="w-5 h-5 text-purple-400 mb-2" />
            <strong className="text-white block text-sm">
              Trilingual Communicator
            </strong>
            <p className="text-slate-400 mt-1">
              Full professional proficiency in English, with native fluency in
              Marathi and Hindi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
