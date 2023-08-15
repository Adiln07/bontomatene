import React from 'react'
import Senja from "../../Assets/sawah.JPG"

const JudulSarana = () => {
  return (
    <div className='relative z-[-100000] font-inter pt-[5rem]'>  
        <div className='w-full md:h-[10rem] h-96 bg-no-repeat bg-center bg-cover' style={{
        backgroundImage: `url('${Senja}')`,
        }}>
        <div className=' w-full h-full  flex flex-col justify-center items-center gap-2'>
            <h1 className='text-white text-2xl font-bold uppercase md:text-5xl px-1' style={{
                textShadow: '2px 2px 2px #3F3C3C',
            }}>Sarana Dan Prasarana</h1>
            <p className='text-white font-semibold uppercase  px-1' style={{
                textShadow: '2px 2px 2px #3F3C3C',
            }}>Beranda / Sarana Dan Prasarana</p>

        </div>
        </div> 
    </div>
  )
}

export default JudulSarana