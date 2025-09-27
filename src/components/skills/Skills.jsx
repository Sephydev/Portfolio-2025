import technologiesData from "./technologiesData"
import test from "../../assets/img/technologiesIcon/HTML5.svg"

const Skills = ({ darkMode }) => {
    return (
        <div id="skills" className="min-w-screen pl-4 pr-5 py-16 lg:px-20">
            <div className="flex flex-col items-center mb-6 lg:mb-12">
                <h2 className={`${darkMode ? "bg-gray-700" : "bg-gray-200" } inline py-1 px-5 rounded-2xl text-sm font-medium mb-6 lg:mb-12`}>Skills</h2>
                <p className="text-center">The skills, tools and technologies I have learned:</p>
            </div>
            <ul className="max-w-[1280px] m-auto grid grid-cols-3 gap-4 lg:grid-flow-col lg:grid-rows-2 lg:auto-cols-fr lg:gap-12">
                {technologiesData.map(t => (
                    <li key={t.name} className="flex flex-col items-center">
                        <img src={t.src} alt={t.name} className="max-w-[64px]" />
                        <span>{t.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Skills