import { EndGame } from "../endGame/EndGame.jsx";

export const LostGame = ({ lives, word }) => {
  return (
    <>
      {lives === 0 && (
        <EndGame
          backgroundColor={"bg-red-500"}
          msg={"Vous avez perdu !"}
          word={word}
        ></EndGame>
      )}
    </>
  );
};
