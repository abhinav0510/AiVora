"use client";

import React, { useState } from "react";
import { Sparkles, Terminal, Code2, Database, Cloud } from "lucide-react";
import { TECH_STACK } from "@/lib/projects-data";

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof TECH_STACK>("ai");

  const categories: { key: keyof typeof TECH_STACK; label: string; icon: React.ElementType }[] = [
    { key: "ai", label: "AI & MODEL CORE", icon: Sparkles },
    { key: "fullstack", label: "FULL STACK & RUNTIMES", icon: Code2 },
    { key: "data", label: "DATA & VECTOR STORES", icon: Database },
    { key: "infrastructure", label: "INFRASTRUCTURE & CLOUD", icon: Cloud },
  ];

  return (
    <section className="relative w-full px-4 sm:px-8 md:px-12 py-24 sm:py-32 bg-[#FAF9F5] border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-vora-black" />
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                SYSTEM FOUNDATION
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tightest text-vora-black uppercase leading-tight">
              THE STACK.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-neutral-500 max-w-sm">
            Proven, enterprise-grade engineering languages, vector engines, and cloud tools chosen for deterministic reliability.
          </p>
        </div>

        {/* Category Pills Switcher */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-vora-black text-white shadow-sm font-bold scale-105"
                    : "bg-white text-neutral-600 border border-black/10 hover:border-black/30 hover:text-black"
                }`}
                data-cursor="FILTER"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Large Typographic Stack Cloud */}
        <div className="rounded-[36px] bg-white border border-black/[0.08] shadow-card p-8 sm:p-14">
          <div className="flex flex-wrap gap-x-6 gap-y-6 sm:gap-x-10 sm:gap-y-10 items-center justify-start">
            {TECH_STACK[activeCategory].map((tech) => (
              <span
                key={tech}
                className="group text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-300 hover:text-vora-black transition-colors duration-300 uppercase cursor-pointer select-none"
                data-cursor="TECH"
              >
                {tech}
                <span className="text-accent-lime opacity-0 group-hover:opacity-100 transition-opacity ml-1">
                  •
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
