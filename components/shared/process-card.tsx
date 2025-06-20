"use client";
import React, { useState } from "react";
import { useMobileDetection } from "../../hooks/useMobileDetection";

interface ProcessCardProps {
  number: string; 
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ProcessCard = ({ number, title, description, isActive = false, onClick }: ProcessCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMobileDetection();

  const isActiveState = (isActive && isMobile) || isHovered;
  
  return (
    <div 
      className="relative w-full max-w-[280px] md:max-w-[350px] lg:max-w-[400px] transform transition-all duration-300 lg:hover:rotate-10 cursor-pointer lg:cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
      className="absolute inset-[-20px] w-[calc(100%+30px)] h-[calc(100%+32px)] z-50 lg:rotate-5 lg:hover:rotate-5"
      style={{
        backgroundImage: "url(/assets/image/process-halftone.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      />
      <div
        className="absolute inset-[-2px] rounded-2xl md:rounded-3xl transition-all duration-300"
        style={{
          background: isActiveState
            ? "linear-gradient(146.95deg, #43FF81 4.15%, #00CE44 98.66%)"
            : "linear-gradient(146.95deg, #00CE44 4.15%, #006822 98.66%)",
          // padding: "8px md:10px",
        }}
      ></div>
      <div
        className="relative h-full w-full py-6 px-4 md:py-8 md:px-5 lg:py-10 lg:px-6 rounded-2xl md:rounded-3xl z-10 transition-all duration-300"
        style={{
          boxShadow: isActiveState 
            ? "-17px 15px 40px 0px #00CE4440" 
            : "-17px 15px 30px 0px #0000004D",
          background: isActiveState 
            ? "linear-gradient(144.15deg, #43FF81 1.22%, #00CE44 100%)"
            : "linear-gradient(144.15deg, #2B2B2B 1.22%, #171717 100%)",
          // backgroundSize: "25px 25px",
        }}
      >
        <div
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 transition-colors duration-300 text-transparent"
          style={
            isActiveState 
              ? { WebkitTextStroke: "1px #000" } 
              : { WebkitTextStroke: "1px #00CE44" }
          }
        >
          {number}.
        </div>

        <h3 
          className={`text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4 transition-colors duration-300 ${
            isActiveState ? "text-black" : "text-white"
          }`}
        >
          {title}
        </h3>

        <p 
          className={`text-sm md:text-base lg:text-lg leading-relaxed font-medium transition-colors duration-300 ${
            isActiveState ? "text-black" : "text-white"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;
