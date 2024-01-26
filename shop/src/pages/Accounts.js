import { useEffect } from "react";
import { store } from "../Store";
import question from "../assets/question.png";
import heart from "../assets/heart.png";
import copy from "../assets/copy.png";
import { useState } from "react";
import { Fourth } from "../components/Fourth";
import { Compo } from "../components/Compo";
import cross1 from "../assets/images/cross1.png";
import cross2 from "../assets/images/cross2.png";
import check from "../assets/images/check.png";

export const Accounts = () => {
  const [header, setHeader] = store.useState("Header");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const OnCheck = (e) => {
    if (e.target.firstChild) {
      if (e.target.firstChild.style.display == "none") {
        e.target.firstChild.style.display = "block";
        e.target.style.backgroundColor = "#9C0EDF";
      } else {
        e.target.firstChild.style.display = "none";
        e.target.style.backgroundColor = "black";
      }
    } else {
      if (e.target.style.display == "none") {
        e.target.style.display = "block";
      } else {
        e.target.style.display = "none";
        e.target.parentElement.style.backgroundColor = "black";
      }
    }
  };

  const setCross = (e) => {
    e.target.src = cross2;
  };

  const unsetCross = (e) => {
    e.target.src = cross1;
  };

  useEffect(() => {
    setHeader("Accounts Vault");
  });

  return (
    <div className="p-[20px] bg-black space-y-[20px]">
      <div className="text-white text-[32px]">Vault Panel</div>

      <div className="grid grid-cols-4 gap-[20px]">
        <Fourth title="Total Accounts Stored" content="1234" />
        <Fourth
          title="Subscription Slots"
          content={
            <div>
              50/100
              <span className="absolute text-[16px] bottom-[0px] text-[#6C7293]">
                (used/total)
              </span>
            </div>
          }
        />
        <Fourth
          title="Under 25% Stock Products"
          content={
            <div>
              50/100
              <span className="absolute text-[16px] bottom-[0px] text-[#6C7293]">
                (issue/total)
              </span>
            </div>
          }
        />
        <Fourth title="Total Fulfillable Subscriptions" content="1234" />
      </div>

      <div className="text-white text-[24px]">Analytics</div>

      <div className="grid grid-cols-3 bg-[#191C24] rounded-[5px]">
        <Compo
          Left={<div className="text-white">Account Type Selector</div>}
          Content={
            <div className="flex items-center h-full">
              <div className="space-y-2">
                <div className="px-6 py-1 bg-[#9C0EDF] text-white rounded-[5px] text-center">
                  Single Verified Account
                </div>
                <div className="px-6 py-1 bg-[#9C0EDF] text-white rounded-[5px] text-center">
                  Single Unverified Account
                </div>
              </div>
            </div>
          }
        />
        <Compo
          Left={<div className="text-white">Product List</div>}
          Right={<div className="text-[#6C7293]">Show All</div>}
          Content={
            <div className="w-full">
              <input
                className="h-[40px] bg-black rounded-[5px] text-[#6C757D] text-[16px] p-4 w-full"
                placeholder="Enter Product Name"
              ></input>

              <div className="flex items-center border-b-[1px] border-black p-2">
                <div className="w-full flex justify-start items-center gap-2">
                  <div
                    className="flex items-center w-[16px] h-[16px] bg-black justify-center rounded-[5px]"
                    onClick={OnCheck}
                  >
                    <img
                      src={check}
                      style={{
                        display: "none",
                      }}
                    ></img>
                  </div>
                  <div className="text-[#6C7293]">Netflix Subscription</div>
                </div>
                <div className="w-full flex justify-end">
                  <img
                    src={cross1}
                    onMouseEnter={setCross}
                    onMouseLeave={unsetCross}
                  ></img>
                </div>
              </div>

              <div className="flex items-center border-b-[1px] border-black p-2">
                <div className="w-full flex justify-start items-center gap-2">
                  <div
                    className="flex items-center w-[16px] h-[16px] bg-black justify-center rounded-[5px]"
                    onClick={OnCheck}
                  >
                    <img
                      src={check}
                      style={{
                        display: "none",
                      }}
                    ></img>
                  </div>
                  <div className="text-[#6C7293]">Netflix Subscription</div>
                </div>
                <div className="w-full flex justify-end">
                  <img
                    src={cross1}
                    onMouseEnter={setCross}
                    onMouseLeave={unsetCross}
                  ></img>
                </div>
              </div>
            </div>
          }
        />
        <Compo
          Content={
            <div className="flex items-center h-full">
              <div className="space-y-2">
                <div className="px-6 py-1 bg-[#9C0EDF] text-white rounded-[5px] text-center">
                  Import From File
                </div>
                <div className="px-6 py-1 bg-[#9C0EDF] text-white rounded-[5px] text-center">
                  Submit List To Vault
                </div>
              </div>
            </div>
          }
        />
      </div>

      <div className="text-white text-[24px]">Vault Stock List</div>

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
                Service
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Uploader
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Quantity Uploaded
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex">
                Quantity Remaining
              </div>
              <div className="bg-[#191C24] w-full pl-1 items-center flex gap-2">
                <div className="bg-[#9C0EDF] rounded-[3px] px-1 text-white">
                  Detail
                </div>
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
              <div className="bg-[#191C24] w-full pl-1 items-center flex gap-2">
                <div className="bg-[#9C0EDF] rounded-[3px] px-1 text-white">
                  Detail
                </div>
                <div className="bg-[#9C0EDF] rounded-[3px] px-1 text-white">
                  Detail
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
