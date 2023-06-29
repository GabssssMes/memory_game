import React from "react";
import style from "./Header.module.css";

function Header(props) {
  return (
    <div className={style.head}>
      <div className={style.left}>
        <h1 className={style.header}>Memory</h1>
        <h5 className={style.description}>
          Get points by clicking on an image, but don't click on any more than
          once!
        </h5>
      </div>
      <div className={style.right}>
        <div className={style.score}>Score:{props.score}</div>
        <div className={style.score}>HighScore:{props.highScore}</div>
      </div>
    </div>
  );
}

export { Header };
