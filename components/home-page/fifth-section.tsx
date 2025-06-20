import Image from "next/image";

const FifthSection = () => {
  return (
    <div className="bg-black py-8 px-4 md:py-16 lg:py-20 xl:py-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-stretch">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-8 p-4 md:p-12 lg:p-16 xl:p-24">
        <OurSuccessInNumbers />
        <RecognizedBy />
      </div>
      <div className="flex items-center justify-center relative order-first lg:order-last xl:order-last">
        <div className="relative w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] mx-auto">
          <Image 
            src="/assets/image/subimg.png" 
            alt="App Store" 
            width={700} 
            height={580} 
           
          />
          <Image 
            src="/assets/image/Isolation_mode.png" 
            alt="App Store" 
            width={150} 
            height={160} 
            className="absolute top-0 right-4 md:right-12 lg:right-16 xl:right-24 w-[60px] h-[65px] md:w-[90px] md:h-[95px] lg:w-[110px] lg:h-[115px] xl:w-[140px] xl:h-[150px]" 
            style={{
              animation: 'spin 6s linear infinite'
            }}
          />
        </div>
      </div>
    </div>
  );
};

const OurSuccessInNumbers = () => {
  return (
    <div className="relative border-2 border-[#068F33] rounded-2xl md:rounded-3xl lg:rounded-3xl xl:rounded-3xl p-4 md:p-6 lg:p-7 xl:p-8 bg-black">
      {/* Header positioned on the border */}
      <div className="absolute -top-3 md:-top-4 lg:-top-4 xl:-top-4 left-1/2 transform -translate-x-1/2 bg-black px-3 md:px-6 lg:px-6 xl:px-6">
        <h2 className="text-white text-base lg:text-sm 2xl:text-2xl xl:text-lg font-bold whitespace-nowrap">
          Our Success In Numbers!
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 md:gap-6 lg:gap-5 xl:gap-6 mb-4 md:mb-8 lg:mb-6 xl:mb-8 mt-6 md:mt-8 lg:mt-8 xl:mt-8">
        {/* Application Launched Card */}
        <div className="bg-[#00CE441A] rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-2xl p-4 md:p-6 lg:p-5 xl:p-8 text-center">
          <div className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-extrabold text-[#00CE44] mb-1 md:mb-2 lg:mb-2 xl:mb-2">
            350+
          </div>
          <div className="text-[#00CE44] text-sm md:text-lg lg:text-lg xl:text-xl">Application Launched!</div>
        </div>

        {/* Client Powered Card */}
        <div className="bg-[#00CE441A] rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-2xl p-4 md:p-6 lg:p-5 xl:p-8 text-center">
          <div className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-extrabold text-[#00CE44] mb-1 md:mb-2 lg:mb-2 xl:mb-2">
            425+
          </div>
          <div className="text-[#00CE44] text-sm md:text-lg lg:text-lg xl:text-xl">Client Powered</div>
        </div>
      </div>

      {/* Downloads Card - Full Width */}
      <div className="bg-[#00CE441A] rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-2xl p-4 md:p-6 lg:p-5 xl:p-8 text-center">
        <div className="text-3xl md:text-5xl lg:text-5xl xl:text-7xl font-extrabold text-[#00CE44] mb-1 md:mb-2 lg:mb-2 xl:mb-2">
          2.6 Million
        </div>
        <div className="text-[#00CE44] text-sm md:text-lg lg:text-lg xl:text-xl">Downloads On App Store!</div>
      </div>
    </div>
  );
};

const RecognizedBy = () => {
  return (
    <div className="relative border-2 border-[#068F33] rounded-2xl md:rounded-3xl lg:rounded-3xl xl:rounded-3xl p-4 md:p-6 lg:p-7 xl:p-8 bg-black  flex flex-col justify-center">
      {/* Header positioned on the border */}
      <div className="absolute -top-3 md:-top-4 lg:-top-4 xl:-top-4 left-1/2 transform -translate-x-1/2 bg-black px-3 md:px-6 lg:px-6 xl:px-6">
        <h2 className="text-white text-base  break-words lg:text-sm 2xl:text-2xl xl:text-lg font-bold whitespace-nowrap">
          Recognition From Industry Leader!
        </h2>
      </div>

      {/* Recognition Images */}
      <div className="rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-2xl p-4 md:p-6 lg:p-5 xl:p-8 flex flex-col sm:flex-row lg:flex-col xl:flex-col 2xl:flex-row gap-4 justify-around items-center">
        <Image
          src="/assets/image/app-of-the-day.png"
          alt="Recognized By"
          width={180}
          height={95}
          className="w-[120px] h-[65px] md:w-[140px] md:h-[75px] lg:w-[150px] lg:h-[80px] xl:w-[170px] xl:h-[90px] object-contain"
        />
        <Image
          src="/assets/image/mvp.png"
          alt="Recognized By"
          width={240}
          height={95}
          className="w-[160px] h-[65px] md:w-[190px] md:h-[75px] lg:w-[210px] lg:h-[80px] xl:w-[230px] xl:h-[90px] object-contain"
        />
      </div>
    </div>
  );
};

export default FifthSection;
