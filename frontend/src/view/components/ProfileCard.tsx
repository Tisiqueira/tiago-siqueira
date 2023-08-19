export function ProfileCard(){
    return(
        <div 
            className="rounded-2xl h-[90%] w-[68%] ml-16 bg-black
            transition-all ease-in-out border "
        >
            <div className="profile-wrapper w-[350px] h-[450px] relative">
                <div className="profile flex flex-col items-center  rounded-2xl  cursor-pointer transition-shadow">
                    <div className="absolute top-0 left-0 w-full h-full  bg-white-500 transition">
                        <img src={"https://avatars.githubusercontent.com/u/24811628?s=400&u=943c35f91fbe081c029b0f94485765b3432a64f8&v=4"}
                            className='w-[100%] h-[100%] object-cover
                            transition-all ease-in-out border m-9 ' />
                    </div>
                    <ul className="absolute flex gap-3 z-[3]">
                        <li>
                            <a href="#" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </li>
                        
                        <li>
                            <a href="#" title=""className="object-cover">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                </div>
            </div>
        </div>
    )
}