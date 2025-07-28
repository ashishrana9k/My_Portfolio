"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Iconsliderheader from '../component/Iconsliderheader';

export default function Hero() {
  const ScrollFadeIn = ({ children, delay = 0 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 0 });
      }
    }, [inView, controls]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 0 }}
        animate={controls}
        transition={{ duration: 0.8, delay }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="mx-auto lg:px-8">
      <div className="flex justify-center items-center text-center">
       <div className="w-full space-y-8 md:space-y-12   mt-">    {/* banner text top padding */}

        <div className="container">
            <ScrollFadeIn delay={0.1}>
            <div className=" sm:mt-100 z-9 mt-70 ">
              <div className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-bold">
                <h1 className=''>ASHISH RANA</h1>
              </div>
              <p className="text-xl sm:text-3xl md:text-2xl px-2 mt-2">
                Software Engineer, Front end & Responsive Designs.
              </p>
            </div>
          </ScrollFadeIn>
        </div>


          <div className="">
            <Iconsliderheader />
          </div>

          {/* Buttons */}
        <div className="container">
            <ScrollFadeIn delay={0.2}>
            <div className="flex  justify-center items-center gap-6 ">
              <button className="relative overflow-hidden px-3 p-2 xl:px-6 xl:py-3 rounded-lg text-white font-medium bg-[#52cfe5] transition-colors duration-300 group">
                <span className="relative z-10 flex items-center justify-center">
                  Let's Talk
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline mx-2 fill-current text-white rotate-[-45deg] group-hover:rotate-[0deg] transition-transform duration-150" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </span>
                <span className="absolute top-0 left-0 w-full h-full -translate-x-full bg-[#2ea2b8] transition-all duration-500 ease-in-out group-hover:translate-x-0"></span>
              </button>

              <button className="relative overflow-hidden px-4 py-2 xl:px-6 xl:py-3 rounded-lg text-white font-medium border border-gray-700 hover:border-gray-500 text-gray-700 hover:text-gray-500 transition-colors duration-300 group">
                <span className="relative z-10">Resume</span>
                <span className="absolute top-0 left-0  h-full"></span>
              </button>
            </div>
          </ScrollFadeIn>
        </div>

        </div>
      </div>
    </div>
  );
}
