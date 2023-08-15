import React from 'react'
import Pertanian from "../../Assets/Potensi/Pertanian/Pangan.jpg"
import Peternakan from "../../Assets/Potensi/Peternakan/KepemilikanTernak.jpg"
import Perikanan from "../../Assets/Potensi/Perikanan/BudidayaLaut.jpg"
import Alam from "../../Assets/Potensi/DayaAlam/Iklim.jpg"
import Air from "../../Assets/Potensi/DayaAir/DayaAir.jpg"
import Masyarakat from "../../Assets/Potensi/KelembagaanMasyarakat/Umkm.jpeg"
import { Link } from 'react-router-dom'

const CardPotensi = () => {
  return (
    <div className='pb-12 md:grid md:grid-cols-2 m-auto lg:grid-cols-3 lg:max-w-[70rem] md:max-w-[40rem]'>
        <div className='py-4'>
          <div className='w-[18rem] lg:w-[22rem] h-[24.5rem] m-auto shadow shadow-slate-500 hover:bg-white group rounded-lg font-inter'>
              <img src={Pertanian} alt=""  className='rounded-t-lg h-[14.5rem] w-[25rem] object-cover'/>
              <div className='text-white group-hover:text-black px-4'>
                <h1 className='font-bold py-2 '>Sektor Pertanian</h1>
                <p className='text-sm '>Komoditas Tanaman Pangan, Komoditas Tanaman Apotik Hidup, Komoditas Buah Buahan, Hasil Hutan.</p>

                <div className='flex justify-between pb-3'>
                  <div>
                  </div>
                  <button className='text-white text-sm bg-[#588157] group-hover:bg-black mt-2 py-2 px-3 font-semibold rounded-lg mb-1'> <Link to="/SektorPertanian">Lebih Lengkap</Link> </button>
              </div>
              </div>
          </div>    
        </div>

        <div className='py-4'>
          <div className='w-[18rem] lg:w-[22rem] h-[24.5rem] m-auto shadow shadow-slate-500 hover:bg-white group rounded-lg font-inter'>
              <img src={Peternakan} alt=""  className='rounded-t-lg h-[14.5rem] w-[25rem] object-cover'/>
              <div className='text-white group-hover:text-black px-4'>
                <h1 className='font-bold py-2 '>Sektor Peternakan</h1>
                <p className='text-sm '>Produksi Peternakan, Kondisi Lahan Ternak, Kepemilikan Lahan Ternak.</p>

                <div className='flex justify-between pb-3'>
                  <div>
                  </div>
                  <button className='text-white text-sm bg-[#588157] group-hover:bg-black mt-[1.5rem] py-2 px-3 font-semibold rounded-lg mb-1'><Link to="/SektorPeternakan">Lebih Lengkap</Link></button>
              </div>
              </div>
          </div>    
        </div>
        
        <div className='py-4'>
          <div className='w-[18rem] lg:w-[22rem] h-[24.5rem] m-auto shadow shadow-slate-500 hover:bg-white group rounded-lg font-inter'>
              <img src={Perikanan} alt=""  className='rounded-t-lg h-[14.5rem] w-[25rem] object-cover'/>
              <div className='text-white group-hover:text-black px-4'>
                <h1 className='font-bold py-2 '>Sektor Perikanan</h1>
                <p className='text-sm '>Produksi Budidaya Laut dan Payau</p>

                <div className='flex justify-between pb-3'>
                  <div>
                  </div>
                  <button className='text-white text-sm bg-[#588157] group-hover:bg-black mt-[2.7rem] py-2 px-3 font-semibold rounded-lg mb-1'><Link to="/SektorPerikanan">Lebih Lengkap</Link></button>
              </div>
              </div>
          </div>    
        </div>

        <div className='py-4'>
          <div className='w-[18rem] lg:w-[22rem] h-[24.5rem] m-auto shadow shadow-slate-500 hover:bg-white group rounded-lg font-inter'>
              <img src={Alam} alt=""  className='rounded-t-lg h-[14.5rem] w-[25rem] object-cover'/>
              <div className='text-white group-hover:text-black px-4'>
                <h1 className='font-bold py-2 '>Sumber Daya alam</h1>
                <p className='text-sm '>Iklim Cuaca, Luas Wilayah Menurut Penggunaan, Topografi Wilayah.</p>

                <div className='flex justify-between pb-3'>
                  <div>
                  </div>
                  <button className='text-white text-sm bg-[#588157] group-hover:bg-black mt-[1.5rem] py-2 px-3 font-semibold rounded-lg mb-1'><Link to="/SumberDayaAlam">Lebih Lengkap</Link></button>
              </div>
              </div>
          </div>    
        </div>

        <div className='py-4'>
          <div className='w-[18rem] lg:w-[22rem] h-[24.5rem] m-auto shadow shadow-slate-500 hover:bg-white group rounded-lg font-inter'>
              <img src={Air} alt=""  className='rounded-t-lg h-[14.5rem] w-[25rem] object-cover'/>
              <div className='text-white group-hover:text-black px-4'>
                <h1 className='font-bold py-2 '>Sumber Daya Air</h1>
                <p className='text-sm '>Sumber Air Bersih</p>

                <div className='flex justify-between pb-3'>
                  <div>
                  </div>
                  <button className='text-white text-sm bg-[#588157] group-hover:bg-black mt-[2.7rem] py-2 px-3 font-semibold rounded-lg mb-1'><Link to="/SumberDayaAir">Lebih Lengkap</Link></button>
              </div>
              </div>
          </div>    
        </div>

        <div className='py-4'>
          <div className='w-[18rem] lg:w-[22rem] h-[24.5rem] m-auto shadow shadow-slate-500 hover:bg-white group rounded-lg font-inter'>
              <img src={Masyarakat} alt=""  className='rounded-t-lg h-[14.5rem] w-[25rem] object-cover'/>
              <div className='text-white group-hover:text-black px-4'>
                <h1 className='font-bold py-2 '>Kelembagaan Masyarakat</h1>
                <p className='text-sm '> Lembaga Ekonomi, Usaha Kemasyarakatan.</p>

                <div className='flex justify-between pb-3'>
                  <div>
                  </div>
                  <button className='text-white text-sm bg-[#588157] group-hover:bg-black lg:mt-[2.7rem] md:mt-[1.7rem] mt-[1.7rem] py-2 px-3 font-semibold rounded-lg mb-1'><Link to="/KelembagaanMasyarakat">Lebih Lengkap</Link></button>
              </div>
              </div>
          </div>    
        </div>
        
    </div>
  )
}

export default CardPotensi