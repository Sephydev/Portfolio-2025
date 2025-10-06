const Footer = ({darkMode}) => {
    return (
        <footer className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} py-6 text-center`}>
            <p className="mb-1">&copy; 2025</p>
            <p className="mb-1">Designed by <a href="https://www.figma.com/@shahsagarm" className="hover:text-blue-500 transition-all duration-300 underline underline-offset-[3px]">Sagar Shah</a></p>
            <p>Coded by <a href="https://github.com/Sephydev" className="hover:text-blue-500 transition-all duration-300 underline underline-offset-[3px]">Sephydev</a></p>
        </footer>
    )
}

export default Footer