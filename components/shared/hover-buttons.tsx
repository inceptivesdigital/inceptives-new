"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

interface TechLogo {
  name: string
  iconPath: string
}
const techLogos = [
  {name:"angular", iconPath: "/assets/image/service/icon/angular.svg" },
  {name:"aws", iconPath: "/assets/image/service/icon/aws.svg" },
  {name:"docker", iconPath: "/assets/image/service/icon/docker.svg" },
  {name:"expo",   iconPath: "/assets/image/service/icon/expo.svg" },
  {name:"first", iconPath: "/assets/image/service/icon/first.svg" },
  {name:"flutter", iconPath: "/assets/image/service/icon/flutter.svg" },
  {name:"gcp", iconPath: "/assets/image/service/icon/gcp.svg" },
  {name:"html", iconPath: "/assets/image/service/icon/html.svg" },
  {name:"java", iconPath: "/assets/image/service/icon/java.svg" },
  {name:"js", iconPath: "/assets/image/service/icon/js.svg" },
  {name:"next", iconPath: "/assets/image/service/icon/next.svg" },
  {name:"nuxt", iconPath: "/assets/image/service/icon/nuxt.svg" },
  {name:"react", iconPath: "/assets/image/service/icon/react.svg" },
  {name:"vite", iconPath: "/assets/image/service/icon/vite.svg" },
  {name:"vue", iconPath: "/assets/image/service/icon/vue.svg" }
];

interface TechIconProps {
  tech: TechLogo
  opacity?: number
}

function TechIcon({ tech, opacity = 1 }: TechIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-[70px] h-[60px] md:w-[100px] md:h-[90px] flex items-center justify-center rounded-lg md:rounded-xl border-2 transition-all duration-300 cursor-pointer flex-shrink-0"
      style={{
        backgroundColor: "black",
        borderColor: isHovered ? "#00CE44" : "#4D4D4D",
        boxShadow: isHovered ? "0px -1px 14px 2px rgba(0, 206, 68, 0.2)" : "none",
        opacity: opacity
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={tech.name}
      data-cursor="opaque"
    >
      <div
        className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] transition-all duration-300"
        style={{
          color:  isHovered ? "#00CE44" : "#4D4D4D",
          filter: isHovered ? "brightness(0) saturate(100%) invert(63%) sepia(83%) saturate(1243%) hue-rotate(101deg) brightness(97%) contrast(105%)" : "brightness(0) saturate(100%) invert(31%) sepia(0%) saturate(0%) hue-rotate(143deg) brightness(98%) contrast(87%)"
        }}
      >
        <Image
          src={tech.iconPath || "/placeholder.svg"}
          alt={tech.name}
          width={50}
          height={50}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}

export default function HoverButtons() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    }
  }, [
    Autoplay({ delay: 2000, stopOnInteraction: false })
  ])

  const [iconOpacities, setIconOpacities] = useState<number[]>([])

  const updateIconOpacities = useCallback(() => {
    if (!emblaApi) return

    // Get slides currently in view
    const slidesInView = emblaApi.slidesInView()
    
    if (slidesInView.length === 0) return

    // Initialize all opacities to 1
    const newOpacities = new Array(techLogos.length).fill(1)

    // Apply gradient fade effect to visible slides
    if (slidesInView.length >= 3) {
      slidesInView.forEach((slideIndex, position) => {
        if (position === 0) {
          // First visible icon - heavily faded
          newOpacities[slideIndex] = 0.1
        } else if (position === 1) {
          // Second icon - moderately faded
          newOpacities[slideIndex] = 0.3
        } else if (position === slidesInView.length - 1) {
          // Last visible icon - heavily faded
          newOpacities[slideIndex] = 0.1
        } else if (position === slidesInView.length - 2) {
          // Second to last icon - moderately faded
          newOpacities[slideIndex] = 0.3
        } else {
          // Middle icons - full opacity
          newOpacities[slideIndex] = 1.0
        }
      })
    } else if (slidesInView.length === 2) {
      // If only 2 slides visible, fade both edges
      newOpacities[slidesInView[0]] = 0.3
      newOpacities[slidesInView[1]] = 0.3
    }

    setIconOpacities(newOpacities)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    updateIconOpacities()
    emblaApi.on("select", updateIconOpacities)
    emblaApi.on("reInit", updateIconOpacities)
    emblaApi.on("scroll", updateIconOpacities)
    emblaApi.on("slidesInView", updateIconOpacities)

    return () => {
      emblaApi.off("select", updateIconOpacities)
      emblaApi.off("reInit", updateIconOpacities)
      emblaApi.off("scroll", updateIconOpacities)
      emblaApi.off("slidesInView", updateIconOpacities)
    }
  }, [emblaApi, updateIconOpacities])

  return (
    <div className="relative w-full">
      {/* Embla Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 md:gap-12 justify-center">
          {techLogos.map((tech, index) => (
            <div 
              key={index} 
              className="flex-[0_0_auto] transition-opacity duration-300"
            >
              <TechIcon tech={tech} opacity={iconOpacities[index] || 1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
