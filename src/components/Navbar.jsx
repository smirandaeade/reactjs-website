import { useState } from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import logoImage from '../assets/smlogo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };
    
    return (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg z-50">
            <div className="flex justify-between items-center p-4">
                <img src={logoImage} alt="Logo" className="w-40" />
                <div className="hidden md:flex space-x-4">
                    <button><Link to="inicio" smooth={true} duration={0} offset={0} className="text-white hover:text-pink-600">Inicio</Link></button>
                    <button><Link to="about" smooth={true} duration={0} offset={-20} className="text-white hover:text-pink-600">¿Quien soy?</Link></button>
                    <button><Link to="skills"  smooth={true} duration={0} offset={-20} className="text-white hover:text-pink-600">Habilidades</Link></button>
                    <button><Link to="contact"  smooth={true} duration={0} offset={0} className="text-white hover:text-pink-600">Contacto</Link></button>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="flex flex-col gap-4 items-center
                md:hidden bg-white p-4">
                    <button><Link onClick={handleLinkClick} to="inicio" smooth={true} duration={0} offset={0} className="block text-black hover:text-pink-600">Inicio</Link></button>
                    <button><Link onClick={handleLinkClick} to="about" smooth={true} duration={0} offset={-20} className="block text-black hover:text-pink-600">¿Quien soy?</Link></button>
                    <button><Link onClick={handleLinkClick} to="skills"  smooth={true} duration={0} offset={-20} className="block text-black hover:text-pink-600">Habilidades</Link></button>
                    <button><Link onClick={handleLinkClick} to="contact"  smooth={true} duration={0} offset={0} className="block text-black hover:text-pink-600">Contacto</Link></button>
                </div>
            )}
            {/* <div className="md:hidden flex justify-center items-center space-x-4 p-4 bg-white fixed bottom-0 left-0 w-full">
                <a href="#" className="text-gray-800"><FaLinkedin size={24} /></a>
                <a href="#" className="text-gray-800"><FaInstagram size={24} /></a>
                <a href="#" className="text-gray-800"><FaGithub size={24} /></a>
            </div> */}
        </nav>
    );
};

export default Navbar;
