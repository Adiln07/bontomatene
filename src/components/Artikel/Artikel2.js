import React from 'react'
import Moderasi from "../../Assets/Artikel/Moderasi.JPG"
import Toga from "../../Assets/Artikel/Toga.JPG"
import Posyandu from "../../Assets/Artikel/Posyandu.JPG"
import Latih from "../../Assets/Artikel/Pelatihan.jpg"
import Pembukaan from "../../Assets/Artikel/Pembukaan.JPG"
import { Link } from 'react-router-dom'
const Artikel2 = () => {
  return (
    <div className='max-w-[21rem] sm:max-w-[30rem] md:max-w-[45rem] round m-auto my-10 font-inter lg:flex lg:gap-10 xl:max-w-[75rem] lg:max-w-[60rem]'>
        <div className='pb-5 lg:w-[70%]'>
            <img src={Toga} alt="" className=' rounded-lg' />
            <p className='text-sm md:text-base mt-2'> <span className='border-r-2 border-[#a9a9a9] px-2'>Desa Bonto Mate'ne</span> <span className=' border-r-2 border-[#a9a9a9] px-2'> 20 Juli 2023</span></p>
            <h1 className='py-5 text-justify font-bold text-lg hover:text-[#3A5A40] sm:text-xl'>KKNT Gel.110 Universitas Hasanuddin Kembangkan Desa Bonto Mate’ne Jadi Desa Agrowisata</h1>
            <p className='text-justify text-sm sm:text-base pb-4'>Bonto Mate’ne, 20 Juli 2023 - Mahasiswa Kuliah Kerja Nyata Tematik (KKNT) Gelombang 110 Universitas Hasanuddin (UNHAS) Pengembangan Pariwisata Bantimurung, Kabupaten Maros, Kecamatan Mandai, Desa Bonto Mate’ne melakukan penanaman Tanaman Obat Keluarga (TOGA) di Pos Kesehatan Desa sebagai salah satu program kerja mereka.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Desa Bonto Mate’ne memiliki potensi alam yang kaya, seperti lahan pertanian yang luas, yang menjadi modal utama mahasiswa KKNT mengembangkan desa sebagai desa agrowisata yang menarik dengan fokus pada penanaman tanaman obat keluarga. "Penanaman tanaman obat keluarga ini bertujuan untuk meningkatkan kesehatan masyarakat setempat serta memperkenalkan potensi sumber daya alam yang dimiliki Desa Bonto Mate’ne kepada wisatawan," ungkap Koordinator Posko 10 KKNT Gel.110 UNHAS, Dzaky.</p>
            <p className='text-justify text-sm sm:text-base pb-4'>Hasil dari kegiatan KKNT ini tidak hanya berdampak positif pada sektor pertanian dan pariwisata, tetapi juga meningkatkan hubungan sosial antara mahasiswa dan masyarakat desa. Diharapkan kolaborasi ini dapat berlanjut dalam bentuk kegiatan lain yang dapat membawa perubahan positif bagi desa dan mahasiswa. "Kami berharap pengembangan desa ini akan memberikan dampak positif dalam menarik minat wisatawan untuk datang dan menikmati keindahan alam serta manfaat tanaman obat keluarga," pesan Dzaky.</p>
        </div>
        <div className='lg:w-[30%]'>
            <h1 className='font-bold text-lg border-b-4 border-[#00FF47] w-32 pb-1 '>Berita Lainnya</h1>
            <div className='w-full mt-5 flex sm:gap-4 items-center rounded-lg shadow-sm group hover:bg-[#3A5A40]'>
                <img src={Moderasi} alt="" className='object-cover w-32 rounded-l-lg ' />
                <h1 className='text-sm md:text-base lg:text-sm px-1 font-bold group-hover:text-white'><Link to="/Artikel-1">Program Kampung Moderasi Beragama Berbasis Ekonomi Kreatif untuk Kesejahteraan Desa</Link></h1>
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

export default Artikel2