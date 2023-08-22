import { Cv } from "./Cv";

export function AboutMe (){
  return (
    <>
      <h1 className="text-5xl">
        Olá, Eu sou o <span className="text-green-800">Tiago Siqueira</span>, Analista de Sistema e Desenvolvedor Web. 
      </h1>
      <p className="my-6 mx-0 leading-8">
        I'm a Web Developer, I love to create beautiful and functional websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!
      </p>
      {<Cv />}
    </>
  )
}