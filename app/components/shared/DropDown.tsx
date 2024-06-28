import { filterDropDown } from "@/constants";
import { nanoid } from "nanoid";
import Image from "next/image";
import React, { useState } from "react";

const DropDown = ({ values }: { values?: string[] }) => {
  const [isDropOpen, setIsDropOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState("All time");
  const [dropDown, setDropDown] = useState<string[]>(values ? values : []);

  return (
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
          className={`absolute z-50 w-full max-h-[232px] h-fit bg-white border border-gray-100 rounded-md shadow-md mt-1 overflow-y-auto`}
        >
          <ul className="w-full  py-[6px] regular-14 ">
            {dropDown.map((item) => (
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
  );
};

export default DropDown;
