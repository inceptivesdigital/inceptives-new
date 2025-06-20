import Header from "@/components/shared/header";
import HeroSection from "@/components/services-page/hero-section";
import ThinkSection from "@/components/services-page/think-section";
import FourthSection from "@/components/home-page/fourth-section";
import TechStackShowcase from "@/components/services-page/TechStackShowcase";
import TenthSection from "@/components/home-page/tenth-section";
import NinethSection from "@/components/home-page/nineth-section";
import SixthSection from "@/components/home-page/sixth-section";
import SeventhSection from "@/components/home-page/seventh-section";
import TestimonialSliderSection from "@/components/home-page/eigth-section";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ThinkSection />
      <FourthSection />
      <TechStackShowcase />


      <SixthSection />
      <SeventhSection />
      <TestimonialSliderSection />
      <NinethSection />
      <TenthSection />
    </>
  );
}
