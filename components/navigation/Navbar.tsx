"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ContactDrawer } from "./ContactDrawer";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "SERVICES", href: "#services" },
    { label: "PROCESS", href: "#process" },
    { label: "ABOUT", href: "#about" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ease-out px-4 sm:px-8 py-3 sm:py-4 ${
          isScrolled
            ? "backdrop-blur-md bg-[#FAF9F5]/85 border-b border-black/[0.06] shadow-sm py-2.5 sm:py-3"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 select-none"
            data-cursor="AI VORA"
          >
            <div className="relative h-7 sm:h-8 flex items-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo-mark.png"
                alt="AI Vora Logo Mark"
                width={56}
                height={30}
                className="h-6 sm:h-7 w-auto object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-vora-black text-sm sm:text-base leading-none">
                AI VORA
              </span>
              <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase mt-0.5 hidden sm:inline">
                AUTOMATE • BUILD • GROW
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-black/[0.03] backdrop-blur-sm p-1 rounded-full border border-black/5">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 text-xs font-mono font-medium tracking-wider text-neutral-700 hover:text-vora-black rounded-full hover:bg-white/80 transition-all duration-200"
                data-cursor="GO"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsContactOpen(true)}
              className="group hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vora-black text-[#FAF9F5] text-xs font-mono font-semibold tracking-wide uppercase hover:bg-neutral-800 transition-all duration-200 active:scale-95 shadow-sm"
              data-cursor="START →"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-black/5 md:hidden text-vora-black"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#FAF9F5] border border-black/10 shadow-xl space-y-3 animate-fadeIn">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-mono tracking-wider text-neutral-800 hover:text-black hover:bg-black/5 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-black/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsContactOpen(true);
                }}
                className="w-full py-3 rounded-full bg-vora-black text-white text-xs font-mono font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Inquiry Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};
