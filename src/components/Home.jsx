import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

function Home() {
  return (
    <div name='home' className='bg-[#010026] w-full h-screen'>Home
    {/*Container */}

 <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-[#DC4492] font-bold' > Hello, I am</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Aslihan Alp</h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]' >I'm a React Developer</h2>
    <p className='text-[#8892b0] py-4 max-w-[700px]'>After 30 years and many works i found my job and it turned to my hobbie.</p>
    <div>
        <button className='text-white flex items-center border-2 px-6 py-3 my-2 hover:bg-[#DC4492] hover:border-[#DC4492] group'>
            View Work
            <span>
             <HiArrowRight className='ml-3 group-hover:rotate-90 duration-300' />
             </span>
             </button>
    </div>
 </div>
    </div>
  )
}

export default Home