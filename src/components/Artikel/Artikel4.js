import React from 'react'
import Moderasi from "../../Assets/Artikel/Moderasi.JPG"
import Toga from "../../Assets/Artikel/Toga.JPG"
import Posyandu from "../../Assets/Artikel/Posyandu.JPG"
import Latih from "../../Assets/Artikel/Pelatihan.jpg"
import Pembukaan from "../../Assets/Artikel/Pembukaan.JPG"
import { Link } from 'react-router-dom'

const Artikel4 = () => {
  return (
    <div className='max-w-[21rem] sm:max-w-[30rem] md:max-w-[45rem] round m-auto my-10 font-inter lg:flex lg:gap-10 xl:max-w-[75rem] lg:max-w-[60rem]'>
        <div className='pb-5 lg:w-[70%]'>
            <img src={Latih} alt="" className=' rounded-lg' />
            <p className='text-sm md:text-base mt-2'> <span className='border-r-2 border-[#a9a9a9] px-2'>Dusun Borongloe, Desa Bonto Mate'ne</span> <span className=' border-r-2 border-[#a9a9a9] px-2'> 18 Juli 2023</span></p>
            <h1 className='py-5 text-justify font-bold text-lg hover:text-[#3A5A40] sm:text-xl'>UPT Puskesmas Mandai Berikan Pelatihan Gerakan Kegiatan Posyandu Kepada Para Kader Posyandu</h1>
            <p className='text-justify text-sm sm:text-base pb-4'>Bonto Mate’ne, 18 Juli 2023 - Dalam rangka mengoptimalkan pelayanan kesehatan dasar di Desa Bonto Mate’ne, Unit Pelaksana Teknis (UPT) Pusat Kesehatan Masyarakat (Puskesmas) Mandai telah melaksanakan pelatihan yang difokuskan pada gerakan kegiatan Posyandu dan ditujukan kepada para kader Posyandu keempat dusun. Pelatihan ini dilaksanakan di rumah Kepala Desa Bonto Mate’ne, yang terletak di Dusun Borongloe, Desa Bonto Mate'ne, Kecamatan Mandai, Kabupaten Maros.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Dalam pelatihan ini, kader diberikan pengetahuan dan keterampilan untuk melakukan pemeriksaan kesehatan mata, telinga, tinggi dan berat badan, serta mendeteksi masalah kesehatan lainnya. Para kader Posyandu memiliki peran yang sangat penting dalam pelayanan kesehatan masyarakat. Dengan pengetahuan dan keterampilan yang tepat, kader Posyandu dapat memberikan informasi yang akurat kepada masyarakat, melakukan pemeriksaan kesehatan rutin, dan memberikan langkah-langkah pencegahan serta rujukan bila diperlukan.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Dalam pelatihan ini, para kader Posyandu dilatih untuk melakukan deteksi dini masalah kesehatan. Pemeriksaan mata dan telinga yang cermat menjadi bagian penting dari upaya ini. Dengan adanya pelatihan ini, kader Posyandu dapat lebih akurat dalam mendeteksi gangguan penglihatan atau pendengaran.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Pengukuran tinggi dan berat badan juga menjadi fokus utama. Kader dilatih untuk melakukan pengukuran dengan benar dan membandingkan data pertumbuhan dengan standar yang ada. Ini membantu dalam memantau pertumbuhan masyarakat dan mengidentifikasi masalah gizi atau pertumbuhan yang tidak normal. Diharapkan bahwa pelatihan ini akan membawa dampak positif pada kualitas pelayanan kesehatan masyarakat di Desa Bonto Mate’ne. Para kader Posyandu yang terlatih akan mampu memberikan layanan yang lebih baik dan lebih tepat sasaran.
</p>
        </div>
        <div className='lg:w-[30%]'>
            <h1 className='font-bold text-lg border-b-4 border-[#00FF47] w-32 pb-1 '>Berita Lainnya</h1>
            <div className='w-full mt-5 flex sm:gap-4 items-center rounded-lg shadow-sm group hover:bg-[#3A5A40]'>
                <img src={Moderasi} alt="" className='object-cover w-32 rounded-l-lg ' />
                <h1 className='text-sm md:text-base lg:text-sm px-1 font-bold group-hover:text-white'><Link to="/Artikel-1">Program Kampung Moderasi Beragama Berbasis Ekonomi Kreatif untuk Kesejahteraan Desa</Link></h1>
            </div>
            <hr className='w-full border-b-2 my-5 border-[#a9a9a9]'/>
            <div className='w-full mt-5 flex sm:gap-4 items-center rounded-lg shadow-sm group hover:bg-[#3A5A40]'>
                <img src={Toga} alt="" className='object-cover w-32 rounded-l-lg ' />
                <h1 className='text-sm md:text-base lg:text-sm px-1 font-bold group-hover:text-white'><Link to="/Artikel-2">KKNT Gel.110 Universitas Hasanuddin Kembangkan Desa Bonto Mate’ne Jadi Desa Agrowisata</Link></h1>
            </div>
            <hr className='w-full border-b-2 my-5 border-[#a9a9a9]'/>
            <div className='w-full mt-5 flex sm:gap-4 items-center rounded-lg shadow-sm group hover:bg-[#3A5A40]'>
                <img src={Posyandu} alt="" className='object-cover w-32 rounded-l-lg ' />
                <h1 className='text-sm md:text-base lg:text-sm px-1 font-bold group-hover:text-white'><Link to="/Artikel-3">Kegiatan Posyandu Bayi dan Balita di Dusun Barambang, Desa Bonto Mate’ne, Kab. Maros</Link></h1>
            </div>
            <hr className='w-full border-b-2 my-5 border-[#a9a9a9]'/>
            <div className='w-full mt-5 flex sm:gap-4 items-center rounded-lg shadow-sm group hover:bg-[#3A5A40]'>
                <img src={Pembukaan} alt="" className='object-cover w-32 rounded-l-lg ' />
                <h1 className='text-sm md:text-base lg:text-sm px-1 font-bold group-hover:text-white'><Link to="/Artikel-5">Mempererat Silaturahmi, Desa Bonto Mate’ne Meriahkan HUT RI 17 Agustus dengan Berbagai Lomba</Link></h1>
            </div>
            <hr className='w-full border-b-2 my-5 border-[#a9a9a9]'/>
        </div>
    </div>
  )
}

export default Artikel4