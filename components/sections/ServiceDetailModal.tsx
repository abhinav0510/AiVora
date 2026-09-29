"use client";

import React from "react";
import { X, ArrowRight, CheckCircle2, Terminal, Sparkles, Layers } from "lucide-react";
import { ServiceItem } from "@/lib/projects-data";
import { ServiceVisualPreview } from "./ServiceVisualPreview";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onStartProject: (projectType: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onStartProject,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md animate-fadeIn"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-[#FAF9F5] rounded-[32px] sm:rounded-[40px] border border-black/10 shadow-2xl p-6 sm:p-10 overflow-y-auto z-10 animate-scaleUp">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-black/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-vora-black text-white">
              {service.number}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
              {service.categoryTag}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-black/5 text-neutral-600 hover:text-black transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Tagline */}
        <div className="pt-6 pb-4 space-y-2">
          {service.headline && (
            <span className="inline-block px-3 py-1 rounded-full bg-accent-lime text-vora-black text-xs font-mono font-bold uppercase tracking-wider">
              {service.headline}
            </span>
          )}
          <h3 className="text-3xl sm:text-5xl font-black tracking-tightest text-vora-black uppercase">
            {service.title}
          </h3>
          <p className="text-sm font-mono text-neutral-500 uppercase tracking-wide">
            {service.tagline}
          </p>
        </div>

        {/* Description */}
        <div className="py-4">
          <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
            {service.description}
          </p>
        </div>

        {/* Target Audience (For Personal Branding or General) */}
        {service.targetAudience && (
          <div className="py-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-3">
              Crafted Specifically For
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.targetAudience.map((audience) => (
                <span
                  key={audience}
                  className="px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono font-medium text-neutral-800 shadow-sm"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Miniature Interactive UI Preview */}
        <div className="my-6">
          <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-3">
            System Topology Preview
          </h4>
          <ServiceVisualPreview service={service} variant="full" />
        </div>

        {/* What We Build Sub-Services */}
        <div className="py-4 border-t border-black/10">
          <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-4">
            What We Build & Deliver
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.subServices.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-black/[0.07] text-xs font-mono font-medium text-neutral-800 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-accent-limeDark shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Applied */}
        <div className="py-4 border-t border-black/10">
          <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-3">
            Production Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-black/5 border border-black/5 text-xs font-mono font-bold text-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs font-mono text-neutral-500">
            Dedicated Architectural Cohort Available
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onStartProject(service.projectTypeValue);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-vora-black text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-neutral-800 active:scale-95 transition-all shadow-md"
              data-cursor="PROCEED"
            >
              <span>{service.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
