"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useMobileDetection } from "../../hooks/useMobileDetection"

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const isMobile = useMobileDetection()

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-[90%] mx-auto bg-[#d4d4d413] backdrop-blur-3xl text-xl rounded-2xl flex justify-between items-center px-8 py-4 border border-white/10">
          <div className="flex-1">
            <Link href="/" className="text-white font-extrabold hover:text-gray-300 transition-colors">
              <Image src="/assets/image/logo.png" alt="Inceptives Digital" width={100} height={100} />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 mr-8">
            <Link href="/services" className="text-white font-extrabold hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link href="/" scroll={false} className="text-white font-extrabold hover:text-gray-300 transition-colors" onClick={async (e) => {
              if (window.location.pathname !== "/") {
                e.preventDefault();
                window.location.href = "/#portfolio";
                return;
              }
              e.preventDefault();
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
            }}>
              Portfolio
            </Link>
            <Link href="/" scroll={false} className="text-white font-extrabold hover:text-gray-300 transition-colors" onClick={async (e) => {
              if (window.location.pathname !== "/") {
                e.preventDefault();
                window.location.href = "/#contact";
                return;
              }
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}>
              Contact
            </Link>
          </nav>

          <div className="h-12 w-px bg-white/20 mx-4 hidden md:block"></div>

          <button 
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors md:hidden" 
            aria-label="Menu"
            onClick={toggleDrawer}
          >
            <Image src={"/assets/image/menu-alt.svg"} alt="Menu" width={24} height={24} />
          </button>

          {/* Desktop menu button (hidden on mobile) */}
          <button className="hidden md:block text-white p-2 rounded-md hover:bg-white/10 transition-colors" aria-label="Menu">
            <Image src={"/assets/image/menu-alt.svg"} alt="Menu" width={24} height={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobile && (
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={closeDrawer}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-[#1a1a1a] backdrop-blur-3xl z-50 transform transition-transform duration-300 ease-in-out border-l border-white/10 ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <Image src="/assets/image/logo.png" alt="Inceptives Digital" width={80} height={80} />
            <button
              onClick={closeDrawer}
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Close Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex flex-col p-6 space-y-6">
            <Link 
              href="/services-page" 
              className="text-white text-xl font-extrabold hover:text-[#00CE44] transition-colors py-3 border-b border-white/10"
              onClick={closeDrawer}
            >
              Services
            </Link>
            <Link 
              href="/" scroll={false}
              className="text-white text-xl font-extrabold hover:text-[#00CE44] transition-colors py-3 border-b border-white/10"
              onClick={async (e) => {
                closeDrawer();
                if (window.location.pathname !== "/") {
                  e.preventDefault();
                  window.location.href = "/#portfolio";
                  return;
                }
                e.preventDefault();
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Portfolio
            </Link>
            <Link 
              href="/" scroll={false}
              className="text-white text-xl font-extrabold hover:text-[#00CE44] transition-colors py-3 border-b border-white/10"
              onClick={async (e) => {
                closeDrawer();
                if (window.location.pathname !== "/") {
                  e.preventDefault();
                  window.location.href = "/#contact";
                  return;
                }
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </Link>
          </nav>

          {/* Drawer Footer */}
          
        </div>
      )}
    </>
  )
}
