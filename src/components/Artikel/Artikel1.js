import React from 'react'
import Moderasi from "../../Assets/Artikel/Moderasi.JPG"
import Toga from "../../Assets/Artikel/Toga.JPG"
import Posyandu from "../../Assets/Artikel/Posyandu.JPG"
import Latih from "../../Assets/Artikel/Pelatihan.jpg"
import Pembukaan from "../../Assets/Artikel/Pembukaan.JPG"
import { Link } from 'react-router-dom'
const Artikel1 = () => {
  return (
    <div className='max-w-[21rem] sm:max-w-[30rem] md:max-w-[45rem] round m-auto my-10 font-inter lg:flex lg:gap-10 xl:max-w-[75rem] lg:max-w-[60rem]'>
        <div className='pb-5 lg:w-[70%]'>
            <img src={Moderasi} alt="" className=' rounded-lg' />
            <p className='text-sm md:text-base mt-2'> <span className='border-r-2 border-[#a9a9a9] px-2'>Desa Bonto Mate'ne</span> <span className=' border-r-2 border-[#a9a9a9] px-2'> 13 Juli 2023</span></p>
            <h1 className='py-5 text-justify font-bold text-lg hover:text-[#3A5A40] sm:text-xl'>Program Kampung Moderasi Beragama Berbasis Ekonomi Kreatif untuk Kesejahteraan Desa</h1>
            <p className='text-justify text-sm sm:text-base pb-4'>Bonto Mate’ne, 13 Juli 2023 - Kementerian Agama Kab. Maros meluncurkan program inovatif yang menarik perhatian, yaitu "Kampung Moderasi Beragama Berbasis Ekonomi Kreatif". Program ini bertujuan untuk mendorong pemahaman yang lebih baik tentang toleransi beragama, sambil memberikan kesempatan bagi masyarakat desa untuk meningkatkan kesejahteraan mereka melalui beragam kegiatan ekonomi kreatif.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Dalam rangka menyosialisasikan program tersebut, acara "Sosialisasi Penyuluhan Kampung Moderasi Beragama Berbasis Ekonomi Kreatif Desa Bonto Mate'ne Kecamatan Mandai Tahun 2023" diadakan di Dusun Bontoramba, Desa Bonto Mate'ne, Kecamatan Mandai, dan dihadiri oleh berbagai pihak, termasuk Kepala Kementerian Agama Kab. Maros, Camat Mandai, serta Kepala KUA Kecamatan Mandai.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Dalam sambutannya, Kepala Kementerian Agama Kab. Maros menyampaikan tujuan dari program ini adalah untuk mempromosikan moderasi beragama di kalangan masyarakat dan memberikan kesempatan bagi mereka untuk berpartisipasi dalam kegiatan ekonomi kreatif. Dengan mendukung kreativitas dan kewirausahaan masyarakat, diharapkan dapat menciptakan dampak positif bagi perekonomian desa dan meningkatkan kesejahteraan masyarakat secara keseluruhan. Camat Mandai juga memberikan dukungan penuh terhadap program ini. Beliau menyatakan bahwa kerukunan beragama merupakan aset berharga bagi keberlangsungan dan kemajuan desa, serta mengapresiasi langkah Kementerian Agama dalam memadukan moderasi beragama dengan upaya pemberdayaan ekonomi kreatif.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Dalam rangka menyosialisasikan program tersebut, acara "Sosialisasi Penyuluhan Kampung Moderasi Beragama Berbasis Ekonomi Kreatif Desa Bonto Mate'ne Kecamatan Mandai Tahun 2023" diadakan di Dusun Bontoramba, Desa Bonto Mate'ne, Kecamatan Mandai, dan dihadiri oleh berbagai pihak, termasuk Kepala Kementerian Agama Kab. Maros, Camat Mandai, serta Kepala KUA Kecamatan Mandai.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Program ini juga mencakup pembentukan kelompok-kelompok kreatif berbasis agama, di mana warga dari berbagai agama dan keyakinan dapat bersama-sama mengembangkan usaha yang saling mendukung. Hal ini diharapkan dapat mempererat hubungan sosial di desa dan meningkatkan rasa kebersamaan.</p>
        </div>
        <div className='lg:w-[30%]'>
            <h1 className='font-bold text-lg border-b-4 border-[#00FF47] w-32 pb-1 '>Berita Lainnya</h1>
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
                <img src={Latih} alt="" className='object-cover w-32 rounded-l-lg ' />
                <h1 className='text-sm md:text-base lg:text-sm px-1 font-bold group-hover:text-white'><Link to="/Artikel-4">UPT Puskesmas Mandai Berikan Pelatihan Gerakan Kegiatan Posyandu Kepada Para Kader Posyandu</Link></h1>
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

export default Artikel1