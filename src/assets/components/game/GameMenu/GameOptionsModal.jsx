import { ButtonCategory } from "../../category/RouteComponent/ButtonCategory.jsx";
import { ButtonHome } from "../../category/RouteComponent/ButtonHome.jsx";

export const GameOptionsModal = ({ isOpen, toggleClick }) => {
  return (
    <>
      <dialog
        open={isOpen}
        className={`h-96 w-96 text-center p-6 bg-blue-500 rounded-lg`}
      >
        <h2 className="uppercase font-bold ">Options</h2>
        <div className="flex flex-col items-center h-full justify-evenly ">
          <button
            className="bg-blue-950 text-white w-64 h-10 p-2 rounded-lg transition-all duration-200 ease-in-out hover:bg-blue-700 hover:scale-105"
            onClick={toggleClick}
          >
            Continue
          </button>
          <ButtonCategory></ButtonCategory>
          <ButtonHome></ButtonHome>
        </div>
      </dialog>
    </>
  );
};
