"use client"

import React from "react"

import { clsx } from "clsx"
import { useEffect, useRef } from "react"
import { useMobileDetection } from "../../hooks/useMobileDetection"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  sectionClassName?: string
  onScrollToNext?: () => void
  onScrollToPrev?: () => void
  isFirst?: boolean
  isLast?: boolean
}

export default function SectionWrapper({ 
  children, 
  className, 
  sectionClassName, 
  onScrollToNext,
  onScrollToPrev,
  isFirst = false,
  isLast = false
}: SectionWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement[]>([])
  const isScrollingRef = useRef(false)
  const currentSectionRef = useRef(0)
  const isMobile = useMobileDetection(1024) // Use existing hook with lg breakpoint
  let scrollTimeout: NodeJS.Timeout

  useEffect(() => {
    const container = containerRef.current
    if (!container || isMobile) return // Skip all effects on mobile

    // Get all section elements
    const sections = Array.from(container.children) as HTMLDivElement[]
    sectionsRef.current = sections

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (isScrollingRef.current) {
        return
      }

      const direction = e.deltaY > 0 ? 1 : -1
      const nextSection = currentSectionRef.current + direction

    
      if (nextSection >= 0 && nextSection < sections.length) {
        isScrollingRef.current = true
        currentSectionRef.current = nextSection
        

        sections[nextSection].scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Reset scrolling flag
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          isScrollingRef.current = false
        }, 800)
      } 
      // Handle scrolling beyond wrapper boundaries
      else if (nextSection >= sections.length && !isLast && onScrollToNext) {

        onScrollToNext()
      } 
      else if (nextSection < 0 && !isFirst && onScrollToPrev) {
       
        onScrollToPrev()
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrollingRef.current) return

      let nextSection = currentSectionRef.current

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault()
          if (currentSectionRef.current === sections.length - 1 && !isLast && onScrollToNext) {
            onScrollToNext()
            return
          }
          nextSection = Math.min(currentSectionRef.current + 1, sections.length - 1)
          break
        case "ArrowUp":
        case "PageUp":
          e.preventDefault()
          if (currentSectionRef.current === 0 && !isFirst && onScrollToPrev) {
            onScrollToPrev()
            return
          }
          nextSection = Math.max(currentSectionRef.current - 1, 0)
          break
        case "Home":
          e.preventDefault()
          nextSection = 0
          break
        case "End":
          e.preventDefault()
          nextSection = sections.length - 1
          break
        default:
          return
      }

      if (nextSection !== currentSectionRef.current) {
        isScrollingRef.current = true
        currentSectionRef.current = nextSection
       

        sections[nextSection].scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        setTimeout(() => {
          isScrollingRef.current = false
        }, 800)
      }
    }

    // Add event listeners only on desktop
    container.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("keydown", handleKeyDown)

    // Intersection Observer to track current section (only on desktop)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
            const index = sections.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !isScrollingRef.current) {
              currentSectionRef.current = index
         
            }
          }
        })
      },
      {
        threshold: 0.8,
        rootMargin: "0px",
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      container.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
      observer.disconnect()
      clearTimeout(scrollTimeout)
    }
  }, [onScrollToNext, onScrollToPrev, isFirst, isLast, isMobile])

  return (
    <div className={clsx("relative", className)}>
      {/* Sections container */}
      <div
        ref={containerRef}
        className={clsx(
          // Mobile: normal scrolling behavior
          "lg:h-screen lg:overflow-hidden lg:scroll-smooth",
          // "lg:scroll-smooth",
          // Desktop: full-screen section scrolling
          isMobile ? "block" : ""
        )}
        style={!isMobile ? {
          scrollSnapType: "y mandatory",
        } : {}}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={clsx(
              // Mobile: auto height, desktop: full screen
              "w-full flex-shrink-0",
              isMobile ? "min-h-[70vh]" : "min-h-screen",
              sectionClassName
            )}
            style={!isMobile ? {
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
            } : {}}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
