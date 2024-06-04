import { ArrowLeft } from 'iconsax-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePIN = () => {
    const navigate = useNavigate();
    return (
        <div className="px-6 pt-8 pb-14 flex flex-col text-white bg-purpleX min-h-[100vh] ">
            <div onClick={() => navigate('/security')}>
                <ArrowLeft size="24" color='#FFFFFF' />
            </div>
            <div className="my-8">
                <h1 className="text-white font-semibold text-2xl">Create transaction PIN</h1>
                <span className="text-orange text-xs">Create a 4 digit PIN that is unique to you . Your PIN will be used to confirm your transactions</span>
            </div>
        </div>
    )
}

export default CreatePIN