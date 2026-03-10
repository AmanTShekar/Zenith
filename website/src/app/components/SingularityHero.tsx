"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileCode2, Layers, GitBranch, Terminal, Palette, Cpu } from "lucide-react";

const sidebarItems = [
    { icon: FileCode2, label: "Explorer" },
    { icon: Layers, label: "Components" },
    { icon: GitBranch, label: "Source" },
    { icon: Terminal, label: "Terminal" },
    { icon: Palette, label: "Themes" },
    { icon: Cpu, label: "AI Agent" },
];

const codeLines = [
    { indent: 0, text: 'export default function App() {', color: "text-white/70" },
    { indent: 1, text: 'return (', color: "text-white/50" },
    { indent: 2, text: '<main className="flex min-h-screen">', color: "text-[#00F0FF]/80" },
    { indent: 3, text: '<Sidebar />', color: "text-white/60" },
    { indent: 3, text: '<Canvas>', color: "text-white/60" },
    { indent: 4, text: '<Component id="hero" />', color: "text-[#00F0FF]/60" },
    { indent: 4, text: '<Component id="features" />', color: "text-[#00F0FF]/60" },
    { indent: 3, text: '</Canvas>', color: "text-white/60" },
    { indent: 2, text: '</main>', color: "text-white/50" },
    { indent: 1, text: ')', color: "text-white/50" },
    { indent: 0, text: '}', color: "text-white/70" },
];

export default function SingularityHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Synchronized for h-[120vh] parent
    const dotScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 30, 80]);
    const dotBorderRadius = useTransform(scrollYProgress, [0, 0.3, 0.6], ["50%", "20%", "0px"]);
    const dotWidth = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.8], ["2px", "6px", "40vw", "100vw"]);
    const dotHeight = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.8], ["2px", "6px", "30vh", "100vh"]);
    const dotBg = useTransform(
        scrollYProgress,
        [0, 0.1, 0.3, 0.8],
        ["rgba(0,240,255,0)", "rgba(0,240,255,0.2)", "rgba(255,255,255,0.06)", "rgba(255,255,255,0.03)"]
    );
    const contentOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -40]);
    const subtitleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const borderOpacity = useTransform(scrollYProgress,
        [0.4, 0.8],
        ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]
    );
    const glowOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.5], [0, 0.6, 0.3, 0])
    const glowScale = useTransform(scrollYProgress, [0, 0.1, 0.3], [0.5, 1, 0.8]);

    const memoizedCodeLines = useMemo(() => codeLines, []);
    const memoizedSidebarItems = useMemo(() => sidebarItems, []);

    return (
        <section ref={containerRef} className="relative h-[120vh]">
            {/* Sticky container */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Glow ring around singularity point */}
                <motion.div
                    className="absolute w-[80px] h-[80px] rounded-full gpu-accelerated pointer-events-none"
                    style={{
                        opacity: glowOpacity,
                        scale: glowScale,
                        background: "radial-gradient(circle, rgba(0,240,255,0.2) 0%, rgba(0,240,255,0.05) 40%, transparent 70%)",
                        filter: "blur(20px)",
                    }}
                />

                {/* The Singularity Point → IDE Workspace morph */}
                <motion.div
                    className="gpu-accelerated relative flex overflow-hidden"
                    style={{
                        width: dotWidth,
                        height: dotHeight,
                        borderRadius: dotBorderRadius,
                        backgroundColor: dotBg,
                        borderColor: borderOpacity,
                        borderWidth: 1,
                        borderStyle: "solid",
                    }}
                >
                    {/* IDE Workspace Content — fades in at ~60% scroll */}
                    <motion.div
                        className="absolute inset-0 flex"
                        style={{ opacity: contentOpacity }}
                    >
                        {/* Glassmorphic Sidebar */}
                        <div
                            className="w-[52px] h-full flex flex-col items-center py-4 gap-4 gpu-blur shrink-0"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.04)",
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                                borderRight: "1px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            {memoizedSidebarItems.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08, duration: 0.3 }}
                                    whileHover={{
                                        backgroundColor: "rgba(0,240,255,0.1)",
                                    }}
                                    style={{
                                        backgroundColor: i === 0 ? "rgba(0,240,255,0.08)" : "transparent",
                                    }}
                                >
                                    <item.icon
                                        size={16}
                                        className={i === 0 ? "text-[#00F0FF]" : "text-white/30"}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Live Canvas Area */}
                        <div className="flex-1 flex flex-col">
                            {/* Tab Bar */}
                            <div
                                className="h-9 flex items-center px-3 gap-2 shrink-0"
                                style={{
                                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                                    backgroundColor: "rgba(255,255,255,0.02)",
                                }}
                            >
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono"
                                    style={{
                                        backgroundColor: "rgba(0,240,255,0.06)",
                                        color: "#00F0FF",
                                        border: "1px solid rgba(0,240,255,0.12)",
                                    }}
                                >
                                    <FileCode2 size={11} />
                                    page.tsx
                                </div>
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-white/25">
                                    <Layers size={11} />
                                    layout.tsx
                                </div>
                            </div>

                            {/* Code Editor Lines */}
                            <div className="flex-1 p-4 font-mono text-[11px] leading-[1.75] overflow-hidden">
                                {memoizedCodeLines.map((line, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-center"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: i * 0.05, duration: 0.3 }}
                                    >
                                        <span className="text-white/15 w-6 text-right mr-4 select-none text-[10px]">
                                            {i + 1}
                                        </span>
                                        <span
                                            className={`${line.color}`}
                                            style={{ paddingLeft: `${line.indent * 16}px` }}
                                        >
                                            {line.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Status Bar */}
                            <div
                                className="h-6 flex items-center justify-between px-3 text-[10px] font-mono shrink-0"
                                style={{
                                    borderTop: "1px solid rgba(255,255,255,0.06)",
                                    backgroundColor: "rgba(0,240,255,0.03)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-[#00F0FF]/70">● Zenith Agent Active</span>
                                    <span className="text-white/20">TypeScript React</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/20">
                                    <span>UTF-8</span>
                                    <span>Ln 1, Col 1</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
