"use client";
import Image from "next/image";
import React, { useState } from "react";
import SearchBox from "./shared/SearchBox";
import { useForm } from "react-hook-form";

const Service = () => {
  const { register, watch } = useForm({
    defaultValues: {
      type: "name",
    },
  });

  return (
    <section>
      <div className="flexBetween w-5/6 text-gray-400">
        <div className="flexStart">
          <input
            type="radio"
            {...register("type")}
            className=" accent-black"
            value={"name"}
          />
          <h5 className="regular-14 ml-2">Search by name</h5>
        </div>
        <div className="flexStart">
          <input
            type="radio"
            {...register("type")}
            className=" accent-black"
            value={"tag"}
          />
          <h5 className="regular-14 ml-2">Search by tags</h5>
        </div>
      </div>
      {watch().type === "name" ? (
        <SearchBox placeholder={"Search service name"} />
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Service;
