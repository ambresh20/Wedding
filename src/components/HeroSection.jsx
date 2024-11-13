import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../Assest/wedswipe/b1.png";
import img2 from "../Assest/wedswipe/b2.jpg";
import img3 from "../Assest/wedswipe/b3.png";
import img4 from "../Assest/wedswipe/b4.png";
import img5 from "../Assest/wedswipe/b5.png";
import img6 from "../Assest/wedswipe/b6.png" ;

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [img6, img1, img2, img3, img4, img5];

const HeroSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full h-[100vh]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        className="w-full h-full group"
        loop={true}
        grabCursor={true}
        speed={800}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl font-bold mb-4 text-red-500">Slide {index + 1}</h2>
                <p className="text-xl">description</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute inset-0 z-10 flex items-center justify-between px-4">
          <button
            ref={prevRef}
            className="w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-lg transform hover:scale-110 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-gray-900" />
          </button>
          <button
            ref={nextRef}
            className="w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-lg transform hover:scale-110 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-gray-900" />
          </button>
        </div>
      </Swiper>

      <div className="swiper-pagination absolute bottom-6 w-full flex justify-center gap-2 z-10"></div>

      <style jsx>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.2);
        }
      `}
      </style>

    </section>
  );
};

export default HeroSection;