"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMobileDetection } from '@/hooks/useMobileDetection';

const OptimizedCursorAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMobileDetection();

  // Use Framer Motion's motion values for smooth cursor tracking
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Add spring physics for smoother movement
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    const showCursor = () => {
      setIsVisible(true);
    };

    // Event listeners
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", showCursor);
    
    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseenter", showCursor);
      document.body.style.cursor = "auto";
    };
  }, [isMobile, cursorX, cursorY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] w-[100px] h-[100px]"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        x: "-50%",
        y: "-50%",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: 360
      }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{
        opacity: { duration: 2 },
        scale: { duration: 1 },
        rotate: { 
          duration: 5, 
          repeat: Infinity, 
          ease: "linear" 
        }
      }}
    >
      {/* Optimized cursor image using Next.js Image with fill */}
      <Image
        src="/assets/image/cursor.png"
        alt="Custom cursor"
        fill
        className="object-contain"
        quality={90}
        priority={true}
        sizes="100px"
        style={{
          filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))"
        }}
      />
    </motion.div>
  );
};

export default OptimizedCursorAnimation; 