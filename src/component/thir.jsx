import React from 'react'

export default function thir(props) {
  return (
     <>
     <div className="card flex flex-col w-[300px] h-[230px] justify-evenly">
        <h1 className='text-2xl font-semibold'>{props.data.heading}</h1>
        <h2>{props.data.head}</h2>
        <p className='leading-5 text-[18px]'>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        <button className='bg-gray-300 text-[20px] hover:bg-gray-500 font-normal py-2'>Contact</button>
     </div>
    
     </>
  )
}
