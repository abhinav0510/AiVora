"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { ContactDrawer } from "../navigation/ContactDrawer";

export const FinalCTA: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="relative w-full px-4 sm:px-8 md:px-12 py-24 sm:py-36 bg-[#FAF9F5] border-t border-black/[0.06] overflow-hidden">
        {/* Large Pale-Yellow Canvas Card */}
        <div className="max-w-7xl mx-auto rounded-[36px] sm:rounded-[48px] bg-accent-lime border border-black/10 shadow-card p-8 sm:p-14 md:p-20 relative overflow-hidden flex flex-col justify-between">
          {/* Top Tag */}
          <div className="flex items-center justify-between pb-8 border-b border-black/10">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-mark.png"
                alt="AI Vora Logo Mark"
                width={28}
                height={15}
                className="h-4 w-auto object-contain"
              />
              <span className="text-xs font-mono uppercase tracking-widest text-vora-black font-bold">
                INITIATE PROJECT COLLABORATION
              </span>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-neutral-800">
              Q2 / Q3 2026 COHORT OPEN
            </span>
          </div>

          {/* Center Main Headline */}
          <div className="my-12 sm:my-16 max-w-4xl space-y-6">
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-black tracking-tightest text-vora-black leading-[0.9] uppercase">
              <span className="block">HAVE AN IDEA</span>
              <span className="block">WORTH</span>
              <span className="block">BUILDING?</span>
            </h2>
            <p className="text-base sm:text-xl text-neutral-800 font-medium max-w-xl leading-relaxed">
              Let&apos;s turn it into an intelligent product. From enterprise AI agents to full-scale SaaS platforms, we architect software that delivers.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-8 border-t border-black/10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 sm:py-5 rounded-full bg-vora-black text-white text-xs sm:text-sm font-mono font-bold tracking-wide uppercase hover:bg-neutral-800 active:scale-95 transition-all shadow-md"
              data-cursor="START →"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="mailto:buildtoexcel@gmail.com"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-4 sm:py-5 rounded-full bg-white/80 backdrop-blur-sm text-vora-black border border-black/15 text-xs sm:text-sm font-mono font-semibold tracking-wide lowercase hover:bg-white transition-all active:scale-95 shadow-sm"
              data-cursor="EMAIL"
            >
              <Mail className="w-4 h-4" />
              <span>buildtoexcel@gmail.com</span>
            </a>
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
