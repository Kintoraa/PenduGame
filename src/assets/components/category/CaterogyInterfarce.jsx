import { ButtonReturn } from "../home/ButtonReturn.jsx";
import { Background } from "../background/Background.jsx";
import { CategoryList } from "./CategoryList.jsx";

export const CaterogyInterfarce = () => {
  return (
    <Background>
      <ButtonReturn></ButtonReturn>
      <CategoryList></CategoryList>
    </Background>
  );
};
