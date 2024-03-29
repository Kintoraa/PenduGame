import { useLetter } from "./UseLetter.jsx";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
export const LetterSelection = ({ decreaseLives, word }) => {
  const { handleClick, handleLastButtonKeyDown, clickedLetter, ref } =
    useLetter({
      decreaseLives,
      word,
    });

  return (
    <>
      <div className="grid grid-cols-10 gap-4 max-w-2xl mx-auto justify-items-center p-5 ">
        {alphabet.map((letter, index) => (
          <button
            tabIndex="0"
            key={index}
            ref={index === 0 ? ref : null}
            data-index={index}
            data-letter={letter}
            className={`bg-white h-20 w-10 sm:w-8 sm:h-14 rounded-lg font-bold hover:border-black hover:border transition-all duration-200 ease-in-out hover:bg-gray-600 hover:scale-105 `}
            style={{ background: clickedLetter[index] ? "grey" : "" }}
            id={letter}
            onClick={() => !clickedLetter[index] && handleClick(letter, index)}
            onKeyDown={(e) =>
              index === alphabet.length - 1 &&
              handleLastButtonKeyDown(letter, index, e)
            }
          >
            {letter}
          </button>
        ))}
      </div>
    </>
  );
};
