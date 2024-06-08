"use client";
import { tableData } from "@/constants";
import { nanoid } from "nanoid";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MyContext } from "../context/context";

const People = () => {
  const [filteredPeople, setFilteredPeople] = useState(tableData);
  const { register, watch } = useForm();
  const { selected, setSelected } = useContext(MyContext);
  useEffect(() => {
    if (watch().search === "") {
      let filtered = tableData.filter((people) =>
        selected?.includes(people.player)
      );
      setFilteredPeople(filtered);
    } else {
      let filtered = tableData.filter((item) =>
        item.player.toLowerCase().includes(watch().search.toLowerCase())
      );
      filtered.sort((a, b) => {
        if (a.player < b.player) {
          return -1;
        }
        if (a.player > b.player) {
          return 1;
        }
        return 0;
      });

      setFilteredPeople(filtered);
    }
  }, [watch().search]);

  const addToSelected = (player: string) => {
    setSelected((prev: string[]) => [...prev, player]);
  };
  return (
    <section className="flex flex-col overflow-hidden  h-full">
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
          {...register("search")}
          className="w-full rounded-md p-1 border bg-gray-50 border-gray-100 placeholder-gray-300 outline-none text-gray-800 regular-14 pl-9"
          placeholder="Search Payer or attendee name"
        />
      </div>
      <div className=" w-full mt-3 ml-1 h-full  flex flex-col  ">
        {watch().search !== "" && (
          <h5 className="regular-12 text-gray-800">
            Showing <span>{filteredPeople.length}</span> results matching{" "}
            <span>'{watch().search}'</span>
          </h5>
        )}
        <div className="mt-3 h-full  overflow-y-auto">
          <ul className=" overflow-hidden bg--300">
            {filteredPeople.slice(0, 10).map((people) => (
              <li key={nanoid()} className="flexStart gap-2 my-2">
                <label>
                  <input
                    onChange={() => addToSelected(people.player)}
                    type="checkbox"
                    className="checkbox rounded-[4px] w-[14px] h-[14px]  shadow-sm"
                    width={14}
                    height={14}
                    checked={selected?.includes(people.player)}
                  />
                </label>
                <h5 className="regular-14 ">{people.player}</h5>
                <span className="medium-10 bg-gray-50 rounded-sm  px-2 py-[2px]">
                  People
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default People;
