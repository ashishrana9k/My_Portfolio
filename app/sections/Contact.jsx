import Image from "next/image"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Mail, Phone, ArrowRight } from "lucide-react"

export default function Contact() {
    return (
        <div className="container">
            <div className="w-full px-4">
                <div className="relative z-10 w-full shadowx-hover  rounded-3xl p-4 xl:p-8 md:p-12 shadow-lg border border-[#393A3D]">
                    <div className="text-center mb-10">
                        <div className="text-center space-y-2 mb-6">
                            <h2 className="text-3xl font-bold">Contact Me</h2>
                            <p className="text-gray-500 text-base">Feel free to reach out for collaborations, projects, or just to say hi!</p>
                        </div>
                    </div>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <input
                            type="text"
                            placeholder="Name *"
                            required
                            className="bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 p-4 rounded-lg focus:ring-2 focus:ring-[#ff6b00]"
                        />
                        <input
                            type="email"
                            required
                            placeholder="Email"
                            className="bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 p-4 rounded-lg focus:ring-2 focus:ring-[#ff6b00]"
                        />
                        <input
                            type="tel"
                            required
                            placeholder="Phone number *"
                            className="md:col-span-2 bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 p-4 rounded-lg focus:ring-2 focus:ring-[#ff6b00]"
                        />
                        <textarea
                            placeholder="Write message"
                            rows={5}
                            className="md:col-span-2 bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 p-4 rounded-lg focus:ring-2 focus:ring-[#ff6b00] resize-none"
                        />
                        <button
                            type="submit"
                            className="md:col-span-2 button-bg cursor-pointer  text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}
