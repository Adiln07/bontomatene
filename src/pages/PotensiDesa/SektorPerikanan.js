import React from 'react'
import Header from '../../components/Header/Header'
import Judul from '../../components/PotensiDesa/JudulPotensi'
import Footer from '../../components/Footer/Footer'
import Perikanan from "../../components/PotensiDesa/SektorPerikanan"

const SektorPerikanan = () => {
  return (
    <div>
        <Header />
        <Judul />
        <Perikanan />
        <Footer />
    </div>
  )
}

export default SektorPerikanan