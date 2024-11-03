// components/ui/GradientOverlay.js

"use client";
import React from "react";
import { cn } from "@/lib/utils";

/**
 * GradientOverlay Component
 * 
 * Props:
 * - direction: "top-to-bottom" | "bottom-to-top"
 * - className: Additional Tailwind classes
 */
const GradientOverlay = ({ direction = "top-to-bottom", className, ...props }) => {
  const gradientClasses =
    direction === "top-to-bottom"
      ? "from-transparent to-zinc-900 dark:to-zinc-800"
      : "from-zinc-900 dark:from-zinc-800 to-transparent";

  return (
    <div
      className={cn(
        `absolute inset-0 bg-gradient-to-${direction === "top-to-bottom" ? "b" : "t"} ${gradientClasses} opacity-70`,
        className
      )}
      {...props}
    ></div>
  );
};

export default GradientOverlay;
