import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaTelegram, FaFacebook, FaDiscord, FaInstagram } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

export default function ConsultationBanner() {
  return (
    <div
      className="relative flex flex-col md:flex-row h-screen  items-center justify-between p-8 bg-cover bg-center shadow-lg rounded-lg md:space-x-8 lg:space-x-16 overflow-hidden max-w-screen-xl mx-auto"
      style={{ backgroundImage: "url('/white-background.png')" }}
    >
     <div className="flex flex-col items-start pl-8 space-y-4 md:w-1/2 lg:w-3/5 z-10">
  <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
    We provide reliable solutions and support
  </h1>
  <p className="text-lg md:text-xl text-[#7D8D9A]">
    To manage your business <span className="text-[#0E3172]">data with precision</span>
  </p>

  {/* Buttons in a Row */}
  <div className="flex space-x-4">
    <button className="flex items-center md:px-6 md:py-3 p-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
      Get a Free Consultation 
    </button>
    <button className="flex items-center px-3 py-3 border border-black text-black rounded-full hover:bg-gray-800 hover:text-white transition duration-300">
      <MdArrowOutward className="text-2xl" />
    </button>
  </div>
</div>


      {/* Right Section */}
      <div className="relative md:w-1/2 lg:w-3/5 flex justify-center items-center">
        {/* Background circle with the Ellipse image */}
        <div
          className="absolute w-80 h-80 md:w-80 top-10 md:h-80 bg-cover bg-center rounded-full"
          style={{ backgroundImage: "url('Ellipse4.png')" }}
        ></div>

<img src="/Vector5.png" className="absolute  bottom-36" alt="" />
<img src="/Vector3.png" className="absolute left-4" alt="" />

<img src="/discord.png" className="absolute bottom-72 left-20" alt="" />
<img src="/discord.png" className="absolute left-10" alt="" />

        {/* Main Image */}
        <Image
          src="/man.png" // replace with the correct path to the main image
          alt="Person working on laptop"
          width={300}
          height={300}
          className="z-10 "
        />
<img src="/Vector3.png" className="absolute right-4 top-44 rotate-180" alt="" />
<img src="/discord.png" className="absolute right-10 w-20 h-20" alt="" />
<img src="/discord.png" className="absolute right-12 top-64 " alt="" />
<img src="/discord.png" className="absolute right-36 w-20 h-20 bottom-64 " alt="" />
        {/* Small Profile Group */}
        <div className="absolute bottom-5 left-4 bg-[#6493D4] p-2 rounded-lg shadow-lg flex flex-col items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">1K+ Creative People</span>
          <div className="flex items-center -space-x-2">
            <Image src="/Frame5.png" alt="Profile 1" width={30} height={30} className="rounded-full" />
            <Image src="/Frame5.png" alt="Profile 2" width={30} height={30} className="rounded-full" />
            <Image src="/Frame5.png" alt="Profile 3" width={30} height={30} className="rounded-full" />
            <Image src="/Frame5.png" alt="Profile 3" width={30} height={30} className="rounded-full" />
            <AiOutlinePlus  width={30} height={30} className="text-white bg-blue-800 w-7 h-7 border border-white rounded-full " />
          </div>
         
        </div>
      </div>
    </div>
  );
}
