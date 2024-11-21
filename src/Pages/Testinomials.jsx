import React from "react";
import DecorativeLine from "../components/DecorativeLine";
import ScrollToTop from "../components/ScrollToTop";
import Popular from "../components/Popular";
import Banner from "../Assest/Testimonial/Banner.jpg";
import People1 from "../Assest/Testimonial/p1.png";
import People2 from "../Assest/Testimonial/p2.png";
import People3 from "../Assest/Testimonial/p3.png";
import People4 from "../Assest/Testimonial/p4.png";
import People5 from "../Assest/Testimonial/p5.png";
import People6 from "../Assest/Testimonial/p6.png";

const Testinomials = () => {
  const testimonials = [
    {
      image: People1,
      name: "John Doe",
      profession: "Working Professional",
      description:
        "Vitae placerat odio venenatis faucibus. Donec porta porta placerat scelerisque ex tortor.",
    },
    {
      image: People2,
      name: "Jane Smith",
      profession: "Working Professional",
      description:
        "Vitae placerat odio venenatis faucibus. Donec porta porta placerat scelerisque ex tortor.",
    },
    {
      image: People3,
      name: "John Doe",
      profession: "Working Professional",
      description:
        "Vitae placerat odio venenatis faucibus. Donec porta porta placerat scelerisque ex tortor.",
    },
    {
      image: People4,
      name: "Jane Smith",
      profession: "Working Professional",
      description:
        "Vitae placerat odio venenatis faucibus. Donec porta porta placerat scelerisque ex tortor.",
    },
    {
      image: People5,
      name: "John Doe",
      profession: "Working Professional",
      description:
        "Vitae placerat odio venenatis faucibus. Donec porta porta placerat scelerisque ex tortor.",
    },
    {
      image: People6,
      name: "Jane Smith",
      profession: "Working Professional",
      description:
        "Vitae placerat odio venenatis faucibus. Donec porta porta placerat scelerisque ex tortor.",
    },
  ];

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
          <h1 className="text-yellow-300 text-6xl md:text-7xl font-serif italic">
            Testinomials
          </h1>
        </div>
      </div>

      {/* Content Section  */}
      <div className="w-full max-w-6xl mx-auto ">
        <div className="text-white my-16 ">
          <p className="p-5">
            malesuada at vitae tempor tempor nibh Nullam nisl. sit non.
            fringilla viverra urna. Nam Quisque efficitur. elit cursus nec non.
            in est. adipiscing elit leo. Ut dolor nec laoreet Lorem efficitur.
            vitae quis ipsum vehicula, nisi Praesent in in ac eget dui nec non
            risus non, scelerisque Morbi felis, leo. amet, vehicula, nec luctus
            Donec Ut lacus, est. amet, placerat. ipsum non, In lorem. venenatis
            Nam elit convallis. Praesent dignissim, ex. ipsum varius dui est.
            risus orci efficitur. tincidunt elementum elit eu sollicitudin. Sed
            nisl. lobortis, leo. tincidunt nibh urna. sapien enim. est. sapien
            dolor dui lacus nec cursus odio vitae urna. non, elit. ullamcorper
            urna. facilisis sit en
          </p>
        </div>

        {/* Line  */}
        <DecorativeLine />

        {/* Card  */}
        <div className="min-h-screen p-10 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Line  */}
        <DecorativeLine />
    
        {/* Popular Wedding swiper  */}
        <Popular />

        {/* Line  */}
        <DecorativeLine />

        <ScrollToTop />
        
      </div>
    </div>
  );
};

export default Testinomials;

const TestimonialCard = ({ image, name, profession, description }) => {
  return (
    <div className="bg-slate-900 text-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-slate-800"
      />
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="italic mb-4">{profession}</p>
      <p className="text-center text-sm">{description}</p>
    </div>
  );
};
