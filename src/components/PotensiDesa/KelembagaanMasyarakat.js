import React from 'react'
import Kantor from "../../Assets/Kantor.jpg"
import Produk from "../../Assets/Potensi/KelembagaanMasyarakat/Produk.jpeg"
import Umkm from "../../Assets/Potensi/KelembagaanMasyarakat/Umkm.jpeg"
const KelembagaanMasyarakat = () => {
  return (
    <div className='font-inter'>
        <div className='max-w-[20rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem]  my-10 m-auto  '>
            <h1 className='font-bold text-xl pb-3 lg:text-2xl '>Kelembagaan Masyarakat</h1>

            <div className='my-5 max-w-[15rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem] m-auto sm:m-0 rounded-lg shadow-md sm:flex justify-start hover:bg-[#588157] group gap-10 hover:bg-[#588157] group'> 
                <img src={Umkm} alt="" className='w-[15rem] sm:w-[15rem] object-cover m-auto  sm:m-0 rounded-lg' />
                <div>
                    <h1 className='text-center pt-2 md:text-lg lg:text-xl group-hover:text-white' >Lembaga Ekonomi </h1>

                    <div className='py-5 '>
                    <table className='table-auto text-justify w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] m-auto sm:m-0  '>
                        <tr className=' sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Kelompok Simpan Pinjam</th>
                            <td className='p-2 group-hover:text-white  '>1  Unit dengan 8 Pengurus Anggota</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>BUMDES</th>
                            <td className='p-2 group-hover:text-white '>1  Unit dengan 8 Pengurus Anggota</td>
                        </tr>
                </table>
                </div>
                </div>
            </div>
        </div>

        <div className='max-w-[20rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem]  my-10 m-auto  '>
            <div className='my-5 max-w-[15rem] sm:max-w-[35rem] md:max-w-[40rem] lg:max-w-[50rem] m-auto sm:m-0 rounded-lg shadow-md sm:flex justify-start hover:bg-[#588157] group gap-10'> 
                <img src={Produk} alt="" className='w-[15rem] sm:w-[15rem] object-cover m-auto  sm:m-0 rounded-lg' />
                <div>
                    <h1 className='text-center group-hover:text-white pt-2 md:text-lg lg:text-xl' >Usaha Kemasyarakatan</h1>

                    <div className='py-5 '>
                    <table className='table-auto text-justify w-[12rem] sm:w-[15rem] md:w-[20rem] lg:w-[30rem] m-auto sm:m-0  '>
                        <tr className=' sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Industri Makanan</th>
                            <td className='p-2 group-hover:text-white  '>6 Unit dengan 18 Tenaga Kerja</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Angkutan Umum </th>
                            <td className='p-2 group-hover:text-white '>10 Unit dengan 10  Tenaga Kerja</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Jasa Ekspedisi Barang</th>
                            <td className='p-2 group-hover:text-white '>3 Unit dengan 6 Tenaga Kerja</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Pasar Tradisioanal</th>
                            <td className='p-2 group-hover:text-white '>1 Unit dengan 60 Tenaga Kerja</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Usaha Toko/Kios</th>
                            <td className='p-2 group-hover:text-white '>208 Unit dengan 416 Tenaga Kerja</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Toko Kelontong</th>
                            <td className='p-2 group-hover:text-white '>4 Unit dengan 16 Tenaga Kerja</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Usaha Peternakan</th>
                            <td className='p-2 group-hover:text-white '>6 Unit dengan 18 Tenaga Kerja</td>
                        </tr>
                        <tr className='sm:text-sm text-xs md:text-lg lg:text-base border-b-2 '>
                            <th className='p-2 group-hover:text-white '>Pengolahan Kayu	</th>
                            <td className='p-2 group-hover:text-white '>1 Unit dengan 3 Tenaga Kerja</td>
                        </tr>
                </table>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KelembagaanMasyarakat