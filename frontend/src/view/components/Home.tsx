import { AboutMe } from "./AboutMe";
import { ProfileCard } from "./ProfileCard";

export function Home(){
  return(
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
            
            
            <ProfileCard/>
          


          </div>

          <div className='flex flex-col justify-center pr-72'>
            <AboutMe />
          </div>
        
        </div>

      </header>
    
  )
}