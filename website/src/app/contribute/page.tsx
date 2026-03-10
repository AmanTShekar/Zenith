"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const NoiseOverlay = dynamic(() => import("../components/NoiseOverlay"), { ssr: false });

const CONTAINER = "max-w-[1200px] mx-auto px-[clamp(24px,4vw,48px)]";

export default function ContributePage() {
    return (
        <main className="bg-[#050505] text-white min-h-screen">
            <NoiseOverlay />
            <Navbar />

            <div className="pt-32 pb-32">
                <div className={CONTAINER}>
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-[10px] font-mono text-[#00F0FF]/40 uppercase tracking-[0.3em] mb-4">Open Source</div>
                        <h1 className="text-[clamp(32px,5vw,56px)] font-bold tracking-tight leading-[1.05] text-white">
                            Contribute to Zenith.
                        </h1>
                        <p className="mt-6 text-lg text-white/40 max-w-2xl leading-relaxed">
                            Zenith is built in the open. Whether you&apos;re a systems programmer, frontend engineer, or technical writer — there&apos;s a place for you.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="https://github.com/AmanTShekar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.06] border border-white/10 text-white/80 text-sm font-medium hover:bg-white/[0.1] hover:border-white/20 transition-all">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                                View Repository
                            </a>
                            <a href="/docs" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF]/80 text-sm font-medium hover:bg-[#00F0FF]/15 hover:border-[#00F0FF]/30 transition-all">
                                Read the Docs
                            </a>
                        </div>
                    </motion.div>

                    {/* How to Contribute */}
                    <div className="mt-24">
                        <h2 className="text-2xl font-bold text-white mb-8">How to Contribute</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    step: "01",
                                    title: "Fork & Clone",
                                    desc: "Fork the Zenith repository on GitHub, then clone it to your local machine. Set up the development environment using our setup guide.",
                                    code: "git clone https://github.com/YOUR_USERNAME/zenith.git\ncd zenith && npm install",
                                },
                                {
                                    step: "02",
                                    title: "Pick an Issue",
                                    desc: "Browse our issue tracker for tasks labeled 'good first issue' or 'help wanted'. Comment on the issue to let us know you're working on it.",
                                    code: null,
                                },
                                {
                                    step: "03",
                                    title: "Make Changes",
                                    desc: "Create a feature branch, make your changes, and write tests. Follow our code style guide and ensure all existing tests pass.",
                                    code: "git checkout -b feature/my-improvement\nnpm run test",
                                },
                                {
                                    step: "04",
                                    title: "Submit a PR",
                                    desc: "Push your branch and open a Pull Request. Include a clear description of what you changed and why. We review every PR within 48 hours.",
                                    code: null,
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="p-6 rounded-2xl border border-white/5 bg-white/[0.015]"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/[0.05] flex items-center justify-center text-xs font-mono text-[#00F0FF]/60">
                                            {item.step}
                                        </div>
                                        <h3 className="text-base font-semibold text-white">{item.title}</h3>
                                    </div>
                                    <p className="text-sm text-white/35 leading-relaxed mb-4">{item.desc}</p>
                                    {item.code && (
                                        <div className="rounded-lg bg-[#0a0a0a] border border-white/5 p-3">
                                            <pre className="text-xs text-[#00F0FF]/60 font-mono whitespace-pre-wrap">{item.code}</pre>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Areas */}
                    <div className="mt-24">
                        <h2 className="text-2xl font-bold text-white mb-3">Where You Can Help</h2>
                        <p className="text-base text-white/30 mb-8 max-w-xl">Zenith is made up of several core modules. Pick the one that matches your skills.</p>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "AST Patching Engine",
                                    tag: "Rust",
                                    desc: "The core engine that parses source code into traversable syntax trees and applies surgical, non-destructive patches. Requires Rust experience.",
                                    skills: ["Rust", "Tree-sitter", "Compilers"],
                                },
                                {
                                    title: "Language Adapters",
                                    tag: "TypeScript",
                                    desc: "Adapters map framework-specific AST nodes to Zenith's visual primitives. Currently shipping React and Vue adapters — we need more.",
                                    skills: ["TypeScript", "React/Vue/Svelte", "AST"],
                                },
                                {
                                    title: "Visual Sync Bridge",
                                    tag: "Rust + TypeScript",
                                    desc: "The CRDT-based synchronization layer that keeps the visual canvas and source code perfectly in sync in real-time.",
                                    skills: ["CRDT", "WebSockets", "State sync"],
                                },
                                {
                                    title: "VS Code Extension",
                                    tag: "TypeScript",
                                    desc: "The VS Code integration layer — handling editor views, commands, keybindings, and the visual canvas webview.",
                                    skills: ["VS Code API", "TypeScript", "Webview"],
                                },
                                {
                                    title: "Documentation & Guides",
                                    tag: "Markdown",
                                    desc: "Write tutorials, improve API docs, create video walkthroughs. Great for first-time contributors who want to learn the codebase.",
                                    skills: ["Technical Writing", "Markdown", "Diagrams"],
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                                    className="group p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-[#00F0FF]/10 hover:bg-white/[0.025] transition-all relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#00F0FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                                                <span className="text-[10px] font-mono text-[#00F0FF]/30 uppercase tracking-widest">{item.tag}</span>
                                            </div>
                                            <p className="text-sm text-white/30 leading-relaxed">{item.desc}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 shrink-0">
                                            {item.skills.map(s => (
                                                <span key={s} className="text-[10px] font-mono px-2 py-1 rounded bg-white/[0.04] border border-white/5 text-white/30">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Code of Conduct & Links */}
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.015]">
                            <h3 className="text-lg font-bold text-white mb-4">Code of Conduct</h3>
                            <p className="text-sm text-white/35 leading-relaxed mb-6">
                                We are committed to providing a welcoming and inclusive experience for everyone. All contributors are expected to uphold our Code of Conduct, which promotes respect, empathy, and constructive collaboration.
                            </p>
                            <div className="text-xs text-white/20">
                                By contributing, you agree to abide by our community guidelines.
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl border border-[#00F0FF]/10 bg-[#00F0FF]/[0.02]">
                            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                            <div className="space-y-3">
                                <a href="https://github.com/AmanTShekar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/40 hover:text-[#00F0FF] transition-colors">
                                    <span className="text-[#00F0FF]/40">→</span> GitHub Repository
                                </a>
                                <a href="/docs" className="flex items-center gap-2 text-sm text-white/40 hover:text-[#00F0FF] transition-colors">
                                    <span className="text-[#00F0FF]/40">→</span> Documentation
                                </a>
                                <a href="https://amantshekar.github.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/40 hover:text-[#00F0FF] transition-colors">
                                    <span className="text-[#00F0FF]/40">→</span> Creator&apos;s Website
                                </a>
                                <Link href="/#roadmap" className="flex items-center gap-2 text-sm text-white/40 hover:text-[#00F0FF] transition-colors">
                                    <span className="text-[#00F0FF]/40">→</span> Project Roadmap
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
