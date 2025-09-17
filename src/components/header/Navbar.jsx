import { useState } from 'react'

import navbarBarsIcon from '../../assets/icons/navbar-bars-icon.svg'
import navbarCrossIcon from '../../assets/icons/navbar-cross-icon.svg'
import sunIcon from '../../assets/icons/sun-icon.svg'

const Navbar = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <button onClick={() => setShow(!show)}>
                {
                    show ?
                    <img src={navbarCrossIcon} alt="navbar icon"/> :
                    <img src={navbarBarsIcon} alt="navbar icon"/>
                }
            </button>
            <div className={`absolute px-4 bg-white top-18 w-screen h-screen transition-all ${show ? "left-0" : "left-full"}`}>
                <nav className="border-y border-gray-200 pt-4">
                    <ul className="font-medium">
                        <li className="pb-4"><a href="#">About</a></li>
                        <li className="pb-4"><a href="#">Work</a></li>
                        <li className="pb-4"><a href="#">Testimonials</a></li>
                        <li className="pb-4"><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="flex flex-col p-4">
                    <button className="flex justify-between mb-4 items-center">
                        <span>Switch Theme</span>
                        <img src={sunIcon} alt="theme icon" className="inline" />
                    </button>
                    <button className="bg-black text-white p-1 rounded-xl">Download CV</button>
                </div>
            </div>
        </>
    )
}

export default Navbar