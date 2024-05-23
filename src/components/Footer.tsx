import React from 'react'

const Footer = () => {
    return (
        <div className="p-24 bg-blueZ">
            <div className="w-full py-6 sm:py-8 border-y border-b border-b-white flex flex-wrap items-start justify-between sm:justify-start gap-12 md:gap-16 lg:gap-24 xl:gap-40 ">
                <div className="flex flex-col gap-4">
                    <span className="text-base text-white font-bold ">Quick Links</span>
                    <span className="text-base text-white text-normal transition-colors delay-150 hover:text-orange hover:delay-0" >Features</span>
                    <span className="text-base text-white text-normal transition-colors delay-150 hover:text-orange hover:delay-0" >Rates</span>
                    <span className="text-base text-white text-normal transition-colors delay-150 hover:text-orange hover:delay-0" >FAQs</span>
                    <span className="text-base text-white text-normal transition-colors delay-150 hover:text-orange hover:delay-0" >About Us</span>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-base text-white font-bold ">Legal</span>
                    <span className="text-base text-white text-normal transition-colors delay-150 hover:text-orange hover:delay-0" >Terms & Conditions</span>
                    <span className="text-base text-white text-normal transition-colors delay-150 hover:text-orange hover:delay-0" >Privacy Policy</span>
                    <span className="text-base text-white text-normal transition-colors delay-150 hover:text-orange hover:delay-0" >AML Policy</span>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-base text-cyan font-bold">Contact</span>
                    <span className="text-base text-white text-normal transition-colors delay-150 hover:text-orange hover:delay-0" >+234 (0) 811 384 5995</span>
                    <span className="text-base text-white text-normal transition-colors delay-150 hover:text-orange hover:delay-0" >support@Swap2Naira.org</span>
                    <span className="text-base text-white text-normal transition-colors delay-150 hover:text-orange hover:delay-0" >FAQs</span>
                    
                </div>
            </div>

            <div className="mt-5">
                <p className="text-sm sm:text-base font-semibold text-white mb-4">Disclaimer: Apexpay is an independent body and isn’t directly linked to any brands or products presented on its platform. All related trademarks and word marks are exclusively owned by their respective entities.</p>

                <span className='text-white text-sm my-12 '>© 2023 Copyright. All right reserved</span>
            </div>
        </div>
    )
}

export default Footer