// src/app/page.js
"use client";
import Image from "next/image";
import { MacbookScroll } from "../components/ui/macbook-scroll";
import { FeaturesSectionDemo } from "../components/ui/feature-section";
import { PinContainer } from "../components/ui/3d-pin";
import { Timeline } from "../components/ui/timeline";
import { BentoGridItem } from "../components/ui/bento-grid";
import { BackgroundBeamsDemo } from "../components/ui/background-beams";

import { BentoGrid } from "../components/ui/bento-grid";
import { IconChartBar, IconTrendingUp, IconBell, IconShield, IconHeart, IconStar } from "@tabler/icons-react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { BackgroundLines } from "../components/ui/background-lines";
import { TypewriterEffectSmooth, TypewriterEffectSmoothDemo } from "../components/ui/typewriter-effect";


import { IconHome, IconList, IconInfoCircle, IconRoad, IconFileText } from "@tabler/icons-react";


import Link from "next/link";

const navItems = [
  { name: "Home", link: "#home", icon: <IconHome size={20} /> },
  { name: "Features", link: "#features", icon: <IconList size={20} /> },
  { name: "About", link: "#about", icon: <IconInfoCircle size={20} /> },
  { name: "Roadmap", link: "#roadmap", icon: <IconRoad size={20} /> },
  { name: "Docs", link: "#docs", icon: <IconFileText size={20} /> },
];

const timelineData = [
  {
    title: "Phase 1: Platform Launch & Community Foundation",
    content: (
      <p className="text-neutral-700 
  dark:text-neutral-300 
  font-sans 
  bg-clip-text 
  text-transparent 
  text-left 
  bg-gradient-to-b  
  from-neutral-600 
  to-neutral-500 
  font-bold">
        The initial launch will focus on establishing Enimeros's web presence and building early community engagement. 
        This includes deploying our website with comprehensive documentation about our vision, implementing basic Web3 wallet connectivity, 
        and launching our social media presence across Twitter, Discord, and Medium. This phase is crucial for establishing credibility in 
        both traditional finance and Web3 spaces. We'll begin publishing regular market insights and analysis through our blog to demonstrate 
        expertise and value proposition.
      </p>
    ),
  },
  {
    title: "Phase 2: Beta Access Program & Developer Community",
    content: (
      <p className="text-neutral-700 
  dark:text-neutral-300 
  font-sans 
  bg-clip-text 
  text-transparent 
  text-left 
  bg-gradient-to-b  
  from-neutral-600 
  to-neutral-500 
  font-bold">
        Before the NFT launch, we'll establish a beta access program focused on attracting experienced traders and financial analysts. 
        This phase involves creating a developer community portal, publishing our API documentation, and establishing partnerships with 
        key data providers. By building a strong developer ecosystem early, we ensure that when the platform fully launches, we'll have a 
        robust foundation of integrations and tools ready for our users. This phase also includes security audits and infrastructure scaling 
        preparations.
      </p>
    ),
  },
  {
    title: "Phase 3: NFT Launch - Market Sage Pass",
    content: (
      <p className="text-neutral-700 
  dark:text-neutral-300 
  font-sans 
  bg-clip-text 
  text-transparent 
  text-left 
  bg-gradient-to-b  
  from-neutral-600 
  to-neutral-500 
  font-bold">
        The NFT launch serves multiple strategic purposes. Rather than being merely access tokens, these NFTs represent membership 
        in an exclusive financial intelligence community. Each NFT grants:
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
  <li>Lifetime access to the platform</li>
  <li>Priority access to new features</li>
  <li>Voting rights on future development priorities</li>
  <li>Revenue sharing from premium features. 
    This model not only secures funding for continued development but creates a committed community of early adopters who are 
    invested in the platform's success. Limited to 10,000 pieces, the NFT launch will be structured in tiers, with earlier adopters 
    receiving additional benefits.</li>
</ul>
        </p>


      
    ),
  },
  {
    title: "Phase 4: Core Product Release",
    content: (
      <p className="text-neutral-700 
  dark:text-neutral-300 
  font-sans 
  bg-clip-text 
  text-transparent 
  text-left 
  bg-gradient-to-b  
  from-neutral-600 
  to-neutral-500 
  font-bold">
        The release of our comprehensive market analysis platform marks the transition from promise to delivery. The initial release will include:
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>Real-time market data aggregation</li>
          <li>AI-powered trend analysis</li>
          <li>Custom alert systems</li>
          <li>Portfolio tracking</li>
          <li>Integration with major DEXs and CEXs</li>
          <li>
            This phase focuses on stability, user experience, and establishing the platform as a reliable tool for daily use in trading and investment decisions.
          </li>
        </ul>
      </p>
    ),
  },
  
  {
    title: "Phase 5: Institutional Integration",
    content: (
      <p className="text-neutral-700 
  dark:text-neutral-300 
  font-sans 
  bg-clip-text 
  text-transparent 
  text-left 
  bg-gradient-to-b  
  from-neutral-600 
  to-neutral-500 
  font-bold">
        Building on our established retail presence, this phase focuses on developing enterprise-grade features and partnerships with traditional financial institutions. This includes:
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>Institutional-grade API access</li>
          <li>Custom analysis tools for large portfolios</li>
          <li>Compliance reporting features</li>
          <li>Integration with traditional trading platforms</li>
          <li>
            This expansion into institutional markets provides additional revenue streams and enhances the platform's credibility in the broader financial sector.
          </li>
        </ul>
      </p>
    ),
  }
  
  
];

