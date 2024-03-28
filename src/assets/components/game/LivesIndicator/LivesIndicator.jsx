import heart from "../../../utility/image/heart.svg";
import { useEffect, useState } from "react";
import { LostGame } from "../endGame/LostGame.jsx";

const LIFES = 8;
export const LivesIndicator = ({ lives, word }) => (
  <LiveBar lives={lives} word={word}></LiveBar>
);
const LiveBar = ({ lives, word }) => {
  const [barWidth, setBarWidth] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    setBarWidth((lives / LIFES) * 100);
    setColor(getColor(lives));
  }, [lives]);

  return (
    <>
      <div className="w-64 sm:w-40 bg-gray-2000 rounded-lg absolute top-0 right-0 m-6 border border-black">
        <div
          className={`h-4 ${color} rounded-lg`}
          style={{ width: `${barWidth}%` }}
        />
        <img
          className="h-4 w-4 absolute top-0 -right-5 animate-pulse"
          src={heart}
          alt={"heart"}
        />
      </div>
      <LostGame lives={lives} word={word}></LostGame>
    </>
  );
};

const getColor = (lives) => {
  if (lives >= 7 && lives <= 8) {
    return "bg-green-500";
  } else if (lives >= 5 && lives <= 6) {
    return "bg-amber-300";
  } else if (lives >= 3 && lives <= 4) {
    return "bg-amber-600";
  } else if (lives === 2) {
    return "bg-red-600";
  } else if (lives === 1) {
    return "bg-red-950";
  }
};
