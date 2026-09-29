"use client";

import React from "react";

export const NoiseOverlay: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 bg-noise opacity-40 mix-blend-overlay"
    />
  );
};
