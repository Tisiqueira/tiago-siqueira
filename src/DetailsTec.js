import React from "react";

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
