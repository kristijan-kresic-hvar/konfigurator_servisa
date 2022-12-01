import React from 'react'

// assets
import tokicLogoImg from '../../assets/tokic_logo.png'

const Navbar = () => {
    return (
        <div className="w-100 min-w-max py-2 h-full border-b-4 border-black sm:h-24 sm:py-0">
            <div className="flex flex-col items-center w-11/12 max-w-7xl mx-auto h-full sm:flex-row">
                <img className="w-44" src={tokicLogoImg} alt="" />
                <div className="flex-col mt-3 text-center sm:ml-3 sm:mt-0 sm:text-left">
                    <h3 className="text-2xl mb-2">Konfigurator servisa</h3>
                    <p>Izračunajte trošak servisa</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar