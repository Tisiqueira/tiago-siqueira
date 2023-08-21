
import { FaAdjust, FaUser, FaBriefcase, FaEnvelopeOpen} from 'react-icons/fa'

import { IconHome } from '../components/IconHome'
import { Outlet } from 'react-router-dom'




export function AuthLayout(){
 
  return (
    <>
      
      <Outlet />

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