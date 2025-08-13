import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./sections/Hero";
import Iconslider from "./sections/Iconslider";
// import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./component/Footer";
import About0 from "./sections/About0";
import Projects from "./sections/Projects";


export default function Home() {
  return (
    <>
      {/* <div className="bg-[url('https://tamalsen.dev/wp-content/uploads/2021/07/tamalsen-home-cover.jpg')] bg-cover bg-center h-[90vh] sm:h-[80vh] md:h-[120vh] xl:h-[120vh]  relative"> */}
      <div className="bg-[url('https://tamalsen.dev/wp-content/uploads/2021/07/tamalsen-home-cover.jpg')] bg-cover bg-center h-[95vh] md:h-[100vh] lg:h-[115vh] xl:h-[120vh] relative">
        <Navbar />
      <div className="absolute left-0 right-0 bottom-20">
          <Hero />
      </div>
        <div className="absolute left-[68.5%] md:left-[56%] md:top-[27%] top-[26%] xl:top-[25%]"><div className="sun-animation h-8 w-8 md:h-12 md:w-12 z-[-1] rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-[0_0_60px_rgba(255,165,0,0.7)] animate-pulse-sun"></div>
        </div>
      </div>
      <About0 />
      <Iconslider />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}


