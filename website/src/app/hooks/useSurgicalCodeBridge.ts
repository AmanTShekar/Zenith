"use client";

import { useCallback, useRef, useMemo } from "react";

export interface CodePatchValues {
    padding: number;
    borderRadius: number;
    opacity: number;
}

export interface PatchResult {
    code: string;
    changedLines: number[];
    changedTokens: Map<string, string>;
}

const CODE_TEMPLATE = `export default function Card() {
  return (
    <div
      className="
        bg-white/5 border border-white/10
        __PADDING__
        __BORDER_RADIUS__
        __OPACITY__
        backdrop-blur-xl
        transition-all duration-300
      "
    >
      <h2 className="text-lg font-semibold
        text-white tracking-tight">
        Zenith Component
      </h2>
      <p className="text-sm text-white/60 mt-2">
        Visual meets code.
      </p>
    </div>
  );
}`;

// Line indices (0-based) for each replaceable token in the template
const TOKEN_LINE_MAP: Record<string, number> = {
    __PADDING__: 5,
    __BORDER_RADIUS__: 6,
    __OPACITY__: 7,
};

/**
 * useSurgicalCodeBridge
 *
 * A custom hook that performs string-patching on a code template.
 * Only the specific Tailwind class value is surgically replaced —
 * no full re-render of the code string.
 */
export function useSurgicalCodeBridge() {
    const prevValues = useRef<CodePatchValues>({
        padding: 24,
        borderRadius: 12,
        opacity: 100,
    });

    const patchCode = useCallback((values: CodePatchValues): PatchResult => {
        const changedLines: number[] = [];
        const changedTokens = new Map<string, string>();

        // Detect which values changed
        if (values.padding !== prevValues.current.padding) {
            changedLines.push(TOKEN_LINE_MAP.__PADDING__);
            changedTokens.set("padding", `p-[${values.padding}px]`);
        }
        if (values.borderRadius !== prevValues.current.borderRadius) {
            changedLines.push(TOKEN_LINE_MAP.__BORDER_RADIUS__);
            changedTokens.set("borderRadius", `rounded-[${values.borderRadius}px]`);
        }
        if (values.opacity !== prevValues.current.opacity) {
            changedLines.push(TOKEN_LINE_MAP.__OPACITY__);
            changedTokens.set("opacity", `opacity-[${values.opacity}%]`);
        }

        // Surgical string patch — replace only the token placeholders
        const code = CODE_TEMPLATE
            .replace("__PADDING__", `p-[${values.padding}px]`)
            .replace("__BORDER_RADIUS__", `rounded-[${values.borderRadius}px]`)
            .replace("__OPACITY__", `opacity-[${values.opacity}%]`);

        prevValues.current = { ...values };

        return { code, changedLines, changedTokens };
    }, []);

    const initialResult = useMemo(
        () => patchCode({ padding: 24, borderRadius: 12, opacity: 100 }),
        [patchCode]
    );

    return { patchCode, initialResult };
}
