import portfolioImg from "../../assets/img/screenShot-Portfolio/Porfolio-Screenshot.png"
import linkIcon from "../../assets/icons/link-icon.svg"
import githubIcon from "../../assets/icons/github-icon.svg"

const Work = ({darkMode}) => {
    return (
        <div id="work" className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} bg-gray-100 min-w-screen  pl-4 pr-5 py-16 md:px-15 lg:px-20`}>
            <div className="flex justify-center">
                <h2 className={`${darkMode ? "bg-gray-700" : "bg-gray-200" } inline py-1 px-5 rounded-2xl text-sm font-medium mb-6 lg:mb-12`}>Work</h2>
            </div>
            <p className="text-center mb-6">Some of the noteworthy projects I have:</p>
            <div className="rounded-xl shadow-[0px_1px_10px_1px_#2b7fff] lg:max-w-[1080px] lg:p-12 lg:m-auto lg:flex lg:items-center">
                <div className="p-8 bg-white rounded-t-xl lg:rounded-xl lg:max-w-[50%]">
                    <img src={portfolioImg} alt="Portfolio image" className="rounded-xl" />
                </div>
                <div className="p-8">
                    <h3 className="font-semibold mb-6">Portfolio</h3>
                    <p className="mb-6">This is my personal portfolio website, built to showcase my skills, projects, and contact information as a junior web developer.</p>
                    <ul className="flex gap-2 flex-wrap mb-6">
                        <li className="bg-gray-200 px-5 rounded-full">React</li>
                        <li className="bg-gray-200 px-5 rounded-full">TailwindCSS</li>
                        <li className="bg-gray-200 px-5 rounded-full">Vite</li>
                        <li className="bg-gray-200 px-5 rounded-full">Git&Github</li>
                        <li className="bg-gray-200 px-5 rounded-full">Vercel</li>
                    </ul>
                    <ul className="flex gap-4">
                        <li>
                            <a href="https://portfolio-2025-kappa-weld.vercel.app/https://portfolio-2025-kappa-weld.vercel.app/" target="_blank">
                                <img src={linkIcon} alt="link icon" className="inline hover:bg-blue-500 p-3 rounded-full transition-all duration-300" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Sephydev/Portfolio-2025" target="_blank">
                                <img src={githubIcon} alt="github icon" className="inline hover:bg-blue-500 p-3 rounded-full transition-all duration-300" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Work