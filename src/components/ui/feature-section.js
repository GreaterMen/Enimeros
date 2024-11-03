import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Manage Different Strategies",
      description:
        "Track and manage your custom and ai-driven stratgies.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Scrape Usable Information",
      description:
        "Before you can formulate any strategy you need to analyse the necessary information related tot he topic. Our product will encorporate modern resource and information retrieval in each market through advanced web scraping.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Learn more about Claude.",
      description:
        "Claude computer use is a brand new feature of generative AI technology, the following demostration shows an example use case by the creators.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Performance-Focused",
      description:
        "Real-time analysis across 24 global markets, finding potentials areas of leverage and opportunity everywhere and anywhere.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    (<div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4
          className="bg-clip-text 
    text-transparent 
    text-center 
    bg-gradient-to-b 
    from-neutral-900 
    to-neutral-700 font-bold text-5xl lg:text-7xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with a variety of features
        </h4>

      </div>
      <div className="relative ">
        <div
          className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>)
  );
}

const FeatureCard = ({
  children,
  className
}) => {
  return (
    (<div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>)
  );
};

const FeatureTitle = ({
  children
}) => {
  return (
    (<p
      className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>)
  );
};

const FeatureDescription = ({
  children
}) => {
  return (
    (<p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}>
      {children}
    </p>)
  );
};

export const SkeletonOne = () => {
  return (
    (<div className="">
      <div
        className="">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src="/claudeAPI.png"
            alt="header"
            width={400}
            height={300}
            className="h-full w-full " />
        </div>
      </div>
      </div>)
  );
};

export const SkeletonThree = () => {
  return (
    (<Link
      href="https://www.youtube.com/watch?v=ODaHJzOyVCQ"
      target="__blank"
      className="relative flex gap-10  h-full group/image">
      <div
        className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          {/* TODO */}
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
          <Image
            src="/claudeImage.png"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200" />
        </div>
      </div>
    </Link>)
  );
};

export const SkeletonTwo = () => {
  const images = [
    "imageFeat1.png",
    "imagefeat2.png",
  ];

  // Define fixed rotations instead of random
  const rotations = [-10, 5, -5, 10]; // Predefined rotation values
  
  const imageVariants = {
    initial: {
      scale: 1,
      rotate: 0,
    },
    whileHover: {
      scale: 1.5,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            initial="initial"
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: rotations[idx % rotations.length], // Use fixed rotation
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src="/devtools.png"
              alt="Analysis images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            initial="initial"
            key={"images-second" + idx}
            style={{
              rotate: rotations[(idx + 2) % rotations.length], // Offset rotation for second row
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-black dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src="/claudeImage.png"
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    (<div
      className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>)
  );
};

export const Globe = ({
  className
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.8 , 0.8, 0.8],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    (<canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className} />)
  );
};
