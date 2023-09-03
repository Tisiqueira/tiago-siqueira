import React, { useState } from 'react';
import { FaUser, FaChartBar, FaTasks } from 'react-icons/fa';
import { Cv } from '../components/Cv'
import { IconCarousel } from './Icons';

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
            <span className='text-green-400  ml-[40%] text-center animate-fade animate-infinite animate-duration-[2000ms] 
            animate-ease-in-out '> UiPath(RPA), </span> <br/>
            <span className='text-green-400 ml-[40%] animate-fade animate-infinite animate-duration-[2000ms] 
            animate-ease-in-out '>Lecom(BPMN), </span> <br/>
            <span className='text-green-400 ml-[40%] animate-fade animate-infinite animate-duration-[2000ms] 
            animate-ease-in-out '>Azure DevOps, </span> <br/>
            <span className='text-green-400 ml-[40%] animate-fade animate-infinite animate-duration-[2000ms] 
            animate-ease-in-out '>Power Apps,</span> <br/>
            <span className='text-green-400 ml-[40%] animate-fade animate-infinite animate-duration-[2000ms] 
            animate-ease-in-out '>Power Virtual Agents, </span> <br/>
            <span className='text-green-400 ml-[40%] animate-fade animate-infinite animate-duration-[2000ms] 
            animate-ease-in-out '>React e Node.</span> <br/>

            <IconCarousel />

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


