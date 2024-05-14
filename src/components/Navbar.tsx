import React from 'react'
import logo from '../images/logo_dark.svg'

const Navbar = () => {
    return (
        <div className="bg-darkBlue py-5 px-8">
            <div>
                <img src={logo} alt="" className="h-8"/>
            </div>
        </div>
    )
}

export default Navbar