"use client";
import { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Hello from context!");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isFilterOpne, setIsFilteOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const data = {
    isEditOpen,
    setIsEditOpen,
    value,
    setValue,
    isFilterOpne,
    setIsFilteOpen,
    selected,
    setSelected,
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

export { MyContext, MyProvider };
