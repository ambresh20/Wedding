import React from "react";
import DecorativeLine from "../components/DecorativeLine";
import Banner from "../Assest/AboutUs/Banner.png";
import Img1 from "../Assest/Services/s1.png";
import ContactForm from "../components/ContactForm";
import ScrollToTop from "../components/ScrollToTop" ;

const AboutUsPage = () => {
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

      {/* Contant section */}
      <div className="w-full max-w-7xl mx-auto">
        {/* About Us */}
        <section className="text-white px-10 mt-20">
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 ">
            <div className="w-full lg:w-1/2">
              <img
                src={Img1}
                alt="Decor and Design"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-white uppercase text-3xl font-bold mb-4">
                About Us
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Dream Wedding offers exceptional decoration services near you,
                making every event a spectacular success. As the best event
                planners in Indore, we bring creativity and precision to your
                celebrations. Our team is renowned as the best party decorators
                in Indore, specializing in transforming venues with stunning
                designs and themes. Whether it’s a wedding, birthday,
                anniversary, or corporate event, Dream Wedding ensures a
                seamless and memorable experience. Trust us to handle every
                detail with care and expertise, creating an ambiance that
                reflects your unique style. Choose Dream Wedding for top-tier
                event planning and decoration services in Indore.
              </p>
            </div>
          </div>
        </section>

        {/* Line  */}
        <DecorativeLine />

        {/* Who we are ?  */}
        <section className="text-white px-10 py-5">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-32">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Who we are ?</h2>
              <p className="text-gray-300 leading-relaxed">
                We are passionate creators of unforgettable experiences. With
                years of expertise in event decoration, we specialize in turning
                ordinary moments into extraordinary memories. As leading event
                decorators in Indore, our dedicated team works tirelessly to
                bring your vision to life, crafting bespoke decorations tailored
                to your unique style and preferences. Whether it’s a wedding,
                birthday, corporate event, or any special occasion, our party
                decoration services make it exceptional. From stunning floral
                arrangements to captivating lighting designs, every detail is
                meticulously planned to ensure your event is nothing short of
                spectacular. Trust Decor Planner’s decoration services at home
                or any venue elevate your celebration and leave a lasting
                impression on your guests.
              </p>
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-8 lg:ml-8">
              <img
                src={Img1}
                alt="who we are"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </section>

        {/* Line  */}
        <DecorativeLine />

        {/* What we offer?  */}
        <section className="text-white px-10 py-5">
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 ">
            <div className="w-full lg:w-1/2">
              <img
                src={Img1}
                alt="we offer"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-white uppercase text-3xl font-bold mb-4">
                What we offer?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We offer comprehensive event decoration services tailored to
                your vision and budget. From elegant weddings to lively birthday
                parties, we provide stunning decor solutions that reflect your
                unique style. With a team of creative experts and a wide range
                of customizable options, we ensure every detail is perfect,
                leaving you free to enjoy your special day stress-free.
              </p>

              <ul className="my-8 space-y-6 p-6 rounded-lg shadow-md">
                <li className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Wedding Decoration
                  </h2>
                  <p className="text-gray-600">
                    From enchanting floral arrangements to elegant drapery, we
                    bring your dream wedding vision to life with unparalleled
                    beauty and sophistication.
                  </p>
                </li>
                <li className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Birthday Decoration
                  </h2>
                  <p className="text-gray-600">
                    From vibrant balloon installations to elegant table
                    settings, we craft unforgettable atmospheres that make every
                    moment special.
                  </p>
                </li>
                <li className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Balloon Decoration
                  </h2>
                  <p className="text-gray-600">
                    With our enchanting balloon decorations, adding a touch of
                    whimsy and color to any celebration. From elegant arches to
                    playful centerpieces, our designs will leave your guests in
                    awe.
                  </p>
                </li>
                <li className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Anniversary Decoration
                  </h2>
                  <p className="text-gray-600">
                    Celebrate your love journey with exquisite anniversary
                    decorations, tailored to capture the essence of your unique
                    bond.
                  </p>
                </li>
              </ul>

            </div>
          </div>
        </section>

        {/* Line  */}
        <DecorativeLine />

        <ContactForm />

        <ScrollToTop />
      </div>
    </div>
  );
};

export default AboutUsPage;
