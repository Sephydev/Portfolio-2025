import ProjectCard from './ProjectCard'
import projects from "./projects"
import portfolioImg from "../../assets/img/screenShot-Portfolio/Porfolio-Screenshot.png"

const Work = ({darkMode}) => {
    const description = "This is my personal portfolio website, built to showcase my skills, projects, and contact information as a junior web developer."
    const technologies = ["React", "TailwindCSS", "Vite", "Git & Github", "Vercel"]
    const githubLink = "https://github.com/Sephydev/Portfolio-2025"
    const demoLink = "https://portfolio-2025-kappa-weld.vercel.app/"
    
    return (
        <div id="work" className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} bg-gray-100 min-w-screen  pl-4 pr-5 py-16 md:px-15 lg:px-20`}>
            <div className="flex justify-center">
                <h2 className={`${darkMode ? "bg-gray-700" : "bg-gray-200" } inline py-1 px-5 rounded-2xl text-sm font-medium mb-6 lg:mb-12`}>Work</h2>
            </div>
            <p className="text-center mb-6">Some of the noteworthy projects I have:</p>
            {projects.map(p => (
                <ProjectCard
                  image={p.img}
                  title={p.title}
                  description={p.description}
                  technologies={p.technologies}
                  demoLink={p.demoLink}
                  githubLink={p.githubLink}
                />
            ))}
        </div>
    )
}

export default Work