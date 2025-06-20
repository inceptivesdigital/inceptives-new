"use client"
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AnimatedButton from "../shared/animated-button";
import ScheduleButton from "../shared/schedule-button";

const slides = [
  { id: 1, image: "/assets/image/reviews.png", alt: "Review" },
  { id: 2, image: "/assets/image/trust-pilot.png", alt: "Trustpilot" },
  { id: 3, image: "/assets/image/good-firms.png", alt: "Good Firms" },
  { id: 4, image: "/assets/image/reviews.png", alt: "Reviews" },
  { id: 5, image: "/assets/image/trust-pilot.png", alt: "Trustpilot" },
  { id: 6, image: "/assets/image/good-firms.png", alt: "Good Firms" }
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = () => {
    if (!sectionRef.current) return;
    // repulsion logic can go here if needed in the future
  };

  const handleMouseLeave = () => {
    // optional: reset any interaction state here
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex h-full h-larger-screen flex-col items-center justify-center text-center px-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="relative z-20 flex flex-col items-center gap-4 md:gap-6 pt-20 md:pt-32 pb-8 md:pb-16">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <span className="flex items-center gap-2 font-extrabold">
            <span className="flex items-center gap-2 relative">
              <Image
                src="/assets/image/blocks.png"
                alt="block"
                width={45}
                className="absolute top-[-15px] left-[45px] md:top-[-30px] md:left-[90px] w-[25px] h-[25px] md:w-[45px] md:h-[45px]"
                height={45}
              />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                From Vision To Victory
              </span>
            </span>
            <span className="flex items-center gap-2 relative">
              <Image
                src="/assets/image/image-2.png"
                alt="image-2"
                width={300}
                height={250}
              />
              <Image
                src="/assets/image/smiley.png"
                alt="smiley"
                width={40}
                height={40}
                className="absolute top-[-8px] right-[-10px] md:top-[-15px] md:right-[-20px] w-[20px] h-[20px] md:w-[40px] md:h-[40px]"
              />
            </span>
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <span className="flex items-center gap-2">
            <span className="relative">
              <Image
                src="/assets/image/fire.png"
                alt="fire"
                className="absolute bottom-[-5px] left-[-10px] md:bottom-[-10px] md:left-[-20px] w-[25px] h-[25px] md:w-[50px] md:h-[50px]"
                width={50}
                height={50}
              />
              <Image
                src="/assets/image/image-3.png"
                alt="image-2"
                width={150}
                height={100}
                className="rounded-2xl mr-1 md:mr-2 w-[75px] h-[50px] sm:w-[100px] sm:h-[70px] md:w-[150px] md:h-[100px]"
              />
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              We Code Your Success!
            </span>
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-12 mt-16 md:mt-36 w-full md:w-[60%] px-4 md:px-0">
          <AnimatedButton />
          <ScheduleButton />
        </div>
      <ReviewSlider />
      
      </div>

    </section>
  );
};

const ReviewSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      skipSnaps: false,
      containScroll: "trimSnaps",
      align: "start",
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })],
  );

  const [slideOpacities, setSlideOpacities] = useState<number[]>([]);

  const updateSlideOpacities = useCallback(() => {
    if (!emblaApi) return;

    const slides = emblaApi.slideNodes();
    const selectedIndex = emblaApi.selectedScrollSnap();
    const slidesPerView = 3;
    const totalSlides = slides.length;
    const visibleSlides = [];

    for (let i = 0; i < slidesPerView; i++) {
      const slideIndex = (selectedIndex + i) % totalSlides;
      visibleSlides.push(slideIndex);
    }

    const newOpacities = new Array(slides.length).fill(1);
    if (visibleSlides.length >= 3) {
      newOpacities[visibleSlides[0]] = 0.3;
      newOpacities[visibleSlides[visibleSlides.length - 1]] = 0.3;
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
    <div className="embla w-full max-w-5xl mx-auto py-12 lg:py-12 xl:py-0 2xl:py-12 overflow-hidden px-4">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_calc(33.333%-16px)] min-w-0 mr-2 md:mr-4 transition-opacity duration-300 ease-in-out"
              style={{ opacity: slideOpacities[index] || 1 }}
            >
              <div className="embla_slide_content flex justify-center items-center rounded-lg shadow-lg py-4 md:py-6 h-full relative">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  width={200}
                  height={50}
                  className="object-contain w-[120px] md:w-[200px] h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent rounded-lg z-[-1]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;