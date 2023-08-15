import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[35rem] md:h-[25rem] max-[360px]:h-[36rem] font-inter relative z-[-100000]'>
        <div className='bg-[#1E5D2A] h-[30rem] pt-14 max-[360px]:pt-[2rem] min-[360px]:h-[31rem] md:h-[20rem] md:flex justify-center gap-10 lg:gap-[25rem]'>
            <div className='px-8 text-white'>
                <h1 className=' text-2xl font-bold border-l-4 border-[#00FF47] pl-5 uppercase'>Tentang kami</h1>
                <p className='italic pt-6 lg:pt-10 text-lg'>Menuju Maros Lebih BAIK <br />(Bersih, Aman, Inovatif, dan Kreatif) </p>
            </div>
            <div className='px-8 pt-20 md:pt-0 text-white'>
                <h1 className=' text-2xl font-bold border-l-4 border-[#00FF47] pl-5 uppercase'>Kontak</h1>
                <p className='italic pt-6  lg:pt-10 text-lg'>Desa Bonto Matene, Kecamatan Mandai <br />Kabupaten Maros, Sulawesi Selatan </p>
                <p className='italic pt-6 text-lg'>BontoMatene@gmail.com </p>
            </div>
        </div>
        <div className='bg-[#3A5A40] h-[5rem] mt-1 text-center flex justify-center items-center'>
            <h1 className='text-white italic font-semibold text-sm'>KKNT GEL. 110 UNIVERSITAS HASANUDDIN </h1>
        </div>
    </div>
        
  )
}

export default Footer