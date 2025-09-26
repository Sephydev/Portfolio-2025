import copyIcon from "../../assets/icons/copy-icon.svg"

const ContactInfo = ({ icon, info, type}) => {
    return (
        <div className="flex mb-4">
            <img src={icon} alt={type} />
            <span className="text-lg lg:text-4xl font-semibold mx-4">{info}</span>
            <button><img src={copyIcon} alt="copy" /></button>
        </div>
    )
}

export default ContactInfo