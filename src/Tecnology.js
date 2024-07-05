import React from "react";

export default function Tecnology(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>{props.subtitle}</small>
      <button onClick={() => props.onRemove(props.id)}>Remover</button>
    </>
  );
}
