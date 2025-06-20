"use client"

import clsx from "clsx"
import { useRouter } from "next/navigation"
import { useState } from "react"
interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string
}
export default function AnimatedButton({text="Get A Call Now!", ...props}: AnimatedButtonProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const router = useRouter()
  
    const handleMouseEnter = () => {
      setIsHovered(true)
      setIsTransitioning(true)
    }
  
    const handleMouseLeave = () => {
      setIsHovered(false)
      setIsTransitioning(true)
    }
  
    const handleTransitionEnd = () => {
      setIsTransitioning(false)
    }
    const handleClick = () => {
     router.push("#contact")
    }
  return (
    <button
    className="relative  overflow-hidden group w-full h-[60px] md:h-[80px] text-base md:text-lg font-medium"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onTransitionEnd={handleTransitionEnd}
    onClick={handleClick}
    {...props}
  >
    {/* Background container */}
    <div className="absolute inset-0 bg-white">
      {/* Green circle that expands on hover */}
      <div
        className={`
          absolute top-0 right-0 bottom-0 
          bg-green-500 rounded-full
          transition-all duration-500 ease-in-out
          ${isHovered ? "w-0 h-0" : "w-[60px] h-[60px] md:w-[80px] md:h-[80px]"}
        `}
      />

      {/* Green background that slides out on hover */}
      <div
        className={clsx(`
          absolute inset-0 bg-[#00CE44]
          origin-left
          transition-transform duration-500 ease-in-out 
          ${isHovered ? "translate-x-full" : "translate-x-0"}
        `,
        isTransitioning ? "rounded-l-full" : ""
        )}
      />
    </div>

    {/* Text content */}
    <span className="relative z-10 text-black group-hover:text-[#00CE44] font-bold transition-colors duration-300">
      {text}
    </span>
  </button>
  )
}
