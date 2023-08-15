import React from 'react'
import Moderasi from "../../Assets/Artikel/Moderasi.JPG"
import Toga from "../../Assets/Artikel/Toga.JPG"
import Posyandu from "../../Assets/Artikel/Posyandu.JPG"
import Latih from "../../Assets/Artikel/Pelatihan.jpg"
import Pembukaan from "../../Assets/Artikel/Pembukaan.JPG"
import { Link } from 'react-router-dom'

const CardKegiatan = () => {
  return (
    <div className=''>
        <div className='w-[20rem] md:w-[45rem] lg:w-[50rem] m-auto shadow-lg my-5 rounded-lg font-inter md:flex hover:bg-[#588157] group'>
          <img src={Moderasi} alt="" className=' md:rounded-l-lg md:rounded-none rounded-t-lg md:w-[15rem] object-cover' />
          <div className='py-2 px-6 group-hover:text-white'>
              <h1 className=' text-base font-bold'>Program Kampung Moderasi Beragama Berbasis Ekonomi Kreatif untuk Kesejahteraan Desa</h1>
              <p className='text-justify text-sm py-4 md:py-2 md:text-sm'>Kementerian Agama Kab. Maros meluncurkan program "Kampung Moderasi Beragama Berbasis Ekonomi Kreatif" untuk meningkatkan toleransi beragama dan kesejahteraan masyarakat desa. Sosialisasi di Desa Bonto Mate'ne, Kecamatan Mandai, dihadiri oleh berbagai pihak termasuk Kepala Kementerian Agama Kab. Maros, Camat Mandai, dan Kepala KUA Kecamatan Mandai.</p>
              <div className='flex justify-between'>
                  <div>
                  </div>
                  <button className='text-white  text-sm bg-[#588157] group-hover:bg-white group-hover:text-[#588157] py-2 px-2 font-semibold rounded-lg mb-1'> <Link to="/Artikel-1">Lebih Lengkap</Link> </button>
              </div>
          </div>
      </div>

      <div className='w-[20rem] md:w-[45rem] lg:w-[50rem] m-auto shadow-lg my-5 rounded-lg font-inter md:flex hover:bg-[#588157] group'>
          <img src={Toga} alt="" className=' md:rounded-l-lg md:rounded-none rounded-t-lg md:w-[15rem] object-cover' />
          <div className='py-2 px-6 group-hover:text-white'>
              <h1 className=' text-base font-bold'>KKNT Gel.110 Universitas Hasanuddin Kembangkan Desa Bonto Mate’ne Jadi Desa Agrowisata</h1>
              <p className='text-justify text-sm py-4 md:py-2 md:text-sm'>Mahasiswa KKNT Gel. 110 Universitas Hasanuddin melakukan penanaman Tanaman Obat Keluarga (TOGA) di Desa Bonto Mate’ne, Maros, sebagai bagian dari program pengembangan pariwisata. Dengan fokus pada penanaman tanaman obat keluarga, mahasiswa berharap meningkatkan kesehatan masyarakat setempat dan memperkenalkan potensi sumber daya alam desa kepada wisatawan.</p>
              <div className='flex justify-between'>
                  <div>
                  </div>
                  <button className='text-white  text-sm bg-[#588157] group-hover:bg-white group-hover:text-[#588157] py-2 px-2 font-semibold rounded-lg mb-1'> <Link to="/Artikel-2">Lebih Lengkap</Link> </button>
              </div>
          </div>
      </div>

      <div className='w-[20rem] md:w-[45rem] lg:w-[50rem] m-auto shadow-lg my-5 rounded-lg font-inter md:flex hover:bg-[#588157] group'>
          <img src={Posyandu} alt="" className=' md:rounded-l-lg md:rounded-none rounded-t-lg md:w-[15rem] object-cover' />
          <div className='py-2 px-6 group-hover:text-white'>
              <h1 className=' text-base font-bold'>Kegiatan Posyandu Bayi dan Balita di Dusun Barambang, Desa Bonto Mate’ne, Kab. Maros</h1>
              <p className='text-justify text-sm py-4 md:py-2 md:text-sm'>Dusun Barambang, Desa Bonto Mate'ne, Kabupaten Maros, telah melaksanakan kegiatan Posyandu Bayi dan Balita untuk memantau pertumbuhan dan memberikan layanan kesehatan kepada bayi dan balita. Kegiatan ini mencakup penimbangan berat badan, pengukuran tinggi badan, pemeriksaan status gizi, serta pemberian imunisasi.</p>
              <div className='flex justify-between'>
                  <div>
                  </div>
                  <button className='text-white  text-sm bg-[#588157] group-hover:bg-white group-hover:text-[#588157] py-2 px-2 font-semibold rounded-lg mb-1'> <Link to="/Artikel-3">Lebih Lengkap</Link> </button>
              </div>
          </div>
      </div>

      <div className='w-[20rem] md:w-[45rem] lg:w-[50rem] m-auto shadow-lg my-5 rounded-lg font-inter md:flex hover:bg-[#588157] group'>
          <img src={Latih} alt="" className=' md:rounded-l-lg md:rounded-none rounded-t-lg md:w-[15rem] object-cover' />
          <div className='py-2 px-6 group-hover:text-white'>
              <h1 className=' text-base font-bold'>UPT Puskesmas Mandai Berikan Pelatihan Gerakan Kegiatan Posyandu Kepada Para Kader Posyandu</h1>
              <p className='text-justify text-sm py-4 md:py-2 md:text-sm'>UPT Puskesmas Mandai mengadakan pelatihan gerakan kegiatan Posyandu untuk kader Posyandu, memberikan pengetahuan dan keterampilan untuk melakukan pemeriksaan kesehatan mata, telinga, tinggi dan berat badan, serta masalah kesehatan lainnya, dengan tujuan meningkatkan layanan kesehatan masyarakat di Desa Bonto Mate’ne.</p>
              <div className='flex justify-between'>
                  <div>
                  </div>
                  <button className='text-white  text-sm bg-[#588157] group-hover:bg-white group-hover:text-[#588157] py-2 px-2 font-semibold rounded-lg mb-1'> <Link to="/Artikel-4">Lebih Lengkap</Link> </button>
              </div>
          </div>
      </div>

      <div className='w-[20rem] md:w-[45rem] lg:w-[50rem] m-auto shadow-lg my-5 rounded-lg font-inter md:flex hover:bg-[#588157] group'>
          <img src={Pembukaan} alt="" className=' md:rounded-l-lg md:rounded-none rounded-t-lg md:w-[15rem] object-cover' />
          <div className='py-2 px-6 group-hover:text-white'>
              <h1 className=' text-base font-bold'>Mempererat Silaturahmi, Desa Bonto Mate’ne Meriahkan HUT RI 17 Agustus dengan Berbagai Lomba</h1>
              <p className='text-justify text-sm py-4 md:py-2 md:text-sm'>Desa Bonto Mate'ne merayakan Hari Kemerdekaan dengan lomba-lomba yang mempererat silaturahmi. Kegiatan lomba dibuka oleh Kepala Desa dan Kepala Dusun Bontoramba yang menekankan pentingnya persaudaraan dan kebersamaan dalam acara yang mengutamakan semangat kompetisi yang sehat.</p>
              <div className='flex justify-between'>
                  <div>
                  </div>
                  <button className='text-white  text-sm bg-[#588157] group-hover:bg-white group-hover:text-[#588157] py-2 px-2 font-semibold rounded-lg mb-1'> <Link to="/Artikel-5">Lebih Lengkap</Link> </button>
              </div>
          </div>
      </div>
</div>
    
  )
}

export default CardKegiatan