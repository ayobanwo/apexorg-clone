import React, {useState} from 'react'
import { ArrowLeft, InfoCircle, Lock1 } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import empty from '../../../images/Empty-amico.png'

const Badges = () => {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState('seasonal')

    const handleSelectedTab = (tab: string) => {
        setSelectedTab(tab);
    }
    return (
        <div className="px-6 pt-6 pb-14 flex flex-col text-white bg-purpleX min-h-[100vh] ">
            <div className="my-2 flex items-center justify-center"> 
                <div className="mr-auto" onClick={() => navigate('/account')}>
                    <ArrowLeft size="16" color="#ffffff"/>
                </div>
                <div className='flex justify-center mr-auto'>
                    <span className="font-semibold text-sm">My Badges</span>
                </div>
                <InfoCircle size="16" color="#ffffff"/>
            </div>
            <div className="flex items-center w-full rounded-lg bg-darkPurple my-4">
                <div 
                    className={`flex justify-center items-center  text-sm basis-1/2 rounded-lg py-2 ${selectedTab === 'seasonal' ? 'bg-blueX font-semibold' : ''} `}
                    onClick={() => handleSelectedTab('seasonal')}
                    >
                        Seasonal Badges
                    </div>
                <div 
                    className={`flex justify-center items-center  text-sm basis-1/2 rounded-lg py-2 ${selectedTab === 'account' ? 'bg-blueX font-semibold' : ''} `}
                    onClick={() => handleSelectedTab('account')}
                    >
                        Account Badges 
                </div>
            </div>
            {
                selectedTab === "seasonal" ? 

                <div className=" flex flex-col justify-center items-center p-5 gap-4">
                    <img src={empty} alt="" className="h-36" />
                    <span className="text-xs text-blueGray/55">No badges yet...</span>
                </div>

                :
                <div className=" grid grid-cols-4 justify-center items-center gap-6 flex-row mt-5">
                    <div className="flex flex-col justify-center items-center gap-4 rounded-lg p-4 bg-deepBlue">
                        <div className="flex justify-center items-center px-14 py-8 rounded-lg bg-darkPurple">
                            <Lock1 size="32" color="#ffa500"/>
                        </div>
                        <span>100k</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 rounded-lg p-4 bg-deepBlue">
                        <div className="flex justify-center items-center px-14 py-8 rounded-lg bg-darkPurple">
                            <Lock1 size="32" color="#ffa500"/>
                        </div>
                        <span>300k</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 rounded-lg p-4 bg-deepBlue">
                        <div className="flex justify-center items-center px-14 py-8 rounded-lg bg-darkPurple">
                            <Lock1 size="32" color="#ffa500"/>
                        </div>
                        <span>500k</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 rounded-lg p-4 bg-deepBlue">
                        <div className="flex justify-center items-center px-14 py-8 rounded-lg bg-darkPurple">
                            <Lock1 size="32" color="#ffa500"/>
                        </div>
                        <span>1M</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 rounded-lg p-4 bg-deepBlue">
                        <div className="flex justify-center items-center px-14 py-8 rounded-lg bg-darkPurple">
                            <Lock1 size="32" color="#ffa500"/>
                        </div>
                        <span>5M</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 rounded-lg p-4 bg-deepBlue">
                        <div className="flex justify-center items-center px-14 py-8 rounded-lg bg-darkPurple">
                            <Lock1 size="32" color="#ffa500"/>
                        </div>
                        <span>10M</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 rounded-lg p-4 bg-deepBlue">
                        <div className="flex justify-center items-center px-14 py-8 rounded-lg bg-darkPurple">
                            <Lock1 size="32" color="#ffa500"/>
                        </div>
                        <span>25M</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 rounded-lg p-4 bg-deepBlue">
                        <div className="flex justify-center items-center px-14 py-8 rounded-lg bg-darkPurple">
                            <Lock1 size="32" color="#ffa500"/>
                        </div>
                        <span>50M</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Badges