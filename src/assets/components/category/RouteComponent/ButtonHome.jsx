import { NavLink } from "react-router-dom";

export const ButtonHome = () => {
  return (
    <NavLink
      className="bg-red-800 text-white w-64 h-10  p-2 rounded-lg hover:border-black hover:border transition-all duration-200 ease-in-out hover:bg-red-900 hover:scale-105"
      to={"/"}
    >
      Quitter
    </NavLink>
  );
};
