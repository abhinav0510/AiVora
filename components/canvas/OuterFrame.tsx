"use client";

import React from "react";

interface OuterFrameProps {
  children: React.ReactNode;
}

export const OuterFrame: React.FC<OuterFrameProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[#EBEAE8] p-0 md:p-3 lg:p-4 transition-colors duration-500">
      <div className="relative w-full min-h-[calc(100vh-2rem)] bg-[#FAF9F5] rounded-none md:rounded-[32px] border-0 md:border md:border-black/[0.07] shadow-none md:shadow-[0_25px_80px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-500">
        {children}
      </div>
    </div>
  );
};
