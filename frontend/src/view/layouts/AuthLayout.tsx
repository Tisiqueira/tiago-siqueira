import { SetStateAction, useRef, useState } from 'react'
import { FaAdjust, FaBriefcase, FaEnvelopeOpen, FaUser, } from 'react-icons/fa'

import { IconHome } from '../components/IconHome'
import { ProfileCard } from '../components/ProfileCard'
import { AboutMe } from '../components/AboutMe'
import { Cv } from '../components/Cv'

export function AuthLayout(){

    const bgColor = useRef('bg-slate-700')
    const [activeButton, setActiveButton] = useState('home');
    const [activeSection, setActiveSection] = useState('home');
    const [activeClass, setactiveClass] = useState('active')

    function handleButtonClick (buttonId: SetStateAction<string>) {
        setActiveButton(buttonId);
        setactiveClass(`active animate-slide-right`)
        
    }

    function handleButtonClickSection (SectionId: SetStateAction<string>) {
        console.log(SectionId)
        setActiveSection(SectionId);
    }

        
    return (
        <>
            
            <header 
                id='home' 
                className={`container header min-h-screen text-white overflow-hidden p-0 important
                ${activeSection === 'home' ? `active  ` : 'hidden '}`}

                
                >
                
                <div className={`header-content grid grid-cols-2 min-h-screen
                ${activeSection === 'home' ? 
                (`${activeClass}` === 'active' ? '': `${activeClass}`) : 'hidden'}
                `}>
                    
                    <div className='left-header flex items-center relative'>
                    <div 
                        className='h-shape transition-all ease-in-out w-[65%] h-[100%]
                        bg-green-800 absolute left-0 top-0 z-[-1] 
                        '
                        style={{clipPath: 'polygon(0 0, 46% 0, 79% 100%, 0% 100%)',
                        
                        width: '80%',
                        height: '100%',
                        backgroundColor: '#27AE60'}}
                    ></div>
                    
                    <span className={`
                    ${activeSection === 'home' ? `active  ` : 'hidden '}`}>
                    <ProfileCard />

                    </span>
                    </div>

                    <div className={`high-header flex flex-col justify-center pr-70
                    ${activeSection === 'home' ? `active  ` : 'hidden '}`}
                    
                    >
                        <AboutMe />
                    </div>
                
                </div>

            </header>

            <main>
                 
                <div className={`header-content grid grid-cols-2 min-h-screen
                    ${activeSection === 'home' ? 
                    (`${activeClass}` === 'active' ? '': `${activeClass}`) : 'hidden'}
                    `}>
                        
                        <div className='left-header flex items-center relative'>
                        <div 
                            className='h-shape transition-all ease-in-out w-[65%] h-[100%]
                            bg-green-800 absolute left-0 top-0 z-[-1] 
                            '
                            style={{clipPath: 'polygon(0 0, 46% 0, 79% 100%, 0% 100%)',
                            
                            width: '80%',
                            height: '100%',
                            backgroundColor: '#27AE60'}}
                        ></div>
                        
                        <span className={`
                        ${activeSection === 'home' ? `active  ` : 'hidden '}`}>
                        <ProfileCard />

                        </span>
                        </div>

                        <div className={`high-header flex flex-col justify-center pr-70
                        ${activeSection === 'home' ? `active  ` : 'hidden '}`}
                        
                        >
                            <AboutMe />
                        </div>
                    
                </div>

                <section  id="about" className={`container about
                    ${activeSection === 'about' ? 'active animate-slide-left  grid grid-cols-2 min-h-screen' : 'hidden'}`}
               >    
                <div className="left-header flex items-center relative">
                        <div className="left-about ml-40">
                            <h4 className='text-green-800 text-2xl'>Resumo</h4>
                            <p className='mt-2'>
                            
                                Com um histórico sólido de mais de cinco anos de dedicação à Tecnologia da Informação, desempenho um papel crucial como suporte de excelência aos usuários, garantindo a continuidade operacional e a satisfação do cliente. No presente, meu foco está na vanguarda da transformação digital, onde lidero projetos com maestria, aplicando metodologias ágeis que asseguram resultados de alto impacto.

                                Minhas habilidades técnicas e ferramentas empregadas são testemunho da minha busca pela excelência. Com proficiência em UiPath (RPA), Lecom (BPMN), Azure DevOps,Power Apps, Power Virtual Agents, React e JavaScript, sou capaz de abraçar os desafios mais complexos com soluções inovadoras. Minha maestria em tecnologias fundamentais, como HTML5 e CSS3, assegura a criação de interfaces cativantes e intuitivas.

                                Minha atitude proativa e apaixonada pela melhoria contínua me permite não apenas acompanhar as últimas tendências, mas também liderar a adoção de abordagens visionárias em nossos projetos. Estou comprometido(a) em alcançar os mais altos padrões de desempenho e estou ansioso(a) para contribuir com uma equipe que compartilha a mesma paixão pela excelência e inovação.
                            </p>
                            <div className="btn-con">
                                <span className="items-center justify-center ml-[100px]">
                                    < Cv/>
                                </span> 
                                
                            </div>
                        </div>
                        
                        
                    </div>
                    <div 
                        className='h-shape transition-all ease-in-out w-[65%] h-[100%]
                        bg-green-800 absolute left-[50%] top-0 z-[-1] 
                        '
                        style={{clipPath: 'polygon(46% 0, 100% 0, 90% 100%, 30% 100%)',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#27AE60'}}
                    >
                        
                    </div>
                </section>
                
            </main>

            <div>
                <div className={`fixed z-10 top-[30%]  flex flex-col items-center justify-center transform 
                    ${activeButton === 'home' ? 'right-[3%]' : 'animate-position-left'}`}
                >
                    <div 
                        id='home' className={`control active-btn p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 hover:border-[2px] hover:border-green-700  
                        ${activeButton === 'home' ? 'active-btn  bg-green-700' : bgColor}`}
                        onClick={() => {
                            handleButtonClick('home')
                            handleButtonClickSection('home')
                            }
                        }
                        >
                    
                    <a>
                        <IconHome  className='text-white '/>
                    </a>
                
                    </div>
                </div>
                
                <div className={`fixed z-10 top-[40%] flex flex-col items-center justify-center transform
                    ${activeButton !== 'home' ? 'animate-position-left' : 'right-[3%]'}
                `}
                
                >
                    <div 
                        id='about' className={`control p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md hover:border-[2px] hover:border-green-700  
                        ${activeButton === 'about' ? 'active-btn bg-green-700' : bgColor}`}
                        onClick={() => {
                            handleButtonClick('about')
                            handleButtonClickSection('about')
                            }
                        }
                        >
                    
                        <a> 
                            <FaUser 
                            className={`text-white control`}
                            />
                        </a>

                    </div>
                </div>
                
                <div className={`fixed z-10 top-[50%]  flex flex-col items-center justify-center transform
                    ${activeButton !== 'home' ? 'animate-position-left' : 'right-[3%]'}
                    `}
                >
                    <div 
                        id='experience' className={`control p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md hover:border-[2px] hover:border-green-700 
                        ${activeButton === 'experience' ? 'active-btn bg-green-700' : bgColor}`}
                        onClick={() => {
                            handleButtonClick('experience')
                            handleButtonClickSection('experience')
                            }
                        }>
                    
                        <a>
                            <FaBriefcase  className='text-white '/>
                        </a>

                    </div>
                </div>
                
                <div className={`fixed z-10 top-[60%]  flex flex-col items-center justify-center transform
                    ${activeButton !== 'home' ? 'animate-position-left' : 'right-[3%]'}

                `}>
                    <div 
                        id='contact' className={`control p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md hover:border-[2px] hover:border-green-700 
                        ${activeButton === 'contact' ? 'active-btn bg-green-700' : bgColor}`}
                        onClick={() => {
                            handleButtonClick('contact')
                            handleButtonClickSection('contact')
                            }
                        }
                        >

                        <a>
                            <FaEnvelopeOpen  className='text-white '/>
                        </a>
                    </div>
                </div>
            </div> 

            <div 
                className={`top-[5%]  w-16 h-16 rounded-[50%]
                bg-slate-700 cursor-pointer fixed flex justify-center 
                items-center shadow-[0 3px 15px rgba(0, 0, 0, 0.3)]
                hover:border-[2px] hover:border-green-700 
                ${activeButton !== 'home' ? 'position-left-theme' : ' delay-150 right-[3%]  '}
                `}>
                <FaAdjust size={24} />
            </div>   

    
        </>
    )
}