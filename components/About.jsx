"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="hero min-h-screen bg-white pt-20" id='about' >
    <div className="hero-content container flex-col lg:flex-row" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
      <img src="./profile.png" className="max-w-sm"  />
      <div>
        <h1 className="text-4xl font-bold text-gray-600">About Me</h1>
        <p className="py-6 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex soluta, dignissimos natus veritatis, esse laborum placeat odio eveniet dolor assumenda debitis consequatur ullam cumque alias a tenetur, optio laboriosam sapiente quod corporis dicta corrupti iusto iure! Explicabo voluptatem nulla reprehenderit.</p>
      </div>
    </div>
  </div>
  )
}

export default About
