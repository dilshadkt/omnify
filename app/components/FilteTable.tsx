"use client";
import { filterboxNav, filterDropDown } from "@/constants";
import { nanoid } from "nanoid";
import Image from "next/image";
import React, { useState } from "react";
import DatePickerButton from "./shared/DatePicker";

const FilteTable = () => {
  const [isDropOpen, setIsDropOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState("All time");
  return (
    <section className="absolute z-50 border border-gray-100 rounded-md w-[672px]  bg-red-200 shadow-lg flex flex-col">
      <div className="h-[348px] flex ">
        <div className="max-w-[230px] border-r border-gray-100  w-full bg-blue-50 h-full p-2">
          <ul className="w-full ">
            {filterboxNav.map((item) => (
              <li
                key={nanoid()}
                className="medium-14 h-9 cursor-pointer  flexStart px-2 rounded-md hover:bg-gray-100 w-full"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={16}
                  height={16}
                />
                <h5 className="ml-2 whitespace-nowrap">{item.title}</h5>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1  bg-white  p-4">
          <div>
            <h5 className="medium-12">Show orders for</h5>
            <div className="relative">
              <button
                onClick={() => setIsDropOpen(!isDropOpen)}
                className="px-3 py-2 flexBetween w-full border border-gray-100 rounded-md mt-1 focus:border-gray-400 focus:border-2"
              >
                <h5 className="regular-14">{filter}</h5>
                <Image src={"/down.svg"} alt="down" width={20} height={20} />
              </button>
              {isDropOpen && (
                <div
                  className={`absolute w-full h-[232px] bg-white border border-gray-100 rounded-md shadow-md mt-1 overflow-y-auto`}
                >
                  <ul className="w-full  py-[6px] regular-14">
                    {filterDropDown.map((item) => (
                      <li
                        onClick={() => {
                          setFilter(item);
                          setIsDropOpen(false);
                        }}
                        key={nanoid()}
                        className="h-8 flexStart cursor-pointer hover:bg-gray-100 px-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 h-[62px] gap-[19px] mt-5 medium-12">
              <div className="flex flex-col justify-between">
                <h5>From</h5>
                <DatePickerButton />
              </div>
              <div className="flex flex-col justify-between">
                <h5>From</h5>
                <button className="h-9 w-full border rounded-md border-gray-100 flexStart px-4">
                  <Image
                    src={"/formCalender.svg"}
                    alt="calender"
                    width={16}
                    height={16}
                  />{" "}
                  <span className="ml-2"> Pick a date</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[52px] border-t border-gray-100 bg-white flex">gdg</div>
    </section>
  );
};

export default FilteTable;
