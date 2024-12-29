"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimationControls } from "framer-motion";
import React, { useState, useEffect } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cursorControls = useAnimationControls();
  
  const textArray = words
    .map((word) => word.text)
    .join("")
    .split("");

  useEffect(() => {
    const animateText = async () => {
      for (let i = 0; i <= textArray.length; i++) {
        setCurrentIndex(i);
        await new Promise(resolve => setTimeout(resolve, 50)); // Match this with character animation speed
        await cursorControls.start({ 
          x: `${i * 0.6}em`,
          transition: { duration: 0.05 }
        });
      }
    };

    animateText();
  }, [textArray.length, cursorControls]);

  const renderText = () => {
    return (
      <span
        className="bg-clip-text text-transparent inline-block"
        style={{
          backgroundImage: `linear-gradient(to bottom, #E94560, #E94560)`,
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
      <div className="inline-block relative">
        <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center whitespace-nowrap">
          {renderText()}
          <motion.span
            initial={{ opacity: 0, x: 0 }}
            animate={cursorControls}
            style={{ opacity: 1 }}
            className={cn(
              "absolute top-0 -right-[4px] block rounded-sm w-[2px] h-4 sm:h-6 xl:h-8 bg-blue-500",
              cursorClassName
            )}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 bg-blue-500"
            />
          </motion.span>
        </div>
      </div>
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
    </div>
  );
}
