import { Background } from "../../background/Background.jsx";
import { GameMenu } from "../GameMenu/GameMenu.jsx";
import { WordDisplay } from "../WordDisplay/WordDisplay.jsx";
import { useMyContext } from "../../context/Provider.jsx";
import { Navigate } from "react-router-dom";
import { UseLives } from "../../hooks/UseLives.jsx";

export const GameInterface = () => {
  const { list } = useMyContext();
  const { lives, decreaseLives } = UseLives();

  return (
    <>
      {list ? (
        <Background classname="flex items-center flex-col justify-center">
          <GameMenu></GameMenu>
          <WordDisplay
            decreaseLives={decreaseLives}
            lives={lives}
          ></WordDisplay>
        </Background>
      ) : (
        <>
          <Navigate to={"/category"}></Navigate>
        </>
      )}
    </>
  );
};
