import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import icSkillnet from "@/public/assets/image/icons/ic-skillnet.svg";
import icPawpal from "@/public/assets/image/icons/ic-pawpal.svg";
import icBudgetMate from "@/public/assets/image/icons/ic-budget-mate.svg";
import icDoclink from "@/public/assets/image/icons/ic-doclink.svg";
import icFixnow from "@/public/assets/image/icons/ic-fixnow.svg";
import icNexbit from "@/public/assets/image/icons/ic-nexbit.svg";
import icParkvolt from "@/public/assets/image/icons/ic-parkvolt.svg";
import icSwiftRide from "@/public/assets/image/icons/ic-swift-ride.svg";
import icWorklink from "@/public/assets/image/icons/ic-worklink.svg";
import icZontrix from "@/public/assets/image/icons/ic-zontrix.svg";

import BudgetMate from "@/public/assets/image/services/budget-mate.png";
import Doclink from "@/public/assets/image/services/doclink.png";
import Fixnow from "@/public/assets/image/services/fixnow.png";
import Nexbit from "@/public/assets/image/services/nexbit.png";
import Parkvolt from "@/public/assets/image/services/parkvolt.png";
import Pawpal from "@/public/assets/image/services/pawpal.png";
import Skillnet from "@/public/assets/image/services/skillnet.png";
import SwiftRide from "@/public/assets/image/services/swift-ride.png";
import Worklink from "@/public/assets/image/services/worklink.png";
import Zontrix from "@/public/assets/image/services/zontrix.png";

const projects = [
  {
    title: "Skillnet",
    description: "is a modern learning management system crafted to empower educational institutions, training providers, and corporate teams with an intuitive, customizable, and data-driven learning experience.",
      icon: icSkillnet,
    bg: "from-[#237B8A]/80 to-[#237B8A]/80",
    image: Skillnet
  },
  {
    title: "Pawpal",
    description: "PawPal is an on-demand pet care platform that connects pet parents with certified walkers, groomers, trainers, and veterinarians through mind.",
    icon: icPawpal,
    bg: "from-[#926DF9]/80 to-[#926DF9]/80",
    image: Pawpal
  },
  {
    title: "Parkvolt",
    description: "ParkVolt makes parking effortless — reserve your spot in advance and avoid the hassle.Find and access EV charging stations near you, all in one easy-to-use app.",
    icon: icParkvolt,
    bg: "from-[#A4FF07]/80 to-[#A4FF07]/80",
    image: Parkvolt
  },
  {
    title: "Budget Mate",
    description: "Financial Clarity in Your Pocket BudgetMate is a personal finance app thathelps individuals track expenses, build better spending habits, and reach their financial goals without complexity.",
    icon: icBudgetMate,
    bg: "from-[#7A3CFF]/80 to-[#7A3CFF]/80",
    image: BudgetMate
  },
  {
    title: "Doclink",
    description: "DocLink is a telehealth platform designed to make healthcare accessible, responsive, and convenient. It connects patients with licensed medical professionals.",
    icon: icDoclink,
    bg: "from-[#1A998E]/80 to-[#1A998E]/80",
    image: Doclink
  },
  {
    title: "Fixnow",
    description: "FixNow is a user-friendly app designed to make booking professional home repairs and maintenance a breeze. ",
    icon: icFixnow,
    bg: "from-[#359F62]/80 to-[#359F62]/80",
    image: Fixnow
  },
  {
    title: "Nexbit",
    description: "Nexbit is a modern, user-centric cryptocurrency trading platform designed to simplify and streamline the crypto investment experience for both beginners and seasoned traders.",
    icon: icNexbit,
    bg: "from-[#7550E6]/80 to-[#7550E6]/80",
    image: Nexbit
  },
  {
    title: "Swift Ride",
    description: "SwiftRide is a modern, user-centric ride-sharing platform designed to simplify & streamline your daily commutes.",
    icon: icSwiftRide,
    bg: "from-[#0066FF]/80 to-[#0066FF]/80",
    image: SwiftRide
  },
  {
    title: "Worklink",
    description: "WorkLink is a freelance marketplace designed to simplify how independent professionals find work, manage projects, and build their reputation.",
    icon: icWorklink,
    bg: "from-[#0978BF]/80 to-[#0978BF]/80",
    image: Worklink
  },
  {
    title: "Zontrix",
    description: "Zontrix is the ultimate gym and workout companion designed to help you train smarter, lift stronger, and stay in the zone.",
    icon: icZontrix,
    bg: "from-[#BCF246]/80 to-[#BCF246]/80",
    image: Zontrix
  },
  
];

const ProjectCards = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      skipSnaps: false,
      containScroll: 'keepSnaps',
      align: 'center',
      dragFree: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );
  const [slideOpacities, setSlideOpacities] = useState<number[]>([]);

  const updateSlideOpacities = useCallback(() => {
    if (!emblaApi) return;
    const slides = emblaApi.slideNodes();
    const selectedIndex = emblaApi.selectedScrollSnap();
    const totalSlides = slides.length;
    
    const newOpacities = new Array(slides.length).fill(1);
    
    // Only reduce opacity for slides that are far from the current slide
    for (let i = 0; i < totalSlides; i++) {
      const distance = Math.abs(i - selectedIndex);
      if (distance > 2) {
        newOpacities[i] = 0.3;
      }
    }
    
    setSlideOpacities(newOpacities);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateSlideOpacities();
    emblaApi.on("select", updateSlideOpacities);
    emblaApi.on("reInit", updateSlideOpacities);
    emblaApi.on("scroll", updateSlideOpacities);
    return () => {
      emblaApi.off("select", updateSlideOpacities);
      emblaApi.off("reInit", updateSlideOpacities);
      emblaApi.off("scroll", updateSlideOpacities);
    };
  }, [emblaApi, updateSlideOpacities]);

  return (
    <div className="embla w-full mx-auto py-12 lg:py-12 mt-[-80px] bg-[#101010] xl:py-0 2xl:py-12 overflow-hidden px-4">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-[20px]">
          {projects.map((project, idx) => {
            // Simplified margin pattern
            let marginTop = '';
            if (idx % 3 === 1) marginTop = 'mt-[140px]';
            else if (idx % 3 === 2) marginTop = 'mt-[70px]';
            
            return (
              <div
                key={project.title + idx}
                className={`embla__slide relative flex-shrink-0 w-[327px] h-[703px] rounded-full shadow-xl flex flex-col items-center overflow-hidden hover:rounded-none transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-md ${marginTop}`}
                style={{ opacity: slideOpacities[idx] || 1 }}
              >
                  <div className='card-bg absolute inset-0 z-[-1]'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={327}
                      height={703}
                    />
                      
                  </div>
                  <div className={`card-content relative z-10 w-[327px] h-[703px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br ${project.bg}`}>
                      <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full shadow-md mb-8.5">
                      <Image
                        src={project.icon}
                        alt={project.title}
                        width={90}
                        height={90}
                      />
                      </div>
                      <h3 className="text-lg md:text-lg lg:text-xl xl:text-2xl font-extrabold leading-tight transition-all duration-300 ease-in-out text-[#FFFFFF] group-hover:text-white">{project.title}</h3>
                      <p className="text-white text-base leading-none">{project.description}</p>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
