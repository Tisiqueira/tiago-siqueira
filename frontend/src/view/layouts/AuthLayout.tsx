
import { AboutMe } from '../components/AboutMe'
import { FaAdjust, FaUser, FaBriefcase, FaEnvelopeOpen} from 'react-icons/fa'

import { IconHome } from '../components/IconHome'
import { ProfileCard } from '../components/ProfileCard'


export function AuthLayout(){
  return (
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
            
            {/* <div className='rounded-2xl h-[90%] w-[68%] ml-16 bg-black 
            transition-all ease-in-out'>
              <img 
                src={"https://avatars.githubusercontent.com/u/24811628?s=400&u=943c35f91fbe081c029b0f94485765b3432a64f8&v=4"}
                className='w-[100%] h-[100%] object-scale-down
                transition-all ease-in-out '
              />
            </div> */}

            <ProfileCard/>
          


          </div>

          <div className='flex flex-col justify-center pr-72'>
            <AboutMe />
          </div>
        
        </div>

      </header>

      <main>
        
      </main>
      <div >
        <div className='fixed z-10 top-[30%] right-[3%] flex flex-col items-center justify-center transform'>
          <div id='home' className='p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md bg-slate-700'>
            <IconHome  className='text-white '/>
          </div>
        </div>
        
        <div className='fixed z-10 top-[40%] right-[3%] flex flex-col items-center justify-center transform'>
          <div id='home' className='p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md bg-slate-700'>
            <FaUser  className='text-white '/>
          </div>
        </div>
        
        <div className='fixed z-10 top-[50%] right-[3%] flex flex-col items-center justify-center transform'>
          <div id='home' className='p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md bg-slate-700'>
            <FaBriefcase  className='text-white '/>
          </div>
        </div>
        
        <div className='fixed z-10 top-[60%] right-[3%] flex flex-col items-center justify-center transform'>
          <div id='home' className='p-4 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center mt-3 mb-0 shadow-md bg-slate-700'>
            <FaEnvelopeOpen  className='text-white '/>
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