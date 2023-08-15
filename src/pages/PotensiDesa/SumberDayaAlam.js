import React from 'react'
import Header from '../../components/Header/Header'
import Judul from '../../components/PotensiDesa/JudulPotensi'
import Footer from '../../components/Footer/Footer'
import SumberDaya from "../../components/PotensiDesa/SumberDayaAlam"

const SumberDayaAlam = () => {
  return (
    <div>
        <Header />
        <Judul />
        <SumberDaya />
        <Footer />
    </div>
  )
}

export default SumberDayaAlam