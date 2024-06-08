import React from "react";
import Image from "next/image";
import { format } from "date-fns";
const DatePickerButton = ({
  value,
  onClick,
}: {
  value?: any;
  onClick?: any;
}) => {
  const date = format(new Date(), "MM/dd/yyyy");
  return (
    <div>
      <button
        onClick={onClick}
        className="h-9 w-full border rounded-md border-gray-100 flex items-center px-4"
      >
        <Image
          src={"/formCalender.svg"}
          alt="calendar"
          width={16}
          height={16}
        />
        <span className="ml-2">{value === date ? "Pick a date" : value}</span>
      </button>
      <input
        type="date"
        className="hidden"
        onChange={(e) => console.log(e.target.value)} // Add your onChange logic here
      />
    </div>
  );
};

export default DatePickerButton;
