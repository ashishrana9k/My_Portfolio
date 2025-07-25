import Link from "next/link"
// import { button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Youtube, Rss } from "lucide-react"

export default function Footer() {
  return (
    <div className="flex flex-col min-h-[10vh] container text-gray-400">

      <main className="flex-1 flex flex-col items-center justify-center  text-center px-4 py-12  md:py-24 lg:py-28">
        <h1 className="text-5xl  lg:text-4xl tracking-tight text-gray-200 mb-8">
          ASHISH RANA
        </h1>
        <div className="flex space-x-4 mb-12">
          <button variant="ghost" size="icon" className="rounded-full bg-iconDarkGray  w-12 h-12">
            <Facebook className="w-6 h-6" aria-label="Facebook" />
          </button>
          <button variant="ghost" size="icon" className="rounded-full bg-iconDarkGray  w-12 h-12">
            <Twitter className="w-6 h-6" aria-label="Twitter" />
          </button>
          <button variant="ghost" size="icon" className="rounded-full bg-iconDarkGray  w-12 h-12">
            <Linkedin className="w-6 h-6" aria-label="LinkedIn" />
          </button>
          <button variant="ghost" size="icon" className="rounded-full bg-iconDarkGray  w-12 h-12">
            <Youtube className="w-6 h-6" aria-label="YouTube" />
          </button>
          <button variant="ghost" size="icon" className="rounded-full bg-iconDarkGray  w-12 h-12">
            <Rss className="w-6 h-6" aria-label="RSS Feed" />
          </button>
        </div>
        <ul className='xl:flex gap-8 '>
          <li className="cursor-pointer text-gray-400 hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-300 transition-all duration-500 group-hover:w-full"></span>
          </li>
          <span className="text-textLightGray">◆</span>
          <li className="cursor-pointer  hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
            About
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-300 transition-all duration-500 group-hover:w-full"></span>
          </li>          <span className="text-textLightGray">◆</span>
          <li className="cursor-pointer  hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
            Work
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-300 transition-all duration-500 group-hover:w-full"></span>
          </li>          <span className="text-textLightGray">◆</span>
          <li className="cursor-pointer  hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
            Skill
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-300 transition-all duration-500 group-hover:w-full"></span>
          </li>          <span className="text-textLightGray">◆</span>
          <li className="cursor-pointer  hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
            Contact
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-300 transition-all duration-500 group-hover:w-full"></span>
          </li>       
          </ul>
        <p className="mt-12 text-sm text-textLightGray">
          Portfolio<span className="text-portfolioYellow">M4</span>. Powered by{" "}
          <Link href="#" className="text-portfolioYellow hover:underline" prefetch={false}>
            Mobirise.com
          </Link>
        </p>
      </main>

      <footer className="flex flex-col md:flex-row items-center justify-between px-4 py-6 md:px-6 lg:px-8 bg-footerBgGray text-textLightGray text-sm">
        <p className="mb-4 md:mb-0">
          Powered by{" "}
          <Link href="#" className="hover:underline" prefetch={false}>
            Mobirise.com
          </Link>
        </p>
        <div className="flex space-x-4">
          <button
            variant="outline"
            size="icon"
            className="rounded-full border border-gray-400 text-gray-600 w-10 h-10 bg-transparent"
          >
            <Facebook className="w-5 h-5" aria-label="Facebook" />
          </button>
          <button
            variant="outline"
            size="icon"
            className="rounded-full border border-gray-400 text-gray-600 w-10 h-10 bg-transparent"
          >
            <Twitter className="w-5 h-5" aria-label="Twitter" />
          </button>
          <button
            variant="outline"
            size="icon"
            className="rounded-full border border-gray-400 text-gray-600 w-10 h-10 bg-transparent"
          >
            <Linkedin className="w-5 h-5" aria-label="LinkedIn" />
          </button>
        </div>
      </footer>
    </div>
  )
}
