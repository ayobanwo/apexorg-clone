import React,{useState} from 'react'
import { ArrowLeft, Eye, EyeSlash } from 'iconsax-react';
import { useNavigate } from 'react-router-dom'

interface PasswordProp {
    currPassword: string,
    newPassword: string,
    confirmPassword: string,
}

const ChangePassword = () => {
    const navigate = useNavigate();
    const [inputType, setInputType] = useState('password')
    const [passwordForm, setPasswordForm] = useState<PasswordProp>({
        currPassword: '',
        newPassword: '',
        confirmPassword: '',
    })

    const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setPasswordForm((prevData) => ({
            ...prevData,
            [name] : value
        }))
    }

    const toggleInput = () =>{
        setInputType((prev) => (prev === 'password'? 'text' : 'password'))
    } 
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
            <form>
                <div className="flex flex-col justify-center items-center my-5 gap-4">
                    <div className="flex justify-center items-center border border-blueZ rounded-lg bg-deepBlue w-[100%] py-3 px-5  max-w-[800px] hover:bg-blueZ outline-none text-white">
                        <input type={inputType}  className=" bg-transparent w-full outline-none" name='currPass' value={passwordForm.currPassword} onChange={handleInputChange} placeholder='Current Password'/>
                        <div onClick={toggleInput}>
                            {
                                inputType === "password" ? 
                                    <EyeSlash size="24" color="#ffffff"/>
                                :
                                <Eye size="24" color="#ffffff" />

                            }
                        </div>
                    </div>
                    <div className="flex justify-center items-center border border-blueZ rounded-lg bg-deepBlue w-[100%] py-3 px-5  max-w-[800px] hover:bg-blueZ outline-none text-white">
                        <input type={inputType}  className=" bg-transparent w-full outline-none" name='newPassword' value={passwordForm.newPassword} onChange={handleInputChange} placeholder='New Password'/>
                        <div onClick={toggleInput}>
                            {
                                inputType === "password" ? 
                                    <EyeSlash size="24" color="#ffffff"/>
                                :
                                <Eye size="24" color="#ffffff" />

                            }
                        </div>
                    </div>
                    <div className="flex justify-center items-center border border-blueZ rounded-lg bg-deepBlue w-[100%] py-3 px-5  max-w-[800px] hover:bg-blueZ outline-none text-white">
                        <input type={inputType}  className=" bg-transparent w-full outline-none" name='confirmPassword' value={passwordForm.confirmPassword} onChange={handleInputChange} placeholder='Confirm Password'/>
                        <div onClick={toggleInput}>
                            {
                                inputType === "password" ? 
                                    <EyeSlash size="24" color="#ffffff"/>
                                :
                                <Eye size="24" color="#ffffff" />

                            }
                        </div>
                    </div>
                </div>
                 <div className="flex justify-center">
                    <div className="bg-darkPurple hover:bg-deepBlue flex justify-center items-center basis-4/6 gap-2 p-4 rounded-full">
                        <span>Update password</span>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default ChangePassword