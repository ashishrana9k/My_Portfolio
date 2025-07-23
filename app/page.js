import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Iconslider from "./sections/Iconslider";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/backgroundImage.webp')] bg-cover bg-center h-[100vh]">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Iconslider/>
      <Projects/>
    </>
  );
}
