import React from 'react'
import Kantor from "../../Assets/Kantor.jpg"
import Iklim from "../../Assets/Potensi/DayaAlam/Iklim.jpg"
import LuasWilayah from "../../Assets/Potensi/DayaAlam/LuasWilayah.jpg"
import Topografi from "../../Assets/Potensi/DayaAlam/Topografi.jpg"
const SumberDayaAlam = () => {
  return (
    <div className='font-inter'>
        <div className='max-w-[20rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem]  my-10 m-auto  '>
            <h1 className='font-bold text-xl pb-3 lg:text-2xl '>Sumber Daya Alam</h1>

            <div className='my-5 max-w-[15rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem] m-auto sm:m-0 rounded-lg shadow-md sm:flex justify-start hover:bg-[#588157] group gap-10 hover:bg-[#588157] group'> 
                <img src={Iklim} alt="" className='w-[15rem] sm:w-[15rem] object-cover m-auto  sm:m-0 rounded-lg' />
                <div>
                    <h1 className='text-center pt-2 md:text-lg lg:text-xl group-hover:text-white' >Iklim Cuaca </h1>

                    <div className='py-5 '>
                    <table className='table-auto text-justify w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] m-auto sm:m-0  '>
                        <tr className=' sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Curah Hujan</th>
                            <td className='p-2 group-hover:text-white  '>347 mm</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Jumlah Bulan Hujan</th>
                            <td className='p-2 group-hover:text-white '>6 Bulan</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Kelembapan</th>
                            <td className='p-2 group-hover:text-white '>-</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Suhu rata rata harian</th>
                            <td className='p-2 group-hover:text-white '>38 C</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Tinggi tempat dari permukaan laut</th>
                            <td className='p-2 group-hover:text-white '>0 - 11 m</td>
                        </tr>
                </table>
                </div>
                </div>
            </div>
        </div>

        <div className='max-w-[20rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem]  my-10 m-auto  '>
            <div className='my-5 max-w-[15rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem] m-auto sm:m-0 rounded-lg shadow-md sm:flex justify-start hover:bg-[#588157] group gap-10'> 
                <img src={LuasWilayah} alt="" className='w-[15rem] sm:w-[15rem] object-cover m-auto  sm:m-0 rounded-lg' />
                <div>
                    <h1 className='text-center group-hover:text-white pt-2 md:text-lg lg:text-xl' >Luas Wilayah Menurut Penggunaan</h1>

                    <div className='py-5 '>
                    <table className='table-auto text-justify w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] m-auto sm:m-0  '>
                        <tr className=' sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Tanah Sawah</th>
                            <td className='p-2 group-hover:text-white  '>331 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Tanah Kering</th>
                            <td className='p-2 group-hover:text-white '>22,59 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Tanah  Basah </th>
                            <td className='p-2 group-hover:text-white '>1,39 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Tanah Perkebunan </th>
                            <td className='p-2 group-hover:text-white '>366,2 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Tanah Hutan </th>
                            <td className='p-2 group-hover:text-white '>-</td>
                        </tr>
                </table>
                </div>
                </div>
            </div>
        </div>

        <div className='max-w-[20rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem]  my-10 m-auto  '>
            <div className='my-5 max-w-[15rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem] m-auto sm:m-0 rounded-lg shadow-md sm:flex justify-start hover:bg-[#588157] group gap-10'> 
                <img src={Topografi} alt="" className='w-[15rem] sm:w-[15rem] object-cover m-auto  sm:m-0 rounded-lg' />
                <div>
                    <h1 className='text-center group-hover:text-white pt-2 md:text-lg lg:text-xl' >Topografi Wilayah</h1>

                    <div className='py-5 '>
                    <table className='table-auto text-justify w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] m-auto sm:m-0  '>
                        <tr className=' sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Desa/Kelurahan dataran rendah</th>
                            <td className='p-2 group-hover:text-white  '>419,2 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Desa/Kelurahan kawasan rawa </th>
                            <td className='p-2 group-hover:text-white '>18, 8  Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Desa/Kelurahan kawasan perkantoran</th>
                            <td className='p-2 group-hover:text-white '>4 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Desa/Kelurahan kawasan pertokoan/bisnis</th>
                            <td className='p-2 group-hover:text-white '>30 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Desa/Kelurahan kawasan campuran</th>
                            <td className='p-2 group-hover:text-white '> 404 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Desa/Kelurahan rawan banjir</th>
                            <td className='p-2 group-hover:text-white '>18,8 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Desa/Kelurahan bebas banjir</th>
                            <td className='p-2 group-hover:text-white '>419,2 Ha</td>
                        </tr>
                </table>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SumberDayaAlam