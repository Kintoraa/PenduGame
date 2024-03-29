import { useMemo } from "react";
import { useMyContext } from "../context/Provider.jsx";

export const useCreateCategory = () => {
  const { list } = useMyContext();
  const randomNumber = useMemo(() => {
    return Math.floor(Math.random() * list.length);
  }, [list]);
  return list[randomNumber].replace(/\s+/g, "");
};
