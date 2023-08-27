import { FaReact, FaNodeJs, FaHtml5, FaJs, FaGithub,FaMicrosoft } from 'react-icons/fa6'



export function IconCarousel() {
  
  return (
    <div className='flex m-10'>
      <span className='mr-5 hover:animate-ping hover:text-green-800 '>
        <FaReact size={40} />
      </span>

      <span className='mr-5 hover:animate-ping hover:text-green-800 '>
        <FaNodeJs size={40} />        
      </span>
      
      <span className='mr-5 hover:animate-ping hover:text-green-800 '>
        <FaHtml5 size={40} />  
      </span>

      <span className='mr-5 hover:animate-ping hover:text-green-800 '>
        <FaJs size={40} />  
      </span>

      <span className='mr-5 hover:animate-ping hover:text-green-800 '>
        <FaGithub size={40}/>
      </span>

       <span className='mr-5 hover:animate-ping hover:text-green-800 '>
        < FaMicrosoft size={40} />  
       </span>     
    </div>
  );
}
