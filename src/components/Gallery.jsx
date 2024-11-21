import React, { useState } from "react";
import Banner from "../Assest/Gallery/Banner.png";
import Img1 from "../Assest/Gallery/g1.jpg";
import Img2 from "../Assest/Gallery/g2.jpg";
import Img3 from "../Assest/Gallery/g3.jpg";
import Img4 from "../Assest/Gallery/g4.jpg";
import Img5 from "../Assest/Gallery/g5.jpg";
import Img6 from "../Assest/Gallery/g6.jpg";
import Img7 from "../Assest/Gallery/g7.jpg";
import Img8 from "../Assest/Gallery/g8.jpg";
import Img9 from "../Assest/Gallery/g9.jpg";
import Img10 from "../Assest/Gallery/g10.jpg";
import Img11 from "../Assest/Gallery/g11.jpg";
import Img12 from "../Assest/Gallery/g12.jpg";
import Img13 from "../Assest/Gallery/g13.jpg";
import Img14 from "../Assest/Gallery/gt14.jpg";
import Img15 from "../Assest/Gallery/pic1.jpg";
import Img16 from "../Assest/Gallery/pic2.jpg";
import Img17 from "../Assest/Gallery/pic3.jpg";
import Img18 from "../Assest/Gallery/pic4.jpeg";
import Img19 from "../Assest/Gallery/pic5.jpeg";
import Img20 from "../Assest/Gallery/pic6.jpg";
import Img21 from "../Assest/Gallery/pic7.jpeg";
import Img22 from "../Assest/Gallery/pic8.jpeg";
import Img23 from "../Assest/Gallery/pic9.jpeg";
import Img24 from "../Assest/Gallery/pic10.jpeg";
import Img25 from "../Assest/Gallery/pic11.jpg";
import Img26 from "../Assest/Gallery/pic12.jpg";
import Img27 from "../Assest/Gallery/pic13.jpg";
import Img28 from "../Assest/Gallery/pic14.jpg";
import Img29 from "../Assest/Gallery/pic15.jpg";
import Img30 from "../Assest/Gallery/pic17.jpg";
import Img31 from "../Assest/Gallery/pic18.jpg";
import Img32 from "../Assest/Gallery/pic19.jpg";
import Img33 from "../Assest/Gallery/pic20.jpg";
import Img34 from "../Assest/Gallery/pic21.jpg";
import Img35 from "../Assest/Gallery/pic22.jpg";
import Img36 from "../Assest/Gallery/pic23.jpg";
import Img37 from "../Assest/Gallery/pic24.jpg";
import Img38 from "../Assest/Gallery/pic25.jpg";
import Img39 from "../Assest/Gallery/pic26.jpg";
import Img40 from "../Assest/Gallery/pic27.jpg";
import ScrollToTop from "./ScrollToTop";
// import Img41 from "../Assest/Gallery/pic28.jpg" ;
// import Img42 from "../Assest/Gallery/pic29.jpg" ;
// import Img43 from "../Assest/Gallery/pic30.jpg" ;
// import Img44 from "../Assest/Gallery/pic31.jpg" ;
// import Img45 from "../Assest/Gallery/pic32.jpg" ;
// import Img46 from "../Assest/Gallery/pic33.jpg" ;
// import Img47 from "../Assest/Gallery/pic34.jpg" ;
// import Img48 from "../Assest/Gallery/pic35.jpg" ;
// import Img49 from "../Assest/Gallery/pic36.jpg" ;
// import Img50 from "../Assest/Gallery/pic37.jpg" ;

