import React from 'react'
import Kantor from "../../Assets/Kantor2.jpg"

const TentangDesa = () => {
  return (
    <div className='w-full relative z-[-100000]'>
        <div className='w-full lg:h-[26rem] xl:h-[28rem] h-96 bg-no-repeat bg-center bg-cover static flex items-center' style={{
            backgroundImage: `url('${Kantor}')`,
        }}> 
        
        <div className='bg-[#3F3C3C] w-full h-full opacity-50' ></div>
        </div>
        <div className='md: absolute text-black font-inter lg:w-[31rem] left-5  lg:left-[2rem] lg:top-[9rem] md:top-[8rem] bg-white p-5 top-[9rem]'  >
                <h1 className='lg:text-2xl md:text-xl uppercase opacity-100'>Selamat Datang di website </h1>
                <p className=' lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] font-bold uppercase opacity-100 '>desa bonto mate'ne</p>
            </div>
    </div>
  )
}

export default TentangDesa