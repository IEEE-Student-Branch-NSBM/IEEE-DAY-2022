import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]'/>
        <div className='p-5 text-white mt-[-10rem]'>
            <h2 className='text-5xl font-bold'>IEEE DAY NSBM 2022</h2>
            <button className='px-8 py-2 border'>Register</button>
        </div>
    </div>
  )
}

export default Hero