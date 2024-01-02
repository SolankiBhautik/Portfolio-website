import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets'
import { HashLink } from 'react-router-hash-link';

function Hero() {
    return (
        <div className='flex flex-col justify-center items-center min-h-[80vh] mt-10'>
            <h1 className='heading1 relative'>Bridging Dimensions: <br className='' />Merging Web Development with the Power of 3D</h1>
            <p className='paragraph text-center text-sm mt-2'>Code meets clay, pixels meet polygons. This is where the boundaries of web design break down and magic unfolds. Forget flat screens, I sculpt digital playgrounds where 3D artistry meets smooth interactions. It's not just design, it's an invitation to explore. Dive deeper than the scroll, experience web design reimagined. Are you ready to cross the bridge? My portfolio awaits.</p>
            <HashLink to="/#project" className='button1 mt-8'>Explore works</HashLink>
            <div className='blur_bg '></div>
        </div>
    )
}

export default Hero