// components/ui/typewriter-effect.js

"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  // Combine all words into a single string and split into characters
  const textArray = words
    .map((word) => word.text)
    .join("")
    .split("");

  const renderText = () => {
    return (
      <span
        className="bg-clip-text text-transparent inline-block"
        style={{
          backgroundImage: `linear-gradient(to bottom, #2E2E2E, #D4AF37)`, // Vertical gradient from dark grey to gold
        }}
      >
        {textArray.map((char, index) => (
          <motion.span
            key={`char-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.05,
              delay: index * 0.05,
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <div className={cn("flex flex-col items-center justify-center my-6", className)}>
      {/* Text Container */}
      <div className="inline-block">
        <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center whitespace-nowrap">
          {renderText()}
        </div>
      </div>
      {/* Cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2, // Slower blinking
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className={cn(
          "ml-1 block rounded-sm w-[2px] h-4 sm:h-6 xl:h-8 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

// TypewriterEffectSmoothDemo Component
export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Where ", className: "" },
    { text: "Web3 ", className: "" },
    { text: "meets ", className: "" },
    { text: "financial ", className: "" },
    { text: "intelligence. ", className: "" },
    { text: "Real-time ", className: "" },
    { text: "market ", className: "" },
    { text: "analysis ", className: "" },
    { text: "powered ", className: "" },
    { text: "by ", className: "" },
    { text: "blockchain ", className: "" },
    { text: "and ", className: "" },
    { text: "advanced ", className: "" },
    { text: "LLM ", className: "" },
    { text: "technology.", className: "" },
  ];

  // Scroll Handler Function
  const handleScroll = () => {
    const macbookSection = document.getElementById("macbook-section");
    if (macbookSection) {
      macbookSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
      {/* Scroll Button */}
      <button
        onClick={handleScroll}
        className="
          inline-flex 
          h-12 
          animate-shimmer 
          items-center 
          justify-center 
          rounded-md 
          border 
          border-slate-800 
          bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
          bg-[length:200%_100%] 
          px-6 
          font-medium 
          text-slate-400 
          transition-colors 
          focus:outline-none 
          focus:ring-2 
          focus:ring-slate-400 
          focus:ring-offset-2 
          focus:ring-offset-slate-50 
          mt-6 // Added margin-top for spacing
        "
      >
        Learn More
      </button>
    </div>
  );
}
