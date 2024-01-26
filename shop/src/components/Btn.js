import { store } from "../Store";
import { NavLink } from "react-router-dom";

export const Btn = ({ id, icon1, icon2, text, link }) => {
  const [header, setHeader] = store.useState("Header");

  return (
    <>
      {header == text ? (
        <div>
          <input name="tab" id={id} type="radio" className="flex"></input>
          <label
            for={id}
            className="flex flex-row bg-black text-[#9C0EDF] items-center gap-4 border-l-4 border-[#9C0EDF]"
          >
            <div className="w-[40px] h-[40px] rounded-[20px] bg-[#191C24] flex flex-row items-center justify-center">
              <img src={icon2} className=""></img>
            </div>
            {text}
          </label>
        </div>
      ) : (
        <NavLink to={link}>
          <input name="tab" id={id} type="radio" className="flex"></input>
          <label
            for={id}
            className="flex flex-row text-[#6C7293] items-center gap-4"
          >
            <div className="w-[40px] h-[40px] rounded-[20px] bg-black flex flex-row items-center justify-center">
              <img src={icon1} className=""></img>
            </div>
            {text}
          </label>
        </NavLink>
      )}
    </>
  );
};
