import Image from "next/image";
import React from "react";

const People = () => {
  return (
    <section>
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
          placeholder="Search Payer or attendee name"
        />
      </div>
      <div className=" w-full mt-3 ml-1">
        <h5 className="regular-12 text-gray-800">
          Showing 2 results matching ‘Al’
        </h5>
        <div className="mt-3"></div>
      </div>
    </section>
  );
};

export default People;
