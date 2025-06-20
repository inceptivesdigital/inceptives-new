"use client";

import { useState, useRef } from "react";
import ArcCarousel from "../shared/arc-carousal";
import { testimonials } from "./testimonial-slider/data";
import { useMobileDetection } from "../../hooks/useMobileDetection";
import RespulsionBackground from "../shared/respulsion-background";

const TestimonialSliderSection = () => {
  const isMobile = useMobileDetection();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate repulsion direction (opposite to mouse position)
    const deltaX = centerX - mouseX;
    const deltaY = centerY - mouseY;

    // Normalize and scale the repulsion effect
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
    const intensity = Math.min(distance / maxDistance, 1);

    // Scale the repulsion effect
    const repulsionStrength = 30; // Adjust this value to control repulsion intensity
    const repulsionX = (deltaX / distance) * intensity * repulsionStrength;
    const repulsionY = (deltaY / distance) * intensity * repulsionStrength;

    setMousePosition({
      x: isNaN(repulsionX) ? 0 : repulsionX,
      y: isNaN(repulsionY) ? 0 : repulsionY,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section
    id="reviews"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url('/assets/image/bg-overlay.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        transform: "rotateZ(180deg)",
      }}
      ref={sectionRef}
      className={`relative overflow-hidden`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background with repulsion effect */}
      <RespulsionBackground
        mousePosition={mousePosition}
        src="/assets/image/slider-group.png"
        className="absolute inset-0 w-full h-full !bg-contain !bg-center  bg-no-repeat rotate-180"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7))",
          transform: "rotateZ(180deg)",
        }}
      />

      <div style={{ transform: "rotateZ(180deg)" }}>
      
        <div className="container mx-auto pt-0 lg:pt-26 xl:pt-36 relative z-10">
          {/* Main Content */}
          <div className="flex items-center justify-center min-h-0">
            <ArcCarousel radius={isMobile ? 200 : 350} slides={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSliderSection;
