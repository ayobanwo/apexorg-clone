import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Message } from 'iconsax-react';
import card from '../images/login.svg'

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className=" bg-colorZ h-[100vh]">
            <div className="bg-darkGreen min-h-auto p-8">
                <nav className="flex justify-between">
                    <ArrowLeft size="24" color="#fffffe" onClick={() => { navigate("/onboarding")}}/>
                    <Message size="24" color="#219452"/>
                </nav>

                <div className="flex flex-col justify-center items-center">
                    <img src={card} alt=""  className=" h-36 mt-2"/>
                    <h1 className="text-white text-3xl font-semibold my-5">Welcome back</h1>
                    <p className="text-X2Green w-[150px] text-sm text-center"> Login and start trading like boss that you are</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-12 gap-4">
                <input type="text" className="border border-XGreen rounded-lg bg-blueBlack w-[100%] py-3 px-5  max-w-[800px] hover:bg-X2Green outline-none text-white "  placeholder='Username' />
                <input type="password" className="border border-XGreen rounded-lg bg-blueBlack w-[100%] py-3 px-5  max-w-[800px] hover:bg-X2Green outline-none text-white "  placeholder='Password' />
            </div>
            <div className="flex flex-col items-center mb-5 absolute bottom-0 right-0 left-0">
                <button
                    className="bg-plainGreen rounded-full px-16 py-3 text-white w-[800px]"
                    onClick={() => {
                        navigate('/create-account');
                    }}
                >
                    Continue
                </button>
                <p className="text-X2Green mt-2 text-sm">Forgot Password. 
                    <span className="text-XGreen hover:cursor-pointer"
                        onClick={() => {
                        navigate('/reset-password');
                    }}
                    >
                        Reset Password
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Login