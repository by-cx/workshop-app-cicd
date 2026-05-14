export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600 rounded-full opacity-5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-indigo-300 text-sm font-medium tracking-wide uppercase">
            Rosti.cz
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight mb-6">
          Chci být{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              online v CICD na Githubu
            </span>
          </span>
          <br />
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-300">
            za{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              30 sekund
            </span>
          </span>
        </h1>

        {/* Subline */}
        <p className="text-slate-400 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
          Rychlý start, tvůj projekt běží dřív, než dopiješ kávu.
        </p>

        {/* Divider */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-600" />
          <span className="text-slate-600 text-xs tracking-widest uppercase">Deploy. Run. Done.</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-600" />
        </div>
      </div>
    </main>
  );
}
