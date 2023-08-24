import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { FaAdjust, FaBriefcase, FaEnvelopeOpen, FaUser, } from 'react-icons/fa'

import { IconHome } from '../components/IconHome'
import { ProfileCard } from '../components/ProfileCard'
import { AboutMe } from '../components/AboutMe'

export function AuthLayout(){
  const location = useLocation();
  const currentPath = location.pathname;

  const bgColor = useRef('bg-slate-700')
  
  return (
    <>
      
      <header 
          id='home' 
          className='container header active min-h-screen text-white overflow-hidden p-0 important'
          >
          
          <div className='header-content grid grid-cols-2 min-h-screen'>
            
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
              
              <ProfileCard/>
            </div>

            <div className='high-header flex flex-col justify-center pr-70'>
              <AboutMe />
            </div>
          
          </div>

      </header>
      <main>
        
      <section className="container about" id="about">
            <div className="main-title">
                <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
            </div>
            <div className="about-container grid grid-cols-2 pt-12 pb-20">
                <div className="left-about">
                    <h4>Information About me</h4>
                    <p>
                       
                        Com um histórico sólido de mais de cinco anos de dedicação à Tecnologia da Informação, desempenho um papel crucial como suporte de excelência aos usuários, garantindo a continuidade operacional e a satisfação do cliente. No presente, meu foco está na vanguarda da transformação digital, onde lidero projetos com maestria, aplicando metodologias ágeis que asseguram resultados de alto impacto.

                        Minhas habilidades técnicas e ferramentas empregadas são testemunho da minha busca pela excelência. Com proficiência em UiPath (RPA), Lecom (BPMN), Azure DevOps,Power Apps, Power Virtual Agents, React e JavaScript, sou capaz de abraçar os desafios mais complexos com soluções inovadoras. Minha maestria em tecnologias fundamentais, como HTML5 e CSS3, assegura a criação de interfaces cativantes e intuitivas.

                        Minha atitude proativa e apaixonada pela melhoria contínua me permite não apenas acompanhar as últimas tendências, mas também liderar a adoção de abordagens visionárias em nossos projetos. Estou comprometido(a) em alcançar os mais altos padrões de desempenho e estou ansioso(a) para contribuir com uma equipe que compartilha a mesma paixão pela excelência e inovação.
                    </p>
                    <div className="btn-con">
                        <a href="#" className="main-btn">
                            <span className="btn-text">Download CV</span>
                            <span className="btn-icon"><i className="fas fa-download"></i></span>
                        </a>
                    </div>
                </div>
                <div className="right-about">
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">650+</p>
                            <p className="small-text">Projects <br /> Completed</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">10+</p>
                            <p className="small-text">Years of <br /> experience</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">300+</p>
                            <p className="small-text">Happy <br /> Clients</p>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="abt-text">
                            <p className="large-text">400+</p>
                            <p className="small-text">Customer <br /> reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-stats">
                <h4 className="stat-title">My Skills</h4>
                <div className="progress-bars">
                    <div className="progress-bar">
                        <p className="prog-title">html5</p>
                        <div className="progress-con">
                            <p className="prog-text">80%</p>
                            <div className="progress">
                                <span className="html"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">css3</p>
                        <div className="progress-con">
                            <p className="prog-text">95%</p>
                            <div className="progress">
                                <span className="css"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">javascript</p>
                        <div className="progress-con">
                            <p className="prog-text">75%</p>
                            <div className="progress">
                                <span className="js"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">ReactJS</p>
                        <div className="progress-con">
                            <p className="prog-text">75%</p>
                            <div className="progress">
                                <span className="react"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">NodeJS</p>
                        <div className="progress-con">
                            <p className="prog-text">87%</p>
                            <div className="progress">
                                <span className="node"></span>
                            </div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="prog-title">Python</p>
                        <div className="progress-con">
                            <p className="prog-text">70%</p>
                            <div className="progress">
                                <span className="python"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="stat-title">My Timeline</h4>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2010 - present</p>
                    <h5>Web Developer<span> - Vircrosoft</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2008 - 2011</p>
                    <h5>Software Engineer<span> - Boogle, Inc.</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2016 - 2017</p>
                    <h5>C++ Programmer<span> - Slime Tech</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2009 - 2013</p>
                    <h5>Business Degree<span> - Sussex University</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2013 - 2016</p>
                    <h5>Computer Science Degree<span> - Brookes University</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2017 - present</p>
                    <h5>3d Animation<span> - Brighton University</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
            </div>
        </section>

      </main>
       <div >
        <div className='fixed z-10 top-[30%] right-[3%] flex flex-col items-center justify-center transform  '>
          <div id='home' className={`p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 hover:border-[2px] hover:border-green-700  ${currentPath === '/' ? 'bg-green-700' : bgColor}`} >
           
           <a href="/">
            <IconHome  className='text-white '/>
           </a>
           
          </div>
        </div>
        
        <div className='fixed z-10 top-[40%] right-[3%] flex flex-col items-center justify-center transform'>
          <div id='about' className={`p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md hover:border-[2px] hover:border-green-700  ${currentPath === '/about' ? 'bg-green-700' : bgColor}`}>
            
            <a href="/about"> 
              <FaUser  className='text-white '/>
             </a>

          </div>
        </div>
        
        <div className='fixed z-10 top-[50%] right-[3%] flex flex-col items-center justify-center transform'>
          <div id='experience' className={`p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md hover:border-[2px] hover:border-green-700 ${currentPath === '/experience' ? 'bg-green-700' : bgColor}`}>
            
            <a href="/experience">
              <FaBriefcase  className='text-white '/>
            </a>

          </div>
        </div>
        
        <div className='fixed z-10 top-[60%] right-[3%] flex flex-col items-center justify-center transform'>
          <div id='contact' className={`p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md hover:border-[2px] hover:border-green-700 ${currentPath === '/contact' ? 'bg-green-700' : bgColor}`}>
            <a href="/contact">
              <FaEnvelopeOpen  className='text-white '/>
            </a>
          </div>
        </div>
      </div> 

      <div 
        className='top-[5%] right-[3%] w-16 h-16 rounded-[50%]
        bg-slate-700 cursor-pointer fixed flex justify-center 
        items-center shadow-[0 3px 15px rgba(0, 0, 0, 0.3)]
        hover:border-[2px] hover:border-green-700'>
        <FaAdjust size={24} />
      </div>   

   
   </>
  )
}