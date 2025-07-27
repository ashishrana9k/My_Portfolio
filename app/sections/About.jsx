'use client';
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiApachenetbeanside, SiFramer } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Skills = [
  { label: "ReactJS", icon: <RiReactjsLine size={30} /> },
  { label: "Next.js", icon: <SiNextdotjs size={30} /> },
  { label: "Tailwind CSS", icon: <SiTailwindcss size={30} /> },
  { label: "JavaScript", icon: <FaJs size={30} /> },
  { label: "Git/GitHub", icon: <FaGithub size={30} /> },
  { label: "Node.js", icon: <FaNodeJs size={30} /> },
  { label: "APIs", icon: <SiApachenetbeanside size={30} /> },
  { label: "Framer Motion", icon: <SiFramer size={30} /> },
];

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

export default function About() {
  return (
    <div className='container'>
      <div className='space-y-20 xl:space-y-24 px-4'>
        <ScrollFadeIn>
          <div className='text-center pt-12 xl:py-12'>
            <h2 className='text-2xl xl:text-5xl'>About me</h2>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.1}>
          <div className='grid lg:grid-cols-[auto_70%] mt-12'>
            <div className="mx-auto">
              <img
                src="https://cbx-prod.b-cdn.net/COLOURBOX60951456.jpg?width=800&height=800&quality=70"
                className='h-80 xl:h-100 rounded-4xl'
                alt=""
              />
            </div>
            <div className='flex items-center h-full text-center xl:text-left'>
              <div className='space-y-8'>
                <h3 className='text-2xl xl:text-6xl mt-8 xl:mt-0'>Hi, There!</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  I'm a Frontend Developer skilled in JavaScript, ReactJS, Next.js, Tailwind CSS, and Redux. I enjoy turning ideas into real, usable interfaces...
                  <br /><br />
                  Whether it's creating smooth animations or solving layout challenges...
                </p>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.2}>
          <div className='grid lg:grid-cols-[70%_auto] text-gray-300 text-center xl:text-left'>
            <div className='space-y-5'>
              <h2 className='text-2xl xl:text-6xl xl:mt-8'>My Career so far</h2>
              <p className="mb-8 leading-relaxed break-words lg:max-w-185">
                I started my web development journey with a strong interest in how websites work. I’ve learned HTML, CSS, JavaScript, and built responsive interfaces...
              </p>
            </div>
            <div className="h-full flex items-center text-white">
              <div className="flex flex-wrap gap-4 xl:my-6">
                {Skills.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative group bg-gray-700 text-white px-2 py-1 xl:px-4 xl:py-2 rounded-md flex items-center gap-2 transition duration-300 hover:bg-[#FB512C] w-fit group-hover:w-48 overflow-hidden whitespace-nowrap"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    {item.icon && (
                      <span className="w-0 opacity-0 group-hover:w-8 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
                        {item.icon}
                      </span>
                    )}
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
