"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Lock, ExternalLink, X, CheckCircle2, Terminal } from "lucide-react";
import { PROJECTS, Project } from "@/lib/projects-data";
import { initGSAP } from "@/lib/gsap";

export const ProjectGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const { gsap } = initGSAP();
    if (!containerRef.current || !horizontalTrackRef.current || !headlineRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px) and (min-height: 520px)", () => {
      const track = horizontalTrackRef.current;
      const headline = headlineRef.current;
      const container = containerRef.current;
      if (!track || !headline || !container) return;

      const getScrollDistance = () => {
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        return Math.max(0, trackWidth - viewportWidth + 64);
      };

      // Pinned Horizontal Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${getScrollDistance() + 600}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. "OUR WORK" typography scales down and shifts gently
      tl.to(
        headline,
        {
          scale: 0.8,
          opacity: 0.25,
          y: -8,
          duration: 0.2,
          ease: "power2.out",
          transformOrigin: "left center",
        },
        0
      );

      // 2. Horizontal slide of projects (dynamic function value evaluated on refresh/zoom)
      tl.to(
        track,
        {
          x: () => -getScrollDistance(),
          ease: "none",
          duration: 1,
        },
        0.04
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <>
      <section
        id="work"
        ref={containerRef}
        className="relative w-full min-h-screen lg:h-screen lg:max-h-screen bg-[#FAF9F5] border-t border-black/[0.06] overflow-visible lg:overflow-hidden select-none flex flex-col justify-start pt-14 lg:pt-14 pb-8 lg:pb-2"
      >
        {/* Top Header / Metadata Bar */}
        <div className="px-4 sm:px-8 md:px-12 max-w-7xl w-full mx-auto flex items-center justify-between pb-2 border-b border-black/[0.06] flex-shrink-0 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-lime border border-black/20 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase font-semibold">
              SELECTED WORK • 2026
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-xs font-mono text-neutral-400">
              04 PRODUCTION SYSTEMS
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 uppercase bg-black/5 px-2.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
              SCROLL TO EXPLORE →
            </span>
          </div>
        </div>

        {/* Hero Typography: OUR WORK */}
        <div
          ref={headlineRef}
          className="px-4 sm:px-8 md:px-12 max-w-7xl w-full mx-auto pt-1 sm:pt-2 flex-shrink-0 will-change-transform"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[68px] font-black tracking-tightest text-vora-black leading-[0.88] uppercase">
            <span className="block lg:inline lg:mr-3">OUR</span>
            <span className="block lg:inline text-neutral-800">WORK.</span>
          </h2>
        </div>

        {/* Desktop Horizontal Track / Mobile Stack */}
        <div className="relative w-full flex-1 min-h-0 lg:flex lg:items-center px-4 sm:px-8 md:px-12 mt-3 lg:mt-1 pb-12 lg:pb-0">
          <div
            ref={horizontalTrackRef}
            className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:w-max will-change-transform items-stretch pr-0 lg:pr-12"
          >
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative w-full lg:w-[460px] xl:w-[520px] 2xl:w-[560px] rounded-[24px] sm:rounded-[30px] bg-white border border-black/[0.08] shadow-card hover:shadow-float p-4 sm:p-5 lg:p-4 xl:p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden flex-shrink-0 lg:max-h-[calc(100vh-160px)]"
                data-cursor="VIEW"
              >
                {/* Project Header */}
                <div className="flex items-center justify-between pb-2 sm:pb-2.5 border-b border-black/[0.06] flex-shrink-0">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-black/5 text-vora-black">
                      {project.number}
                    </span>
                    {project.confidential ? (
                      <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                        <Lock className="w-3 h-3 text-neutral-400" />
                        CONFIDENTIAL AI PROJECT
                      </span>
                    ) : (
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                        {project.client}
                      </span>
                    )}
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/5 flex items-center justify-center text-vora-black group-hover:bg-vora-black group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title & Category */}
                <div className="mt-2 sm:mt-2.5 space-y-0.5 flex-shrink-0">
                  <span className="text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-base sm:text-xl lg:text-lg xl:text-xl font-black tracking-tight text-vora-black uppercase transition-transform duration-300 group-hover:translate-x-1 truncate">
                    {project.confidential ? "CONFIDENTIAL AI PROJECT" : project.title}
                  </h3>
                </div>

                {/* Rich Miniature Product Canvas (Card Visual) */}
                <div className="my-2 sm:my-2.5 relative flex-1 min-h-[110px] max-h-[180px] w-full rounded-2xl bg-[#FAF9F5] border border-black/[0.07] overflow-hidden flex flex-col justify-between p-2.5 sm:p-3 group-hover:border-black/20 transition-all">
                  {/* Top Bar of UI Preview */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 border-b border-black/5 pb-1 sm:pb-1.5 flex-shrink-0">
                    <span className="flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-vora-black" />
                      sys.v4 // {project.id}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-accent-lime text-vora-black font-semibold text-[10px]">
                      ACTIVE
                    </span>
                  </div>

                  {/* Conceptual Architectural Preview Canvas */}
                  <div className="flex-1 flex flex-col justify-center items-center text-center p-1 sm:p-1.5">
                    <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white/90 shadow-sm border border-black/5 max-w-xs space-y-1 group-hover:scale-105 transition-transform duration-500">
                      <p className="text-[11px] sm:text-xs text-neutral-700 font-mono italic line-clamp-2">
                        &quot;{project.tagline}&quot;
                      </p>
                      <div className="flex justify-center gap-1.5 pt-0.5">
                        {project.metrics?.map((m, i) => (
                          <div
                            key={i}
                            className="px-1.5 py-0.5 rounded bg-black/5 text-[9px] sm:text-[10px] font-mono font-bold text-vora-black"
                          >
                            {m.label}: {m.value}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tech Pills */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1 sm:pt-1.5 border-t border-black/5 flex-shrink-0">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 rounded-md bg-white border border-black/10 text-[9px] sm:text-[10px] font-mono text-neutral-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-black/5 text-[9px] sm:text-[10px] font-mono text-neutral-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description & View CTA */}
                <div className="space-y-1.5 sm:space-y-2 flex-shrink-0">
                  <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-black/[0.06] text-xs font-mono text-vora-black font-semibold">
                    <span className="flex items-center gap-1 group-hover:underline">
                      INSPECT ARCHITECTURE
                    </span>
                    <span className="text-neutral-400 font-normal">
                      CLICK TO OPEN
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal / View Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md animate-fadeIn"
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF9F5] rounded-[32px] border border-black/10 shadow-2xl p-6 sm:p-10 overflow-y-auto z-10 animate-scaleUp">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-black/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  PROJECT SPECIFICATION // {selectedProject.number}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-vora-black uppercase mt-1">
                  {selectedProject.confidential
                    ? "CONFIDENTIAL AI PROJECT"
                    : selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2.5 rounded-full hover:bg-black/5 text-neutral-600 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Details */}
            <div className="py-6 space-y-8">
              {/* Category & Services */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-accent-lime text-vora-black text-xs font-mono font-bold">
                  {selectedProject.category}
                </span>
                {selectedProject.services.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono text-neutral-700"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-white border border-black/[0.08]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-2">
                    The Problem & Bottleneck
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-black/[0.08]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-2">
                    The AI Engineering Solution
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-3">
                  Applied Tech Stack & Infrastructure
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-black/5 border border-black/5 text-xs font-mono font-medium text-vora-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Results / Metrics */}
              {selectedProject.metrics && (
                <div className="p-5 rounded-2xl bg-black/5 border border-black/5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-3">
                    Observed System Performance
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {selectedProject.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-[10px] font-mono text-neutral-500 uppercase">
                          {m.label}
                        </div>
                        <div className="text-lg font-bold font-mono text-vora-black">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-black/10 flex justify-between items-center text-xs font-mono text-neutral-500">
              <span>Status: In Production</span>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-full bg-vora-black text-white hover:bg-neutral-800 transition-colors uppercase font-semibold"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
