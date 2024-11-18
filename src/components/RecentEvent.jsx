import React, { useState } from "react";
import Banner from "../Assest/RecentEvent/Banner2.png";
import CardImg from "../Assest/RecentEvent/cardImg1.png";
import Picture from "../Assest/RecentEvent/picture 1.png";
import DecorativeLine from "./DecorativeLine";
import ContactForm from "./ContactForm";
import ScrollToTop from "./ScrollToTop";

const RecentEvent = () => {
  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  const cards = [
    {
      title: "LOREM IPSUM 1",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: CardImg,
    },
    {
      title: "LOREM IPSUM 2",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: CardImg,
    },
    {
      title: "LOREM IPSUM 3",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: CardImg,
    },
    {
      title: "LOREM IPSUM 4",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: CardImg,
    },
    {
      title: "LOREM IPSUM 5",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: CardImg,
    },
    {
      title: "LOREM IPSUM 6",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: CardImg,
    },
    {
      title: "LOREM IPSUM 7",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: CardImg,
    },
    {
      title: "LOREM IPSUM 8",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "LOREM IPSUM 9",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: CardImg,
    },
    {
      title: "LOREM IPSUM 10",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "LOREM IPSUM 11",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: CardImg,
    },
    {
      title: "LOREM IPSUM 12",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "LOREM IPSUM 13",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: CardImg,
    },
    {
      title: "LOREM IPSUM 14",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "LOREM IPSUM 15",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: CardImg,
    },
    {
      title: "LOREM IPSUM 16",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "LOREM IPSUM 17",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: CardImg,
    },
    {
      title: "LOREM IPSUM 18",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "LOREM IPSUM 19",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: CardImg,
    },
    {
      title: "LOREM IPSUM 20",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "LOREM IPSUM 21",
      description: "Lorem ipsum dolor sit amet, consectetur",
      image: CardImg,
    },
  ].map((card, index) => ({
    ...card,
    id: index + 1, // Add unique id for each card
  }));

  // Calculate pagination values
  const totalCards = cards.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth'
    });
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // If total pages is less than max pages to show, display all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);

      if (currentPage > 3) {
        pageNumbers.push("...");
      }

      // Show current page and one page before and after
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(currentPage + 1, totalPages - 1);
        i++
      ) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push("...");
      }

      // Always show last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="bg-[#162841] pb-10">
      {/* Banner Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={Banner}
            alt="Wedding celebration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-white text-6xl md:text-7xl font-serif italic">
            Wedding Events
          </h1>
        </div>
      </div>

      {/* Card Section  */}
      <div className="min-h-screen flex flex-col items-center py-10">
        <div className="flex justify-end w-full max-w-6xl pr-4 text-white">
          <span>View All ({totalCards})</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 max-w-6xl">
          {currentCards.map((card) => (
            <div
              key={card.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-200 hover:scale-105"
            >
              <img
                src={card.image}
                alt="placeholder"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-white font-semibold">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-6 space-x-4 text-white">
          <button
            className="px-3 py-1 rounded-full bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {getPageNumbers().map((pageNum, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-full ${
                pageNum === currentPage
                  ? "bg-blue-600"
                  : pageNum === "..."
                  ? "bg-transparent cursor-default"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => {
                if (pageNum !== "...") {
                  handlePageChange(pageNum);
                }
              }}
              disabled={pageNum === "..."}
            >
              {pageNum}
            </button>
          ))}

          <button
            className="px-3 py-1 rounded-full bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>


      <div className="w-full max-w-6xl mx-auto">
        {/* Decorative Line  */}
        <DecorativeLine />

        <div className="flex flex-col md:flex-row justify-around bg-[#243346] p-12 my-12">
          <div>
            <img src={Picture} alt="picture9"  />
          </div>

          <div className="flex flex-col justify-around gap-8 items-center">
            <div className="text-white">
              Lorem ipsum dolor sit amet
            </div>
            <div>
              <a href="1" className="bg-yellow-400 rounded-3xl p-3 hover:bg-yellow-500 shadow-[4px_4px_0px_0px_rgba(255,_105,_180,_0.8)] ">PLAN A EVENT</a>
            </div>

          </div>
        </div>

        {/* Decorative Line  */}
        <DecorativeLine />

        {/* Contact Form  */}
        <ContactForm />

        <ScrollToTop />

      </div>

    </div>
  );
};

export default RecentEvent;



