import React from 'react';
import { Calendar, Clock, Users, Mail, Phone, MapPin} from 'lucide-react';
import NavBar from './NavBar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Popular from './Popular';

const WeddingPlanner = () => {
 

  const services = [
    { title: 'Full Planning', icon: Calendar, description: 'Comprehensive wedding planning from start to finish' },
    { title: 'Day-of Coordination', icon: Clock, description: 'Ensuring your big day runs smoothly' },
    { title: 'Vendor Management', icon: Users, description: 'Coordinating with all your wedding vendors' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Navigation */}
	  <NavBar />
      

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-center">
                <service.icon className="h-12 w-12 text-pink-500 mx-auto" />
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-pink-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative h-64 rounded-lg overflow-hidden group">
                <img 
                  src={`/api/placeholder/400/320`}
                  alt={`Wedding ${item}`}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View Wedding</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

	  <Popular  className="py-10" />

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-pink-500 mr-4" />
                <span className="text-gray-600">hello@dreamweddings.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-pink-500 mr-4" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-pink-500 mr-4" />
                <span className="text-gray-600">123 Wedding Street, Love City</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WeddingPlanner;
