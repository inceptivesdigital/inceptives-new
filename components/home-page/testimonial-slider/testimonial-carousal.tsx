"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialSlide from "./testimonial-slide";
import NavigationButtons from "./navigation-button";

interface Testimonial {
  id: number;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;
    
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="relative max-w-6xl w-full">
      {/* Mobile Phone Container */}
      <div className="relative flex items-center justify-center">
        <div className="relative z-20">
          <Image
            src="/assets/image/phone.png"
            alt="Mobile Phone"
            width={400}
            height={600}
            className="relative z-10"
          />
          
          {/* Testimonial Slider inside phone */}
          <div className="absolute top-[50%] left-[12%] right-[12%] bottom-[15%] z-20">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container flex">
                {testimonials.map((testimonial, index) => (
                  <TestimonialSlide
                    key={testimonial.id}
                    testimonial={testimonial}
                    index={index}
                    selectedIndex={selectedIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons onPrevious={scrollPrev} onNext={scrollNext} />
    </div>
  );
};

export default TestimonialCarousel; 