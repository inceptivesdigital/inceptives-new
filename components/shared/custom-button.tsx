"use client"

import clsx from "clsx"
import { useState } from "react"

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string
}

export default function CustomButton({text="Custom Action", ...props}: CustomButtonProps) {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
    }

    const handleClick = () => {
     // Add your custom action here
    }
  return (
    <button
    className="relative overflow-hidden group w-full rounded-lg h-[60px] md:h-[80px] text-base md:text-lg font-medium bg-white transition-colors duration-500"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleClick}
    {...props}
  >
    {/* Green background that expands on hover */}
    <div
      className={clsx(
        `absolute inset-0 transition-colors duration-500 z-0`,
        isHovered ? "bg-[#00CE44]" : "bg-white"
      )}
    />
    {/* Text content */}
    <span className={clsx(
      "relative z-10 font-bold transition-colors duration-300",
      isHovered ? "text-white" : "text-[#00CE44]"
    )}>
      {text}
    </span>
  </button>
  )
}
