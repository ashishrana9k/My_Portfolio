"use client"
import React from 'react';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center text-center h-[90vh] items-center">
        <div>
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740"
              className="w-24 h-24 rounded-full"
              alt="Profile"
            />
          </div>
          <div className="text-center space-y-5 mt-5">
            <h1 className="text-4xl font-bold">
              Hello, I'm Samantha Willian
              <motion.span
                className="inline-block  text-3xl"
                animate={{
                  rotate: [0, 20, -15, 20, -10, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.span>

            </h1>
            <p className='text-6xl leading-normal'>
              Develope  Smooth, <br />
              User-First Web Experiences.
            </p>

            {/* <p className="text-6xl leading-normal bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
              Develope Smooth, <br />
              User-First Web Experiences.
            </p> */}

          </div>

          <div className='flex justify-center gap-6 mt-8'>
            <button className='cursor-pointer button-bg px-3 texrt-white py-2 rounded-lg flex items-center gap-2 group'>
              <span>Let's talk</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-white rotate-[-45deg] group-hover:rotate-[0deg] trasition-transfer duration-150" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </button>

            <button className='cursor-pointer text-gray-600 hover:text-gray-400 trasition-transfer duration-200'>View Resume</button>
          </div>

        </div>
      </div>
    </div>  
  );
}
