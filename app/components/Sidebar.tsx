"use client";
import { sideBar } from "@/constants";
import { nanoid } from "nanoid";
import Image from "next/image";
import React, { useState } from "react";

const Sidebar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <section
      className={`${
        sideBarOpen ? `w-[64px] ` : `w-[228px]`
      } flex flex-col h-full bg-blue-50 p-2  transition-all duration-300`}
    >
      <div
        className={`py-[9px] ${
          sideBarOpen ? `pl-0` : `pl-2`
        } mt-1  flexBetween`}
      >
        <div className={`${sideBarOpen ? `flexCenter` : `flexStart`} w-full`}>
          <Image
            onClick={() => setSideBarOpen(false)}
            src={"/logo.svg"}
            alt="logo"
            width={22}
            height={22}
            className="cursor-pointer"
          />
          <h1 className={`${sideBarOpen && `hidden`} bold-18 ml-2`}>
            Front·Desk
          </h1>
        </div>
        <Image
          onClick={() => setSideBarOpen((prev) => !prev)}
          src={"/filterShade.svg"}
          alt="filter"
          width={16}
          height={16}
          className={`${sideBarOpen && `hidden`} cursor-pointer `}
        />
      </div>
      <div className="flexBetween h-full flex-col py-2 mt-3">
        <div className="w-full flex flex-col  rounded-lg">
          <button
            className={` medium-12 relative w-full h-9 rounded-md shadow-sm py-2 pr-3 pl-2 bg-white  ${
              sideBarOpen ? `flexCenter` : `flexBetween`
            }`}
          >
            <span className={`${sideBarOpen && `hidden`}`}> Location Name</span>
            <Image
              src={"/arrow.svg"}
              alt="location name"
              width={16}
              height={16}
            />
          </button>
          <div
            className={`bg-slate-100 flex justify-center gap-1  mx-[9px]  rounded-b-md shadow-sm ${
              sideBarOpen ? `h-7` : `h-12`
            }  pb-[6px]`}
          >
            {sideBarOpen ? (
              <Image src={"/glob.svg"} alt="glob" width={13} height={13} />
            ) : (
              <div className="flex flex-col">
                <div className="flexStart">
                  <h5 className="bold-16">08:30 AM </h5>
                  <span className="medium-14 ml-2">Tue 20 Jan</span>
                </div>
                <div className="flexStart ">
                  <Image src={"/glob.svg"} alt="glob" width={13} height={13} />
                  <span className="medium-10 pt-[2px] ml-1">UTC: +5 hours</span>
                </div>
              </div>
            )}

            {!sideBarOpen && (
              <div className="flex flex-col justify-end">
                <Image
                  src={"/down.svg"}
                  alt="down"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                />
              </div>
            )}
          </div>
          <div className="mt-6">
            <ul className="medium-12">
              {sideBar.map((item) => (
                <li
                  key={nanoid()}
                  className={`h-8 medium-12 ${
                    sideBarOpen ? `flexCenter` : `flexStart`
                  } hover:bg-white rounded-md cursor-pointer hover:shadow-md  px-2`}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={16}
                    height={16}
                  />
                  {!sideBarOpen && <span className="ml-2">{item.title}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div
            className={`"\h-8 medium-12 w-full ${
              sideBarOpen ? `flexCenter` : `flexBetween`
            } hover:bg-white rounded-md cursor-pointer hover:shadow-md  p-2`}
          >
            <div className="flexStart">
              <Image
                src={"/dashboard.svg"}
                alt={"dashboard"}
                width={16}
                height={16}
              />
              {!sideBarOpen && <span className="ml-2">Dashboard</span>}
            </div>
            {!sideBarOpen && (
              <Image src={"/share.svg"} alt="share" width={16} height={16} />
            )}
          </div>
          <div className="mt-2">
            <div className="mt-2 ">
              <div
                className={`w-full bg-white rounded-md shadow-md  ${
                  sideBarOpen ? `flexCenter h-[46px]` : `flexBetween h-[60px]`
                } px-2`}
              >
                <div className="flexStart">
                  <div className="w-6 h-6 rounded-full flexCenter overflow-hidden">
                    <Image
                      src={"/profile.png"}
                      alt="profile"
                      width={24}
                      height={24}
                    />
                  </div>
                  {!sideBarOpen && (
                    <div className="flex flex-col ml-2">
                      <h5 className="medium-12 text-[#0F172A]">Admin name</h5>
                      <span className="regular-12 text-gray-300">
                        {" "}
                        adminname@mail.com
                      </span>
                    </div>
                  )}
                </div>
                {!sideBarOpen && (
                  <Image
                    src={"/down.svg"}
                    alt="down"
                    width={16}
                    height={16}
                    className="cursor-pointer"
                  />
                )}
              </div>
              <div className="py-[10px] px-2 flexCenter">
                <div
                  className={`${
                    sideBarOpen ? `flexCenter` : ` flexStart`
                  } w-full`}
                >
                  <Image
                    src={"/help.svg"}
                    alt="help"
                    width={16}
                    height={16}
                    className="cursor-pointer"
                  />
                  {!sideBarOpen && (
                    <div className="flex flex-col ml-2 ">
                      <h5 className="regular-14">Help center</h5>
                      <span className="regular-10 text-gray-300">
                        @2024 Omnify.Inc.{" "}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
