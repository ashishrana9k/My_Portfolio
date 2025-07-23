import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiApachenetbeanside, SiFramer } from "react-icons/si";
// { label: "HTML/CSS", icon: (
//   <div className="flex items-center gap-1">
//     <FaHtml5 size={20} />
//     <FaCss3Alt size={20} />
//   </div>
// ) },

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


export default function About() {
  return (
    <>
      <div className='container'>
        <div className='space-y-24'>
          <div className='h-[70vh] flex items-center'>
            <div>
              <div className='text-center py-12'>
                <h2 className='text-5xl'>About me</h2>
              </div>

              <div className='grid grid-cols-[auto_70%] mt-12'>
                <div className="">
                  <img src="https://cbx-prod.b-cdn.net/COLOURBOX60951456.jpg?width=800&height=800&quality=70" className='h-100 rounded-4xl' alt="" />
                </div>
                <div className='flex items-center h-full'>
                  <div className='space-y-8'>
                    <h3 className='text-6xl'>Hi , There!</h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      I'm a Frontend Developer skilled in JavaScript, ReactJS, Next.js, Tailwind CSS, and Redux. I enjoy turning ideas into real, usable interfaces. My focus is on writing clean, responsive code that works well across devices and keeps users in mind.
                      <br /><br />
                      Whether it's creating smooth animations or solving layout challenges, I like building things that not only look good but perform well. I'm always learning and improving, aiming to grow as a developer every day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-[70%_auto] text-gray-300'>
            <div className='space-y-5 '>
              <h2 className='text-5xl'>My Carrer so far</h2>
              <p className="text-lg mb-8 leading-relaxed break-words max-w-185">
                I started my web development journey with a strong interest in how websites work. I’ve learned HTML, CSS, JavaScript, and built responsive interfaces using React, Next.js, and Tailwind CSS.
                Through live and practice projects,
                <br /><br />
                I’ve gained hands-on experience in creating clean, user-focused designs and real-world layouts.
                I'm now focused on building more advanced React apps and expanding into full-stack development.
              </p>

            </div>
            <div className="h-full flex items-center text-white">
              <div className="h-full flex items-center text-white">
                <div className="flex flex-wrap gap-4 my-6">
                  {Skills.map((item, index) => (
                    <div
                      key={index}
                      className="relative group bg-gray-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition duration-300 hover:bg-[#FB512C]
                         w-fit group-hover:w-48 overflow-hidden whitespace-nowrap" // Added width management classes
                    >
                      {item.icon && (
                        // Icon container: initially zero width and transparent, expands and fades in on hover
                        <span className="w-0 opacity-0 group-hover:w-8 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
                          {item.icon}
                        </span>
                      )}
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
