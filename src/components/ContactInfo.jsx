import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <div className="icon-group flex mt-5 justify-center mx-auto">

                    <a href={"https://github.com/Emily-Kang77/Emily-Kang77.github.io"} target="_blank" rel="noopener noreferrer" className="mr-5">
                        <FaGithub size={45} color="white"/>
                    </a>

                    <a href={"https://www.linkedin.com/in/emilykang1/"} target="_blank" rel="noopener noreferrer" className="mr-5">
                        <FaLinkedin size={45} color="white"/>
                    </a>

        </div>
    )
}

export default ContactInfo