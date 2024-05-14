import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Message } from 'iconsax-react';


const CreateAccount = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-darkBlue min-h-[100vh] p-8">
            <nav className="flex justify-between">

                <ArrowLeft size="24" color="#fffffe" onClick={() => { navigate("/onboarding")}}/>
                <Message size="24" color="#219452"/>
            </nav>
            <div>
                <h1 className="text-xl my-2 text-offWhite"> 
                    Create Account
                </h1>
                <span className="text-X2Green text-xs">Let's get you trading right away</span>
            </div>
            <div className="flex flex-col justify-center items-center mt-24 gap-4">
                <input type="text" className="border border-X2Green rounded-lg bg-blueBlack w-[100%] py-3 px-5  max-w-[800px] hover:bg-X2Green outline-none text-white "  placeholder='Username' />
                <input type="email" className="border border-X2Green rounded-lg bg-blueBlack w-[100%] py-3 px-5  max-w-[800px] hover:bg-X2Green outline-none text-white "  placeholder='Email address' />
                <input type="number" className="border border-X2Green rounded-lg bg-blueBlack w-[100%] py-3 px-5  max-w-[800px] hover:bg-X2Green outline-none text-white "  placeholder='80 000 000     ' />
                <input type="text" className="border border-X2Green rounded-lg bg-blueBlack w-[100%] py-3 px-5  max-w-[800px] hover:bg-X2Green outline-none text-white "  placeholder='Referral Code (Optional)' />
            </div>
            <div className="flex flex-col items-center text-X2Green">
                <span className=" text-xs my-4">Referral code is not compulsory, please leave the box empty if you don't have one</span>
                <p className="text-sm">By continuing, you to Apexpay's <span className="text-XGreen">Term of service,</span> including <span className="text-XGreen">AML Policy</span> and <span className="text-XGreen">Privacy Policy</span></p>
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
            </div>
        </div>
    )
}

export default CreateAccount