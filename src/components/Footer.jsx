import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import ViteLogo from '../assets/vite.svg';

const Footer = () => {
    return (
        <div className="h-32 bg-white text-gray-400 flex flex-col justify-center items-center">
            <p>made with</p>
            <div className="flex mt-2 space-x-4">
                <FaHtml5 size={24} color="#E34C26" />
                <FaCss3Alt size={24} color="#1572B6" />
                <FaJs size={24} color="#F7DF1E" />
                <FaReact size={24} color="#61DAFB" />
                <SiTailwindcss size={24} color="#38B2AC" />
                <img src={ViteLogo} alt="Vite" className="w-6 h-6" />
            </div>
        </div>
    );
};

export default Footer;
