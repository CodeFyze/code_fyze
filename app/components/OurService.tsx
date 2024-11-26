"use client";
import Image from "next/image";

export default function Service() {
  return (
    <div className="bg-[#002D6B] px-6 py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg mb-8">
            We provide a full suite of IT services designed to help businesses.
          </p>
          {/* Service List */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">⚡ WEB Development Services</h3>
              <p className="text-sm">
                Frontend Development <br />
                Backend Development <br />
                Wordpress & Shopify
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📈 Digital Marketing</h3>
              <p className="text-sm">
                SEO <br />
                Social Media Management (SMM) <br />
                Social Media Marketing <br />
                Google Ads
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📱 App Development Services</h3>
              <p className="text-sm">Android & iOS App Development</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🎨 Graphic Design Services</h3>
              <p className="text-sm">
                UI/UX Design <br />
                Logo Design <br />
                Poster Design <br />
                Social Media Post Design
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Image Content */}
        <div className="md:w-1/2 relative flex justify-center">
          {/* Background Circles */}
          <div className="absolute bg-blue-900 rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] top-0 md:top-10 left-20"></div>
          {/* Green Circle with Border Image */}
          <div className="absolute top-20 md:-top-10 left-10">
            {/* Border Image */}
            <div className="absolute inset-0 -top-4 -right-4 w-[250px] h-[250px] md:w-[210px] md:h-[210px] bg-[url('/border.png')] bg-cover bg-no-repeat rounded-full z-20"></div>
            {/* Green Circle */}
            <div className="bg-green-600 rounded-full w-[200px] h-[200px] md:w-[200px] md:h-[200px] relative z-10"></div>
          </div>

          {/* Zigzag Line Image */}
          <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] -top-10 right-0 z-10">
            <div
              className="absolute top-10 right-10 inset-0 bg-[url('/Vector7.png')] "
              style={{
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          {/* Person Image */}
          <Image
            src="/pointingman.png"
            alt="Person pointing"
            width={300}
            height={400}
            className="relative right-10 z-20 object-contain"
          />

          {/* Social Media Icons */}
          <div className="absolute flex flex-col items-center space-y-6 top-[80px] md:top-[100px] right-[60px] md:right-[100px]">
            <Image
              src="/discord.png"
              alt="Meta"
              width={40}
              height={40}
              className="rounded-full"
            />
            <Image
              src="/discord.png"
              alt="WeChat"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="absolute flex flex-col items-center space-y-6 top-[200px] md:top-[240px] left-[60px] md:left-[100px]">
            <Image
              src="/discord.png"
              alt="LinkedIn"
              width={40}
              height={40}
              className="rounded-full"
            />
            <Image
              src="/discord.png"
              alt="WhatsApp"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="absolute bottom-[40px] md:bottom-[80px] left-[60px] md:left-[120px]">
            <Image
              src="/discord.png"
              alt="Telegram"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
