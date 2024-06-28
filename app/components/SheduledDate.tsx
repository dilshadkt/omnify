import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerButton from "./shared/DatePicker";
import DropDown from "./shared/DropDown";
import { filterDropDown } from "@/constants";
const SheduledDate = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  return (
    <section>
      <h5 className="medium-12">Show orders for</h5>
      <DropDown values={filterDropDown} />
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
