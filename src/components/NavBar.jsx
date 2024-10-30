import React, { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-semibold text-gray-800">
                Dream Weddings
              </span>
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
              <a href="#services" className="text-gray-600 hover:text-pink-500">
                Home
              </a>
              <a href="#services" className="text-gray-600 hover:text-pink-500">
                Services
              </a>
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-pink-500"
              >
                Portfolio
              </a>
              <a href="#contact" className="text-gray-600 hover:text-pink-500">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#services"
                className="block px-3 py-2 text-gray-600 hover:text-pink-500"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-gray-600 hover:text-pink-500"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-pink-500"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
