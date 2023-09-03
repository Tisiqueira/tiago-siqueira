import React, { useState } from 'react';
import { FaUser, FaChartBar, FaTasks } from 'react-icons/fa';


export function Resumo () {
  const [activeTab, setActiveTab] = useState('profile'); // Defina o estado inicial para a guia ativa

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className='flex flex-col gap-2 border border-green-800 '>
      <div className='w-full flex flex-row gap-0 '>

      <div className="flex flex-row ">
        <div
          onClick={() => handleTabClick('profile')} // Ative a guia 'profile' ao clicar nela
          title="Profile"
          className={`flex flex-col ${activeTab === 'profile' ? 'bg-green-800' : ''}`}
        >
          <button
            type="button"           
            className= {`items-center flex justify-center text-4xl p-4 font-medium disabled:cursor-not-allowed`}
            role="tab"
          >
            <FaUser/>
            <span className='ml-2'>Resumo</span>
          </button>
        </div>
        
      </div>

      <div className="flex flex-row ">
        <div
          onClick={() => handleTabClick('profile')} // Ative a guia 'profile' ao clicar nela
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
          onClick={() => handleTabClick('profile')} // Ative a guia 'profile' ao clicar nela
          title="Profile"
          className={`flex flex-col  ${activeTab === 'profile' ? '' : ''}`}
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
      <div className="m-6 text-justify animate-pulse w-[80%]">

        
        
        {activeTab === 'resumo' ? `
          <p>
          This is{' '}
            <span className="text-white-800  ">Profile tab's associated content</span>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
            control the content visibility and styling.
        </p>

        `: ""}
          
          
        
          
        
      </div>
    </div>
  );
}


