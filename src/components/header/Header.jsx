import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="flex pl-4 pr-5 z-50 lg:px-20 justify-between lg:justify-evenly items-center sticky top-0 bg-white py-4">
            <span className="text-3xl lg:text-5xl font-bold">{"<NB />"}</span>
            <Navbar />
        </div>
    )
}

export default Header