import React from 'react'
import { ArrowLeft, Copy, Share } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import box from "../../../images/Empty-amico.png"

const Referral = () => {
    const navigate = useNavigate();
    return (
        <div className="px-6 pt-6 pb-14 flex flex-col text-white bg-purpleX min-h-[100vh] ">
            <div className="my-2 flex items-center justify-center"> 
                <div className="mr-auto" onClick={() => navigate('/account')}>
                    <ArrowLeft size="16" color="#ffffff"/>
                </div>
                <div className='flex justify-center mr-auto'>
                    <span className="font-semibold text-sm">Referral Program</span>
                </div>
            </div>
            <div className="my-6 flex flex-col justify-center items-center gap-2">
                <img src={box} alt="" className="h-60 my-8" />
                <span className="font-semibold text-3xl">Get Free ₦200</span>
                <span className="text-sm text-blueGray">Refer your friends and family and win exciting cash rewards. Win ₦200 when they sign up with your code and make a transaction of at least ₦5000. Share your code now</span>
            </div>
            <div className="flex justify-between border border-blueGray p-4 my-4 rounded-md bg-darkPurple">
                <span> UHGW7D8</span>
                <div className=" flex items-center gap-2">
                    <Copy size="16" color="#ADD8E6"/>
                    <span className="text-sm">Copy</span>
                </div>
            </div>
            <div className="flex justify-center my-6">
                <div className="bg-blueX flex justify-center items-center basis-4/6 gap-2 p-4 rounded-full">
                    <span>Share</span>
                    <Share size="16" color="#ffffff"/>
                </div>

            </div>
            <div className="flex justify-center">
                <span className="cursor-pointer text-orange text-sm">See referral details</span>
            </div>
        </div>
    )
}

export default Referral