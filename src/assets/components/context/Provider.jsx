import { createContext, useContext, useState } from "react";

export const ContextCategory = createContext(undefined);

export const Provider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [list, setList] = useState("");
  const [letter, setLetter] = useState("");

  return (
    <ContextCategory.Provider
      value={{ category, setCategory, list, setList, letter, setLetter }}
    >
      {children}
    </ContextCategory.Provider>
  );
};

export const useMyContext = () => useContext(ContextCategory);
