import React from 'react'
import Kantor from "../../Assets/Kantor.jpg"
import LahanTernak from "../../Assets/Potensi/Peternakan/LahanTernak.jpg"
import ProduksiPeternakan from "../../Assets/Potensi/Peternakan/ProduksiPeternakan.jpg"
import KepemilikanTernak from "../../Assets/Potensi/Peternakan/KepemilikanTernak.jpg"
const SektorPeternakan = () => {
  return (
    <div className='font-inter'>
        <div className='max-w-[20rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem]  my-10 m-auto  '>
            <h1 className='font-bold text-xl pb-3 lg:text-2xl '>Sektor Peternakan</h1>

            <div className='my-5 max-w-[15rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem] m-auto sm:m-0 rounded-lg shadow-md sm:flex justify-start hover:bg-[#588157] group gap-10 hover:bg-[#588157] group'> 
                <img src={ProduksiPeternakan} alt="" className='w-[15rem] sm:w-[15rem] object-cover m-auto  sm:m-0 rounded-lg' />
                <div>
                    <h1 className='text-center pt-2 md:text-lg lg:text-xl group-hover:text-white' >Produksi Peternakan </h1>

                    <div className='py-5 '>
                    <table className='table-auto text-justify w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] m-auto sm:m-0  '>
                        <tr className=' sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Telur</th>
                            <td className='p-2 group-hover:text-white  '>10.000 Butir/ Bulan</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Daging Ayam</th>
                            <td className='p-2 group-hover:text-white '>2 Ton/ Bulan</td>
                        </tr>
                </table>
                </div>
                </div>
            </div>
        </div>

        <div className='max-w-[20rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem]  my-10 m-auto  '>
            <div className='my-5 max-w-[15rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem] m-auto sm:m-0 rounded-lg shadow-md sm:flex justify-start hover:bg-[#588157] group gap-10'> 
                <img src={LahanTernak} alt="" className='w-[15rem] sm:w-[15rem] object-cover m-auto  sm:m-0 rounded-lg' />
                <div>
                    <h1 className='text-center group-hover:text-white pt-2 md:text-lg lg:text-xl' >Kondisi Lahan Ternak</h1>

                    <div className='py-5 '>
                    <table className='table-auto text-justify w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] m-auto sm:m-0  '>
                        <tr className=' sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Luas Tanaman Pakan Ternak</th>
                            <td className='p-2 group-hover:text-white  '>1,2 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Produksi Hijauan Makan Ternak </th>
                            <td className='p-2 group-hover:text-white '>2,5 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Luas Lahan Gembahan </th>
                            <td className='p-2 group-hover:text-white '>10 Ha</td>
                        </tr>
                </table>
                </div>
                </div>
            </div>
        </div>

        <div className='max-w-[20rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem]  my-10 m-auto  '>
            <div className='my-5 max-w-[15rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem] m-auto sm:m-0 rounded-lg shadow-md sm:flex justify-start hover:bg-[#588157] group gap-10'> 
                <img src={KepemilikanTernak} alt="" className='w-[15rem] sm:w-[15rem] object-cover m-auto  sm:m-0 rounded-lg' />
                <div>
                    <h1 className='text-center group-hover:text-white pt-2 md:text-lg lg:text-xl' >Kepemilikan Lahan Ternak</h1>

                    <div className='py-5 '>
                    <table className='table-auto text-justify w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] m-auto sm:m-0  '>
                        <tr className=' sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Milik Masyarakat Umum</th>
                            <td className='p-2 group-hover:text-white  '>10 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Milik Perorangan </th>
                            <td className='p-2 group-hover:text-white '>1,5 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Sewa Pakai	</th>
                            <td className='p-2 group-hover:text-white '>0,5 Ha</td>
                        </tr>
                </table>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SektorPeternakan