import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import js from '../assets/js.svg';
import reactLogo from '../assets/react2.svg';
import tailwind from '../assets/tailwind.svg';
import bootstrap from '../assets/bootstrap.svg';
import sass from '../assets/sass.svg';

const Skills = (prop) => {
    return (
        <div id="skills" className="h-screen bgSkills">
            <div className='h-full flex flex-col xl:flex-row justify-center gap-10 xl:gap-0 xl:h-screen items-center'>
                <div className='flex'>
                    <h2 className="text-2xl text-white">Mis habilidades<span className="text-pink-600"> &#62;<span className={prop.showUnderscore ? 'opacity-100' : 'opacity-0'}>_</span></span></h2>
                </div>
                <div className='gap:w-full xl:w-auto justify-items-center grid mx-3 gap-10 grid-cols-2 grid-rows-4 xl:grid-cols-4 xl:grid-rows-2'>
                    <img className="bg-white w-36 border-solid rounded-xl p-4 skills-image" src={html5} alt="html5" />
                    <img className="w-36 bg-white border-solid rounded-xl p-4 skills-image" src={css3} alt="css3" />
                    <img className="w-36 bg-white border-solid rounded-xl p-4 skills-image" src={js} alt="js" />
                    <img className="w-36 bg-white border-solid rounded-xl p-4 skills-image" src={reactLogo} alt="react" />
                    <img className="w-36 bg-white border-solid rounded-xl p-4 skills-image" src={tailwind} alt="react" />
                    <img className="w-36 bg-white border-solid rounded-xl p-4 skills-image" src={bootstrap} alt="react" />
                    <img className="w-36 bg-white border-solid rounded-xl p-4 skills-image" src={sass} alt="react" />
                    <p className="bg-white text-black px-0 w-36 skills-image border-solid rounded-xl p-4 flex items-center justify-center">¡More soon!</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
