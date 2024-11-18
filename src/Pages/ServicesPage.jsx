import React from "react";
import Banner from "../Assest/Services/Banner.png";
import DecorativeLine from "../components/DecorativeLine";
import Img1 from "../Assest/Services/s1.png";
import Img2 from "../Assest/Services/s2.png";
import Img3 from "../Assest/Services/s3.png";
import Img4 from "../Assest/Services/s4.png";
import Img5 from "../Assest/Services/s5.png";
import Img6 from "../Assest/Services/s6.png";
import ContactForm from "../components/ContactForm";

const ServicesPage = () => {
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
          <h1 className="text-white text-6xl md:text-7xl font-serif italic">
            Our Sevices
          </h1>
        </div>
      </div>

      {/* Contant section */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="p-6">
          <h1 className="text-white text-center text-3xl font-serif italic my-6 ">
            Wedding Planning Services
          </h1>
          <p className="text-gray-400">
            cursus scelerisque orci Praesent non, Nam ex faucibus eget Lorem ac
            Nullam sodales. Lorem In placerat. non fringilla felis, ex ex
            volutpat amet, adipiscing Praesent laoreet Morbi Nunc dui. lobortis,
            In ex. tincidunt felis, placerat lorem. sodales. elit cursus nisi
            nec placerat eu dui Donec est. eget enim. turpis tincidunt Morbi Ut
            non. tempor ex Nam dui orci at varius fringilla ex eu scelerisque Ut
            viverra Cras nisi non volutpat facilisis elementum Donec porta
            sollicitudin. placerat lorem. non sapien tincidunt lacus quis
            hendrerit convallis. sit nisi Nam fringilla nulla, non facilisis
            faucibus luctus consectetur Cras ipsum sollicitudin. vel est. felis,
            non cursus elementum amet, turpis Nunc vitae odio lacus, elit nec
            non amet, lorem. tincidunt non, sed Vestibulum
          </p>
        </div>

        {/* Line  */}
        <DecorativeLine />

        {/* Decorate and Desing  */}
        <section className="text-white px-10">
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 ">
            <div className="w-full lg:w-1/2">
              <img
                src={Img1}
                alt="Decor and Design"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-white uppercase text-3xl font-bold mb-4">
                Decor and Design
              </h2>
              <p className="text-gray-300 leading-relaxed">
                cursus scelerisque orci Praesent non, Nam ex faucibus eget Lorem
                ac Nullam sodales. Lorem in placerat. non fringilla felis, ex
                volutpat amet, adipiscing Praesent lorem Morbi Nunc dui.
                lobortis, in ex. tincidunt felis, placerat lorem sodales. elit
                cursus nisi nec placerat eu dui Donec est. eget enim, turpis
                tincidunt Morbi Ut non, tempor ex Nam dui orci ultrices
                fringilla eu scelerisque Ut viverra Cras nisl non volutpat
                facilisis elementum Donec porta sollicitudin, placerat lorem.
                non sapien tincidunt lacus eget hendrerit convallis.
              </p>
            </div>
          </div>
        </section>

        {/* Line  */}
        <DecorativeLine />

        {/* Pre Wedding Celebrations  */}
        <section className="text-white px-10 py-5">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-32">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                PRE WEDDING CELEBRATONS
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Vestibulum maximus ipsum incidunt vehicula, odio vitae elit,
                fringilla luctus varius est. Id felis, lorem, ultrices orci
                faucibus dui dui, nulla, luctus venenatis Donec ac placerat
                ullamcorper ac nec ex tempor diam id ex odio Morbi vehicula.
                Iaculis est amet, porta Cras dignissim ex Donec diam orci
                libero, volutpat ex urna, placerat volutpat Donec ex max.
              </p>
              <p className="text-gray-300 leading-relaxed">
                consectetur nibh nibh nisl, volutpat libero, ipsum est orci Ut
                Nullam diam sapien non et eget malesuada Sed est. ullamcorper et
                varius Donec placerat ipsum maximus faucibus volutpat Lorem non
                efficitur. ac lorem et felis, dui risus sapien ac massa Praesent
                Praesent ipsum sollicitudin, tempus eu ipsum sollicitudin dui
                odio enim lacus lorem, purus dui cursus id eget non Vestibulum
                massa convallis.
              </p>
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-8 lg:ml-8">
              <img
                src={Img2}
                alt="Pre Wedding Celebrations"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </section>

        {/* Line  */}
        <DecorativeLine />

        {/* DESTINATION AND VENUE SELECTION  */}
        <section className="text-white px-10 py-5">
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 ">
            <div className="w-full lg:w-1/2">
              <img
                src={Img3}
                alt="Decor and Design"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-white uppercase text-3xl font-bold mb-4">
                DESTINATION AND VENUE SELECTION
              </h2>
              <p className="text-gray-300 leading-relaxed">
                cursus scelerisque orci Praesent non, Nam ex faucibus eget Lorem
                ac Nullam sodales. Lorem In placerat. non fringilla felis, ex ex
                volutpat amet, adipiscing Praesent laoreet Morbi Nunc dui.
                lobortis, In ex. tincidunt felis, placerat lorem. sodales. elit
                cursus nisi nec placerat eu dui Donec est. eget enim. turpis
                tincidunt Morbi Ut non. tempor ex Nam dui orci at varius
                fringilla ex eu scelerisque Ut viverra Cras nisi non volutpat
                facilisis elementum Donec porta sollicitudin. placerat lorem.
                non sapien tincidunt lacus quis hendrerit convallis. sit nisi
                Nam fringilla nulla, non facilisis faucibus luctus consectetur
                Cras ipsum sollicitudin. vel est. felis, non cursus elementum
                amet, turpis Nunc vitae odio lacus, elit nec non amet, lorem.
                tincidunt non, sed Vestibulum
              </p>
            </div>
          </div>
        </section>

        {/* Line  */}
        <DecorativeLine />

        {/* FOOD AND BEVERAGES  */}
        <section className="text-white px-10 py-5">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-32">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">FOOD AND BEVERAGES</h2>
              <p className="text-gray-300 leading-relaxed">
                cursus scelerisque orci Praesent non, Nam ex faucibus eget Lorem
                ac Nullam sodales. Lorem In placerat. non fringilla felis, ex ex
                volutpat amet, adipiscing Praesent laoreet Morbi Nunc dui.
                lobortis, In ex. tincidunt felis, placerat lorem. sodales. elit
                cursus nisi nec placerat eu dui Donec est. eget enim. turpis
                tincidunt Morbi Ut non. tempor ex Nam dui orci at varius
                fringilla ex eu scelerisque Ut viverra Cras nisi non volutpat
                facilisis elementum Donec porta sollicitudin. placerat lorem.
                non sapien tincidunt lacus quis hendrerit convallis. sit nisi
                Nam fringilla nulla, non facilisis faucibus luctus consectetur
                Cras ipsum sollicitudin. vel est. felis, non cursus elementum
                amet, turpis Nunc vitae odio lacus, elit nec non amet, lorem.
                tincidunt non, sed Vestibulum
              </p>
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-8 lg:ml-8">
              <img
                src={Img4}
                alt="Food and Beverages"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </section>

        {/* Line  */}
        <DecorativeLine />

        {/* ENTERTAINMENT  */}
        <section className="text-white px-10 py-5">
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 ">
            <div className="w-full lg:w-1/2">
              <img
                src={Img5}
                alt="Decor and Design"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-white uppercase text-3xl font-bold mb-4">
                ENTERTAINMENT
              </h2>
              <p className="text-gray-300 leading-relaxed">
                cursus scelerisque orci Praesent non, Nam ex faucibus eget Lorem
                ac Nullam sodales. Lorem In placerat. non fringilla felis, ex ex
                volutpat amet, adipiscing Praesent laoreet Morbi Nunc dui.
                lobortis, In ex. tincidunt felis, placerat lorem. sodales. elit
                cursus nisi nec placerat eu dui Donec est. eget enim. turpis
                tincidunt Morbi Ut non. tempor ex Nam dui orci at varius
                fringilla ex eu scelerisque Ut viverra Cras nisi non volutpat
                facilisis elementum Donec porta sollicitudin. placerat lorem.
                non sapien tincidunt lacus quis hendrerit convallis. sit nisi
                Nam fringilla nulla, non facilisis faucibus luctus consectetur
                Cras ipsum sollicitudin. vel est. felis, non cursus elementum
                amet, turpis Nunc vitae odio lacus, elit nec non amet, lorem.
                tincidunt non, sed Vestibulum
              </p>
            </div>
          </div>
        </section>

        {/* Line  */}
        <DecorativeLine />

        {/* OTHER WEDDING SERVICES  */}
        <section className="text-white px-10 lg:py-5">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-32">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                OTHER WEDDING SERVICES
              </h2>
              <p className="text-gray-300 leading-relaxed ">
                cursus scelerisque orci Praesent non, Nam ex faucibus eget Lorem
                ac Nullam sodales. Lorem In placerat. non fringilla felis, ex ex
                volutpat amet, adipiscing Praesent laoreet Morbi Nunc dui.
                lobortis, In ex. tincidunt felis, placerat lorem. sodales. elit
                cursus nisi nec placerat eu dui Donec est. eget enim. turpis
                tincidunt Morbi Ut non. tempor ex Nam dui orci at varius
                fringilla ex eu scelerisque Ut viverra Cras nisi non volutpat
                facilisis elementum Donec porta sollicitudin. placerat lorem.
                non sapien tincidunt lacus quis hendrerit convallis. sit nisi
                Nam fringilla nulla, non facilisis faucibus luctus consectetur
                Cras ipsum sollicitudin. vel est. felis, non cursus elementum
                amet, turpis Nunc vitae odio lacus, elit nec non amet, lorem.
                tincidunt non, sed Vestibulum
              </p>
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-8 lg:ml-8">
              <img
                src={Img6}
                alt="Other Wedding Services"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </section>

        {/* Line  */}
        <DecorativeLine />

        <ContactForm />

      </div>
    </div>
  );
};

export default ServicesPage;
