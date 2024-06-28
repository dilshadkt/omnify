"use client";
import Image from "next/image";
import React, { useState } from "react";
import SearchBox from "./shared/SearchBox";
import { useForm } from "react-hook-form";
import DropDown from "./shared/DropDown";
import { tableData } from "@/constants";

const Service = () => {
  const { register, watch } = useForm({
    defaultValues: {
      type: "name",
    },
  });
  const services = new Set(tableData.map((item) => item.service));
  const servicesArray = Array.from(services);
  const types = new Set(tableData.map((item) => item.status));
  const typeArray = Array.from(types);

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
        <div className="flex flex-col gap-5 mt-5">
          <div>
            <h5 className="medium-12 mb-1">Service type</h5>
            <DropDown values={servicesArray} />
          </div>
          <div>
            <h5 className="medium-12 mb-1">Service type</h5>
            <DropDown values={typeArray} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Service;
