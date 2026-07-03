"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { Code2, Wand2, MonitorSmartphone, RefreshCcw } from "lucide-react";

export default function EditorProductPage() {
  const CONTAINER = "max-w-7xl mx-auto px-6 lg:px-8";

  const features = [
    {
      title: "SWC AST Parser",
      desc: "Instantaneous code parsing utilizing the high-performance SWC compiler, parsing TypeScript files in milliseconds.",
      icon: <Code2 size={24} className="text-[#00F0FF]" />
    },
    {
      title: "Surgical Patching",
      desc: "Non-destructive codebase modifications. Visual changes compile down to surgical AST patches that never mangle your hand-written logic.",
      icon: <Wand2 size={24} className="text-[#00F0FF]" />
    },
    {
      title: "Real-time Sync Bridge",
      desc: "CRDT-based synchronization bridge that keeps the visual canvas and your local source code perfectly in sync, with zero lag.",
      icon: <RefreshCcw size={24} className="text-[#00F0FF]" />
    },
    {
      title: "React Native Ready",
      desc: "Natively export to React Native layout primitives. Design once visually, output clean component trees instantly.",
      icon: <MonitorSmartphone size={24} className="text-[#00F0FF]" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#00F0FF]/30 overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 flex items-center justify-center border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00F0FF]/10 blur-[150px] rounded-full pointer-events-none" />
        </div>

        <div className={`${CONTAINER} relative z-10 text-center max-w-5xl`}>
          <span className="px-3 py-1 text-[10px] font-mono tracking-[0.2em] uppercase text-[#00F0FF] border border-[#00F0FF]/30 bg-[#00F0FF]/15 rounded-full mb-8 inline-flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" /> Public Beta
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(48px,8vw,96px)] font-bold tracking-tighter leading-[1] text-white mb-8"
          >
            Visual Editor <br />
            <span className="text-[#00F0FF]">Bridge.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Our flagship code bridge. Experience seamless bidirectional synchronization between your visual design canvas and your raw source code.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex justify-center gap-4"
          >
            <a href="https://github.com/AmanTShekar" target="_blank" className="px-8 py-4 bg-[#00F0FF] text-black font-semibold text-sm tracking-wide rounded-lg hover:bg-[#00D4E0] transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              Download Beta
            </a>
            <a href="/docs" className="px-8 py-4 border border-white/10 text-white/70 font-medium text-sm tracking-wide rounded-lg hover:bg-white/5 transition-colors">
              Read Documentation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-[#020202]">
        <div className={CONTAINER}>
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-white tracking-tight">Core Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-[#00F0FF]/20 hover:bg-white/[0.04] transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#00F0FF]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 bg-[#030303] text-center">
        <p className="text-white/30 text-sm">© 2026 Zenith Open Source Team. Built for the community.</p>
      </footer>
    </main>
  );
}
