import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Verificar si hay campos vacíos
        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Enviar el formulario
        const formData = new FormData();
        formData.append('name', name);
        formData.append('_replyto', email);
        formData.append('message', message);

        // Realizar la solicitud de envío aquí, por ejemplo, utilizando fetch o axios

        // Restablecer los campos del formulario después de enviarlo
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div id="contact" className="h-screen">
            <div className="h-full flex flex-col justify-evenly">
                <div className="w-full flex justify-center items-center flex-col">
                    <h2>Contacto</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <input
                            className="rounded-md p-1 text-black"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nombre"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <input
                            className="rounded-md p-1 text-black"
                            type="email"
                            name="_replyto"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <textarea
                            className="rounded-md p-1 text-black"
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Mensaje"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
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
