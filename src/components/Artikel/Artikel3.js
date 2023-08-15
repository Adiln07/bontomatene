import React from 'react'
import Moderasi from "../../Assets/Artikel/Moderasi.JPG"
import Toga from "../../Assets/Artikel/Toga.JPG"
import Posyandu from "../../Assets/Artikel/Posyandu.JPG"
import Latih from "../../Assets/Artikel/Pelatihan.jpg"
import Pembukaan from "../../Assets/Artikel/Pembukaan.JPG"
import { Link } from 'react-router-dom'

const Artikel3 = () => {
  return (
    <div className='max-w-[21rem] sm:max-w-[30rem] md:max-w-[45rem] round m-auto my-10 font-inter lg:flex lg:gap-10 xl:max-w-[75rem] lg:max-w-[60rem]'>
        <div className='pb-5 lg:w-[70%]'>
            <img src={Posyandu} alt="" className=' rounded-lg' />
            <p className='text-sm md:text-base mt-2'> <span className='border-r-2 border-[#a9a9a9] px-2'>Dusun Barambang, Desa Bonto Mate'ne</span> <span className=' border-r-2 border-[#a9a9a9] px-2'> 8 Agustus 2023</span></p>
            <h1 className='py-5 text-justify font-bold text-lg hover:text-[#3A5A40] sm:text-xl'>Kegiatan Posyandu Bayi dan Balita di Dusun Barambang, Desa Bonto Mate’ne, Kab. Maros</h1>
            <p className='text-justify text-sm sm:text-base pb-4'>Bonto Mate’ne, 8 Agustus 2023 - Dalam upaya nyata untuk memastikan pertumbuhan dan perkembangan yang sehat bagi bayi dan balita, Dusun Barambang, yang terletak di Desa Bonto Mate'ne, Kecamatan Mandai, Kabupaten Maros, telah menggelar kegiatan Posyandu Bayi dan Balita. Kegiatan ini bertujuan untuk memberikan pelayanan kepada bayi dan balita dengan melakukan penimbangan agar bisa dipantau pertumbuhan dan perkembangan bayi dan balita.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Kegiatan Posyandu Bayi dan Balita ini meliputi aspek pelayanan yang penting bagi tumbuh kembang anak, termasuk penimbangan berat badan, pengukuran tinggi badan, pemeriksaan status gizi, serta pemberian imunisasi. Melalui kegiatan ini, masyarakat bekerja sama dengan tenaga kesehatan untuk mengoptimalkan perawatan anak-anak mereka.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Kegiatan Posyandu di Dusun Barambang ini dilaksanakan setiap bulan dengan melibatkan peran aktif dari tenaga kesehatan. Mereka berperan dalam memberikan pelayanan medis serta edukasi kepada para orang tua tentang pentingnya pola hidup sehat dan perawatan bayi dan balita  yang benar. Selain itu, kegiatan ini juga menjadi forum yang baik untuk bertukar informasi dan pengalaman antar orang tua, yang dapat berdampak positif pada pemahaman tentang kesehatan anak-anak.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Dengan adanya kegiatan Posyandu Bayi dan Balita di Dusun Barambang, diharapkan bahwa anak-anak usia dini di wilayah tersebut dapat tumbuh dan berkembang dengan baik, terhindar dari penyakit yang dapat dicegah, serta memiliki akses terhadap pelayanan kesehatan yang memadai.</p>
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

export default Artikel3