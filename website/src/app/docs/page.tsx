"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const NoiseOverlay = dynamic(() => import("../components/NoiseOverlay"), { ssr: false });

/* ═══════════════════════════════════════ */
/*  SIDEBAR NAV                            */
/* ═══════════════════════════════════════ */

const sections = [
    {
        title: "Getting Started",
        items: [
            { id: "introduction", label: "Introduction" },
            { id: "installation", label: "Installation" },
            { id: "quick-start", label: "Quick Start" },
            { id: "system-requirements", label: "System Requirements" },
        ],
    },
    {
        title: "Core Concepts",
        items: [
            { id: "visual-editing", label: "Visual Editing" },
            { id: "ast-patching", label: "AST Patching" },
            { id: "bidirectional-sync", label: "Bi-directional Sync" },
            { id: "ai-agents", label: "AI Agents" },
        ],
    },
    {
        title: "Guides",
        items: [
            { id: "react-setup", label: "React Setup" },
            { id: "vue-setup", label: "Vue Setup" },
            { id: "svelte-setup", label: "Svelte Setup" },
            { id: "custom-language", label: "Custom Language Adapter" },
        ],
    },
    {
        title: "API Reference",
        items: [
            { id: "patch-engine", label: "Patch Engine" },
            { id: "crdt-bridge", label: "CRDT Bridge" },
            { id: "extension-api", label: "Extension API" },
            { id: "cli", label: "CLI" },
        ],
    },
];

/* ═══════════════════════════════════════ */
/*  DOCS CONTENT                           */
/* ═══════════════════════════════════════ */

