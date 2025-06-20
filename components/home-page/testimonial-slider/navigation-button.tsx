"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import type React from "react"
import { useMobileDetection } from "../../../hooks/useMobileDetection"

interface NavigationButtonsProps {
  onPrevious: () => void
  onNext: () => void
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onPrevious, onNext }) => {
  const isMobile = useMobileDetection()

  const buttonBaseClasses = `${
    isMobile ? "w-12 h-10" : "w-20 h-14"
  } rounded-full flex items-center justify-center transition-all duration-300 relative overflow-hidden group cursor-pointer`

  const buttonStyles = {
    background: "rgba(0, 0, 0, 0.7)",
    boxShadow: "inset 0 0 45.73px rgba(255,255,255,0.1), inset 0 0 45.73px rgba(165,165,165,0.1)",
    backdropFilter: "blur(91.47px)",
  }

  return (
    <div className={`flex items-center justify-center gap-4 md:gap-8 ${isMobile ? "mt-6" : "mt-12"}`}>
      {/* Left Button - Right to Left transition */}
      <button onClick={onPrevious} className={buttonBaseClasses} style={buttonStyles}>
        {/* Sliding gradient overlay - right to left */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#30FB73] from-15% to-[#00D346] to-[87.47%] rounded-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />

        {/* Green icon - slides out to left on hover, slides back from left on unhover */}
        <ArrowLeft
          size={isMobile ? 16 : 20}
          strokeWidth={3}
          className="text-[#30FB73] transform translate-x-0 opacity-100 group-hover:opacity-0 group-hover:-translate-x-full transition-transform duration-300 ease-in-out"
        />

        {/* White icon - slides in from right on hover, slides out to right on unhover */}
        <ArrowLeft
          size={isMobile ? 16 : 20}
          strokeWidth={3}
          className="absolute text-white opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
        />
      </button>

      {/* Right Button - Left to Right transition */}
      <button onClick={onNext} className={buttonBaseClasses} style={buttonStyles}>
        {/* Sliding gradient overlay - left to right */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#30FB73] from-15% to-[#00D346] to-[87.47%] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />

        {/* Green icon - slides out to right on hover, slides back from right on unhover */}
        <ArrowRight
          size={isMobile ? 16 : 20}
          strokeWidth={3}
          className="text-[#30FB73] opacity-100 group-hover:opacity-0  transform translate-x-0 group-hover:translate-x-full transition-transform duration-300 ease-in-out"
        />

        {/* White icon - slides in from left on hover, slides out to left on unhover */}
        <ArrowRight
          size={isMobile ? 16 : 20}
          strokeWidth={3}
          className="absolute text-white opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
        />
      </button>
    </div>
  )
}

export default NavigationButtons
