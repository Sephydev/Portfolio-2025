import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="p-4 flex justify-between items-center">
            <h1 className="text-3xl lg:text-5xl font-bold">{"<NB />"}</h1>
            <Navbar />
        </div>
    )
}

export default Header