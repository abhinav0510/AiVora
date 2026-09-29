"use client";

import React, { useState } from "react";
import { ArrowUpRight, Sparkles, Layers } from "lucide-react";
import { ContactDrawer } from "../navigation/ContactDrawer";

export const PromiseSection: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="relative w-full px-4 sm:px-8 md:px-12 py-20 sm:py-32 bg-[#FAF9F5] border-t border-black/[0.06] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-vora-black" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
              OUR COMMITMENT
            </span>
          </div>

          {/* Main Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8">
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tightest text-vora-black leading-[0.92] uppercase">
                <span className="block">INTELLIGENCE</span>
                <span className="block text-neutral-800">IS OUR PROMISE:</span>
                <span className="block text-neutral-400">BUILDING YOUR</span>
                <span className="block text-vora-black">NEXT ADVANTAGE.</span>
              </h2>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 space-y-8">
              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
                We believe applied AI is fundamentally an engineering discipline. We build high-throughput systems, resilient agent loops, and private knowledge backbones engineered to deliver verifiable operational leverage.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-vora-black text-[#FAF9F5] text-xs font-mono font-semibold tracking-wide uppercase hover:bg-neutral-800 transition-all duration-300 shadow-sm active:scale-95"
                  data-cursor="START →"
                >
                  <span>GET STARTED</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-black/15 text-neutral-800 text-xs font-mono font-semibold tracking-wide uppercase hover:border-black/30 hover:bg-black/[0.02] transition-all duration-300"
                  data-cursor="SCROLL"
                >
                  <span>CAPABILITIES</span>
                </a>
              </div>

              {/* Status pill */}
              <div className="p-4 rounded-2xl bg-white border border-black/[0.08] shadow-card flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-accent-lime/40 border border-black/10 flex items-center justify-center text-vora-black">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase text-vora-black">
                      Production Architecture
                    </div>
                    <div className="text-[11px] text-neutral-500 font-mono">
                      Sub-second inference & deterministic schemas
                    </div>
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-vora-black/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};
