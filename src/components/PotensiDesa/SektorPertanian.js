import React from 'react'
import Kantor from "../../Assets/Kantor.jpg"
import Pangan from "../../Assets/Potensi/Pertanian/Pangan.jpg"
import Buahan from "../../Assets/Potensi/Pertanian/Buahan.jpg"
import Hutan from "../../Assets/Potensi/Pertanian/Hutan.jpg"
import TanamanApotik from "../../Assets/Potensi/Pertanian/TanamanApotik.jpg"
const SektorPertanian = () => {
  return (
    <div className='font-inter'>
        <div className='max-w-[20rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem]  my-10 m-auto  '>
            <h1 className='font-bold text-xl pb-3 lg:text-2xl '>Sektor Pertanian</h1>

            <div className='my-5 max-w-[15rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem] m-auto sm:m-0 rounded-lg shadow-md sm:flex justify-start hover:bg-[#588157] group gap-10 hover:bg-[#588157] group'> 
                <img src={Pangan} alt="" className='w-[15rem] sm:w-[15rem] object-cover m-auto  sm:m-0 rounded-lg' />
                <div>
                    <h1 className='text-center pt-2 md:text-lg lg:text-xl group-hover:text-white' >Komoditas Tanaman Pangan </h1>

                    <div className='py-5 '>
                    <table className='table-auto text-justify w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] m-auto sm:m-0  '>
                        <tr className=' sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Jagung</th>
                            <td className='p-2 group-hover:text-white  '>7 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Kacang Tanah</th>
                            <td className='p-2 group-hover:text-white '>1 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Padi Sawah</th>
                            <td className='p-2 group-hover:text-white '>331 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Ubi Kayu</th>
                            <td className='p-2 group-hover:text-white '>7,5 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Ubi Jalar </th>
                            <td className='p-2 group-hover:text-white '>1,1 Ha </td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Cabe</th>
                            <td className='p-2 group-hover:text-white '>1 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Tomat</th>
                            <td className='p-2 group-hover:text-white '>1 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Terong</th>
                            <td className='p-2 group-hover:text-white '>0,5 Ha</td>
                        </tr>
                </table>
                </div>
                </div>
            </div>
        </div>

        <div className='max-w-[20rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem]  my-10 m-auto  '>
            <div className='my-5 max-w-[15rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem] m-auto sm:m-0 rounded-lg shadow-md sm:flex justify-start hover:bg-[#588157] group gap-10'> 
                <img src={TanamanApotik} alt="" className='w-[15rem] sm:w-[15rem] object-cover m-auto  sm:m-0 rounded-lg' />
                <div>
                    <h1 className='text-center group-hover:text-white pt-2 md:text-lg lg:text-xl' >Komoditas Tanaman Apotik Hidup</h1>

                    <div className='py-5 '>
                    <table className='table-auto text-justify w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] m-auto sm:m-0  '>
                        <tr className=' sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Jahe</th>
                            <td className='p-2 group-hover:text-white  '>0,5 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Kunyit </th>
                            <td className='p-2 group-hover:text-white '>0,8 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Lengkuas</th>
                            <td className='p-2 group-hover:text-white '>0,5 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Temulawak</th>
                            <td className='p-2 group-hover:text-white '>0,3 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Temu Hitam </th>
                            <td className='p-2 group-hover:text-white '>0,6 Ha </td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Temu Putih</th>
                            <td className='p-2 group-hover:text-white '>0,5 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Daun Sereh</th>
                            <td className='p-2 group-hover:text-white '>1,5 Ha</td>
                        </tr>
                </table>
                </div>
                </div>
            </div>
        </div>

        <div className='max-w-[20rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem]  my-10 m-auto  '>
            <div className='my-5 max-w-[15rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem] m-auto sm:m-0 rounded-lg shadow-md sm:flex justify-start hover:bg-[#588157] group gap-10'> 
                <img src={Buahan} alt="" className='w-[15rem] sm:w-[15rem] object-cover m-auto  sm:m-0 rounded-lg' />
                <div>
                    <h1 className='text-center group-hover:text-white pt-2 md:text-lg lg:text-xl' >Komoditas Buah Buahan</h1>

                    <div className='py-5 '>
                    <table className='table-auto text-justify w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] m-auto sm:m-0  '>
                        <tr className=' sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Mangga</th>
                            <td className='p-2 group-hover:text-white  '>2 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Pepaya </th>
                            <td className='p-2 group-hover:text-white '>1 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Pisang	</th>
                            <td className='p-2 group-hover:text-white '>3 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Jeruk Nipis</th>
                            <td className='p-2 group-hover:text-white '>1 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Nangka</th>
                            <td className='p-2 group-hover:text-white '>0,6 Ha </td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Temu Putih</th>
                            <td className='p-2 group-hover:text-white '>1 Ha</td>
                        </tr>
                </table>
                </div>
                </div>
            </div>
        </div>

        <div className='max-w-[20rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem]  my-10 m-auto  '>
            <div className='my-5 max-w-[15rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem] m-auto sm:m-0 rounded-lg shadow-md sm:flex justify-start hover:bg-[#588157] group gap-10'> 
                <img src={Hutan} alt="" className='w-[15rem] sm:w-[15rem] object-cover m-auto  sm:m-0 rounded-lg' />
                <div>
                    <h1 className='text-center group-hover:text-white pt-2 md:text-lg lg:text-xl' >Hasil Hutan</h1>

                    <div className='py-5 '>
                    <table className='table-auto text-justify w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] m-auto sm:m-0  '>
                        <tr className=' sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Bambu</th>
                            <td className='p-2 group-hover:text-white  '>2 Ha</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Jati  </th>
                            <td className='p-2 group-hover:text-white '>1,5 Ha</td>
                        </tr>
                </table>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SektorPertanian