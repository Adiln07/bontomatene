import React from 'react'
import Dewan from '../../components/PerangkatDesa/DewanDesa'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Judul from '../../components/PerangkatDesa/JudulPerangkat'

const DewanDesa = () => {
  return (
    <div>
        <Header />
        <Judul />
        <Dewan />
        <Footer />
    </div>
  )
}

export default DewanDesa