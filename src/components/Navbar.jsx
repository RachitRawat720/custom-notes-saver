import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex flex-row items-center gap-4 place-content-evenly bg-blue-950 text-white h-12
        w-screen sticky top-0 z-30 text-xl sm:text-2xl'>
            <NavLink to={"/"}>
                Home
            </NavLink>
            <NavLink to={"/notes"}>
                Notes
            </NavLink>
        </div>
    )
}

export default Navbar
