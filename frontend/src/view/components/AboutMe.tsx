import { Cv } from "./Cv";

export function AboutMe (){
  return (
    <>
      <h1 className="text-4xl">
        Olá, Eu sou o <span className="text-green-800">Tiago Siqueira</span>, Analista de Sistema e Desenvolvedor Web. 
      </h1>
      <p className="my-6 mx-0 leading-8">
        
      </p>
      {<Cv />}
    </>
  )
}