import githubIcon from "../../assets/icons/github-icon.svg"
import locationIcon from "../../assets/icons/location-icon.svg"
import greenDotIcon from "../../assets/icons/green-dot-icon.svg"
import avatar from "../../assets/img/avatar.svg"

const Hero = () => {
    return (
        <div className="lg:m-auto lg:my-20 my-20 pl-4 pr-5 lg:flex lg:flex-row-reverse md:px-15 lg:px-20 lg:justify-between max-w-[1280px]">
            <img className="max-w-[240px] max-h-[240px] rounded-full m-auto lg:mx-0 lg:mt-0 mb-12 shadow-[0px_10px_0px_10px_#2b7fff] lg:shadow-[40px_40px_0px_0px_#2b7fff]" src={avatar} alt="avatar" />
            <div className="lg:max-w-xl lg:flex lg:flex-col justify-center">
                <h1 className="text-3xl mb-2 font-semibold">Hello, I'm Nicolas 👋</h1>
                <p className="mb-12">
                    I'm a junior full-stack web developer specializing React & Node.js.
                    I'm passionate about building clean, responsive, and user-friendly web applications.
                    After completing multiple intensive training programs, I keep improving my skills through real projects and continuous self-learning.
                    I'm eager to enhance my professional experience where I can grow, contribute, and deliver value. 
                </p>
                <a href="https://maps.app.goo.gl/TDmaCWQVWFcxbCBw7" target="_blank" className="w-fit mb-2 hover:text-blue-500 transition-all duration-300"><img className="inline mr-2" src={locationIcon} alt="location icon" />Liège, Belgium</a>
                <div className="mb-12"><img className="inline ml-2 mr-4 w-[16px] h-[16px] mr-2" src={greenDotIcon} alt="available icon" />Available for new projects</div>
                <a href="https://github.com/Sephydev" target="_blank">
                    <img className="inline hover:bg-blue-500 p-3 rounded-full transition-all duration-300" src={githubIcon} alt="github icon"/>
                </a>
            </div>
        </div>
    )
}

export default Hero