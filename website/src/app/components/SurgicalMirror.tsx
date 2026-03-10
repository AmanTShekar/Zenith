"use client";

import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, Code2, Sparkles } from "lucide-react";
import { useSurgicalCodeBridge, type CodePatchValues } from "../hooks/useSurgicalCodeBridge";

interface SliderControlProps {
    label: string;
    value: number;
    min: number;
    max: number;
    unit: string;
    onChange: (v: number) => void;
}

function SliderControl({ label, value, min, max, unit, onChange }: SliderControlProps) {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider">
                    {label}
                </span>
                <span className="text-[12px] font-mono text-[#00F0FF] tabular-nums">
                    {value}{unit}
                </span>
            </div>
            <div className="relative h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                <motion.div
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{
                        width: `${percentage}%`,
                        background: "linear-gradient(90deg, rgba(0,240,255,0.3), rgba(0,240,255,0.7))",
                    }}
                    layout
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
            </div>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full h-6 opacity-0 cursor-pointer absolute"
                style={{ top: 0, left: 0, position: "relative", marginTop: "-22px" }}
            />
        </div>
    );
}

// Render a single code line with optional cyan pulse on changed tokens
function CodeLine({
    lineText,
    lineNumber,
    isChanged,
    changeKey,
}: {
    lineText: string;
    lineNumber: number;
    isChanged: boolean;
    changeKey: string;
}) {
    return (
        <div className="flex items-start leading-[1.8]">
            <span className="text-white/15 w-7 text-right mr-4 select-none text-[10px] leading-[1.8] shrink-0">
                {lineNumber}
            </span>
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={changeKey}
                    className={`text-[11px] ${isChanged ? "cyan-pulse" : "text-white/70"}`}
                    initial={isChanged ? { scale: 1.02, opacity: 0.8 } : false}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    layout
                >
                    {lineText}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}

export default function SurgicalMirror() {
    const { patchCode, initialResult } = useSurgicalCodeBridge();

    const [values, setValues] = useState<CodePatchValues>({
        padding: 24,
        borderRadius: 12,
        opacity: 100,
    });

    const [result, setResult] = useState(initialResult);
    const [changedSet, setChangedSet] = useState<Set<number>>(new Set());
    const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

    const handleChange = useCallback(
        (key: keyof CodePatchValues) => (v: number) => {
            const newValues = { ...values, [key]: v };
            setValues(newValues);

            const patched = patchCode(newValues);
            setResult(patched);
            setChangedSet(new Set(patched.changedLines));

            // Clear the highlight after animation completes
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setChangedSet(new Set());
            }, 1200);
        },
        [values, patchCode]
    );

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const codeLines = useMemo(() => result.code.split("\n"), [result.code]);

    // Live preview style derived from slider values
    const previewStyle = useMemo(
        () => ({
            padding: `${values.padding}px`,
            borderRadius: `${values.borderRadius}px`,
            opacity: values.opacity / 100,
        }),
        [values]
    );

    return (
        <div className="w-full flex flex-col bg-[#050505] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
            {/* Demo Top Bar */}
            <div
                className="flex items-center justify-between px-4 py-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#FF5F56]/40" />
                        <div className="w-2 h-2 rounded-full bg-[#FFBD2E]/40" />
                        <div className="w-2 h-2 rounded-full bg-[#27C93F]/40" />
                    </div>
                    <span className="text-white/20 text-[10px] font-mono ml-4 uppercase tracking-[0.2em]">
                        zenith_patcher.dev
                    </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#00F0FF]/50 uppercase tracking-widest">
                    <Sparkles size={10} />
                    AST_SYNC_ACTIVE
                </div>
            </div>

            {/* Split Pane */}
            <div className="flex flex-col lg:flex-row min-h-[480px]">
                {/* Left: Visual Controls + Preview */}
                <div
                    className="w-full lg:w-[260px] p-6 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col gap-6 bg-white/[0.01]"
                >
                    <div className="flex flex-col gap-6">
                        <SliderControl
                            label="Padding"
                            value={values.padding}
                            min={0}
                            max={64}
                            unit="px"
                            onChange={handleChange("padding")}
                        />
                        <SliderControl
                            label="Radius"
                            value={values.borderRadius}
                            min={0}
                            max={32}
                            unit="px"
                            onChange={handleChange("borderRadius")}
                        />
                        <SliderControl
                            label="Opacity"
                            value={values.opacity}
                            min={0}
                            max={100}
                            unit="%"
                            onChange={handleChange("opacity")}
                        />
                    </div>

                    {/* Result Context */}
                    <div className="mt-auto pt-6 border-t border-white/5">
                        <div
                            className="p-4 rounded-xl bg-[#00F0FF]/[0.02] border border-[#00F0FF]/10 flex items-center justify-center min-h-[120px]"
                        >
                            <motion.div
                                className="w-full h-full flex items-center justify-center text-center backdrop-blur-md"
                                style={{
                                    ...previewStyle,
                                    backgroundColor: "rgba(0,240,255,0.05)",
                                    border: "1px solid rgba(0,240,255,0.1)",
                                }}
                                layout
                            >
                                <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Zenith_Node</span>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Right: Code Block */}
                <div className="flex-1 p-6 overflow-hidden bg-black/60 relative">
                    <div className="flex items-center justify-between gap-2 text-[10px] font-mono text-white/20 uppercase tracking-widest mb-4">
                        <div className="flex items-center gap-2">
                            <Code2 size={12} className="text-[#00F0FF]/50" />
                            BUFFER_AST
                        </div>
                    </div>

                    <div className="font-mono text-[11px] leading-relaxed">
                        {codeLines.map((line, i) => (
                            <CodeLine
                                key={i}
                                lineText={line}
                                lineNumber={i + 1}
                                isChanged={changedSet.has(i)}
                                changeKey={`${i}-${line}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
