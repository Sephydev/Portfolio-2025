import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="p-4 flex justify-between">
            <h1 className="text-3xl font-bold">{"<NB />"}</h1>
            <Navbar />
        </div>
    )
}

export default Header