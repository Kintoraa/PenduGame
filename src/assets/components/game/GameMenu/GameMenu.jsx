import { GameOptionsModal } from "./GameOptionsModal.jsx";
import { useState } from "react";
import { MenuButton } from "./MenuButton.jsx";
import { MenuOverlay } from "./MenuOverlay.jsx";

export const GameMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClick = () => {
    setIsOpen((curr) => !curr);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <MenuButton onClick={toggleClick}></MenuButton>
      <MenuOverlay isOpen={isOpen}></MenuOverlay>
      <GameOptionsModal
        isOpen={isOpen}
        toggleClick={toggleClick}
      ></GameOptionsModal>
    </>
  );
};
