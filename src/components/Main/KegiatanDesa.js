import React from 'react'
import CardKegiatan from '../CardKegiatan/CardKegiatan'
const KegiatanDesa = () => {
  return (
    <div>
        <div className='font-inter relative z-[1]'>
            <h1 className='text-center font-semibold text-2xl py-10 md:text-3xl lg:text-4xl'>Informasi Kegiatan <br /> Desa Bonto Mate'ne</h1>
            <div className='pb-10'>
                <CardKegiatan />
            </div>
            

        </div>
    </div>
  )
}

export default KegiatanDesa