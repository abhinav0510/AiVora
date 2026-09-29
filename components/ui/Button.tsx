"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
  cursorLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = false,
  className = "",
  cursorLabel = "OPEN →",
  type = "button",
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  }[size];

  const variantClasses = {
    primary:
      "bg-vora-black text-[#FAF9F5] hover:bg-neutral-800 active:scale-[0.98] border border-transparent shadow-sm",
    outline:
      "bg-transparent text-vora-black border border-black/15 hover:border-black/30 hover:bg-black/[0.03] active:scale-[0.98]",
    accent:
      "bg-accent-lime text-vora-black hover:bg-[#DCE958] active:scale-[0.98] border border-black/10 shadow-sm",
    ghost:
      "bg-transparent text-vora-black hover:bg-black/5 active:scale-[0.98]",
  }[variant];

  const commonProps = {
    className: `group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 select-none ${sizeClasses} ${variantClasses} ${className}`,
    "data-cursor": cursorLabel,
  };

  const content = (
    <>
      <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5">
        {children}
      </span>
      {icon && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        {...commonProps}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      ref={buttonRef as React.Ref<HTMLButtonElement>}
      {...commonProps}
    >
      {content}
    </button>
  );
};
