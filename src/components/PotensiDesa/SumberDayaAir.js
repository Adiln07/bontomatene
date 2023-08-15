import React from 'react'
import Kantor from "../../Assets/Kantor.jpg"
import DayaAir from "../../Assets/Potensi/DayaAir/DayaAir.jpg"

const SumberDayaAir = () => {
  return (
    <div className='font-inter'>
        <div className='max-w-[20rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem]  my-10 m-auto  '>
            <h1 className='font-bold text-xl pb-3 lg:text-2xl '>Sumber Daya Air</h1>

            <div className='my-5 max-w-[15rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem] m-auto sm:m-0 rounded-lg shadow-md sm:flex justify-start hover:bg-[#588157] group gap-10 hover:bg-[#588157] group'> 
                <img src={DayaAir} alt="" className='w-[15rem] sm:w-[15rem] object-cover m-auto  sm:m-0 rounded-lg' />
                <div>
                    <h1 className='text-center pt-2 md:text-lg lg:text-xl group-hover:text-white' >Sumber Air Bersih</h1>

                    <div className='py-5 '>
                    <table className='table-auto text-justify w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] m-auto sm:m-0  '>
                        <tr className=' sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Sumber Galian</th>
                            <td className='p-2 group-hover:text-white  '>150 Unit,  Pemanfaatan 100 KK</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Hidran Umum</th>
                            <td className='p-2 group-hover:text-white '>200 Unit,  Pemanfaatan 90 KK</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>PAM</th>
                            <td className='p-2 group-hover:text-white '>1200 Unit,  Pemanfaatan 800 KK</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Depot Isi Ulang</th>
                            <td className='p-2 group-hover:text-white '>1200 Unit,  Pemanfaatan 760 KK</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Jala</th>
                            <td className='p-2 group-hover:text-white '>4 Buah</td>
                        </tr>
                </table>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SumberDayaAir