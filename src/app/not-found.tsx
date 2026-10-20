import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-4">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-serif text-2xl text-amber-500 mx-auto">
        ॐ
      </div>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
        404 — Coordinate Not Found
      </h1>
      <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md font-sans">
        The requested digital coordinate does not exist in this realm. Return to the main command center.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-cyan-500 text-white dark:text-slate-950 shadow-md hover:brightness-105 transition"
      >
        Return to Portfolio
      </Link>
    </main>
  );
}
