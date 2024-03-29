import React, {useState} from 'react'
import { logo, menu, close } from '../assets'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <nav className='flex flex-row justify-between items-center z-10 my-0 sm:my-4 '>
            <div>
                <NavLink to="/" onClick={() => setIsOpen(false)}><img src={logo} alt="Brand-logo" className='w-[200px] md:m-0 m-3'/></NavLink>
            </div>
            <div className={`z-10 navigation md:flex  items-center gap-1 ${isOpen ? 'open' : ' '}`}>
                <NavLink to="/" onClick={() => setIsOpen(false)} className='text-[14px] paragraph'>HOME</NavLink>
                <HashLink to="/#project" onClick={() => setIsOpen(false)} className='text-[14px] paragraph !scroll-smooth	'>WORK</HashLink>
                <NavLink to="/AboutMe" onClick={() => setIsOpen(false)}  className='text-[14px] paragraph'>ABOUT ME</NavLink>
                <NavLink to="/CantactMe" onClick={() => setIsOpen(false)} className='text-[14px] paragraph'>CONTECT ME</NavLink>
            </div>
            <div className='md:hidden z-10 fixed top-0 right-0 p-5 rounded-bl-3xl bg-[#0000007c] backdrop-blur-[10px]'>
                {
                    isOpen ? (<img src={close} alt="close menu" onClick={() => setIsOpen(false)}/>) : (
                        <img src={menu} alt="open menu" onClick={() => setIsOpen(true)}/>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar