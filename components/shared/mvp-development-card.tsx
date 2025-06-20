"use client";
import Image from "next/image";
import React, { useState } from "react";

const MVPDevelopmentCard = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`bg-black rounded-[24px] mx-auto max-w-md md:rounded-[42px] border-4 border-[#373737] hover:border-[#00CE44] p-6 lg:p-4 xl:p-5  flex flex-col justify-between transition-all ease-in-out duration-300 group cursor-pointer ${
        isActive ? "border-[#00CE44]" : ""
      }`}
      onClick={handleToggle}
    >
      {/* Rocket Icon - appears on hover */}
      <div
        className={`flex justify-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 ${
          isActive ? "opacity-100" : ""
        }`}
      >
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center relative justify-center">
          <Image
            src={"/assets/image/icons/rocket.png"}
            alt="rocket"
            width={50}
            height={50}
            className="w-10 h-10 md:w-12 md:h-12 absolute transform translate-y-12 group-hover:translate-y-0 duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center space-y-3 md:space-y-4 flex-1 flex flex-col justify-center">
        {/* Title */}
        <h3 className="text-lg  lg:text-lg xl:text-2xl 2xl:text-3xl font-extrabold text-[#00CE44] leading-tight">
          MVP App
          <br />
          Development
        </h3>

        {/* Description */}
        <p className="text-white text-xs lg:text-[10px] xl:text-sm 2xl:text-base font-medium leading-relaxed">
          We help you build a lean, functional version of your app with just the
          right features — so you can test your idea, gather real user feedback,
          and grow with confidence.
        </p>
      </div>

      {/* Arrow Button - appears on hover */}
      <div
        className={`flex justify-center overflow-hidden transition-all ease-in-out duration-500 ${
          isActive ? "max-h-16" : "max-h-0 group-hover:max-h-16"
        }`}
      >
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00CE44] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#00B83C] transition-colors duration-200">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MVPDevelopmentCard;
