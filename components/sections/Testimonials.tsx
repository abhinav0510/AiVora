"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/projects-data";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="relative w-full px-4 sm:px-8 md:px-12 py-24 sm:py-32 bg-[#FAF9F5] border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-black/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-vora-black" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
              PERSPECTIVE & IMPACT
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white border border-black/10 hover:border-black/30 text-vora-black transition-all active:scale-95 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white border border-black/10 hover:border-black/30 text-vora-black transition-all active:scale-95 shadow-sm"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Large Editorial Quote Card */}
        <div className="rounded-[36px] bg-white border border-black/[0.08] shadow-card p-8 sm:p-14 md:p-16 relative overflow-hidden transition-all duration-500">
          <Quote className="w-12 h-12 text-accent-lime opacity-80 mb-6" />

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-vora-black leading-tight">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <div className="mt-10 pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-base font-bold font-mono text-vora-black">
                {current.author}
              </div>
              <div className="text-xs font-mono text-neutral-500">
                {current.company}
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-[11px] font-mono text-neutral-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>{current.tag}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
