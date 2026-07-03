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
  Terminal,
  ShieldCheck
} from "lucide-react";

const NoiseOverlay = dynamic(() => import("./components/NoiseOverlay"), { ssr: false });
const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });



/* ═══════════════════════════════════════ */
/*  CONSTANTS                              */
/* ═══════════════════════════════════════ */

const CONTAINER = "max-w-[1200px] mx-auto px-6 md:px-12 w-full";


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
          <Badge>ZENITH OPEN SOURCE TEAM</Badge>

          <h1 className="mt-8 text-[clamp(40px,7vw,84px)] font-bold tracking-tight leading-[0.95] text-white">
            Building the Future of <br />
            <span className="text-[#00F0FF]">Developer Tools.</span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed">
            We are an open-source collective dedicated to creating high-performance, spatial architectural environments and tools for the modern developer.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#products" className="inline-flex items-center gap-3 px-8 py-4 bg-[#00F0FF] text-black font-semibold text-sm tracking-wide rounded-lg hover:bg-[#00D4E0] transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]">
               Explore Our Products
            </a>
            <a href="https://github.com/AmanTShekar" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-white/70 font-medium text-sm tracking-wide rounded-lg hover:bg-white/5 transition-colors group">
              Join the Community <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
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

function TeamMissionSection() {
  return (
    <section className="py-32 md:py-40 bg-[#020202]">
      <div className={CONTAINER}>
        <div className="text-center mb-20">
          <SectionLabel label="Our Philosophy" />
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold tracking-tight leading-[1.1] text-white">
            We believe tools should <br /><span className="text-[#00F0FF]">adapt to you.</span>
          </h2>
          <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            As the Zenith Open Source Team, our core mission is to democratize high-performance development tools. We are a collective of engineers, designers, and community contributors united by a shared belief: that the foundations of modern architecture should be open, transparent, and built together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Transparent & Open Source", desc: "We build our core infrastructure in public. Whether it's the AST parsers, local daemon, or headless CMS logic, the source is open for you to audit, fork, and self-host." },
            { title: "Non-Destructive by Design", desc: "Code generation shouldn't ruin your git history. Our tools parse your AST, inject only what's necessary, and leave your formatting and comments entirely untouched." },
            { title: "Developer-Driven Roadmap", desc: "We don't build features in a vacuum. The roadmap is dictated by actual pain points in our issue trackers, driven directly by developers relying on Zenith in production." },
          ].map(item => (
            <div key={item.title} className="p-8 rounded-2xl border border-white/5 bg-white/[0.015] hover:border-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#00F0FF]/10 flex items-center justify-center mb-6">
                <Sparkles size={18} className="text-[#00F0FF]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProductSpec { label: string; value: string; }
interface Product { id: string; title: string; description: string; badge: string; image: string; docsLink: string; githubLink: string; specs: ProductSpec[]; features: string[]; }

function ProductCard({ product, className }: { product: Product, className?: string }) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div className={`relative [perspective:2000px] h-[450px] md:h-[400px] w-full ${className || ''}`}>
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="w-full h-full [transform-style:preserve-3d] relative"
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.04] to-[#0a0a0a] overflow-hidden flex flex-col md:flex-row hover:border-white/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)] transition-all duration-500 shadow-2xl group backdrop-blur-xl">
          {/* Image Background Element */}
          <div className="absolute top-0 right-0 w-full md:w-[60%] h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 origin-right">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent md:bg-gradient-to-r md:from-[#0a0a0a] md:via-[#0a0a0a]/40 md:to-transparent z-10" />
            <Image src={product.image} alt={product.title} fill className="object-cover object-right-top" />
          </div>

          <div className="p-8 md:p-12 flex flex-col h-full z-20 relative w-full md:w-2/3">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[10px] font-mono tracking-widest text-[#00F0FF]">{product.badge}</span>
            </div>
            
            <h3 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-tighter leading-[1.1] mb-4 drop-shadow-sm">{product.title}</h3>
            <p className="text-sm md:text-base text-white/40 leading-relaxed font-light mb-8 max-w-md">
              {product.description}
            </p>
            
            {/* Buttons Below */}
            <div className="flex flex-wrap gap-3 mt-auto">
              <a href={product.docsLink} className="px-5 py-2.5 rounded-lg bg-white/5 text-white text-xs font-semibold hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2">
                <Globe size={14} /> Docs
              </a>
              <a href={product.githubLink} className="px-5 py-2.5 rounded-lg bg-white/5 text-white text-xs font-semibold hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2">
                <Github size={14} /> GitHub
              </a>
              <button onClick={() => setIsFlipped(true)} className="px-5 py-2.5 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF] text-xs font-bold hover:bg-[#00F0FF]/20 transition-colors border border-[#00F0FF]/20 flex items-center gap-2 group/btn">
                Tech Specs <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg border border-[#00F0FF]/40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00F0FF]/15 via-[#050505] to-[#050505] overflow-hidden flex flex-col p-8 md:p-12 shadow-[0_0_50px_rgba(0,240,255,0.15)]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div className="flex flex-wrap items-baseline gap-4">
              <h3 className="text-3xl font-bold text-white tracking-tighter">Technical Architecture</h3>
              <p className="text-xs text-[#00F0FF] font-mono tracking-widest uppercase">{product.title} {"//"} SYSTEM SCHEMATIC</p>
            </div>
            <button onClick={() => setIsFlipped(false)} className="px-4 py-2 rounded-lg bg-white/5 flex items-center gap-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors border border-white/10 text-xs font-semibold">
              <ChevronRight size={14} className="rotate-180" /> Back to Overview
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 flex-1 overflow-y-auto pr-2">
             {/* Left Col: Specs Grid */}
             <div className="flex-1">
               <h4 className="text-xs text-white/30 tracking-widest uppercase mb-4 font-bold flex items-center gap-2"><Zap size={14} /> Core Specifications</h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {product.specs.map((spec: ProductSpec, i: number) => (
                   <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-2">
                     <span className="text-white/40 text-[10px] tracking-widest uppercase font-mono">{spec.label}</span>
                     <span className="text-[#00F0FF] text-sm font-semibold">{spec.value}</span>
                   </div>
                 ))}
               </div>
             </div>
             
             {/* Right Col: Capabilities */}
             <div className="flex-1 md:border-l md:border-white/10 md:pl-12">
               <h4 className="text-xs text-white/30 tracking-widest uppercase mb-4 font-bold flex items-center gap-2"><ShieldCheck size={14} /> System Capabilities</h4>
               <ul className="space-y-3">
                 {product.features.map((feature: string, i: number) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                     <ShieldCheck size={16} className="text-[#00F0FF] shrink-0 mt-0.5" />
                     <span>{feature}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
          
          {/* Footer removed per user request */}
        </div>
      </motion.div>
    </div>
  );
}

function ProductLineupSection() {
  const products = [
    {
      id: "cms",
      title: "Open CMS",
      description: "A headless, spatial content management system designed for maximum flexibility. Built on our core Rust engines for zero-latency content delivery.",
      badge: "BETA",
      image: "/mockups/cms.png",
      docsLink: "/docs#cms",
      githubLink: "https://github.com/AmanTShekar",
      specs: [
        { label: "Core Engine", value: "Rust / Tokio" },
        { label: "Data Layer", value: "PostgreSQL + Redis" },
        { label: "Protocol", value: "GraphQL & gRPC" },
        { label: "Deployment", value: "Docker / K8s" }
      ],
      features: [
        "Real-time gRPC synchronization",
        "Headless spatial architecture",
        "Zero-latency content delivery",
        "Version-controlled schema"
      ]
    },
    {
      id: "visual-editor",
      title: "Visual Editor",
      description: "Our flagship surgical code bridge. Manipulate your UI visually while Zenith's AST compiler writes precise, non-destructive code patches in real-time.",
      badge: "BETA",
      image: "/mockups/editor.png",
      docsLink: "/docs#visual-editor",
      githubLink: "https://github.com/AmanTShekar",
      specs: [
        { label: "Compiler", value: "SWC AST Parser" },
        { label: "Framework", value: "React + Tailwind" },
        { label: "Sync Engine", value: "WebSockets" },
        { label: "State", value: "Zustand" }
      ],
      features: [
        "Non-destructive AST injection",
        "Bidirectional code sync",
        "Drag & drop component layout",
        "React & Tailwind native"
      ]
    },
    {
      id: "terminal-buddy",
      title: "Terminal Buddy",
      description: "An AI-powered terminal assistant integrated directly into VS Code. It understands your local environment and runs diagnostics.",
      badge: "TESTING",
      image: "/mockups/terminal.png",
      docsLink: "/docs#terminal-buddy",
      githubLink: "https://github.com/AmanTShekar",
      specs: [
        { label: "Integration", value: "VS Code API" },
        { label: "AI Model", value: "Local LLM Fallback" },
        { label: "Environment", value: "Node.js Core" },
        { label: "Telemetry", value: "Opt-in only" }
      ],
      features: [
        "Context-aware error resolution",
        "Local LLM fallback support",
        "Cross-platform execution",
        "Seamless IDE integration"
      ]
    }
  ];

  return (
    <section id="products" className="py-32 md:py-40 relative z-10 border-t border-white/5 bg-[#020202]">
      <div className={CONTAINER}>
        <div className="text-center mb-24">
          <SectionLabel label="Our Portfolio" />
          <h2 className="text-[clamp(40px,6vw,80px)] font-bold text-white tracking-tighter leading-[1]">
            The Zenith <br className="hidden md:block" />
            <span className="text-[#00F0FF]">Ecosystem.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <ProductCard product={products[0]} className="w-full" />
          <ProductCard product={products[1]} className="w-full" />
          <ProductCard product={products[2]} className="w-full" />
        </div>
      </div>
    </section>
  );
}function LanguageSupportSection() {
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
            <h2 className="text-[clamp(32px,5vw,56px)] font-bold text-white tracking-tight mt-6 leading-[1.1]">
              Universal<br />Compatibility.
            </h2>
            <p className="mt-6 text-white/40 max-w-lg text-lg leading-relaxed">
              Our tools are built to integrate seamlessly with your existing stack. From the CMS to the Visual Editor, we support every major framework and language.
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
                { value: "MIT / Apache", label: "Dual Licensed" },
                { value: "Global", label: "Community" },
                { value: "Open", label: "Governance" },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#00F0FF]">{stat.value}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest mt-2">{stat.label}</div>
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
              { title: "Core Infrastructure", description: "Contribute to the high-performance Rust daemons and CRDT engines powering our headless CMS and visual tools.", tag: "Rust · Systems" },
              { title: "Ecosystem Integrations", description: "Build plugins for Terminal Buddy, author new framework adapters, or expand our VS Code extension capabilities.", tag: "TypeScript · Tooling" },
              { title: "Design Systems & UI", description: "Improve the visual primitives, React components, and glassmorphic design language used across our entire portfolio.", tag: "React · Design" },
              { title: "Community & Education", description: "Write tutorials, expand our architectural schemas, or share Zenith best practices with your local developer group.", tag: "Markdown · Advocacy" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-white/20 hover:bg-white/[0.04] transition-all relative overflow-hidden shadow-lg"
              >
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#00F0FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                  <span className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest bg-[#00F0FF]/10 px-2 py-1 rounded">{item.tag}</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const steps = [
    { 
      phase: "Released", 
      title: "Open CMS Core", 
      status: "Stable v1.0", 
      desc: "The foundation of our ecosystem. A high-performance, spatial headless CMS built entirely in Rust for zero-latency data delivery.",
      features: ["Rust Daemons", "GraphQL API", "PostgreSQL"],
    },
    { 
      phase: "Current", 
      title: "Visual Editor Bridge", 
      status: "Public Beta", 
      active: true,
      desc: "Our flagship code bridge. Experience seamless bidirectional synchronization between your visual design canvas and raw source code.",
      features: ["SWC AST Parser", "Real-time Sync", "React Native"],
    },
    { 
      phase: "Upcoming", 
      title: "Terminal Buddy AI", 
      status: "Alpha", 
      desc: "An AI-powered terminal assistant integrated directly into VS Code to automatically diagnose and resolve local build environment errors.",
      features: ["Local LLMs", "VS Code Ext", "Context Aware"],
    },
    { 
      phase: "Vision", 
      title: "Zenith OS Environment", 
      status: "Research", 
      desc: "The final frontier: unifying all our open-source tools into a standalone, ultra-fast architectural desktop environment for teams.",
      features: ["Native Shell", "Unified UI", "Multiplayer Sync"],
    }
  ];

  return (
    <section id="roadmap" className="py-32 md:py-48 relative overflow-hidden bg-[#020202]">
      <div className={CONTAINER}>
        <div className="text-center mb-24 relative z-10">
          <SectionLabel label="Development Roadmap" />
          <h2 className="text-[clamp(40px,6vw,80px)] font-bold text-white tracking-tighter leading-[1]">
            Building in <br className="hidden md:block" />
            <span className="text-[#00F0FF]">Public.</span>
          </h2>
          <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            A transparent look at our development pipeline. See what we&apos;ve shipped, what we&apos;re actively building, and where Zenith is heading next.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connection Line */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
          
          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={"relative flex flex-col md:flex-row gap-12 " + (i % 2 === 1 ? "md:flex-row-reverse" : "")}
              >
                {/* Center Node */}
                <div className="absolute left-[31px] md:left-1/2 -translate-x-1/2 top-0 z-20">
                  <div className={"w-16 h-16 rounded-full flex items-center justify-center border " + (
                    step.active ? "bg-[#00F0FF]/10 border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,240,255,0.2)]" : "bg-[#020202] border-white/10"
                  )}>
                    <span className={"text-sm font-mono font-bold " + (step.active ? "text-[#00F0FF]" : "text-white/20")}>
                      0{i + 1}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 pl-20 md:pl-0">
                  <div className={"group p-8 rounded-2xl border bg-white/[0.015] hover:border-white/10 transition-colors " + (
                   step.active ? "border-[#00F0FF]/20" : "border-white/5"
                  ) + " " + (i % 2 === 0 ? "md:mr-16 text-left md:text-right" : "md:ml-16 text-left")}>
                    <div className={"flex items-center gap-3 mb-4 " + (i % 2 === 0 ? "md:justify-end" : "justify-start")}>
                      <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">{step.phase}</span>
                      <span className={"text-[9px] font-mono px-2 py-0.5 rounded-full border " + (
                        step.status.includes("Stable") ? "border-green-500/30 text-green-500 bg-green-500/10" : 
                        step.active ? "border-[#00F0FF]/30 text-[#00F0FF] bg-[#00F0FF]/10" : 
                        "border-white/10 text-white/20"
                      )}>{step.status}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-sm text-white/40 mb-6 leading-relaxed">{step.desc}</p>
                    
                    <div className={"flex flex-wrap gap-2 " + (i % 2 === 0 ? "md:justify-end" : "justify-start")}>
                      {step.features.map((feature) => (
                        <span key={feature} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-white/40 group-hover:border-white/20 transition-colors">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Side (Desktop) */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
              Democratizing high-performance architectural environments. A collective of engineers and designers building the Zenith open-source ecosystem.
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
            <h4 className="text-[10px] font-mono tracking-[0.2em] text-white/20 uppercase mb-6">Products</h4>
            <ul className="space-y-4">
              {['Open CMS Core', 'Visual Editor Bridge', 'Terminal Buddy AI', 'Zenith OS Environment'].map(link => (
                <li key={link}><a href="#products" className="text-[13px] text-white/40 hover:text-white transition-colors">{link}</a></li>
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
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-[#00F0FF]/30">
      <Navbar />
      <HeroSection />
      <TeamMissionSection />
      <ProductLineupSection />
      <LanguageSupportSection />
      <ContributeSection />
      <RoadmapSection />
      <Footer />
    </main>
  );
}