import React from 'react'
import Moderasi from "../../Assets/Artikel/Moderasi.JPG"
import Toga from "../../Assets/Artikel/Toga.JPG"
import Posyandu from "../../Assets/Artikel/Posyandu.JPG"
import Latih from "../../Assets/Artikel/Pelatihan.jpg"
import Pembukaan from "../../Assets/Artikel/Pembukaan.JPG"
import { Link } from 'react-router-dom'

const Artikel5 = () => {
  return (
    <div className='max-w-[21rem] sm:max-w-[30rem] md:max-w-[45rem] round m-auto my-10 font-inter lg:flex lg:gap-10 xl:max-w-[75rem] lg:max-w-[60rem]'>
        <div className='pb-5 lg:w-[70%]'>
            <img src={Pembukaan} alt="" className=' rounded-lg' />
            <p className='text-sm md:text-base mt-2'> <span className='border-r-2 border-[#a9a9a9] px-2'>Dusun Borongloe, Desa Bonto Mate'ne</span> <span className=' border-r-2 border-[#a9a9a9] px-2'> 13 Agustus 2023</span></p>
            <h1 className='py-5 text-justify font-bold text-lg hover:text-[#3A5A40] sm:text-xl'>Mempererat Silaturahmi, Desa Bonto Mate’ne Meriahkan HUT RI 17 Agustus dengan Berbagai Lomba</h1>
            <p className='text-justify text-sm sm:text-base pb-4'>Bonto Mate'ne, 13 Agustus 2023 - Dalam rangka merayakan HUT RI 17 Agustus, Desa Bonto Mate'ne menggelar lomba-lomba seru dari tanggal 13-20 Agustus 2023 untuk mempererat tali silaturahmi antar warganya. Kegiatan ini diadakan di lapangan samping rumah kepala desa, dengan antusiasme yang tinggi dari seluruh masyarakat desa.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Sebelum pembukaan dimulai, masyarakat desa terlebih dahulu melakukan senam bersama. Senam ini diharapkan tidak hanya sebagai pemanasan fisik, tetapi juga sebagai momen untuk bersama-sama merasakan semangat kebersamaan. Setelah senam, kegiatan pembukaan pun dimulai dengan sambutan hangat dari Kepala Desa Bonto Mate'ne, yang secara tegas mengingatkan tentang pentingnya semangat nasionalisme dan kebersamaan dalam membangun masyarakat yang kuat dan bersatu.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Selanjutnya, lomba pun dibuka oleh Kepala Dusun Bontoramba. "Melalui kompetisi ini, kami ingin menekankan bahwa perlombaan ini bertujuan untuk mempererat silaturahmi dan menjalin keakraban di antara kita semua," ujar Kepala Dusun Bontoramba. Setelah pembukaan, akhirnya tiba saatnya untuk memulai serangkaian lomba yang telah dinantikan. Lomba pertama adalah lomba voli putri, di mana tim-tim dari berbagai kelompok masyarakat desa saling bertanding dengan semangat tinggi. Lomba ini tidak hanya menguji kemampuan fisik, tetapi juga kerja tim dan strategi dalam permainan.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Selanjutnya, lomba panjat pinang mempertunjukkan ketangguhan dan kelincahan pesertanya. Acara ini penuh tawa dan sorak sorai, di mana peserta berjuang untuk meraih hadiah yang tergantung di puncak tiang pinang dengan cara yang kreatif dan penuh semangat. Tidak ketinggalan, lomba balap karung untuk anak-anak dan ibu-ibu menyatukan generasi muda dan dewasa dalam kompetisi yang penuh keceriaan. Selain memberikan hiburan, lomba ini juga menjadi wadah bagi semua anggota keluarga untuk saling mendukung dan menghibur satu sama lain.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Perlombaan-perlombaan ini tidak hanya tentang meraih kemenangan, tetapi juga tentang merayakan persaudaraan dan persatuan. Di tengah kesibukan dan tantangan kehidupan modern, acara semacam ini menjadi momen penting untuk merekatkan hubungan antara masyarakat Desa Bonto Mate'ne.</p>
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
                <img src={Latih} alt="" className='object-cover w-32 rounded-l-lg ' />
                <h1 className='text-sm md:text-base lg:text-sm px-1 font-bold group-hover:text-white'><Link to="/Artikel-4">UPT Puskesmas Mandai Berikan Pelatihan Gerakan Kegiatan Posyandu Kepada Para Kader Posyandu</Link></h1>
            </div>
            <hr className='w-full border-b-2 my-5 border-[#a9a9a9]'/>
        </div>
    </div>
  )
}

export default Artikel5