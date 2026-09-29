"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Check, ArrowRight, Loader2, Sparkles } from "lucide-react";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectType?: string;
}

const PROJECT_TYPES = [
  "AI Engineering",
  "Web Development",
  "App Development",
  "Personal Branding",
  "UI/UX & Product Design",
  "Automation & Integrations",
  "Other",
];

const BUDGET_RANGES = [
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "To be defined",
];

export const ContactDrawer: React.FC<ContactDrawerProps> = ({
  isOpen,
  onClose,
  initialProjectType = "AI Engineering",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: initialProjectType,
    budget: "$25k – $50k",
    description: "",
  });

  React.useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType, isOpen]);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage("Please fill in your name and email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(json?.error || "Failed to send inquiry. Please try again or email buildtoexcel@gmail.com.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send inquiry. Please email buildtoexcel@gmail.com directly."
      );
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-xl h-full bg-[#FAF9F5] border-l border-black/10 shadow-2xl p-6 sm:p-10 flex flex-col justify-between overflow-y-auto z-10 animate-slideInRight">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-black/10">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Image
                  src="/logo-mark.png"
                  alt="AI Vora"
                  width={36}
                  height={20}
                  className="h-4 sm:h-5 w-auto object-contain"
                />
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                  AI VORA • START A COLLABORATION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-vora-black mt-1">
                Engineering Your AI System.
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full hover:bg-black/5 text-neutral-600 hover:text-black transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {status === "success" ? (
            <div className="py-16 text-center space-y-4">
              <div className="flex justify-center mb-2">
                <Image
                  src="/logo.png"
                  alt="AI VORA"
                  width={180}
                  height={110}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <div className="w-12 h-12 rounded-full bg-accent-lime border border-black/10 flex items-center justify-center mx-auto text-vora-black">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold tracking-tight text-vora-black">
                Inquiry Received
              </h4>
              <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. An AI Vora founding engineer will review your project requirements and schedule an architectural intro within 24 hours.
              </p>
              <div className="pt-6">
                <button
                  onClick={() => {
                    setStatus("idle");
                    onClose();
                  }}
                  className="px-6 py-3 rounded-full bg-vora-black text-white text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-vora-black/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-vora-black/20 transition-all"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Acme Corp or Venture-backed Startup"
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-vora-black/20 transition-all"
                />
              </div>

              {/* Project Type Select */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                  Project Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, projectType: type })
                      }
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-tight transition-all ${
                        formData.projectType === type
                          ? "bg-vora-black text-white font-semibold shadow-sm"
                          : "bg-white text-neutral-700 border border-black/10 hover:border-black/30"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                  Expected Investment / Budget
                </label>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_RANGES.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-tight transition-all ${
                        formData.budget === b
                          ? "bg-accent-lime text-vora-black font-semibold border border-black/15 shadow-sm"
                          : "bg-white text-neutral-700 border border-black/10 hover:border-black/30"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                  Project Scope & Goals
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Tell us about the business problem, current bottlenecks, desired timeline, or data systems..."
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-vora-black/20 transition-all resize-none"
                />
              </div>

              {errorMessage && (
                <p className="text-xs text-red-600 font-medium">{errorMessage}</p>
              )}

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-full bg-vora-black text-white text-sm font-semibold tracking-wide uppercase flex items-center justify-center gap-2 hover:bg-neutral-800 active:scale-[0.99] transition-all shadow-md"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting Blueprint...
                    </>
                  ) : (
                    <>
                      Submit Project Inquiry
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-neutral-500 text-center mt-3">
                  Direct inquiry to founding engineering:{" "}
                  <a
                    href="mailto:buildtoexcel@gmail.com"
                    className="underline hover:text-black font-semibold"
                  >
                    buildtoexcel@gmail.com
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="pt-8 border-t border-black/5 text-[11px] text-neutral-400 flex items-center justify-between">
          <span>AI-VORA Studio • Direct Engineering</span>
          <span>© 2026</span>
        </div>
      </div>
    </div>
  );
};
