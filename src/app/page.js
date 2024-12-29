// src/app/page.js
"use client";
import Image from "next/image";
import { PinContainer } from "../components/ui/3d-pin";
import { Timeline } from "../components/ui/timeline";
import { BackgroundBeamsDemo } from "../components/ui/background-beams";

import { BentoGrid } from "../components/ui/bento-grid";
import { FloatingNav } from "../components/ui/floating-navbar";
import { BackgroundLines } from "../components/ui/background-lines";
import { TypewriterEffectSmooth, TypewriterEffectSmoothDemo } from "../components/ui/typewriter-effect";

import Link from "next/link";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "Features", link: "#features" },
  { name: "Tournament", link: "#roadmap" },
  { name: "Docs", link: "#docs" },
];


const timelineData = [
  {
    title: "Step 1: Connect Wallet",
    content: (
      <p className="text-white bg-clip-text text-transparent text-left bg-gradient-to-b  from-neutral-600 to-neutral-500 font-bold">
        <ul className="text-lg md:text-xl lg:text-2xl list-disc space-y-4 ">
          <li>Connect your Solana wallet</li>
        </ul>
        
      </p>
    ),
  },
  {
    title: "Step 2: Choose Your Tournament",
    content: (
      <p className="text-white bg-clip-text text-transparent text-left bg-gradient-to-b  from-neutral-600 to-neutral-500 font-bold">
        <ul className="text-lg md:text-xl lg:text-2xl list-disc space-y-4 ">
          <li>Light Pickems ($5 entry)</li>
          <li>High Roller Events ($100 entry)</li>
        </ul>
      </p>
    ),
  },
  {
    title: "Step 3: Start Trading",
    content: (
      <p className="text-white bg-clip-text text-transparent text-left bg-gradient-to-b  from-neutral-600 to-neutral-500 font-bold">

        <ul className="text-lg md:text-xl lg:text-2xl list-disc space-y-4 ">
          <li>Trade on any Solana DEX</li>
          <li>Monitor real-time rankings</li>
          <li>Track top performerss</li>
        </ul>
        </p>
      
    ),
  },
  {
    title: "Step 4: Collect Rewards",
    content: (
      <p className="text-white 
  bg-clip-text 
  text-transparent 
  text-left 
  bg-gradient-to-b  
  from-neutral-600 
  to-neutral-500 
  font-bold">
    <ul className="text-lg md:text-xl lg:text-2xl list-disc space-y-4 ">
          <li>Claim your winnings!</li>
        </ul>
        
      </p>
    ),
  }
  
  
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <FloatingNav navItems={navItems} />
      <main className="flex-1">
        <section id="home" className="flex flex-col">
          <div>
            <div className="w-screen bg-repeat min-h-screen">
              <div className="w-screen bg-repeat min-h-screen relative flex items-center justify-center pb-24 sm:pb-28 md:pb-32 lg:pb-40 xl:pb-48 2xl:pb-56">
                <BackgroundLines className="z-0"/>
                <div className="absolute top-1 left-1 z-20">
                  <Image src="/logo.png"alt="Logo"width={100}height={100}/>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                  <h1 className="text-white text-center text-2xl md:text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Enimeros
                  </h1>
                  <h2 className="text-white text-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    World's First Solana Trading League
                  </h2>
                  <TypewriterEffectSmoothDemo />
                </div>
              </div>
            </div>
 
            <div className="w-screen bg-repeat min-h-screen">
              <div className="bg-repeat min-h-screen mx-auto w-full relative flex items-center justify-center pb-24 sm:pb-28 md:pb-32 lg:pb-40 xl:pb-48 2xl:pb-56">
                <div className="flex flex-col items-center justify-center w-full max-w-[95%] mx-auto gap-16 px-4">
                  <div className="w-full flex justify-center items-center">
                    <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] flex justify-center items-center">
                    </div>
                  </div>
 
                  <div className="w-full flex justify-center items-center">
                    <BentoGrid 
                      className="w-full max-w-[90%] md:max-w-[85%] lg:max-w-[80%] transform origin-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          
 
          <section 
            id="roadmap" 
            className="min-h-screen flex items-center justify-center"
          >
            <div className="w-screen bg-repeat min-h-screen">
              <Timeline data={timelineData} />
            </div>
          </section>
 
          <section 
            id="docs" 
            className="relative min-h-screen flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 z-0">
            </div>
            <div className="relative z-10">
            <PinContainer title="Documentation" href="https://enimeros.gitbook.io/enimeros">
            <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 w-[15rem] h-[20rem] sm:w-[20rem] sm:h-[25rem] md:w-[25rem] md:h-[30rem] lg:w-[30rem] lg:h-[35rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base sm:text-lg md:text-xl text-slate-100">
                Documentation
                 </h3>
                 <div className="text-sm sm:text-base !m-0 !p-0 font-normal">
                   <span className="text-slate-100">
                     Explore our comprehensive documentation for detailed insights into our platform's features, technical specifications, and implementation guides.
                   </span>
                 </div>
                 <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
               </div>
             </PinContainer>
            </div>
          </section>
        </section>
      </main>
 
      <footer className="py-4">
      </footer>
    </div>
  );
 }