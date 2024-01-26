import Dashboard1 from "../assets/images/11.png";
import Dashboard2 from "../assets/images/12.png";

import Activities1 from "../assets/images/21.png";
import Activities2 from "../assets/images/22.png";
import Accounts1 from "../assets/images/31.png";
import Accounts2 from "../assets/images/32.png";
import Financial1 from "../assets/images/41.png";
import Financial2 from "../assets/images/42.png";
import Customers1 from "../assets/images/51.png";
import Customers2 from "../assets/images/52.png";
import Membership1 from "../assets/images/61.png";
import Membership2 from "../assets/images/62.png";

import logout from "../assets/logout.png";
import { store } from "../Store";
import { Btn } from "./Btn";
import usePath from "react-use-path";

import logo from "../assets/images/sneakypanel.png";
import avatar from "../assets/images/avatar.png";

export const SideBar = () => {
  const [header, setHeader] = store.useState("Header");
  const [path, setPath] = usePath();
  console.log(window.location.href);

  return (
    <div className="hidden sm:block min-w-[350px] min-h-[100vh] bg-[#191C24]">
      <div className="my-[50px] ml-[30px] flex items-center">
        <img className="" src={logo}></img>
      </div>

      <div className="flex items-center gap-4">
        <div className="ml-4 relative w-[40px] h-[40px]">
          <img className="w-[40px] h-[40px] rounded-[20px]" src={avatar}></img>
          <div className="absolute bottom-[0px] right-[0px] w-[10px] h-[10px] bg-[#198754] border-[2px] border-white rounded-[5px]"></div>
        </div>
        <div>
          <div className="text-white text-[16px]">John Doe</div>
          <div className="text-[#6C7293] text-[16px]">Admin</div>
        </div>
      </div>

      <div className="mt-6">
        <Btn
          id="Dashboard"
          icon1={Dashboard1}
          icon2={Dashboard2}
          text={"Dashboard"}
          link="/dashboard"
        />
        <Btn
          id="Analytics"
          icon1={Activities1}
          icon2={Activities2}
          text={"Analytics"}
          link="/analytics"
        />
        <Btn
          id="Accounts Vault"
          icon1={Accounts1}
          icon2={Accounts2}
          text={"Accounts Vault"}
          link="/accounts"
        />
        <Btn
          id="Financial"
          icon1={Financial1}
          icon2={Financial2}
          text={"Financial"}
          link="/financial"
        />
        <Btn
          id="Customers"
          icon1={Customers1}
          icon2={Customers2}
          text={"Customers Chats"}
          link="/customers"
        />
        <Btn
          id="Membership"
          icon1={Membership1}
          icon2={Membership2}
          text={"Membership"}
          link="/membership"
        />
      </div>
    </div>
  );
};
