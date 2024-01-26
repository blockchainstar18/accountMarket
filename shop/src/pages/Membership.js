import { store } from "../Store";
import { useEffect } from "react";

export const Membership = () => {
  const [header, setHeader] = store.useState("Header");

  useEffect(() => {
    setHeader("Membership");
  });

  return <div className="text-black"></div>;
};
