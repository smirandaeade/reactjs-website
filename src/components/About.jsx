import img from '../assets/personalPhoto.png'
import { Link } from 'react-scroll';

const About = () => {

    return (
        <div id="about" className="relative container w-full xl:flex m-auto xl:justify-center xl:h-screen">
            <div className="p-10 xl:p-0 xl:w-1/2 xl:py-0 xl:my-auto">
                <div className='xl:h-full xl:max-h-fit overflow-hidden'>
                    <h2 className="mb-4">¿Quien soy?</h2>
                    <p className="whitespace-pre-line break-words">Soy un ingeniero informático apasionado por el desarrollo de sitios web. Originario de Chile, he dedicado mi tiempo y esfuerzo a perfeccionar mis habilidades en este campo tan emocionante.
                        Con un enfoque centrado en la excelencia, me dedico a enfrentar desafíos y mostrar resultados excepcionales en cada proyecto en el que trabajo. Mi objetivo es crear experiencias digitales impactantes y funcionales que superen las expectativas de mis clientes y brinden un valor duradero.
                        <br />
                        Además de mi conocimiento técnico, tengo un nivel avanzado de inglés, lo que me permite comunicarme fluidamente con clientes y colaboradores de todo el mundo. Esta habilidad me permite ampliar mis horizontes y participar en proyectos internacionales.
                        <br />
                        Me encanta enfrentar nuevos desafíos y explorar constantemente las últimas tendencias y tecnologías en el desarrollo web. Mi enfoque es mantenerme actualizado y aprender de forma continua para ofrecer soluciones innovadoras y eficientes.
                        <br />
                        Si estás buscando un profesional comprometido, creativo y orientado a resultados, estás en el lugar correcto. Estoy emocionado de mostrar mi trabajo y colaborar en proyectos interesantes. ¡No dudes en contactarme y juntos hagamos realidad tu visión!</p>
                </div>
            </div>
            <div className="xl:my-auto">
                <img className="mx-auto" src={img} alt="imagen del desarrollador" />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-transparent text-white py-4 text-center">
                <h2 className="mb-5 text-2xl">Habilidades</h2>
                <Link
                    to="skills"
                    smooth={true}
                    duration={0}
                    offset={-20}
                    className="text-4xl mt-2 text-pink-600 cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default About