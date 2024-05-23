import React from 'react'
import Navbar from '../components/Navbar'
import DownloadApp from '../components/DownloadApp'
import Footer from '../components/Footer'
import { TickCircle } from 'iconsax-react'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="mx-auto px-8 sm:px-12 lg:px-16 xl:px-24  max-w-[100rem] w-full relative flex flex-col justify-between gap-4 items-start  pt-10 md:pt-12 lg:pt-16 xl:pt-24 pb-8 md:pb-10 lg:pb-12 xl:pb-16 bg-blueZ">
                <div className="w-full flex flex-col gap-4 lg:gap-6 text-left items-start">
                    <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-7xl text-white leading-normal">
                        About us
                    </h3>
                    <p className="text-base lg:text-xl lg:leading-7 text-blueGray font-normal">Welcome to Apexpay, your trusted trading platform since 2018, where converting your unused gift cards into instant Naira has never been easier. We are dedicated to providing a seamless and secure solution for all your gift card trading needs.</p>
                </div>
            </div>
            <div className='bg-darkPurple w-full flex flex-col gap-5 pt-10 sm:pt-16 lg:pt-24 pb-8 px-8 sm:px-12 lg:px-16 xl:px-24'>
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                    <div className="">
                        <h4 className="text-white font-bold text-2xl lg:text-3xl">Our Story</h4>
                        <p className="text-base text-white/30 leading-6 mt-4 md:mt-6">Established in 2018, Apexpay was born out of a passion for innovation and a commitment to simplifying the gift card trading process. We recognized the growing demand for a reliable and efficient platform to convert gift cards into cash, and thus, Apexpay was created to bridge this gap.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                    <div className="">
                        <h4 className="text-white font-bold text-2xl lg:text-3xl">Our Mission</h4>
                        <p className="text-base text-white/30 leading-6 mt-4 md:mt-6">
                            At Apexpay Nigeria, our mission is clear: to empower individuals across Nigeria to unlock the value of their unused gift cards. We understand that gift cards can often go unused, and we are here to ensure that you get the most out of them. Our goal is to provide a user-friendly platform that allows you to sell your gift cards effortlessly, with the assurance of getting instant Naira in return.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                    <div className="">
                        <h4 className="text-white font-bold text-2xl lg:text-3xl">Why Choose Apexpay?</h4>
                        <ol className="list-decimal text-white/30 m-0 ml-4">
                            <li className="text-base text-white/30 leading-6 mt-4 md:mt-6">
                                <span className="font-bold">Trustworthiness:</span>&nbsp;We take security seriously. Our platform is built with state-of-the-art encryption and security measures to protect your personal information and ensure a safe trading environment.
                            </li>
                            <li className="text-base text-white/30 leading-6 mt-4 md:mt-6">
                                <span className="font-bold">Instant Naira:</span>&nbsp;Say goodbye to waiting days for your funds. At Apexpay, we offer instant payment once your gift card is verified, so you can have your Naira when you need it.
                            </li>

                            <li className="text-base text-white/30 leading-6 mt-4 md:mt-6">
                                <span className="font-bold">User-Friendly:</span>&nbsp;We've designed our platform to be intuitive and user-friendly, making it easy for anyone, regardless of technical expertise, to navigate and trade gift cards effortlessly.
                            </li>

                            <li className="text-base text-white/30 leading-6 mt-4 md:mt-6">
                                <span className="font-bold">Customer Support:</span>&nbsp;Our dedicated customer support team is always ready to assist you. Whether you have questions, concerns, or need assistance with a trade, we're here to help.
                            </li>

                            <li className="text-base text-white/30 leading-6 mt-4 md:mt-6">
                                <span className="font-bold">Transparency:</span>&nbsp;We believe in transparency in all our transactions. You'll always know the value of your gift card and the rate at which it will be converted into Naira.
                            </li>

                            <li><p className="text-base text-white/30 leading-6 mt-4 md:mt-6"><span className="font-bold">Wide Range of Gift Cards:</span>&nbsp;Apexpay accepts a wide variety of gift cards from popular brands, ensuring you can trade your cards from virtually any source.</p></li>
                        </ol>

                    </div>
                </div>
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h4 className="text-white font-bold text-2xl lg:text-3xl">How it works</h4>
                        <div className="flex gap-2 sm:gap-4 items-start">
                            <TickCircle size="32" color="#FF8A65"/>
                            <div className="flex flex-col gap-1 sm:gap-2">
                                <h6 className="text-lg sm:text-2xl text-white">Create an Account</h6><p className="text-base text-white/30">Sign up for a free Apexpay account to get started.</p>
                            </div>
                        </div>
                        <div className="flex gap-2 sm:gap-4 items-start">
                            <TickCircle size="32" color="#FF8A65"/>
                            <div className="flex flex-col gap-1 sm:gap-2">
                                <h6 className="text-lg sm:text-2xl text-white">Submit Your Gift Card</h6><p className="text-base text-white/30">Provide the details of your gift card, and our system will verify its value.</p>
                            </div>
                        </div>
                        <div className="flex gap-2 sm:gap-4 items-start">
                            <TickCircle size="32" color="#FF8A65"/>
                            <div className="flex flex-col gap-1 sm:gap-2">
                                <h6 className="text-lg sm:text-2xl text-white">Get Instant Naira</h6><p className="text-base text-white/30">Once your gift card is verified, you'll receive instant Naira in your Apexpay Nigeria account.</p>
                            </div>
                        </div>
                        <div className="flex gap-2 sm:gap-4 items-start">
                            <TickCircle size="32" color="#FF8A65"/>
                            <div className="flex flex-col gap-1 sm:gap-2">
                                <h6 className="text-lg sm:text-2xl text-white">Withdraw Your Funds</h6>
                                <p className="text-base text-white/30">
                                    Withdraw your Naira or Cedis to your bank account whenever you're ready.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                    <div className="">
                        <h4 className="text-white font-bold text-2xl lg:text-3xl">Join our community</h4>
                        <p className="text-base text-white/30 leading-6 mt-4 md:mt-6">
                            Join the Apexpay community and start converting your unused gift cards into instant cash today. Whether you have a single gift card or a collection, we're here to help you maximize their value. Your trust is our priority, and we're committed to providing you with the best gift card trading experience in Nigeria and Ghana.
                        </p>
                    </div>
                </div>
            </div>
            <DownloadApp />
            <Footer />
            
        </div>
    )
}

export default About