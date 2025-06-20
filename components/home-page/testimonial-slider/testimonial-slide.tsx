"use client";

import React from "react";
import Image from "next/image";

interface TestimonialSlideProps {
  testimonial: {
    id: number;
    image: string;
  };
  index: number;
  selectedIndex: number;
}

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({ testimonial, index, selectedIndex }) => {
  return (
    <div className="embla__slide flex-[0_0_100%] min-w-0 relative">
      <div className="h-full flex flex-col justify-center items-center px-4 relative">
        {/* Slide with rotation and overlay */}
        <div 
          className="relative transition-all duration-500 ease-in-out "
          style={{
            transform: `rotate(${index === selectedIndex ? '0deg' : index < selectedIndex ? '-15deg' : '15deg'}) scale(${index === selectedIndex ? '1' : '0.8'})`,
            zIndex: index === selectedIndex ? 10 : 5,
          }}
        >
          <Image
            src={testimonial.image}
            alt="Testimonial"
            width={280}
            height={350}
            className={`w-full h-auto object-cover ${index !== selectedIndex ? 'opacity-50' : 'opacity-100'}`}
          />
          
          {/* Dark overlay for non-active slides */}
          {/* {index !== selectedIndex && (
            <div className="absolute inset-0 rouned-lg bg-black/80  w-[95%] h-[92%] transition-opacity duration-500" />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide; 