const allImages = [
  {
    id: 1,
    url: Img1,
    title: "Sea under a man",
  },
  {
    id: 2,
    url: Img2,
    title: "Wedding Dress",
  },
  {
    id: 3,
    url: Img3,
    title: "Wedding Event",
  },
  {
    id: 4,
    url: Img4,
    title: "Ocean Sunset",
  },
  {
    id: 5,
    url: Img5,
    title: "Beach Landscape",
  },
  {
    id: 6,
    url: Img6,
    title: "Mountain View",
  },
  {
    id: 7,
    url: Img7,
    title: "Forest Path",
  },
  {
    id: 8,
    url: Img8,
    title: "City Skyline",
  },
  {
    id: 9,
    url: Img9,
    title: "River Landscape",
  },
  {
    id: 10,
    url: Img10,
    title: "Desert Scene",
  },
  {
    id: 11,
    url: Img11,
    title: "Mountain Lake",
  },
  {
    id: 12,
    url: Img12,
    title: "Sunset Beach",
  },
  {
    id: 13,
    url: Img13,
    title: "Tropical Island",
  },
  {
    id: 14,
    url: Img14,
    title: "Urban Landscape",
  },
  {
    id: 15,
    url: Img15,
    title: "Urban Landscape",
  },
  {
    id: 16,
    url: Img16,
    title: "Urban Landscape",
  },
  {
    id: 17,
    url: Img17,
    title: "Urban Landscape",
  },
  {
    id: 18,
    url: Img18,
    title: "Urban Landscape",
  },
  {
    id: 19,
    url: Img19,
    title: "Urban Landscape",
  },
  {
    id: 20,
    url: Img20,
    title: "Urban Landscape",
  },
  {
    id: 21,
    url: Img21,
    title: "Urban Landscape",
  },
  {
    id: 22,
    url: Img22,
    title: "Urban Landscape",
  },
  {
    id: 23,
    url: Img23,
    title: "Urban Landscape",
  },
  {
    id: 24,
    url: Img24,
    title: "Urban Landscape",
  },
  {
    id: 25,
    url: Img25,
    title: "Urban Landscape",
  },
  {
    id: 26,
    url: Img26,
    title: "Urban Landscape",
  },
  {
    id: 27,
    url: Img27,
    title: "Urban Landscape",
  },
  {
    id: 28,
    url: Img28,
    title: "Urban Landscape",
  },
  {
    id: 29,
    url: Img29,
    title: "Urban Landscape",
  },
  {
    id: 30,
    url: Img30,
    title: "Urban Landscape",
  },
  {
    id: 31,
    url: Img31,
    title: "Urban Landscape",
  },
  {
    id: 32,
    url: Img32,
    title: "Urban Landscape",
  },
  {
    id: 33,
    url: Img33,
    title: "Urban Landscape",
  },
  {
    id: 34,
    url: Img34,
    title: "Urban Landscape",
  },
  {
    id: 35,
    url: Img35,
    title: "Urban Landscape",
  },
  {
    id: 36,
    url: Img36,
    title: "Urban Landscape",
  },
  {
    id: 37,
    url: Img37,
    title: "Urban Landscape",
  },
  {
    id: 38,
    url: Img38,
    title: "Urban Landscape",
  },
  {
    id: 39,
    url: Img39,
    title: "Urban Landscape",
  },
  {
    id: 40,
    url: Img40,
    title: "Urban Landscape",
  },
  {
    id: 41,
    url: Img14,
    title: "Urban Landscape",
  },
];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(allImages.slice(0, 9));
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = nextPage * 9 - 9;
    const endIndex = nextPage * 9;

    const newImages = allImages.slice(startIndex, endIndex);

    if (newImages.length > 0) {
      setVisibleImages((prev) => [...prev, ...newImages]);
      setCurrentPage(nextPage);
    }
  };

  // Check if all images have been shown
  const allImagesShown = visibleImages.length >= allImages.length;

  return (
    <div className="bg-[#162841] ">
      {/* Banner Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={Banner}
            alt="Wedding Sevices"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative h-full flex items-center justify-center ">
          <h1 className="text-white text-6xl md:text-7xl font-serif italic">
            Wedding Gallery
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8">
        <div className="py-8 my-8">
          <h1 className="text-white text-4xl text-center font-bold">
            Our Beautiful Stories
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 p-4 pb-12">
          {visibleImages.map((image) => (
            <div
              key={image.id}
              className="relative group bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-72 sm:h-64 md:h-80 object-cover transition-opacity duration-300 group-hover:opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-300">
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold text-center px-2">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!allImagesShown && (
          <div className="text-center mt-8 pb-12">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Gallery;
