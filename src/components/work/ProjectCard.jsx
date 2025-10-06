import linkIcon from "../../assets/icons/link-icon.svg"
import githubIcon from "../../assets/icons/github-icon.svg"

const ProjectCard = ({ image, title, description, technologies, demoLink, githubLink }) => {
    return (
        <div className="rounded-xl shadow-[0px_1px_10px_1px_#2b7fff] lg:max-w-[1080px] lg:p-12 lg:m-auto lg:flex lg:items-center">
        <div className="p-8 bg-white rounded-t-xl lg:rounded-xl lg:max-w-[50%]">
            <img src={image} alt="project image" className="rounded-xl" />
        </div>
        <div className="p-8">
            <h3 className="font-semibold mb-6">{title}</h3>
            <p className="mb-6">{description}</p>
            <ul className="flex gap-2 flex-wrap mb-6">
                {technologies.map(t => (
                    <li className="bg-gray-200 px-5 rounded-full">{t}</li>
                ))}
            </ul>
            <ul className="flex gap-4">
                <li>
                    <a href={demoLink} target="_blank">
                        <img src={linkIcon} alt="link icon" className="inline hover:bg-blue-500 p-3 rounded-full transition-all duration-300" />
                    </a>
                </li>
                <li>
                    <a href={githubLink} target="_blank">
                        <img src={githubIcon} alt="github icon" className="inline hover:bg-blue-500 p-3 rounded-full transition-all duration-300" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default ProjectCard