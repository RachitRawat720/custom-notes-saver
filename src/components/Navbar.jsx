import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='flex flex-row items-center gap-4 pl-5 sm:pl-15 justify-start bg-blue-950 text-white h-17 sm:h-20 md:h-24
                w-screen sticky top-0 z-30 text-xl sm:text-2xl'>
            <div className='h-15 w-15 sm:w-17 sm:h-17 md:w-20 md:h-20'><img src={logo} alt="" className='w-full h-full rounded-xl'/></div>
            <div className='flex flex-row justify-evenly w-full h-full items-center'>
                <NavLink to={"/"} className={({isActive}) => `${isActive ? "border-white border-2 py-0.5 px-2 md:py-1 md:px-4" : ""}`}>
                    Home
                </NavLink>
                <NavLink to={"/notes"} className={({isActive}) => `${isActive ? "border-white border-2 py-0.5 px-2 md:py-1 md:px-4" : ""}`}>
                    Notes
                </NavLink>
            </div>
            
        </div>
        
    )
}

export default Navbar
