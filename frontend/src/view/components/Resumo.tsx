import React, { useState } from 'react';
import { FaUser, FaChartBar, FaTasks, FaReact, FaNodeJs, FaHtml5, FaJs, FaGithub, FaMicrosoft, FaCss3 } from 'react-icons/fa';
import { Cv } from '../components/Cv'


export function Resumo () {
  const [activeTab, setActiveTab] = useState('resumo'); // Defina o estado inicial para a guia ativa

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className=' flex flex-col gap-2  '>
      <div className='w-full flex flex-row gap-12 '>

      <div className="flex flex-row  ">
        <div
          onClick={() => handleTabClick('resumo')} // Ative a guia 'profile' ao clicar nela
          title="resumo"
          className={`flex flex-col ${activeTab === 'resumo' ? 'bg-green-800  rounded-md' : ''}`}
        >
          <button
            type="button"           
            className= {`items-center flex justify-center text-4xl p-4 font-medium disabled:cursor-not-allowed hover:bg-green-800 `}
            role="tab"
          >
            <FaUser/>
            <span className='ml-2'>Resumo</span>
          </button>
        </div>
        
        
      </div>

      <div className="flex flex-row ">
        <div
          onClick={() => handleTabClick('metricas')} // Ative a guia 'profile' ao clicar nela
          title="metricas"
          className={`flex flex-col  ${activeTab === 'metricas' ? 'bg-green-800' : ''}`}
        >
          <button
            type="button"
            
            
            className= {`items-center flex justify-center text-4xl p-4 font-medium disabled:cursor-not-allowed hover:bg-green-800`}
            role="tab"
          >
            <FaChartBar/>
           
            <span className='ml-2'>Métricas</span>
          </button>
        </div>
        
      </div>

      <div className="flex flex-row ">
        <div
          onClick={() => handleTabClick('projetos')} // Ative a guia 'profile' ao clicar nela
          title="projetos"
          className={`flex flex-col  ${activeTab === 'projetos' ? '' : ''}`}
        >
          <button
            type="button"
            aria-controls=":r1:-tabpanel-0"
            
            className= {`items-center flex justify-center text-4xl p-4 font-medium disabled:cursor-not-allowed hover:bg-green-800`}
            role="tab"
          >
            <FaTasks/>
            <span className='ml-2'>Projetos</span>
          </button>
        </div>
        
      </div>

      </div>
      
      {/* Conteúdo */}
      <div 
      className={`mt-6 mx-3 text-justify text-2xl w-[90% ] 
      ${activeTab === 'resumo' ? '' : 'hidden'}`} 
      id='resumo'>

               
        <h4 >
          Com mais de{' '}
            <span className="text-green-800 text-4xl ">cinco anos</span>{' '}
            de experiência dedicados à Tecnologia da Informação, tenho liderado projetos de transformação digital com destaque. Minhas habilidades abrangem tecnologias como: <br/> <br/>
            

            <div className='flex mt-8 h-16 mr-0'>

              <span className='mr-5 hover:animate-ping hover:text-green-800 '>
                <svg xmlns="http://www.w3.org/2000/svg"  width="95px" height="40px" viewBox="0 0 95 32" version="1.1"
                 
                >
        
      
                      <g id="Page-1" stroke="CurrentColor" strokeWidth="1" fill="CurrentColor" fillRule="evenodd">
                          <path d="M0,0 L32,0 L32,32 L0,32 L0,0 Z M28.672,28.672 L28.672,3.328 L3.328,3.328 L3.328,28.672 L28.672,28.672 L28.672,28.672 Z M6.208,8.256 L6.208,17.92 C6.208,22.336 8.64,24.96 12.736,24.96 C16.96,24.96 19.392,22.336 19.392,17.92 L19.392,8.256 L16.064,8.256 L16.064,17.92 C16.064,20.416 14.976,21.824 12.8,21.824 C10.496,21.824 9.472,20.352 9.472,17.92 L9.472,8.256 L6.208,8.256 Z M23.68,10.24 C24.832,10.24 25.728,9.408 25.728,8.256 C25.728,7.04 24.896,6.208 23.68,6.208 C22.528,6.208 21.632,7.04 21.632,8.256 C21.632,9.408 22.528,10.24 23.68,10.24 Z M22.016,11.776 L22.016,24.768 L25.344,24.768 L25.344,11.776 L22.016,11.776 Z M41.856,19.456 C45.44,19.456 47.808,17.344 47.808,13.824 C47.808,10.432 45.504,8.256 41.856,8.256 L35.584,8.256 L35.584,24.832 L38.912,24.832 L38.912,19.52 L41.856,19.52 L41.856,19.456 Z M41.472,16.832 L38.848,16.832 L38.848,10.944 L41.472,10.944 C43.392,10.944 44.416,12.032 44.416,13.824 C44.416,15.744 43.392,16.832 41.472,16.832 Z M48.896,18.304 C48.896,22.208 51.392,24.96 54.912,24.96 C57.024,24.96 58.368,24.192 59.136,22.976 L59.136,24.832 L62.464,24.832 L62.464,11.776 L59.136,11.776 L59.136,13.824 C58.304,12.48 56.96,11.648 54.912,11.648 C51.328,11.648 48.896,14.464 48.896,18.304 Z M59.136,18.304 C59.136,20.544 57.728,22.016 55.68,22.016 C53.44,22.016 52.288,20.416 52.288,18.304 C52.288,16 53.568,14.528 55.68,14.528 C57.792,14.528 59.136,16.064 59.136,18.304 Z M70.784,21.952 C69.504,21.952 69.184,21.376 69.184,20.224 L69.184,14.592 L72.064,14.592 L72.064,11.776 L69.184,11.776 L69.184,8.192 L65.856,8.192 L65.856,11.776 L64.32,11.776 L64.32,14.592 L65.856,14.592 L65.856,20.224 C65.856,23.296 67.2,24.768 70.4,24.768 L72.128,24.768 L72.128,21.952 L70.784,21.952 Z M77.248,13.632 L77.248,7.488 L73.92,7.488 L73.92,24.832 L77.248,24.832 L77.248,17.92 C77.248,15.68 78.4,14.336 80.384,14.336 C82.304,14.336 83.328,15.616 83.328,17.6 L83.328,24.768 L86.656,24.768 L86.656,17.28 C86.656,13.888 84.224,11.648 81.152,11.648 C79.232,11.648 78.016,12.352 77.248,13.632 Z M86.4,7.424 L86.4,7.936 L87.488,7.936 L87.488,11.264 L88.128,11.264 L88.128,7.936 L89.152,7.936 L89.152,7.424 C89.152,7.424 86.4,7.424 86.4,7.424 Z M93.312,7.424 L91.968,10.496 L90.688,7.424 L89.92,7.424 L89.92,11.264 L90.496,11.264 L90.496,8.32 L91.776,11.264 L92.224,11.264 L93.44,8.32 L93.44,11.264 L94.016,11.264 L94.016,7.424 L93.312,7.424 L93.312,7.424 Z" id="UiPath_Logo_full" fillRule="nonzero"/>
                      </g>
                  </svg>
              </span>

              <span className='  flex text-center justify-center m-0  hover:animate-ping hover:text-green-800 ' 
              >
                <svg xmlns="http://www.w3.org/2000/svg" stroke="CurrentColor"  style= {{transform: 'scale(0.7)',
                        height:'45',
                        width:'120',
                        margin:'0 0 0 0'
                      }}>
                    <g style= {{transform: 'scale(0.7)',
                        height:'45',
                        width:'110',
                        margin:'0 0 0 2'
                      }}>	
                      <path className="st0" d="M22.9,31.6c3.1,1.2,4.1,4.1,4.3,5.8c0.1,0.9-0.6,1.4-0.6,1.4L11.1,49.6c-0.4-8,0.8-10.1,1.3-11.5  C14.9,31.9,19.9,30.4,22.9,31.6z"  stroke="CurrentColor" fill="CurrentColor"  >
                      </path>	
                      <path id="SVGID_12_" className="st1" d="M19.1,26c-8.3-5.4-8.3-10.2-7.9-18.9l30.3,21.2L29.1,37c0.2-3.8-2.6-5.8-4.1-7  c-0.9-0.7-2.1-1.4-3.1-2.2C20.4,26.9,19.1,26,19.1,26z"  stroke="CurrentColor" fill="CurrentColor"  >
                      </path>	
                    
                      <g style= {{transform: 'scale(0.8)',
                        height:'45',
                        width:'120',
                        
                      }}>			
                        <path className="st2" d="M188.8,42.6c-1.6,0-3.2,0-4.9,0c0-1.5,0-2.9,0-4.3c0-3,0-6,0-9c0-0.5,0-0.9-0.1-1.4    c-0.4-2.9-1.9-4.3-4.7-4.2c-2.6,0-4.5,1.7-4.7,4.4c-0.2,2.1-0.1,4.3-0.2,6.4c0,2.7,0,5.3,0,8.1c-1.7,0-3.2,0-5,0    c0-0.4,0-0.8,0-1.2c0-3.9,0-7.9,0-11.8c0-0.4,0-0.8,0-1.2c-0.1-2.7-1.5-4.5-3.7-4.6c-3-0.2-5.1,1.3-5.6,4    c-0.1,0.8-0.2,1.6-0.2,2.5c0,3.7,0,7.4,0,11.2c0,0.4,0,0.8,0,1.3c-1.7,0-3.3,0-4.9,0c0-7.6,0-15.2,0-22.9c1.6,0,3.2,0,4.9,0    c0,0.7,0,1.5,0,2.6c1.9-2.4,4.1-3.4,6.8-3.3c2.7,0.1,4.9,1.2,6.4,3.5c0.2-0.2,0.4-0.4,0.6-0.6c3.3-4.1,10.2-4,13.5,0.2    c1.2,1.6,1.8,3.5,1.9,5.5c0.1,4.9,0,9.8,0,14.7C188.9,42.3,188.9,42.4,188.8,42.6z"  stroke="CurrentColor" fill="CurrentColor"  >
                        </path>			
                        <path className="st2" d="M94.5,35.7c1.4,0.8,2.7,1.6,4.1,2.4c-2.2,3.2-5.3,4.7-9,5c-5.1,0.4-10.3-1.7-12.6-6.7    c-2.9-6.4-0.3-14.7,7.1-17c8.9-2.7,16.2,3.8,15.6,12.7c0,0.3-0.1,0.6-0.2,0.9c-6.1,0-12.1,0-18.1,0c-0.1,1.8,1.5,3.9,3.6,4.8    C88.3,39.3,91.8,38.5,94.5,35.7z M94.5,28.9c-0.3-3.4-3.1-5.7-6.8-5.6c-3.4,0.1-6.3,2.5-6.6,5.6C85.6,28.9,90,28.9,94.5,28.9z"  stroke="CurrentColor" fill="CurrentColor"   >
                        </path>			
                        <path className="st2" d="M140,18.7c6.8,0,12.2,5.4,12.2,12.2s-5.5,12.2-12.3,12.2c-6.8,0-12.2-5.5-12.2-12.2    C127.7,24.1,133.1,18.7,140,18.7z M139.9,38.2c4.1,0,7.3-3.2,7.2-7.3c0-4.1-3.2-7.4-7.3-7.3c-4,0-7.1,3.2-7.2,7.3    C132.7,35.1,135.8,38.2,139.9,38.2z" stroke="CurrentColor" fill="CurrentColor"   >
                        </path>			
                        <path className="st2" d="M121,34.7c1.3,0.8,2.7,1.5,4.1,2.3c-1.5,3.9-6.9,6.7-11.6,6c-6.3-0.8-10.4-5.2-10.9-11.4    c-0.4-5.7,3.3-10.9,8.8-12.4c5.5-1.5,11.4,0.8,13.7,5.5c-1.4,0.8-2.7,1.6-4.2,2.5c-1.4-2.3-3.4-3.5-6-3.5c-2,0-3.8,0.6-5.2,2.1    c-2.8,2.8-2.8,7.8,0.1,10.6C113,39.3,117.4,38.7,121,34.7z" stroke="CurrentColor" fill="CurrentColor"   >
                        </path>			
                        <path className="st2" d="M55.7,42.6c0-10.8,0-17.6,0-28.3c1.8,0,3.5,0,5.3,0c0,9,0,14.1,0,23.3c4.4,0,7.8,0,12.2,0c0,1.8,0,3.4,0,5    C67.1,42.6,61.9,42.6,55.7,42.6z"  stroke="CurrentColor" fill="CurrentColor"   >
                        </path>	
                        
                        </g>	
                      </g>	
                </svg>
              </span>

              <span className='mr-7 hover:animate-ping hover:text-green-800 '>
                < FaMicrosoft size={40} />  
              </span> 

              <span className='mr-7 hover:animate-ping hover:text-green-800 '>
                <FaHtml5 size={40} />  
              </span>

              <span className='mr-7 hover:animate-ping hover:text-green-800 '>
                <FaCss3 size={40} />  
              </span>

              <span className='mr-7 hover:animate-ping hover:text-green-800 '>
                <FaJs size={40} />  
              </span>

              <span className='mr-7 hover:animate-ping hover:text-green-800 '>
                <FaGithub size={40}/>
              </span>
             
              <span className='mr-7 hover:animate-ping hover:text-green-800 '>
                <FaReact size={40} />
              </span>

              <span className='mr-7 hover:animate-ping hover:text-green-800 '>
                <FaNodeJs size={40} />        
              </span>
              
            </div>
            

            <br/>Minha abordagem proativa e busca incessante por inovação me permitem liderar a adoção de práticas visionárias, sempre com foco na excelência
        </h4>
        <span className='flex ml-[20%] mt-6'>
          
          <Cv />  
        </span>
        
      </div>

      <div className={`m-6 text-justify animate-pulse w-[90%] 
      ${activeTab === 'metricas' ? '' : 'hidden'}`} 
      id='metricas'>

               
        <p>
          This is{' '}
            <span className="text-white-800  ">Profile tab's associated content</span>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            control the content visibility and styling.
        </p>

        
      </div>

      <div className={`m-6 text-justify animate-pulse w-[90%] 
      ${activeTab === 'projetos' ? '' : 'hidden'}`} 
      id='projetos'>

               
        <p>
          This is{' '}
            <span className="text-white-800  ">Profile tab's associated content</span>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            control the content visibility and styling.
        </p>

        
      </div>
    </div>
  );
}


