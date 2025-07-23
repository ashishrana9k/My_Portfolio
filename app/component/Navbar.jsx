import React from 'react'

export default function Navbar() {
  return (
    <>

      <div className='container'>
        <div className='pt-8'>
          <div className='flex justify-between items-center py-3 border border-[#393A3D] border-t-[2.5px] rounded-xl border-b-0 bg-[#17191C]  px-4'>
            <div>
              <h1 className='text-xl text-gray-300'>Portfolio</h1>
            </div>

            <div>
              <ul className='flex gap-8'>
                <li className='cursor-pointer text-gray-400 hover:text-gray-300 trasition-transfer duration-100 text-lg'>Home</li>
                <li className='cursor-pointer text-gray-400 hover:text-gray-300 trasition-transfer duration-100 text-lg'>About</li>
                <li className='cursor-pointer text-gray-400 hover:text-gray-300 trasition-transfer duration-100 text-lg'>Work</li>
                <li className='cursor-pointer text-gray-400 hover:text-gray-300 trasition-transfer duration-100 text-lg'>Skills</li>
                <li className='cursor-pointer text-gray-400 hover:text-gray-300 trasition-transfer duration-100 text-lg'>Contact</li>
              </ul>
            </div>

            <div>
              <button className='button-bg px-3 texrt-white py-2 rounded-lg flex items-center gap-2 group'>
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
