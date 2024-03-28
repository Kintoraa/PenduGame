import { Background } from "../components/general/Background.jsx";
import imgRules from "/src/assets/utility/image/rules.png";
import { ButtonReturn } from "../components/general/ButtonReturn.jsx";

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
