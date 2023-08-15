import React from 'react'
import Header from '../../components/Header/Header'
import Judul from '../../components/PerangkatDesa/JudulPerangkat'
import Footer from '../../components/Footer/Footer'
import Struktur from "../../components/PerangkatDesa/StrukturDesa"

const StrukterDesa = () => {
  return (
    <div>
        <Header />
        <Judul />
        <Struktur />
        <Footer />
    </div>
  )
}

export default StrukterDesa