import Image from "next/image"
import ContactAnimation from "../component/ContactAnimation"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Mail, Phone, ArrowRight } from "lucide-react"

export default function Contact() {
    return (
        <div className="relative bg-[url('https://a-static.besthdwallpaper.com/gray-map-illustration-world-map-wallpaper-2880x1800-81653_8.jpg')] bg-cover bg-center md:py-20 px-4">
             <div className="absolute inset-0 bg-black/95 z-10"></div>
            <div className="container relative z-20 py-8">
                <div className="text-center pb-12 space-y-6">
                    <h2 className=" text-4xl xl:text-5xl text-[#22d3ee] font-bold">Get In Touch</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-32">
                    <div>
                        <ContactAnimation />
                    </div>
                    <div>
                        <h2 className="text-2xl font-light mb-8 text-gray-300 text-center md:text-left">Get In Touch</h2>
                        <form className="space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full py-2 px-2 rounded-xl text-sm outline-none placeholder-gray-400 bg-transparent text-white border border-[#393A3D] focus:bg-gray-700 focus:border-[#52cfe5] transition"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full py-2 px-2 rounded-xl text-    sm outline-none placeholder-gray-400 bg-transparent text-white border border-[#393A3D] focus:bg-gray-700 focus:border-[#52cfe5] transition"
                            />
                            <input
                                type="tel"
                                placeholder="Your Phone"
                                className="w-full py-2 px-2 rounded-xl text-sm outline-none placeholder-gray-400 bg-transparent text-white border border-[#393A3D] focus:bg-gray-700 focus:border-[#52cfe5] transition"
                            />
                            <textarea
                                placeholder="Write a Message"
                                rows={8}
                                className="w-full py-2 px-2 rounded-xl text-sm outline-none placeholder-gray-400 bg-transparent text-white border border-[#393A3D] focus:bg-gray-700 focus:border-[#52cfe5] transition"
                            />
                            <button
                                type="submit"
                                className="relative overflow-hidden px-6 py-3 rounded-lg text-white font-medium bg-[#52cfe5] transition-colors duration-300 group"
                            >
                                <span className="relative z-10">
                                    Submit
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline mx-2 fill-current text-white rotate-[-45deg] group-hover:rotate-0 transition-transform duration-150" viewBox="0 0 448 512">
                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                    </svg>
                                </span>
                                <span className="absolute top-0 left-0 w-full h-full -translate-x-full bg-[#2ea2b8] transition-all duration-500 ease-in-out group-hover:translate-x-0"></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


// used css in css file
// created file
// import this file only