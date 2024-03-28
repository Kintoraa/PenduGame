import { NavLink } from "react-router-dom";

export const ButtonCategory = () => {
  return (
    <NavLink
      className="bg-blue-950 text-white w-64 h-10  p-2 rounded-lg hover:border-black hover:border transition-all duration-200 ease-in-out hover:bg-blue-700 hover:scale-105"
      to={"/category"}
    >
      Nouvelle catégorie
    </NavLink>
  );
};
