import React from 'react'
import Imgg from '../images/map.jpg'
export default function forth() {
  return (
     <>
      <div className='flex flex-col ml-[25px] w-[96%] h-[60vh] justify-evenly'>
        <h1 className='text-2xl line pb-2'>Contact</h1>
        <p className='text-[18px]'>Lets get in touch and talk about your next project.</p>
        <input className='border border-gray-300 pl-4 py-2' type="text" placeholder='Name'/>
        <input className='border border-gray-300 pl-4 py-2' type="text" placeholder='E-Mail'/>
        <input className='border border-gray-300 pl-4 py-2' type="text" placeholder='Subject'/>
        <input className='border border-gray-300 pl-4 py-2' type="text" placeholder='Comment'/>
        <button className='bg-black text-white w-[150px] mt-3 py-3'>Send Message</button>
      </div>
      <div>
        <img className='h-[80vh] w-[96%] ml-[28px] mt-5' src={Imgg} alt="" />
      </div>
     </>
  )
}
