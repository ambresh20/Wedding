import React from 'react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-3/4 bg-[#224C64] p-16 rounded-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl text-center mb-8 font-serif italic text-gray-100">
            Get in Touch
          </h2>

          <div className="space-y-4 ">
            <div>
              <label className="block text-gray-200 font-serif italic mb-2">
                First & Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-md bg-gray-200/20 border border-gray-400/30 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-100"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-serif italic mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-2 rounded-md bg-gray-200/20 border border-gray-400/30 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-100"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-serif italic mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-2 rounded-md bg-gray-200/20 border border-gray-400/30 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-100"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-serif italic mb-2">
                Wedding Event
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-md bg-gray-200/20 border border-gray-400/30 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-100"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-serif italic mb-2">
                How many guests are you anticipating?
              </label>
              <input
                type="number"
                className="w-full p-2 rounded-md bg-gray-200/20 border border-gray-400/30 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-100"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-32 mx-auto block px-6 py-2 bg-yellow-500 hover:bg-yellow-600 transition-colors rounded-md text-black font-medium "
          >
            Submit
          </button>
        </form>
      </div>

    </div>
  );
};

export default ContactForm;

