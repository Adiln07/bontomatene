import React from 'react'
import Kepala from "../../Assets/kepaladesa.jpeg"
import Sekertaris from "../../Assets/StrukturDesa/Ikhwan.jpeg"
import Barambang from '../../Assets/StrukturDesa/AbuBakar.jpeg'
import Bentenge from "../../Assets/StrukturDesa/DgNgalle.jpeg"
import BontoRamba from "../../Assets/StrukturDesa/Jumaing.jpeg"
import Borongloe from "../../Assets/StrukturDesa/Syamsul.jpeg"
import Rosnaini from "../../Assets/StrukturDesa/Rosnaini.jpeg"
import Kasmawati from "../../Assets/StrukturDesa/Kasmawati.jpg"
import Aminah from "../../Assets/StrukturDesa/Aminah.jpeg"
import Asriani from "../../Assets/StrukturDesa/Asyriani.jpeg"
import Aisyah from "../../Assets/StrukturDesa/Aisyah.jpeg"
import Rezki from "../../Assets/StrukturDesa/Rezki.jpeg"
const StrukturDesa = () => {

  return (
    <div className='relative z-[-100000] font-inter max-w-[25rem] sm:max-w-[40rem] md:max-w-[45rem] lg:max-w-[60rem] m-auto'>
        <div className='py-10'>
            <h1 className='font-bold text-lg lg:text-2xl'>Struktur Desa Bonto Mate'ne </h1>

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
                    <td className='border-2'> <img src={Kepala} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-sm lg:text-lg   border-2'>H. SAHRUL</td>
                    <td className='text-sm lg:text-lg   italic border-2'>Kepala Desa</td>
                </tr>
                <tr>
                    <td className='text-sm lg:text-lg   border-2'>2</td>
                    <td className='border-2'> <img src={Sekertaris} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-sm lg:text-lg   border-2'>MUH. IKHWAN ISMAIL</td>
                    <td className='text-sm lg:text-lg   italic border-2'>Sekertaris Desa</td>
                </tr>

                <tr>
                    <td className='text-sm lg:text-lg   border-2'>3</td>
                    <td className='border-2'> <img src={Barambang} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-sm lg:text-lg   border-2'>H. ABU BAKAR</td>
                    <td className='text-sm lg:text-lg   italic border-2'>Kepala Dusun Barambang</td>
                </tr>

                <tr>
                    <td className='text-xs lg:text-lg   border-2'>4</td>
                    <td className='border-2'> <img src={Bentenge} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>TOLA DG. NGALLE</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Kepala Dusun Bentenge</td>
                </tr>

                <tr>
                    <td className='text-xs lg:text-lg   border-2'>5</td>
                    <td className='border-2'> <img src={BontoRamba} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>H. JUMAING</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Kepala Dusun Bontoramba</td>
                </tr>
                
                <tr>
                    <td className='text-xs lg:text-lg   border-2'>6</td>
                    <td className='border-2'> <img src={Borongloe} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>SYAMSUL BAHRI</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Kepala Dusun Borongloe</td>
                </tr>

                <tr>
                    <td className='text-xs lg:text-lg   border-2'>7</td>
                    <td className='border-2'> <img src={Rosnaini} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>ROSNAINI</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Kasi Pemerintahan</td>
                </tr>
                
                <tr>
                    <td className='text-xs lg:text-lg   border-2'>8</td>
                    <td className='border-2'> <img src={Kasmawati} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>KASMAWATI</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Kasi Kesejahteraan & Pelayanan</td>
                </tr>

                <tr>
                    <td className='text-xs lg:text-lg   border-2'>9</td>
                    <td className='border-2'> <img src={Aminah} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>ST. AMINAH</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Kaur Umum & Perencanaan</td>
                </tr>

                <tr>
                    <td className='text-xs lg:text-lg   border-2'>10</td>
                    <td className='border-2'> <img src={Asriani} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>ASRIANI</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Kaur Keuangan</td>
                </tr>

                <tr>
                    <td className='text-xs lg:text-lg   border-2'>11</td>
                    <td className='border-2'> <img src={Aisyah} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>AISYAH ASYURA</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Staff Kasi Kesejahteraan & Pelayanan</td>
                </tr>

                <tr>
                    <td className='text-xs lg:text-lg   border-2'>12</td>
                    <td className='border-2'> <img src={Rezki} alt="" className='object-cover md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] lg:w-[10rem] lg:h-[10rem]   py-1 m-auto' /></td>
                    <td className='font-bold text-xs lg:text-lg   border-2'>REZKI PERTIWI VIRGANITA</td>
                    <td className='text-xs lg:text-lg   italic border-2'>Staff Kaur Keuangan</td>
                </tr>
                </table>
                <h1 className='text-end pt-2 sm:text-xs text-[.7rem]'>Assets from <span className='italic font-bold'>KKNT GEL. 108 UNHAS</span></h1>
            </div>
        </div>
        
    </div>
  )
}

export default StrukturDesa