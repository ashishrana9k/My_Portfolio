import React from 'react'

export default function Navbar() {
  return (
    <>

      <div className='container'>
        <div className='pt-8 hidden lg:block mx-4 lg:mx-0'>
          <div className='flex justify-between items-center py-3 border border-[#393A3D] border-t-[2.5px] rounded-xl border-b-0 bg-[#17191C]  px-4'>
            <div>
              <h1 className='text-xl text-gray-300'>Portfolio</h1>
            </div>

            <div>
              <ul className='xl:flex gap-8 '>
                <li className="cursor-pointer  hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                  Home
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fb512c] transition-all duration-500 group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer  hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                  About
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fb512c] transition-all duration-500 group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer  hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                  Work
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fb512c] transition-all duration-500 group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer  hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                  Skills
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fb512c] transition-all duration-500 group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer  hover:text-gray-300 relative text-lg transition-all duration-300 ease-in-out group">
                  Contact
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#fb512c] transition-all duration-500 group-hover:w-full"></span>
                </li>
              </ul>
            </div>

            <div>
              <button className='button-bg px-3 text-white py-2 rounded-lg flex items-center gap-2 group'>
                <span>Let's talk</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-white rotate-[-45deg] group-hover:rotate-[0deg] trasition-transfer duration-150" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
