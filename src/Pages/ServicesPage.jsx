import React from "react";
import Banner from "../Assest/Services/Banner.png";
import DecorativeLine from "../components/DecorativeLine";
import Img1 from "../Assest/Services/s1.png";
import Img2 from "../Assest/Services/s2.png";
import Img3 from "../Assest/Services/s3.png";
import Img4 from "../Assest/Services/s4.png";
import Img5 from "../Assest/Services/s5.png";
import Img6 from "../Assest/Services/s6.png";
import ContactForm from "../components/ContactForm";
import ScrollToTop from "../components/ScrollToTop";

const ServicesPage = () => {
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
            Our Sevices
          </h1>
        </div>
      </div>

      {/* Contant section */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="p-6">
          <h1 className="text-white text-center text-3xl font-serif italic my-6 ">
            Wedding Planning Services
          </h1>
          <p className="text-gray-400">
            Planning your wedding should be an
            exciting and joyous experience, not a stressful one. That’s where
            our expert wedding planning services come in. From the initial
            stages of brainstorming ideas to the final moments of your special
            day, we’re by your side every step of the way. Our comprehensive
            planning includes creating detailed timelines, managing budgets, and
            coordinating with vendors to ensure every aspect of your wedding is
            flawless. We specialize in crafting tailored solutions that suit
            your vision, whether you dream of a grand, traditional celebration
            or an intimate, modern affair. With our meticulous attention to
            detail, you can trust us to handle everything – from guest
            management to logistics – allowing you to focus on celebrating your
            love. Let us transform your wedding journey into a seamless and
            magical experience.
          </p>
        </div>

        {/* Line  */}
        <DecorativeLine />

        {/* Decorate and Desing  */}
        <section className="text-white px-10">
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
                Decor and Design
              </h2>
              <p className="text-gray-300 leading-relaxed">
              Your wedding decor sets the stage for unforgettable moments, and we ensure it reflects your unique style and love story. From breathtaking floral arrangements to elegant table settings, our design team curates every detail with precision and creativity. Whether you dream of a classic, rustic, or contemporary aesthetic, we’ll bring it to life with a harmonious blend of colors, textures, and lighting. We partner with top-notch decorators and designers to craft stunning backdrops, centerpieces, and installations. Let us transform your venue into a magical setting that leaves your guests in awe and makes your special day truly unforgettable.
              </p>
            </div>
          </div>
        </section>

        {/* Line  */}
        <DecorativeLine />

        {/* Pre Wedding Celebrations  */}
        <section className="text-white px-10 py-5">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-32">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                PRE WEDDING CELEBRATONS
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Vestibulum maximus ipsum incidunt vehicula, odio vitae elit,
                fringilla luctus varius est. Id felis, lorem, ultrices orci
                faucibus dui dui, nulla, luctus venenatis Donec ac placerat
                ullamcorper ac nec ex tempor diam id ex odio Morbi vehicula.
                Iaculis est amet, porta Cras dignissim ex Donec diam orci
                libero, volutpat ex urna, placerat volutpat Donec ex max.
              </p>
              <p className="text-gray-300 leading-relaxed">
              Weddings are more than just the big day – they’re a celebration of love, laughter, and family. From engagement parties to mehendi, sangeet, and bachelor/bachelorette events, we plan every pre-wedding celebration with care and creativity. Each event is tailored to your preferences, featuring vibrant themes, personalized decor, and seamless coordination. Whether you prefer a grand celebration or an intimate gathering, we’ll ensure every event is packed with joy, music, and memorable moments. Let us make your journey to the big day as special and enjoyable as the wedding itself.
              </p>
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-8 lg:ml-8">
              <img
                src={Img2}
                alt="Pre Wedding Celebrations"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </section>

        {/* Line  */}
        <DecorativeLine />

        {/* DESTINATION AND VENUE SELECTION  */}
        <section className="text-white px-10 py-5">
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 ">
            <div className="w-full lg:w-1/2">
              <img
                src={Img3}
                alt="Decor and Design"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-white uppercase text-3xl font-bold mb-4">
                DESTINATION AND VENUE SELECTION
              </h2>
              <p className="text-gray-300 leading-relaxed">
              The perfect venue is the foundation of an unforgettable wedding, and we help you find one that matches your style and vision. Whether it’s a luxurious palace, a serene beachfront, or a cozy countryside retreat, we offer a curated selection of destinations and venues. Our team handles every aspect, from site visits to negotiations and logistics, ensuring your chosen location aligns perfectly with your dream wedding. For destination weddings, we also assist with travel, accommodation, and local vendor arrangements, making the process hassle-free. Let us help you say “I do” in the perfect setting.
              </p>
            </div>
          </div>
        </section>

        {/* Line  */}
        <DecorativeLine />

        {/* FOOD AND BEVERAGES  */}
        <section className="text-white px-10 py-5">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-32">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">FOOD AND BEVERAGES</h2>
              <p className="text-gray-300 leading-relaxed">
              Delight your guests with a culinary experience they’ll remember forever. We collaborate with top chefs and caterers to create a menu that perfectly complements your celebration. From elegant multi-course meals to curated cocktails and creative desserts, every dish is prepared with the finest ingredients and utmost care. We offer a wide range of cuisines, including regional specialties, international favorites, and dietary accommodations. Additionally, our beverage experts craft unique drink menus, including signature cocktails, mocktails, and fine wines. Let us elevate your wedding feast into a feast for the senses.
              </p>
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-8 lg:ml-8">
              <img
                src={Img4}
                alt="Food and Beverages"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </section>

        {/* Line  */}
        <DecorativeLine />

        {/* ENTERTAINMENT  */}
        <section className="text-white px-10 py-5">
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 ">
            <div className="w-full lg:w-1/2">
              <img
                src={Img5}
                alt="Decor and Design"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-white uppercase text-3xl font-bold mb-4">
                ENTERTAINMENT
              </h2>
              <p className="text-gray-300 leading-relaxed">
              Entertainment is the heartbeat of any celebration, and we ensure your wedding is filled with joy, music, and unforgettable performances. Whether you want a live band, a talented DJ, or a traditional dance troupe, we’ll curate an entertainment lineup that resonates with your style. From pyrotechnic displays to interactive photo booths and surprise performances, we create moments that keep your guests engaged and energized. Let us turn your wedding into a celebration filled with laughter, dancing, and memories that last a lifetime.
              </p>
            </div>
          </div>
        </section>

        {/* Line  */}
        <DecorativeLine />

        {/* OTHER WEDDING SERVICES  */}
        <section className="text-white px-10 lg:py-5">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-32">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                OTHER WEDDING SERVICES
              </h2>
              <p className="text-gray-300 leading-relaxed ">
              Beyond the essentials, we offer a wide range of services to make your wedding truly extraordinary. From designing personalized invitations and managing guest lists to arranging transportation and return gifts, we take care of every detail. Our team also provides assistance with wedding photography, videography, and makeup artists to ensure you look and feel your best. Additionally, we handle special requests, such as cultural or religious customs, with respect and care. Whatever your needs, we’re here to bring your dream wedding to life with seamless execution and unparalleled attention to detail.
              </p>
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-8 lg:ml-8">
              <img
                src={Img6}
                alt="Other Wedding Services"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
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

export default ServicesPage;
