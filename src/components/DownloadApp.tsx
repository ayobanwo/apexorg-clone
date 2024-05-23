import React from 'react'
import poco from'../images/poco_small7267.png'
import logo from '../images/S2N.png'
import { Apple, GooglePlay } from 'iconsax-react'

const DownloadApp = () => {
    return (
        <div className="p-24">
            <div className="bg-blueZ w-full rounded-3xl relative flex flex-col justify-between items-center gap-8 lg:items-start px-4 sm:px-8 lg:px-12 pt-12 lg:py-24 xl:py-36">
                <div className="w-full sm:w-2/3 lg:w-2/4 xl:w-2/5 flex flex-col gap-2 lg:gap-3 text-center lg:text-left items-center lg:items-start">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-cyan ">
                        Download the App to <br/>
                        Get Started
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base text-white xl:text-lg md:leading-loose font-normal mt-4">
                        Available on iOS Store & Google Playstore
                    </p>
                    <div className="flex gap-2 text-white">
                        <button className="rounded-full py-3 px-4 border-blueZ border gap-2 flex ">
                            <Apple
                                color="#fffffe"
                                variant="Bold"
                            />
                            iOS Store
                        </button>
                        <button className="rounded-full py-3 px-4 border-blueX border gap-2 flex ">
                            <GooglePlay
                                color="#fffffe"
                                variant="Bold"
                            />
                            Google Play
                        </button>
                    </div>
                </div>
                <div className="">
                    <img src={poco} alt="" className="lg:absolute -mt-9 lg:bottom-0 max-h-72 lg:max-h-fit xl:right-16 lg:-mt-20 xl:-mt-24 lg:right-4 object-cover lg:object-cover lg:h-[29rem] xl:h-[37rem] w-auto"/>
                </div>
            </div>

            <div className="mt-9">
                <img src={logo} alt=""  className="w-36"/>
                <h5 className="font-normal text-darkPurple text-sm sm:text-xl mt-2">Swap2Naira is one of Nigeria's leading gift card exchanger serving over 400,000 customers with 5 star trading experience.</h5>
            </div>
        </div>
    )
}

export default DownloadApp