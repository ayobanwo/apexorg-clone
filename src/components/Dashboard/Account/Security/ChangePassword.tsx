import React from 'react'
import { ArrowLeft, Eye, EyeSlash } from 'iconsax-react';
import { useNavigate } from 'react-router-dom'

const ChangePassword = () => {
    const navigate = useNavigate();
    return (
        <div className="px-6 pt-8 pb-14 flex flex-col text-white bg-purpleX min-h-[100vh] ">
            <div className="my-2 flex items-center justify-center"> 
                <div className="mr-auto" onClick={() => navigate('/security')}>
                    <ArrowLeft size="16" color="#ffffff"/>
                </div>
                <div className='flex justify-center mr-auto'>
                    <span className="font-semibold text-sm">Change Password</span>
                </div>
            </div>
            <div>
                <div className="flex ">
                    <input type="password" />
                    <Eye size="16" color="#ffffff"/>
                    <EyeSlash size="16" color="#ffffff"/>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword