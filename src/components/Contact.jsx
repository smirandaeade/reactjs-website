import CustomVideoBg from "./CustomVideoBg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div id="contact" className="h-screen">
            <CustomVideoBg />
            <div className="h-full flex flex-col xl:flex-row justify-evenly">
                <div className="w-full flex justify-center items-center flex-col">
                    <h2>Contacto</h2>
                    <form action="" className="flex flex-col gap-2">
                        <input
                            className="rounded-md"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nombre"
                        />
                        <input
                            className="rounded-md"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                        <textarea
                            className="rounded-md"
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Mensaje"
                        ></textarea>
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
                <div className="flex justify-center">
                    <div className="flex gap-3">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
