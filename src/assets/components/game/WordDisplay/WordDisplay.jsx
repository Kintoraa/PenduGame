import { useMyContext } from "../../general/Provider.jsx";
import { useState } from "react";
import { useCreateCategory } from "../../hooks/UseCreateCategory.jsx";
import { LetterSelection } from "./LetterSelection.jsx";
import { WinGame } from "./WinGame.jsx";
import { LivesIndicator } from "../LivesIndicator/LivesIndicator.jsx";

export const WordDisplay = ({ decreaseLives, lives }) => {
  const word = useCreateCategory();
  return (
    <>
      <LivesIndicator lives={lives} word={word}></LivesIndicator>
      <WordLetters word={word}></WordLetters>
      <LetterSelection
        decreaseLives={decreaseLives}
        word={word}
      ></LetterSelection>
    </>
  );
};

const WordLetters = ({ word }) => {
  const { letter } = useMyContext();
  const [displayedLetters, setDisplayedLetters] = useState({});

  const displayLetter = (value, index) => {
    if (letter === value.toUpperCase()) {
      setDisplayedLetters((prevState) => ({ ...prevState, [index]: true }));
    }
  };

  const displayLetterLength = Object.keys(displayedLetters).length;

  return (
    <>
      <div className="flex justify-center text-center mb-16 flex-wrap">
        {word.split("").map((value, index) => (
          <li
            className=" flex list-none h-12 w-12 sm:h-8 sm:w-8 border border-cyan-900 rounded-lg m-2 justify-center items-center"
            key={index}
          >
            <p
              className={`font-bold ${
                displayedLetters[index] ? "visible" : "hidden"
              }`}
            >
              {value}
            </p>
            {!displayedLetters[index] && displayLetter(value, index)}
          </li>
        ))}
        <WinGame
          displayLetterLength={displayLetterLength}
          word={word}
        ></WinGame>
      </div>
    </>
  );
};