const features = [
  {
    title: "Real-time Market Data",
    description:
      "Access live market data from multiple exchanges, aggregated in real-time for accurate and up-to-date information.",
    icon: <IconChartBar size={40} className="text-blue-500" />,
  },
  {
    title: "AI-Powered Trend Analysis",
    description:
      "Utilize advanced AI algorithms to detect market trends and make informed trading decisions.",
    icon: <IconTrendingUp size={40} className="text-green-500" />,
  },
  {
    title: "Custom Alerts",
    description:
      "Set up personalized alerts for price movements, market trends, and more, delivered directly to you.",
    icon: <IconBell size={40} className="text-red-500" />,
  },
  {
    title: "Secure Transactions",
    description:
      "Ensure all your transactions are secure with our state-of-the-art encryption protocols.",
    icon: <IconShield size={40} className="text-yellow-500" />,
  },
  {
    title: "User-Friendly Interface",
    description:
      "Navigate through our platform effortlessly with an intuitive and responsive design.",
    icon: <IconHeart size={40} className="text-pink-500" />,
  },
  {
    title: "Premium Support",
    description:
      "Get assistance anytime with our dedicated premium support team ready to help you.",
    icon: <IconStar size={40} className="text-purple-500" />,
  },
  // Add more features as needed
];


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {/* Floating Navbar */}
      <FloatingNav navItems={navItems} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Home Section */}
        <section id="home" className="flex flex-col">
  {/* Background Lines and Title Section - Kept exactly the same */}
  <div>
    <div className="w-screen bg-dot-white/[0.2] bg-repeat min-h-screen">
      <div className="w-screen bg-dot-white/[0.2] bg-repeat min-h-screen bg-black relative flex items-center justify-center pb-24 sm:pb-28 md:pb-32 lg:pb-40 xl:pb-48 2xl:pb-56">
        <BackgroundLines className="z-0"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Enimeros
          </h1>
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Stay ahead of the Market
          </h2>
          <TypewriterEffectSmoothDemo />
        </div>
      </div>
    </div>

    {/* MacBook and BentoGrid Section - Modified for vertical stacking */}
    <div className="w-screen bg-black bg-dot-white/[0.2] bg-repeat min-h-screen">
      <div id="macbook-section" className="bg-dot-white/[0.2] bg-repeat min-h-screen mx-auto w-full bg-black relative flex items-center justify-center pb-24 sm:pb-28 md:pb-32 lg:pb-40 xl:pb-48 2xl:pb-56">
        <div className="flex flex-col items-center justify-center w-full max-w-[95%] mx-auto gap-16 px-4"> {/* Increased gap to 16 */}
          {/* MacBook Container - Larger size on bigger screens */}
          <div className="w-full flex justify-center items-center">
            <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] flex justify-center items-center"> {/* Adjusted widths for different screens */}
              <MacbookScroll
                src="/dash.png"
                showGradient={true}
                title="Your Financial Dashboard"
                badge={
                  <span className="bg-red-500 text-white px-2 py-1 rounded">N</span>
                }
              />
            </div>
          </div>

          {/* BentoGrid Container */}
          <div className="w-full flex justify-center items-center">
            <BentoGrid 
              className="w-full max-w-[90%] md:max-w-[85%] lg:max-w-[80%] transform origin-center" // Adjusted max-width
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

       {/* Combined About and Features Section */}
       <section id="about-features" className=" w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center relative  sm:py-28 md:py-32 lg:py-40 xl:py-48 2xl:py-56">
          {/* Features Div */}
          <FeaturesSectionDemo/>
          {/* About Div */}
          <div id="about" className="relative py-24 sm:py-28 md:py-32 lg:py-40 xl:py-48 2xl:py-56">
            {/* Content */}
            
          </div>
        </section>
        
        
        {/* Roadmap Section */}
        <section id="roadmap" className="min-h-screen flex items-center justify-center">
          <div className=" w-screen bg-dot-black/[0.2] bg-repeat min-h-screen">
            {/* You can adjust the container width as needed */}
            <Timeline data={timelineData} />
          </div>
        </section>


        {/* Docs Section */}
<section id="docs" className="relative min-h-screen flex flex-col items-center justify-center">
  {/* Background */}
  <div className="absolute inset-0 z-0">
    <BackgroundBeamsDemo />
  </div>
  
  {/* Content */}
  <div className="relative z-10">
    <PinContainer title="Documentation" href="https://enimeros.gitbook.io/enimeros">
      <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 
        w-[20rem] h-[30rem] 
        sm:w-[30rem] sm:h-[40rem]
        md:w-[35rem] md:h-[45rem]
        lg:w-[40rem] lg:h-[50rem]">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base sm:text-lg md:text-xl text-slate-100">
          Documentation
        </h3>
        <div className="text-sm sm:text-base !m-0 !p-0 font-normal">
          <span className="text-slate-100">
            Explore our comprehensive documentation for detailed insights into our platform's features, technical specifications, and implementation guides. Access our GitBook for in-depth understanding of Enimeros's capabilities and integration options.
          </span>
        </div>
        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
      </div>
    </PinContainer>
  </div>
</section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}
