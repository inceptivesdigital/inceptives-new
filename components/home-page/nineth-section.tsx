import React from 'react';
import Image from 'next/image';
import AnimatedButton from '../shared/animated-button';

const NinethSection = () => {
  return (
    <section className="bg-[#191919] py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
          {/* Left side - Text and CTA */}
          <div className="text-white w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 md:mb-8">
              Pushing
              Boundaries.
              Earning
              Accolades
            </h2>
            {/* <div className="flex justify-center lg:justify-start"> */}
              <AnimatedButton/>
            {/* </div> */}
          </div>

          {/* Right side - Awards Grid */}
          <div className="flex flex-col items-center space-y-6 md:space-y-8">
            {/* First row - 4 awards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 xl:gap-24 w-full justify-items-center">
              {/* Award 1 - Clutch Badge (hexagonal) */}
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/image/aword1.png"
                  alt="Award 1"
                  width={180}
                  height={150}
                  // className="w-[80px] h-[67px]  lg:w-[150px] lg:h-[125px] xl:w-[180px] xl:h-[150px]"
                />
              </div>
              {/* Award 2 - Circular Gold Badge */}
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/image/aword2.png"
                  alt="Award 2"
                  width={150}
                  height={150}
                  // className="w-[67px] h-[67px] lg:w-[125px] lg:h-[125px] xl:w-[150px] xl:h-[150px]"
                />
              </div>
              {/* Award 3 - Circular Blue Badge */}
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/image/aword3.png"
                  alt="Award 3"
                  width={180}
                  height={150}
                  // className="w-[80px] h-[67px] md:w-[120px] md:h-[100px] lg:w-[150px] lg:h-[125px] xl:w-[180px] xl:h-[150px]"
                />
              </div>
              {/* Award 4 - Clutch Hexagonal Badge */}
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/image/aword4.png"
                  alt="Award 4"
                  width={180}
                  height={150}
                  // className="w-[80px] h-[67px] md:w-[120px] md:h-[100px] lg:w-[150px] lg:h-[125px] xl:w-[180px] xl:h-[150px]"
                />
              </div>
            </div>

            {/* Second row - 3 awards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-12 xl:gap-24 w-full justify-items-center">
              {/* Award 5 - App Store Editor's Choice (wide rectangular) */}
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/image/aword5.png"
                  alt="Award 5"
                  width={288}
                  height={150}
                  // className="w-[144px] h-[75px]  lg:w-[240px] lg:h-[125px] xl:w-[288px] xl:h-[150px]"
                />
              </div>
              {/* Award 6 - Top 50 Design Products (shield) */}
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/image/aword6.png"
                  alt="Award 6"
                  width={115}
                  height={150}
                  // className="w-[58px] h-[75px]  lg:w-[96px] lg:h-[125px] xl:w-[115px] xl:h-[150px]"
                />
              </div>
              {/* Award 7 - Webby Awards (wide rectangular) */}
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/image/aword7.png"
                  alt="Award 7"
                  width={288}
                  height={150}
                  // className="w-[144px] h-[75px] lg:w-[240px] lg:h-[125px] xl:w-[288px] xl:h-[150px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NinethSection;
