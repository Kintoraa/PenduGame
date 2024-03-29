import { NavLink } from "react-router-dom";

export const ButtonReturn = () => {
  return (
    <div className="absolute">
      <NavLink Link to={"/"}>
        <i className="fa-regular fa-square-caret-left text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 hover:text-cyan-400 rounded-full text-5xl m-3 transition-all duration-200 ease-in-out hover:bg-blue-700 hover:scale-105"></i>
      </NavLink>
    </div>
  );
};
