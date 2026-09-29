"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Terminal, Activity, CheckCircle, ArrowRight } from "lucide-react";
import { initGSAP } from "@/lib/gsap";

interface FlowNode {
  id: string;
  step: string;
  title: string;
  role: string;
  protocol: string;
  latency: string;
  icon: string;
}

const FLOW_NODES: FlowNode[] = [
  {
    id: "user",
    step: "01",
    title: "USER / CLIENT",
    role: "Natural Language & Event Inputs",
    protocol: "HTTP/gRPC Streaming",
    latency: "< 10ms",
    icon: "👤",
  },
  {
    id: "agent",
    step: "02",
    title: "AI AGENT",
    role: "Autonomous Planning & Reasoning Loop",
    protocol: "LangGraph State Machine",
    latency: "< 45ms",
    icon: "⚡",
  },
  {
    id: "llm",
    step: "03",
    title: "LLM CORE",
    role: "Model Reasoning & Intent Routing",
    protocol: "Claude / GPT-4o / Gemini",
    latency: "< 280ms",
    icon: "🧠",
  },
  {
    id: "knowledge",
    step: "04",
    title: "KNOWLEDGE",
    role: "Grounded Enterprise Context (RAG)",
    protocol: "Hybrid BM25 + Vector Search",
    latency: "< 18ms",
    icon: "📚",
  },
  {
    id: "tools",
    step: "05",
    title: "TOOLS & APIS",
    role: "Deterministic Function Calling",
    protocol: "OpenAPI / Custom Webhooks",
    latency: "< 85ms",
    icon: "🛠️",
  },
  {
    id: "workflow",
    step: "06",
    title: "WORKFLOW",
    role: "Multi-Step Business Execution",
    protocol: "Event-driven Microservice",
    latency: "< 60ms",
    icon: "🔄",
  },
  {
    id: "database",
    step: "07",
    title: "DATABASE",
    role: "Transactional State & Audit Ledger",
    protocol: "PostgreSQL / MySQL / Redis",
    latency: "< 8ms",
    icon: "💾",
  },
  {
    id: "production",
    step: "08",
    title: "PRODUCTION",
    role: "Resilient Deployed Infrastructure",
    protocol: "AWS / Docker / Zero-Downtime",
    latency: "99.99% SLA",
    icon: "🚀",
  },
];

export const AISystemFlow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNodeIndex, setActiveNodeIndex] = useState(1);

  useEffect(() => {
    const { gsap, ScrollTrigger } = initGSAP();
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        onUpdate: (self) => {
          const index = Math.min(
            FLOW_NODES.length - 1,
            Math.floor(self.progress * FLOW_NODES.length)
          );
          setActiveNodeIndex(index);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const activeNode = FLOW_NODES[activeNodeIndex];

  return (
    <section
      ref={containerRef}
      className="relative w-full px-4 sm:px-8 md:px-12 py-24 sm:py-32 bg-[#FAF9F5] border-t border-black/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 border-b border-black/[0.06]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent-lime border border-black/20" />
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
                SYSTEM TOPOLOGY
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tightest text-vora-black uppercase leading-tight">
              <span className="block">FROM IDEA</span>
              <span className="block text-neutral-800">TO INTELLIGENT</span>
              <span className="block text-neutral-400">SYSTEM.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm font-mono text-neutral-600 leading-relaxed">
              Every system we engineer follows a deterministic path from incoming prompt intent to verified enterprise action.
            </p>
          </div>
        </div>

        {/* Dynamic Interactive Flow Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Node Track */}
          <div className="lg:col-span-7 space-y-3">
            {FLOW_NODES.map((node, index) => {
              const isActive = activeNodeIndex === index;
              const isPast = activeNodeIndex > index;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNodeIndex(index)}
                  className={`group relative rounded-2xl p-4 sm:p-5 border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "bg-white border-black/20 shadow-card scale-[1.02]"
                      : isPast
                      ? "bg-black/[0.02] border-black/5 opacity-80"
                      : "bg-transparent border-black/5 opacity-40 hover:opacity-75"
                  }`}
                  data-cursor="INSPECT"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-1 rounded-md ${
                        isActive
                          ? "bg-accent-lime text-vora-black"
                          : "bg-black/5 text-neutral-500"
                      }`}
                    >
                      {node.step}
                    </span>
                    <div>
                      <div className="text-sm sm:text-base font-bold font-mono tracking-tight text-vora-black flex items-center gap-2">
                        <span>{node.icon}</span>
                        <span>{node.title}</span>
                      </div>
                      <div className="text-xs text-neutral-500 font-mono mt-0.5">
                        {node.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
                      {node.latency}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-vora-black text-white"
                          : "bg-black/5 text-neutral-400"
                      }`}
                    >
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Node Inspector Panel */}
          <div className="lg:col-span-5 sticky top-28 rounded-3xl bg-white border border-black/[0.08] shadow-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-black/10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-accent-limeDark animate-pulse" />
                Live Architecture Node
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-accent-lime text-vora-black text-[10px] font-mono font-bold">
                ACTIVE PIPELINE
              </span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                STAGE {activeNode.step} OF 08
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-vora-black uppercase mt-1">
                {activeNode.title}
              </h3>
              <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                {activeNode.role}
              </p>
            </div>

            {/* Architectural Telemetry Box */}
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-black/5 space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-black/5">
                <span className="text-neutral-500">Underlying Protocol:</span>
                <span className="font-semibold text-vora-black">
                  {activeNode.protocol}
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-black/5">
                <span className="text-neutral-500">Target Latency:</span>
                <span className="font-semibold text-vora-black">
                  {activeNode.latency}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-500">Fault Tolerance:</span>
                <span className="font-semibold text-emerald-600 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Retry with Fallback
                </span>
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-neutral-400 leading-normal border-t border-black/5">
              Click any node in the left stream to inspect individual protocol contracts and engineering parameters.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
