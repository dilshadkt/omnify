"use client";
import { filterboxNav } from "@/constants";
import { nanoid } from "nanoid";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./shared/Button";
import SheduledDate from "./SheduledDate";
import People from "./People";
import Service from "./Service";

const FilteTable = ({ setfilterOpen }: { setfilterOpen: any }) => {
  const [selected, setSelected] = useState("Scheduled Date");
  const filterTableRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleFilterTalbe = (event: MouseEvent) => {
      if (
        filterTableRef.current &&
        !filterTableRef.current.contains(event.target as Node)
      ) {
        setfilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleFilterTalbe);
    return () => {
      document.removeEventListener("mousedown", handleFilterTalbe);
    };
  });

  return (
    <section
      ref={filterTableRef}
      className="absolute z-50 border top-28 border-gray-100 rounded-md w-[672px]  bg-red-200 shadow-lg flex flex-col"
    >
      <div className="h-[348px] flex ">
        <div className="max-w-[230px] border-r border-gray-100  w-full bg-blue-50 h-full p-2">
          <ul className="w-full ">
            {filterboxNav.map((item) => (
              <li
                onClick={() => setSelected(item.title)}
                key={nanoid()}
                className={` ${
                  selected.includes(item.title) && `bg-gray-100`
                }  medium-14 h-9 cursor-pointer  flexStart px-2 my-1 rounded-md hover:bg-gray-100 w-full`}
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
          {/* HERE THE CONTENT WILL CHANGE BASEED ON THE SELECTION  */}
          {selected === "Scheduled Date" ? (
            <SheduledDate />
          ) : selected === "People" ? (
            <People />
          ) : (
            <Service />
          )}
        </div>
      </div>
      <div className="h-[52px] border-t border-gray-100 bg-white flexEnd py-2">
        <div className="h-full flexBetween medium-14 gap-4 mr-4">
          <Button value="Reset Default" varient="btn-gray" />
          <Button
            value="Apply"
            varient="btn-black"
            fn={() => {
              setfilterOpen(false);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FilteTable;
