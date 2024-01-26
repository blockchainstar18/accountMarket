import { useEffect } from "react";
import { store } from "../Store";
import John from "../assets/John.png";

import pJohn from "../assets/phoneJohn.png";

import pen from "../assets/pen.png";
import tiktok from "../assets/tiktok.png";
import instagram from "../assets/instagram.png";
import link from "../assets/link.png";
import plus from "../assets/plus.png";
import download from "../assets/download.png";
import box from "../assets/box.png";
import calender from "../assets/calender.png";

import { StoreItem } from "../components/StoreItem";

import website from "../assets/website.png";
import podcast from "../assets/podcast.png";
import tiktokstarterguide from "../assets/starterguide.png";
import videoaudit from "../assets/videoaudit.png";
import coaching from "../assets/coaching.png";
import steps from "../assets/steps.png";
import mail from "../assets/mail.png";

import logo from "../assets/logo.png";
import hypeit from "../assets/hypeit.png";

import { ProductItem } from "../components/ProductItem";

import collet from "../assets/collect.png";
import sell from "../assets/sell.png";
import book from "../assets/book.png";
import custom from "../assets/custom.png";
import recurring from "../assets/recurring.png";
import external from "../assets/url.png";
import hype from "../assets/hype.png";
import phone from "../assets/phone.png";
import { Compo } from "../components/Compo";

import Calendar from "react-calendar";
import { useState } from "react";
import cross1 from "../assets/images/cross1.png";
import cross2 from "../assets/images/cross2.png";
import check from "../assets/images/check.png";
import { Fourth } from "../components/Fourth";
import { ChartCompo } from "../components/ChartCompo";

export const Analytics = () => {
  const [header, setHeader, updateHeader] = store.useState("Header");
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    setHeader("Analytics");
  }, []);

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

  return (
    <div className="p-[20px] bg-black space-y-[20px]">
      <div className="text-white text-[32px]">Analytics</div>

      <div className="grid grid-cols-3 bg-[#191C24] rounded-[5px]">
        <Compo
          Left={<div className="text-white">Calender</div>}
          Content={
            <Calendar
              tileClassName={({ date, view }) => {
                if (
                  view === "month" &&
                  date.getDate() === new Date().getDate() &&
                  date.getMonth() === new Date().getMonth() &&
                  date.getFullYear() === new Date().getFullYear()
                ) {
                  return "today";
                }
              }}
              className="text-[#6C7293]"
              onChange={onChange}
              value={value}
            />
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
                <div className="px-6 py-1 bg-[#9C0EDF] text-white rounded-[5px]">
                  Apply Filters
                </div>
                <div className="px-6 py-1 bg-[#9C0EDF] text-white rounded-[5px]">
                  Clear Filters
                </div>
              </div>
            </div>
          }
        />
      </div>

      <div className="text-white text-[24px]">Single Account Sale</div>

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

      <div className="text-white text-[24px]">Subscription Account Sale</div>

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
    </div>
  );
};
