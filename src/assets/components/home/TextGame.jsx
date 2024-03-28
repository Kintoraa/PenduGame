import imgGame from "/src/assets/utility/image/Play.svg";

export const TextGame = () => {
  return (
    <img
      className="absolute z-10 -translate-y-1/3  h-max w-max"
      src={imgGame}
      alt="The HangMan Game"
    />
  );
};
