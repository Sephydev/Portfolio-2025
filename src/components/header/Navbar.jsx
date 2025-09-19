import { useState } from 'react'

import navbarBarsIcon from '../../assets/icons/navbar-bars-icon.svg'
import navbarCrossIcon from '../../assets/icons/navbar-cross-icon.svg'
import sunIcon from '../../assets/icons/sun-icon.svg'

const Navbar = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="flex lg:text-2xl">
            <button onClick={() => setShow(!show)} className="lg:hidden">
                {
                    show ?
                    <img src={navbarCrossIcon} alt="navbar icon"/> :
                    <img src={navbarBarsIcon} alt="navbar icon"/>
                }
            </button>
            <div className={`absolute px-4 bg-white top-18 w-screen h-screen transition-all ${show ? "right-0" : "right-full"} lg:static lg:w-auto lg:h-auto lg:flex lg:flex-row lg:items-center`}>
                <nav className="border-y border-gray-200 pt-4 lg:border-none">
                    <ul className="font-medium lg:flex lg:mr-12">
                        <li className="pb-4 lg:mr-6"><a href="#">About</a></li>
                        <li className="pb-4 lg:mr-6"><a href="#">Work</a></li>
                        <li className="pb-4 lg:mr-6"><a href="#">Testimonials</a></li>
                        <li className="pb-4"><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="flex flex-col p-4 lg:flex-row border-l border-gray-200">
                    <button className="flex justify-between mb-4 lg:m-0 lg:mx-6 items-center">
                        <span className="lg:hidden">Switch Theme</span>
                        <img src={sunIcon} alt="theme icon" />
                    </button>
                    <button className="bg-black m-auto text-white p-1 w-2xs lg:w-auto lg:px-4 rounded-xl">Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar