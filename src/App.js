import React from "react";
import DetailsTec from "./DetailsTec";

function App() {
  return (
    <>
      <h1>Tiago Alves Mastrogiacomo Siqueira</h1>
      <h2>Tecnologias</h2>

      <hr />

      <DetailsTec
        title="Javascript"
        subtitle="Mais de 3 anos trabalhando utilizando Javascript no front-end"
      />

      <DetailsTec
        title="HTML5 & css3"
        subtitle="Mais de 3 anos trabalhando utilizando no front-end"
      />

      <DetailsTec
        title="React"
        subtitle="Mais de 3 anos trabalhando utilizando no front-end"
      />

      <DetailsTec
        title="Uipath"
        subtitle=" Mais de 3 anos trabalhando utilizando nas automações da empresa"
      />

      <DetailsTec
        title="Power Apps"
        subtitle="1 ano criando apliçãoes low-code para a empresa"
      />
    </>
  );
}

export default App;
