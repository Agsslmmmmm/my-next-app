'use client'
import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { Link as Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar bg-transparent fixed z-[999] backdrop-blur-3xl">
      <div className="navbar-start">
        <div className="dropdown ml-6">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-6 shadow-xl bg-base-100 rounded-3xl w-52">
            <li><Link to="home" spy={true} smooth={true} duration={800}>Homepage</Link></li>
            <li><Link to="about" spy={true} smooth={true} duration={800}>About</Link></li>
            <li><Link to="blog" spy={true} smooth={true} duration={800}>Blog</Link></li>
            <li><Link to="contact" spy={true} smooth={true} duration={800}>Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="homepage" spy={true} smooth={true} duration={800} className="font-bold text-gray-600 text-xl hover:tracking-widest transition-all duration-500">Agus <span className='text-blue-400'>Salim</span></Link>
      </div>
      <div className="navbar-end mr-8 space-x-4">
        <a href='https://www.instagram.com/agsslmmm_/'>
          <FaInstagram className='h-8 w-8 hover:scale-110 transition-transform duration-500' />
        </a>
        <a href='https://github.com/Agsslmmmmm'>
          <div className="indicator">
            <FaGithub className='h-8 w-8 hover:scale-110 transition-transform duration-500' />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
