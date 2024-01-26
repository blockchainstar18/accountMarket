import { store } from "../Store";
import { useEffect } from "react";
import { InputItem } from "../components/InputItem";

export const Customers = () => {
  const [header, setHeader] = store.useState("Header");
  useEffect(() => {
    setHeader("Customers Chats");
  });
  return <div className="text-black p-[20px]"></div>;
};
