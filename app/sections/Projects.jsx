'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"


const slidesData = [
    { video: "/Dashboard.mp4", title: "Admin Panel", link: "https://admin-panel-mu-olive.vercel.app/" },
    { video: "/video2.mp4", title: "Landing Page", link: "https://example.com/landing" },
    { video: "/Video3.mp4", title: "Portfolio", link: "https://example.com/portfolio" },
    { video: "/video4.mp4", title: "Demo", link: "https://example.com/demo" },
];
export default function Projects() {
    return (
        <>
            <div className="container">
                <div className='xl:pb-28 px-4 mt-8' id='projects'>
                    <div className='text-center pb-12 space-y-6'>
                        <h2 className='text-5xl'>Projects</h2>
                        <p className=" mt-2">
                            Here are some of the projects I've built using React, Next.js, and Tailwind CSS.</p>
                    </div>
                    <div className='grid xl:grid-cols-3 gap-6'>
                        <div className="rounded border border-[#393A3D] shadowx-hover rounded-xl">
                            <div className="space-y-6 rounded-xl transition-all duration-300">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full object-cover cursor-pointer rounded-xl object-fit transition-all duration-300">
                                    <source src="/Dashboard.mp4" type="video/mp4" />
                                </video>
                                <div className="px-3 py-6 space-y-6 transition-all duration-300">
                                    <div>
                                        <a href="https://admin-panel-mu-olive.vercel.app/">
                                            <button className="button-bg group px-3 text-white py-2 rounded-lg flex items-center gap-2 transition duration-150">
                                                <span>Admin Panel</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-4 h-4 fill-current text-white rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300"
                                                    viewBox="0 0 448 512">
                                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                </svg>
                                            </button>
                                        </a>
                                    </div>
                                    <p className="">
                                        This project is built with Next.js, Tailwind CSS, and TypeScript, focused on desktop view only. It uses @mui/material for consistent UI components and clean design. Tailwind makes styling efficient, while TypeScript adds type safety.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded border border-[#393A3D] rounded-xl">
                            <div className="space-y-6 shadowx-hover rounded-xl">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full object-cover cursor-pointer rounded-xl object-fit">
                                    <source src="/video2.mp4" type="video/mp4" />
                                </video>
                                <div className='px-3 py-6 space-y-6'>
                                    <div>
                                        <a href="https://admin-panel-mu-olive.vercel.app/">
                                            <button className='button-bg px-3 texrt-white py-2 rounded-lg flex items-center gap-2 group'>
                                                <span>Admin Panel</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-white rotate-[-45deg] group-hover:rotate-[0deg] trasition-transfer duration-150" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                                            </button>
                                        </a>
                                    </div>
                                    <p className=' '>This project is built with Next.js, Tailwind CSS, and TypeScript, focused on desktop view only. It uses @mui/material for consistent UI components and clean design. Tailwind makes styling efficient, while TypeScript adds type safety.</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded border border-[#393A3D] rounded-xl">
                            <div className="space-y-6 shadowx-hover rounded-xl">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full  object-cover cursor-pointer rounded-xl object-fit">
                                    <source src="/video3.mp4" type="video/mp4" />
                                </video>
                                <div className='px-3 py-6 space-y-6'>
                                    <div>
                                        <a href="https://admin-panel-mu-olive.vercel.app/">
                                            <button className='button-bg px-3 texrt-white py-2 rounded-lg flex items-center gap-2 group'>
                                                <span>Admin Panel</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-white rotate-[-45deg] group-hover:rotate-[0deg] trasition-transfer duration-150" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                                            </button>
                                        </a>
                                    </div>
                                    <p className=' '>This project is built with Next.js, Tailwind CSS, and TypeScript, focused on desktop view only. It uses @mui/material for consistent UI components and clean design. Tailwind makes styling efficient, while TypeScript adds type safety.</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded border border-[#393A3D] rounded-xl">
                            <div className="space-y-6 shadowx-hover rounded-xl">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full  object-cover cursor-pointer rounded-xl object-fit">
                                    <source src="/video4.mp4" type="video/mp4" />
                                </video>
                                <div className='px-3 py-6 space-y-6'>
                                    <div>
                                        <a href="https://admin-panel-mu-olive.vercel.app/">
                                            <button className='button-bg px-3 texrt-white py-2 rounded-lg flex items-center gap-2 group'>
                                                <span>Admin Panel</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-white rotate-[-45deg] group-hover:rotate-[0deg] trasition-transfer duration-150" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                                            </button>
                                        </a>
                                    </div>
                                    <p className=' '>This project is built with Next.js, Tailwind CSS, and TypeScript, focused on desktop view only. It uses @mui/material for consistent UI components and clean design. Tailwind makes styling efficient, while TypeScript adds type safety.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
