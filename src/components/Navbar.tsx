import React from 'react'
import logo from '../images/S2N.png'
import { PiMonitor } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
const Navbar = () => {
    return (
        <>
            <div className="bg-white mx-auto px-8 sm:px-12 lg:px-16 xl:px-24  max-w-[100rem] flex justify-between items-center py-6 lg:py-8 relative z-50">
                <div className="relative z-10 flex items-center gap-16">
                    <img src={logo} alt="" className="h-8"/>
                </div> 

                <div>
                    <div className ="hidden lg:flex lg:gap-10">
                        <span className="relative -mx-3 -my-2 px-3 py-2 text-base transition-colors delay-150 hover:text-green-600 hover:delay-0 text-zinc-600">
                            <span className="relative z-10">Features</span>
                        </span>
                        <span className="relative -mx-3 -my-2 px-3 py-2 text-base transition-colors delay-150 hover:text-green-600 hover:delay-0 text-zinc-600">
                            <span className="relative z-10">Rates</span>
                        </span>
                        <span className="relative -mx-3 -my-2 px-3 py-2 text-base transition-colors delay-150 hover:text-green-600 hover:delay-0 text-zinc-600">
                            <span className="relative z-10">About Us</span>
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className=" flex gap-2">
                        <span className="justify-between items-center gap-2 rounded-full border py-3 px-4 text-sm sm:text-sm outline-2 outline-offset-2 transition-colors font-normal border-blueZ text-blueZ hover:border-blueZ hover:bg-blueZ  hover:text-white hidden lg:flex cursor-pointer">
                            <PiMonitor />
                            <span>Log in</span>
                            
                        </span>
                    </div>
                    
                    <div className=" flex gap-2">
                        <span className="flex justify-between items-center gap-2 rounded-full border py-3 px-4 w-full text-sm sm:text-sm outline-2 outline-offset-2 transition-colors font-normal border-blueZ text-white bg-blueZ hover:border-darkPurple hover:bg-darkPurple  hover:text-white  lg:flex cursor-pointer">
                            <span>Get Started </span>
                            <FaArrowRightLong />
                        </span>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Navbar