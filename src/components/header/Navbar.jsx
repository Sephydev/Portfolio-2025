import { useState } from 'react'

import NavItem from './NavItem'

import navbarBarsIcon from '../../assets/icons/navbar-bars-icon.svg'
import navbarCrossIcon from '../../assets/icons/navbar-cross-icon.svg'
import sunIcon from '../../assets/icons/sun-icon.svg'
import moonIcon from '../../assets/icons/moon-icon.svg'

const Navbar = ({darkMode, setDarkMode}) => {
    const [show, setShow] = useState(false)

    const navItems = ["About", "Skills", "Contact"]

    return (
        <div className="flex">
            <button onClick={() => setShow(!show)} className="hover:bg-gray-300 active:bg-gray-400 cursor-pointer rounded-md transition-all duration-300 lg:hidden">
                {
                    show ?
                    <img src={navbarCrossIcon} alt="navbar icon"/> :
                    <img src={navbarBarsIcon} alt="navbar icon"/>
                }
            </button>
            <div className={`${darkMode ? "bg-black text-white" : "bg-white"} absolute pl-4 top-17 w-screen h-screen transition-all ${show ? "right-0" : "right-[100rem]"} lg:static lg:w-auto lg:h-auto lg:flex lg:flex-row lg:items-center`}>
                <nav className={`border-y mr-5 ${darkMode ? "border-gray-700" : "border-gray-200"} pt-4 lg:border-none`}>
                    <ul className="font-medium lg:px-0 lg:flex lg:mr-12">
                        {navItems.map(i => (
                            <NavItem key={i} item={i} setShow={setShow} show={show} darkMode={darkMode} />
                        ))}
                    </ul>
                </nav>
                <div className={`flex flex-col py-4 mr-5 lg:flex-row lg:border-l ${darkMode ? "border-gray-800" : "border-gray-200"}`}>
                    <button onClick={() => setDarkMode(!darkMode)} className="flex justify-between cursor-pointer mb-4 py-2 transition-all duration-300 lg:p-2 lg:rounded-full hover:bg-blue-500 active:bg-gray-400 rounded-md lg:m-0 lg:mx-6 items-center">
                        <span className="lg:hidden">Switch Theme</span>
                        <img src={darkMode ? moonIcon : sunIcon} alt="theme icon" />
                    </button>
                    <a href="#" target="_blank" className={`${darkMode ? "bg-white text-black" : "bg-gray-900 text-white"} m-auto p-1 w-2xs hover:bg-blue-500 cursor-pointer transition-all duration-250 lg:w-auto lg:px-4 rounded-xl`}>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar