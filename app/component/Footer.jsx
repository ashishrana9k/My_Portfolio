'use client'
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


export default function Footer() {

    const year = new Date().getFullYear()

    return (
        <footer className=" container ">
            <div className=" md:text-left mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-5  gap-8 pb-12 text-center md:text-left">
                    <div className=" space-y-4 md:col-span-2 border-r border-[#393A3D] ">
                        <div className="flex items-center space-x-2">
                            <span className="text-4xl font-semibold">Portfolio</span>
                        </div>
                        <ul className=" text-lg space-y-2 text-">
                            <li className="flex items-center space-x-2">
                                <IoIosMail className="text-2xl" />
                                <span>ashishrana30012000@gmail.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <IoCall />
                                <span>+91 7591 08 6487</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <IoLocation />
                                <span>Dharamshala, Himachal Pradesh, India</span>
                            </li>
                        </ul>
                        <div className="">
                            <ul className="flex justify-center md:justify-start text-4xl gap-4 pt-5">
                                <li className="border border-[#393A3D] rounded-full">
                                    <a href="https://www.linkedin.com/in/ashish-rana-3b164228a/" target="_black">
                                        <CiLinkedin className="cursor-pointer  hover:text-white  shadowx-hover bg-[#393A3D] text-5xl  p-2 rounded-full" />
                                    </a>
                                </li>
                                <li className="border border-[#393A3D] rounded-full">
                                    <a href="https://github.com/ashishrana9k">
                                        <FaGithub className="cursor-pointer  hover:text-white shadowx-hover bg-[#393A3D] border border-[#393A3D]  text-5xl  p-2 rounded-full" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-2xl mb-6">Pages</h3>
                        <ul className=' text-sm space-y-2 text-base text-[#ededed]'>
                            <li className="cursor-pointer hover:text-gray-300 relative text-base ">
                                <a href="">  Home</a>
                            </li>
                            <li className="cursor-pointer hover:text-gray-300 relative text-base ">
                                <a href="#about">About</a>
                            </li>
                            <li className="cursor-pointer hover:text-gray-300 relative text-base ">
                                <a href="#projects">Work</a>
                            </li>
                            <li className="cursor-pointer hover:text-gray-300 relative text-base ">
                                <a href="#about">Skills</a>
                            </li>
                            <li className="cursor-pointer hover:text-gray-300 relative text-base ">
                                Contact
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl mb-6">Our Services</h3>
                        <ul className="text-sm space-y-2 text-base text-[#ededed]">
                            <li className="cursor-pointer hover:text-gray-300 relative text-base "><a href="#" className="hover:underline">Figma UI System</a></li>
                            <li className="cursor-pointer hover:text-gray-300 relative text-base "><a href="#" className="hover:underline">Icons Assets</a></li>
                            <li className="cursor-pointer hover:text-gray-300 relative text-base "><a href="#" className="hover:underline">Responsive Blocks</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl mb-6">Resources</h3>
                        <ul className=" text-sm space-y-2">
                            <li className="cursor-pointer hover:text-gray-300 relative text-base ">
                                <a href="#" className="hover:underline">FAQs</a>
                            </li>
                            <li className="cursor-pointer hover:text-gray-300 relative text-base ">
                                <a href="#" className="hover:underline">Quick Start</a>
                            </li>
                            <li className="cursor-pointer hover:text-gray-300 relative text-base ">
                                <a href="#" className="hover:underline">Documentation</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-[#393A3D]  py-6 text-center text-md text-gray-500">
                    ©Ashishrana{year}, All rights reserved.
                </div>
            </div>
        </footer>
    );
}
