import React from 'react'
import {ArrowRight2 } from 'iconsax-react'
import logo from '../../images/S2Nx.png'

const UserAccount = () => {
    return (
        <div className='px-6 pt-6 pb-14 flex flex-col text-white'>
            <div className="flex justify-between mb-4">
                <span className="font-semibold text-lg">History</span>
            </div>
            <div className="flex justify-between items-center bg-darkGray rounded-md px-4 py-4">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="" className="h-9" />
                    <div className="flex flex-col ">
                        <h2 className="font-semibold text-white text-md">Swap2Naira user</h2>
                        <span className="text-xs text-blueGray"> @tommy</span>
                    </div>
                </div>
                <div>
                    <ArrowRight2 size="16" color="#add8e6"/>
                </div>
            </div>
            <div className="flex justify-between items-center px-4 py-3 bg-darkPurple my-5 rounded-md"> 
                <div className="flex gap-4">
                    <img src={logo} alt="" className="h-6" />
                    <span className="text-sm"> My Badges </span>
                </div>
                <div>
                    <ArrowRight2 size="16" color="#add8e6"/>
                </div>
            </div>
        </div>
    )
}

export default UserAccount