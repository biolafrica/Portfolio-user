"use client"

import { useState } from "react";
import Image from "next/image"
import { ArrowLongRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Background from "../common/background";



export default function Header (){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '/project' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="w-full bg-inherit ">

      <nav className="w-full h-full mx-auto px-4 sm:px-6 lg:px-28 flex-col">

        { !isMobileMenuOpen &&  (<Background/>) }
       
        <div className="flex items-center justify-between h-12 lg:h-20s w-full px-2 ">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Image src="/images/Frame 1145.png" alt="abiodun logo" width={36} height={36}/>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Log in Button - Desktop */}
          <div className="hidden lg:flex lg:items-center">
            <a
              href="#login"
              className="inline-flex items-center gap-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <span className="flex items-center gap-1">
                Book a call <ArrowLongRightIcon className="w-5 h-5"/> 
              </span>
              
              
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <Bars3Icon className="block h-6 w-6"/>
              ) : (
                <XMarkIcon className="block h-6 w-6"/>
              )}
            </button>
          </div>

        </div>

        {/* Mobile menu */}
        <div 
          className={`lg:hidden w-full h-fit transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Log in */}
            <a
              href="#login"
              className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Book a call</span>
              <ArrowLongRightIcon className="w-5 h-5"/> 
            </a>
          </div>
        </div>

      </nav>

    </header>
  );
};