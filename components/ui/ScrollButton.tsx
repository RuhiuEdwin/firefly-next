"use client";

import { ChevronDownIcon } from "@/components/ui/Icons";

interface ScrollButtonProps {
  targetId: string;
}

export function ScrollButton({ targetId }: ScrollButtonProps) {
  return (
    // Figma: w-20 h-20, bg-yellow-700/30 (warm amber at 30% opacity), overflow-hidden
    <button
      aria-label="Scroll down"
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })}
      className="group w-14 h-14 rounded-full overflow-hidden relative flex items-center justify-center bg-yellow-700/30 hover:bg-yellow-700/50 transition-colors duration-300"
    >
      <ChevronDownIcon className="w-5 h-5 text-white group-hover:text-coffee-gold transition-colors duration-300" />
    </button>
  );
}
