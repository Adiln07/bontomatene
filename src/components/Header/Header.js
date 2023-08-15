import React from 'react'
import Maros from '../../Assets/Maros.PNG'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

  const [heading, setHeading] = useState("");

  const links = [
    {
      name: "Perangkat Desa", 
      submenu:true, 
      sublinks:[
      {
        sublink:[
          {name: "Struktur Desa", link:"/StrukturDesa"},
          {name: "BPD", link:"/DewanDesa"},
          {name: "Ketua RT", link:"/KetuaRt"},
        ]
      }
    ], 
    },
    {
      name: "Potensi Desa",
      submenu:true, 
      sublinks:[
      {
        sublink:[
          {name: "Pertanian", link:"/SektorPertanian"},
          {name: "Peternakan", link:"/SektorPeternakan"},
          {name: "Perikanan", link:"/SektorPerikanan"},
          {name: "Sumber Daya Alam ", link:"/SumberDayaAlam"},
          {name: "Sumber Daya Air", link:"/SumberDayaAir"},
          {name: "Kelembagaan Masyarakat", link:"/KelembagaanMasyarakat"},
        ]
      }
    ],
    },

]

const [open, setOpen] = useState(false)
  return (

    <div> 
      <div className=' w-full h-20 bg-[#3A5A40] z-50 fixed flex font-inter items-center justify-between '>
        <div className='flex z-50 justify-between items-center  w-full lg:w-auto'>
          <div className='flex items-center gap-4'>
            <img src={Maros} alt="" className='lg:w-14 xl:w-16 ml-4  w-12' />
            <Link to="/">
              <h1 className='font-bold text-white xl:text-lg lg:text-sm md:cursor-pointer'>Desa <br /> Bonto Mate'ne</h1>
            </Link>
          </div>
          
          <div className="lg:hidden text-3xl text-white pr-5" onClick={()=>setOpen(!open)}>
            <ion-icon name={`${open ? 'close' : 'menu' }`} ></ion-icon>
          </div>
        </div>

      <ul className='lg:flex hidden items-center text-white font-bold'>
        <li>
          <Link className='pr-10' to="/">Beranda</Link>
        </li>
        <li>
          <Link className='pr-10' to="/ProfileDesa">Profile Desa</Link>
        </li>
        <li>
          <Link className='pr-10' to="/SaranaPrasarana">Sarana Dan Prasarana</Link>
        </li>
        <li>  
          <Link className='pr-10' to="/DataKependudukan">Data Kependudukan</Link>
        </li>
        {
          links.map((link)=>(
            <li className='group lg:cursor-pointer lg:py-10'>
              <h1 to={link.link} className='pr-10'> {link.name}</h1>
              {link.submenu && (
              <div className='absolute hidden top-20  group-hover:lg:block hover:lg:block '>
                <div className=''>
                  <div className='py-3'>
                    <div className='w-4 h-4 left-3 absolute mt-1 bg-[#3A5A40] rotate-45'></div>
                  </div>
                  <div className='bg-[#3A5A40] p-3.5'>
                    {
                      link.sublinks.map((mysublinks)=>(
                        <div>
                          {mysublinks.sublink.map(slink =>(
                            <li className='text-sm my-2.5 py-1'>
                              <Link to={slink.link} className='hover:text-[#00ff26]'>{slink.name}</Link>
                            </li>
                          ))}
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div> 
              )} 
            </li>
          ))
        }
      </ul>

      {/* Mobile */}
      <ul className={`
        lg:hidden bg-[#3A5A40] absolute w-full h-full pt-[9rem] py-24 z-40  duration-500 ${open ? 'left-0':'left-[-100%]' }
      `}>
        <li>
          <Link className='pr-10 bg-[#3A5A40] py-7 px-3 inline-block lg:cursor-pointer font-bold text-white' to="/">Beranda</Link>
        </li>
        <li>
          <Link className='pr-10 w-full bg-[#3A5A40] py-7 px-3 inline-block lg:cursor-pointer font-bold text-white' to="/ProfileDesa">Profile Desa</Link>
        </li>
        <li>
          <Link className='pr-10 w-full bg-[#3A5A40] py-7 px-3 inline-block lg:cursor-pointer font-bold text-white' to="/SaranaPrasarana">Sarana Dan Prasarana</Link>
        </li>
        <li>
          <Link className='pr-10 w-full bg-[#3A5A40] py-7 px-3 inline-block lg:cursor-pointer font-bold text-white' to="/DataKependudukan">Data Kependudukan</Link>
        </li>
        {
          links.map((link)=>(
            <li>
              <h1 className='w-full bg-[#3A5A40] py-7 px-3 inline-block lg:cursor-pointer font-bold text-white '
              onClick={()=>
                heading !== link.name ? setHeading(link.name) : setHeading('')
              }> {link.name}</h1>
              {link.submenu && (
              <div className='w-full bg-[#3A5A40]'>
                <div >
                  <div className={`
                    ${heading === link.name ? 'md:hidden' : 'hidden'} 
                  `}>
                    {
                      link.sublinks.map((mysublinks)=>(
                        <div className='grid grid-cols-3'>
                          {mysublinks.sublink.map(slink =>(
                            <li className='py-4 pl-7 font-semibold pr-5 text-sm text-white'>
                              <Link to={slink.link}>{slink.name}</Link>
                            </li>
                          ))}
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div> 
              )} 
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Header