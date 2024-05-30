import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Message } from 'iconsax-react';


interface formData{
    username: string;
    email: string;
    phone: string;
    refCode?: string;
}

const CreateAccount = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<formData>({
        username: '',
        email: '',
        phone: '',
        refCode: '',
    })

    const handlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        navigate('/create-account');
    }

    return (
        <div className="bg-blueX min-h-[100vh] p-8">
            <nav className="flex justify-between">

                <ArrowLeft size="24" color="#fffffe" onClick={() => { navigate("/onboarding")}}/>
                <Message size="24" color="#FFA500"/>
            </nav>
            <div>
                <h1 className="text-xl my-2 text-offWhite"> 
                    Create Account
                </h1>
                <span className="text-blueGray text-xs">Let's get you trading right away</span>
            </div>
            <div className="flex flex-col justify-center items-center mt-24 gap-4">
                <input 
                    type="text" 
                    className="border border-blueGray rounded-lg bg-white w-[100%] py-3 px-5  max-w-[800px] hover:bg-blueGray active:bg-blueGray outline-none text-black "  
                    placeholder='Username' 
                    name='username'
                    value={formData.username}
                    onChange={handlInputChange}
                />
                <input 
                    type="email" 
                    className="border border-blueGray rounded-lg bg-white w-[100%] py-3 px-5  max-w-[800px] hover:bg-blueGray active:bg-blueGray outline-none text-black "  
                    placeholder='Email address' 
                    name='email'
                    value={formData.email}
                    onChange={handlInputChange}
                />
                <input 
                    type="number" 
                    className="border border-blueGray rounded-lg bg-white w-[100%] py-3 px-5  max-w-[800px] hover:bg-blueGray active:bg-blueGray outline-none text-black "  
                    placeholder='80 000 000'
                    name='phone'
                    value={formData.phone}
                    onChange={handlInputChange} 
                />
                <input 
                    type="text" 
                    className="border border-blueGray rounded-lg bg-white w-[100%] py-3 px-5  max-w-[800px] hover:bg-blueGray active:bg-blueGray outline-none text-black "  
                    placeholder='Referral Code (Optional)' 
                    name='refCode'
                    value={formData.refCode}
                    onChange={handlInputChange}
                />
            </div>
            <div className="flex flex-col items-center text-blueGray">
                <span className=" text-xs my-4">Referral code is not compulsory, please leave the box empty if you don't have one</span>
                <p className="text-sm">By continuing, you to Apexpay's <span className="text-orange">Term of service,</span> including <span className="text-orange">AML Policy</span> and <span className="text-orange">Privacy Policy</span></p>
            </div>
            <div className="flex flex-col items-center mb-5 absolute bottom-0 right-0 left-0">
                <button
                    className="bg-zinc-900 rounded-full px-16 py-3 text-white w-[800px]"
                    onClick={handleSubmit}
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default CreateAccount