import Navbar from './Navbar'

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <div className={`${darkMode ? "bg-black text-white" : "bg-white"} flex pl-4 pr-5 lg:px-20 justify-between lg:justify-evenly items-center sticky top-0 py-4`}>
            <a href="#" className="text-3xl lg:text-5xl font-bold hover:text-blue-500 transition-all duration-300 ">{"<NB />"}</a>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    )
}

export default Header