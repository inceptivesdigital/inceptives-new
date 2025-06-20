'use client'

import React from 'react'
import { InlineWidget } from 'react-calendly'

const SixthSection = () => {
  return (
    <section className="py-16 bg-[#191919]">
   
          <InlineWidget 
            url="https://calendly.com/inceptivesdigital-info/30min"
            styles={{
              height: '700px',
              borderRadius: '8px',
              width: '100%'
            }}
            pageSettings={{
              backgroundColor: '#191919', 
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: 'blue', 
              textColor: 'ffffff' 
            }}
          />

   
    </section>
  )
}

export default SixthSection