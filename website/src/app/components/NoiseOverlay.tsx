"use client";

export default function NoiseOverlay() {
    return (
        <div
            className="fixed inset-0 pointer-events-none z-[10000]"
            style={{ opacity: 0.03 }}
        >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <filter id="zenith-noise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.65"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#zenith-noise)" />
            </svg>
        </div>
    );
}
