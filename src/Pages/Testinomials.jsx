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
      name: "Niraj Singh",
      profession: "Developer",
      description:
        "From the very first meeting, the team understood our vision and brought it to life in a way we never imagined. Every detail was perfect, and they made the entire process stress-free. Our guests are still talking about how stunning everything was!",
    },
    {
      image: People2,
      name: "Prem Verma",
      profession: "Working Professional",
      description:
        "The pre-wedding celebrations, the decor, the food - everything was beyond our expectations. The planning team made us feel like royalty, and we couldn’t be happier with how our big day turned out. Truly unforgettable!",
    },
    {
      image: People3,
      name: "Rahul Modi",
      profession: "Working Professional",
      description:
        "We were blown away by the professionalism and creativity of the team. They managed every detail with precision and care, and the result was a wedding that felt uniquely ours. We’re so grateful for their dedication!",
    },
    {
      image: People4,
      name: "Kavita Singh",
      profession: "Working Professional",
      description:
        "Planning a destination wedding seemed overwhelming at first, but they made it effortless. From selecting the perfect venue to managing travel arrangements for our guests, they handled everything beautifully.",
    },
    {
      image: People5,
      name: "Swati Gaur",
      profession: "Working Professional",
      description:
        "Words cannot express how grateful we are to the team for making our wedding day so magical. Every detail was thoughtfully planned and executed. They listened to our ideas and elevated them beyond anything we could have imagined. Our friends and family were in awe!",
    },
    {
      image: People6,
      name: "Kajal Agrawal",
      profession: "Designer",
      description:
        "The team’s dedication and expertise made all the difference. From the initial planning to the final goodbye, they made us feel confident and cared for. The decor was breathtaking, the entertainment was incredible, and everything flowed seamlessly. They truly made our dream wedding a reality!",
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
          <p className="px-5 ">
            Welcome to our Testimonials Page, where we share the heartfelt
            experiences and stories of the couples and families we’ve had the
            honor of working with. This page is a celebration of the trust our
            clients place in us and the memorable moments we’ve helped create.
            Here, you’ll find inspiring stories of love, joy, and the magic of
            perfectly planned weddings. From breathtaking destination weddings
            to intimate ceremonies, each testimonial reflects the passion and
            dedication we bring to every event. Our clients’ words showcase not
            only their happiness but also our commitment to turning dreams into
            reality. Explore these stories to see how we’ve transformed visions
            into unforgettable celebrations. These testimonials are more than
            just reviews – they’re a testament to the relationships we build,
            the attention to detail we provide, and the smiles we leave behind.
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
