import style from "./App.module.css";
import React, { useState } from "react";
import { Card } from "./components/Card";
import { Pictures } from "./Images";
import { Header } from "./components/Header";

const App = () => {
  let [cards, setCards] = useState(Pictures);
  let [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);

  const changeCard = (key) => (e) => {
    let help = cards;
    let shouldMix = false;
    help.map((card) => {
      if (card.key === key && card.isClicked !== true) {
        card.isClicked = true;
        shouldMix = true;
      }
      return card;
    });
    if (shouldMix === false) {
      help.map((card) => {
        card.isClicked = false;
        return card;
      });
      setCards(help);
      setScore(0);
      return;
    }
    setCards(mixCards(help));
    countScore();
  };

  const mixCards = (CartsToMix) => {
    return CartsToMix.sort((a, b) => 0.5 - Math.random());
  };

  const countScore = () => {
    let newScore = score + 1;
    setScore(newScore);
    if (newScore >= highScore) setHighScore(newScore);
  };

  return (
    <div className={style.App}>
      <Header highScore={highScore} score={score}></Header>
      <div className={style.cards}>
        {cards.map((card) => {
          return (
            <Card
              src={card.src}
              name={card.name}
              change={changeCard(card.key)}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default App;
