"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const ClientMarquee: React.FC = () => {
  const clients = [
    "CATLIN PHARMACEUTICALS",
    "CONFIDENTIAL AI PROJECT",
    "ENTERPRISE SaaS PLATFORM",
    "VENTURE PORTFOLIO COMPANY",
    "AUTOMATED LOGISTICS ENGINE",
    "FINTECH INTELLIGENCE SUITE",
    "MULTI-AGENT WORKFLOW SYSTEM",
    "CLINICAL RAG CORPUS",
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#FAF9F5] border-t border-black/[0.06] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-vora-black" />
            TRUSTED PARTNERS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-vora-black uppercase">
            BUILT WITH AMBITIOUS TEAMS.
          </h2>
        </div>
        <p className="text-xs font-mono text-neutral-400">
          ENTERPRISE & VENTURE-BACKED SYSTEMS
        </p>
      </div>

      {/* Marquee Track 1 (Left to Right) */}
      <div className="relative w-full overflow-hidden flex border-y border-black/[0.06] py-5 bg-white/50 backdrop-blur-sm">
        <div className="animate-marquee flex gap-8 items-center whitespace-nowrap">
          {clients.concat(clients).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 text-sm sm:text-base font-mono font-bold tracking-wider uppercase text-neutral-700 hover:text-black transition-colors"
            >
              <span>{item}</span>
              <span className="text-accent-limeDark text-xs font-black">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
