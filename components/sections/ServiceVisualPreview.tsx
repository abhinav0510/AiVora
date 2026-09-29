"use client";

import React from "react";
import {
  Sparkles,
  Terminal,
  Globe,
  Smartphone,
  UserCheck,
  Palette,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { ServiceItem } from "@/lib/projects-data";

interface ServiceVisualPreviewProps {
  service: ServiceItem;
  variant?: "compact" | "full";
}

export const ServiceVisualPreview: React.FC<ServiceVisualPreviewProps> = ({
  service,
  variant = "compact",
}) => {
  switch (service.visualType) {
    case "ai":
      return (
        <div className="w-full rounded-2xl bg-[#0F0F11] text-[#FAF9F5] p-4 sm:p-5 border border-white/10 shadow-sm font-mono select-none">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px]">
            <span className="flex items-center gap-1.5 text-accent-lime font-bold">
              <Sparkles className="w-3 h-3" />
              SYSTEM TOPOLOGY // MULTI-AGENT
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[9px]">
              SUB-SECOND INFERENCE
            </span>
          </div>

          <div className="py-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded bg-white/10 text-white font-bold">
              USER
            </span>
            <span className="text-accent-lime">→</span>
            <span className="px-2.5 py-1 rounded bg-accent-lime text-vora-black font-bold">
              AI AGENT
            </span>
            <span className="text-accent-lime">→</span>
            <span className="px-2.5 py-1 rounded bg-white/10 text-white">
              LLM CORE
            </span>
            <span className="text-accent-lime">→</span>
            <span className="px-2.5 py-1 rounded bg-white/10 text-white">
              RAG KNOWLEDGE
            </span>
            <span className="text-accent-lime">→</span>
            <span className="px-2.5 py-1 rounded bg-white/10 text-white">
              TOOLS & WORKFLOW
            </span>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-neutral-400">
            <span>Deterministic Schema Validation</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Agent Active
            </span>
          </div>
        </div>
      );

    case "web":
      return (
        <div className="w-full rounded-2xl bg-white text-vora-black p-4 sm:p-5 border border-black/10 shadow-sm font-mono select-none">
          {/* Browser Top Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-black/[0.08]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              <span className="text-[10px] text-neutral-400 ml-2 font-mono">
                ai-vora.com/web
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-accent-lime text-vora-black text-[9px] font-bold">
              100% LIGHTHOUSE
            </span>
          </div>

          {/* Browser Screen Content */}
          <div className="py-4 space-y-2">
            <div className="flex items-center justify-between text-[10px] text-neutral-500 uppercase tracking-widest">
              <span className="font-bold text-vora-black">AI-VORA</span>
              <div className="flex gap-2">
                <span>WORK</span>
                <span>ABOUT</span>
                <span>SERVICES</span>
                <span>CONTACT</span>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-sm sm:text-base font-black tracking-tightest uppercase text-vora-black">
                BUILD SOMETHING PEOPLE REMEMBER.
              </p>
              <p className="text-[11px] text-neutral-500 font-sans mt-0.5">
                Ultra-responsive, GPU-accelerated web experiences with Next.js & TypeScript.
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-black/5 flex items-center justify-between text-[10px] text-neutral-400">
            <span>Next.js 15 • Spring Boot • MySQL</span>
            <span className="font-bold text-vora-black">Sub-300ms FCP</span>
          </div>
        </div>
      );

    case "app":
      return (
        <div className="w-full rounded-2xl bg-white text-vora-black p-4 sm:p-5 border border-black/10 shadow-sm select-none">
          <div className="flex items-start justify-between pb-3 border-b border-black/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-vora-black text-white flex items-center justify-center">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-vora-black">
                  MOBILE APPLICATION
                </div>
                <div className="text-[10px] font-mono text-neutral-500">
                  iOS & Android Native Ecosystem
                </div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-black/5 text-vora-black text-[10px] font-mono font-semibold">
              60 FPS NATIVE
            </span>
          </div>

          <div className="py-3 grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-black/5 space-y-1">
              <span className="text-[9px] text-neutral-400 uppercase">Architecture</span>
              <div className="font-bold text-vora-black text-[11px]">
                React Native / Flutter
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-black/5 space-y-1">
              <span className="text-[9px] text-neutral-400 uppercase">Cloud Sync</span>
              <div className="font-bold text-vora-black text-[11px]">
                Offline-First + API
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-black/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
            <span>Biometric Auth • Push Notifications</span>
            <span className="font-semibold text-emerald-600">App Store Ready</span>
          </div>
        </div>
      );

    case "personal":
      return (
        <div className="w-full rounded-2xl bg-[#0F0F11] text-[#FAF9F5] p-5 sm:p-6 border border-white/10 shadow-card select-none">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-[10px] font-mono text-accent-lime uppercase tracking-widest font-bold">
              EXECUTIVE PRESENCE // 04
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-neutral-300">
              EDITORIAL CRAFT
            </span>
          </div>

          <div className="py-4 space-y-2">
            <h4 className="text-lg sm:text-xl font-black tracking-tightest uppercase text-white">
              YOUR NAME IS YOUR BRAND.
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              &ldquo;Your website should communicate who you are before you say a word.&rdquo;
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-accent-lime text-vora-black font-bold flex items-center justify-center text-xs">
                JD
              </div>
              <div>
                <div className="font-bold text-white text-xs">Founder & Executive</div>
                <div className="text-[10px] text-neutral-400">Keynote • Venture • Advisory</div>
              </div>
            </div>
            <div className="text-accent-lime text-[11px] font-bold">
              VERIFIED
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-white/10 flex flex-wrap gap-1.5 text-[9px] font-mono text-neutral-400">
            <span className="px-2 py-0.5 rounded bg-white/10">Founder Story</span>
            <span className="px-2 py-0.5 rounded bg-white/10">Media & Speaking</span>
            <span className="px-2 py-0.5 rounded bg-white/10">Portfolio & Book</span>
            <span className="px-2 py-0.5 rounded bg-white/10">Private Advisory</span>
          </div>
        </div>
      );

    case "design":
      return (
        <div className="w-full rounded-2xl bg-white text-vora-black p-4 sm:p-5 border border-black/10 shadow-sm select-none">
          <div className="flex items-center justify-between pb-3 border-b border-black/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-accent-lime text-vora-black flex items-center justify-center font-bold">
                <Palette className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-vora-black">
                  DESIGN SYSTEM ENGINE
                </div>
                <div className="text-[10px] font-mono text-neutral-500">
                  Figma to React Production Code
                </div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-black/5 text-vora-black text-[10px] font-mono font-semibold">
              WCAG AAA
            </span>
          </div>

          {/* Color & Typography Tokens */}
          <div className="py-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#0F0F11] border border-black/10" />
              <div className="w-6 h-6 rounded-md bg-[#EAF76A] border border-black/10" />
              <div className="w-6 h-6 rounded-md bg-[#FAF9F5] border border-black/10" />
              <div className="w-6 h-6 rounded-md bg-[#1A1A1A] border border-black/10" />
              <span className="text-[10px] font-mono text-neutral-400 ml-auto">
                Semantic Token Matrix
              </span>
            </div>
            <p className="text-xs font-mono text-neutral-600">
              Micro-interactions • Intuitive UX • Conversion Architecture
            </p>
          </div>

          <div className="pt-2 border-t border-black/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
            <span>Motion: cubic-bezier(0.16, 1, 0.3, 1)</span>
            <span className="font-semibold text-vora-black">Interactive Prototypes</span>
          </div>
        </div>
      );

    case "automation":
      return (
        <div className="w-full rounded-2xl bg-[#FAF9F5] text-vora-black p-4 sm:p-5 border border-black/10 shadow-sm font-mono select-none">
          <div className="flex items-center justify-between pb-3 border-b border-black/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-vora-black text-accent-lime flex items-center justify-center font-bold">
                <Workflow className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-vora-black">
                  CONNECTED WORKFLOW ENGINE
                </div>
                <div className="text-[10px] text-neutral-500">
                  Zero Manual Operational Friction
                </div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
              24/7 LIVE
            </span>
          </div>

          <div className="py-3 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="px-2.5 py-1 rounded bg-white border border-black/10 text-neutral-800 font-bold">
              WEBHOOK
            </span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded bg-accent-lime text-vora-black font-bold">
              FILTER & AI
            </span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded bg-white border border-black/10 text-neutral-800">
              WHATSAPP
            </span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded bg-vora-black text-white">
              CRM SYNC
            </span>
          </div>

          <div className="pt-2 border-t border-black/5 flex items-center justify-between text-[10px] text-neutral-500">
            <span>n8n • Custom Python • Cloud APIs</span>
            <span className="font-bold text-emerald-600">Zero Error Loop</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
