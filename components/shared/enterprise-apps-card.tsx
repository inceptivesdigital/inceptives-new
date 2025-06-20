"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const EnterpriseAppsCard = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-full max-w-md mx-auto group mt-6 lg:mt-0">
      <div
        className={`bg-[#D9D9D9] hover:bg-[#FFFFFF] transition-all duration-300 ease-in-out rounded-[24px] md:rounded-[32px] lg:rounded-[36px] xl:rounded-[42px] border-4 p-6  lg:p-2 xl:p-5 flex flex-col justify-between cursor-pointer ${
          isActive ? "bg-[#FFFFFF]" : ""
        }`}
        onClick={handleToggle}
      >
        {/* Cloud Icon - appears on hover */}
        <div
          className={`flex justify-center opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 ${
            isActive ? "opacity-100" : ""
          }`}
        >
          <div className="w-10 h-10 md:w-12 relative md:h-12 flex items-center justify-center">
            <Image
              src={"/assets/image/icons/cloud-data.png"}
              alt="Cloud Data"
              width={50}
              height={50}
              className="w-10 h-10 md:w-12 md:h-12 absolute transform translate-y-12 group-hover:translate-y-0 duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3 md:space-y-4 flex-1 flex flex-col justify-center">
          {/* Title */}
          <h3 className="text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold text-black leading-tight">
            Enterprise Apps
            <br />
            Development
          </h3>

          {/* Description */}
          <p className="text-[#1E1E1E] text-xs lg:text-[10px] xl:text-sm font-normal leading-relaxed">
            We build robust, scalable enterprise apps that power productivity,
            streamline operations, and support growth. From internal tools to
            customer-facing platforms, our solutions are secure, flexible, and
            tailored to your business workflows.
          </p>
        </div>

        {/* Arrow Button - appears on hover */}
        <div
          className={`flex justify-center overflow-hidden transition-all ease-in-out duration-500 ${
            isActive ? "max-h-16" : "max-h-0 group-hover:max-h-16"
          }`}
        >
          <div className="w-10 h-10 md:w-11 lg:w-11 xl:w-12 md:h-11 lg:h-11 xl:h-12 rounded-full border-2 flex items-center justify-center bg-[#00CE44] border-[#00CE44] hover:bg-[#00B83C] transition-colors duration-200">
            <ArrowRight
              className={`w-5 h-5 md:w-5 lg:w-6 xl:w-6 md:h-5 lg:h-6 xl:h-6 transform group-hover:-rotate-45 font-extrabold transition-transform duration-300 ease-in-out stroke-[2] text-black ${
                isActive ? "-rotate-45" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseAppsCard;
