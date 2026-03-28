"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";

import { 
  Github, 
  Globe, 
  Users, 
  Zap, 
  ChevronRight,
  Code2,
  Layers,
  Sparkles,
  ShieldCheck
} from "lucide-react";

const SurgicalMirror = dynamic(() => import("./components/SurgicalMirror"), { ssr: false });
const NoiseOverlay = dynamic(() => import("./components/NoiseOverlay"), { ssr: false });
const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });

/* ═══════════════════════════════════════ */
/*  CONSTANTS                              */
/* ═══════════════════════════════════════ */

const CONTAINER = "max-w-[1200px] mx-auto px-6 md:px-12 w-full";

/* ═══════════════════════════════════════ */
/*  REUSABLE UI                            */
/* ═══════════════════════════════════════ */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 backdrop-blur-md text-[11px] font-mono tracking-widest text-[#00F0FF] uppercase shadow-[0_0_20px_rgba(0,240,255,0.15)]">
      {children}
    </span>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-px bg-[#00F0FF]/40 shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
      <span className="text-[11px] font-mono tracking-[0.2em] text-[#00F0FF]/60 uppercase">{label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════ */
/*  [01] HERO                              */
/* ═══════════════════════════════════════ */

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className={`${CONTAINER} relative z-10 py-20`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <Badge>ZENITH · THE DESIGN OS · COMING SOON</Badge>

          <h1 className="mt-8 text-[clamp(40px,7vw,84px)] font-bold tracking-tight leading-[0.95] text-white">
            Architecture for the <br />
            <span className="text-[#00F0FF]">Next-Gen IDE.</span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed">
            Design at the speed of thought. Zenith is evolving into a full-scale Design OS — a standalone architectural environment for the modern developer.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#launching-on-vscode" className="inline-flex items-center gap-3 px-8 py-4 bg-[#00F0FF] text-black font-semibold text-sm tracking-wide rounded-lg hover:bg-[#00D4E0] transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]">
               Notify Me on Launch
            </a>
            <a href="https://github.com/AmanTShekar/Zenith-Extension" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-white/70 font-medium text-sm tracking-wide rounded-lg hover:bg-white/5 transition-colors group">
              Watch Development <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>


      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00F0FF]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════ */
/*  [01B] EXTENSION SHOWCASE                */
/* ═══════════════════════════════════════ */

function ExtensionShowcase() {
  const cards = [
    { label: "GITHUB", icon: <Github size={18} />, link: "https://github.com/AmanTShekar/Zenith-Extension", description: "Source Code" },
    { label: "CREATOR", icon: <Globe size={18} />, link: "https://amantshekar.com", description: "Aman T Shekar" },
    { label: "CONTRIBUTE", icon: <Users size={18} />, link: "#roadmap", description: "Join Community" },
    { label: "WAITLIST", icon: <Zap size={18} />, link: "#roadmap", description: "Join Next Phase", primary: true },
  ];

  return (
    <section id="launching-on-vscode" className="relative py-32 overflow-hidden border-t border-white/5 bg-[#050505]">
      <div className={CONTAINER}>
        <div className="flex flex-col items-center text-center">
          <Badge>ZENITH FOR VS CODE · LIVE PREVIEW</Badge>
          <h2 className="mt-8 text-3xl md:text-5xl font-bold text-white tracking-tight">
             Bringing Visual Design to <br />
             <span className="text-[#00F0FF]">Your Current Workflow.</span>
          </h2>
          <p className="mt-6 text-white/40 max-w-2xl leading-relaxed text-lg">
            Surgical visual editing is now a reality. We are launching a first-class extension to power your existing setup.
          </p>

          <div className="mt-20 w-full grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12">
               <div className="relative w-full max-w-4xl mx-auto">
                 <div className="absolute -inset-1 bg-[#00F0FF]/15 rounded-2xl blur-2xl opacity-40"></div>
                 <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#0a0a0a]">
                   <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0c0c0c]">
                     <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                       <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                       <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                     </div>
                     <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">VS Code Extension Preview</span>
                   </div>
                   
                   <div className="relative">
                      <Image
                        src="/Screenshot 2026-03-28 213258.png"
                        alt="Zenith extension live preview"
                        width={1200}
                        height={800}
                        className="w-full max-h-[520px] object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className="lg:col-span-12 mt-12">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mx-auto">
                  {cards.map((card) => (
                    <a 
                      key={card.label} 
                      href={card.link}
                      target={card.link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 ${
                        card.primary 
                        ? "bg-[#00F0FF]/10 border-[#00F0FF]/30 hover:bg-[#00F0FF]/20" 
                        : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10"
                      }`}
                    >
                      <div className={`p-3 rounded-xl w-fit ${
                        card.primary ? "bg-[#00F0FF] text-black" : "bg-white/5 text-[#00F0FF]"
                      }`}>
                        {card.icon}
                      </div>
                      <span className="mt-6 text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase group-hover:text-white/60 transition-colors">
                        {card.label}
                      </span>
                      <span className="mt-1 text-sm font-medium text-white group-hover:text-[#00F0FF] transition-colors flex items-center gap-1">
                        {card.description}
                        <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </span>
                    </a>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Stats Bar */}
      <div className="relative z-10 mt-20">
        <div className={CONTAINER}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {[
              { value: "<0.3ms", label: "Patch latency" },
              { value: "0 files", label: "Rewritten per change" },
              { value: "24+", label: "Languages supported" },
              { value: "Native", label: "VS Code Extension" },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-[#00F0FF]">{stat.value}</div>
                <div className="text-[11px] text-white/25 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,240,255,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(0,240,255,0.03)_0%,transparent_40%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════ */
/*  [02] LANGUAGE TICKER                   */
/* ═══════════════════════════════════════ */

function LanguageTicker() {
  const items = [
    "JavaScript", "TypeScript", "Python", "Rust", "Go", "C++", "C#",
    "Java", "Swift", "Kotlin", "Ruby", "PHP", "Dart", "Zig",
    "HTML", "CSS", "Tailwind", "React", "Vue", "Svelte", "Angular",
    "Next.js", "Nuxt", "Astro", "SQL", "GraphQL", "YAML", "JSON",
  ];

  return (
    <section className="py-8 border-t border-b border-white/5 overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: [0, -1600] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...items, ...items, ...items].map((lang, i) => (
            <span key={`${lang}-${i}`} className="text-[13px] font-mono text-white/12 uppercase tracking-widest select-none">
              {lang}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════ */
/*  [03] VISUAL EDITING — Main Feature     */
/* ═══════════════════════════════════════ */

function VisualEditingSection() {
  return (
    <section id="demo" className="py-32 md:py-40">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionLabel label="Visual Editing" />
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] text-white">
              Edit your UI by<br />interacting with it.
            </h2>
            <p className="mt-6 text-lg text-white/40 leading-relaxed">
              Move components, adjust spacing, change colors — all by directly manipulating the rendered output. Zenith&apos;s AST engine translates every visual action into a clean, minimal code patch.
            </p>
            <div className="mt-10 space-y-6">
              <div className="border-l-2 border-[#00F0FF]/20 pl-5">
                <div className="text-sm font-semibold text-white mb-1">Surgical precision</div>
                <div className="text-sm text-white/30">Change one CSS value visually → one line changes in source. Your git diff stays clean.</div>
              </div>
              <div className="border-l-2 border-white/10 pl-5">
                <div className="text-sm font-semibold text-white mb-1">Bi-directional sync</div>
                <div className="text-sm text-white/30">Edit in the visual canvas or in code — both stay perfectly synchronized through CRDT state.</div>
              </div>
              <div className="border-l-2 border-white/10 pl-5">
                <div className="text-sm font-semibold text-white mb-1">Framework agnostic</div>
                <div className="text-sm text-white/30">Works with React, Vue, Svelte, Angular, and any component-based framework.</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-1 overflow-hidden">
              <SurgicalMirror />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════ */
/*  [03B] WHY VISUAL EDITING               */
/* ═══════════════════════════════════════ */

function WhyVisualEditing() {
  return (
    <section className="py-32 md:py-40 bg-[#020202]">
      <div className={CONTAINER}>
        <div className="text-center mb-20">
          <SectionLabel label="Why Visual Editing" />
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] text-white">
            Stop guessing.<br /><span className="text-white/40">Start seeing.</span>
          </h2>
          <p className="mt-6 text-lg text-white/35 max-w-2xl mx-auto leading-relaxed">
            Traditional editors make you imagine the UI from code. Zenith lets you work with the actual rendered output — and writes the code for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Without Zenith */}
          <div className="p-8 md:p-10 rounded-2xl border border-white/5 bg-white/[0.01]">
            <div className="text-[10px] font-mono text-red-400/40 uppercase tracking-[0.3em] mb-8">Without Zenith</div>
            <div className="space-y-5">
              {[
                "Tweak a margin → save → wait for reload → check browser → repeat",
                "Multi-file diffs for a single visual change",
                "Context-switching between design tools and code editors",
                "Figma-to-code translation that never fully matches",
                "Spending 40% of dev time on visual adjustments",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-red-400/30 text-xs mt-0.5 shrink-0">✕</span>
                  <span className="text-sm text-white/30">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With Zenith */}
          <div className="p-8 md:p-10 rounded-2xl border border-[#00F0FF]/15 bg-[#00F0FF]/[0.02] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/[0.03] to-transparent pointer-events-none" />
            <div className="relative">
              <div className="text-[10px] font-mono text-[#00F0FF]/40 uppercase tracking-[0.3em] mb-8">With Zenith</div>
              <div className="space-y-5">
                {[
                  "Drag a component → code updates instantly in one line",
                  "Every change is a single, precise AST node patch",
                  "Design and code live in the same window, always in sync",
                  "What you see IS the code — no translation layer",
                  "Visual adjustments take seconds, not minutes",
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-[#00F0FF]/60 text-xs mt-0.5 shrink-0">✦</span>
                    <span className="text-sm text-white/50">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg md:text-xl text-white/20 italic max-w-2xl mx-auto leading-relaxed">
            &quot;The fastest way to write production CSS is to not write it at all.&quot;
          </p>
          <p className="mt-3 text-xs text-white/15">— The Zenith Philosophy</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════ */
/*  [04] AI AGENT MODE                     */
/* ═══════════════════════════════════════ */

function AgentModeSection() {
  return (
    <section className="py-32 md:py-40 bg-[#020202]">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6">
            <SectionLabel label="Surgical AI" />
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] text-white">
              Surgical precision.<br />Zero diff noise.
            </h2>
            <p className="mt-6 text-lg text-white/40 leading-relaxed">
              The Zenith extension doesn&apos;t just generate code. It uses a high-performance Rust sidecar to surgically patch your AST in real-time. No full file rewrites, just the exact change you intended.
            </p>
          </div>
          <div className="lg:col-span-6 space-y-4">
            {[
              {
                name: "The Architect",
                role: "Structure & State",
                description: "Manages component hierarchy, prop flow, and state isolation. Prevents prop-drilling drift and circular dependencies before they happen.",
              },
              {
                name: "The Stylist",
                role: "Design & Tokens",
                description: "Governs design token consistency, CSS class deduplication, and visual coherence across your entire component library.",
              },
              {
                name: "The Auditor",
                role: "Performance & A11y",
                description: "Continuously monitors DOM depth, bundle impact, ARIA compliance, and render performance. Flags regressions in real-time.",
              },
            ].map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-white/5 bg-white/[0.015] hover:border-[#00F0FF]/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#00F0FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-semibold text-white">{agent.name}</span>
                  <span className="text-[10px] font-mono text-[#00F0FF]/40 uppercase tracking-[0.2em]">{agent.role}</span>
                </div>
                <p className="text-sm text-white/30 leading-relaxed">{agent.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════ */
/*  [05] BUILT ON VS CODE                  */
/* ═══════════════════════════════════════ */

function BuiltOnVSCode() {
  return (
    <section id="features" className="py-32 md:py-40 border-t border-white/5">
      <div className={CONTAINER}>
        <div className="text-center mb-20">
          <SectionLabel label="Integration" />
          <h2 className="text-[clamp(28px,4vw,52px)] font-bold tracking-tight leading-[1.1] text-white">
            Your VS Code,<br />
            <span className="text-white/40">Supercharged.</span>
          </h2>
          <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            Zenith is now a native VS Code extension. Your extensions, keybindings, themes, and settings stay exactly as they are. We just add the missing visual layer on top.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* VS Code Features */}
          <div className="p-8 md:p-10 rounded-2xl border border-white/5 bg-white/[0.015]">
            <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] mb-8">Inherited from VS Code</div>
            <div className="space-y-5">
              {[
                "Integrated terminal with shell support",
                "Git source control built-in",
                "IntelliSense autocomplete for every language",
                "Extensions marketplace compatibility",
                "Remote development & SSH",
                "Customizable themes, keybindings, and profiles",
                "Debugger with breakpoints and watch expressions",
                "Multi-cursor editing and snippets",
              ].map(feature => (
                <div key={feature} className="flex items-start gap-3">
                  <span className="text-[#00F0FF]/40 text-xs mt-0.5 shrink-0">✓</span>
                  <span className="text-sm text-white/40">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Zenith-Exclusive Features */}
          <div className="p-8 md:p-10 rounded-2xl border border-[#00F0FF]/10 bg-[#00F0FF]/[0.02] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/[0.03] to-transparent pointer-events-none" />
            <div className="relative">
              <div className="text-[10px] font-mono text-[#00F0FF]/40 uppercase tracking-[0.3em] mb-8">Zenith Exclusive</div>
              <div className="space-y-5">
                {[
                  "Visual drag-and-drop component editing",
                  "Surgical AST patching (sub-millisecond)",
                  "Multi-agent AI swarm intelligence",
                  "Local-first GPU-accelerated AI inference",
                  "Bi-directional visual ↔ code sync",
                  "Design token management and enforcement",
                  "Real-time component preview canvas",
                  "CRDT-based collaborative visual editing",
                ].map(feature => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="text-[#00F0FF]/70 text-xs mt-0.5 shrink-0">✦</span>
                    <span className="text-sm text-white/50">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════ */
/*  [06] CUSTOMIZATION                     */
/* ═══════════════════════════════════════ */

function CustomizationSection() {
  return (
    <section className="py-32 md:py-40 bg-[#020202]">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel label="Customization" />
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] text-white">
              Make it yours.
            </h2>
            <p className="mt-6 text-lg text-white/40 leading-relaxed">
              Every aspect of Zenith is configurable. From the visual canvas layout to AI agent behavior — bend the editor to match how you think and work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Themes & UI", description: "Full VS Code theme support plus visual canvas theming. Dark, light, and custom palettes." },
              { title: "Agent Profiles", description: "Configure each AI agent's strictness, focus areas, and response format to match your team's standards." },
              { title: "Keybindings", description: "Import your VS Code keybindings or create Zenith-specific shortcuts for visual editing operations." },
              { title: "Extension Support", description: "Install extensions from the VS Code marketplace. Zenith is compatible with the full extension ecosystem." },
            ].map(item => (
              <div key={item.title} className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-white/30 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════ */
/*  [07] THE RUST ENGINE                   */
/* ═══════════════════════════════════════ */

function EngineSection() {
  const layers = [
    {
      depth: "Layer 01",
      title: "Zero-Copy AST Parser",
      description: "Parses your entire codebase into a traversable syntax tree without copying memory. Handles 10k+ files in under 4 seconds.",
      stat: "0.2s cold start",
    },
    {
      depth: "Layer 02",
      title: "Surgical Patch Compiler",
      description: "Converts visual manipulations into atomic, non-destructive code patches. Each patch targets a single AST node — never a full file rewrite.",
      stat: "0.3ms per patch",
    },
    {
      depth: "Layer 03",
      title: "CRDT Sync Bridge",
      description: "Conflict-free replicated data types ensure every connected client sees the same state. Built for real-time collaborative editing at scale.",
      stat: "140MB idle",
    },
  ];

  return (
    <section id="engine" className="py-32 md:py-40 border-t border-white/5">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionLabel label="Architecture" />
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] text-white">
              Three layers.<br />Zero compromises.
            </h2>
            <p className="mt-6 text-lg text-white/40 leading-relaxed">
              The visual engine is written entirely in Rust. No Electron performance tax, no V8 overhead. Purpose-built to treat your source code as a first-class data structure.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group p-8 rounded-2xl border border-white/5 bg-white/[0.015] hover:border-[#00F0FF]/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#00F0FF]/30 via-[#00F0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-[#00F0FF]/40 uppercase tracking-[0.25em]">{layer.depth}</span>
                  <span className="text-[11px] font-mono text-[#00F0FF]/60">{layer.stat}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{layer.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{layer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════ */
/*  [08] CODE IN ANY LANGUAGE              */
/* ═══════════════════════════════════════ */

function LanguageSupportSection() {
  const allItems = [
    // Row 1 — full opacity
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    // Row 2 — slightly faded
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
    // Row 3 — more faded
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  return (
    <section className="py-32 md:py-40 bg-[#020202]">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <SectionLabel label="Ecosystem" />
            <h2 className="text-[clamp(24px,3vw,40px)] font-bold tracking-tight leading-[1.1] text-white">
              Code in any<br />language.
            </h2>
            <p className="mt-6 text-base text-white/40 leading-relaxed">
              Full LSP support for every major language. If it compiles to a syntax tree, Zenith can patch it.
            </p>
          </div>

          <div className="lg:col-span-8 relative">
            {/* Fade mask at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020202] to-transparent z-10 pointer-events-none" />

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {allItems.map((item, i) => {
                const row = Math.floor(i / 8);
                const opacity = row === 0 ? "opacity-100" : row === 1 ? "opacity-50" : "opacity-20";
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.02 }}
                    className={`${opacity} aspect-square flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/15 hover:!opacity-100 transition-all cursor-default group p-2`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-6 h-6 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                    <span className="text-[9px] font-mono text-white/40 group-hover:text-white/80 transition-colors text-center leading-tight">
                      {item.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-4 text-center relative z-20">
              <span className="text-[11px] font-mono text-white/15">+ 40 more languages and frameworks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════ */
/*  [09] CONTRIBUTE & COMMUNITY            */
/* ═══════════════════════════════════════ */

function ContributeSection() {
  return (
    <section id="contribute" className="py-32 md:py-40 border-t border-white/5">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Narrative */}
          <div>
            <SectionLabel label="Open Source" />
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] text-white">
              From the community.<br /><span className="text-white/40">For the community.</span>
            </h2>
            <p className="mt-6 text-lg text-white/40 leading-relaxed">
              Zenith&apos;s AST patching engine, language adapters, and visual sync bridge are fully open source under MIT. We believe the best developer tools are built by developers.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "MIT", label: "License" },
                { value: "3", label: "Core modules" },
                { value: "∞", label: "Contributions welcome" },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-xl font-bold text-[#00F0FF]">{stat.value}</div>
                  <div className="text-[10px] text-white/25 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://github.com/AmanTShekar/Zenith-Extension" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.06] border border-white/10 text-white/80 text-sm font-medium hover:bg-white/[0.1] hover:border-white/20 transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg> Star on GitHub
              </a>
              <a href="/docs" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF]/80 text-sm font-medium hover:bg-[#00F0FF]/15 hover:border-[#00F0FF]/30 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg> Documentation
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { title: "AST Patching Engine", description: "The core Rust engine that parses source code into traversable syntax trees and applies surgical, non-destructive patches.", tag: "Rust · Core" },
              { title: "Language Adapters", description: "Add support for new languages and frameworks. Each adapter maps framework-specific AST nodes to Zenith's visual primitives.", tag: "TypeScript · Adapters" },
              { title: "Visual Sync Bridge", description: "The CRDT-based synchronization layer that keeps the visual canvas and source code perfectly in sync in real-time.", tag: "Rust · Sync" },
              { title: "Documentation & Guides", description: "Write tutorials, improve API docs, or create video walkthroughs. Great first contributions for new contributors.", tag: "Markdown · Docs" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-white/5 bg-white/[0.015] hover:border-[#00F0FF]/10 hover:bg-white/[0.03] transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#00F0FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <span className="text-[10px] font-mono text-[#00F0FF]/30 uppercase tracking-widest">{item.tag}</span>
                </div>
                <p className="text-sm text-white/30 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════ */
/*  [10] FINAL ROADMAP                     */
/* ═══════════════════════════════════════ */

function RoadmapSection() {
  const steps = [
    { 
      phase: "Phase 01", 
      title: "Core Architecture", 
      status: "Archived", 
      desc: "Foundation of the Zenith ecosystem.",
      milestones: [
        "Rust Sidecar & AST Engine",
        "Surgical Patch Compiler",
        "Zero-copy VFS Implementation",
        "Internal Alpha Testing"
      ]
    },
    { 
      phase: "Phase 02", 
      title: "VS Code Extension Launch", 
      status: "Live Phase", 
      active: true,
      desc: "Bringing visual design to the modern developer's existing setup.",
      milestones: [
        "Public Beta Marketplace Launch",
        "Real-time Shadow-Doc Mirroring",
        "Multi-agent AI Swarm (Surgical)",
        "Language Adapter Ecosystem"
      ]
    },
    { 
      phase: "Phase 03", 
      title: "Standalone Design OS", 
      status: "Vision Stage", 
      desc: "The ultimate goal: A high-performance spatial architectural environment.",
      milestones: [
        "Native Rust/Electron Shell",
        "Spatial Multi-document Canvas",
        "Collaborative CRDT Protocol",
        "Full Design Token Governance"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-32 md:py-48 relative overflow-hidden">
      <div className={CONTAINER}>
        <div className="text-center mb-24">
          <SectionLabel label="The Path Early Access" />
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">The Path to <span className="text-[#00F0FF]">Design OS.</span></h2>
          <p className="mt-6 text-white/30 max-w-2xl mx-auto">Our progression from a surgical extension to a world-class architectural design environment.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connection Line */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent -translate-x-1/2" />
          
          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Center Node */}
                <div className="absolute left-[31px] md:left-1/2 -translate-x-1/2 top-0 z-20">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border backdrop-blur-xl ${
                    step.active ? "bg-[#00F0FF]/10 border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,240,255,0.2)]" : "bg-white/[0.03] border-white/10"
                  }`}>
                    <span className={`text-sm font-mono font-bold ${step.active ? "text-[#00F0FF]" : "text-white/20"}`}>
                      0{i + 1}
                    </span>
                    {step.active && (
                      <div className="absolute inset-0 rounded-2xl border border-[#00F0FF] animate-pulse opacity-20" />
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 pl-20 md:pl-0">
                  <div className={`p-8 rounded-3xl border bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-white/10 ${
                   step.active ? "border-[#00F0FF]/20 shadow-[0_0_40px_rgba(0,240,255,0.05)]" : "border-white/5"
                  } ${i % 2 === 0 ? "md:mr-16 text-left md:text-right" : "md:ml-16 text-left"}`}>
                    <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                      <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">{step.phase}</span>
                      <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                        step.status === "Archived" ? "border-green-500/30 text-green-500 bg-green-500/10" : 
                        step.active ? "border-[#00F0FF]/30 text-[#00F0FF] bg-[#00F0FF]/10" : 
                        "border-white/10 text-white/20"
                      }`}>{step.status}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-sm text-white/30 mb-8 leading-relaxed">{step.desc}</p>
                    
                    <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 ${i % 2 === 0 ? "md:justify-items-end" : ""}`}>
                      {step.milestones.map((milestone) => (
                        <li key={milestone} className="flex items-center gap-2 text-[11px] text-white/40 group">
                          {i % 2 === 1 ? (
                            <>
                              <div className="w-1 h-1 rounded-full bg-[#00F0FF]/40 group-hover:bg-[#00F0FF] transition-colors" />
                              <span className="group-hover:text-white/60 transition-colors">{milestone}</span>
                            </>
                          ) : (
                            <>
                              <span className="group-hover:text-white/60 transition-colors md:order-1">{milestone}</span>
                              <div className="w-1 h-1 rounded-full bg-[#00F0FF]/40 group-hover:bg-[#00F0FF] transition-colors md:order-2" />
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty Side (Desktop) */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl pointer-events-none z-0">
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00F0FF]/5 blur-[150px] rounded-full" />
         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════ */
/*  [11] FOOTER                             */
/* ═══════════════════════════════════════ */

function Footer() {
  return (
    <footer className="py-24 border-t border-white/5 bg-[#030303] relative overflow-hidden">
      <div className={CONTAINER}>
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <img src="/zenith.svg" alt="Zenith Logo" className="w-8 h-8 pointer-events-none" />
              <span className="text-xl font-bold text-white tracking-tight">Zenith</span>
            </div>
            <p className="mt-6 text-sm text-white/20 max-w-xs leading-relaxed">
              Building the next generation of visual development tools. From surgical extensions to a full-scale Design OS.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="https://github.com/AmanTShekar/Zenith-Extension" target="_blank" className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-white/30 hover:text-[#00F0FF] hover:border-[#00F0FF]/20 transition-all">
                <Github size={18} />
              </a>
              <a href="https://amantshekar.com" target="_blank" className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-white/30 hover:text-[#00F0FF] hover:border-[#00F0FF]/20 transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h4 className="text-[10px] font-mono tracking-[0.2em] text-white/20 uppercase mb-6">Product</h4>
            <ul className="space-y-4">
              {['Extension', 'Visual Editor', 'Surgical Engine', 'Pricing'].map(link => (
                <li key={link}><a href="#" className="text-[13px] text-white/40 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[10px] font-mono tracking-[0.2em] text-white/20 uppercase mb-6">Resources</h4>
            <ul className="space-y-4">
              {['Documentation', 'Roadmap', 'GitHub', 'Changelog'].map(link => (
                <li key={link}>
                  <a href={link === 'Roadmap' ? '#roadmap' : (link === 'GitHub' ? 'https://github.com/AmanTShekar/Zenith-Extension' : '#')} className="text-[13px] text-white/40 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h4 className="text-[10px] font-mono tracking-[0.2em] text-white/20 uppercase mb-6">Social</h4>
            <ul className="space-y-4">
              {['X / Twitter', 'Discord', 'YouTube', 'LinkedIn'].map(link => (
                <li key={link}><a href="#" className="text-[13px] text-white/40 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-white/10 uppercase tracking-widest">© 2026 ZENITH PROJECT · ALL RIGHTS RESERVED</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] font-mono text-white/10 hover:text-white transition-colors uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-[10px] font-mono text-white/10 hover:text-white transition-colors uppercase tracking-widest">Terms</a>
            <p className="text-[10px] font-mono text-white/10 uppercase tracking-widest flex items-center gap-1.5 ml-4">
              Crafted with <span className="text-red-500/50 italic">spatial intent</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00F0FF]/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}

/* ═══════════════════════════════════════ */
/*  [MAIN] PAGE COMPONENT                  */
/* ═══════════════════════════════════════ */

export default function LandingPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  // Scroll to top on fresh load/reload to prevent hydration scroll jumps
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#00F0FF]/30 selection:text-white">
      <NoiseOverlay />
      <Navbar />
      
      <HeroSection />
      <LanguageTicker />
      <ExtensionShowcase />
      <VisualEditingSection />
      <WhyVisualEditing />
      <AgentModeSection />
      <BuiltOnVSCode />
      <CustomizationSection />
      <EngineSection />
      <LanguageSupportSection />
      <ContributeSection />
      <RoadmapSection />
      <Footer />
    </main>
  );
}
