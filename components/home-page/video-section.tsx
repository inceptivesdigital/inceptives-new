import React from "react";

const VideoSection = () => {
  return (
    <section className="relative w-full h-[70vh]  lg:h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/second-section.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Optional: Overlay for better text visibility */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}
      </div>
      
      {/* Content overlay - you can add text or other elements here */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 h-full flex flex-col items-center justify-center">
        {/* Add your content here if needed */}
      </div>
    </section>
  );
};

export default VideoSection;

