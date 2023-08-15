import React from 'react'
import Kantor from "../../Assets/Kantor.jpg"
import Budidaya from "../../Assets/Potensi/Perikanan/BudidayaLaut.jpg"

const SektorPerikanan = () => {
  return (
    <div className='font-inter'>
        <div className='max-w-[20rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem]  my-10 m-auto  '>
            <h1 className='font-bold text-xl pb-3 lg:text-2xl '>Sektor Perikanan</h1>

            <div className='my-5 max-w-[15rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem] m-auto sm:m-0 rounded-lg shadow-md sm:flex justify-start hover:bg-[#588157] group gap-10 hover:bg-[#588157] group'> 
                <img src={Budidaya} alt="" className='w-[15rem] sm:w-[15rem] object-cover m-auto  sm:m-0 rounded-lg' />
                <div>
                    <h1 className='text-center pt-2 md:text-lg lg:text-xl group-hover:text-white' >Produksi Budidaya Laut dan Payau </h1>

                    <div className='py-5 '>
                    <table className='table-auto text-justify w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] m-auto sm:m-0  '>
                        <tr className=' sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Keramba</th>
                            <td className='p-2 group-hover:text-white  '>4 Unit</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Tambak</th>
                            <td className='p-2 group-hover:text-white '>8 Titik</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Pancing</th>
                            <td className='p-2 group-hover:text-white '>40 Buah</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Pukat</th>
                            <td className='p-2 group-hover:text-white '>4 Buah</td>
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

export default SektorPerikanan