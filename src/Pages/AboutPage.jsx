import React from "react";
import Banner from "../Assest/AboutUs/Banner.png";

const AboutPage = () => {
  return (
    <div className="bg-[#162841] pb-10">
      {/* Banner Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={Banner}
            alt="Wedding Sevices"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-white text-6xl md:text-7xl font-serif italic">
            About Us
          </h1>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
