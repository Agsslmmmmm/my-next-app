"use client"
import React, { useEffect } from 'react'
import { FaInstagram, FaGithub } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="hero min-h-screen bg-transparent pt-16" id='home' data-aos="fade-down-right" data-aos-duration="2000">
            <div className="container">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="./profile.png" className="max-w-sm" />
                    <div>
                        <h1 className="text-4xl font-bold text-gray-600">Hello👋, I'm <span>Agus <span className='text-blue-300'>Salim</span></span></h1>
                        <h2 className='text-2xl font-bold text-gray-600 mt-2'>Student & Front End Dev</h2>
                        <p className="py-6 text-xl text-gray-600">Welcome to my personal blog, a place where stories and knowledge meet! In our hero section, you will immediately feel the energetic vibrations of the interesting topics we discuss. With captivating titles and high-quality images or videos, we invite you to reflect and explore the unique world we present. </p>
                        <div className="p-4 items-center justify-center flex space-x-4 mt-6">
                            <a href="https://www.instagram.com/agsslmmm_/">
                                <FaInstagram className='w-8 h-8 hover:scale-110 transition-all duration-500' />
                            </a>
                            <a href="https://www.github.com" data>
                                <FaGithub className='w-8 h-8 hover:scale-110 transition-all duration-500' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
