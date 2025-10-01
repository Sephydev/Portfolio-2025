import copyIcon from "../../assets/icons/copy-icon.svg"

const ContactInfo = ({ icon, info, type}) => {
    return (
        <button onClick={() => navigator.clipboard.writeText(info)}className="flex mb-4 hover:text-blue-500 transition-all duration-300">
            <img src={icon} alt={type} />
            <span className="text-lg lg:text-4xl font-semibold mx-4">{info}</span>
            <img src={copyIcon} alt="copy" />
        </button>
    )
}

export default ContactInfo