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
                clip-path-polygon[0 0, 46% 0, 79% 100%, 0% 100%]'
              ></div>
              
              <ProfileCard/>
            </div>

            <div className='high-header flex flex-col justify-center pr-72'>
              <AboutMe />
            </div>
          
          </div>

      </header>

      <div >
        <div className='fixed z-10 top-[30%] right-[3%] flex flex-col items-center justify-center transform  '>
          <div id='home' className={`p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 ${currentPath === '/' ? 'bg-green-700' : bgColor}`} >
           
           <a href="/">
            <IconHome  className='text-white '/>
           </a>
           
          </div>
        </div>
        
        <div className='fixed z-10 top-[40%] right-[3%] flex flex-col items-center justify-center transform'>
          <div id='about' className={`p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md ${currentPath === '/about' ? 'bg-green-700' : bgColor}`}>
            
            <a href="/about"> 
              <FaUser  className='text-white '/>
             </a>

          </div>
        </div>
        
        <div className='fixed z-10 top-[50%] right-[3%] flex flex-col items-center justify-center transform'>
          <div id='experience' className={`p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md ${currentPath === '/experience' ? 'bg-green-700' : bgColor}`}>
            
            <a href="/experience">
              <FaBriefcase  className='text-white '/>
            </a>

          </div>
        </div>
        
        <div className='fixed z-10 top-[60%] right-[3%] flex flex-col items-center justify-center transform'>
          <div id='contact' className={`p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md ${currentPath === '/contact' ? 'bg-green-700' : bgColor}`}>
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
        transition-all ease-in-out'>
        <FaAdjust size={24} />
      </div>   

   
   </>
  )
}