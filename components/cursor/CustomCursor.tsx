"use client";

import React, { useEffect, useRef, useState } from "react";

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [cursorState, setCursorState] = useState<{
    text: string;
    isHovered: boolean;
    isView: boolean;
    isDrag: boolean;
    isVisible: boolean;
  }>({
    text: "",
    isHovered: false,
    isView: false,
    isDrag: false,
    isVisible: false,
  });

  useEffect(() => {
    // Only enable on desktop with fine pointer & without reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (prefersReducedMotion || !hasPointer) {
      return;
    }

    document.documentElement.classList.add("custom-cursor-active");

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!cursorState.isVisible) {
        setCursorState((prev) => ({ ...prev, isVisible: true }));
      }
    };

    const onMouseLeave = () => {
      setCursorState((prev) => ({ ...prev, isVisible: false }));
    };

    const onMouseEnter = () => {
      setCursorState((prev) => ({ ...prev, isVisible: true }));
    };

    const render = () => {
      // Smooth linear interpolation (lerp)
      const ease = 0.18;
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(render);
    };

    // Hover detection using data-cursor attribute or interactive tags
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Ignore text inputs or textareas so native cursor works
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        setCursorState({
          text: "",
          isHovered: false,
          isView: false,
          isDrag: false,
          isVisible: false,
        });
        return;
      }

      const cursorTarget = target.closest<HTMLElement>("[data-cursor]");
      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        const isView = text.toUpperCase().includes("VIEW");
        const isDrag = text.toUpperCase().includes("DRAG");
        setCursorState({
          text,
          isHovered: true,
          isView,
          isDrag,
          isVisible: true,
        });
        return;
      }

      const linkOrButton = target.closest("a, button");
      if (linkOrButton) {
        setCursorState({
          text: "OPEN →",
          isHovered: true,
          isView: false,
          isDrag: false,
          isVisible: true,
        });
        return;
      }

      setCursorState({
        text: "",
        isHovered: false,
        isView: false,
        isDrag: false,
        isVisible: true,
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    rafId = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [cursorState.isVisible]);

  if (!cursorState.isVisible) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
      style={{
        transform: "translate3d(-100px, -100px, 0)",
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
          cursorState.isView
            ? "h-24 w-24 bg-vora-black text-[#FAF9F5] shadow-float backdrop-blur-sm"
            : cursorState.isDrag
            ? "h-20 w-20 bg-accent-lime text-vora-black font-semibold shadow-float"
            : cursorState.isHovered
            ? "h-14 w-14 bg-vora-black text-[#FAF9F5] shadow-card"
            : "h-3 w-3 bg-vora-black"
        }`}
      >
        {cursorState.text && (
          <span
            ref={textRef}
            className="text-[10px] font-mono tracking-wider font-semibold uppercase text-center px-1 select-none animate-fadeIn"
          >
            {cursorState.text}
          </span>
        )}
      </div>
    </div>
  );
};
