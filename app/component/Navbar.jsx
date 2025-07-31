'use client'
import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiMenu5Fill } from "react-icons/ri";


export default function Navbar() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [inView, controls]);

  const [menu, setMenu] = useState(true);

  function handlemanu() {
    setMenu(prev => !prev);
  }

  const ScrollFadeIn = ({ children, delay = 0 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 50 });
      }
    }, [inView, controls]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, delay }}
      >
        {children}
      </motion.div>
    );
  };


  return (
    <div className='bg-black/20'>
      <div className='container'>
        <div className='hidden xl:block px-4 lg:mx-0'>
          <div className='flex justify-between items-center py-3 rounded-xl border-b-0 px-4 xl:px-0'>
            <div>
              <h1 className='text-4xl text-gray-300'>Portfolio</h1>
            </div>

            <div>
              <ul className='xl:flex gap-8'>
                <li className="cursor-pointer hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                  <a href="#home">Home</a>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#52cfe5] transition-all duration-500 group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                  <a href="#about">About</a>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#52cfe5] transition-all duration-500 group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                  <a href="#projects">Work</a>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#52cfe5] transition-all duration-500 group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                  <a href="#abouut">Skills</a>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#52cfe5] transition-all duration-500 group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                  <a href="#contact">Contact</a>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#52cfe5] transition-all duration-500 group-hover:w-full"></span>
                </li>
              </ul>
            </div>

            <div>
              <button className="cursor-pointer relative overflow-hidden px-5 py-3 rounded-lg text-white font-medium bg-[#52cfe5] transition-colors duration-300 group">
                <a href="#contact">
                  <span className="relative z-10">
                    Let's Chat
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline mx-2 fill-current text-white rotate-[-45deg] group-hover:rotate-[0deg] transition-transform duration-150" viewBox="0 0 448 512">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </span>
                </a>
                <span className="absolute top-0 left-0 w-full h-full -translate-x-full bg-[#2ea2b8] transition-all duration-500 ease-in-out group-hover:translate-x-0"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-black/20 py-3 flex justify-between items-center xl:hidden text-2xl px-4">
          <h2 className="text-white">Portfolio</h2>
          <div onClick={handlemanu}>
            {menu ? <RiMenu5Fill /> : <span className='text-xl'>&times;</span>}
          </div>
        </div>

        <div
          className={`xl:hidden absolute left-0 w-full bg-black/90 text-center text-white px-6 py-8 space-y-6 z-50 transition-all duration-300 ${menu ? 'hidden' : 'block'
            }`}
        >
          <a href="#home" className="block text-lg hover:text-[#52cfe5]">Home</a>
          <a href="#about" className="block text-lg hover:text-[#52cfe5]">About</a>
          <a href="#projects" className="block text-lg hover:text-[#52cfe5]">Work</a>
          <a href="#skills" className="block text-lg hover:text-[#52cfe5]">Skills</a>
          <a href="#contact" className="block text-lg hover:text-[#52cfe5]">Contact</a>
        </div>

      </div>
    </div>
  )
}
