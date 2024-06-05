import { ArrowLeft } from 'iconsax-react'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import PinInput from 'react-pin-input';

const CreatePIN = () => {
    const navigate = useNavigate();
    const [onCreate, setOnCreate] = useState(false)
    const handleOnCreate = (value: any) => {
        setOnCreate(true)
    }
    return (
        <div className="px-6 pt-8 pb-14 flex flex-col text-white bg-purpleX min-h-[100vh] ">
            <div onClick={() => navigate('/security')}>
                <ArrowLeft size="24" color='#FFFFFF' />
            </div>
            <div className="my-8">
                <h1 className="text-white font-semibold text-2xl">{onCreate? 'Confirm' : 'Create'} transaction PIN</h1>
                <span className="text-orange text-xs">Create a 4 digit PIN that is unique to you . Your PIN will be used to confirm your transactions</span>
            </div>
            <div className="flex justify-center items-start gap-8">
                {
                    !onCreate?
                    <PinInput 
                        length={4} 
                        initialValue=""
                        secret
                        secretDelay={100} 
                        onChange={(value, index) => {}} 
                        type="numeric" 
                        inputMode="number"
                        style={{padding: '10px'}}  
                        inputStyle={{borderColor: '#2E5BCC', borderRadius: '5px', width: "100%"}}
                        inputFocusStyle={{background: '#2E5BCC'}}
                        onComplete={(value, index) => {handleOnCreate(value)}}
                        autoSelect={true}
                        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />  
                    
                    :

                    <PinInput 
                        length={4} 
                        initialValue=" "
                        secret
                        secretDelay={100} 
                        // onChange={(value, index) => {}} 
                        type="numeric" 
                        inputMode="number"
                        style={{padding: '10px'}}  
                        inputStyle={{borderColor: '#ffffff', borderRadius: '5px', width: "100%"}}
                        inputFocusStyle={{background: '#ffffff'}}
                        // onComplete={(value, index) => {}}
                        autoSelect={true}
                        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />   
                }


            </div>
        </div>
    )
}

export default CreatePIN