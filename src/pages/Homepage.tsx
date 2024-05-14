import React from 'react'
import Navbar from '../components/Navbar'
import DownloadApp from '../components/DownloadApp'
import poco from '../images/poco_large3052.png'
import { Apple, GooglePlay, ArrowRight } from 'iconsax-react'

const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <div className="relative w-full overflow-hidden bg-black">
                <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-24  max-w-[100rem] w-full relative flex flex-col justify-start items-center gap-8 md:items-start pt-16 md:pt-24 xl:pt-48 md:pb-24 lg:pb-36 xl:pb-60">
                    <div className="w-full sm:w-2/3 md:w-2/4 xl:w-[51%] flex flex-col gap-6 lg:gap-8 text-center md:text-left items-center md:items-start">
                        <div className="flex flex-col gap-4">
                            <div className="flex sm:justify-start w-full justify-center">
                                <div className="flex gap-2 rounded-full bg-[#13311F] p-2 w-fit items-center">
                                    <span className="rounded-3xl bg-green-600 py-1 px-2 text-white text-xs sm:text-sm">New</span>
                                    <span className="text-sm sm:text-base text-green-600 font-medium">Apexpay V2.0 is Live</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:w-6 sm:h-6 mr-2" viewBox="0 0 24 25" fill="none"><path d="M12.6998 12.2487H3.74979" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6998 17.2497L20.6368 12.2487L12.6998 7.24769V17.2497Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                            </div>
                            <h3 className="font-bold text-4xl lg:text-5xl xl:text-7xl text-white">Best Platform To Redeem Gift Cards</h3>
                            <p className="mt-3 text-base lg:text-xl text-white/30 font-normal">Apexpay helps users who have gift cards for sale experience a hassle-free, efficient, and reliable exchange process. Say goodbye to boring gift card exchanges.</p>
                        </div>
                        <div className="flex flex-row max-[375px]:gap-1 max-[360px]:flex-col gap-2">
                            <button className="inline-flex justify-between items-center gap-2 rounded-full border-[1px] py-3 px-4 text-sm sm:text-sm transition-colors font-normal border-green-900 text-white hover:border-green-900 hover:bg-green-600 active:bg-green-600 active:text-white">
                                <div className="flex flex-row gap-1 sm:gap-2">
                                    <GooglePlay
                                        color="#fffffe"
                                        variant="Bold"
                                    />
                                    <div className="w-px h-auto bg-white opacity-20"></div>
                                     <Apple
                                        color="#fffffe"
                                        variant="Bold"
                                    />
                                    <span>Download App</span>
                                </div>
                                
                            </button>
                            <div className="inline-flex justify-between items-center gap-2 rounded-full border border-transparent py-3 px-4 text-sm sm:text-sm font-normal outline-2 outline-offset-2 transition-colors bg-green-600 text-white hover:bg-zinc-900 hover:border-zinc-600">
                                    <span>Get Started</span>
                                    <ArrowRight
                                        color="#fffffe"
                                    />
                                </div>
                        </div>
                    </div>
                    <img src={poco} alt="" className="md:absolute md:-bottom-28 md:right-0 max-h-fit xl:right-24 lg:right-16 object-cover md:h-auto lg:h-auto xl:h-auto w-auto md:w-2/4 lg:w-2/5 xl:w-[40%] min-[1536px]:w-[38%] lg:-bottom-32 xl:-bottom-56 " />
                </div>

            </div>
            <div className="bg-zinc-900 pt-10 sm:pt-16">
                <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-24  max-w-[100rem] flex flex-col gap-8 lg:gap-10 xl:gap-16">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-white text-center sm:text-left md:w-2/4 xl:w-2/5">All of the cool features you need are here.</h3>

                    <div className="w-full rounded-3xl relative flex flex-col justify-between items-center gap-8 md:items-start px-4 sm:px-8 lg:px-12 py-16 lg:py-28 xl:py-36 bg-cover bg-left-top  md:bg-cover md:bg-center bg-no-repeat bg-green-600">
                        <div className="w-full sm:w-2/3 lg:w-2/4 xl:w-2/6 flex flex-col gap-2 lg:gap-3 text-center md:text-left items-center md:items-start">
                            <h3 className="font-bold text-2xl sm:text-3xl xl:text-4xl text-white">Gift Cards &amp; Payment</h3>
                            <p className="text-sm sm:text-base text-white leading-loose font-normal">Apexpay gives you the power to exchange your gift cards for Naira 🇳🇬 or Cedis 🇬🇭 INSTANTLY. Experience swift transfers into your bank account.</p>
                            <div className="flex flex-row mt-2">
                                <button className="inline-flex justify-between items-center gap-2 rounded-full border border-transparent py-3 px-4 text-sm sm:text-sm font-normal outline-2 outline-offset-2 transition-colors bg-white text-green-600 hover:bg-white/90" >
                                    <span>Get Started</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor"><path d="M16.4583 9.77139L3.95831 9.77139" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.4168 4.75107L16.4585 9.77107L11.4168 14.7919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-10">
                        <div className="bg-purpleX rounded-3xl p-8 lg:p-8 xl:p-12 flex flex-col gap-4 justify-between lg:gap-8 h-80 lg:h-[22rem] hover:bg-zinc-900 cursor-pointer">
                            <div className="flex flex-col gap-4 lg:gap-8">
                                <h4 className="text-white font-bold text-2xl lg:text-3xl">Bill Payments</h4>
                                <p className="text-base xl:text-lg text-[#4D5774] font-light">
                                    Just a few taps and you’re set! Purchase airtime, data, electricity tokens and even top up your betting wallet. You don’t need any other app.
                                </p>
                                <button className="inline-flex justify-between items-center gap-2 rounded-full border border-transparent py-3 px-4 text-sm sm:text-sm font-normal outline-2 outline-offset-2 transition-colors bg-white text-green-600 hover:bg-white/90 w-fit">
                                    <span>Get Started</span>
                                    <ArrowRight
                                        color="#219653"
                                    />
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#1D212C] rounded-3xl p-8 lg:p-8 xl:p-12 flex flex-col gap-4 justify-between lg:gap-8 h-80 lg:h-[22rem] hover:bg-zinc-900 cursor-pointer">
                            <div className="flex flex-col gap-4 lg:gap-8">
                                <h4 className="text-white font-bold text-2xl lg:text-3xl">Unique Deals</h4><p className="text-base xl:text-lg text-[#4D5774] font-light">Get up to 50% extra bonus on your gift card exchange. We make trading gift card as easy and rewarding as possible.</p>
                            </div>
                            <button className="inline-flex justify-between items-center gap-2 rounded-full border border-transparent py-3 px-4 text-sm sm:text-sm font-normal outline-2 outline-offset-2 transition-colors bg-white text-green-600 hover:bg-white/90 w-fit">
                                <span>Get Started</span>
                                <ArrowRight
                                    color="#219653"
                                />
                            </button>
                        </div>

                        <div className="bg-orange-500 rounded-3xl p-8 lg:p-8 xl:p-12 flex flex-col gap-4 justify-between lg:gap-8 h-80 lg:h-[22rem] hover:bg-zinc-900 cursor-pointer">
                            <div className="flex flex-col gap-4 lg:gap-8">
                                <h4 className="text-white font-bold text-2xl lg:text-3xl">Compete &amp; Earn</h4>
                                <p className="text-base xl:text-lg text-white font-light">
                                    Win big rewards in our ever-changing seasonal trading competition. Show the world why you’re a Legendary trader every 90 days.
                                </p>
                            </div>
                            <button className="inline-flex justify-between items-center gap-2 rounded-full border border-transparent py-3 px-4 text-sm sm:text-sm font-normal outline-2 outline-offset-2 transition-colors bg-white text-green-600 hover:bg-white/90 w-fit" >
                                <span>Get Started</span>
                                <ArrowRight
                                        color="#219653"
                                />
                            </button>
                        </div>
                    </div>


                </div>
            </div>
            <DownloadApp />
        </div>
    )
}

export default Homepage