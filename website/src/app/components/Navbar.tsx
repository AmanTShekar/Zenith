"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();
    const isDocs = pathname?.startsWith("/docs");

    const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
    const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                height: 64,
                backgroundColor: useTransform(backgroundOpacity, (v) => `rgba(5, 5, 5, ${v})`),
                backdropFilter: "blur(12px)",
                borderBottom: useTransform(borderOpacity, (v) => `1px solid rgba(255, 255, 255, ${v})`),
            }}
        >
            <div style={{ width: "100%", paddingLeft: "clamp(24px, 4vw, 48px)", paddingRight: "clamp(24px, 4vw, 48px)", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
                {/* Back Link — specifically at 20% from left as requested */}
                {isDocs && (
                    <div className="hidden lg:block" style={{ position: "absolute", left: "20%", zIndex: 30 }}>
                        <Link href="/" className="text-[14px] font-medium text-white/50 hover:text-white transition-colors flex items-center gap-2">
                            <span style={{ fontSize: 18 }}>←</span> Back to Home
                        </Link>
                    </div>
                )}

                {/* Logo */}
                <div className="flex items-center" style={{ zIndex: 20, position: "relative" }}>
                    <Link href={isDocs ? "/docs" : "/"} className="flex items-center gap-2 group">
                        <img src="/zenith.svg" alt="Zenith Logo" style={{ height: 24, width: "auto" }} />
                        <span style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", color: "#fff" }}>
                            Zenith
                        </span>
                        {isDocs && (
                            <>
                                <span className="mx-2 text-white/20" style={{ fontSize: 24, fontWeight: 300 }}>/</span>
                                <span style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-0.01em", color: "#fff" }}>
                                    Docs
                                </span>
                            </>
                        )}
                    </Link>
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-8" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
                    {isDocs ? (
                        <span />
                    ) : (
                        <>
                            {[
                                { n: "Extension", h: "#launching-on-vscode" },
                                { n: "Features", h: "#features" },
                                { n: "Engine", h: "#engine" },
                                { n: "Roadmap", h: "#roadmap" }
                            ].map((item) => (
                                <Link
                                    key={item.n}
                                    href={item.h}
                                    className="text-[14px] font-medium text-white/60 hover:text-white transition-all"
                                >
                                    {item.n}
                                </Link>
                            ))}
                        </>
                    )}
                </nav>

                {/* Right Side — GitHub + CTA */}
                <div className="flex items-center gap-3" style={{ zIndex: 20, position: "relative" }}>
                    {/* GitHub Link */}
                    <a
                        href="https://github.com/AmanTShekar/Zenith-Extension"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center justify-center hover:bg-white/[0.04] transition-all rounded-lg p-2"
                        title="GitHub"
                    >
                        <svg className="w-5 h-5 text-white/40 hover:text-white/70 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>

                    <a
                        href="#roadmap"
                        className={`hidden md:inline-flex items-center justify-center hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all ${isDocs ? "!hidden" : ""}`}
                        style={{ borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, color: "#fff", textDecoration: "none" }}
                    >
                        {isDocs ? (
                            null
                        ) : (
                            <><span className="text-[#00F0FF] mr-2">/</span> Notify Me on Launch</>
                        )}
                    </a>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            style={{ position: "absolute", top: 64, left: 0, right: 0, background: "#050505", borderBottom: "1px solid rgba(255,255,255,0.1)", zIndex: 50 }}
                        >
                            <div className="p-6 flex flex-col gap-6">
                                {(isDocs
                                    ? [{ n: "← HOME", h: "/" }, { n: "DOCS", h: "/docs" }]
                                    : [
                                        { n: "EXTENSION", h: "#launching-on-vscode" },
                                        { n: "FEATURES", h: "#features" },
                                        { n: "ENGINE", h: "#engine" },
                                        { n: "ROADMAP", h: "#roadmap" },
                                        { n: "CONTRIBUTE", h: "#contribute" },
                                    ]
                                ).map((item) => (
                                    <Link
                                        key={item.n}
                                        href={item.h}
                                        onClick={() => setIsOpen(false)}
                                        className="text-[12px] font-mono tracking-widest text-white/60 hover:text-[#00F0FF]"
                                    >
                                        {item.n}
                                    </Link>
                                ))}
                                <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />
                                <a
                                    href="https://github.com/AmanTShekar/Zenith-Extension"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center p-4 rounded-lg bg-white/[0.04] border border-white/10 text-[12px] font-mono text-white/80 hover:bg-white/[0.08]"
                                >
                                    GitHub →
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
