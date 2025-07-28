'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaGithub, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiApachenetbeanside, SiFramer } from "react-icons/si";

// ScrollFadeIn component (you can reuse this from About.jsx)
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

export default function Iconsliderheader() {
  const repeatedSkills = [...skills, ...skills];

  return (
    <ScrollFadeIn delay={0.2}>
      <div className='xl:h-32 h- flex items-center mt-8 md:mt-12'>
        <div className="relative overflow-hidden  border-y-[0.1px] border-[#393A3D] text-white py-3">
          <div>
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
                  className="xl:px-4 text-2xl font-medium flex items-center gap-4 transition-transform">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </ScrollFadeIn>
  );
}
