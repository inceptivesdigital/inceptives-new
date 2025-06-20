"use client"

import Image from "next/image";
import React, { useState } from "react";
import AnimatedButton from "../shared/animated-button";

const TenthSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-black text-white py-12 md:py-24 px-4">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-44 items-center">
          {/* Left side - Location Cards */}
          <div className="w-full relative order-2 lg:order-1">
            {/* USA Card */}
            <div className="mb-8 lg:mb-12 flex justify-center lg:justify-end relative">
              <div className="relative w-full lg:w-[95%] ">
                <Image
                  src="/assets/image/us-2.png"
                  alt="map"
                  width={500}
                  height={500}
                  className="w-full rounded-3xl"
                />
                <div className="absolute left-8 lg:left-20 bottom-4 lg:bottom-0">
                  <p className="text-lg sm:text-2xl lg:text-3xl">
                    Based in<br/> 
                    <span className="font-extrabold text-3xl sm:text-5xl lg:text-8xl">USA</span>
                  </p>
                </div>
               
              </div>
            </div>
            
            {/* Vector Image */}
            <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-10 -translate-y-1/2">
              <Image
                src="/assets/image/vector-img.svg"
                alt="map"
                width={150}
                height={150}
                className="w-[120px] h-[120px] xl:w-[150px] xl:h-[150px] lg:w-[100px] lg:h-[100px]"
              />
            </div>
            
            {/* UK Card */}
            <div className="relative">
              <Image
                src="/assets/image/uk.png"
                alt="map"
                width={650}
                height={400}
                className="w-full rounded-3xl lg:rounded-none"
              />
              <div className="absolute left-4 lg:left-8 bottom-4 lg:bottom-0">
                <p className="text-lg sm:text-2xl lg:text-3xl">
                  Also in<br/> 
                  <span className="font-extrabold text-3xl sm:text-5xl lg:text-8xl">UK</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-[#00CE44] mb-2 lg:mb-4">
                Get In Touch!
              </h1>
              <p className="text-[#ADADAD] text-lg sm:text-xl lg:text-3xl">
                Scalable Solutions From Teams Worldwide!
              </p>
            </div>

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

            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-green-400 outline-none transition-colors"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-green-400 outline-none transition-colors"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-green-400 outline-colors"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-green-400 outline-none transition-colors"
                    placeholder=""
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-green-400 outline-none transition-colors resize-none"
                  placeholder=""
                ></textarea>
              </div>

              {/* <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-[#00CE44] to-[#30FB73] text-black font-bold py-3 px-8 rounded-lg transition-opacity ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit!'}
                </button>
              </div> */}
              <AnimatedButton text={isSubmitting ? 'Sending...' : 'Submit!'} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenthSection;
