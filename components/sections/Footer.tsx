"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Github, Linkedin, Instagram } from "lucide-react";
import { ContactDrawer } from "../navigation/ContactDrawer";

export const Footer: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative w-full px-4 sm:px-8 md:px-12 py-16 bg-[#FAF9F5] border-t border-black/[0.06] select-none">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
            <div>
              <Link href="/" className="inline-block group mb-4">
                <Image
                  src="/logo.png"
                  alt="AI VORA — Automate • Build • Grow"
                  width={220}
                  height={136}
                  className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>
              <p className="text-sm font-mono text-neutral-600 max-w-sm leading-relaxed">
                Precision Applied AI. Transforming complex business operations with intelligent software, digital products, and high-performance systems.
              </p>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                  INDEX
                </span>
                <ul className="space-y-2 text-xs font-mono">
                  <li>
                    <a href="#work" className="text-neutral-700 hover:text-black transition-colors">
                      SELECTED WORK
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-neutral-700 hover:text-black transition-colors">
                      SERVICES
                    </a>
                  </li>
                  <li>
                    <a href="#process" className="text-neutral-700 hover:text-black transition-colors">
                      HOW WE BUILD
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-neutral-700 hover:text-black transition-colors">
                      ABOUT STUDIO
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                  CONNECT
                </span>
                <ul className="space-y-2 text-xs font-mono">
                  <li>
                    <button
                      onClick={() => setIsContactOpen(true)}
                      className="text-neutral-700 hover:text-black transition-colors text-left"
                    >
                      START A PROJECT
                    </button>
                  </li>
                  <li>
                    <a
                      href="mailto:buildtoexcel@gmail.com"
                      className="text-neutral-700 hover:text-black transition-colors"
                    >
                      EMAIL STUDIO (buildtoexcel@gmail.com)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-700 hover:text-black transition-colors"
                    >
                      GITHUB
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-700 hover:text-black transition-colors"
                    >
                      LINKEDIN
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                  SYSTEM STATUS
                </span>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/10 text-[11px] font-mono text-neutral-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ALL SYSTEMS OPERATIONAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div>
              © 2026 AI VORA Studio. All rights reserved. Automate • Build • Grow.
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-vora-black transition-colors text-xs font-mono uppercase"
              data-cursor="TOP"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};
