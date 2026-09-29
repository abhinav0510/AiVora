"use client";

import React from "react";

interface FloatingPillProps {
  label: string;
  sublabel?: string;
  metric?: string;
  variant?: "light" | "lime" | "dark" | "outline";
  className?: string;
  pulse?: boolean;
}

export const FloatingPill: React.FC<FloatingPillProps> = ({
  label,
  sublabel,
  metric,
  variant = "light",
  className = "",
  pulse = false,
}) => {
  const variantStyles = {
    light: "bg-white/90 backdrop-blur-md text-vora-black border border-black/10 shadow-pill",
    lime: "bg-accent-lime text-vora-black border border-black/10 shadow-pill font-semibold",
    dark: "bg-vora-black text-white border border-white/10 shadow-pill",
    outline: "bg-white/40 backdrop-blur-sm text-neutral-800 border border-black/10",
  }[variant];

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs transition-transform duration-300 select-none ${variantStyles} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      <span className="font-mono tracking-tight">{label}</span>
      {metric && (
        <span className="px-1.5 py-0.5 rounded-full bg-black/5 text-[10px] font-bold">
          {metric}
        </span>
      )}
      {sublabel && (
        <span className="text-[10px] text-neutral-500 uppercase tracking-widest">
          {sublabel}
        </span>
      )}
    </div>
  );
};
