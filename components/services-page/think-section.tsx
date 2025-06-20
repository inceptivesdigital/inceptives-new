"use client";
import Image from "next/image";

import { PopupModal } from "react-calendly";
import { useState, useEffect } from "react";



import Ts01 from "@/public/assets/image/services/ts-01.png";
import Ts02 from "@/public/assets/image/services/ts-02.png";
import Ts03 from "@/public/assets/image/services/ts-03.png";
import Ts04 from "@/public/assets/image/services/ts-04.png";


const ThinkSection = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  
  useEffect(() => {
    // Set rootElement only on the client side
    setRootElement(document.getElementById("__next") || document.body);
    }, []);

    
  return (
    <section className="think-section text-white pb-8 px-4 lg:px-8 xl:px-12 ">
      <div className="flex flex-col gap-4 justify-center items-center ">
        <p className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-extrabold">
          We Think Beyond the Screen!
        </p>
        <p className="text-white text-base md:text-lg lg:text-lg xl:text-xl max-w-3xl mx-auto">
          We solve problems with a custom, strategic approach that blends beautiful design, robust development, and long-term partnership.
        </p>
      </div>
      
      <div className="mt-8 lg:mt-12 xl:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-12  ">
        <div className="hover:relative">
          <div className="bg-[#101010] hover:absolute hover:top-0 hover:left-0 hover:bg-[#00CE44] group duration-300 pt-6  rounded-2xl">
            <div className="h-[342px] group-hover:h-[401px] overflow-hidden">
              <Image src={Ts01} alt="Custom Solutions" />
            </div>

            <div className="box-shadow-card p-6 group rounded-b-2xl bg-[#202020]">
              <h3 className="text-lg font-bold mb-2.5">Clean, Thoughtful Design</h3>
              <p className="text-sm">We craft clean, modern UI designs that aren't just beautiful—they're intuitive. Every screen is purpose-built to guide users naturally through the app</p>
            </div>
          </div>
        </div>
        <div className="hover:relative">
          <div className="bg-[#101010] hover:absolute hover:top-0 hover:left-0 hover:bg-[#00CE44] group duration-300 pt-6  rounded-2xl">
            <div className="h-[342px] group-hover:h-[401px] overflow-hidden">
              <Image src={Ts02} alt="Custom Solutions" />
            </div>

            <div className="box-shadow-card p-6 group rounded-b-2xl bg-[#202020]">
              <h3 className="text-lg font-bold mb-2.5">Flows That Just Work</h3>
              <p className="text-sm">We prioritize logical, seamless navigation. Your users won't get lost—they'll get where they need to go with zero friction</p>
            </div>
          </div>
        </div>
        <div className="hover:relative">
          <div className="bg-[#101010] hover:absolute hover:top-0 hover:left-0 hover:bg-[#00CE44] group duration-300 pt-6  rounded-2xl">
            <div className="h-[342px] group-hover:h-[401px] overflow-hidden">
              <Image src={Ts03} alt="Custom Solutions" />
            </div>

            <div className="box-shadow-card p-6 group rounded-b-2xl bg-[#202020]">
              <h3 className="text-lg font-bold mb-2.5">Features That Matter</h3>
              <p className="text-sm">We focus on functionality with purpose. Every feature is tied to a user goal or business outcome—no bloat, just value.</p>
            </div>
          </div>
        </div>
        <div className="hover:relative">
          <div className="bg-[#101010] hover:absolute hover:top-0 hover:left-0 hover:bg-[#00CE44] group duration-300 pt-6  rounded-2xl">
            <div className="h-[342px] group-hover:h-[401px] overflow-hidden">
              <Image src={Ts04} alt="Custom Solutions" />
            </div>

            <div className="box-shadow-card p-6 group rounded-b-2xl bg-[#202020]">
              <h3 className="text-lg font-bold mb-2.5">Solid, Scalable Build</h3>
              <p className="text-sm">From the backend to frontend, we build your app with clean code and scalable architecture—so it runs fast, adapts easily, and grows with your business</p>
            </div>
          </div>
        </div>

       
      </div>

      <div className="bg-[#1B1B1B] rounded-xl p-3 pl-5 mt-10 flex flex-col md:flex-row gap-2 justify-between items-center ">
        <h2 className="text-2xl leading-none font-bold">Ready to Build? <br />We're Ready to Deliver!</h2>
        
        <button 
        onClick={() => setIsOpen(true)}
        className="bg-[#00CE44] text-[#1E1E1E] text-lg font-semibold py-2 px-4 rounded-md hover:bg-white hover:text-[#00CE44]">
          Schedule a Call Now
        </button>


      {rootElement && (
        <PopupModal
          url="https://calendly.com/inceptivesdigital-info/30min?hide_gdpr_banner=1"
          rootElement={rootElement}
          open={isOpen}
          onModalClose={() => setIsOpen(false)}
        />
      )}
      </div>
    </section>);
};

export default ThinkSection;
