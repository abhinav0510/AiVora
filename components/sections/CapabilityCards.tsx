"use client";

import React, { useRef } from "react";
import { ArrowUpRight, Cpu, Network, Database, Sparkles, Terminal } from "lucide-react";
import { FloatingPill } from "../ui/FloatingPill";

export const CapabilityCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const capabilities = [
    {
      id: "product-engineering",
      badge: "CAPABILITY 01",
      title: "AI PRODUCT ENGINEERING",
      subtitle: "From concept to production",
      description:
        "We build full-scale, AI-native products designed around real operational constraints, high concurrency, and intuitive interfaces.",
      bgColor: "bg-[#F4F878]", // pale lime/yellow
      accentColor: "#0F0F11",
      icon: Cpu,
      pills: [
        { label: "+ LLM", variant: "dark" as const },
        { label: "AI AGENT", variant: "light" as const, pulse: true },
        { label: "CONTEXT", variant: "light" as const },
        { label: "API", variant: "dark" as const },
      ],
      metrics: [
        { label: "INFERENCE", value: "< 250ms" },
        { label: "MODEL ORCHESTRATION", value: "MULTI-LLM" },
      ],
      visualNodes: ["User Intent", "Agent Loop", "Output Stream"],
    },
    {
      id: "intelligent-automation",
      badge: "CAPABILITY 02",
      title: "INTELLIGENT AUTOMATION",
      subtitle: "Autonomous workflow pipelines",
      description:
        "Turn repetitive, high-friction business operations into autonomous systems powered by resilient AI agents and event-driven automation.",
      bgColor: "bg-white",
      accentColor: "#0F0F11",
      icon: Network,
      pills: [
        { label: "AUTOMATED", variant: "lime" as const },
        { label: "WORKFLOW", variant: "light" as const },
        { label: "AGENT ACTIVE", variant: "dark" as const, pulse: true },
      ],
      metrics: [
        { label: "OPERATIONAL RUNTIME", value: "24/7/365" },
        { label: "HUMAN-IN-THE-LOOP", value: "RESTRICTED" },
      ],
      visualNodes: ["Trigger Hook", "Decision Engine", "ERP / CRM Sync"],
    },
    {
      id: "rag-knowledge",
      badge: "CAPABILITY 03",
      title: "RAG & KNOWLEDGE SYSTEMS",
      subtitle: "Enterprise contextual grounding",
      description:
        "Connect state-of-the-art models to private enterprise knowledge bases with verifiable retrieval, citation grounding, and strict privacy.",
      bgColor: "bg-[#FAF9F5]",
      accentColor: "#0F0F11",
      icon: Database,
      pills: [
        { label: "RETRIEVAL ACTIVE", variant: "lime" as const, pulse: true },
        { label: "KNOWLEDGE CONNECTED", variant: "dark" as const },
        { label: "+ HYBRID SEARCH", variant: "light" as const },
      ],
      metrics: [
        { label: "GROUNDED RECALL", value: "99.4%" },
        { label: "VECTOR LATENCY", value: "< 18ms" },
      ],
      visualNodes: ["Corpus Chunker", "pgvector Index", "Reranker Model"],
    },
  ];

  return (
    <section
      id="capabilities"
      ref={containerRef}
      className="relative w-full px-4 sm:px-8 md:px-12 py-16 sm:py-24 bg-[#FAF9F5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-vora-black" />
              ENGINEERING DISCIPLINES
            </span>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-vora-black mt-2 uppercase">
              Core Capabilities.
            </h3>
          </div>
          <p className="text-xs sm:text-sm font-mono text-neutral-500 max-w-sm">
            Miniature system interfaces engineered for high fault-tolerance, low-latency, and zero-hallucination execution.
          </p>
        </div>

        {/* 3 Large Featured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                className={`relative group rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-between border border-black/[0.08] shadow-card hover:shadow-float transition-all duration-500 hover:-translate-y-1.5 ${cap.bgColor}`}
                data-cursor="INSPECT"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-black/[0.08]">
                    <span className="text-[11px] font-mono tracking-widest text-neutral-600 uppercase font-semibold">
                      {cap.badge}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-vora-black group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-8 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                      {cap.subtitle}
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-black tracking-tight text-vora-black uppercase leading-tight">
                      {cap.title}
                    </h4>
                    <p className="text-sm text-neutral-700 leading-relaxed pt-2">
                      {cap.description}
                    </p>
                  </div>
                </div>

                {/* Miniature UI Product Canvas Inside Card */}
                <div className="my-8 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-black/[0.07] space-y-4 shadow-sm">
                  {/* Floating Pills Cluster */}
                  <div className="flex flex-wrap gap-2">
                    {cap.pills.map((pill, i) => (
                      <FloatingPill
                        key={i}
                        label={pill.label}
                        variant={pill.variant}
                        pulse={pill.pulse}
                      />
                    ))}
                  </div>

                  {/* Visual Node Flow Line */}
                  <div className="pt-2 border-t border-black/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                    {cap.visualNodes.map((node, idx) => (
                      <React.Fragment key={node}>
                        <span className="px-2 py-1 rounded bg-black/5 text-neutral-800 font-semibold">
                          {node}
                        </span>
                        {idx < cap.visualNodes.length - 1 && <span>→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Bottom Conceptual Metrics */}
                <div className="pt-4 border-t border-black/[0.08] grid grid-cols-2 gap-4">
                  {cap.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                        {m.label}
                      </div>
                      <div className="text-base sm:text-lg font-bold font-mono text-vora-black mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
