import ContactInfo from './ContactInfo.jsx'
import mailIcon from "../../assets/icons/mail-icon.svg"
import phoneIcon from "../../assets/icons/phone-icon.svg"
import githubIcon from "../../assets/icons/github-icon.svg"

const Contact = () => {
    return (
        <div className="bg-gray-100 min-w-screen pl-4 pr-5 py-16 md:px-15 lg:px-20">
            <div className="flex flex-col items-center max-w-[600px] m-auto">
                <h2 className="inline bg-gray-200 py-1 px-5 rounded-2xl text-sm font-medium mb-4 lg:mb-12">Get in touch</h2>
                <p className="text-center mb-6">I'm currently looking for my first professional experience as a junior web developer. Feel free to reach out if you're hiring, have an opportunity to discuss, or just want to connect.</p>
                <ContactInfo icon={mailIcon} type="mail" info="sephydev@gmail.com" />
                <ContactInfo icon={phoneIcon} type="phone" info="+32 470330420" />
                <p className="text-center mt-6 mb-4">You may also find me on these platforms!</p>
                <a href="#"><img src={githubIcon} alt="github" /></a>
            </div>
        </div>
    )
}

export default Contact