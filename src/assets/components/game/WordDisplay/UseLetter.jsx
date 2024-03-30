import { useMyContext } from "../../context/Provider.jsx";
import { useEffect, useRef, useState } from "react";

export const useLetter = ({ decreaseLives, word, lives }) => {
  const { setLetter, isEnd } = useMyContext();
  const ref = useRef(null);
  const [clickedLetter, setclickedLetter] = useState({});

  const handleClick = (letter, index) => {
    setLetter(letter);
    setclickedLetter((prevState) => ({ ...prevState, [index]: true }));
    if (!word.toUpperCase().includes(letter.toUpperCase())) {
      decreaseLives();
    }
  };

  useEffect(() => {
    const keyPress = (e) => {
      const idKey = e.key.toUpperCase();
      const keyLetter = document.getElementById(idKey);

      if (
        keyLetter &&
        keyLetter.dataset.letter &&
        keyLetter.dataset.letter.toUpperCase() === e.key.toUpperCase()
      ) {
        setLetter(keyLetter.dataset.letter);
        setclickedLetter((prevState) => ({
          ...prevState,
          [keyLetter.dataset.index]: true,
        }));
      }

      if (
        !word.toUpperCase().includes(keyLetter.dataset.letter.toUpperCase()) &&
        !clickedLetter[keyLetter.dataset.index]
      ) {
        decreaseLives();
      }
    };

    if (lives > 0 && !isEnd) {
      window.addEventListener("keydown", keyPress);
    }

    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  }, [clickedLetter, isEnd]);

  const handleLastButtonKeyDown = (letter, index, e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      ref.current.focus();
    }
  };

  return {
    handleClick,
    handleLastButtonKeyDown,
    clickedLetter,
    ref,
  };
};
