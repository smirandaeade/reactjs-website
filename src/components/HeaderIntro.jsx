import { useState } from 'react';
import { Link } from 'react-scroll';
import Select from 'react-select';
import ukFlag from '../assets/united-kingdom-svgrepo-com.png';
import esFlag from '../assets/spain-svgrepo-com.png';

const HeaderIntro = (prop) => {
    const { showUnderscore } = prop;

    const options = [
        { value: 'es', label: <img src={esFlag} alt="Bandera Español" className="w-4 h-4" /> },
        { value: 'en', label: <img src={ukFlag} alt="Bandera English" className="w-4 h-4" /> },
    ];
    const defaultValue = options.find((option) => option.value === 'es');

    const [selectedOption, setSelectedOption] = useState(defaultValue);

    const handleOptionChange = (selected) => {
        setSelectedOption(selected);
    };

    const handleSelectMenuOpen = () => {
        // Desenfocar el select para ocultar el teclado en dispositivos móviles
        document.activeElement.blur();
    };

    const cvLink = selectedOption.value === 'es' ? 'https://drive.google.com/file/d/17RQPkvE75h_11jl2_Yyy8hSag-qlb2gz/view?usp=drive_link' : 'https://drive.google.com/file/d/1kf32oIE_3eaozLlJEdvIaGTr3wib2eAp/view?usp=drive_link';

    return (
        <div className="relative flex flex-col xl:flex-row justify-center items-center h-screen">
            <div className="ml-5 lg:ml-20 w-full">
                <h1 className="text-6xl">sebastian miranda eade</h1>
                <h2 className="text-4xl mt-5">
                    web developer{' '}
                    <span className="text-pink-600">
                        &#62;
                        <span className={showUnderscore ? 'opacity-100' : 'opacity-0'}>_</span>
                    </span>
                </h2>
            </div>
            <div className="mt-20 xl:mt-0 xl:w-1/3 flex items-center">
                <a href={cvLink} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="bg-pink-600 rounded-2xl p-2 xl:p-4 w-auto flex items-center">
                        Descargar CV
                    </button>
                </a>
                <Select
                    defaultValue={defaultValue}
                    options={options}
                    className="pl-2"
                    onChange={handleOptionChange}
                    onMenuOpen={handleSelectMenuOpen} // Agregar el controlador del evento onMenuOpen
                />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-transparent text-white py-4 text-center">
                <h2 className="mb-5 text-2xl">¿Quien soy?</h2>
                <Link to="about" smooth={true} duration={0} offset={-20} className="text-4xl mt-2 text-pink-600 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mx-auto animate-bounce"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default HeaderIntro;
