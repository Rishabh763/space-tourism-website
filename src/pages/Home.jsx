import React from 'react'
import Navbar from '../components/Navbar'



function Home() {
  
  return (
    
      <div className='home full-width min-h-screen'>
        <Navbar/>
        <div className='grid grid-cols-1 lg:grid-cols-2 p-24'>
          <div className="text w-[70%] self-end">
            <h2 className='text-[28px]'>SO, YOU WANT TO TRAVEL TO</h2>
            <h1 className='text-[150px] leading-tight-none'>SPACE</h1>
            <p className='text-lg'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="explore self-center">
            <div className='aspect-square w-5/12 rounded-full mx-auto bg-white flex items-center justify-center transition-[outline] outline hover:outline-[50px] hover:outline-white/15'>
              <h2 className='text-black text-4xl '>Explore</h2>
            </div>
          </div>
        </div>
    
      </div>
  )
}

export default Home