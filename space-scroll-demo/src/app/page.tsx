import { Star, Globe, Rocket, Orbit } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510] text-gray-100 overflow-hidden font-sans selection:bg-indigo-500/30">
      {/* Background stars / ambient light */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sky-900/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* Section 1: Hero */}
        <section className="h-screen flex flex-col items-center justify-center p-8 relative">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050510] to-transparent z-10" />
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-100 to-indigo-500 text-center">
            DEEP SPACE
          </h1>
          <p className="text-xl md:text-2xl text-indigo-300/80 font-light tracking-wide max-w-2xl text-center">
            Scroll down to experience the heavy inertia of zero-gravity movement.
          </p>
          <div className="absolute bottom-20 animate-bounce text-indigo-500/50">
            <Orbit size={48} className="animate-spin-slow" />
          </div>
        </section>

        {/* Section 2: Orbit */}
        <section className="h-[120vh] flex flex-col items-start justify-center p-8 md:p-24 relative">
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
                <Star size={18} />
                <span className="text-sm font-medium tracking-widest uppercase">Sector Alpha</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Weightless Drift</h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                The Lenis scroll wrapper is configured with a very low lerp value and a long duration to simulate the heavy, unresisting momentum of floating in an absolute vacuum.
              </p>
            </div>
            <div className="flex-1 relative">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-indigo-500/20 bg-gradient-to-tr from-[#0a0a1a] to-indigo-900/20 shadow-[0_0_100px_rgba(79,70,229,0.1)] flex items-center justify-center backdrop-blur-3xl">
                <Rocket size={64} className="text-indigo-400/80 -rotate-45" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Void */}
        <section className="h-[150vh] flex flex-col items-center justify-center p-8 relative">
          <h3 className="text-4xl md:text-6xl font-bold text-center tracking-tight mb-24 text-gray-600">
            Into the Abyss
          </h3>
          <div className="w-[1px] h-64 bg-gradient-to-b from-indigo-500/50 to-transparent" />
        </section>

        {/* Section 4: Planet */}
        <section className="h-screen flex items-center justify-center p-8 relative">
          <div className="text-center space-y-8 z-10">
            <div className="relative inline-block">
              <Orbit size={120} className="text-sky-500/20 absolute -inset-6 animate-spin-slow" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_0_60px_rgba(99,102,241,0.4)] flex items-center justify-center mx-auto">
                <Globe size={48} className="text-white" />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mt-12">Destination Reached</h2>
            <p className="text-xl text-gray-400 max-w-lg mx-auto">
              Notice how the scroll gracefully eases to a halt, absorbing the kinetic energy.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
