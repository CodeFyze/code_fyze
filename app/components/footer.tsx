"use client";

const Footer = () => {
  return (
    <section className="relative bg-gray-50 py-12 md:py-20 lg:py-28 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:max-w-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Ready to Transform Your Business <br />
            with <span className="text-blue-600">Expert IT Solutions?</span>
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            For a free consultation and let’s discuss how we can drive your
            business forward
          </p>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
              Contact Us
            </button>
            <button className="flex items-center border border-gray-900 px-6 py-3 rounded-md hover:bg-gray-100">
              <span className="mr-2">Learn More</span>
              <span className="inline-block transform rotate-45 text-lg">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full max-w-md lg:max-w-xl mt-8 lg:mt-0">
          <img
            src="/womanHolding.png" // Replace with your image path
            alt="Person with laptop"
            className="w-full rounded-lg shadow-lg"
          />
          {/* Small floating card 1 */}
          <div className="absolute top-8 left-[-10%] sm:left-0 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-sm text-gray-800 font-semibold">1,235</p>
            <p className="text-xs text-gray-500">Completed Projects</p>
          </div>
          {/* Small floating card 2 */}
          <div className="absolute bottom-8 right-[-10%] sm:right-0 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-sm text-gray-800 font-semibold">456+</p>
            <p className="text-xs text-gray-500">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 lg:mt-24 text-center lg:text-left">
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">CODE FYZE</h2>
              <p className="text-gray-500 mt-2">Empowering Your Business with Innovative IT Solutions</p>
            </div>
            <div className="mt-6 lg:mt-0 flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Service
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Portfolio
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Technologies
              </a>
            </div>
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            Copyright © CODE FYZE 2024
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
