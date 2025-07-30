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
          spacing: 15,
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

  // Autoplay logic
  useEffect(() => {
    if (!instanceRef.current) return

    sliderTimer.current = setInterval(() => {
      instanceRef.current.next()
    }, 4000) // 4 seconds per slide

    return () => clearInterval(sliderTimer.current)
  }, [instanceRef])

  return (
    <div className="container mx-auto px-4 py-8 xl:py-20">
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
                "An interactive admin dashboard built with MUI, Next.js, and Tailwind CSS.",
            },
            {
              video: "/video2.mp4",
              title: "Landing Page",
              link: "https://example.com/landing",
              description:
                "Responsive landing page showcasing modern design and conversion-focused layout.",
            },
            {
              video: "/Video3.mp4",
              title: "Portfolio",
              link: "https://example.com/portfolio",
              description:
                "Personal portfolio featuring projects and contact sections using Framer Motion.",
            },
            {
              video: "/video4.mp4",
              title: "Demo",
              link: "https://example.com/demo",
              description:
                "A functional demo app to demonstrate routing, API usage, and layout structure.",
            },
          ].map((item, index) => (
            <div key={index} className="keen-slider__slide  w-full">
              <ScrollFadeIn delay={0.2}>
                <div className="space-y-6 rounded-x transition-all duration-300 border border-[#393A3D] shadowx-hover p-2 rounded-xl space-y-5" id="projects">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover cursor-pointer rounded-t-xl transition-all duration-300"
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="px-3 py-6 space-y-4">
                    <p className="leading-relaxed mt-5 text-white">{item.description}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <button className="relative overflow-hidden px-5 py-2.5 rounded-lg text-white font-medium bg-[#52cfe5] transition-colors duration-300 group">
                        <span className="relative z-10">
                          {item.title}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 inline mx-2 fill-current text-white rotate-[-45deg] group-hover:rotate-[0deg] transition-transform duration-150"
                            viewBox="0 0 448 512"
                          >
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                          </svg>
                        </span>
                        <span className="absolute top-0 left-0 w-full h-full -translate-x-full bg-[#2ea2b8] transition-all duration-500 ease-in-out group-hover:translate-x-0"></span>
                      </button>
                    </a>
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
