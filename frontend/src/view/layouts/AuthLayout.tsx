import foto from '../../assets/hero.png'
import { AboutMe } from '../components/AboutMe'
import { FaAdjust } from 'react-icons/fa'

import { IconHome } from '../components/IconHome'

export function AuthLayout(){
  return (
    <>
      <header 
      className='transition-all ease-in-out bg-black 
      min-h-screen text-white overflow-hidden p-0 important'
      id='home'>
        <div className='grid grid-cols-2 min-h-screen'>
          
          <div className='flex items-center relative'>
            <div 
            className='transition-all ease-in-out w-[65%] h-[100%]
            bg-green-800 absolute left-0 top-0 z-[-1] 
            clip-path-polygon[0 0, 46% 0, 79% 100%, 0% 100%]'
            >
            </div>
            <div className='rounded-2xl h-[90%] w-[68%] ml-16 bg-black 
            transition-all ease-in-out'>
              <img src={foto} className='w-[100%] h-[100%] object-cover 
              transition-all ease-in-out grayscale'/>
            </div>
          </div>

          <div className='flex flex-col justify-center pr-72'>
            <AboutMe />
          </div>
        </div>
      </header>

      <main>
        
      </main>

      <div className='controls'>
        <div id='home' className='bg-blue-900 text-red-900'>TESTE
          <IconHome  className='text-red-700'/>
        </div>
      </div>

      <div className='bg-red-950 w-full'>
        <FaAdjust size={24} />
      </div>


    </>
  )
}