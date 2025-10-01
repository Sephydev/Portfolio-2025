const NavItem = ({ item, setShow, show, darkMode }) => {
    return (
        <li className="pb-4 lg:mr-6"><a href={`#${item.toLowerCase()}`} onClick={() => setShow(!show)} className={`${darkMode ? "text-white" : "text-black"} text-black hover:text-blue-500 transition-all duration-300`}>{item}</a></li>
    )
}

export default NavItem