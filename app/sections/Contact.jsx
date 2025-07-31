'use client'

import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/sendmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await res.json();
        setResponseMessage(data.message); // Show response message below button
    };

    return (
        <div className='py-20' id='contact'>
            <div className="text-center pb-20 space-y-6">
                <h2 className="text-4xl xl:text-5xl text-[#22d3ee] font-bold">Contact</h2>
                <p className="mt-2">
                    Feel free to reach out for opportunities or questions.
                </p>
            </div>

            <div className="bg-[url('https://a-static.besthdwallpaper.com/gray-map-illustration-world-map-wallpaper-2880x1800-81653_8.jpg')] bg-cover bg-center relative px-4 xl:h-160 py-12 xl:p-0">
                <div className="absolute inset-0 bg-black/88 z-10" ></div>
                <div className="container relative z-20">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="flex flex-col justify-evenly xl:h-150">
                            <div className='space-y-2'>
                                <h2 className="text-3xl text-white font-bold">Let's have chat</h2>
                                <p className="text-white leading-relaxed max-w-150 mt-4">
                                    I'm actively seeking opportunities to join a team <br />
                                    where I can grow as a developer and contribute meaningfully.
                                    This portfolio highlights my skills, projects, and passion for building web experiences. <br /><br />
                                    If you're hiring or have a project in mind, feel free to get in touch — I'm excited to collaborate and bring value.
                                </p>
                            </div>
                            <button className="cursor-pointer relative overflow-hidden px-6 py-3 rounded-lg text-white font-medium bg-[#52cfe5] transition-colors duration-300 group max-w-30 mt-4 xl:m-0">
                                <a href="https://www.google.com/maps/place/Dharamshala,+Himachal+Pradesh" target="_blank" rel="noopener noreferrer">
                                    <span className="relative z-10">
                                        Visit
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline mx-2 fill-current text-white rotate-[-45deg] group-hover:rotate-0 transition-transform duration-150" viewBox="0 0 448 512">
                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                        </svg>
                                    </span>
                                    <span className="absolute top-0 left-0 w-full h-full -translate-x-full bg-[#2ea2b8] transition-all duration-500 ease-in-out group-hover:translate-x-0"></span>
                                </a>
                            </button>
                        </div>

                        <div className="xl:relative">
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6 bg-[#111214]/50 py-8 px-6 rounded-xl xl:absolute -top-14 right-0 max-w-xl w-full shadow-xl z-30"
                            >
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-md outline-none border border-[#393A3D] hover:border-gray-400 transition duration-150"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-md outline-none border border-[#393A3D] hover:border-gray-400 transition duration-150"
                                />
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-md outline-none border border-[#393A3D] hover:border-gray-400 transition duration-150"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-md outline-none border border-[#393A3D] hover:border-gray-400 transition duration-150 bg-transparent"
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Write a Message"
                                    rows={8}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full py-2 px-2 rounded-md outline-none border border-[#393A3D] hover:border-gray-400 transition duration-150"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="relative overflow-hidden px-6 py-3 rounded-lg text-white font-medium bg-[#52cfe5] transition-colors duration-300 group"
                                >
                                    <span className="relative z-10 px-6 py-4">
                                        Submit
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline mx-2 fill-current text-white rotate-[-45deg] group-hover:rotate-0 transition-transform duration-150" viewBox="0 0 448 512">
                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                        </svg>
                                    </span>
                                    <span className="absolute top-0 left-0 w-full h-full -translate-x-full bg-[#2ea2b8] transition-all duration-500 ease-in-out group-hover:translate-x-0"></span>
                                </button>

                                {responseMessage && (
                                    <p className="text-green-400 text-sm">{responseMessage}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
