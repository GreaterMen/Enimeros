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
    title: "Predictive Analytics Engine",
    description:
      "Our AI continuously scans financial reports, earnings calls, and social sentiment, using computer vision to analyze charts and patterns across multiple timeframes. Receive early warnings about market shifts before they happen.",
  },
  {
    title: "Social Intelligence Engine",
    description: "Our AI continuously monitors social media conversations across Twitter, Reddit, and other platforms to detect market-moving information before it impacts prices. By analyzing millions of posts, tracking influential accounts, and learning from historical patterns, we provide both immediate alerts for urgent opportunities and deeper insights for longer-term plays. The system learns from every prediction, constantly improving its accuracy while filtering out noise and false signals. Whether it's crypto sentiment shifts, breaking TradFi news, or emerging sports betting trends, you'll know about significant developments as they happen – giving you the time advantage needed in today's fast-moving markets.",

    
  },
  {
    image: "/bloomberg_default-a4f15fa7ee.jpg", // Image-only box
  },
  {
    image: "/bet365.png", // Image-only box
  },
  {
    title: "Crypto Market Dynamics",
    description:
      "Track whale movements, DEX volumes, and on-chain metrics in real-time. Our AI analyzes smart contract interactions and token flows to predict potential market impacts and identify emerging trends.",
  },
  {
    title: "TradFi Deep Dive",
    description:
      "Live analysis of earnings reports, SEC filings, and insider trading patterns. Our AI reads between the lines, connecting dots across global markets to surface hidden opportunities.",
  },
  {
    title: "Sports Analytics Edge",
    description:
      "Beyond basic stats: our AI processes player performance data, weather patterns, historical matchups, and social media sentiment to generate sophisticated betting insights with probability distributions.",
  },
  {
    image: "/cmclogo.svg", // Image-only box
  },
  {
    title: "Cross-Market Correlations",
    description:
      "Discover hidden relationships between sports events, market movements, and crypto trends. Our AI identifies how major events in one sector ripple across others, giving you a truly holistic view.",
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
        {image && (
          <div className="flex items-center justify-center w-full h-full p-1 sm:p-2">
            <div className="relative w-full max-w-[85%] aspect-[4/3]">
              <img
                src={image}
                alt={title}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
        )}
        
        {/* Text Content with reduced spacing */}
        {!image && (
          <>
            <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 text-white font-satoshi">
              {title}
            </h3>
            {Array.isArray(description) && (
              <div className="grid grid-cols-2 gap-1 sm:gap-2 w-full">
                {/* Left Column */}
                <ul className="text-left">
                  {description.slice(0, Math.ceil(description.length / 2)).map((item, index) => (
                    <li 
                      key={index}
                      className="text-white flex items-center gap-1 mb-1 font-satoshi"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/70 flex-shrink-0"/>
                      <span className="text-xs sm:text-sm font-semibold">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* Right Column */}
                <ul className="text-left">
                  {description.slice(Math.ceil(description.length / 2)).map((item, index) => (
                    <li 
                      key={index}
                      className="text-white flex items-center gap-1 mb-1 font-satoshi"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/70 flex-shrink-0"/>
                      <span className="text-xs sm:text-sm font-semibold">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {!Array.isArray(description) && (
              <p className="text-xs sm:text-sm font-semibold text-white font-satoshi">
                {description}
              </p>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};