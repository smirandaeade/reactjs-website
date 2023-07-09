import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa todos los campos del formulario',
                customClass: {
                    content: 'swal-content-no-scrollbar' // Clase CSS personalizada para deshabilitar el scrollbar
                }
            });
            return;
        }

        // Si todos los campos están completos, puedes continuar con el envío del formulario a Formspree.
        event.target.submit();
    };

    return (
        <div id="contact" className="h-screen">
            <div className="h-full flex flex-col justify-evenly">
                <div className="w-full flex justify-center items-center flex-col">
                    <h2>Contacto</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2" action="https://formspree.io/f/xeqbqgyp" method="POST">
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
