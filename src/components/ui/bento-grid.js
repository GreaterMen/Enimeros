// components/BentoGrid.js

"use client";
import React from "react";
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";

const gridSpans = [
  "col-span-3", // Top Row: 1 item spanning 3 columns
  "col-span-2", // Second Row: Left item spanning 2 columns
  "col-span-1", // Second Row: Right item spanning 1 column
  "col-span-1", // Third Row: 1st item
  "col-span-1", // Third Row: 2nd item
  "col-span-1", // Third Row: 3rd item
];

const features = [
  {
    title: "Weekly Tournaments",
    description: "Enter with $5, compete for 7 days, top 20 share the prize pool. New tournament every Monday.",
    image: "/trophy.png"
  },
  {
    title: "Whale Tracking",
    description: "Follow the smart money. Real-time alerts when major wallets make moves.",
    image: "/cryptoWhale.png"
  },
  {
    title: "Risk Protection", 
    description: "Automated rug detection, liquidity analysis, and manipulation alerts.",
    image: "/shield.png"
  },
  {
    title: "Live Performance",
    description: "Real-time PnL tracking, trade history, and tournament rankings.",
    image: "/livechart.png"
  },
  {
    title: "Hot Token Alerts",
    description: "Instant notifications when multiple pros buy the same token.",
    image: "/fire.png"
  },
  {
    title: "Trader Leaderboard",
    description: "Compete for glory. Track the best performers and their strategies.",
    image: "/leaderboard.png"
  }
 ];

export const BentoGrid = ({ className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr", // Base grid setup
        "gap-3 sm:gap-4 lg:gap-6", // Responsive gaps
        "w-[90%] sm:w-[85%] lg:w-[80%] max-w-6xl mx-auto", // Responsive width
        className
      )}
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className={cn(
            gridSpans[index] || "col-span-1",
            "h-full w-full" // Full width/height container
          )}
        >
          <BentoGridItem
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        </div>
      ))}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
}) => {
  return (
    <motion.div
      className={cn(
        // Base styles
        "relative rounded-lg flex flex-col items-center text-center border border-gray-600/30",
        "hover:shadow-2xl transition-shadow overflow-hidden",
        "bg-transparent backdrop-blur-sm bg-white/[0.02]",
        // Reduced padding
        "p-2 sm:p-3 md:p-4",
        // Significantly reduced minimum heights
        "min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px]",
        "h-full w-full",
        className
      )}
      whileHover={{ scale: 1.02 }}
    >
      {/* Content Container */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center">
        {/* Image with reduced container size */}
        
        
        {/* Text Content with reduced spacing */}
        {image && (
  <div className="flex flex-col items-center justify-center w-full h-full gap-2">
    <div className="relative w-12 h-12 sm:w-16 sm:h-16">
      <img
        src={image}
        alt={title}
        className="object-contain w-full h-full"
      />
    </div>
    <h3 className="text-sm sm:text-base font-bold text-white">
      {title}
    </h3>
    <p className="text-xs sm:text-sm font-semibold text-white/70 ">
      {description}
    </p>
  </div>
)}
      </div>
    </motion.div>
  );
};