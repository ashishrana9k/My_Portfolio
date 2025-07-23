'use client'
import React from 'react'
// import video from './Dashboard.mp4'

export default function Projects() {
    return (
        <>
            <div className="container pb-32">
                <div className='text-center pb-12'>
                    <h2 className='text-5xl'>Projects</h2>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className="rounded p-4 border border-[#393A3D] rounded-lg">
                        <div className='space-y-6'>
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-40 object-cover cursor-pointer rounded-lg">
                                <source src="/Dashboard.mp4" type="video/mp4" />
                            </video>
                            <p className='text text-base leading-relaxed px-3   '>This project is built with Next.js, Tailwind CSS, and TypeScript, focused on desktop view only. It uses @mui/material for consistent UI components and clean design. Tailwind makes styling efficient, while TypeScript adds type safety.</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="rounded p-4 border border-[#393A3D] rounded-lg">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-40 object-cover cursor-pointer rounded-lg"
                            >
                                <source src="/video2.mp4" type="video/mp4" />

                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
