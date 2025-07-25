import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Iconslider from "./sections/Iconslider";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/backgroundImage.webp')] bg-cover bg-center xl:h-[100vh]">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Iconslider />
      <Education />
      <Projects />

      <Contact />
      {/* <div className="w-full h-[400px] relative overflow-hidden"> */}
        {/* <div className="absolute inset-1 right-0 left-0 bg-[url('/footerimg.webp')] bg-cover bg-center filter invert brightness-200"></div> */}
        <Footer />
      {/* </div> */}


    </>
  );
}
