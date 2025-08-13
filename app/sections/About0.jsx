'use client'

import { SiTailwindcss } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { Calendar } from "lucide-react";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function About0() {

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
        <div id='about'>
            <ScrollFadeIn delay={0.2}>
                <div className=" container mx-auto px-4 py-8 xl:py-20 " >
                    <ScrollFadeIn delay={0.2}>
                        <div className="xl:py-8 text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl  font-bold text-[#22d3ee]">About Me</h2>
                        </div>
                    </ScrollFadeIn>
                    <div className="py-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0  md:gap-12">
                            <div>
                                <h2 className="text-2xl font-light text-gray-300 mb-8 text-center md:text-left">Education</h2>
                                <div className="space-y-6">

                                    <ScrollFadeIn delay={0.2}>
                                        <div className="shadowx-hover border border-[#393A3D] p-6 rounded-lg">
                                            <div className="flex items-center text-gray-400 text-sm mb-3">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                2024 – 2025
                                            </div>
                                            <h3 className="text-lg font-medium mb-3">
                                                Frontend Learning Journey
                                            </h3>
                                            <p className=" mb-4">
                                                I started learning frontend development through platforms like Codex, YouTube, and official documentation. I focused on building real projects using HTML, CSS, JavaScript, and React.js. These resources helped me understand responsive design, component-based development, and UI/UX fundamentals.
                                            </p>
                                            <p className="text-gray-400 ">Self-Learning from Online Resources</p>
                                        </div>
                                    </ScrollFadeIn>
                                    <ScrollFadeIn delay={0.2}>
                                        <div className="shadowx-hover border border-[#393A3D] p-6 rounded-lg">
                                            <div className="flex items-center text-gray-400 text-sm mb-3">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                2019 – 2022
                                            </div>
                                            <h3 className=" text-lg font-medium mb-3">
                                                Bachelor of Arts
                                            </h3>
                                            <p className=" text-sm mb-4">
                                                Studied History, Political Science, and English. Developed strong academic and research skills during undergraduate studies.
                                            </p>
                                            <p className="text-gray-500 text-sm">Govt. College Shahpur (HPU)</p>
                                        </div>
                                    </ScrollFadeIn>


                                    <ScrollFadeIn delay={0.2}>
                                        <div className=" p-6 rounded-lg shadowx-hover border border-[#393A3D]">
                                            <div className="flex items-center text-gray-400 text-sm mb-3">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                2015 – 2017
                                            </div>
                                            <h3 className="text-lg font-medium mb-3">
                                                Senior Secondary Education (12th)
                                            </h3>
                                            <p className="mb-4">
                                                Completed 12th with a focus on Arts subjects, building a foundation in history, political science, and language.
                                            </p>
                                            <p className="text-gray-500 text-sm">HP Board of School Education</p>
                                        </div>
                                    </ScrollFadeIn>


                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-light md:text-left text-center mt-12 mb-8 md:mt-0">Skills</h2>
                                <div className="space-y-6">
                                    <ScrollFadeIn delay={0.2}>
                                        <div className="shadowx-hover border border-[#393A3D] p-6 rounded-lg">
                                            <h3 className=" text-lg font-medium mb-3">Front-End Skills</h3>
                                            <p className=" mb-4">
                                                I have completed an IT course focused on frontend development. During this, I learned HTML, CSS, and JavaScript, and gained practical experience with React.js to build modern, responsive user interfaces. I also worked with Tailwind CSS for fast UI styling and Git/GitHub for version control. This course helped me build a strong foundation in frontend web development.
                                            </p>
                                            <p className="text-gray-500 text-sm mb-4">Completed in 2024</p>
                                            <div className="flex flex-wrap gap-4 mt-4">
                                                {[
                                                    { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-5 h-5" /> },
                                                    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-5 h-5" /> },
                                                    { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-5 h-5" /> },
                                                    { name: "React", icon: <FaReact className="text-cyan-400 w-5 h-5" /> },
                                                    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 w-5 h-5" /> },
                                                    { name: "GitHub", icon: <FaGithub className="text-gray-300 w-5 h-5" /> },
                                                ].map((skill, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="group relative px-4 py-2 bg-gray-700  rounded-full cursor-pointer transition duration-300 hover:bg-gray-600 flex items-center gap-2"
                                                    >
                                                        {skill.icon}
                                                        <span>{skill.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </ScrollFadeIn>
                                    <ScrollFadeIn delay={0.2}>
                                        <div className="shadowx-hover border border-[#393A3D] p-6 rounded-lg">
                                            <div className="flex items-center text-gray-400 text-sm mb-3">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                2024 – Present
                                            </div>
                                            <h3 className=" text-lg font-medium mb-3">
                                                Learning Backend Development
                                            </h3>
                                            <p className=" mb-4">
                                                Focusing on Node.js, Express.js, and MongoDB to build full-stack applications. Working with REST APIs and integrating backend with frontend.
                                            </p>
                                            <p className="text-gray-500 text-sm">Self-Paced Project-Based Learning</p>
                                        </div>
                                    </ScrollFadeIn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollFadeIn>
        </div>
    );
}
