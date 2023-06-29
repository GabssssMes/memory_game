import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card} onClick={props.change}>
      <img src={props.src} alt={props.name} className={style.image}></img>
      <div className={style.description}>{props.name}</div>
    </div>
  );
};

export { Card };
