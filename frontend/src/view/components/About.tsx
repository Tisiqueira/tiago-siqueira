import { FaBriefcase, FaEnvelopeOpen, FaUser } from "react-icons/fa";
import { AboutMe } from "./AboutMe";
import { IconHome } from "./IconHome";


export function About(){
  return(
    <>
      <header 
          className='transition-all ease-in-out bg-black 
          min-h-screen text-white overflow-hidden p-0 important'
          id='home' 
          >

          <div className='grid grid-cols-2 min-h-screen'>
            
            <div className='flex items-center relative'>
              <div 
                className='transition-all ease-in-out w-[65%] h-[100%]
                bg-green-800 absolute left-0 top-0 z-[-1] 
                clip-path-polygon[0 0, 46% 0, 79% 100%, 0% 100%]'
              ></div>
              
            </div>

            <div className='flex flex-col justify-center pr-72'>
              <AboutMe />
            </div>
          
          </div>

      </header>

      <div >
        <div className='fixed z-10 top-[30%] right-[3%] flex flex-col items-center justify-center transform  '>
          <div id='home' className='p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0  bg-slate-700  ' >
           
           <a href="/">
            <IconHome  className='text-white '/>
           </a>
           
          </div>
        </div>
        
        <div className='fixed z-10 top-[40%] right-[3%] flex flex-col items-center justify-center transform'>
          <div id='about' className='p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md bg-green-700 '>
            
            <a href="/about"> 
              <FaUser  className='text-white '/>
             </a>

          </div>
        </div>
        
        <div className='fixed z-10 top-[50%] right-[3%] flex flex-col items-center justify-center transform'>
          <div id='experience' className='p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md bg-slate-700'>
            
            <a href="/experience">
              <FaBriefcase  className='text-white '/>
            </a>

          </div>
        </div>
        
        <div className='fixed z-10 top-[60%] right-[3%] flex flex-col items-center justify-center transform'>
          <div id='contact' className='p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md bg-slate-700'>
            <a href="/contact">
              <FaEnvelopeOpen  className='text-white '/>
            </a>
          </div>
        </div>
      </div>
    </>
    
    
  )
}