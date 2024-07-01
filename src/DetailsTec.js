import React from "react";
import PropTypes from "prop-types";

export default function DetailsTec(props) {
  return (
    <>
      <article>
        <strong>{props.title}</strong> <br />
        <small>{props.subtitle}</small>
      </article>
      <br />
    </>
  );
}

DetailsTec.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
