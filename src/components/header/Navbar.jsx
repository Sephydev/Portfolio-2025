import { useState } from 'react'

import navbarBarsIcon from '../../assets/icons/navbar-bars-icon.svg'
import navbarCrossIcon from '../../assets/icons/navbar-cross-icon.svg'
import sunIcon from '../../assets/icons/sun-icon.svg'

const Navbar = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="flex">
            <button onClick={() => setShow(!show)} className="hover:bg-gray-300 active:bg-gray-400 cursor-pointer rounded-md transition-all duration-300 lg:hidden">
                {
                    show ?
                    <img src={navbarCrossIcon} alt="navbar icon"/> :
                    <img src={navbarBarsIcon} alt="navbar icon"/>
                }
            </button>
            <div className={`absolute pl-4 bg-white top-17 w-screen h-screen transition-all ${show ? "right-0" : "right-[100rem]"} lg:static lg:w-auto lg:h-auto lg:flex lg:flex-row lg:items-center`}>
                <nav className="border-y ml-4 border-gray-200 pt-4 lg:border-none">
                    <ul className="font-medium lg:px-0 lg:flex lg:mr-12">
                        <li className="pb-4 lg:mr-6"><a href="#">About</a></li>
                        <li className="pb-4 lg:mr-6"><a href="#">Work</a></li>
                        <li className="pb-4 lg:mr-6"><a href="#">Testimonials</a></li>
                        <li className="pb-4"><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="flex flex-col p-4 lg:flex-row lg:border-l border-gray-200">
                    <button className="flex justify-between cursor-pointer mb-4 px-4 py-2 transition-all duration-300 lg:p-2 lg:rounded-full hover:bg-gray-300 active:bg-gray-400 rounded-md lg:m-0 lg:mx-6 items-center">
                        <span className="lg:hidden">Switch Theme</span>
                        <img src={sunIcon} alt="theme icon" />
                    </button>
                    <button className="bg-gray-900 m-auto text-white p-1 w-2xs hover:bg-gray-700 cursor-pointer transition-all duration-250 lg:w-auto lg:px-4 rounded-xl">Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar