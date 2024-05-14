import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Message } from 'iconsax-react';

const ResetPassword = () => {
    const navigate = useNavigate();
    return (
        <div className=" bg-colorZ h-[100vh]">
            <div className="bg-darkGreen min-h-auto p-8">
                <nav className="flex justify-between">
                    <ArrowLeft size="24" color="#fffffe" onClick={() => { navigate("/login")}}/>
                    <Message size="24" color="#219452"/>
                </nav>

                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white text-3xl font-semibold my-5">Reset Password</h1>
                    <p className="text-X2Green w-[200px] text-sm text-center"> Please provide your Apexpay registered email address</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-12 gap-4">
                <input type="password" className="border border-XGreen rounded-lg bg-blueBlack w-[100%] py-3 px-5  max-w-[800px] hover:bg-X2Green outline-none text-white "  placeholder='Password' />
            </div>
            <div className="flex flex-col items-center mb-5 absolute bottom-0 right-0 left-0">
                <button
                    className="bg-plainGreen rounded-full px-16 py-3 text-white w-[800px]"
                    onClick={() => {
                        navigate('/create-account');
                    }}
                >
                    Reset
                </button>
               
            </div>
        </div>
    )
}

export default ResetPassword