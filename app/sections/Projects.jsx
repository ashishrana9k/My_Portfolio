'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState, useEffect, useRef } from 'react'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Scroll animation wrapper
const ScrollFadeIn = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    } else {
      controls.start({ opacity: 0, y: 50 })
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

// Main Projects component
export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const sliderTimer = useRef(null)

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 8,
        },
      },
      '(min-width: 768px)': {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
    },
    slides: {
      perView: 1,
      spacing: 8,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  useEffect(() => {
    if (!instanceRef.current) return

    sliderTimer.current = setInterval(() => {
      instanceRef.current.next()
    }, 4000) // 4 seconds per slide

    return () => clearInterval(sliderTimer.current)
  }, [instanceRef])

  return (
    <div className="container mx-auto px-4 py-8 xl:py-20" id="projects">
      <ScrollFadeIn delay={0.2}>
        <div className="text-center pb-12 space-y-6">
          <h2 className="text-4xl xl:text-5xl text-[#22d3ee] font-bold">Projects</h2>
          <p className="mt-2">
            Here are some of the projects I've built using React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </ScrollFadeIn>

      <div className="flex items-center gap-2">
        {loaded && instanceRef.current && (
          <button
            onClick={() => instanceRef.current?.prev()}
            className="transition-transform duration-200 text-white p-3 rounded-full shadow hidden md:block hover:bg-[#0e1826]"
          >
            <FaChevronLeft className="text-[#22d3ee]" />
          </button>
        )}

        <div ref={sliderRef} className="keen-slider flex-1">
          {[
            {
              video: "/Dashboard.mp4",
              title: "Admin Panel",
              link: "https://admin-panel-mu-olive.vercel.app/",
              description:
                "An interactive admin dashboard built with MUI, Next.js, and Tailwind CSS. only for the Desktop View",
            },
            {
              video: "/video2.mp4",
              title: "Web-site",
              link: "https://example.com/landing",
              description: "Built with HTML and Tailwind CSS, this responsive landing page emphasizes modern design and mobile-friendly layout.",

            },
            {
              video: "/Video3.mp4",
              title: "Portfolio",
              link: "https://example.com/portfolio",
              description:
                "Personal portfolio built with Next.js featuring projects, contact sections, and smooth animations using Framer Motion.",
            },
            {
              video: "/video4.mp4",
              title: "Live_News_API",
              link: "https://example.com/demo",
              description: "Live News Webpage built using API integration with dynamic routing and responsive layout.",
            }

          ].map((item, index) => (
            <div key={index} className="keen-slider__slide py-3 rounded-xl px-2 h-full ">
              <ScrollFadeIn delay={0.2}>
                <div className="w-full border border-[#393A3D] rounded-xl shadowx-hover bg-[#111214] transition-all duration-300 overflow-hidden " >

                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover cursor-pointer"
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="p-5 md:p-6 space-y-5">
                    <h3 className="text-lg font-semibold text-[#52cfe5] uppercase tracking-wide">
                      {item.title}
                    </h3>

                    <p className="text-white leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href={item.github} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <button className="relative w-full sm:w-auto flex items-center justify-center gap-2 overflow-hidden px-5 py-3 rounded-lg text-sm md:text-base font-semibold text-gray-300 border border-gray-700 hover:text-white hover:border-gray-500 transition-all duration-300 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.036c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.289-1.552 3.295-1.23 3.295-1.23.655 1.653.245 2.874.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.48 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.217.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="relative z-10">View Code</span>
                          <span className="absolute top-0 left-0 w-full h-full bg-gray-800 -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out"></span>
                        </button>
                      </a>

                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <button className="relative w-full sm:w-auto flex items-center justify-center gap-2 overflow-hidden px-5 py-3 rounded-lg text-sm md:text-base font-semibold text-white bg-[#52cfe5] hover:bg-[#3bb7d2] transition-colors duration-300 group">
                          <span className="relative z-10 flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24">
                              <path d="M10.59 13.41a1 1 0 0 1-1.42-1.42L13.17 8H10a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V8.83l-4.41 4.58z" />
                              <path d="M5 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a1 1 0 1 1 0 2H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h7a1 1 0 1 1 0 2H5z" />
                            </svg>
                            Live Demo
                          </span>
                          <span className="absolute top-0 left-0 w-full h-full -translate-x-full bg-[#2ea2b8] transition-all duration-500 ease-in-out group-hover:translate-x-0"></span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>

          ))}
        </div>

        {loaded && instanceRef.current && (
          <button
            onClick={() => instanceRef.current?.next()}
            className="text-white transition-transform p-3 duration-200 rounded-full shadow hidden md:block hover:bg-[#0e1826]"
          >
            <FaChevronRight className="text-[#22d3ee]" />
          </button>
        )}
      </div>

      {loaded && instanceRef.current && (
        <div className="flex justify-center mt-4 gap-2">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`md:w-3 md:h-3 w-2 h-2 transition-colors duration-300 rounded-xl ${currentSlide === idx ? 'bg-[#52cfe5]' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  )
}
