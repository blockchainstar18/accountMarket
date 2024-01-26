import { useEffect } from "react";
import { store } from "../Store";
import notify from "../assets/notify.png";
import plus from "../assets/plus.png";
import eye from "../assets/eye.png";
import people from "../assets/people.png";
import revenue from "../assets/revenue.png";
import arrow from "../assets/arrow.png";
// import { Table } from "../components/table";

import { Fourth } from "../components/Fourth";
import { Compo } from "../components/Compo";
import { ChartCompo } from "../components/ChartCompo";
import Chart from "../components/Chart";
import avatar from "../assets/images/avatar.png";

export const Dashboard = () => {
  const [header, setHeader] = store.useState("Header");
  useEffect(() => {
    setHeader("Dashboard");
  });

  return (
    <div className="p-[20px] bg-black space-y-[20px]">
      <div className="grid grid-cols-4 gap-[20px]">
        <Fourth title="Today’s Revenue" content="$1234" />
        <Fourth title="Total Sales / Current Month" content="$1234" />
        <Fourth title="Today Single Orders" content="1234" />
        <Fourth title="Today Subscription Orders" content="1234" />
      </div>
      <div className="grid grid-cols-2 gap-[20px]">
        <Compo
          Left={
            <div className="flex items-center">
              <div className="w-[30px] h-[5px] bg-[#9C0EDF]"></div>
              <div className="text-white">Sales/Visits</div>
              <div className="w-[30px] h-[5px] bg-[#6C7293]"></div>
            </div>
          }
          Right={<div className="text-[#6C7293]">Show All</div>}
          Content={
            <div className="flex gap-[40px] mt-[30px]">
              <ChartCompo height1={100} height2={50} id={"Mon"} />
              <ChartCompo height1={30} height2={20} id={"Tue"} />
              <ChartCompo height1={30} height2={20} id={"Tue"} />
              <ChartCompo height1={30} height2={20} id={"Tue"} />
              <ChartCompo height1={30} height2={20} id={"Tue"} />
              <ChartCompo height1={30} height2={20} id={"Tue"} />
              <ChartCompo height1={30} height2={20} id={"Tue"} />
            </div>
          }
        />
        <Compo
          Left={<div className="text-white">Accounts Vault Supply</div>}
          Right={<div className="text-[#6C7293]">Show All</div>}
          Content={
            <div className="w-full h-full flex justify-center items-center relative">
              <svg
                className="w-[330px] h-[330px]"
                style={{ rotate: "128.5deg" }}
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#9C0EDF" />
                    <stop offset="100%" stop-color="#6C7293" />
                  </linearGradient>
                </defs>

                <circle
                  cx={165}
                  cy={165}
                  r={150}
                  strokeWidth={30}
                  stroke="#7AD3FF"
                  strokeLinecap="round"
                  strokeDasharray={940}
                  strokeDashoffset={200}
                  fill="none"
                ></circle>

                <circle
                  cx={165}
                  cy={165}
                  r={150}
                  strokeWidth={30}
                  stroke="url(#gradient)"
                  strokeLinecap="round"
                  strokeDasharray={740}
                  strokeDashoffset={740 - 740 * 0.7}
                  fill="none"
                ></circle>

                <circle
                  cx={165}
                  cy={165}
                  r={125}
                  strokeWidth={2}
                  stroke="#7AD3FF"
                  strokeLinecap="round"
                  strokeDasharray={(4, 4)}
                  strokeDashoffset={200}
                  fill="none"
                  clipPath="url(#clip-circle)"
                ></circle>
              </svg>

              <div className="absolute text-white text-center">
                <div>Vault</div>
                <div className="text-[58px]">65%</div>
                <div className="w-[150px] h-[100px] bg-[#191C24] mb-[-100px]"></div>
              </div>
            </div>
          }
        />
      </div>

      <Compo
        Left={<div className="text-white">Recent Sales</div>}
        Right={<div className="text-[#6C7293]">Show All</div>}
        Content={
          <div className="bg-black w-full">
            <div className="grid justify-items-start grid-cols-7 p-[2px] gap-[3px] text-white text-[16px]">
              <div className="bg-[#191C24] w-full pl-1 items-center flex py-[8px]">
                <div className="w-[15px] h-[15px] bg-black rounded-[5px]"></div>
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Date
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Invoice
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Customer
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Amount
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Status
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Action
              </div>
            </div>

            <div className="grid justify-items-start grid-cols-7 p-[2px] gap-[3px] text-[#6C7293] text-[16px]">
              <div className="bg-[#191C24] w-full pl-1 items-center flex py-[10px]">
                <div className="w-[15px] h-[15px] bg-black rounded-[5px]"></div>
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Date
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Invoice
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Customer
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Amount
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Status
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                <div className="bg-[#9C0EDF] rounded-[3px] px-1 text-white">
                  Detail
                </div>
              </div>
            </div>

            <div className="grid justify-items-start grid-cols-7 p-[2px] gap-[3px] text-[#6C7293] text-[16px]">
              <div className="bg-[#191C24] w-full pl-1 items-center flex py-[10px]">
                <div className="w-[15px] h-[15px] bg-black rounded-[5px]"></div>
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Date
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Invoice
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Customer
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Amount
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Status
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                <div className="bg-[#9C0EDF] rounded-[3px] px-1 text-white">
                  Detail
                </div>
              </div>
            </div>
          </div>
        }
      />

      <div className="grid grid-cols-3 gap-[20px]">
        <Compo
          Left={<div className="text-white">Customers Chat</div>}
          Right={<div className="text-[#6C7293]">Show All</div>}
          Content={
            <div className="w-full bg-black space-y-[2px]">
              <div className="flex w-full bg-[#191C24] py-2">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-[40px] h-[40px]">
                    <img
                      className="w-[40px] h-[40px] rounded-[20px]"
                      src={avatar}
                    ></img>
                  </div>
                  <div>
                    <div className="text-white text-[16px]">John Doe</div>
                    <div className="text-[#9C0EDF] text-[16px]">
                      Unread Messages!
                    </div>
                  </div>
                </div>

                <div className="text-[#6C7293] text-[14px] w-full flex justify-end">
                  15 minutes ago
                </div>
              </div>
              <div className="flex w-full bg-[#191C24] py-2">
                <div className="flex items-center gap-4 w-[50%]">
                  <div className="relative w-[40px] h-[40px]">
                    <img
                      className="w-[40px] h-[40px] rounded-[20px]"
                      src={avatar}
                    ></img>
                  </div>
                  <div>
                    <div className="text-white text-[16px]">John Doe</div>
                    <div className="text-[#6C7293] text-[16px]">Admin</div>
                  </div>
                </div>

                <div className="text-[#6C7293] text-[14px] w-full flex justify-end">
                  15 minutes ago
                </div>
              </div>
              <div className="flex w-full bg-[#191C24] py-2">
                <div className="flex items-center gap-4 w-[50%]">
                  <div className="relative w-[40px] h-[40px]">
                    <img
                      className="w-[40px] h-[40px] rounded-[20px]"
                      src={avatar}
                    ></img>
                  </div>
                  <div>
                    <div className="text-white text-[16px]">John Doe</div>
                    <div className="text-[#6C7293] text-[16px]">Admin</div>
                  </div>
                </div>

                <div className="text-[#6C7293] text-[14px] w-full flex justify-end">
                  15 minutes ago
                </div>
              </div>
            </div>
          }
        />

        <Compo
          Left={<div className="text-white">Recent Sales</div>}
          Right={<div className="text-[#6C7293]">Show All</div>}
          Content={
            <div className="bg-black w-full space-y-[1px]">
              <div className="w-full gap-[2px] flex text-[#6C7293] text-[16px]">
                <div className="w-[10%] bg-[#191C24]"></div>
                <div className="w-[20%] bg-[#191C24] text-center">Netflix</div>
                <div className="w-[20%] bg-[#191C24] text-end pr-2">180Pcs</div>
                <div className="w-[15%] bg-[#191C24] text-center">Single</div>
                <div className="w-[35%] bg-[#191C24] flex gap-3 justify-end">
                  <div>$2500</div>

                  <div className="bg-[#9C0EDF] rounded-[3px] px-1 text-white">
                    Detail
                  </div>
                </div>
              </div>

              <div className="w-full gap-[2px] flex text-[#6C7293] text-[16px]">
                <div className="w-[10%] bg-[#191C24]"></div>
                <div className="w-[20%] bg-[#191C24] text-center">Netflix</div>
                <div className="w-[20%] bg-[#191C24] text-end pr-2">180Pcs</div>
                <div className="w-[15%] bg-[#191C24] text-center">Single</div>
                <div className="w-[35%] bg-[#191C24] flex gap-3 justify-end">
                  <div>$2500</div>

                  <div className="bg-[#9C0EDF] rounded-[3px] px-1 text-white">
                    Detail
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <Compo
          Left={<div className="text-[#9C0EDF]">Customers Chat</div>}
          Right={<div className="text-[#6C7293]">Show All</div>}
          Content={
            <div className="w-full bg-black space-y-[2px]">
              <div className="flex w-full bg-[#191C24] py-2">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-[40px] h-[40px]">
                    <img
                      className="w-[40px] h-[40px] rounded-[20px]"
                      src={avatar}
                    ></img>
                  </div>
                  <div>
                    <div className="text-white text-[16px]">John Doe</div>
                    <div className="text-[#9C0EDF] text-[16px]">
                      Unread Messages!
                    </div>
                  </div>
                </div>

                <div className="text-[#6C7293] text-[14px] w-full flex justify-end">
                  15 minutes ago
                </div>
              </div>
              <div className="flex w-full bg-[#191C24] py-2">
                <div className="flex items-center gap-4 w-[50%]">
                  <div className="relative w-[40px] h-[40px]">
                    <img
                      className="w-[40px] h-[40px] rounded-[20px]"
                      src={avatar}
                    ></img>
                  </div>
                  <div>
                    <div className="text-white text-[16px]">John Doe</div>
                    <div className="text-[#6C7293] text-[16px]">Admin</div>
                  </div>
                </div>

                <div className="text-[#6C7293] text-[14px] w-full flex justify-end">
                  15 minutes ago
                </div>
              </div>
              <div className="flex w-full bg-[#191C24] py-2">
                <div className="flex items-center gap-4 w-[50%]">
                  <div className="relative w-[40px] h-[40px]">
                    <img
                      className="w-[40px] h-[40px] rounded-[20px]"
                      src={avatar}
                    ></img>
                  </div>
                  <div>
                    <div className="text-white text-[16px]">John Doe</div>
                    <div className="text-[#6C7293] text-[16px]">Admin</div>
                  </div>
                </div>

                <div className="text-[#6C7293] text-[14px] w-full flex justify-end">
                  15 minutes ago
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};
