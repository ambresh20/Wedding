import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../Assest/Home/logo.png";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#224C64] shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <NavLink to="/">
                <img src={Logo} alt="Logo" className="my-2 " />
              </NavLink>
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
              <Link to="/" className="text-white hover:text-pink-500">
                HOME
              </Link>
              <Link to="/gallery" className="text-white hover:text-pink-500">
                GALLERY
              </Link>
              <Link to="/recent" className="text-white hover:text-pink-500">
                EVENTS
              </Link>
              <Link
                to="/testinomial"
                className="text-white hover:text-pink-500"
              >
                PORTFOLIO
              </Link>
              <Link to="/service" className="text-white hover:text-pink-500">
                SERVICES
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-pink-500"
              >
                HOME
              </Link>
              <Link
                to="/gallery"
                className="block px-3 py-2 text-white hover:text-pink-500"
              >
                GALLERY
              </Link>
              <Link
                to="/testinomial"
                className="block px-3 py-2 text-white hover:text-pink-500"
              >
                PORTFOLIO
              </Link>
              <Link
                to="/recent"
                className="block px-3 py-2 text-white hover:text-pink-500"
              >
                EVENTS
              </Link>
              <Link
                to="/service"
                className="block px-3 py-2 text-white hover:text-pink-500"
              >
                SERVICES{" "}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
