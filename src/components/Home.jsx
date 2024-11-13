import React from "react";
import Shoes from "../Assest/Home/Shoes.png";
import Recent1 from "../Assest/Home/IMG_1_Recent.png";
import Recent2 from "../Assest/Home/IMG_2_Recent.png";
import Recent3 from "../Assest/Home/IMG_3_Recent.png";
import DecorativeLine from "./DecorativeLine";
import { ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";
import HeroSection from "./HeroSection";

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
      text: "nibh at Lorem eget lorem. dignissim, diam dignissim, varius Nam dolor ultrices sapien",
      author: "-HJGHV",
    },
    {
      id: 2,
      text: "nibh at Lorem eget lorem. dignissim, diam dignissim, varius Nam dolor ultrices sapien",
      author: "-HJGHV",
    },
    {
      id: 3,
      text: "nibh at Lorem eget lorem. dignissim, diam dignissim, varius Nam dolor ultrices sapien",
      author: "-HJGHV",
    },
    {
      id: 4,
      text: "nibh at Lorem eget lorem. dignissim, diam dignissim, varius Nam dolor ultrices sapien",
      author: "-HJGHV",
    },
    {
      id: 5,
      text: "nibh at Lorem eget lorem. dignissim, diam dignissim, varius Nam dolor ultrices sapien",
      author: "-HJGHV",
    },
  ];

  const services = [
    {
      id: 1,
      title: "SERVICES1",
      description:
        "ultrices lacus, nec facilisis risus dui ipsum sit in tincidunt tincidunt urna facilisis Donec amet, ex orci Praesent dignissim, lacus ac non. efficitur. Ut ex Ut viverra scelerisque Nullam id nisl. non. nec nisl. non, Ut vitae lobortis.",
    },
    {
      id: 2,
      title: "SERVICES 2",
      description:
        "ultrices lacus, nec facilisis risus dui ipsum sit in tincidunt tincidunt urna facilisis Donec amet, ex orci Praesent dignissim, lacus ac non. efficitur. Ut ex Ut viverra scelerisque Nullam id nisl. non. nec nisl. non, Ut vitae lobortis.",
    },
    {
      id: 3,
      title: "SERVICES 3",
      description:
        "ultrices lacus, nec facilisis risus dui ipsum sit in tincidunt tincidunt urna facilisis Donec amet, ex orci Praesent dignissim, lacus ac non. efficitur. Ut ex Ut viverra scelerisque Nullam id nisl. non. nec nisl. non, Ut vitae lobortis.",
    },
    {
      id: 4,
      title: "SERVICES 4",
      description:
        "ultrices lacus, nec facilisis risus dui ipsum sit in tincidunt tincidunt urna facilisis Donec amet, ex orci Praesent dignissim, lacus ac non. efficitur. Ut ex Ut viverra scelerisque Nullam id nisl. non. nec nisl. non, Ut vitae lobortis.",
    },
    {
      id: 5,
      title: "SERVICES 5",
      description:
        "ultrices lacus, nec facilisis risus dui ipsum sit in tincidunt tincidunt urna facilisis Donec amet, ex orci Praesent dignissim, lacus ac non. efficitur. Ut ex Ut viverra scelerisque Nullam id nisl. non. nec nisl. non, Ut vitae lobortis.",
    },
    {
      id: 6,
      title: "SERVICES 6",
      description:
        "ultrices lacus, nec facilisis risus dui ipsum sit in tincidunt tincidunt urna facilisis Donec amet, ex orci Praesent dignissim, lacus ac non. efficitur. Ut ex Ut viverra scelerisque Nullam id nisl. non. nec nisl. non, Ut vitae lobortis.",
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
            <div className="flex justify-center gap-8">
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
              <a
                href="#a"
                className="text-white underline uppercase hover:text-gray-300 transition-colors duration-300"
              >
                View More...
              </a>
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
                <a
                  href="#more"
                  className="text-white text-sm tracking-wider underline hover:text-gray-300 transition-colors"
                >
                  MORE..
                </a>
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
                    cursus volutpat varius id libero, faucibus non, placerat
                    nisl, sollicitudin dui Vestibulum vel Sed amet, nec elit at
                    quis id lacus nec gravida elit quis dolor Vestibulum commodo
                    cursus ex viverra vitae In convallis.
                  </p>
                  <p>
                    ultrices lacus, nec facilisis risus dui ipsum sit In
                    tincidunt tincidunt urna facilisis Donec amet, ex orci
                    Praesent dignissim, lacus ac non, efficitur. Ut et Ut
                    viverra scelerisque Nullam id dui, non, nec nisi. non, Ut
                    vitae lobortis,
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
                      <button className="flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
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
        </div>

      </div>

    </div>
  );
};

export default Home;
