import AboutMeImg from "../../assets/img/aboutMeImg.svg"

const AboutMe = () => {
    return (
        <div className="bg-gray-100 min-w-screen pl-4 pr-5 py-16 lg:px-20">
            <div className="flex justify-center">
                <h1 className="inline bg-gray-200 py-1 px-5 rounded-2xl text-sm font-medium mb-6 lg:mb-12">About me</h1>
            </div>
            <div className="flex flex-col xl:flex-row justify-evenly items-center mb-22">
                <img src={AboutMeImg} alt="Someone making web design presentation" className="max-w-3xs lg:max-w-2xs shadow-[0px_20px_0px_20px_#e5e7eb] lg:shadow-[-40px_40px_0px_0px_#e5e7eb] border-l-[5px] border-b-[5px] border-gray-100 bg-gray-100 m-auto xl:m-0 mb-22 xl:ml-32"/>
                <div className="lg:max-w-xl">
                    <div className="text-2xl lg:text-3xl mb- lg:mb-12"><strong>Curious about me? Here you have it:</strong></div>
                    <p className="mb-4">
                        I'm a junior full-stack web developer specializing in React.js and Node.js.
                    I focus on building clean, responsive, and user-friendly web applications, and I enjoy turning indeas into functional products.
                    </p>
                    <p className="mb-4">
                        My journey started with a year of computer science studies at university of Tours, followed by several intensive training programs such as Becode, IFAPME and FullStackOpen curriculum. These experences taught me the fundamentals of modern web development and sparked by passion for learning new technologies and improving my skills.
                    </p>
                    <p className="mb-4">
                        Today, I'm eager to join a team where I can contribute to   real-world projects, continue growing as a developer, and deliver     value from day one.
                    </p>
                    <div className="mb-4">Quick facts about me:</div>
                    <ul className="list-disc mb-4 ml-4">
                        <li>Passionate self-learner</li>
                        <li>Focused on writing clean and maintanable code</li>
                        <li>Eligible for a PFI (Plan Formation-Insertion) to support my first professional experience</li>
                    </ul>
                    <p>Feel free to check out my <a href="#" className="underline underline-offset-[3px]">Github</a> or connect with me - I'm always open to learning opportunities and collaboration!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
