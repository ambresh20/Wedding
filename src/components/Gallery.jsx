import React, { useState } from "react";

const allImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
    title: "Sea under a man",
  },
  {
    id: 2,
    url: "https://plus.unsplash.com/premium_photo-1661938135446-9aae7262fed5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhJTIwcGxhY2V8ZW58MHx8MHx8fDA%3D",
    title: "Indian Temple",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1702309328928-a0f9afe3e9bb?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
    title: "Coconut Trees",
  },
  // Add more images here... (let's add more to demonstrate pagination)
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?w=1200&auto=format&fit=crop&q=60",
    title: "Ocean Sunset",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1702309328928-a0f9afe3e9bb?w=1200&auto=format&fit=crop&q=60",
    title: "Beach Landscape",
  },
  {
    id: 6,
    url: "https://plus.unsplash.com/premium_photo-1661938135446-9aae7262fed5?w=1200&auto=format&fit=crop&q=60",
    title: "Mountain View",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1702309328928-a0f9afe3e9bb?w=1200&auto=format&fit=crop&q=60",
    title: "Forest Path",
  },
  {
    id: 8,
    url: "https://plus.unsplash.com/premium_photo-1661938135446-9aae7262fed5?w=1200&auto=format&fit=crop&q=60",
    title: "City Skyline",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?w=1200&auto=format&fit=crop&q=60",
    title: "River Landscape",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1702309328928-a0f9afe3e9bb?w=1200&auto=format&fit=crop&q=60",
    title: "Desert Scene",
  },
  {
    id: 11,
    url: "https://plus.unsplash.com/premium_photo-1661938135446-9aae7262fed5?w=1200&auto=format&fit=crop&q=60",
    title: "Mountain Lake",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?w=1200&auto=format&fit=crop&q=60",
    title: "Sunset Beach",
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1702309328928-a0f9afe3e9bb?w=1200&auto=format&fit=crop&q=60",
    title: "Tropical Island",
  },
  {
    id: 14,
    url: "https://plus.unsplash.com/premium_photo-1661938135446-9aae7262fed5?w=1200&auto=format&fit=crop&q=60",
    title: "Urban Landscape",
  },
];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(allImages.slice(0, 10));
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = nextPage * 10 - 10;
    const endIndex = nextPage * 10;

    const newImages = allImages.slice(startIndex, endIndex);

    if (newImages.length > 0) {
      setVisibleImages((prev) => [...prev, ...newImages]);
      setCurrentPage(nextPage);
    }
  };

  // Check if all images have been shown
  const allImagesShown = visibleImages.length >= allImages.length;

  return (
    <div className="bg-[#162841] px-4 py-8">
      {/* Banner  */}
      <div>
        {/* implement is remaining  */}
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="p-3">
                <p className="text-gray-800 text-sm truncate">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {!allImagesShown && (
          <div className="text-center mt-8">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Gallery;
