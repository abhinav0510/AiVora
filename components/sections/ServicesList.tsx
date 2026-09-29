"use client";

import React, { useState } from "react";
import { ArrowUpRight, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES, ServiceItem } from "@/lib/projects-data";
import { ServiceVisualPreview } from "./ServiceVisualPreview";
import { ServiceDetailModal } from "./ServiceDetailModal";
import { ContactDrawer } from "../navigation/ContactDrawer";

export const ServicesList: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactProjectType, setContactProjectType] = useState("AI Engineering");

  const handleOpenContactWithService = (projectType: string) => {
    setContactProjectType(projectType);
    setIsContactOpen(true);
  };

  return (
    <>
      <section
        id="services"
        className="relative w-full px-4 sm:px-8 md:px-12 py-24 sm:py-32 bg-[#FAF9F5] border-t border-black/[0.06] overflow-hidden select-none"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-vora-black" />
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                  STUDIO DISCIPLINES
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tightest text-vora-black uppercase leading-tight">
                WHAT WE BUILD.
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-neutral-500 max-w-md">
              AI engineering and digital product craft. From autonomous reasoning systems to high-performance web platforms and executive presences.
            </p>
          </div>

          {/* Oversized Interactive Service Rows */}
          <div className="space-y-4">
            {SERVICES.map((service, index) => {
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;

              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedService(service)}
                  className={`group relative rounded-3xl p-6 sm:p-10 border transition-all duration-500 cursor-pointer ${
                    isHovered
                      ? "bg-white border-black/15 shadow-float translate-x-1.5"
                      : isAnyHovered
                      ? "bg-transparent border-black/5 opacity-40"
                      : "bg-white/40 border-black/5 hover:border-black/10"
                  }`}
                  data-cursor="EXPLORE →"
                >
                  {/* Main Row Bar */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span className="text-sm sm:text-base font-mono font-bold text-neutral-400 group-hover:text-vora-black transition-colors">
                        {service.number}
                      </span>
                      <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-vora-black uppercase group-hover:text-vora-black transition-transform duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline-block text-xs font-mono tracking-wider text-neutral-500 uppercase">
                        {service.tagline}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isHovered
                            ? "bg-vora-black text-white rotate-45 scale-110"
                            : "bg-black/5 text-neutral-600"
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expanding Description, Sub-Services & Miniature UI Visual Preview */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isHovered
                        ? "max-h-[600px] opacity-100 mt-6 pt-6 border-t border-black/10"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left: Description & Sub-services */}
                      <div className="lg:col-span-6 space-y-6">
                        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                          {service.description}
                        </p>

                        <div>
                          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                            Specialized Sub-Services
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {service.subServices.map((sub) => (
                              <span
                                key={sub}
                                className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs font-mono text-neutral-800 shadow-sm"
                              >
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-vora-black">
                          <span>CLICK ROW TO INSPECT FULL SPECIFICATION</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Right: Miniature System Visual Composition */}
                      <div className="lg:col-span-6">
                        <ServiceVisualPreview service={service} variant="compact" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section Bottom CTA */}
          <div className="pt-8 border-t border-black/[0.06]">
            <div className="p-8 sm:p-12 rounded-[32px] bg-white border border-black/[0.08] shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                  START A COLLABORATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tightest text-vora-black uppercase">
                  HAVE A PROJECT IN MIND?
                </h3>
                <p className="text-xs sm:text-sm font-mono text-neutral-600">
                  Tell us what you need and our founding engineers will design the optimal solution.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleOpenContactWithService("AI Engineering")}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-vora-black text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-800 active:scale-95 transition-all shadow-sm"
                  data-cursor="START →"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleOpenContactWithService("Web Development")}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#FAF9F5] border border-black/15 text-vora-black text-xs font-mono font-semibold uppercase tracking-wider hover:bg-white hover:border-black/30 active:scale-95 transition-all"
                  data-cursor="INQUIRE"
                >
                  <span>TELL US WHAT YOU NEED</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onStartProject={handleOpenContactWithService}
      />

      {/* Inquiry Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialProjectType={contactProjectType}
      />
    </>
  );
};
