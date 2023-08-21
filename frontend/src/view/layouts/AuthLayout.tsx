
import { FaAdjust, } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'

export function AuthLayout(){
 
  return (
    <>
      
      <Outlet />    
     

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