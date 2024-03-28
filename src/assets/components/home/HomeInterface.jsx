import { TextGame } from "./TextGame.jsx";
import { ButtonPlay } from "./ButtonPlay.jsx";
import { ButtonsRules } from "./ButtonsRules.jsx";

export const HomeInterface = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-500  w-96 h-96  rounded-lg relative">
      <TextGame></TextGame>
      <div className={"flex flex-col justify-evenly items-center h-full"}>
        <ButtonPlay></ButtonPlay>
        <ButtonsRules></ButtonsRules>
      </div>
    </div>
  );
};
