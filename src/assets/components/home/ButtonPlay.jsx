import { NavLink } from "react-router-dom";

export const ButtonPlay = () => {
  return (
    <NavLink to="/category" className="z-50">
      <button>
        <i className="fa-regular fa-circle-play text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 hover:text-cyan-400 rounded-full text-8xl"></i>
      </button>
    </NavLink>
  );
};
