import React from 'react'
import { useNavigate } from 'react-router-dom';


const Onboarding = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-darkGreen h-[100vh] text-white flex flex-col justify-center items-center ">
            <div className="flex justify-center flex-col items-center mt-auto mb-36">
                <h1 className="text-3xl mb-3">
                    Fast and Reliable
                </h1>
                <span className="text-X2Green">
                    Strive to you the best experience is our priority. Trading gift card is our specialty
                </span>
            </div>
            <div className=" p-5">
                <div>
                <button 
                    className="bg-plainGreen rounded-full px-16 py-3"
                    onClick={() => {
                        navigate('/create-account');
                    }}
                >
                    Create account
                </button>
                <div className="flex justify-center mt-5">
                    <span className="text-X2Green">
                        I have one
                    </span>
                    <span className="text-XGreen hover:cursor-pointer"
                        onClick={() => {
                        navigate('/login');
                    }}
                    > .{' '}Log me in</span>
                </div>

                </div>
            </div>
        </div>
    )
}

export default Onboarding