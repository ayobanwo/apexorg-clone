import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Message } from 'iconsax-react';
import welcome from '../images/welcome.svg'

interface LoginData{
    username: string;
    password: string;
}

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState<LoginData>({
        username: '',
        password: '',
    })

    //function to handle input change
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    //Func to handle submit button
    const handleSubmit = () => {
        navigate('/create-account');
    }

    return (
        <div className=" bg-blueZ h-[100vh]">
            <div className=" min-h-auto p-8">
                <nav className="flex justify-between">
                    <ArrowLeft size="24" color="#fffffe" onClick={() => { navigate("/onboarding")}}/>
                    <Message size="24" color="#ffa500"/>
                </nav>

                <div className="flex flex-col justify-center items-center">
                    <img src={welcome} alt=""  className=" h-44 mt-2"/>
                    <h1 className="text-white text-3xl font-semibold my-5">Welcome back</h1>
                    <p className="text-blueGray text-sm text-center"> Login and start trading like boss that you are</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-12 gap-4">
                <input 
                    type="text"    
                    className="border border-XGreen rounded-lg bg-white w-[100%] py-3 px-5  max-w-[800px] hover:bg-blueGray outline-none text-black "  
                    placeholder='Username'  
                    name='username'
                    value={loginData.username}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    className="border border-XGreen rounded-lg bg-white w-[100%] py-3 px-5  max-w-[800px] hover:bg-blueGray outline-none text-black "  
                    placeholder='Password' 
                    name='password'
                    value={loginData.password}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col items-center mb-5 absolute bottom-0 right-0 left-0">
                <button
                    className="bg-purpleX rounded-full px-16 py-3 text-white w-[800px]"
                    onClick={handleSubmit}
                >
                    Continue
                </button>
                <p className="text-blueGray mt-2 text-sm">Forgot Password.  
                    <span className="text-orange hover:cursor-pointer"
                        onClick={() => {
                        navigate('/reset-password');
                    }}
                    >
                         {' '} Reset Password
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Login