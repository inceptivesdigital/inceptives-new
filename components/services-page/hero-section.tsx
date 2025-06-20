"use client"
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AnimatedButton from "../shared/animated-button";
import ProjectCards from "./project-cards";

const slides = [
  { id: 1, image: "/assets/image/reviews.png", alt: "Review" },
  { id: 2, image: "/assets/image/trust-pilot.png", alt: "Trustpilot" },
  { id: 3, image: "/assets/image/good-firms.png", alt: "Good Firms" },
  { id: 4, image: "/assets/image/reviews.png", alt: "Reviews" },
  { id: 5, image: "/assets/image/trust-pilot.png", alt: "Trustpilot" },
  { id: 6, image: "/assets/image/good-firms.png", alt: "Good Firms" }
];
const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = () => {
    if (!sectionRef.current) return;
    // repulsion logic can go here if needed in the future
  };

  const handleMouseLeave = () => {
    // optional: reset any interaction state here
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.log('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/hero-services.mp4" type="video/mp4" />
      </video>

      <div className="max-w-[90%] px-4 mx-auto w-full relative z-20 flex flex-col gap-4 md:gap-6 pt-20 md:pt-32 pb-8 md:pb-16">

        <div className='flex flex-col md:flex-row  gap-2 md:gap-4 justify-between w-full'>
          <div className='flex flex-col font-extrabold pt-20 md:pt-32 md:max-w-[50%] lg:max-w-[30%]'>
           <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 md:mb-8 text-white text-left'>Personalized Mobile Development That Scales</h1>
            <div className='grid grid-cols-2 pt-10'>
              <AnimatedButton />
            </div>
            <ReviewSlider />
          </div>
          <div className='relative mt-14 w-full md:w-[50%] lg:w-[33%] msgBox p-10'>
             <Image
                className="absolute right-[-4rem] top-[-4rem] w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[157px] lg:h-[157px]"
                src="/assets/image/process-plan.png"
                alt="Process Badge"
                width={157}
                height={157}
              />
              <div className=' '>
                <h2 className='text-4xl text-left font-extrabold text-[#00CE44] mb-2.5'>Get in touch!</h2>
                <p className='text-[#ADADAD] text-left text-sm'>Let's Talk About Your App Idea, Share a few details. <br />and we'll be in touch!</p>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 pt-8">
                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                      Sorry, there was an error sending your message. Please try again.
                    </div>
                  )}
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#131313] input-shadow rounded-xl placeholder-[#414141] border-1 text-white border-[#262626] focus:border-green-400 outline-colors"
                      placeholder="Name:"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#131313] input-shadow rounded-xl placeholder-[#414141] border-1 text-white border-[#262626] focus:border-green-400 outline-colors"
                      placeholder="Email:"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#131313] input-shadow rounded-xl placeholder-[#414141] border-1 text-white border-[#262626] focus:border-green-400 outline-colors"
                      placeholder="+1 (555) 555-5555"
                    />
                  </div>
                  <div>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#131313] input-shadow rounded-xl placeholder-[#414141] border-1 text-white border-[#262626] focus:border-green-400 outline-colors"
                      required
                    >
                      <option value="" disabled>Project Type:</option>
                      <option value="service1">Project Type 1</option>
                      <option value="service2">Project Type 2</option>
                      <option value="service3">Project Type 3</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message:"
                      className="w-full resize-none px-4 py-3 bg-[#131313] input-shadow rounded-xl placeholder-[#414141] border-1 text-white border-[#262626] focus:border-green-400 outline-colors"
                    ></textarea>
                  </div>
                  <div className='btn-submit'>
                    <button type="submit" className="w-full bg-white hover:bg-green-600 text-[#101010] font-bold py-4 mb-4 px-6 rounded-xl transition-all" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Submit!'}
                    </button>
                  </div>
                </form>
                <div className='flex items-center justify-center'>
                  <div className='flex items-center gap-2 text-[#BFBFBF] text-xs bg-[#171717] rounded-md px-3 py-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M10.6043 5.26432V3.96092C10.6043 1.97478 8.98167 0.349976 6.99332 0.349976C5.00498 0.349976 3.38014 1.97478 3.38014 3.96092V5.26432C2.4004 5.34856 1.64453 6.15985 1.64453 7.16845V11.7326C1.64453 12.7966 2.49792 13.65 3.56193 13.65H10.438C11.502 13.65 12.3554 12.7966 12.3554 11.7326V7.16845C12.3554 6.15985 11.584 5.34856 10.6043 5.26432ZM7.68051 10.0967V10.709C7.68051 10.8911 7.53289 11.0387 7.3508 11.0387H6.64916C6.46706 11.0387 6.31945 10.8911 6.31945 10.709V10.0967C5.98032 9.87721 5.75643 9.49373 5.75643 9.05704C5.75643 8.37209 6.31282 7.81349 6.99998 7.81349C7.68714 7.81349 8.24353 8.37209 8.24353 9.05704C8.24353 9.49373 8.01964 9.87721 7.68051 10.0967ZM8.77109 5.2355H5.21555V3.96092C5.21555 2.98116 6.01357 2.18315 6.99332 2.18315C7.9731 2.18315 8.77109 2.98116 8.77109 3.96092V5.2355Z" fill="#00CE44"/>
                    </svg>
                    <p>100% Confidential. NDA Available.</p>
                  </div>

                </div>
              </div>

              </div>
          </div>

      </div>
    </section>
      <ProjectCards />
    </>
  );
};

const ReviewSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      skipSnaps: false,
      containScroll: "trimSnaps",
      align: "start",
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })],
  );

  const [slideOpacities, setSlideOpacities] = useState<number[]>([]);

  const updateSlideOpacities = useCallback(() => {
    if (!emblaApi) return;

    const slides = emblaApi.slideNodes();
    const selectedIndex = emblaApi.selectedScrollSnap();
    const slidesPerView = 3;
    const totalSlides = slides.length;
    const visibleSlides = [];

    for (let i = 0; i < slidesPerView; i++) {
      const slideIndex = (selectedIndex + i) % totalSlides;
      visibleSlides.push(slideIndex);
    }

    const newOpacities = new Array(slides.length).fill(1);
    if (visibleSlides.length >= 3) {
      newOpacities[visibleSlides[0]] = 0.3;
      newOpacities[visibleSlides[visibleSlides.length - 1]] = 0.3;
    }

    setSlideOpacities(newOpacities);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateSlideOpacities();
    emblaApi.on("select", updateSlideOpacities);
    emblaApi.on("reInit", updateSlideOpacities);
    emblaApi.on("scroll", updateSlideOpacities);

    return () => {
      emblaApi.off("select", updateSlideOpacities);
      emblaApi.off("reInit", updateSlideOpacities);
      emblaApi.off("scroll", updateSlideOpacities);
    };
  }, [emblaApi, updateSlideOpacities]);

  return (
    <div className="embla w-full max-w-5xl mx-auto py-12 lg:py-12 xl:py-0 2xl:py-12 overflow-hidden px-4">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_calc(33.333%-16px)] min-w-0 mr-2 md:mr-4 transition-opacity duration-300 ease-in-out"
              style={{ opacity: slideOpacities[index] || 1 }}
            >
              <div className="embla_slide_content flex justify-center items-center rounded-lg shadow-lg py-4 md:py-6 h-full relative">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  width={200}
                  height={50}
                  className="object-contain w-[120px] md:w-[200px] h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent rounded-lg z-[-1]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;