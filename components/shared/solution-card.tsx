"use client";
import { clsx } from "clsx";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface SolutionCardProps {
  title?: string;
  description?: string;
  image: string;
  className?: string;
  notchPosition?: "left" | "right" | "none";
  theme?: "variant-1" | "variant-2";
  textAlign?: "left" | "center" | "right";
}

const themeSelector = (theme: "variant-1" | "variant-2") => {
  switch (theme) {
    case "variant-1":
      return {
        titleColor: "text-[#00CE44]",
        descriptionColor: "text-[#FFFFFF]",
        borderColor: "border-[#373737]",
        backgroundColor: "bg-[#121212]",
        groupHoverColor: "group-hover:bg-black",
        groupHoverBorderColor: "group-hover:border-[#373737]",
      };
    case "variant-2":
      return {
        titleColor: "text-[#FFFFFF]",
        descriptionColor: "text-[#FFFFFF]",
        borderColor: "border-[#00CE44]",
        backgroundColor: "bg-[#00CE44]",
        groupHoverColor: "group-hover:bg-[#096527]",
        groupHoverBorderColor: "group-hover:border-[#096527]",
      };
  }
};

export default function SolutionCard({
  title = "Cross-Platform Development",
  description = "We Develop High-Performance Apps Using Frameworks Like Flutter And React Native, Delivering A Consistent Experience Across iOS And Android — Saving Time, Reducing Costs, And Accelerating Your Product's Reach.",
  className,
  image,
  notchPosition = "left",
  theme = "variant-1",
  textAlign = "right",
}: SolutionCardProps) {
  const [isActive, setIsActive] = useState(false);

  const {
    borderColor,
    backgroundColor,
    titleColor,
    descriptionColor,
    groupHoverColor,
    groupHoverBorderColor,
  } = themeSelector(theme);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={clsx(
        "relative w-full max-w-md mx-auto group mt-6 lg:mt-0 cursor-pointer",
        className
      )}
      onClick={handleToggle}
    >
      {/* Top Notch */}
      {notchPosition !== "none" && (
        <div
          className={clsx(
            "absolute -top-6 md:-top-7 lg:-top-8 xl:-top-9 w-[40%] md:w-[45%] lg:w-[48%] xl:w-[50%] h-7 md:h-8 lg:h-9 xl:h-10 border-4 border-b-0 rounded-t-2xl md:rounded-t-3xl lg:rounded-t-3xl xl:rounded-t-4xl z-10 transition-all duration-300 ease-in-out",
            notchPosition === "left" ? "left-0" : "right-0",
            borderColor,
            backgroundColor,
            groupHoverBorderColor,
            groupHoverColor,
            // Mobile active states
            isActive && theme === "variant-1"
              ? "bg-black border-[#373737]"
              : "",
            isActive && theme === "variant-2"
              ? "bg-[#096527] border-[#096527]"
              : ""
          )}
        >
          {/* Logos positioned relative to notch */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Logo 1 */}
            <Image
              src={image}
              alt="Logo 1"
              width={50}
              height={50}
              className={clsx(
                "absolute w-8 h-8 md:w-10 lg:w-11 xl:w-12 xl:h-12 md:h-10 lg:h-11 flex items-center justify-center text-xs font-bold transition-all duration-500 ease-in-out",
                "opacity-0 group-hover:opacity-100",
                "transform translate-y-8 md:translate-y-10 lg:translate-y-8 xl:translate-y-12 group-hover:translate-y-3 md:group-hover:translate-y-4 lg:group-hover:translate-y-4 xl:group-hover:translate-y-5",
                notchPosition === "left"
                  ? "-translate-x-4 lg:-translate-x-0 2xl:-translate-x-10 xl:-translate-x-4"
                  : "translate-x-4 lg:translate-x-1 2xl:translate-x-10 xl:translate-x-4",
                // Mobile active states
                isActive
                  ? "opacity-100 !translate-y-3 md:!translate-y-4 lg:!translate-y-4 xl:!translate-y-5"
                  : ""
              )}
              style={{ transitionDelay: "100ms" }}
            />
          </div>
        </div>
      )}

      {/* Card Container */}
      <div
        className={clsx(
          "border-4 px-4 py-12 lg:py-0 xl:pt-32  w-full flex flex-col justify-between z-0 transition-all duration-300 ease-in-out min-h-[320px] lg:min-h-[380px] xl:min-h-[650px] 2xl:min-h-[530px]",
          // Conditional border radius based on notch position
          notchPosition === "left"
            ? "rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] md:rounded-tr-[32px] md:rounded-br-[32px] md:rounded-bl-[32px] lg:rounded-tr-[36px] lg:rounded-br-[36px] lg:rounded-bl-[36px] xl:rounded-tr-[42px] xl:rounded-br-[42px] xl:rounded-bl-[42px]"
            : notchPosition === "right"
            ? "rounded-tl-[24px] rounded-br-[24px] rounded-bl-[24px] md:rounded-tl-[32px] md:rounded-br-[32px] md:rounded-bl-[32px] lg:rounded-tl-[36px] lg:rounded-br-[36px] lg:rounded-bl-[36px] xl:rounded-tl-[42px] xl:rounded-br-[42px] xl:rounded-bl-[42px]"
            : "rounded-[24px] md:rounded-[32px] lg:rounded-[36px] xl:rounded-[42px]",
          backgroundColor,
          borderColor,
          groupHoverColor,
          groupHoverBorderColor,
          // Mobile active states
          isActive && theme === "variant-1" ? "bg-black border-[#373737]" : "",
          isActive && theme === "variant-2"
            ? "bg-[#096527] border-[#096527]"
            : ""
        )}
      >
        {/* Content */}
        <div
          className={clsx(
            "space-y-3 md:space-y-3 lg:space-y-4 xl:space-y-4 flex-1 flex flex-col justify-center",
            textAlign === "left"
              ? "text-left"
              : textAlign === "right"
              ? "text-right"
              : "text-center"
          )}
        >
          {/* Title */}
          <h2
            className={clsx(
              "text-lg md:text-lg lg:text-xl xl:text-2xl font-extrabold leading-tight transition-all duration-300 ease-in-out",
              titleColor,
              theme === "variant-1"
                ? "group-hover:text-[#00CE44]"
                : "group-hover:text-white",
              // Mobile active states
              isActive && theme === "variant-1" ? "text-[#00CE44]" : "",
              isActive && theme === "variant-2" ? "text-white" : ""
            )}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            className={clsx(
              "text-xs lg:text-[10px] xl:text-sm font-medium transition-all duration-300 ease-in-out",
              textAlign === "left"
                ? "text-left"
                : textAlign === "right"
                ? "text-right"
                : "text-center",
              descriptionColor,
              "group-hover:text-[#FFFFFF]",
              // Mobile active states
              isActive ? "text-[#FFFFFF]" : ""
            )}
          >
            {description}
          </p>
        </div>

        {/* Arrow Button - appears on hover */}
        <div className={clsx("flex", "justify-end", "pt-0 2xl:pt-32 pb-2 2xl:pb-3")}>
          <div
            className={clsx(
              "w-10 h-10 md:w-11 lg:w-11 xl:w-12 md:h-11 lg:h-11 xl:h-12 rounded-full border-2 flex items-center justify-center",
              "opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out",
              theme === "variant-1"
                ? "bg-[#00CE44] border-[#00CE44] hover:bg-[#00B83C]"
                : "bg-[#FFFFFF] border-[#FFFFFF] hover:bg-gray-100",
              // Mobile active states
              isActive ? "opacity-100" : ""
            )}
          >
            <ArrowRight
              className={clsx(
                "w-5 h-5 md:w-5 lg:w-6 xl:w-6 md:h-5 lg:h-6 xl:h-6 transform group-hover:-rotate-45 font-extrabold transition-transform duration-300 ease-in-out stroke-[2]",
                theme === "variant-1" ? "text-black" : "text-[#096527]",
                // Mobile active states
                isActive ? "-rotate-45" : ""
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
