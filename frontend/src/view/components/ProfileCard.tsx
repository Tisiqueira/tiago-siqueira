export function ProfileCard(){
    return(
        // <div 
        //     className="image rounded-2xl h-[90%] w-[68%] ml-16 bg-black
        //     transition-all ease-in-out  "
        //     >
        //     <img 
        //         src={"https://avatars.githubusercontent.com/u/24811628?s=400&u=943c35f91fbe081c029b0f94485765b3432a64f8&v=4"}
        //         className='w-[80%] h-[80%] m-10 rounded-sm object-cover transition-all ease-in-out grayscale-0 ' />
        // </div>
        <div className="container ml-[45%] ">
        <div className="profile-wrapper w-[350px] h-[450px] relative">
            <div className="profile flex flex-col items-center relative overflow-hidden w-[350px] h-[450px] rounded-2xl shadow-md cursor-pointer transition-[0.5s] group">
                <div className="profile-image absolute top-0 left-0 w-full h-full z-[2] bg-black transition-[0.5s] hover:translate-y-[-104px] hover:transition-all hover:duration-[.9s]">
                    <img
                        className="h-full w-full object-cover hover:opacity-40 hover:transition-[.5s]"
                        src={"https://avatars.githubusercontent.com/u/24811628?s=400&u=943c35f91fbe081c029b0f94485765b3432a64f8&v=4"}
                        alt="Profile"
                    />
                </div>
                <ul className="social-icons absolute flex gap-3 z-[3] bottom-[164px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <li className="list-none">
                        <a href="#instagram" title="Instagram" className="relative grid place-items-center bg-black text-[23px] font-bold w-10 h-10 border border-solid border-[#CDCDCD]
                                rounded  transition-[.2s] translate-y-8 hover:bg-white">
                             <svg className="bg-black transition-[.2s] hover:bg-white hover:transition-[0.9s] hover:transform-[rotateY(360deg)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                                     stroke-linecap="round" stroke-linejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                    </li>
                    <li className="list-none">
                        <a href="#twitter" title="Twitter" className="relative grid place-items-center bg-black text-[23px] font-bold w-10 h-10 border border-solid border-[#CDCDCD]
                                rounded  transition-[.2s] translate-y-8 hover:bg-white">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                                     stroke-linecap="round" stroke-linejoin="round" className="bg-black transition-[.2s] hover:bg-white hover:transition-[0.9s] hover:transform-[rotateY(360deg)]"
                                >
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 
                                            10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5
                                            4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                                    >
                                    </path>
                            </svg>
                        </a>
                    </li>
                    <li className="list-none">
                        <a href="#threads" title="Threads" className="relative grid place-items-center bg-black text-[23px] font-bold w-10 h-10 border border-solid border-[#CDCDCD]
                                rounded  transition-[.2s] translate-y-8 hover:bg-white">
                            <svg className="bg-black transition-[.2s] hover:bg-white hover:transition-[0.9s] hover:transform-[rotateY(360deg)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                                     fill="none" stroke-linecap="round" stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7
                                            -5s-1 -5 -7 -5c-2.5 0 -3 1.25 -3 2.5c0 1.5 1 2.5 2.5 2.5c2.5 0 3.5 -1.5 
                                            3.5 -5s-2 -4 -3 -4s-1.833 .333 -2.5 1"
                                    >
                                    </path>
                            </svg>
                        </a>
                    </li>
                    <li className="list-none">
                        <a href="#linkedin" title="Linkedin" className="relative grid place-items-center bg-black text-[23px] font-bold w-10 h-10 border border-solid border-[#CDCDCD]
                                rounded  transition-[.2s] translate-y-8 hover:bg-white">
                             <svg  className="bg-[#2C2C2C] transition-[.2s] hover:bg-white hover:transition-[0.9s] hover:transform-[rotateY(360deg)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                     fill="none" stroke-linecap="round" stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 
                                             2 0 0 1 -2 -2z">
                                    </path>
                                    <path d="M8 11l0 5"></path>
                                    <path d="M8 8l0 .01"></path>
                                    <path d="M12 16l0 -5"></path>
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
                <div className="profile-name">
                    <h2>Tiago Siqueira</h2>
                    <div className="profile-bio opacity-95">
                        <span>São José dos Campos - SP</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
             
    )
}