import React from "react";
import Header from "./Header";
import Tecnology from "./Tecnology";

const tecnologies = [
  { title: "HTML", subtitle: "Experiência de mais de 3 anos" },
  { title: "CSS3", subtitle: "Experiência de mais de 3 anos" },
  { title: "Javascript", subtitle: "Experiência de mais de 3 anos" },
  { title: "React", subtitle: "Experiência de 1 ano" },
  { title: "Node", subtitle: "Experiência de 1 ano" },
];

function App() {
  return (
    <>
      <Header title="Tiago Alves Mastrogiacomo Siqueira">
        <h2>Tecnologias</h2>
      </Header>

      <hr />

      {tecnologies.map((tec) => (
        <Tecnology key={tec.title} title={tec.title} subtitle={tec.subtitle} />
      ))}
    </>
  );
}

export default App;
