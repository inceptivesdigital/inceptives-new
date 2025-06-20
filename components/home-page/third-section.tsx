import Image from "next/image";
import AnimatedButton from "../shared/animated-button";
import EnterpriseAppsCard from "../shared/enterprise-apps-card";
import MVPDevelopmentCard from "../shared/mvp-development-card";
import ScheduleButton from "../shared/schedule-button";
import SolutionCard from "../shared/solution-card";
import HoverButtons from "../shared/hover-buttons";

const ThirdSection = () => {
  return (
    <section
      className="relative flex items-top pb-16 md:pb-24 xl:pb-32 justify-center"
      id="services"
      style={{
        backgroundImage: "url('/assets/image/servicebg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1900px] mx-auto px-4 xl:px-8 text-center">
        {/* Section Header */}
       
          <h2
            className="text-5xl md:text-6xl xl:text-7xl absolute transform left-1/2 -translate-x-1/2 top-0 lg:text-[100px] xl:text-[130px] font-extrabold mb-6 text-transparent"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "rgba(255, 255, 255, 0.13)",
              fontWeight: 800,
              color: "transparent",
            }}
          >
            Our <br /> Services!
          </h2>
       
        <div className="text-center mt-16 mb-16 lg:mt-20 lg:mb-20 xl:mt-20 xl:mb-0 relative">
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-extrabold">
              Custom Solutions, Crafted for You!
            </p>

            <p className="text-white text-base md:text-lg lg:text-lg xl:text-xl max-w-3xl mx-auto">
              Whether it's mobile, web, or dashboard — we use the right tools to
              build fast, scalable, and future-ready solutions.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 lg  :gap-8 xl:gap-12 mt-16 lg:mt-16 xl:mt-16 justify-center items-center">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 xl:gap-12 w-full lg:w-[50%] xl:w-[30%] max-w-sm md:max-w-none">
              <AnimatedButton />
              <ScheduleButton />
            </div>
          </div>
        </div>

        {/* Solution Cards Layout - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 xl:gap-6">
          {/* Mobile: Stack all cards vertically */}
          {/* Desktop: 5 columns as before */}

          {/* Column 1 */}
          <div className="flex flex-col gap-6 lg:gap-4 xl:gap-6 md:justify-end justify-center">
            {/* Custom Mobile App Development - Large green card */}
            <SolutionCard
              notchPosition="left"
              theme="variant-2"
              textAlign="left"
              image="/assets/image/icons/check.png"
              title="Custom Mobile App Development"
              description="We Build Tailor-Made Mobile Apps That Match Your Vision, Goals, And Users — Not Templates Or Shortcuts. Whether It's iOS, Android, Or Cross-Platform, Each Team Includes Front-End, Back-End Engineers, UI/UX Designers, Swift, And Kotlin To Craft Fast, Scalable, And Beautifully Responsive Mobile Experiences That Truly Stand Out."
            />

            {/* Credit Card Placeholder - White card */}
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/assets/image/credit-card.png"
                alt="Credit Card"
                width={320}
                height={220}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 lg:gap-4 xl:gap-6 md:justify-end justify-center">
            {/* IOS App Development - Black card */}
            <SolutionCard
              notchPosition="left"
              theme="variant-1"
              textAlign="left"
              image="/assets/image/icons/ios.png"
              title="IOS App Development"
              description="We Create Sleek, High-Performance iOS Apps Built For Apple's Ecosystem — From iPhone To iPad. Our Team Of Native iOS Developers Will Develop Apps That Follow Apple's Design Guidelines, Integrate Seamlessly With iOS Features, And Deliver Smooth, Secure User Experiences That Shine On The App Store."
            />

            {/* Team Avatars - Green card */}
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/assets/image/col-2.png"
                alt="Team Avatars"
                width={320}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 lg:gap-4 xl:gap-6 md:justify-end justify-center">
            {/* Enterprise Apps Development - White card */}
            <EnterpriseAppsCard />

            {/* MVP App Development - Black card */}
            <MVPDevelopmentCard />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-6 lg:gap-4 xl:gap-6 md:justify-end justify-center ">
            {/* Android App Development - Green card */}
            <SolutionCard
              notchPosition="right"
              theme="variant-2"
              textAlign="right"
              title="Android App Development"
              image="/assets/image/icons/android.png"
              description="We Design And Develop Powerful Android Applications That Are Fast, Secure, And Optimized For All Android Devices — Delivering A Seamless User Experience Backed By Clean Code And Modern UI Design Principles."
            />

            {/* Interaction Hub - White card */}
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/assets/image/col-4.png"
                alt="Interaction Hub"
                width={320}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col gap-6 lg:gap-4 xl:gap-6 h-full justify-end">
            {/* Cross-Platform Development - Black card */}
            <SolutionCard
              notchPosition="right"
              theme="variant-1"
              textAlign="right"
              image="/assets/image/icons/cross.png"
              title="Cross-Platform Development"
              description="We Develop High-Performance Apps Using Frameworks Like Flutter And React Native, Delivering A Consistent Experience Across iOS And Android — Saving Time, Reducing Costs, And Accelerating Your Product's Reach."
            />

            {/* Phone Mockups - Green card */}
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/assets/image/col-5.png"
                alt="Phone Mockups"
                width={320}
                height={220}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Technology Stack Icons */}
        <div className="mt-8 md:mt-12 xl:mt-16">
          <HoverButtons />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
