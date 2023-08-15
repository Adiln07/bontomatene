import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Data from "../../components/DataKependudukan/DataKependudukan"
import Judul from '../../components/DataKependudukan/JudulData'


const DataKependudukan = () => {
  return (
    <div>
        <Header />
        <Judul />
        <Data />
        <Footer />
    </div>
  )
}

export default DataKependudukan