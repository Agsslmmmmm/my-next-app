'use client'
import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar fixed w-full z-10 bg-transparent backdrop-blur-sm shadow">
      <div className="flex-1 container ml-4">
        <a className="font-bold text-gray-600 hover:scale-110 transition-all duration-500 text-xl">Agus<span className='text-purple-500'>Salim</span></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className='text-gray-600 font-bold text-md'><a href='/'>Home</a></li>
            <li className='text-gray-600 font-bold text-md'>
            </li>
        </ul>
      </div>
    </div>

  );
}

export default Navbar;
