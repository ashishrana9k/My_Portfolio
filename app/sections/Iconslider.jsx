'use client';

import { motion } from 'framer-motion';
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaGithub, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiApachenetbeanside, SiFramer } from "react-icons/si";

const skills = [
  { label: "ReactJS", icon: <RiReactjsLine size={30} /> },
  { label: "HTML5", icon: <FaHtml5 size={30} /> },
  { label: "CSS3", icon: <FaCss3Alt size={30} /> },
  { label: "JavaScript", icon: <FaJs size={30} /> },
  { label: "Tailwind", icon: <SiTailwindcss size={30} /> },
  { label: "Next.js", icon: <SiNextdotjs size={30} /> },
  { label: "GitHub", icon: <FaGithub size={30} /> },
  { label: "APIs", icon: <SiApachenetbeanside size={30} /> },
  { label: "Node.js", icon: <FaNodeJs size={30} /> },
  { label: "Framer Motion", icon: <SiFramer size={30} /> },
];

export default function Iconslider() {
  const repeatedSkills = [...skills, ...skills]; // repeat to make it scroll infinitely

  return (
   <div className='lg:h-96 h-64 flex items-center'>
     <div className="relative overflow-hidden border-y border-[#393A3D] text-white py-6 ">
      <div>
        <div className="absolute top-0 right-0 w-24 h-full z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-24 h-full z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 15,
            repeat: Infinity,
          }}
        >
          {repeatedSkills.map((item, i) => (
            <div
              key={i}
              className="px-4 text-2xl font-medium flex items-center gap-4 transition-transform"
            >
              <span className="">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
   </div>
  );
}
