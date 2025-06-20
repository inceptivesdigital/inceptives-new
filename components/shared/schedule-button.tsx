"use client";

import { CalendarClock } from "lucide-react";
import { PopupModal } from "react-calendly";
import { useState, useEffect } from "react";

const ScheduleButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Set rootElement only on the client side
    setRootElement(document.getElementById("__next") || document.body);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`flex w-full items-center gap-2 justify-center border border-white/10 bg-transparent text-white transition-colors duration-300 group hover:bg-black/60 hover:text-[#00CE44] h-[60px] md:h-[80px] px-4`}
      >
        <CalendarClock
          size={24}
          className={`transition-colors duration-300 md:w-[30px] md:h-[30px]`}
          strokeWidth={2.2}
        />
        <span
          className={`font-bold text-base md:text-lg transition-colors duration-300`}
        >
          Schedule A Call
        </span>
      </button>

      {rootElement && (
        <PopupModal
          url="https://calendly.com/inceptivesdigital-info/30min?hide_gdpr_banner=1"
          rootElement={rootElement}
          open={isOpen}
          onModalClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ScheduleButton;
