import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div id="contact" className="h-screen">
            <div className="h-full flex flex-col justify-evenly">
                <div className="w-full flex justify-center items-center flex-col">
                    <h2>Contacto</h2>
                    <form action="https://formspree.io/f/xeqbqgyp" method="POST" className="flex flex-col gap-2">
                        <input
                            className="rounded-md p-1 text-black"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nombre"
                        />
                        <input
                            className="rounded-md p-1 text-black"
                            type="email"
                            name="_replyto"
                            id="email"
                            placeholder="Email"
                        />
                        <textarea
                            className="rounded-md p-1 text-black"
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Mensaje"
                        ></textarea>
                        <input type="hidden" name="_subject" value="Nuevo mensaje de contacto" />
                        <input type="hidden" name="_next" value="/" />
                        <input className="hover:text-pink-600" type="submit" value="Enviar" />
                    </form>
                </div>
                <div className="flex justify-center">
                    <div className="flex gap-10">
                        <a href="https://www.linkedin.com/in/sebastian-miranda-eade-a619831ba/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://github.com/smirandaeade" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/seb4ckerman/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
