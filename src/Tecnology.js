import React from "react";

export default function Tecnology(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>{props.subtitle}</small>
      <button onclick={() => props.onRemove(props.)}>Remover</button>
    </>
  );
}
