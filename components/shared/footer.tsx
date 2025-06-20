"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [isCtaActive, setIsCtaActive] = useState(false);

  const handleCtaToggle = () => {
    setIsCtaActive(!isCtaActive);
  };

  return (
    <footer className="bg-[#191919] text-white">
      <div className="container mx-auto px-4">
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 pt-8 lg:pt-12">
          {/* CTA Section */}
          <div className="order-2 lg:order-1">
            <div 
              className={`relative p-6 lg:p-8 h-full flex flex-col items-center justify-center text-center group hover:cursor-pointer overflow-hidden cursor-pointer`}
              onClick={handleCtaToggle}
            >
              {/* Background overlay with smooth opacity transition */}
              <div className={`absolute inset-0 bg-gradient-to-r from-[#2AFF70] to-[#00A637] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out ${
                isCtaActive ? 'opacity-100' : ''
              }`}></div>

              {/* Content with relative positioning to stay above background */}
              <div className="relative z-20 mb-3 lg:mb-4">
                <Image
                  src="/assets/image/message.png"
                  alt="Mascot"
                  width={120}
                  height={120}
                  className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-[120px] lg:h-[120px] transition-transform duration-500 ease-in-out group-hover:translate-x-[-30px] group-hover:opacity-100 opacity-0 group-hover:translate-y-[-10px] ${
                    isCtaActive ? 'opacity-100 !translate-x-[-30px] !translate-y-[-10px]' : ''
                  }`}
                />
              </div>

              <h3 className={`relative z-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00CE44] mb-1 transition-all duration-300 group-hover:scale-105 group-hover:text-white ${
                isCtaActive ? 'scale-105 text-white' : ''
              }`}>
                Let's Talk!
              </h3>
              <p className={`relative z-10 text-[#3F3F3F] group-hover:text-[#212121] text-sm sm:text-base font-medium transition-all duration-300 ${
                isCtaActive ? 'text-[#212121]' : ''
              }`}>
                Start Your Mobile Journey With Us Today
              </p>

              {/* Decorative Emoji */}
              <div className="relative z-10 mt-4 lg:mt-6">
                <Image
                  src="/assets/image/smile-2.png"
                  alt="Decorative emoji"
                  width={60}
                  height={60}
                  className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px] transition-transform duration-500 ease-in-out group-hover:translate-x-[30px] group-hover:translate-y-[10px] group-hover:opacity-100 opacity-0 ${
                    isCtaActive ? 'opacity-100 !translate-x-[30px] !translate-y-[10px]' : ''
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Other Sections */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Services Section */}
              <div>
                <h4 className="text-[#00D66F] font-semibold mb-3 lg:mb-4 text-base lg:text-lg">Services</h4>
                <ul className="space-y-2 lg:space-y-3">
                  <li>
                    <Link
                      href="/mobile-app-development"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ios-app-development"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      IOS App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/android-app-development"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Android App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/website-design"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Website Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/product-design"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Product Design
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Portfolio & Quick Links Section */}
              <div>
                <h4 className="text-[#00D66F] font-semibold mb-3 lg:mb-4 text-base lg:text-lg">Portfolio</h4>
                <ul className="space-y-2 lg:space-y-3">
                  <li>
                    <Link
                      href="/website-portfolio"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Website Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Case-Studies
                    </Link>
                  </li>
                </ul>

                {/* Quick Links */}
                <h4 className="text-[#00D66F] font-semibold mb-3 lg:mb-4 mt-6 lg:mt-8 text-base lg:text-lg">
                  Quick Links
                </h4>
                <ul className="space-y-2 lg:space-y-3">
                  <li>
                    <Link
                      href="/testimonials"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social Links Section */}
              <div className="sm:col-span-2 lg:col-span-1">
                <h4 className="text-[#00D66F] font-semibold mb-3 lg:mb-4 text-base lg:text-lg">
                  Social Links
                </h4>
                <ul className="space-y-2 lg:space-y-3">
                  <li>
                    <a
                      href="https://www.facebook.com/inceptivesdigital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/inceptivesdigital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/inceptivesdigital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@inceptives.com"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8 lg:mt-12">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 space-y-2 md:space-y-0">
            <p className="text-center md:text-left">© 2025 Inceptives Digital. All Rights Reserved.</p>
            <div className="flex items-center flex-wrap justify-center md:justify-end space-x-2 md:space-x-4">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="hidden sm:inline">|</span>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms Of Service
              </Link>
              <span className="hidden sm:inline">|</span>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 lg:mt-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover z-0"
        >
          <source src="/assets/videos/Footer.mp4" type="video/mp4" />
        </video>
      </div>
    </footer>
  );
};

export default Footer;