const docsContent: Record<string, { title: string; content: React.ReactNode }> = {
    introduction: {
        title: "Introduction",
        content: (
            <div className="space-y-6">
                <p className="text-white/50 text-lg leading-relaxed">
                    Zenith is a visual code editor built on VS Code that lets you manipulate your UI by interacting with it directly. Every drag, resize, and style change maps to a precise AST patch — not a file rewrite.
                </p>
                <div className="p-6 rounded-xl border border-[#00F0FF]/10 bg-[#00F0FF]/[0.02]">
                    <h3 className="text-sm font-semibold text-[#00F0FF]/80 mb-2">What makes Zenith different?</h3>
                    <ul className="space-y-2 text-sm text-white/40">
                        <li className="flex items-start gap-2"><span className="text-[#00F0FF]/50 mt-0.5">→</span> Surgical AST patching — one visual change = one line in your diff</li>
                        <li className="flex items-start gap-2"><span className="text-[#00F0FF]/50 mt-0.5">→</span> Multi-agent AI that understands structure, style, and performance</li>
                        <li className="flex items-start gap-2"><span className="text-[#00F0FF]/50 mt-0.5">→</span> Built on VS Code — your extensions, keybindings, and themes carry over</li>
                        <li className="flex items-start gap-2"><span className="text-[#00F0FF]/50 mt-0.5">→</span> Bi-directional sync between visual canvas and source code</li>
                    </ul>
                </div>
                <h2 className="text-xl font-bold text-white mt-8">Architecture Overview</h2>
                <p className="text-white/40 leading-relaxed">
                    Zenith&apos;s core is built around three layers: the Zero-Copy AST Parser (Rust), the Surgical Patch Compiler, and the CRDT Sync Bridge. Together, they enable sub-millisecond visual-to-code translation without ever rewriting entire files.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {[
                        { layer: "Layer 01", name: "AST Parser", desc: "Parses source into traversable syntax trees" },
                        { layer: "Layer 02", name: "Patch Compiler", desc: "Converts visual actions into minimal code patches" },
                        { layer: "Layer 03", name: "CRDT Bridge", desc: "Keeps all connected clients in perfect sync" },
                    ].map(l => (
                        <div key={l.name} className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
                            <div className="text-[10px] font-mono text-[#00F0FF]/40 uppercase tracking-widest mb-2">{l.layer}</div>
                            <div className="text-sm font-semibold text-white mb-1">{l.name}</div>
                            <div className="text-xs text-white/30">{l.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    installation: {
        title: "Installation",
        content: (
            <div className="space-y-6">
                <p className="text-white/50 text-lg leading-relaxed">
                    Zenith is currently in active development and will be available soon. Here&apos;s how installation will work when it launches.
                </p>
                <h2 className="text-xl font-bold text-white">Package Managers</h2>
                <div className="space-y-3">
                    <div className="rounded-lg bg-[#0a0a0a] border border-white/5 overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                            <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider">macOS / Linux</span>
                        </div>
                        <pre className="p-4 text-sm text-[#00F0FF]/70 font-mono overflow-x-auto">
                            <code>curl -fsSL https://zenith.dev/install.sh | sh</code>
                        </pre>
                    </div>
                    <div className="rounded-lg bg-[#0a0a0a] border border-white/5 overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                            <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider">Windows</span>
                        </div>
                        <pre className="p-4 text-sm text-[#00F0FF]/70 font-mono overflow-x-auto">
                            <code>winget install zenith-ide</code>
                        </pre>
                    </div>
                    <div className="rounded-lg bg-[#0a0a0a] border border-white/5 overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                            <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider">npm (VS Code Extension)</span>
                        </div>
                        <pre className="p-4 text-sm text-[#00F0FF]/70 font-mono overflow-x-auto">
                            <code>code --install-extension zenith.visual-editor</code>
                        </pre>
                    </div>
                </div>
                <h2 className="text-xl font-bold text-white mt-8">System Requirements</h2>
                <div className="overflow-hidden rounded-lg border border-white/5">
                    <table className="w-full text-sm">
                        <thead><tr className="border-b border-white/5 bg-white/[0.02]">
                            <th className="text-left p-3 text-xs text-white/30 font-mono uppercase tracking-wider">Requirement</th>
                            <th className="text-left p-3 text-xs text-white/30 font-mono uppercase tracking-wider">Minimum</th>
                            <th className="text-left p-3 text-xs text-white/30 font-mono uppercase tracking-wider">Recommended</th>
                        </tr></thead>
                        <tbody className="text-white/40">
                            <tr className="border-b border-white/5"><td className="p-3">OS</td><td className="p-3">Windows 10 / macOS 12 / Ubuntu 20</td><td className="p-3">Latest stable</td></tr>
                            <tr className="border-b border-white/5"><td className="p-3">RAM</td><td className="p-3">4 GB</td><td className="p-3">8 GB+</td></tr>
                            <tr className="border-b border-white/5"><td className="p-3">Storage</td><td className="p-3">500 MB</td><td className="p-3">1 GB</td></tr>
                            <tr><td className="p-3">Node.js</td><td className="p-3">18.x</td><td className="p-3">20.x+</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ),
    },
    "quick-start": {
        title: "Quick Start",
        content: (
            <div className="space-y-6">
                <p className="text-white/50 text-lg leading-relaxed">
                    Get up and running with Zenith in under 5 minutes.
                </p>
                <div className="space-y-8">
                    {[
                        { step: "01", title: "Install Zenith", code: "curl -fsSL https://zenith.dev/install.sh | sh" },
                        { step: "02", title: "Open your project", code: "zenith open ./my-react-app" },
                        { step: "03", title: "Start visual editing", desc: "Click any component in the preview canvas to select it. Drag to reposition, resize handles to adjust dimensions, and use the style panel to modify CSS properties — all mapped to precise AST patches in real-time." },
                    ].map(s => (
                        <div key={s.step} className="flex gap-6">
                            <div className="shrink-0 w-10 h-10 rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/[0.05] flex items-center justify-center text-sm font-mono text-[#00F0FF]/60">
                                {s.step}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                                {s.code && (
                                    <div className="rounded-lg bg-[#0a0a0a] border border-white/5 p-4">
                                        <code className="text-sm text-[#00F0FF]/70 font-mono">{s.code}</code>
                                    </div>
                                )}
                                {s.desc && <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    "visual-editing": {
        title: "Visual Editing",
        content: (
            <div className="space-y-6">
                <p className="text-white/50 text-lg leading-relaxed">
                    Visual editing is Zenith&apos;s core feature. Instead of writing CSS by hand and switching between code and browser, you directly interact with the rendered output.
                </p>
                <h2 className="text-xl font-bold text-white">How it works</h2>
                <div className="space-y-4">
                    {[
                        { title: "Select", desc: "Click any component in the visual canvas to select it. Zenith highlights the corresponding AST node in your source code." },
                        { title: "Manipulate", desc: "Drag to move, use handles to resize, or modify properties in the style panel. Every action is atomic and reversible." },
                        { title: "Patch", desc: "Zenith computes the minimal AST diff and applies a surgical patch. One visual change = one line in your git diff." },
                        { title: "Sync", desc: "Changes propagate instantly via CRDT to all connected clients. Edit in the canvas or in code — both stay in perfect sync." },
                    ].map((item, i) => (
                        <div key={item.title} className="flex gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.015]">
                            <div className="text-[#00F0FF]/40 font-mono text-sm shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</div>
                            <div>
                                <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                                <div className="text-sm text-white/35 leading-relaxed">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    "ast-patching": {
        title: "AST Patching",
        content: (
            <div className="space-y-6">
                <p className="text-white/50 text-lg leading-relaxed">
                    AST (Abstract Syntax Tree) patching is what makes Zenith surgical. Instead of rewriting files, Zenith identifies the exact node in your syntax tree that needs to change and modifies only that node.
                </p>
                <h2 className="text-xl font-bold text-white">Traditional vs Zenith</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border border-white/5 bg-white/[0.01]">
                        <div className="text-[10px] font-mono text-red-400/40 uppercase tracking-widest mb-3">Traditional</div>
                        <pre className="text-xs text-white/30 font-mono leading-relaxed whitespace-pre-wrap">{`// Entire file rewritten
// 47 lines changed
// Formatting lost
// Import order shuffled`}</pre>
                    </div>
                    <div className="p-4 rounded-lg border border-[#00F0FF]/15 bg-[#00F0FF]/[0.02]">
                        <div className="text-[10px] font-mono text-[#00F0FF]/40 uppercase tracking-widest mb-3">Zenith AST Patch</div>
                        <pre className="text-xs text-[#00F0FF]/50 font-mono leading-relaxed whitespace-pre-wrap">{`// 1 node targeted
// 1 line changed
// Formatting preserved
// Zero side effects`}</pre>
                    </div>
                </div>
                <h2 className="text-xl font-bold text-white mt-8">Patch Lifecycle</h2>
                <p className="text-white/40 leading-relaxed">
                    When you make a visual change, Zenith&apos;s patch compiler runs through a 4-step pipeline: Parse → Locate → Diff → Apply. The entire process completes in under 0.3 milliseconds.
                </p>
            </div>
        ),
    },
};

// Fallback for sections that don't have full content yet
const defaultContent = (title: string) => ({
    title,
    content: (
        <div className="space-y-6">
            <p className="text-white/50 text-lg leading-relaxed">
                Documentation for <span className="text-white/70 font-medium">{title}</span> is coming soon. This section will be available when Zenith launches.
            </p>
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                <p className="text-sm text-white/30">Want to help write this? <a href="/#contribute" className="text-[#00F0FF]/60 hover:text-[#00F0FF] transition-colors">Contribute to the docs →</a></p>
            </div>
        </div>
    ),
});

/* ═══════════════════════════════════════ */
/*  DOCS PAGE                              */
/* ═══════════════════════════════════════ */

export default function DocsPage() {
    const [activeSection, setActiveSection] = useState("introduction");
    const currentDoc = docsContent[activeSection] || defaultContent(
        sections.flatMap(s => s.items).find(i => i.id === activeSection)?.label || activeSection
    );

    return (
        <main className="bg-[#050505] text-white min-h-screen">
            <NoiseOverlay />
            <Navbar />

            <div className="pt-24 flex min-h-screen">
                {/* Sidebar */}
                <aside className="hidden lg:block w-64 shrink-0 border-r border-white/5 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto px-6 py-8">
                    <nav className="space-y-8">
                        {sections.map(section => (
                            <div key={section.title}>
                                <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mb-3">{section.title}</div>
                                <div className="space-y-1">
                                    {section.items.map(item => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveSection(item.id)}
                                            className={`block w-full text-left px-3 py-1.5 rounded-md text-sm transition-all ${activeSection === item.id
                                                ? "text-[#00F0FF] bg-[#00F0FF]/[0.06] border-l-2 border-[#00F0FF]/40"
                                                : "text-white/35 hover:text-white/60 hover:bg-white/[0.03]"
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Content */}
                <div className="flex-1 max-w-3xl mx-auto px-6 md:px-12 py-8 pb-32">
                    {/* Mobile nav */}
                    <div className="lg:hidden mb-8">
                        <select
                            value={activeSection}
                            onChange={e => setActiveSection(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white text-sm outline-none"
                        >
                            {sections.map(section =>
                                section.items.map(item => (
                                    <option key={item.id} value={item.id}>{section.title} → {item.label}</option>
                                ))
                            )}
                        </select>
                    </div>

                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h1 className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight text-white mb-8">
                            {currentDoc.title}
                        </h1>
                        {currentDoc.content}
                    </motion.div>

                    {/* Navigation */}
                    <div className="mt-16 pt-8 border-t border-white/5 flex justify-between">
                        {(() => {
                            const allItems = sections.flatMap(s => s.items);
                            const currentIndex = allItems.findIndex(i => i.id === activeSection);
                            const prev = currentIndex > 0 ? allItems[currentIndex - 1] : null;
                            const next = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;
                            return (
                                <>
                                    {prev ? (
                                        <button onClick={() => setActiveSection(prev.id)} className="text-sm text-white/30 hover:text-white/60 transition-colors">
                                            ← {prev.label}
                                        </button>
                                    ) : <div />}
                                    {next ? (
                                        <button onClick={() => setActiveSection(next.id)} className="text-sm text-white/30 hover:text-white/60 transition-colors">
                                            {next.label} →
                                        </button>
                                    ) : <div />}
                                </>
                            );
                        })()}
                    </div>
                </div>
            </div>
        </main>
    );
}
