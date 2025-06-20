"use client";

import React from "react";
import Image from "next/image";

interface FloatingProfileProps {
  id: number;
  image: string;
  size: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animationType?: 'bounce' | 'float' | 'pulse';
}

const FloatingProfile: React.FC<FloatingProfileProps> = ({ 
  id, 
  image, 
  size, 
  position, 
  animationType = 'float' 
}) => {
  const getAnimationClass = () => {
    switch (animationType) {
      case 'bounce':
        return 'animate-bounce';
      case 'pulse':
        return 'animate-pulse';
      case 'float':
      default:
        return 'animate-float';
    }
  };

  // Calculate z-index based on size (larger profiles appear behind smaller ones)
  const zIndex = Math.max(1, 30 - Math.floor(size / 4));

  return (
    <div
      className={`absolute ${getAnimationClass()}`}
      style={{
        ...position,
        animationDelay: `${(id * 0.5) % 3}s`, // Stagger animations based on id
        animationDuration: `${4 + (id % 3)}s`, // Vary duration from 4-6s
        zIndex: zIndex,
      }}
    >
      <div className="relative group cursor-pointer">
        {/* Profile Image */}
        <div 
          className="relative overflow-hidden rounded-full shadow-xl ring-2 ring-white/30 hover:ring-white/60 transition-all duration-500 hover:scale-110 group-hover:shadow-2xl"
          style={{ width: size, height: size }}
        >
          <Image
            src={image}
            alt={`Profile ${id}`}
            width={size}
            height={size}
            className="rounded-full object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            priority={size > 80} // Prioritize larger images
          />
          
          {/* Gradient overlay for better visual depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Subtle inner shadow for depth */}
          <div className="absolute inset-0 rounded-full shadow-inner shadow-black/20"></div>
        </div>
        
        {/* Green Online Indicator */}
        <div 
          className="absolute bg-green-400 rounded-full border-2 border-white shadow-md"
          style={{
            width: Math.max(8, size * 0.15),
            height: Math.max(8, size * 0.15),
            bottom: size * 0.08,
            right: size * 0.08,
          }}
        >
          {/* Animated inner glow */}
          <div className="absolute inset-0.5 bg-green-300 rounded-full animate-ping opacity-60"></div>
          <div className="absolute inset-1 bg-green-200 rounded-full animate-pulse opacity-40"></div>
        </div>
        
        {/* Hover tooltip (optional) */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Team Member
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/80"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingProfile; 