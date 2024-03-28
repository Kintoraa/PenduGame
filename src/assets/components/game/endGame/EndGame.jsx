import { ButtonCategory } from "../../category/RouteComponent/ButtonCategory.jsx";
import { ButtonHome } from "../../category/RouteComponent/ButtonHome.jsx";
import { MenuOverlay } from "../GameMenu/MenuOverlay.jsx";

export const EndGame = ({ msg, backgroundColor, word }) => {
  return (
    <>
      <MenuOverlay isOpen={true}></MenuOverlay>
      <dialog
        open={true}
        className={`h-96 w-96 text-center p-5 ${backgroundColor} rounded-lg border-black border-8`}
      >
        <h1 className="uppercase font-bold text-black ">{msg}</h1>
        <p>Le mot etais : {word} </p>
        <div className="flex flex-col items-center h-full justify-evenly">
          <ButtonCategory></ButtonCategory>
          <ButtonHome></ButtonHome>
        </div>
      </dialog>
    </>
  );
};
