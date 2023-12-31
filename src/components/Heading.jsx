import React from 'react'

const Heading = ({title, subtitle}) => {
    return (
        <div className=' border-b-2 md:mt-40 mb-16 mt-20'>
            <p className=' text-white text-7xl font-bold font-[Syne]'>{title}</p>
            <p className='paragraph mb-16 mt-1 pl-[3px]'>{subtitle}</p>
            <div className=' blur_bg top-[50px] left-[-300px]'></div>
        </div>
    )
}

export default Heading