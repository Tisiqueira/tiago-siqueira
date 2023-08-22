import { IconDownload } from './IconDownload'

export function Cv (){
  return(
    <div className="btn-con flex self-start">
      <a 
        href="" 
        className="main-btn rounded-[30px] text-inherit font-semibold relative border border-solid border-green-800
        flex self-start items-center  overflow-hidden  "
        >
        <span className="py-[0] px-8 ">Download CV</span>
        <span 
          className='bg-green-800 flex items-center justify-center rounded-[50%] p-4'
          >
        <IconDownload className='inline-block font-black font-[Font Awesome 5 Free] not-italic leading-none w-[24px]  '/>
        </span>
      </a>
    </div>
  )
}