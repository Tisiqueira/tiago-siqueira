/* eslint-disable @typescript-eslint/no-unused-vars */

import { Cv } from "./Cv";

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { IconCarousel } from "./Icons";

export function AboutMe (){

  const [text] = useTypewriter({
    words: ['Analista de Sistema','Analista de sistemas digitais','Desenvolvedor Front-end'],
    loop:false,
    typeSpeed: 120,
    delaySpeed: 80,
  })

 
  return (
    <>
      <h1 className="text-4xl">
        Olá, Eu sou o <span className="text-green-400  text-4xl font-bold">
           Tiago Siqueira.
        </span>
        <br />
        <span className="text-green-300  text-1xl font-semibold">
          {text}
        </span>
        <span className=" text-green-200 font-bold">
          <Cursor />
        </span>

        <span>
          <IconCarousel/>  
        </span>
      </h1>
      
      {<Cv />}
    </>
  )
}