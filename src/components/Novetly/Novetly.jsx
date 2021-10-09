import React from "react";
import "./Novetly.css";

export const Novetly = ({ novetly }) => {
  return (
    <article className="novetly">
      <h2 className="novetly__title">{novetly.title}</h2>
      <img src={novetly.photo} alt={novetly.title} className="novetly__img" />
      <p className="novetly__text">{novetly.text}</p>
      <p className="novetly__rating">{novetly.rating}</p>
    </article>
  );
};
