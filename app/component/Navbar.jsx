'use client'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Navbar() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}>
      <div className='bg-black/20'>
        <div className='container'>
          <div className='hidden xl:block mx-4 lg:mx-0'>
            <div className='flex justify-between items-center py-5 rounded-xl border-b-0 px-4 xl:px-0'>
              <div>
                <h1 className='text-4xl text-gray-300'>Portfolio</h1>
              </div>

              <div>
                <ul className='xl:flex gap-8'>
                  <li className="cursor-pointer hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                  <a href="">  Home</a>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fb512c] transition-all duration-500 group-hover:w-full"></span>
                  </li>
                  <li className="cursor-pointer hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                    <a href="/about">About</a>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fb512c] transition-all duration-500 group-hover:w-full"></span>
                  </li>
                  <li className="cursor-pointer hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                    <a href="#projects">Work</a>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fb512c] transition-all duration-500 group-hover:w-full"></span>
                  </li>
                  <li className="cursor-pointer hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                    Skills
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fb512c] transition-all duration-500 group-hover:w-full"></span>
                  </li>
                  <li className="cursor-pointer hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                    Contact
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fb512c] transition-all duration-500 group-hover:w-full"></span>
                  </li>
                </ul>
              </div>

              <div>
                <button className="relative overflow-hidden px-6 py-3 rounded-lg text-white font-medium bg-[#52cfe5] transition-colors duration-300 group">
                  <span className="relative z-10">
                    Let's Talk
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline mx-2 fill-current text-white rotate-[-45deg] group-hover:rotate-[0deg] transition-transform duration-150" viewBox="0 0 448 512">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </span>
                  <span className="absolute top-0 left-0 w-full h-full -translate-x-full bg-[#2ea2b8] transition-all duration-500 ease-in-out group-hover:translate-x-0"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
