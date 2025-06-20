import React from "react";
import Image from "next/image";

import zontrix from "@/public/assets/image/portfilio/case/zontrix.png";
import nexbit from "@/public/assets/image/portfilio/case/Nexbit.png";
import parkvolt from "@/public/assets/image/portfilio/case/ParkVolt.png";
import pawpal from "@/public/assets/image/portfilio/case/Pawpal.png";
import skillnet from "@/public/assets/image/portfilio/case/SkillNet.png";
import worklink from "@/public/assets/image/portfilio/case/worklink.png";
import doclink from "@/public/assets/image/portfilio/case/Doclink.png";
import fixnow from "@/public/assets/image/portfilio/case/Fixnow.png";
import swiftRide from "@/public/assets/image/portfilio/case/Swift-Ride.png";
import budgetmate from "@/public/assets/image/portfilio/case/Budgetmate.png";


const CaseStudyPage = () => {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-12">
      <div id="zontrix">
        <Image
          src={zontrix}
          alt="Zontrix Case Study"
          className="w-full h-auto object-cover"
        />
      </div>
      <div id="nexbit">
        <Image
          src={nexbit}
          alt="Nexbit Case Study"
          className="w-full h-auto object-cover"
        />
      </div>
      <div id="parkvolt">
        <Image
          src={parkvolt}
          alt="ParkVolt Case Study"
          className="w-full h-auto object-cover"
        />
      </div>
      <div id="pawpal">
        <Image
          src={pawpal}
          alt="Pawpal Case Study"
          className="w-full h-auto object-cover"
        />
      </div>
      <div id="skillnet">
        <Image
          src={skillnet}
          alt="SkillNet Case Study"
          className="w-full h-auto object-cover"
        />
      </div>
      <div id="worklink">
        <Image
          src={worklink}
          alt="Worklink Case Study"
          className="w-full h-auto object-cover"
        />
      </div>
      <div id="fixnow">
        <Image
          src={fixnow}
          alt="Fixnow Case Study"
          className="w-full h-auto object-cover"
        />
      </div>
      <div id="swift-ride">
        <Image
          src={swiftRide}
          alt="Swift Ride Case Study"
          className="w-full h-auto object-cover"
        />
      </div>
      <div id="doclink">
        <Image
          src={doclink}
          alt="Doclink Case Study"
          className="w-full h-auto object-cover"
        />
      </div>
      <div id="budgetmate">
        <Image
          src={budgetmate}
          alt="Budgetmate Case Study"
          className="w-full h-auto object-cover"
        />
      </div>
    </main>
  );
};

export default CaseStudyPage;
