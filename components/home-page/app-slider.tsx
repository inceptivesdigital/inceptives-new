"use client";

import Image from "next/image";
import appImages from "@/public/assets/image/app-slider/app-slider.png";

const AppsSlider = () => {
  return (
    <div className="text-white">
      <Image
        src={appImages}
        alt="Apps Slider Background"
        width={1920}
        height={1080}
        className="w-full object-cover bg-full"
      />
    </div>
  );
};

export default AppsSlider;
