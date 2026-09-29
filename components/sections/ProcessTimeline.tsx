"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/projects-data";
import { initGSAP } from "@/lib/gsap";

export const ProcessTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();
    if (!containerRef.current || !trackRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (prefersReducedMotion || !isDesktop) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const totalWidth = track.scrollWidth - window.innerWidth + 140;

      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalWidth + 400}`,
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            const index = Math.min(
              PROCESS_STEPS.length - 1,
              Math.floor(self.progress * PROCESS_STEPS.length)
            );
            setActiveStep(index);
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#FAF9F5] border-t border-black/[0.06] py-20 sm:py-28 px-4 sm:px-8 md:px-12 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-vora-black" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
              EXECUTION LIFECYCLE
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tightest text-vora-black uppercase leading-tight">
            HOW WE BUILD.
          </h2>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-neutral-400">STAGE</span>
          <div className="flex gap-1.5">
            {PROCESS_STEPS.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeStep === i
                    ? "w-8 bg-vora-black"
                    : "w-2 bg-black/10"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-mono font-bold text-vora-black">
            0{activeStep + 1} / 05
          </span>
        </div>
      </div>

      {/* Desktop Horizontal Track / Mobile Stack */}
      <div className="relative w-full">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:w-max will-change-transform pb-8"
        >
          {PROCESS_STEPS.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <div
                key={step.number}
                className={`w-full lg:w-[460px] rounded-[32px] p-8 sm:p-10 border transition-all duration-500 flex flex-col justify-between ${
                  isActive
                    ? "bg-white border-black/15 shadow-float scale-100"
                    : "bg-white/40 border-black/5 opacity-75 hover:opacity-100"
                }`}
                data-cursor="STAGE"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-black/[0.08]">
                    <span className="text-sm font-mono font-bold px-3 py-1 rounded-full bg-black/5 text-vora-black">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      PHASE 0{index + 1}
                    </span>
                  </div>

                  <div className="mt-8 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                      {step.subtitle}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-vora-black uppercase">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed pt-3">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.08] space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                    Primary Deliverable
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-vora-black">
                    <CheckCircle2 className="w-4 h-4 text-accent-limeDark shrink-0" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
