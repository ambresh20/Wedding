import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from "../Assest/gallaryswipe/g1.jpg";
import img2 from "../Assest/gallaryswipe/g2.jpg";
import img3 from "../Assest/gallaryswipe/g3.jpg";
import img4 from "../Assest/gallaryswipe/g4.jpg";
import img5 from "../Assest/gallaryswipe/g5.jpg";
import img6 from "../Assest/gallaryswipe/g6.jpg";
import img7 from "../Assest/gallaryswipe/g7.jpg";
import img8 from "../Assest/gallaryswipe/g8.jpg";
import img9 from "../Assest/gallaryswipe/g9.jpg";
import img10 from "../Assest/gallaryswipe/g10.jpg";
import img11 from "../Assest/gallaryswipe/g11.jpg";
import img12 from "../Assest/gallaryswipe/g12.jpg";
import img13 from "../Assest/gallaryswipe/g13.jpg";
import img14 from "../Assest/gallaryswipe/g14.jpg";

const Popular = () => {
  const images = [
    { img: img1, title: 'Bhopal' },
    { img: img2, title: 'Indore' },
    { img: img3, title: 'Namkeen' },
    { img: img4, title: 'Chocolate' },
    { img: img5, title: 'Delhi' },
    { img: img6, title: 'Noida' },
    { img: img7, title: 'Pune' },
    { img: img8, title: 'Jabalpur' },
    { img: img9, title: 'Sanchi' },
    { img: img10, title: 'Sonipath' },
    { img: img11, title: 'Raisen' },
    { img: img12, title: 'Guna' },
    { img: img13, title: 'India' },
    { img: img14, title: 'Mumbai' },
  ];

  return (
    <section className="bg-gray-300 mx-auto mt-8 px-8 py-6" id="popular">
      <h2 className="text-center text-3xl bordered-title mb-10">
        Weddings
        <span className="text-red-500 bordered-title p-0 m-0 font-bold"> Popular</span>
      </h2>
      
      <div className="relative">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          autoHeight={true}
          loop={true}
          speed={800}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide 
              key={index}
              className="relative rounded-lg shadow-md overflow-hidden my-8 group"
            >
              <div className="relative w-full h-[420px] overflow-hidden">
                <img
                  src={image.img}
                  alt={image.title}
                  title={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content container */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-10 opacity-100 transition-opacity duration-300">
                  <h5 className="text-xl font-semibold mb-3 text-white">{image.title}</h5>
                  <a 
                    href="#gallary" 
                    className="inline-block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                  >
                    More details 
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom CSS for horizontal pagination */}
      <style jsx>{`
        .swiper-pagination {
          position: absolute;
          bottom: 10px; 
          left: 5%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px; 
        }
        .swiper-pagination-bullet {
          width: 20px; 
          height: 8px; 
          background: rgba(0, 0, 0, 0.5); 
          border-radius: 5px; 
        }
        .swiper-pagination-bullet-active {
          background: green; 
        }
      `}</style>
    </section>
  );
};

export default Popular;
