import React from "react";
import Shoes from "../Assest/Home/Shoes.png";
import Recent1 from "../Assest/Home/IMG_1_Recent.png";
import Recent2 from "../Assest/Home/IMG_2_Recent.png";
import Recent3 from "../Assest/Home/IMG_3_Recent.png";
import DecorativeLine from "./DecorativeLine";
import { ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  const recentEvents = [
    {
      id: 1,
      title: "Traditional Mehndi Ceremony",
      image: Recent1,
      category: "Pre-Wedding",
    },
    {
      id: 2,
      title: "Bridal Photography",
      image: Recent2,
      category: "Photography",
    },
    {
      id: 3,
      title: "Garden Wedding Setup",
      image: Recent3,
      category: "Decoration",
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Best decision to get work done from her. The decoration was on point.. everything was so perfect",
      author: "- Anushka",
    },
    {
      id: 2,
      text: "Absolutely stunning! The decor is so elegant, a perfect blend of simplicity and beauty🎈✨",
      author: "- Sonam",
    },
    {
      id: 3,
      text: "Highly recommend. Amazing balloon decor we just loved it! Added a magical touch to our event.",
      author: "- Komal Saxena",
    },
    {
      id: 4,
      text: "Had an amazing experience with Vision event planner. the setup was very beautiful and everyone penny was worth it",
      author: "- Kajal Verma",
    },
    {
      id: 5,
      text: "Thnku vision event planner and Aakansha for this beautiful Vision🥰. Highly recommended.. keep it",
      author: "- Ayush Jha",
    },
    {
      id:6,
      text: "Thanku Vision Event to have this birthday setup 😍 Loved the behavior and calmness of.",
      author: "- Swati "
    }
  ];

  const services = [
    {
      id: 1,
      title: "Wedding planner",
      description:
        "We specialize in crafting breathtaking wedding decorations that transform your special day into an enchanting celebration of love and unity. With our meticulous attention to detail and personalized approach, we ensure that every aspect of your wedding decor reflects your unique style and vision.",
    },
    {
      id: 2,
      title: "Birthday Decoration",
      description:
        "our birthday decoration services are designed to turn your special day into a memorable and magical celebration, whether at home or any venue. Whether you’re planning a milestone birthday party, a sweet sixteen bash, or a themed extravaganza, we have the creativity and expertise to bring your vision to life.",
    },
    {
      id: 3,
      title: "Surprise Decoration ",
      description:
        "Our surprise party decoration services are designed to add an extra element of excitement and wonder to your special occasion. Whether you’re planning a surprise birthday bash, anniversary celebration, or any other event, we specialize in creating memorable moments that leave a lasting impression.",
    },
    {
      id: 4,
      title: "Balloon Decoration",
      description:
        "Our balloon decoration services add an element of whimsy and charm to any event, whether it’s a birthday celebration, corporate gathering, or grand opening. With our expertise in balloon artistry, we transform ordinary spaces into vibrant and captivating environments that leave a lasting impression.",
    },
    {
      id: 5,
      title: "Anniversary Decoration",
      description:
        "Celebrating the journey of love, Vision Event Planner offers bespoke anniversary decoration services in Delhi NCR to elevate your special day. From intimate gatherings to grand affairs, we curate enchanting atmospheres infused with romance and sophistication.",
    },
    {
      id: 6,
      title: "Festival Decoration",
      description:
        "Festive decorations play a vital role in enhancing the joy and spirit of celebrations like Diwali, New Year, Navratri, Janmashtami, and more. Whether it’s the radiant glow of diyas during Diwali or the vibrant colors of Navratri, each festival demands its unique decorative touch.",
    },
  ];

  return (
    <div>
      <HeroSection />

      <div className="bg-[#162841] text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Decorative Line */}
          <DecorativeLine />

          <div className="text-center mb-12 flex justify-between">
            <div className="my-8">
              {/* Tagline */}
              <h2 className="font-serif italic text-2xl md:text-3xl mb-4 text-start">
                We Don't Just Plan Events,
              </h2>
              <h2 className="font-serif italic text-2xl md:text-3xl mb-6 text-start">
                We Create Stories.
              </h2>

              {/* Subtitle */}
              <p className="text-gray-400 max-w-xl mx-auto mt-12 text-start">
                Crafting unforgettable moments and turning your special day into
                a beautiful story to remember.
              </p>
            </div>

            {/* Featured Image */}
            <div className="rounded-lg overflow-hidden mb-16">
              <img
                src={Shoes}
                alt="Wedding shoes"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Decorative Line */}
          <DecorativeLine />

          {/* Recent Events Section */}
          <div className="mb-8">
            <h3 className="text-center text-xl font-semibold mb-8 uppercase tracking-wider">
              Recent Events
            </h3>
          </div>

          <div className="bg-[#224C64] py-12 relative mx-auto rounded-2xl mb-8 ">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {recentEvents.map((event) => (
                <div key={event.id} className="p-4 rounded-lg">
                  <img
                    src={event.image}
                    alt={event.alt}
                    className="w-64 h-64 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link to="/recent" className="text-white underline uppercase hover:text-gray-300 transition-colors duration-300">
              View More...
              </Link>
            </div>
          </div>

          {/* Decorative Line */}
          <DecorativeLine />

          {/* Testimonial section  */}
          <section className="bg-[#161E29] py-10 mb-8">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-white text-3xl font-bold mb-6">
                TESTIMONIALS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-[#1B263B] p-4 rounded-lg text-left shadow-lg"
                  >
                    <div className="flex items-center space-x-5 mb-4">
                      <div className="bg-gray-500 w-5/12 h-14 rounded-lg"></div>
                      <div>
                        <p className="text-gray-300">{testimonial.text}</p>
                        <p className="text-white mt-3">{testimonial.author}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link to="/testinomial" className="text-white text-sm tracking-wider underline hover:text-gray-300 transition-colors">
                MORE..
                </Link>
              </div>
            </div>
          </section>

          {/* Decorative Line */}
          <DecorativeLine />

          {/* Services Sections  */}
          <section className="py-12 mb-8">
            <div className="min-h-screen px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-white text-4xl font-bold text-center mb-4">
                  SERVICES
                </h2>
                <div className="text-slate-300 text-center max-w-3xl mx-auto mb-16 space-y-4">
                  <p>
                  At Vision Event Planner, we believe every couple deserves a flawless and memorable wedding. Our dedicated team specializes in curating personalized wedding experiences, turning your dream day into reality.
                  </p>
                  <p>
                  Planning a wedding is one of the most exciting chapters of your life, and we are here to make it effortless and enjoyable. Our team of expert wedding planners is passionate about turning your ideas into a stunning reality, leaving you free to soak in every magical moment. Whether you envision a fairytale celebration or a modern, chic affair, we’re committed to making your special day a true reflection of your love story.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                  {services.map((service, index) => (
                    <div className="relative bg-[#224C64] p-8 rounded-lg flex flex-col h-full">
                      <div className="absolute -top-6 left-36 w-16 h-16 bg-slate-700 rounded-full" />
                      <h3 className="text-white text-center text-xl font-semibold mt-7 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-slate-300 mb-6 flex-grow">
                        {service.description}
                      </p>
                      <Link to="/service" className="flex items-center justify-center">
                      <button className="flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Decorative Line */}
          <DecorativeLine />

          {/* Contact Form  */}
          <ContactForm />

          <ScrollToTop />
        </div>

      </div>

    </div>
  );
};

export default Home;
