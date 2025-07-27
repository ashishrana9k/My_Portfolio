// components/Footer.jsx
"use client";

import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="container">
            <footer className=" text-white px-6 sm:px-12 py-12">
                <div className=" mx-auto flex flex-col md:flex-row justify-between gap-10">
                    <div className="max-w-lg">
                        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                            Build beautiful landing <br /> pages fast using <br />
                            Rareblocks Kit.
                        </h2>
                    </div>

                    <div className="space-y-6 text-sm">
                        <div className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-xl text-gray-400" />
                            <p className="text-gray-300">
                                Kangra, Himachal Pradesh <br /> India
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-xl text-gray-400" />
                            <p className="text-gray-300">support@rareblocks.xyz</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 my-10"></div>

                <div className=" flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
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
                    <p>© Copyright 2021, All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
}
