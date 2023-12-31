import React from 'react'
import { Heading } from './'
import { profile } from '../assets'

const AboutMePage = () => {
    return (
        <>
            <Heading title={"About Me"} subtitle={"Little Brief About Myself"} />
            <div className='flex justify-center gap-4 sm:flex-row flex-col '>
                <h1 className='heading2 flex-1'>Designing the future, <br /> one keyboard stroke at a time.</h1>
                <p className='paragraph flex-1'>Code and clay, pixels and polygons – I build websites that blur the lines. I weave captivating 3D animations into user-friendly interfaces, crafting digital experiences that are as beautiful as they are intuitive. It's not just design, it's an immersive journey where your screen becomes a portal to another world. So, get ready to explore and be amazed – my portfolio awaits!</p>
            </div>
            <div className=' flex mt-40 gap-4 flex-col md:flex-row'>
                <div className=' grow'>
                    <p className='heading3 my-4'>From Pixels to Portals: My Journey in Creative Coding</p>
                    <p className='pb-4 paragraph'>It all started with a spark. Not a literal one, mind you, but a spark of fascination with how pixels could dance across screens, morphing into interfaces that not only guided users, but sparked emotions. UX/UI design ignited my imagination, whispering promises of worlds built from code and creativity.
                    </p>

                    <p className="mt-4 paragraph">BCA ignited the learning furnace. Programming basics became my fuel, lines of code the building blocks of my digital dreams. Websites became my canvases, HTML, CSS, and JavaScript my brushes. Small projects were my first strokes, simple yet filled with the thrill of creation. Each line of code a step closer to the worlds I envisioned.</p>

                    <p className="mt-4 paragraph">The universe of React opened next, its possibilities like celestial constellations beckoning me to explore. From static pages to interactive landscapes, I learned to orchestrate pixels into experiences that pulsed with life. Firebase, like a hidden doorway, unveiled the secrets of the backend, the engine that powered my digital creations.</p>

                    <p className="mt-4 paragraph">But my thirst for knowledge had no end. CS50x became my Everest, its courses like challenging climbs. CS50x and CS50Python honed my logical muscles, unveiling the deeper connections between code and reality. Front-end languages became my dialects, their similarities and differences the secrets I cracked along the way. Self-learning became my superpower, each obstacle conquered adding fuel to my creative fire.</p>

                    <p className="mt-4 paragraph">Blender, then, became my playground of 3D wonders. Abstract models and animations spun into existence, geometry nodes and material nodes my magic spells. My fascination with node-based programming, both in Blender and the front-end, unlocked worlds of limitless possibilities.</p>

                    <p className="mt-4 paragraph">Today, I stand at the crossroads of web and 3D, a portal architect bridging the gap between static pixels and immersive experiences. Websites are no longer just pages, they're portals to captivating worlds sculpted from code and imagination. Every line of code is a brushstroke, every animation a dance of pixels, all orchestrated to create websites that not only function, but captivate.</p>

                    <p className="mt-4 paragraph">This is my journey, still unfolding, each line of code a stepping stone, each 3D animation a leap forward. It's a story of pixels painted into portals, of lines of code woven into wonder. And I invite you to join me as I continue to craft the future, one mesmerizing pixel at a time.</p>
                </div>
                <div className='basis-full'>
                    <img src={profile} alt="Profile image" className='grayscale rounded-[30px] object-contain m-auto' />
                    <div className='blur_bg -z-10'></div>
                </div>
            </div>
        </>
    )
}

export default AboutMePage