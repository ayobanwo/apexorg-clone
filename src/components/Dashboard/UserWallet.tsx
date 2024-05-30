import React from 'react'
import { RiEyeCloseLine } from "react-icons/ri";
import { Send2 } from 'iconsax-react';
import { BsCaretRightFill } from 'react-icons/bs';
import empty from '../../images/Empty-rafiki.svg'

const UserWallet = () => {
    return (
        <div className='px-6 pt-6 pb-14 flex flex-col text-white'>
            <div className="flex justify-between mb-4">
                <span className="font-semibold text-lg">Wallet</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 bg-blueZ py-6 rounded-lg mb-4" >
                <div>
                    Naira
                </div>
                <div className="flex gap-8 items-center">
                    <span>₦</span>
                    <span>0.00</span>
                    <span><RiEyeCloseLine /></span>
                </div>
                <div className="flex  bg-blueX rounded-full w-2/3 p-4 justify-center">
                    <div className="flex gap-2 items-center">
                        <Send2 size="16" color="#ADD8E6"/>
                        <span>Withdraw</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between my-4">
                    <span>
                        Recent withdrawal
                    </span>
                    <div className="flex items-center">
                        <span> see all</span> <BsCaretRightFill/>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={empty} alt=""  className=" h-44 "/>
                    <span className="text-blueGray"> You have no withdrawal</span>
                </div>
            </div>
        </div>
    )
}

export default UserWallet