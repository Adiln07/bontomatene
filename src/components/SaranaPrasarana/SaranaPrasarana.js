import React from 'react'
import Sekolah from "../../Assets/pendidikan.jpg"
import Jalan from "../../Assets/Jalan.jpg"
import Olahraga from "../../Assets/Olahraga.jpg"
import Kesehatan from "../../Assets/SaranaPrasarana/Kesehatan.jpg"
import Transportasi from "../../Assets/SaranaPrasarana/Transportasi.JPG"
import Komunikasi from "../../Assets/SaranaPrasarana/Komunikasi.jpg"
const SaranaPrasarana = () => {
  return (
    <div className='font-inter'>
        <h1 className='font-bold pt-5 text-center text-lg lg:text-2xl'>Sarana Dan Prasarana Kantor Desa</h1>
        <div className='sm:max-w-[40rem] md:max-w-[45rem] max-w-[22rem] lg:max-w-[55rem] m-auto py-10 sm:flex justify-center gap-10 '>
            <div className=''>
                <h1 className='font-bold md:text-lg lg:text-2xl'>1. Uraian Umum</h1>
                <div className='py-5 '>
                    <table className='table-auto text-justify w-full  border-2 '>
                        <tr className='text-sm md:text-lg lg:text-xl border-2'>
                            <th className='p-3 '>Status Kepemilikan</th>
                            <td className='p-3 '>Hibah</td>
                        </tr>
                        <tr className='text-sm md:text-lg lg:text-xl border-2'>
                            <th className='p-3 '>Luas Tanah</th>
                            <td className='p-3 '>400 Meter</td>
                        </tr>
                        <tr className='text-sm md:text-lg lg:text-xl border-2'>
                            <th className='p-3 '>Luas Bangunan</th>
                            <td className='p-3 '>200 Meter</td>
                        </tr>
                        <tr className='text-sm md:text-lg lg:text-xl border-2'>
                            <th className='p-3 '>Tahun Pendirian</th>
                            <td className='p-3 '>2006</td>
                        </tr>
                        <tr className='text-sm md:text-lg lg:text-xl border-2'>
                            <th className='p-3 '>Sumber Biaya</th>
                            <td className='p-3 '>ADD</td>
                        </tr>
                        <tr className='text-sm md:text-lg lg:text-xl border-2'>
                            <th className='p-3 '>Kondisi Bangunan</th>
                            <td className='p-3 '>Sangat Bagus</td>
                        </tr>
                        <tr className='text-sm md:text-lg lg:text-xl border-2'>
                            <th className='p-3 '>Bangunan Bertingkat</th>
                            <td className='p-3 '> Tidak</td>
                        </tr>
                </table>
                </div>
            </div>
            <div>
            <div>
                <h1 className='font-bold md:text-lg lg:text-2xl'>2. Fasilitas Penunjang</h1>
                <div className='py-5 '>
                    <table className='table-auto text-justify w-full  border-2 '>
                        <tr className='text-sm md:text-lg lg:text-xl border-2'>
                            <th className='p-3 '>Komputer</th>
                            <td className='p-3 '>2 Buah</td>
                        </tr>
                        <tr className='text-sm md:text-lg lg:text-xl border-2'>
                            <th className='p-3 '>Laptop</th>
                            <td className='p-3 '>4 Buah</td>
                        </tr>
                        <tr className='text-sm md:text-lg lg:text-xl border-2'>
                            <th className='p-3 '>Meja Kursi Tamu</th>
                            <td className='p-3 '>40 Buah</td>
                        </tr>
                        <tr className='text-sm md:text-lg lg:text-xl border-2'>
                            <th className='p-3 '>Meja Kerja</th>
                            <td className='p-3 '>11 Buah</td>
                        </tr>
                        <tr className='text-sm md:text-lg lg:text-xl border-2'>
                            <th className='p-3 '>Kursi Kerja </th>
                            <td className='p-3 '>30 Buah </td>
                        </tr>
                        <tr className='text-sm md:text-lg lg:text-xl border-2'>
                            <th className='p-3 '>Mejar Rapat/Sidang</th>
                            <td className='p-3 '>3 Buah</td>
                        </tr>
                        <tr className='text-sm md:text-lg lg:text-xl border-2'>
                            <th className='p-3 '>Kursi Rapat</th>
                            <td className='p-3 '> 22 Buah</td>
                        </tr>
                </table>
                </div>
            </div>
            </div>
        </div>
        
        <hr className='bg-black p-[.1rem] w-10/12  m-auto rounded-lg' />

        <div className='py-10 max-w-[22rem] sm:max-w-[30rem] md:max-w-[50rem] lg:max-w-[60rem]  md:flex justify-center  m-auto '>
            <img src={Sekolah} alt="" className='rounded-lg md:w-[20rem] w-[20rem] m-auto' />
            <div className='py-2'>
                <h1 className='text-center lg:text-start lg:pl-24 font-bold 
                 md:text-lg'>Sarana Dan Prasarana Pendidikan </h1>

                <div className='sm:flex flex-wrap justify-center gap-5 sm:pt-6'>
                    <div className='pt-3'>
                        <h2 className='font-bold uppercase md:text-sm lg:text-base'>1. Tk/paud</h2>
                        <div className='py-5'>
                        <table className='table-auto text-justify w-full  border-2 '>
                            <tr className='text-sm md:text-sm lg:text-base border-2'>
                                <th className='p-3 '>Bangunan Fisik</th>
                                <td className='p-3 '>2 Buah</td>
                            </tr>
                            <tr className='text-sm md:text-sm lg:text-base border-2'>
                                <th className='p-3 '>Murid </th>
                                <td className='p-3 '>30 Orang</td>
                            </tr>
                            <tr className='text-sm md:text-sm lg:text-base border-2'>
                                <th className='p-3 '>Guru</th>
                                <td className='p-3 '>8 Orang</td>
                            </tr>
                            </table>
                        </div>
                    </div>

                    <div className='pt-3'>
                        <h2 className='font-bold uppercase md:text-sm lg:text-base'>2. Sekolah Dasar</h2>
                        <div className='py-5'>
                        <table className='table-auto text-justify w-full  border-2 '>
                            <tr className='text-sm md:text-sm lg:text-base border-2'>
                                <th className='p-3 '>Bangunan Fisik</th>
                                <td className='p-3 '>3 Buah</td>
                            </tr>
                            <tr className='text-sm md:text-sm lg:text-base border-2'>
                                <th className='p-3 '>Murid </th>
                                <td className='p-3 '>100 Orang</td>
                            </tr>
                            <tr className='text-sm md:text-sm lg:text-base border-2'>
                                <th className='p-3 '>Guru</th>
                                <td className='p-3 '>30 Orang</td>
                            </tr>
                            </table>
                        </div>
                    </div>

                    <div className='pt-3'>
                        <h2 className='font-bold uppercase sm:text-sm md:text-xs lg:text-sm'>3. Sekolah Menengah Pertama</h2>
                        <div className='py-5'>
                        <table className='table-auto text-justify w-full  border-2 '>
                            <tr className='text-sm md:text-sm lg:text-base border-2'>
                                <th className='p-3 '>Bangunan Fisik</th>
                                <td className='p-3 '>1 Buah</td>
                            </tr>
                            <tr className='text-sm md:text-sm lg:text-base border-2'>
                                <th className='p-3 '>Murid </th>
                                <td className='p-3 '>80 Orang</td>
                            </tr>
                            <tr className='text-sm md:text-sm lg:text-base border-2'>
                                <th className='p-3 '>Guru</th>
                                <td className='p-3 '>10 Orang</td>
                            </tr>
                            </table>
                        </div>
                    </div>

                    <div className='pt-3'>
                        <h2 className='font-bold uppercase sm:text-sm md:text-xs lg:text-sm'>4. Sekolah Menengah Atas</h2>
                        <div className='py-5'>
                        <table className='table-auto text-justify w-full  border-2 '>
                            <tr className='text-sm md:text-sm lg:text-base border-2'>
                                <th className='p-3 '>Bangunan Fisik</th>
                                <td className='p-3 '>-</td>
                            </tr>
                            <tr className='text-sm md:text-sm lg:text-base border-2'>
                                <th className='p-3 '>Murid </th>
                                <td className='p-3 '>-</td>
                            </tr>
                            <tr className='text-sm md:text-sm lg:text-base border-2'>
                                <th className='p-3 '>Guru</th>
                                <td className='p-3 '>-</td>
                            </tr>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        

        <div className='py-10 max-w-[22rem] m-auto sm:max-w-[30rem]  md:max-w-[50rem]  lg:max-w-[60rem]  md:flex justify-start md:gap-20  '>
            <img src={Kesehatan} alt="" className='rounded-lg w-[25rem] h-[12rem] md:w-[20rem] object-cover m-auto md:m-0' />
            <div className='py-2'>
                <h1 className='text-center font-bold 
                md:text-lg '>Sarana Dan Prasarana Kesehatan </h1>
                <div>
                    <div className='pt-3'>
                        <div className='py-5'>
                        <table className='table-auto text-justify w-full  border-2 '>
                            <tr className='text-sm md:text-base  border-2'>
                                <th className='p-3 md:px-8 '> 1. Poskesdes</th>
                                <td className='p-3 md:px-8 '>1 Buah</td>
                            </tr>
                            <tr className='text-sm md:text-base  border-2'>
                                <th className='p-3 md:px-8 '>2. Posyandu </th>
                                <td className='p-3 md:px-8 '>4 Buah</td>
                            </tr>
                            <tr className='text-sm md:text-base  border-2'>
                                <th className='p-3 md:px-8 '>3. Apotik</th>
                                <td className='p-3 md:px-8 '>1 Buah</td>
                            </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        

        <div className='py-10 max-w-[22rem] m-auto sm:max-w-[30rem]  md:max-w-[50rem] lg:max-w-[60rem]  md:flex justify-start md:gap-20  '>
            <img src={Olahraga} alt="" className='rounded-lg w-[25rem] h-[12rem] md:w-[20rem] object-cover m-auto md:m-0' />
            <div className='py-2'>
                <h1 className='text-center font-bold 
                md:text-lg '>Sarana Dan Prasarana Olahraga </h1>
                <div>
                    <div className='pt-3'>
                        <div className='py-5'>
                        <table className='table-auto text-justify w-full  border-2 '>
                            <tr className='text-sm md:text-base border-2'>
                                <th className='p-3 md:px-8 '> 1. Volleyball</th>
                                <td className='p-3 md:px-8 '>4 Buah</td>
                            </tr>
                            <tr className='text-sm md:text-base border-2'>
                                <th className='p-3 md:px-8 '>2. Sepak Takraw </th>
                                <td className='p-3 md:px-8 '>1 Buah</td>
                            </tr>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        <div className='py-10 max-w-[22rem] m-auto sm:max-w-[30rem] lg:max-w-[60rem]  md:max-w-[50rem] md:flex justify-start md:gap-20  '>
            <img src={Transportasi} alt="" className='rounded-lg w-[25rem] h-[12rem] md:w-[20rem] object-cover m-auto md:m-0' />
            <div className='py-2'>
                <h1 className='text-center font-bold 
                md:text-lg '>Sarana Dan Prasarana Transportasi Darat </h1>
                <div>
                    <div className='pt-3'>
                        <div className='py-5'>
                        <table className='table-auto text-justify w-full  border-2 '>
                            <tr className='text-sm md:text-base border-2'>
                                <th className='p-3 md:px-8 '> 1. Bus Umum</th>
                                <td className='p-3 md:px-8 '>7 Unit</td>
                            </tr>
                            <tr className='text-sm md:text-base border-2'>
                                <th className='p-3 md:px-8 '>2. Truck Umum </th>
                                <td className='p-3 md:px-8 '>8 Unit</td>
                            </tr>
                            <tr className='text-sm md:text-base border-2'>
                                <th className='p-3 md:px-8 '>3. Angkutan </th>
                                <td className='p-3 md:px-8 '>10 Unit</td>
                            </tr>
                            <tr className='text-sm md:text-base border-2'>
                                <th className='p-3 md:px-8 '>4. Ojek </th>
                                <td className='p-3 md:px-8 '>25 Unit</td>
                            </tr>
                            <tr className='text-sm md:text-base border-2'>
                                <th className='p-3 md:px-8 '>5. Becak</th>
                                <td className='p-3 md:px-8 '>9 Buah</td>
                            </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        <div className='py-10 max-w-[22rem] m-auto sm:max-w-[30rem] lg:max-w-[60rem]  md:max-w-[50rem] md:flex justify-start md:gap-20  '>
            <img src={Komunikasi} alt="" className='rounded-lg w-[25rem] h-[12rem] md:w-[20rem] object-cover m-auto md:m-0' />
            <div className='py-2'>
                <h1 className='text-center font-bold 
                md:text-lg '>Sarana Dan Prasarana Komunikasi Informasi </h1>
                <div>
                    <div className='pt-3'>
                        <div className='py-5'>
                        <table className='table-auto text-justify w-full  border-2 '>
                            <tr className='text-sm md:text-base border-2'>
                                <th className='p-3 md:px-8 '> 1. Sinyal Telepon</th>
                                <td className='p-3 md:px-8 '>2 Pemancar</td>
                            </tr>
                            <tr className='text-sm md:text-base border-2'>
                                <th className='p-3 md:px-8 '>2. Koran /  Surat Kabar </th>
                                <td className='p-3 md:px-8 '>1 Buah</td>
                            </tr>
                            <tr className='text-sm md:text-base border-2'>
                                <th className='p-3 md:px-8 '>3. Papan Iklan </th>
                                <td className='p-3 md:px-8 '>3 Buah</td>
                            </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        <div className='py-10 max-w-[22rem] m-auto sm:max-w-[30rem] lg:max-w-[60rem]  md:max-w-[50rem] md:flex justify-start md:gap-20  '>
            <img src={Jalan} alt="" className='rounded-lg w-[25rem] h-[12rem] md:w-[20rem] object-cover m-auto md:m-0' />
            <div className='py-2'>
                <h1 className='text-center font-bold 
                md:text-lg '>Sarana Dan Prasarana Akses Jalan </h1>
                <div>
                    <div className='pt-3'>
                        <div className='py-5'>
                        <table className='table-auto text-justify w-full  border-2 '>
                            <tr className='text-sm md:text-base border-2'>
                                <th className='p-3 md:px-8 '> 1. Jalan Kota</th>
                                <td className='p-3 md:px-8 '>5 Jalur</td>
                            </tr>
                            <tr className='text-sm md:text-base border-2'>
                                <th className='p-3 md:px-8 '>2. Jalan Desa </th>
                                <td className='p-3 md:px-8 '>4 Jalur</td>
                            </tr>
                            <tr className='text-sm md:text-base border-2'>
                                <th className='p-3 md:px-8 '>3. Jalan Kampung </th>
                                <td className='p-3 md:px-8 '>4 Jalur</td>
                            </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SaranaPrasarana