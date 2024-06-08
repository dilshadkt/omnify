import Image from "next/image";
import React from "react";

const SearchBox = ({ placeholder }: { placeholder?: string }) => {
  return (
    <div className="mt-5">
      <div className="relative">
        <Image
          src={"/search.svg"}
          alt="search"
          width={16}
          height={16}
          className="absolute top-0 bottom-0 my-auto  left-3  "
        />
        <input
          type="text"
          className="w-full rounded-md p-1 border bg-gray-50 border-gray-100 placeholder-gray-300 outline-none text-gray-800 regular-14 pl-9"
          //   placeholder="Search Payer or attendee name"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default SearchBox;
