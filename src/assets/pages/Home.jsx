import { HomeInterface } from "../components/home/HomeInterface.jsx";
import { Background } from "../components/background/Background.jsx";

export const Home = () => {
  return (
    <div className="relative">
      <Background classname="flex justify-center items-center ">
        <HomeInterface></HomeInterface>
      </Background>
    </div>
  );
};
