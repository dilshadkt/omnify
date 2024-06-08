import { filterDropDown } from "@/constants";
import { nanoid } from "nanoid";
import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerButton from "./shared/DatePicker";
const SheduledDate = () => {
  const [isDropOpen, setIsDropOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState("All time");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  return (
    <section>
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
            className={`absolute z-50 w-full h-[232px] bg-white border border-gray-100 rounded-md shadow-md mt-1 overflow-y-auto`}
          >
            <ul className="w-full  py-[6px] regular-14 ">
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
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            customInput={<DatePickerButton />}
          />
        </div>
        <div className="flex flex-col justify-between">
          <h5>To</h5>
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date)}
            customInput={<DatePickerButton />}
          />
        </div>
      </div>
    </section>
  );
};

export default SheduledDate;
