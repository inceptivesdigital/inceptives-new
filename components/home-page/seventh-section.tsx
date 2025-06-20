"use client";
import React, { useState } from "react";
import ProcessCard from "../shared/process-card";
import Image from "next/image";
import AnimatedButton from "../shared/animated-button";
import { useMobileDetection } from "@/hooks/useMobileDetection";

const processSteps = [
  {
    number: "01",
    title: "Design",
    description:
      "From Wireframes To High-Fidelity Mockups, We Design Intuitive User Journeys And Stunning Interfaces That Feel As Good As They Look.",
  },
  {
    number: "02",
    title: "Develop",
    description:
      "Our Development Team Turns Designs Into Robust, Scalable Apps — Whether It's Mobile, Web, Or Cross-Platform. Fast, Clean, And Built To Perform.",
  },
  {
    number: "03",
    title: "A/B Testing",
    description:
      "We Run Your App Through Rigorous QA To Squash Bugs, Smooth Edges, And Ensure Everything Works Perfectly — On Every Device, Every Time.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Once You're Ready, We Help Launch Your App To The World — And Stick Around To Support Updates, Improvements, And New Features As You Scale.",
  },
];

const SeventhSection = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const isMobile = useMobileDetection();
  const handleCardClick = (index: number) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <section
      className="relative pt-12 md:pt-16 lg:pt-24 pb-24 md:pb-14 lg:pb-12 overflow-hidden"
      style={{
        background:
          "radial-gradient(61.25% 61.25% at 50.91% 61.25%, #101010 0%, #101010 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Updated heading to match image */}
        <div className="relative flex flex-col items-center mb-10 md:mb-16 lg:mb-20">
          <span className="relative">
            <Image
              className="absolute bottom-[0px] right-[40%] md:bottom-[-15px] md:right-[-100px] lg:bottom-[-20px] lg:right-[-140px] w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[157px] lg:h-[157px]"
              src="/assets/image/process-plan.png"
              alt="Process Badge"
              width={157}
              height={157}
            />
            <h3 className="text-xl md:text-3xl lg:text-4xl text-center md:text-start md:mb-2 mb-20 font-medium text-gray-300  pr-8 md:pr-0">
              Every Great App Starts With A Great Plan
            </h3>
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-200 text-center px-4 md:px-0">
            Our Process: Designed To Deliver!
          </h2>
        </div>

        <div className="relative">
          {/* Process cards - Vertical overlap on mobile, horizontal staggered on desktop */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-center justify-center">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative w-[90%] max-w-xs lg:max-w-none transition-all duration-300 ease-in-out
                  ${
                    index % 2 === 0
                      ? "lg:translate-y-0 lg:-rotate-[9.2deg] translate-x-0 -rotate-[5deg]"
                      : "lg:translate-y-10 lg:rotate-[9.2deg] translate-x-4 rotate-[5deg]"
                  }
                  ${index > 0 ? "-mt-4 lg:mt-0" : ""}
                  lg:-mx-2.5
                `}
                style={{
                  zIndex: isMobile
                    ? activeCardIndex === index
                      ? 999
                      : processSteps.length - index
                    : "",
                }}
              >
                <ProcessCard
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isActive={activeCardIndex === index}
                  onClick={() => handleCardClick(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Button Section - After Process Cards */}
        <div className="flex justify-center mt-12 md:mt-24 lg:mt-36">
          <div className="w-full md:w-2/3 lg:w-1/4">
            <AnimatedButton text="Get A Call Now!" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;
