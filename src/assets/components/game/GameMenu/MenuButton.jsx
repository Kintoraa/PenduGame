import { useMyContext } from "../../context/Provider.jsx";
import menuButton from "../../../utility/image/menu.svg";

export const MenuButton = (props) => {
  const { onClick } = props;
  const { category } = useMyContext();

  return (
    <div className=" flex absolute w-44 m-2 top-0 left-0 justify-around center items-center ">
      <button className="h-10 w-10 " onClick={onClick} tabIndex="-1">
        <img src={menuButton} alt={"Menu"} />
      </button>
      <p className="text-2xl uppercase font-bold tracking-wider sm:text-lg m-3">
        {category}
      </p>
    </div>
  );
};
