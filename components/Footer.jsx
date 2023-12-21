'use client'
import React from 'react'
import {  FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer footer-center p-6 bg-white text-gray-600 shadow-inner rounded">
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.instagram.com/agsslmmm_/">
                        <FaInstagram className='w-8 h-8 hover:scale-110 transition-all duration-500' />
                    </a>
                    <a href="https://github.com/Agsslmmmmm">
                        <FaGithub className='w-8 h-8 hover:scale-110 transition-all duration-500' />
                    </a>
                    
                </div>
            </nav>
            <aside>
                <p>Copyright © 2023 - All right reserved by Agus Salim</p>
            </aside>
        </footer>
    )
}

export default Footer
