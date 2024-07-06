import React from "react";
import PropTypes from "prop-types";

export default function Tecnology(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>{props.subtitle}</small>
      <button onClick={() => props.onRemove(props.id)}>Remover</button>
    </>
  );
}

Tecnology.PropTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onRemove: PropTypes.shape.isRequired,
};
