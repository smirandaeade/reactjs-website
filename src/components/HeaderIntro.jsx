import { useState } from 'react';
import ukFlag from '../assets/united-kingdom-svgrepo-com.png';
import esFlag from '../assets/spain-svgrepo-com.png';

const HeaderIntro = (prop) => {
    const { showUnderscore } = prop;

    const [selectedOption, setSelectedOption] = useState('es');

    const handleOptionChange = (selected) => {
        setSelectedOption(selected);
    };

    const cvLink = selectedOption === 'es' ? 'https://drive.google.com/file/d/17RQPkvE75h_11jl2_Yyy8hSag-qlb2gz/view?usp=drive_link' : 'https://drive.google.com/file/d/1kf32oIE_3eaozLlJEdvIaGTr3wib2eAp/view?usp=drive_link';

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
                <div className="pl-2">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            value="es"
                            checked={selectedOption === 'es'}
                            onChange={() => handleOptionChange('es')}
                            className="form-radio h-4 w-4"
                        />
                        <img src={esFlag} alt="Bandera Español" className="pl-1 h-4" />
                    </label>
                    <label className="inline-flex items-center ml-2">
                        <input
                            type="radio"
                            value="en"
                            checked={selectedOption === 'en'}
                            onChange={() => handleOptionChange('en')}
                            className="form-radio h-4 w-4"
                        />
                        <img src={ukFlag} alt="Bandera English" className="pl-1 h-4" />
                    </label>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-transparent text-white py-4 text-center">
                <h2 className="mb-5 text-2xl">¿Quien soy?</h2>
                {/* Resto del código */}
            </div>
        </div>
    );
};

export default HeaderIntro;
