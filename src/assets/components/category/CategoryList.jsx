import data from "/src/data/data.json";
import { TitleCategory } from "./TitleCategory.jsx";
import { NavLink } from "react-router-dom";
import { useMyContext } from "../context/Provider.jsx";
import { useEffect } from "react";

export const CategoryList = () => (
  <ChooseList>
    <TitleCategory></TitleCategory>
  </ChooseList>
);

const ChooseList = ({ children }) => {
  const { setCategory, setList, setLetter } = useMyContext();

  useEffect(() => setLetter(""), []);
  const handleClick = (key) => {
    setCategory(key);
    setList(data[key]);
  };

  return (
    <div className="h-screen flex justify-around items-center p-5">
      <div className="bg-blue-950 mx-auto flex flex-wrap items-center justify-center rounded-lg relative">
        {children}
        {Object.entries(data).map(([key]) => (
          <NavLink
            to={"/play"}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-5 my-5 h-20 w-36 m-16 flex justify-center items-center uppercase transition-all duration-200 ease-in-out hover:scale-105 hover:border"
            key={key}
            onClick={() => handleClick(key)}
          >
            {key}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
