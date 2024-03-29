import { Background } from "../components/background/Background.jsx";
import imgRules from "/src/assets/utility/image/rules.png";
import { ButtonReturn } from "../components/home/ButtonReturn.jsx";

export const Rules = () => {
  return (
    <>
      <ButtonReturn></ButtonReturn>
      <Background classname={"flex justify-center"}>
        <img
          src={imgRules}
          alt={"Image des regles du jeux"}
          className={" sm:w-full h-full"}
        />
      </Background>
    </>
  );
};
