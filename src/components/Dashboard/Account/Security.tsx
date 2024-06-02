import React from 'react'
import { ArrowLeft, Lock1, PasswordCheck } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'


const Security = () => {
    const navigate = useNavigate();
    return (
        <div className="px-6 pt-6 pb-14 flex flex-col text-white bg-purpleX min-h-[100vh] ">
            <div className="my-2 flex items-center justify-center"> 
                <div className="mr-auto" onClick={() => navigate('/account')}>
                    <ArrowLeft size="16" color="#ffffff"/>
                </div>
                <div className='flex justify-center mr-auto'>
                    <span className="font-semibold text-sm">Security</span>
                </div>
            </div>
            <div className="flex flex-col py-3">
                 <div className="flex gap-3 items-center border-b border-cyan/30 py-5 cursor-pointer" onClick={() => navigate('/')}>
                    <Lock1 size="16" color="#ffff00"/>
                    <span className="text-white font-semibold text-md">Create transaction PIN</span>
                </div>
                 <div className="flex gap-3 items-center border-b border-cyan/30 py-5 cursor-pointer" onClick={() => navigate('/')}>
                    <PasswordCheck size="16" color="#ffff00"/>
                    <span className="text-white font-semibold text-md">Change Password</span>
                </div>
            </div>
        </div>
    )
}

export default Security