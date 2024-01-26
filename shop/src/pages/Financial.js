import { store } from "../Store";
import { useEffect } from "react";
import { IntegrationItem } from "../components/IntegrationItem";
import calender from "../assets/calendar.png";
import mailchimp from "../assets/mailchimp.png";
import { Compo } from "../components/Compo";
import cross1 from "../assets/images/cross1.png";
import cross2 from "../assets/images/cross2.png";
import check from "../assets/images/check.png";

import { CheckboxCompo } from "../components/CheckboxCompo";
import { useState } from "react";

export const Financial = () => {
  const [header, setHeader] = store.useState("Header");

  const [currencylist, setCurrencyList] = useState([]);
  const [filterdList, setFilterdList] = useState([]);

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

  const filterList = (e) => {
    const temp = [...currencylist].filter((item) => {
      return item.code.toUpperCase().indexOf(e.target.value.toUpperCase()) >= 0;
    });
    setFilterdList(temp);
  };

  const getCoinList = () => {
    fetch("http://localhost:4000/currencylist").then((res) => {
      res.json().then((res) => {
        console.log(res);
        setCurrencyList(res);
      });
    });
  };

  useEffect(() => {
    setHeader("Financial");
    getCoinList();
  }, []);

  return (
    <div className="p-[20px] bg-black space-y-[20px]">
      <div className="text-white text-[24px]">Payment Methods</div>

      <div className="grid grid-cols-3 bg-[#191C24] rounded-[5px]">
        <Compo
          Left={<div className="text-white">Coin Select</div>}
          Content={
            <div className="w-full">
              <input
                className="h-[40px] bg-black rounded-[5px] text-[#6C757D] text-[16px] p-4 w-full"
                placeholder="Enter Product Name"
                onChange={filterList}
              ></input>

              <div className="h-[150px] w-full scrollcontainer overflow-scroll">
                {filterdList.map((it, i) => {
                  return (
                    <CheckboxCompo
                      content={
                        <div className="flex items-center">
                          <img
                            className="w-[20px] h-[20px] mr-2"
                            src={"https://storage.swapspace.co" + it.icon}
                          ></img>
                          <div>
                            {it.code.toUpperCase() + "(" + it.network + ")"}
                          </div>
                        </div>
                      }
                    ></CheckboxCompo>
                  );
                })}
              </div>
            </div>
          }
        />
        <Compo
          Left={<div className="text-white">Recipient Wallet</div>}
          Content={
            <div className="w-full space-y-2">
              <input
                className="h-[40px] bg-black rounded-[5px] text-[#6C757D] text-[16px] p-4 w-full"
                placeholder="Enter Recepient Wallet"
              ></input>
              <input
                className="h-[40px] bg-black rounded-[5px] text-[#6C757D] text-[16px] p-4 w-full"
                placeholder="Enter Network"
              ></input>
              <div className="flex items-center h-full justify-center">
                <div className="px-6 py-1 bg-[#9C0EDF] text-white rounded-[5px] text-center">
                  Add Payment Method
                </div>
              </div>
            </div>
          }
        />
        <Compo
          Left={<div className="text-white">Active Wallets</div>}
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
                  <div className="text-[#6C7293]">XMR(Network)</div>
                </div>
                <div className="w-full flex justify-end">
                  888tNkZrPN....oogDavup3H
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
                  <div className="text-[#6C7293]">BTC(Network) </div>
                </div>
                <div className="w-full flex justify-end">
                  3FZbgi29cp...JnkLtktZc5
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
                  <div className="text-[#6C7293]">USDT(Network)</div>
                </div>
                <div className="w-full flex justify-end">
                  0xdac17f95...c13d831ec7
                </div>
              </div>
            </div>
          }
        />
      </div>

      <div className="text-white text-[24px]">Shop & Products</div>

      <div className="grid grid-cols-3 bg-[#191C24] rounded-[5px]">
        <Compo
          Left={<div className="text-white">Shop UI Panel</div>}
          Content={
            <div className="w-full space-y-2">
              <div className="text-white">Shop hero Image</div>
              <input
                className="h-[40px] bg-black rounded-[5px] text-[#6C757D] text-[16px] p-4 w-full"
                placeholder="Enter Network"
              ></input>
              <div className="flex items-center h-full justify-center">
                <div className="px-6 py-1 bg-[#9C0EDF] text-white rounded-[5px] text-center">
                  Add Payment Method
                </div>
              </div>
            </div>
          }
        />

        <Compo
          Content={
            <div className="w-full space-y-2">
              <div className="text-white">Shop hero Image</div>
              <input
                className="h-[40px] bg-black rounded-[5px] text-[#6C757D] text-[16px] p-4 w-full"
                placeholder="Enter Network"
              ></input>
              <div className="flex items-center h-full justify-center">
                <div className="px-6 py-1 bg-[#9C0EDF] text-white rounded-[5px] text-center">
                  Add Payment Method
                </div>
              </div>
            </div>
          }
        />

        <Compo
          Content={
            <div className="w-full space-y-2">
              <div className="text-white">Shop hero Image</div>
              <input
                className="h-[40px] bg-black rounded-[5px] text-[#6C757D] text-[16px] p-4 w-full"
                placeholder="Enter Network"
              ></input>
              <div className="flex items-center h-full justify-center">
                <div className="px-6 py-1 bg-[#9C0EDF] text-white rounded-[5px] text-center">
                  Add Payment Method
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};
