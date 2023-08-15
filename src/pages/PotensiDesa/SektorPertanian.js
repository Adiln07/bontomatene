import React from 'react'
import Header from '../../components/Header/Header'
import Judul from '../../components/PotensiDesa/JudulPotensi'
import Footer from '../../components/Footer/Footer'
import Pertanian from "../../components/PotensiDesa/SektorPertanian"

const SektorPertanian = () => {
  return (
    <div>
        <Header />
        <Judul />
        <Pertanian />
        <Footer />
    </div>
  )
}

export default SektorPertanian