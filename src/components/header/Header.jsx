import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <span className="text-3xl lg:text-5xl font-bold">{"<NB />"}</span>
            <Navbar />
        </div>
    )
}

export default Header