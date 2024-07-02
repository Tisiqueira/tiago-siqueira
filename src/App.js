import React, { useState } from "react";
import Header from "./Header";
import Tecnology from "./Tecnology";

function App() {
  const [tecnologies, setTecnologies] = useState([
    {
      id: Math.random(),
      title: "HTML",
      subtitle: "Experiência de mais de 3 anos",
    },
    {
      id: Math.random(),
      title: "CSS3",
      subtitle: "Experiência de mais de 3 anos",
    },
    {
      id: Math.random(),
      title: "Javascript",
      subtitle: "Experiência de mais de 3 anos",
    },
    { id: Math.random(), title: "React", subtitle: "Experiência de 1 ano" },
    { id: Math.random(), title: "Node", subtitle: "Experiência de 1 ano" },
  ]);

  function handleRefresh() {
    setTecnologies((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title${prevState.length + 1}`,
        subtitle: `Title${prevState.length + 1}`,
      },
    ]);
  }

  return (
    <>
      <Header title="Tiago Alves Mastrogiacomo Siqueira">
        <h2>Tecnologias</h2>
        <button onClick={handleRefresh}>Add</button>
      </Header>

      <hr />

      {tecnologies.map((tec) => (
        <Tecnology key={tec.id} title={tec.title} subtitle={tec.subtitle} />
      ))}
    </>
  );
}

export default App;
