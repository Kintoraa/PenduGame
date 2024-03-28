import { useState } from "react";

export const UseLives = () => {
  const [lives, setLives] = useState(8);

  const decreaseLives = () => {
    if (lives > 0) {
      setLives((prevLives) => prevLives - 1);
    }
  };

  return { lives, decreaseLives };
};
