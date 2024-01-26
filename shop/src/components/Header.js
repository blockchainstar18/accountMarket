import { store } from "../Store";
import copy from "../assets/copy.png";
import { useState } from "react";
import back from "../assets/back.png";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import hypeit from "../assets/hypeit.png";
import Home1 from "../assets/home1.png";
import Home2 from "../assets/home2.png";
import mystore1 from "../assets/mystore1.png";
import mystore2 from "../assets/mystore2.png";
import revenue1 from "../assets/revenue1.png";
import revenue2 from "../assets/revenue2.png";
import integrations1 from "../assets/integrations1.png";
import integrations2 from "../assets/integrations2.png";
import setting1 from "../assets/setting.png";
import setting2 from "../assets/setting1.png";
import logout from "../assets/logout.png";
import { Btn } from "./Btn";

import responsive from "../assets/images/reponsive.png";
import mail from "../assets/images/mail.png";
import dropdown from "../assets/images/dropdown.png";
import notification from "../assets/images/notification.png";
import avatar from "../assets/images/avatar.png";

export const Header = () => {
  const [header, setHeader] = store.useState("Header");
  const [show, setShow] = useState(false);

  return (
    <div className="h-[64px] bg-[#191C24] text-[#00106D] font-bold flex items-center relative">
      <div className="w-max h-full justify-start items-center flex">
        <div className="w-[40px] h-[40px] rounded-[20px] bg-black flex flex-row mx-6 items-center justify-center">
          <img src={responsive} className=""></img>
        </div>

        <input
          className="h-[40px] bg-black rounded-[5px] text-[#6C757D] text-[16px] p-4"
          placeholder="Search"
        ></input>
      </div>

      <div className="w-full h-full justify-end flex">
        <div className="flex items-center flex text-[#6C7293] text-[16px] gap-4 mx-4">
          <div className="w-[40px] h-[40px] rounded-[20px] bg-black flex flex-row items-center justify-center">
            <img src={mail} className=""></img>
          </div>
          Messages
          <img src={dropdown}></img>
        </div>
        <div className="flex items-center flex text-[#6C7293] text-[16px] gap-4 mx-4">
          <div className="w-[40px] h-[40px] rounded-[20px] bg-black flex flex-row items-center justify-center">
            <img src={notification} className=""></img>
          </div>
          Notification
          <img src={dropdown}></img>
        </div>
        <div className="flex items-center flex text-[#6C7293] text-[16px] gap-4 mx-4">
          <div className="w-[40px] h-[40px] rounded-[20px] bg-black flex flex-row items-center justify-center">
            <img
              src={avatar}
              className="w-[40px] h-[40px] rounded-[20px]"
            ></img>
          </div>
          Notification
          <img src={dropdown}></img>
        </div>
      </div>
    </div>
  );
};
