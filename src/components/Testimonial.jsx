import React from 'react'
import { quots } from '../assets'

const Testimonial = () => {
    return (
        <div className='mt-20 sm:ml-10 lg:ml-40 ml-2 relative'>
            <h2 className='heading2 mb-10 relative'>Testimonial</h2>
            <p className='paragraph max-w-[700px]'>“Bhautik, remember those rough sketches on my notepad? You took my basic ideas and rocketed them into a stunning 3D website! Let's face it, my design skills are closer to stick figures than pixels, but you're a master of web magic. You transformed my impossible dream into a jaw-dropping reality, each click an adventure unfolding. I truly owe you one, Bhautik! Maybe not a lifetime of free maintenance, but I'll definitely be singing your praises to anyone who needs a web wizard. Seriously, thank you for everything. You're a rockstar, and my website is living proof. - Bhautik, your grateful client”</p>
            <p className='heading3 mt-2'>-Martin lee</p>
            <img src={quots} alt="quots" className=' absolute top-0 right-10 -z-10 hidden sm:block' />
            <div className=' blur_bg top-0 left-[-100px]'></div>
        </div>
    )
}

export default Testimonial