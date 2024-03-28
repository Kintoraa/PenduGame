import { useState } from "react";
import { useMyContext } from "../../general/Provider.jsx";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
export const LetterSelection = ({ decreaseLives, word }) => {
  const { setLetter } = useMyContext();
  const [clickedLetter, setclickedLetter] = useState({});

  const handleClick = (letter, index) => {
    setLetter(letter);
    setclickedLetter((prevState) => ({ ...prevState, [index]: true }));

    if (!word.toUpperCase().includes(letter.toUpperCase())) {
      decreaseLives();
    }
  };
  return (
    <>
      <div className="grid grid-cols-10 gap-4 max-w-2xl mx-auto justify-items-center p-5 ">
        {alphabet.map((letter, index) => (
          <button
            className={`bg-white h-20 w-10 sm:w-8 sm:h-14 rounded-lg font-bold hover:border-black hover:border transition-all duration-200 ease-in-out hover:bg-gray-600 hover:scale-105 `}
            style={{ background: clickedLetter[index] ? "grey" : "" }}
            key={letter}
            onClick={() => !clickedLetter[index] && handleClick(letter, index)}
          >
            {letter}
          </button>
        ))}
      </div>
    </>
  );
};
