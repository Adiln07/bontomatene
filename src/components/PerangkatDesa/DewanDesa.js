import React from 'react'
import Azis from "../../Assets/BPD/Azis.jpeg"
import Anwar from "../../Assets/BPD/Anwar.jpeg"
import Uding from "../../Assets/BPD/udi.jpeg"
import Jabar from "../../Assets/BPD/Jabar.jpeg"
import Sangkala from "../../Assets/BPD/Sangkala.jpeg"
import Toro from "../../Assets/BPD/Toro.jpeg"
import Ratnah from "../../Assets/BPD/ratnah.jpeg"
import Nopic from "../../Assets/BPD/nopic.jpg"
import Rusdi from "../../Assets/BPD/rusdi.jpeg"
const DewanDesa = () => {
  return (
    <div>
        <div className='relative z-[-100000] font-inter max-w-[25rem] sm:max-w-[40rem] md:max-w-[45rem] lg:max-w-[60rem] m-auto'>
        <div className='py-10'>
            <h1 className='font-bold text-lg lg:text-2xl'>Badan Permusyawaratan Desa (BPD) </h1>

            <div className='pt-5'>
                <table className='table-auto w-full text-center border-2'>
                <tr>
                    <th className='border-2 text-sm lg:text-lg  '>No.</th>
                    <th className='border-2 text-sm lg:text-lg  '>Foto</th>
                    <th className='border-2 text-sm lg:text-lg  '>Nama</th>
                    <th className='border-2 text-sm lg:text-lg  '>Jabatan</th>
                </tr>
                <tr>
                    <td className='text-sm lg:text-lg border-2'>1</td>
                    <td className='border-2'> <img src={Azis} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-sm lg:text-lg   border-2'>ABD. AZIS, SH
</td>
                    <td className='text-sm lg:text-lg   italic border-2'>Ketua</td>
                </tr>
                <tr>
                    <td className='text-sm lg:text-lg   border-2'>2</td>
                    <td className='border-2'> <img src={Anwar} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-sm lg:text-lg   border-2'>A. ANWAR PATTAWARI, S.SOS
</td>
                    <td className='text-sm lg:text-lg   italic border-2'>Wakil Ketua</td>
                </tr>

                <tr>
                    <td className='text-sm lg:text-lg   border-2'>3</td>
                    <td className='border-2'> <img src={Uding} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-sm lg:text-lg   border-2'>WAHYUDI</td>
                    <td className='text-sm lg:text-lg   italic border-2'>Sekertaris</td>
                </tr>

                <tr>
                    <td className='text-xs lg:text-lg   border-2'>4</td>
                    <td className='border-2'> <img src={Jabar} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>H. JABBAR</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Anggota</td>
                </tr>

                <tr>
                    <td className='text-xs lg:text-lg   border-2'>5</td>
                    <td className='border-2'> <img src={Sangkala} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>H. SANGKALA</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Anggota</td>
                </tr>
                
                <tr>
                    <td className='text-xs lg:text-lg   border-2'>6</td>
                    <td className='border-2'> <img src={Toro} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>H. HAMA DG. TORO</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Anggota</td>
                </tr>

                <tr>
                    <td className='text-xs lg:text-lg   border-2'>7</td>
                    <td className='border-2'> <img src={Ratnah} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>HJ. RATNAH</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Anggota</td>
                </tr>
                
                <tr>
                    <td className='text-xs lg:text-lg   border-2'>8</td>
                    <td className='border-2'> <img src={Nopic} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>TAJUDIN</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Anggota</td>
                </tr>

                <tr>
                    <td className='text-xs lg:text-lg   border-2'>9</td>
                    <td className='border-2'> <img src={Rusdi} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>RUSDI</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Anggota</td>
                </tr>   
                </table>
                <h1 className='text-end pt-2 sm:text-xs text-[.7rem]'>Assets from <span className='italic font-bold'>KKNT GEL. 108 UNHAS</span></h1>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default DewanDesa