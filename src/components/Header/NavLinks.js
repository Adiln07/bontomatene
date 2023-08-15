import React from 'react'

const NavLinks = () => {
    const links = [
        {name: "Profile Desa"},
        {name: "Sarana Dan Prasana"},
        {name: "Data Kependudukan"},
        {name: "Perangkat Desa"},
        {name: "Potensi Desa"},

    ]
  return (
    <div className='flex '>
        {
        links.map(Link=>(
            <div>
                <div>
                    <h1 className='pr-10 '> {Link.name}</h1>
                </div>
            </div>
        ))
        } 
    </div>
  )
}

export default NavLinks