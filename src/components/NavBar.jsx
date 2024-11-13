import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../Assest/Home/logo.png" ;

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#224C64] shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center"> 
              <img src={Logo} alt="Logo" className="my-2 " />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop menu */} 
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-white hover:text-pink-500">
                HOME
              </a>
              <a href="#gellary" className="text-white hover:text-pink-500">
                GALLERY
              </a>
              <a href="#events" className="text-white hover:text-pink-500">
                EVENTS
              </a>
              <a href="#portfolio" className="text-white hover:text-pink-500">
                PORTFOLIO
              </a>
              <a href="#services" className="text-white hover:text-pink-500">
                SERVICES
              </a>
              
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-white hover:text-pink-500"
              >
                HOME 
              </a>
              <a
                href="#gellary"
                className="block px-3 py-2 text-white hover:text-pink-500"
              >
                GALLERY
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-white hover:text-pink-500"
              >
                PORTFOLIO
              </a>
              <a
                href="#events"
                className="block px-3 py-2 text-white hover:text-pink-500"
              >
                EVENTS
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-white hover:text-pink-500"
              >
                SERVICES 
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
