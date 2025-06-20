"use client"

import HeroSection from "@/components/home-page/hero-section";
import VideoSection from "@/components/home-page/video-section";
import SeventhSection from "@/components/home-page/seventh-section";
import NinethSection from "@/components/home-page/nineth-section";
import TenthSection from "@/components/home-page/tenth-section";
import TestimonialSliderSection from "@/components/home-page/eigth-section";
import FifthSection from "@/components/home-page/fifth-section";
import ThirdSection from "@/components/home-page/third-section";
import FourthSection from "@/components/home-page/fourth-section";
import SixthSection from "@/components/home-page/sixth-section";
import SectionWrapper from "@/components/shared/section-wrapper";
import { useRef, useEffect } from "react";
import AppsSlider from "@/components/home-page/app-slider";

export default function Home() {
  const thirdSectionRef = useRef<HTMLDivElement>(null);

  const scrollToThirdSection = () => {
    thirdSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const thirdSection = thirdSectionRef.current;
    if (!thirdSection) return;

    let isScrolling = false;

    const handleWheel = (e: WheelEvent): void => {
      if (isScrolling) return;

      const rect = thirdSection.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      
      if (isInView) {
        const scrollDirection = e.deltaY > 0 ? 'down' : 'up';
        const isAtTop = rect.top >= -10;

        if (scrollDirection === 'up' && isAtTop) {
          e.preventDefault();
          isScrolling = true;
          // Scroll back to video section
          const videoSection = document.querySelector('[data-section="video"]');
          if (videoSection) {
            videoSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
          setTimeout(() => { isScrolling = false; }, 1000);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div>
      <div className="relative z-10 w-full">
        <div className="sticky top-0 z-10 w-full ">

          {/* First two sections with smooth scrolling */}
          <SectionWrapper
            isFirst={true}
            onScrollToNext={scrollToThirdSection}
          >
              <HeroSection />
            
          </SectionWrapper>
      </div>
      <div className="relative z-20 w-full">
        <AppsSlider />

      </div>

      </div>
      {/* All remaining sections with normal scrolling */}
      <div ref={thirdSectionRef}>
        <ThirdSection/>
      </div>
      <FourthSection/>

      <div data-section="video">
          <VideoSection/>
        </div>
      
      <FifthSection/>
      <SixthSection/>
      <SeventhSection />
      <TestimonialSliderSection/>
      <NinethSection/>
      <TenthSection/>
    </div>
  );
}
