import Image from "next/image";
import ConsultationBanner from "./components/hero";
import AboutSection from "./components/about";
import Serivce from "./components/OurService";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
   <ConsultationBanner />
   <AboutSection />
   <Serivce />
   <FAQ/>
   <Footer />
    </div>

  );
}
