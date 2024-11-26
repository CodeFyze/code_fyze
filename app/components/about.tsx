import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="bg-[#0E3172]">
      <div className="relative flex flex-col md:flex-row items-center justify-between px-6 text-white max-w-screen-xl mx-auto">
        <div className="relative md:w-1/2 lg:w-1/2 flex justify-start items-center">
          <Image
            src="/Vectorlogo.png"
            alt="Vector Logo"
            width={200}
            height={200}
            className="object-contain"
          />
          <div className="absolute left-20 text-left">
            <h2 className="text-2xl md:text-3xl font-bold">Innovation at Work</h2>
            <p className="text-sm md:text-lg">
              Innovative technology to transform your operations and drive growth.
            </p>
          </div>
        </div>
        <div className="relative z-10 ;md:pr-10 lg:pr-20 flex flex-row justify-start space-x-8">
          <div className="text-left">
            <p className="text-5xl font-bold">1500+</p>
            <p className="text-sm md:text-lg">Success Project</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold">500+</p>
            <p className="text-sm md:text-lg">Happy Client</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <section className="flex flex-col  md:flex-row items-center justify-between px-0 py-0 md:px-0 lg:w-full bg-white max-w-full mx-0 space-y-8 md:space-y-0 rounded-tr-[100px]">
          <div className="relative  p-10 md:w-1/2  lg:w-2/5 flex flex-col items-center">
            <Image
              src="/woman.png"
              alt="Woman working on laptop"
              width={500}
              height={500}
              className="w-full max-w-xs md:max-w-full"
            />
            <div className="absolute -top-14 -left-16 p-20">
              <img src="/Vector252.png" alt="" />
            </div>
            <div className="absolute left-8 bottom-36 bg-white">
              <Image
                src="/Frame65.png"
                alt="Chart"
                width={100}
                height={60}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute top-36 right-8">
              <Image
                src="/Frame64.png"
                alt="Chart"
                width={100}
                height={60}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="relative bottom-[400px] w-44 h-44 left-[250px] rotate-45 z-20">
              <img src="/Vector253.png" alt="" />
            </div>
          </div>
          <div className="md:w-[700px]  lg:max-w-3xl text-center md:text-left space-y-4 pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Us</h2>
            <p className="text-lg text-gray-600">
              At CODE FYZE, we believe in powering businesses with cutting-edge IT
              solutions that are as dynamic as the digital world we live in.
            </p>
            <p className="text-lg text-gray-600">
              Founded with a passion for technology and a commitment to excellence,
              CODE FYZE specializes in providing robust, customized IT services that
              help our clients streamline operations, enhance security, and drive growth.
            </p>
            <p className="text-lg text-gray-600">
              Our team is a diverse group of skilled professionals dedicated to
              understanding your unique needs and delivering solutions that exceed
              expectations.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
