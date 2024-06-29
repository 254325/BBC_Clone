import React from 'react'
import Sidebar from './Sidebar'
const SecondNavbar = () => {
  return (
      <div className='hidden bg-white lg:flex w-full h-[45px] border-b justify-center items-center'>
          <ul className='max-w-[600px] flex justify-center font-semibold text-[14px]'>
            <li className='py-[12px] px-[8px] hover:bg-[#e6e8ea]'><a href='#' className='text-black hover:text-gray-700'>Home</a></li>
            <li className='py-[12px] px-[8px] hover:bg-[#e6e8ea]'><a href='#' className='text-black hover:text-gray-700'>News</a></li>
            <li className='py-[12px] px-[8px] hover:bg-[#e6e8ea]'><a href='#' className='text-black hover:text-gray-700'>Sport</a></li>
            <li className='py-[12px] px-[8px] hover:bg-[#e6e8ea]'><a href='#' className='text-black hover:text-gray-700'>Business</a></li>
            <li className='py-[12px] px-[8px] hover:bg-[#e6e8ea]'><a href='#' className='text-black hover:text-gray-700'>Innovation</a></li>
            <li className='py-[12px] px-[8px] hover:bg-[#e6e8ea]'><a href='#' className='text-black hover:text-gray-700'>Culture</a></li>
            <li className='py-[12px] px-[8px] hover:bg-[#e6e8ea]'><a href='#' className='text-black hover:text-gray-700'>Travel</a></li>
            <li className='py-[12px] px-[8px] hover:bg-[#e6e8ea]'><a href='#' className='text-black hover:text-gray-700'>Earth</a></li>
            <li className='py-[12px] px-[8px] hover:bg-[#e6e8ea]'><a href='#' className='text-black hover:text-gray-700'>Video</a></li>
            <li className='py-[12px] px-[8px] hover:bg-[#e6e8ea]'><a href='#' className='text-black hover:text-gray-700'>Live</a></li>
          </ul>
      </div>
  )
}

export default SecondNavbar