"use client";

import React, { useState } from 'react';

import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="py-5">
      <div className="z-10 flex flex-col md:flex-row items-center justify-between text-white p-4 mx-auto max-w-6xl">
        <Image
          src="/logo-light.png"
          width={123}
          height={41}
          alt="logo"
        />

        <div className="flex items-center mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="relative group">
                <span>Home</span>
              </a>
            </li>
            <li>
              <div
                className="relative group"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <a href="/" className="flex items-center">
                  <span>Services</span>
                </a>
                {isDropdownOpen && (
                  <div className="absolute bg-gray-800 px-4 py-2 mt-4 rounded-lg text-white">
                    <a href="/" className="flex px-1 py-2 bg-transparent">Service</a>
                    <a href="/" className="block px-1 py-2 bg-transparent">Service</a>
                  </div>
                )}
              </div>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-12"></div>
    </nav>
  );
};

export default Navbar;


