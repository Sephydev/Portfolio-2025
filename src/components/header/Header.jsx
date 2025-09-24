import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="flex justify-between items-center sticky top-0 bg-white py-4 lg:static">
            <span className="text-3xl lg:text-5xl font-bold">{"<NB />"}</span>
            <Navbar />
        </div>
    )
}

export default Header