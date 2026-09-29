"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Sparkles, Cpu } from "lucide-react";
import dynamic from "next/dynamic";

const HeroOrb3D = dynamic(
  () => import("../canvas/HeroOrb3D").then((mod) => mod.HeroOrb3D),
  { ssr: false }
);
import { ContactDrawer } from "../navigation/ContactDrawer";
import { initGSAP } from "@/lib/gsap";

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const orbWrapperRef = useRef<HTMLDivElement>(null);
  const stage4OverlayRef = useRef<HTMLDivElement>(null);
  const [orbProgress, setOrbProgress] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();
    if (!containerRef.current || !headlineRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            setOrbProgress(self.progress);
          },
        },
      });

      // Stage 1 -> Stage 2: Headline moves up and clips out, orb scales up
      tl.to(
        headlineRef.current,
        {
          y: -140,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        },
        0
      );

      tl.to(
        [subtextRef.current, ctaRef.current],
        {
          y: -80,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        },
        0
      );

      // Stage 2 -> Stage 3: Orb moves center & enlarges
      tl.to(
        orbWrapperRef.current,
        {
          scale: 1.5,
          y: -20,
          duration: 0.5,
          ease: "power1.inOut",
        },
        0.1
      );

      // Stage 4: Orb expands to fill viewport, AI-VORA typography overlays
      tl.to(
        orbWrapperRef.current,
        {
          scale: 2.3,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.5
      );

      tl.fromTo(
        stage4OverlayRef.current,
        {
          opacity: 0,
          scale: 0.85,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        },
        0.55
      );

      // Stage 5: Smooth exit into Promise section
      tl.to(
        stage4OverlayRef.current,
        {
          opacity: 0,
          scale: 1.1,
          duration: 0.25,
          ease: "power2.in",
        },
        0.85
      );

      tl.to(
        orbWrapperRef.current,
        {
          opacity: 0.3,
          scale: 2.8,
          duration: 0.25,
        },
        0.85
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden px-4 sm:px-8 md:px-12 py-6 md:py-10 select-none"
      >
        {/* Top Eyebrow Tag */}
        <div className="relative z-20 flex items-center justify-between w-full max-w-7xl mx-auto pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.07] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono tracking-wider text-neutral-800 uppercase font-semibold">
              AI + DIGITAL PRODUCT ENGINEERING
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] font-mono text-neutral-500 uppercase">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-vora-black" />
              SYSTEMS ARCHITECTURE
            </span>
            <span>•</span>
            <span>DIGITAL PRODUCTS</span>
          </div>
        </div>

        {/* Central Stage 3D Visual */}
        <div
          ref={orbWrapperRef}
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none will-change-transform"
        >
          <div className="w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[620px] md:h-[620px] lg:w-[740px] lg:h-[740px]">
            <HeroOrb3D progress={orbProgress} />
          </div>
        </div>

        {/* Stage 4 Dynamic Overlay (Reveals during scroll scrub) */}
        <div
          ref={stage4OverlayRef}
          className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center opacity-0"
        >
          <div className="text-center px-4 flex flex-col items-center justify-center">
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-[460px] h-36 sm:h-48 md:h-56 lg:h-64 mb-3">
              <Image
                src="/logo.png"
                alt="AI VORA — Automate • Build • Grow"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-lime text-vora-black text-xs font-mono font-bold uppercase tracking-widest border border-black/10 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              AUTOMATE • BUILD • GROW
            </span>
          </div>
        </div>

        {/* Main Hero Content (Stage 1) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto my-auto flex flex-col justify-center pointer-events-auto">
          <div ref={headlineRef} className="max-w-5xl">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-tightest text-vora-black leading-[0.92] uppercase">
              <span className="block overflow-hidden">
                <span className="block">WE BUILD</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block text-neutral-900">INTELLIGENT</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block text-vora-black">SYSTEMS.</span>
              </span>
            </h1>
          </div>

          {/* Subheading & CTAs */}
          <div className="mt-8 sm:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-6xl">
            <div ref={subtextRef} className="max-w-md">
              <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
                We build intelligent software, digital products and high-performance web experiences for ambitious businesses and individuals.
              </p>
            </div>

            <div
              ref={ctaRef}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-vora-black text-[#FAF9F5] text-xs sm:text-sm font-mono font-semibold tracking-wide uppercase hover:bg-neutral-800 transition-all duration-300 shadow-md active:scale-95"
                data-cursor="EXPLORE"
              >
                <span>VIEW OUR WORK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/70 backdrop-blur-md text-vora-black border border-black/15 text-xs sm:text-sm font-mono font-semibold tracking-wide uppercase hover:bg-white hover:border-black/30 transition-all duration-300 active:scale-95 shadow-sm"
                data-cursor="INQUIRE"
              >
                <span>START A PROJECT</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-neutral-500 uppercase tracking-widest pt-4 border-t border-black/[0.06]">
          <div className="flex items-center gap-2">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>EST. 2026</span>
            <span>AGENTS • RAG • SAAS • SYSTEMS</span>
          </div>
        </div>
      </section>

      {/* Inquiry Drawer Modal */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};
