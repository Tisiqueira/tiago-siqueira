import { IconDownload } from './IconDownload'

export function Cv (){
  return(
    <div className="btn-con flex self-auto mt-4 ml-20">
      <a 
        href="" 
        className="main-btn rounded-[30px] text-inherit font-semibold relative border border-solid border-green-800
        flex self-start items-center  overflow-hidden 
        before:absolute before:top-0 before:right-0 before:translate-x-[100%] before:transition-all  before:duration-[.4s] before:ease-out before:z-[-1]
        hover:transition-all hover:ease-out hover:before:w-full hover:before:h-full hover:before:bg-green-800 hover:before:transform-none hover:before:transition-all hover:before:ease-out"

        
        >
        <span className="py-[0] px-8">Download CV</span>
        <span 
          className='bg-green-800 flex items-center justify-center rounded-[50%] p-4
          '
          >
        <IconDownload className='inline-block font-black font-[Font Awesome 5 Free] not-italic leading-none w-[24px] '/>
        </span>
      </a>
    </div>
  )
}