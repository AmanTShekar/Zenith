"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>();
    const mousePos = useRef({ x: -100, y: -100 });

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            mousePos.current = { x: e.clientX, y: e.clientY };
        },
        [cursorX, cursorY]
    );

    // Grid reveal on canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const GRID_SIZE = 20;
        const REVEAL_RADIUS = 150;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const { x: mx, y: my } = mousePos.current;

            if (mx < 0 || my < 0) {
                animRef.current = requestAnimationFrame(draw);
                return;
            }

            // Draw grid lines within the reveal radius
            const startX = Math.floor((mx - REVEAL_RADIUS) / GRID_SIZE) * GRID_SIZE;
            const endX = Math.ceil((mx + REVEAL_RADIUS) / GRID_SIZE) * GRID_SIZE;
            const startY = Math.floor((my - REVEAL_RADIUS) / GRID_SIZE) * GRID_SIZE;
            const endY = Math.ceil((my + REVEAL_RADIUS) / GRID_SIZE) * GRID_SIZE;

            for (let x = startX; x <= endX; x += GRID_SIZE) {
                for (let y = startY; y <= endY; y += GRID_SIZE) {
                    const dist = Math.sqrt((x - mx) ** 2 + (y - my) ** 2);
                    if (dist < REVEAL_RADIUS) {
                        const alpha = (1 - dist / REVEAL_RADIUS) * 0.12;
                        ctx.fillStyle = `rgba(0, 240, 255, ${alpha})`;

                        // Draw intersection dot
                        ctx.beginPath();
                        ctx.arc(x, y, 1, 0, Math.PI * 2);
                        ctx.fill();

                        // Horizontal line segments
                        if (x + GRID_SIZE <= endX) {
                            const nextDist = Math.sqrt((x + GRID_SIZE - mx) ** 2 + (y - my) ** 2);
                            if (nextDist < REVEAL_RADIUS) {
                                const lineAlpha = Math.min(alpha, (1 - nextDist / REVEAL_RADIUS) * 0.12) * 0.5;
                                ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
                                ctx.lineWidth = 0.5;
                                ctx.beginPath();
                                ctx.moveTo(x, y);
                                ctx.lineTo(x + GRID_SIZE, y);
                                ctx.stroke();
                            }
                        }

                        // Vertical line segments
                        if (y + GRID_SIZE <= endY) {
                            const nextDist = Math.sqrt((x - mx) ** 2 + (y + GRID_SIZE - my) ** 2);
                            if (nextDist < REVEAL_RADIUS) {
                                const lineAlpha = Math.min(alpha, (1 - nextDist / REVEAL_RADIUS) * 0.12) * 0.5;
                                ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
                                ctx.lineWidth = 0.5;
                                ctx.beginPath();
                                ctx.moveTo(x, y);
                                ctx.lineTo(x, y + GRID_SIZE);
                                ctx.stroke();
                            }
                        }
                    }
                }
            }

            animRef.current = requestAnimationFrame(draw);
        };

        animRef.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resize);
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    return (
        <>
            {/* Grid reveal canvas */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-[9998]"
                style={{ mixBlendMode: "screen" }}
            />

            {/* Magnetic cursor follower */}
            <motion.div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                {/* Outer ring */}
                <div
                    className="w-8 h-8 rounded-full gpu-accelerated"
                    style={{
                        border: "1px solid rgba(255,255,255,0.5)",
                        transition: "width 0.2s, height 0.2s",
                    }}
                />
            </motion.div>
        </>
    );
}
