import foto from '../../assets/hero.png'
import { AboutMe } from '../components/AboutMe'
import { FaAdjust } from 'react-icons/fa'

import { IconHome } from '../components/IconHome'

export function AuthLayout(){
  return (
    <>
      <header className='container header active'>
        <div className='header-content'>

          <div className='left-header'>
            <div className='h-shape'></div>
            <div className='image'>
              <img src={foto}/>
            </div>
          </div>

          <div className='right-header'>
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