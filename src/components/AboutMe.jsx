import React from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../assets'

const AboutMe = () => {
    return (
        <div className='flex  flex-col-reverse lg:flex-row items-center py-5 justify-around mx-auto'>
            <div className='flex flex-col  items-center lg:items-start text-center lg:text-start'>
                <h2 className='heading2 relative'>Let’s get know about me closer</h2>
                <p className='paragraph mt-4 max-w-[600px]'>Code and clay, pixels and polygons – I build websites that blur the lines. I weave captivating 3D animations into user-friendly interfaces, crafting digital experiences that are as beautiful as they are intuitive. It's not just design, it's an immersive journey where your screen becomes a portal to another world. So, get ready to explore and be amazed – my portfolio awaits!</p>
                <Link to={'/AboutMe'} className='button1 mt-8'>Discover More About Me</Link>
                <div className=' blur_bg'></div>
            </div>
            <div className='py-10 flex justify-center items-center'>
                <img src={profile} alt="profile pictior" className='grayscale rounded-[30px] object-contain w-[70%]' />
            </div>
        </div>
    )
}

export default AboutMe