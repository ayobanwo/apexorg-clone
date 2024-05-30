import React from 'react'
import { Home2, Wallet3, Rank, Book, User } from 'iconsax-react'
import { useNavigate } from 'react-router-dom';

interface Prop{
    children: any
}

const DashNavbarLayout: React.FC<Prop> = ({children}) => {
    const navigate = useNavigate();

    return (
        <div className="">
            <main className="bg-purpleX min-h-[100vh]">
                {children}
            </main>
            <div className="flex justify-between fixed bottom-0 items-center text-white  py-3 px-6 bg-blueZ w-full rounded-t-xl ">
                <div className="flex flex-col gap-1 justify-center items-center cursor-pointer " onClick={() => navigate('/dashboard')}>
                    <Home2 size="24" color="#ADD8E6"/>
                    <span className="text-xs" >Home</span>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center cursor-pointer " onClick={() => navigate('/wallet')}>
                    <Wallet3 size="24" color="#ADD8E6"/>
                    <span className="text-xs" >Wallet</span>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center cursor-pointer ">
                    <Rank size="24" color="#ADD8E6"/>
                    <span className="text-xs" >Rank</span>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center cursor-pointer ">
                    <Book size="24" color="#ADD8E6"/>
                    <span className="text-xs" >History</span>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center cursor-pointer ">
                    <User size="24" color="#ADD8E6"/>
                    <span className="text-xs" >Account</span>
                </div>
            </div>
        </div>
    )
}

export default DashNavbarLayout