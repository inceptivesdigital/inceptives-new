"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    bg: "/assets/image/portfolio-2/zontrix-bg.png",
    title: "zontrix",
    googleLink: "#",
    appLink: "#",
    readMoreLink: "/case-study#zontrix",
    // readMoreLink: "#",
    description:
      "Zontrix is the ultimate gym and workout companion designed to help you train smarter, lift stronger, and stay in the zone. Whether you're chasing gains, cutting fat, or just building better habits, Zontrix gives you the tools to track progress, optimize your workouts, and stay consistent.",
    description2:
      "With a sleek, intuitive interface and powerful features like custom workout plans, real-time tracking, and performance analytics, Zontrix brings focus and precision to your fitness journey. No fluff. Just results.",
    logoImg: "/assets/image/portfolio-2/zontrix-icon.png",
    rightImg: "/assets/image/portfolio-2/zontrix-ss.png",
  },
  {
    bg: "/assets/image/portfolio-2/nexbit-bg.png",
    title: "Nexbit",
    googleLink: "#",
    appLink: "#",
    readMoreLink: "/case-study#nexbit",
    // readMoreLink: "#",
    description:
      "Nexbit is a modern, user-centric cryptocurrency trading platform designed to simplify and streamline the crypto investment experience for both beginners and seasoned traders. In a world of overly complex exchanges and intimidating interfaces, Nexbit stands out by offering an intuitive, secure, and data-driven trading environment.",
    description2:
      "Built with a focus on accessibility, trust, and real-time performance, Nexbit empowers users to buy, sell, and monitor crypto assets effortlessly—whether they're checking their portfolio on the go or analyzing charts at their desk.",
    logoImg: "/assets/image/portfolio-2/nexbit-icon.png",
    rightImg: "/assets/image/portfolio-2/nexbit-ss.png",
  },
  {
    bg: "/assets/image/portfolio-2/parkvolt-bg.png",
    title: "Parkvolt",
    googleLink: "#",
    appLink: "#",
    readMoreLink: "/case-study#parkvolt",
    // readMoreLink: "#",
    description:
      "ParkVolt is your all-in-one companion for effortless electric vehicle charging. Find nearby EV charging stations, check real-time availability, and reserve your spot — all from a single, intuitive app.",
    description2:
      "Whether you're planning ahead or need a quick top-up, ParkVolt makes it easy. Stay in control with live updates on your EV's battery percentage, charging status, and more — right at your fingertips. With ParkVolt, EV ownership is not just greener — it's smarter.",
    logoImg: "/assets/image/portfolio-2/parkvolt-icon.png",
    rightImg: "/assets/image/portfolio-2/parkvolt-ss.png",
  },
   {
    bg: "/assets/image/portfolio-2/pawpal-bg.png",
    title: "Pawpal",
    googleLink: "#",
    appLink: "#",
    readMoreLink: "/case-study#pawpal",
    // readMoreLink: "#",
    description:
      "PawPal is the ultimate pet care app designed to keep your furry friend happy and healthy. Easily book vet appointments, order your pet’s favorite food, and manage their wellness",
    description2:
      "All in one place. With PawPal, you can find trusted vets near you, schedule checkups, and have pet supplies delivered right to your door. It’s fast, convenient, and made for pet parents who want the best care without the hassle. From health to nutrition, PawPal has your pet covered every step of the way.",
    logoImg: "/assets/image/portfolio-2/pawpal-icon.png",
    rightImg: "/assets/image/portfolio-2/pawpal-ss.png",
  },
  {
    bg: "/assets/image/portfolio-2/skillnet-bg.png",
    title: "Skillnet",
    googleLink: "#",
    appLink: "#",
    readMoreLink: "/case-study#skillnet",
    // readMoreLink: "#",
    description:
      "Skillnet is an online learning app that helps users gain new skills and advance their careers through flexible courses and training programs. Offering a wide range of topics—from business and technology to customer service and logistics.",
    description2:
      "Skillnet provides expert-led classes accessible anytime through its user-friendly mobile platform. Ideal for job seekers, professionals, and employers, it supports personal and professional development with tools to track progress and manage learning goals. Whether you're upskilling or starting fresh, Skillnet makes learning easy and accessible.",
    logoImg: "/assets/image/portfolio-2/skillnet-icon.png",
    rightImg: "/assets/image/portfolio-2/skillnet-ss.png",
  },
  {
    bg: "/assets/image/portfolio-2/worklink-bg.png",
    title: "Worklin",
    googleLink: "#",
    appLink: "#",
    readMoreLink: "/case-study#worklink",
    // readMoreLink: "#",
    description:
      "WorkLink is a freelance platform app that connects users with opportunities to work on projects across any industry or skill. Whether you're a writer, designer, developer, marketer, or offer hands-on services, WorkLink makes it easy to find gigs and get paid. The app allows you to create a profile, showcase your skills, browse jobs, and communicate directly with clients.",
    description2:
      "With flexible scheduling and a wide range of freelance categories, WorkLink is perfect for anyone looking to earn income on their own terms and build a freelance career from anywhere.",
    logoImg: "/assets/image/portfolio-2/worklin-icon.png",
    rightImg: "/assets/image/portfolio-2/wprklink-ss.png",
  },
  {
    bg: "/assets/image/portfolio-2/doclink-bg.png",
    title: "DocLink",
    googleLink: "#",
    appLink: "#",
    readMoreLink: "/case-study#doclink",
    // readMoreLink: "#",
    description:
      "DocLink is your all-in-one solution for booking medical appointments with specialist doctors across a wide range of fields. Whether you need a dermatologist, cardiologist, pediatrician, or general physician, DocLink connects you with trusted healthcare professionals in just a few taps. Browse doctor profiles, check real-time availability, and book appointments instantly.",
    description2:
      "No phone calls, no hassle. With DocLink, managing your health is easier, faster, and more convenient than ever before.",
    logoImg: "/assets/image/portfolio-2/doclink-icon.png",
    rightImg: "/assets/image/portfolio-2/doclink-ss.png",
  },
  {
    bg: "/assets/image/portfolio-2/fixnow-bg.png",
    title: "FixNow",
    googleLink: "#",
    appLink: "#",
    readMoreLink: "/case-study#fixnow",
    // readMoreLink: "#",
    description:
      "FixNow is your go-to app for hiring trusted handymen for all your home service needs. Whether you need a plumber, electrician, grass cutter, painter, or general handyman, FixNow connects you with skilled professionals near you—quickly and easily. Browse service providers, read reviews, check availability, and book in just a few taps. No more searching or waiting.",
    description2:
      "Get reliable help when you need it, where you need it. With FixNow, home maintenance is simple, fast, and stress-free.",
    logoImg: "/assets/image/portfolio-2/fixnow-icon.png",
    rightImg: "/assets/image/portfolio-2/fixnow-ss.png",
  },
  {
    bg: "/assets/image/portfolio-2/swift-ride-bg.png",
    title: "Swift Ride",
    googleLink: "#",
    appLink: "#",
    readMoreLink: "/case-study#swift-ride",
    // readMoreLink: "#",
    description:
      "Swift Ride is the fast, affordable, and safe way to get around town. Whether you're riding solo or prefer to pool with others, Swift Ride connects you with nearby drivers in minutes. Just set your pickup, choose your ride type, and go.",
    description2:
      "No hassle, no delays. Enjoy real-time tracking, secure payments, and reliable service every time. With Swift Ride, commuting is simple, cost-effective, and convenient. Wherever you’re headed, Swift Ride gets you there—swiftly and smoothly.",
    logoImg: "/assets/image/portfolio-2/swift-ride-icon.png",
    rightImg: "/assets/image/portfolio-2/swift-ride-ss.png",
  },
  {
    bg: "/assets/image/portfolio-2/budget-mate-bg.png",
    title: "Budget Mate",
    googleLink: "#",
    appLink: "#",
    readMoreLink: "/assets/image/portfilio/case/Budgetmate.png",
    // readMoreLink: "#",
    description:
      "Budget Mate is your all-in-one money management app that helps you stay on top of your finances. Sync all your bank accounts securely to view your balances, track transactions, and manage spending in one place. With Budget Mate, you can send and receive money instantly, making it easy to split bills, pay friends, or handle daily expenses.",
    description2:
      "Get a clear view of your financial health, monitor your cash flow, and make smarter decisions—quickly, safely, and conveniently.",
    logoImg: "/assets/image/portfolio-2/budget-mate-icon.png",
    rightImg: "/assets/image/portfolio-2/budget-mate-ss.png",
  },
];

const FourthSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const handleSlideChange = useCallback(() => {
    if (!emblaApi) return;
    const selectedIndex = emblaApi.selectedScrollSnap();
    setIndex(selectedIndex);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", handleSlideChange);
    handleSlideChange();

    return () => {
      emblaApi.off("select", handleSlideChange);
    };
  }, [emblaApi, handleSlideChange]);

  return (
    <section
      id="portfolio"
      className="relative py-8 md:py-10 lg:py-12 md:min-h transition-all duration-1000 ease-in-out overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Images */}
      {slides.map((slide, slideIndex) => (
        <Image
          key={slideIndex}
          src={slide.bg}
          alt={`${slide.title} background`}
          fill
          className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
            slideIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: -1 }}
          priority={slideIndex === 0}
          quality={90}
        />
      ))}

      {/* Carousel Container */}
      <div className="container mx-auto px-4 max-w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, slideIndex) => (
              <article
                key={slideIndex}
                className="flex-[0_0_100%]    2xl:flex-[0_0_80%]  min-w-0 px-2 md:px-4"
              >
                <div className="rounded-[25px] md:rounded-[50px] h-full bg-black/30 backdrop-blur-sm shadow-xl flex flex-col  items-end lg:flex-row gap-4 md:gap-10 lg:gap-12">
                  
                  {/* Content Section */}
                  <div className="flex-1 lg:max-w-[48%] p-4 md:p-6 lg:p-9 space-y-3 md:space-y-4 lg:space-y-6 flex flex-col justify-end">
                    
                    {/* Logo */}
                    <Image
                      src={slide.logoImg}
                      alt={`${slide.title} logo`}
                      width={80}
                      height={80}
                      className="object-contain w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
                    />

                    {/* Title */}
                    <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-7xl font-bold capitalize leading-tight">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <div className="text-white text-xs md:text-sm lg:text-base xl:text-xl leading-relaxed space-y-2 md:space-y-3 lg:space-y-4">
                      <p>{slide.description}</p>
                      <p className="hidden md:block">{slide.description2}</p>
                    </div>

                    {/* Store Links */}
                    <div className="space-y-2 md:space-y-3 lg:space-y-4 w-full md:w-[80%] lg:w-[60%]">
                      <div className="flex gap-2 md:gap-2 lg:gap-4">
                        <Link
                          href={slide.googleLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition-opacity flex-1"
                        >
                          <Image
                            src="/assets/image/portfilio/google.png"
                            alt="Google Play Store"
                            width={240}
                            height={120}
                            className="h-auto md:w-[200px] lg:w-full"
                          />
                        </Link>
                        <Link
                          href={slide.appLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition-opacity flex-1"
                        >
                          <Image
                            src="/assets/image/portfilio/app.png"
                            alt="App Store"
                            width={240}
                            height={120}
                            className="h-auto md:w-[200px] lg:w-full"
                          />
                        </Link>
                      </div>
                      
                      <Link
                        href={slide.readMoreLink}
                        target="_blank"
                        className="block border border-gray-600 rounded-[25px] md:rounded-[50px] px-3 md:px-4 lg:px-4 py-3 md:py-4 lg:py-2 hover:border-green-400 hover:bg-green-400/5 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="flex items-center justify-between gap-2 md:gap-3 lg:gap-4">
                          <h2 className="text-white text-sm lg:text-sm xl:text-sm 2xl:text-base text-left font-semibold group-hover:text-green-400 transition-colors duration-300">
                            Read full case study!
                          </h2>
                          <div className="flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Image
                              src="/assets/image/portfilio/Vector.png"
                              alt="Arrow"
                              width={46}
                              height={46}
                              // className="w-5 h-5 md:w-6 md:h-6"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Preview Image */}
                  <div className="   hidden md:flex justify-center lg:justify-end items-baseline">
                    <Image
                      src={slide.rightImg}
                      alt={`${slide.title} preview`}
                      width={600}
                      height={700}
                      // className="w-full h-auto max-w-[95%] ml-auto object-contain"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-4 md:gap-0">
          <Link
            href="#reviews"
            className="flex items-center mt-6 md:mt-10 justify-between gap-2 md:gap-4 border-2 w-full md:w-[40%] border-[#00CE44] rounded-[50px] md:rounded-[118px] px-4 md:px-6 py-3 md:py-4 hover:bg-[#00CE44]/10 hover:border-[#00CE44]/80 transition-all duration-300 group cursor-pointer"
            style={{
              backgroundImage: `url(/assets/image/review-halftone.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transition: "background-image 1s ease-in-out",
            }}
          >
            <span className="bg-transparent border-none text-white text-sm lg:text-sm xl:text-sm 2xl:text-base font-semibold group-hover:text-green-400 transition-colors duration-300 text-center md:text-left">
              Read reviews left by our customers!
            </span>
            <Image
              src="/assets/image/portfilio/star.png"
              alt="Customer reviews"
              width={170}
              height={30}
              // className="object-contain w-[120px] h-[20px] lg:w-[170px] lg:h-[30px] xl:w-[150px] xl:h-[20px] group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="w-[40px] relative z-50 h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#00CE44] mt-4 md:mt-10 flex justify-center items-center hover:bg-[#00CE44]/90 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00CE44] focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
