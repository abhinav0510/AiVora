"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Terminal, ShieldCheck, Zap } from "lucide-react";

export const AboutSection: React.FC = () => {
  const metrics = [
    { value: "10+", label: "ENGINEERED SYSTEMS", desc: "Shipped to enterprise production" },
    { value: "05+", label: "AUTONOMOUS AGENTS", desc: "Continuous live runtime" },
    { value: "04+", label: "REGULATED DOMAINS", desc: "Pharma, FinTech, SaaS & Logistics" },
    { value: "∞", label: "POSSIBILITIES", desc: "Engineered for modular scale" },
  ];

  return (
    <section
      id="about"
      className="relative w-full px-4 sm:px-8 md:px-12 py-24 sm:py-36 bg-[#FAF9F5] border-t border-black/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Split Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo-mark.png"
                alt="AI Vora Logo Mark"
                width={28}
                height={15}
                className="h-4 w-auto object-contain"
              />
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                ABOUT AI VORA
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-tightest text-vora-black leading-[0.92] uppercase">
              <span className="block">WE DON&apos;T</span>
              <span className="block text-neutral-800">JUST ADD AI.</span>
              <span className="block text-neutral-400">WE ENGINEER</span>
              <span className="block text-vora-black">SYSTEMS AROUND IT.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-6 pt-4">
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              AI Vora is an AI and digital product engineering studio focused on turning complex business problems into reliable, production-ready software.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We build intelligent software, digital products and high-performance web experiences for ambitious businesses and individuals — from autonomous AI systems to high-converting web applications, mobile ecosystems, and executive digital presences.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-black/[0.08] shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-vora-black">
                <ShieldCheck className="w-4 h-4 text-accent-limeDark" />
                Engineering First Principle
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed font-mono">
                No wrappers. No speculative hype. Clean code, deterministic error budgets, and strict data security.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-black/[0.06]">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.07] shadow-card flex flex-col justify-between hover:border-black/20 transition-all duration-300"
            >
              <div className="text-4xl sm:text-6xl font-black font-mono tracking-tight text-vora-black">
                {m.value}
              </div>
              <div className="mt-4 space-y-1">
                <div className="text-xs font-mono font-bold tracking-wider uppercase text-vora-black">
                  {m.label}
                </div>
                <div className="text-[11px] font-mono text-neutral-500">
                  {m.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
