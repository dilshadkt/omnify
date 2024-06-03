import React, { useRef } from "react";
import Image from "next/image";

const DatePickerButton = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log("object");
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="h-9 w-full border rounded-md border-gray-100 flex items-center px-4"
      >
        <Image
          src={"/formCalender.svg"}
          alt="calendar"
          width={16}
          height={16}
        />
        <span className="ml-2">Pick a date</span>
      </button>
      <input
        type="date"
        ref={inputRef}
        className="hidden"
        onChange={(e) => console.log(e.target.value)} // Add your onChange logic here
      />
    </div>
  );
};

export default DatePickerButton;
