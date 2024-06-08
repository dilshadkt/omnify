"use client";
import React from "react";
import Button from "./shared/Button";
import { editbox, editboxDefault } from "@/constants";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const EditColumn = () => {
  const { register } = useForm({
    defaultValues: editboxDefault,
  });

  return (
    <section className="w-[320px] h-[472px] shadow-lg bg-white top-28 right-0 z-50 flex flex-col  border border-gray-100 rounded-md p-4 absolute">
      <div>
        <h4 className="medium-16 text-black">Edit Columns</h4>
        <h5 className="regular-14 text-gray-400 mt-2">
          Select the columns to rearrange
        </h5>
      </div>
      <form className="w-full h-full mt-4 overflow-y-auto ">
        <ul>
          {editbox.map((filter) => (
            <li key={nanoid()} className="h-9 w-full flexBetween mb-3">
              <label>
                <input
                  {...register(`${filter.value as EditboxKey}`)}
                  type="checkbox"
                  className="checkbox rounded-[4px] w-[14px] h-[14px]  shadow-sm"
                  width={14}
                  height={14}
                />
              </label>
              <div className="w-full ml-2 text-gray-400 h-full border flexStart px-[6px] medium-14 rounded-md border-gray-100">
                {filter.title}
              </div>
            </li>
          ))}
        </ul>
      </form>
      <div className="grid grid-cols-2 gap-3 pt-4 ">
        <Button value="Reset to Default" varient="btn-white" />
        <Button value="Apply" varient="btn-black" />
      </div>
    </section>
  );
};

export default EditColumn;
