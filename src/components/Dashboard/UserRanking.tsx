import React from 'react'
import { InfoCircle, ArrowRight2 } from 'iconsax-react'
import empty from '../../images/Empty-amico.png'

const UserRanking = () => {
    return (
        <div className='px-6 pt-6 pb-14 flex flex-col text-white'>
             <div className="flex justify-between mb-4">
                <span className="font-semibold text-lg">Ranking</span>
                <InfoCircle size="16" color="#ADD8E6"/>
            </div>
            <div className="flex flex-col gap-1 bg-blueZ py-6 px-4 rounded-lg mb-4" >
                <span className="text-xs text-blueGray">Season 3:</span>
                <h2 className="font-bold text-lg">UTOPIA</h2>
                <span className="text-xs text-blueGray">This season will end in <b className="text-white">89 days</b></span>
            </div>
            <div className="flex justify-between my-4 text-sm text-blueGray tracking-wide">
                <span className="">
                    Leaderboard
                </span>
                <div className="flex items-center gap-2">
                    <span> see all</span> <ArrowRight2 size="14" color="#add8e6"/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center my-10">
                <img src={empty} alt=""  className=" h-44 "/>
                <span className="text-blueGray"> No data found </span>
            </div>
        </div>
    )
}

export default UserRanking