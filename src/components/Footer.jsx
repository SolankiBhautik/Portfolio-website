import React, { useState } from 'react'
import { logo } from '../assets'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <section className='mt-20 bg-neutral-900 pt-20'>
            <div className='flex flex-col gap-4 items-center'>
                <div className="w-full text-center text-orange-400 text-2xl font-bold font-['Syne']">Get in Touch With Us</div>
                <Link to="/CantactMe" className=' button1'>Contact Me</Link>
            </div>
            <div className='md:px-10 px-4 mt-40 flex justify-between lg:flex-row flex-col items-center gap-10'>
                <img src={logo} alt="logo" className=' object-contain w-[241px] h-[42px]' />
                <p className="heading2">Top3 Bhavnagar Gujrat</p>
                <div className='flex flex-col gap-2'>
                    <p className='heading3'>+91 951 242 3831</p>
                    <div className='flex gap-1 lg:justify-start justify-center '>
                        <a href="https://www.instagram.com/bhautikssolanki/">
                            <FaInstagram
                                className="hover:fill-[#42A5F5] transition"
                                size={26}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className='border-t mt-10 pb-8'>
                <p className='paragraph text-center mt-5'>© 2023. Bhautik. All rights reserved. </p>
            </div>
        </section>
    )
}

export default Footer
