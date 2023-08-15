import React from 'react'
import Kepala from "../../Assets/kepaladesa.jpeg"
import Kantor from "../../Assets/Desa.jpeg"

const ProfileDesa = () => {
  return (
    <div className='relative z-[-100000] font-inter'>
        <div className='w-[22rem] max-[360px]:w-[19rem] md:w-[40rem] lg:w-[70rem] lg:px-5 py-10 m-auto'>
            <div className='md:flex flex-row-reverse gap-10'>
                <img src={Kantor} alt=""  className='md:w-[20rem] lg:w-[22rem] object-cover rounded-lg'/>
                <div className='py-5 md:py-0'>
                    <div className='py-5 md:py-0 '>
                        <h1 className='text-4xl  w-[4.5rem] font-bold border-b-4 pb-1 mb-5 border-[#00FF47]'>Visi</h1>
                        <p className='text-justify'>Terwujudnya masyarakat desa yang maju, makmur, aman dan damai berdasarkan iman dan taqwa kepada tuhan yang maha esa .</p>
                    </div>
                    <div className='md:pt-5'>
                        <h1 className='text-4xl w-[5rem] font-bold border-b-4 pb-1 mb-5 border-[#00FF47]'>Misi</h1>
                        <ol className='list-decimal pl-4'>
                            <li>Peningkatan Hasil Pertanian.</li>
                            <li>Meningkatkan kualitas Sumber Daya Manusia di segala bidang.</li>
                            <li>meningkatkan sarana dan prasarana transportasi.</li>
                            <li>meningkatkan pendapatan masyarakat.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className='py-5 md:py-10'>
                        <h1 className='text-4xl w-[8rem] font-bold border-b-4 pb-2 mb-5 border-[#00FF47]'>Tujuan</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <div className=' bg-black text-white w-full py-10 md:flex flex-row-reverse justify-center items-center gap-20 lg:gap-40'>
                <p className='italic w-[22rem] md:m-0 md:w-[25rem] lg:w-[35rem] max-[360px]:w-[19rem] max-[360px]:text-lg lg:text-lg m-auto pb-10'>“ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “</p>
                <div>
                    <img src={Kepala} alt="" className='w-[12rem] h-[12rem] object-cover m-auto' />
                    <h1 className='text-center font-bold uppercase pt-0.5'>kepala desa</h1>
                </div>
                
            </div>
    </div>
  )
}

export default ProfileDesa