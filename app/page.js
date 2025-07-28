import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./sections/Hero";
import Iconslider from "./sections/Iconslider";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./component/Footer";
import About0 from "./sections/About0";
import Slider from './component/Slider'

export default function Home() {
  return (
    <>
      <div className="bg-[url('https://tamalsen.dev/wp-content/uploads/2021/07/tamalsen-home-cover.jpg')] bg-cover bg-center h-[90vh] md:h-[110vh] xl:h-[110vh]  relative">
        <Navbar />
        <Hero />
        <div className="absolute left-[68.5%] md:left-[60%] md:top-[25%] top-[26%] xl:top-[23%]"><div className="sun-animation h-8 w-8 md:h-12 md:w-12 z-[-1] rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-[0_0_60px_rgba(255,165,0,0.7)] animate-pulse-sun"></div>
        </div>
      </div>
      <About0/>
      <Iconslider />
      {/* <Education /> */}
      {/* <Projects /> */}
      <Slider/>
      <Contact />
      <Footer />
    </>
  );
}
