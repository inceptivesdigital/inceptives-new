"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import NavigationButtons from "../home-page/testimonial-slider/navigation-button";
import { useMobileDetection } from "../../hooks/useMobileDetection";

interface Slide {
  id: number;
  image: string;
}

interface ArcCarouselProps {
  slides: Slide[];
  radius?: number;
  centerIndex?: number;
}

export default function ArcCarousel({
  radius = 350,
  centerIndex = 0,
  slides
}: ArcCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(centerIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useMobileDetection();
  
  // Swipe functionality state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length;
  // Adjusted spacing - different for mobile and desktop
  const angleStep = isMobile 
    ? (Math.PI * 5) / totalSlides  // Tighter arc for mobile
    : (Math.PI * 1.4) / totalSlides; // Original for desktop

  // Responsive radius
  const responsiveRadius = isMobile ? radius * 0.6 : radius;

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getSlideStyle = (index: number) => {
    // Calculate the position relative to current center slide
    let relativeIndex = index - currentIndex;

    // Handle wrapping for infinite effect
    if (relativeIndex > totalSlides / 2) {
      relativeIndex -= totalSlides;
    } else if (relativeIndex < -totalSlides / 2) {
      relativeIndex += totalSlides;
    }

    
    const angle = relativeIndex * angleStep;

    // Position on the circle (upper arc) - responsive
    const x = Math.sin(angle) * responsiveRadius * (isMobile ? 1.6 : 1.9);
    const y = -Math.cos(angle) * responsiveRadius * (isMobile ? 0.6 : 0.8);

    // Only rotate non-center slides
    const rotation = index === currentIndex ? 0 : angle * (180 / Math.PI) * 0.4;

    // Determine visibility - show fewer slides on mobile
    const visibleRange = isMobile ? 1 : 2; // Show 1 on each side for mobile, 2 for desktop
    const isVisible = Math.abs(relativeIndex) <= visibleRange;

    // Z-index for proper layering
    const zIndex =
      index === currentIndex ? 20 : Math.max(1, 10 - Math.abs(relativeIndex));

    return {
      transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
      opacity: isVisible ? 1 : 0,
      zIndex,
      transition: isAnimating
        ? "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
        : "none",
      pointerEvents: (isVisible ? "auto" : "none") as "auto" | "none",
    };
  };

  // Swipe detection
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  // Mouse drag functionality for desktop
  const [mouseStart, setMouseStart] = useState<number | null>(null);
  const [mouseEnd, setMouseEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const onMouseDown = (e: React.MouseEvent) => {
    setMouseEnd(null);
    setMouseStart(e.clientX);
    setIsDragging(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    // Handle dragging if mouse is down
    if (!isDragging) return;
    setMouseEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!mouseStart || !mouseEnd || !isDragging) {
      setIsDragging(false);
      return;
    }
    
    const distance = mouseStart - mouseEnd;
    const isLeftDrag = distance > minSwipeDistance;
    const isRightDrag = distance < -minSwipeDistance;

    if (isLeftDrag) {
      goToNext();
    } else if (isRightDrag) {
      goToPrev();
    }
    
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${isMobile ? 'h-[600px]' : 'h-[900px]'} pb-20 flex overflow-hidden bg-gradient-to-br select-none`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
     
      {/* Full width background slider group image */}
      {/* <Image
        src="/assets/image/slider-group.png"
        alt="Background Slider Group"
        width={1920}
        height={650}
        className="absolute inset-0 top-0 object-contain z-[0] w-full h-full"
        priority
      /> */}

      {/* Carousel container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
       
          {/* Centered phone image - responsive */}
          <Image
            src="/assets/image/phone.png"
            alt="Mobile Phone"
            width={300}
            height={600}
            className={`absolute left-1/2 -translate-x-1/2 z-[5] ${
              isMobile 
                ? 'top-1/2 -translate-y-[30%] w-[200px] h-[400px]' 
                : 'top-[45%] -translate-y-[35%] w-[300px] h-[600px]'
            }`}
          />
         
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute left-1/2 -translate-x-1/2 cursor-pointer ${
                isMobile 
                  ? '-bottom-24 -translate-y-[50%]' 
                  : 'top-[90%] -translate-y-0'
              }`}
              style={getSlideStyle(index)}
              onClick={() => goToSlide(index)}
            >
              {/* <Card className={`w-72 h-48 ${index === currentIndex ? "shadow-xl border-2 border-white" : "shadow-md"}`}>
                <CardContent className="p-4 h-full flex items-center justify-center">{slide.content}</CardContent>
              </Card> */}

              <div className="relative">
                <Image
                  src={slide.image}
                  className={`${index !== currentIndex ? "border-2" : ""} rounded-3xl`}
                  alt="Testimonial"
                  width={isMobile ? 180 : 250}
                  height={isMobile ? 225 : 225}
                />
                {/* {index !== currentIndex && <div 
                  className="absolute inset-0 bg-black/50  rounded-lg top-0 left-0 right-0 bottom-0"
                  style={{
                    width: isMobile ? '180px' : '250px',
                    height: isMobile ? '225px' : '225px'
                  }}
                />} */}
              </div>
              
            </div>
          ))}
      

        {/* Navigation buttons */}
        <div className={`${isMobile ? 'absolute -bottom-10' : 'absolute bottom-8 left-1/2 -translate-x-1/2'} z-40`}>
          <NavigationButtons onPrevious={goToPrev} onNext={goToNext} />
        </div>
      </div>

     
    </div>
  );
}
