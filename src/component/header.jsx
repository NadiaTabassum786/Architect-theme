import React from 'react'
import Img from '../images/architect.jpg'
export default function header() {
  return (
    <>
    <img src={Img} alt="" style={{height:"100vh,width:100%"}} />
    <h1 className='text-4xl -mt-[400px] ml-[41%] text-white'><span className='px-4 py-1 bg-gray-600 font-bold bg-opacity-90'>BR</span> Architect</h1> 
    </>
  )
}
