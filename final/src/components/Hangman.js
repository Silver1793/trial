import React from "react";
import { useState, useEffect } from "react";
import { chooseRandom } from "./words";

function Hangman() {
  const [mistake, setMistake] = useState(0);
  const [word, setWord] = useState(chooseRandom());
  const [over, setOver] = useState(false);
  const [guessed, setGuessed] = useState([]);

  useEffect(() => {
    setOver(mistake > 6);
    guessWord();
    console.log(guessed);
  }, [mistake, guessed]);

  const guessWord = () => {
    return word
      .split("")
      .map((letter) => (guessed.includes(letter) ? letter : " _ "));
  };

  const reset = () => {
    setWord(chooseRandom());
    setOver(false);
    setGuessed([]);
    setMistake(0);
  };
  const handleButtonClick = (e) => {
    if (word.includes(e.target.value) === false) {
      setMistake((prev) => prev + 1);
    }
    setGuessed((old) => [...old, e.target.value]); //guessed.add(e.target.value));
  };

  const genButtons = () => {
    const alpha = "abcdefghijklmnopqrstuvwlyz";
    return alpha.split("").map((letter, index) => (
      <button
        disabled={guessed.includes(letter)}
        key={index}
        value={letter}
        onClick={handleButtonClick}
      >
        {letter}
      </button>
    ));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {word}
      </div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {guessWord()}
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Mistakes Made: {mistake}
        </div>
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {genButtons()}
        </div>
        <br />
        <button onClick={reset}>Restart</button>
      </div>
    </div>
  );
}

export default Hangman;
