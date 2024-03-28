import { EndGame } from "./EndGame.jsx";

export const WinGame = ({ displayLetterLength, word }) => {
  return (
    <>
      {displayLetterLength === word.length && (
        <EndGame
          backgroundColor={"bg-green-500"}
          msg="Vous avez Gagné !"
          word={word}
        ></EndGame>
      )}
    </>
  );
};
