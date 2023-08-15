import React from 'react'

const DataKependudukan = () => {
  return (
    <div className='relative z-[-100000] font-inter'>
        <div className='  sm:max-w-[40rem] md:max-w-[50rem] lg:max-w-[60rem] max-w-[25rem] m-auto py-10'>
            <h1 className='font-bold'>Data Kependudukan Desa Bonto Mate'ne</h1>
            <div className='pt-5'> 
                <table className='table-auto border-collapse text-center w-full  border-2'>
                    <tr>
                        <th className='border-2 text-sm sm:text-base' rowSpan={2}>Dusun</th>
                        <th className='border-2 text-sm sm:text-base' colSpan={3}>Jumlah Penduduk</th>
                    </tr>
                    <tr>
                        <th className='border-2 text-sm sm:text-base'> Laki-laki</th>
                        <th className='border-2 text-sm sm:text-base'> Perempuan</th>
                        <th className='border-2 text-sm sm:text-base '> Laki-laki + Perempuan</th>
                    </tr>
                    <tr>
                        <td className='border-2 text-sm sm:text-base'>Barambang</td>
                        <td className='border-2 text-sm sm:text-base'>949</td>
                        <td className='border-2 text-sm sm:text-base'>1129</td>
                        <td className='border-2 text-sm sm:text-base'>2078</td>
                    </tr>
                    <tr>
                        <td className='border-2 text-sm sm:text-base'>Bentenge</td>
                        <td className='border-2 text-sm sm:text-base'>1647</td>
                        <td className='border-2 text-sm sm:text-base'>1158</td>
                        <td className='border-2 text-sm sm:text-base'>2805</td>
                    </tr>
                    <tr>
                        <td className='border-2 text-sm sm:text-base'>Bontoramba</td>
                        <td className='border-2 text-sm sm:text-base'>1501</td>
                        <td className='border-2 text-sm sm:text-base'>1482</td>
                        <td className='border-2 text-sm sm:text-base'>2983</td>
                    </tr>
                    <tr>
                        <td className='border-2 text-sm sm:text-base'>Bontoramba</td>
                        <td className='border-2 text-sm sm:text-base'>711</td>
                        <td className='border-2 text-sm sm:text-base'>642</td>
                        <td className='border-2 text-sm sm:text-base'>1353</td>
                    </tr>
                    <tr>
                        <td className='border-2 text-sm sm:text-base font-bold uppercase'>jumlah</td>
                        <td className='border-2 text-sm sm:text-base'>4808</td>
                        <td className='border-2 text-sm sm:text-base'>4411</td>
                        <td className='border-2 text-sm sm:text-base'>9219</td>
                    </tr>

                </table>
            </div>
        </div>
        
    </div>
  )
}

export default DataKependudukan