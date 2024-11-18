import React from "react";
import Logo from "../Assest/Home/logo.png" ;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              src={Logo}
              alt="Logo"
              className="h-32 w-32 mx-auto sm:mx-0"
            />
            <p className="text-center sm:text-left">
              Transforming occasions into unforgettable moments. From weddings
              to surprise parties, we craft unforgettable moments with bespoke
              decorations tailored to your vision.
            </p>

            <div className="flex justify-center sm:justify-start space-x-4 mt-4">
              {/* whatsapp  */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="hover:text-green-500"
                rel="noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M16 1.536c-8.008 0-14.464 6.456-14.464 14.464 0 2.552.64 5.04 1.872 7.224l-1.872 6.8 6.984-1.832a14.37 14.37 0 0 0 7.48 2.008c8.008 0 14.464-6.456 14.464-14.464S24.008 1.536 16 1.536zm0 25.808a11.33 11.33 0 0 1-5.888-1.632l-.424-.256-4.4 1.152 1.168-4.288-.28-.44a11.292 11.292 0 0 1 9.824-17.224 11.328 11.328 0 0 1 11.328 11.328c0 6.256-5.072 11.328-11.328 11.328zm6.144-8.368c-.336-.168-1.984-.984-2.296-1.096-.312-.112-.528-.168-.744.168-.216.328-.864 1.096-1.056 1.32-.192.216-.392.24-.728.072-.336-.168-1.408-.528-2.68-1.68-.992-.88-1.664-1.96-1.856-2.296-.192-.336-.02-.52.144-.688.16-.16.336-.432.504-.656.168-.224.224-.384.336-.64.112-.256.056-.48-.024-.656-.08-.168-.744-1.8-1.016-2.464-.272-.656-.552-.576-.744-.576h-.632c-.216 0-.56.08-.856.384-.296.296-1.12 1.088-1.12 2.656 0 1.568 1.152 3.08 1.312 3.296.16.216 2.24 3.416 5.44 4.784.768.328 1.36.52 1.824.672.768.24 1.464.208 2.016.128.616-.096 1.984-.808 2.264-1.592.28-.784.28-1.456.2-1.592-.08-.136-.304-.216-.64-.384z" />
                </svg>
              </a>

              {/* twitter  */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6.004c-.83.37-1.73.62-2.67.73a4.705 4.705 0 0 0 2.06-2.59c-.88.52-1.85.9-2.88 1.1A4.697 4.697 0 0 0 16.11 4c-2.6 0-4.71 2.1-4.71 4.71 0 .37.04.73.12 1.07A13.33 13.33 0 0 1 2.29 4.7a4.67 4.67 0 0 0-.64 2.37c0 1.64.83 3.1 2.1 3.95a4.689 4.689 0 0 1-2.14-.59v.06c0 2.29 1.63 4.2 3.78 4.63a4.72 4.72 0 0 1-2.12.08 4.7 4.7 0 0 0 4.4 3.27 9.418 9.418 0 0 1-5.83 2.01c-.38 0-.76-.02-1.14-.07A13.263 13.263 0 0 0 7.29 21c8.63 0 13.34-7.15 13.34-13.34 0-.2 0-.41-.01-.61.91-.66 1.7-1.49 2.34-2.43z" />
                </svg>
              </a>

              {/* youtube  */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.5 6.5c-.28-1.06-1.1-1.89-2.16-2.16C19.53 4 12 4 12 4s-7.53 0-9.34.34C1.6 4.61.78 5.44.5 6.5.16 8.31.16 12 .16 12s0 3.69.34 5.5c.28 1.06 1.1 1.89 2.16 2.16 1.81.34 9.34.34 9.34.34s7.53 0 9.34-.34c1.06-.28 1.88-1.1 2.16-2.16.34-1.81.34-5.5.34-5.5s0-3.69-.34-5.5zM9.75 15.02v-6.04l5.21 3.02-5.21 3.02z" />
                </svg>
              </a>

              {/* intagram  */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-rose-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.16c3.16 0 3.56.01 4.81.07 1.17.05 1.97.24 2.43.4.6.24 1.04.53 1.5.99.46.46.75.89.99 1.5.16.46.34 1.26.4 2.43.06 1.25.07 1.65.07 4.81s-.01 3.56-.07 4.81c-.05 1.17-.24 1.97-.4 2.43a4.048 4.048 0 0 1-.99 1.5c-.46.46-.89.75-1.5.99-.46.16-1.26.34-2.43.4-1.25.06-1.65.07-4.81.07s-3.56-.01-4.81-.07c-1.17-.05-1.97-.24-2.43-.4a4.042 4.042 0 0 1-1.5-.99c-.46-.46-.75-.89-.99-1.5-.16-.46-.34-1.26-.4-2.43-.06-1.25-.07-1.65-.07-4.81s.01-3.56.07-4.81c.05-1.17.24-1.97.4-2.43a4.048 4.048 0 0 1 .99-1.5c.46-.46.89-.75 1.5-.99.46-.16 1.26-.34 2.43-.4 1.25-.06 1.65-.07 4.81-.07zm0 1.85c-3.12 0-3.5.01-4.73.06-1.02.05-1.57.22-1.94.36-.47.18-.81.39-1.17.75-.36.36-.57.7-.75 1.17-.14.37-.31.92-.36 1.94-.06 1.24-.06 1.62-.06 4.73s0 3.5.06 4.73c.05 1.02.22 1.57.36 1.94.18.47.39.81.75 1.17.36.36.7.57 1.17.75.37.14.92.31 1.94.36 1.24.06 1.62.06 4.73.06s3.5 0 4.73-.06c1.02-.05 1.57-.22 1.94-.36.47-.18.81-.39 1.17-.75.36-.36.57-.7.75-1.17.14-.37.31-.92.36-1.94.06-1.24.06-1.62.06-4.73s0-3.5-.06-4.73c-.05-1.02-.22-1.57-.36-1.94a2.867 2.867 0 0 0-.75-1.17 2.87 2.87 0 0 0-1.17-.75c-.37-.14-.92-.31-1.94-.36-1.24-.06-1.62-.06-4.73-.06zm0 4.42c2.49 0 4.51 2.02 4.51 4.51 0 2.49-2.02 4.51-4.51 4.51-2.49 0-4.51-2.02-4.51-4.51s2.02-4.51 4.51-4.51zm0 1.85a2.66 2.66 0 1 0 0 5.32 2.66 2.66 0 0 0 0-5.32zm4.9-3.33c0 .72-.58 1.3-1.3 1.3-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Our Services</h3>
            <ul className="mt-4 space-y-3">
            <li>
                <a href="#home" className="hover:text-emerald-600 ">
                Anniversary Decoration
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-emerald-600 ">
                Surprise Party Decoration
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-emerald-600 ">
                Birthday Decoration
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-emerald-600 ">
                Balloon Decoration
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-emerald-600 ">
                Wedding Decoration
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-emerald-600 ">
                Baby Shower Decoration
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-emerald-600 ">
                Proposal Decoration
                </a>
              </li>
              
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Locations</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#home" className="hover:text-emerald-600 ">
                  Delhi
                </a>
              </li>

              <li>
                <a href="#home" className="hover:text-emerald-600 ">
                  Gurugram
                </a>
              </li>

              <li>
                <a href="#home" className="hover:text-emerald-600 ">
                  Ghaziabad
                </a>
              </li>

              <li>
                <a href="#home" className="hover:text-emerald-600 ">
                  Faridabad
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-emerald-600 ">
                  Noida
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Useful Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#home" className="hover:text-emerald-600 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-emerald-600">
                  About
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-emerald-600">
                  Decorations
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-emerald-600">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-emerald-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-emerald-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          &copy; 2024 Dream Wedding. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
