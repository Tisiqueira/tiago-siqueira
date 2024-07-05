import React, { useState } from "react";
import Header from "./Header";
import Tecnology from "./Tecnology";

function App() {
  const [tecnologies, setTecnologies] = useState([
    {
      id: Math.random(),
      title: "HTML",
      subtitle: "Experiência de mais de 3 anos",
      read: true,
    },
    {
      id: Math.random(),
      title: "CSS3",
      subtitle: "Experiência de mais de 3 anos",
      read: true,
    },
    {
      id: Math.random(),
      title: "Javascript",
      subtitle: "Experiência de mais de 3 anos",
      read: true,
    },
    {
      id: Math.random(),
      title: "React",
      subtitle: "Experiência de 1 ano",
      read: false,
    },
    {
      id: Math.random(),
      title: "Node",
      subtitle: "Experiência de 1 ano",
      read: true,
    },
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

  function handleRemoveTec(tecId) {
    setTecnologies((prevState) => prevState.filter((tec) => tec.id !== tecId));
  }

  return (
    <>
      <Header title="Tiago Alves Mastrogiacomo Siqueira">
        <h2>Tecnologias</h2>
        <button onClick={handleRefresh}>Add</button>
      </Header>

      <hr />

      {tecnologies.map((tec) => (
        <Tecnology
          key={tec.id}
          onRemove={handleRemoveTec}
          id={tec.id}
          title={tec.title}
          subtitle={tec.subtitle}
        />
      ))}
    </>
  );
}

export default App;
