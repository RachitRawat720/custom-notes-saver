import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='flex flex-row items-center gap-4 pl-5 sm:pl-15 justify-start bg-blue-950 text-white h-17 sm:h-20 md:h-24
                w-screen sticky top-0 z-30 text-xl sm:text-2xl'>
            <div className='h-12 w-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20'><img src={logo} alt="" className='w-full h-full rounded-xl'/></div>
            <div className='flex flex-row justify-evenly w-full h-full items-center'>
                <NavLink to={"/"} className={({isActive}) => `${isActive ? "border-white font-semibold border-b-3 px-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px]" : "text-gray-300 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]"}`}>
                    Home
                </NavLink>
                <NavLink to={"/notes"} className={({isActive}) => `${isActive ? "border-white font-semibold border-b-3 px-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px]" : "text-gray-300 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]"}`}>
                    Notes
                </NavLink>
            </div>
            
        </div>
        
    )
}

export default Navbar
