"use client";
import Image from "next/image";
import Button from "./components/shared/Button";
import { tableData } from "@/constants";
import { nanoid } from "nanoid/non-secure";
import StatusButton from "./components/shared/StausButton";
import { useContext } from "react";
import { MyContext } from "./context/context";
import EditColumn from "./components/EditColumn";
import FilteTable from "./components/FilteTable";

export default function Home() {
  const { isEditOpen, setIsEditOpen, isFilterOpne, setIsFilteOpen } =
    useContext(MyContext);

  return (
    <section className="h-full w-full flex flex-col bg-white rounded-md overflow-hidden">
      <div className="h-14 flexStart px-4 bold-20">Waitlist</div>
      <div className="px-4 py-3 flex justify-between flex-col ">
        <div className="grid grid-cols-3  gap-3  w-full">
          <div className="py-[10px] bold-12 border border-gray-100 rounded-md px-3 flexStart">
            All Waitlists{" "}
            <span className="medium-10 text-gray-400  ml-[6px] pt-[2px]">
              100
            </span>
          </div>
          <div className="py-[10px] bold-12 border border-gray-100 rounded-md px-3 flexStart">
            Newly Added
            <span className="medium-10 text-gray-400 ml-[6px] pt-[2px]">
              50
            </span>
          </div>
          <div className="py-[10px] bold-12 border border-gray-100 rounded-md px-3 flexStart">
            Leads{" "}
            <span className="medium-10 text-gray-400 ml-[6px] pt-[2px]">
              20
            </span>
          </div>
        </div>
        <div className="mt-4 flexBetween ">
          <div onClick={() => setIsFilteOpen((prev: boolean) => !prev)}>
            <Button value="Add Filter" varient="btn-gray" icon="/filter.svg" />
          </div>
          <div className="flexStart">
            <div className="relative">
              <input
                type="text"
                placeholder="Search client"
                className="medium-12 py-1 pl-9 px-2 rounded-md  shadow h-7 outline-none text-gray-300 w-[230px]"
              />
              <Image
                src={"/search.svg"}
                alt="seach"
                width={12}
                height={12}
                className="absolute left-3 bg-white  top-0 bottom-0 my-auto"
              />
            </div>
            <div className="flex gap-4 ml-4">
              <button
                title="refresh"
                className="w-8 h-8 flexCenter hover:rotate-90 transition-all duration-300 "
              >
                <Image
                  src={"/refresh.svg"}
                  alt="refresh"
                  width={16}
                  height={16}
                />
              </button>
              <button
                title="filter"
                onClick={() => setIsEditOpen(!isEditOpen)}
                className="w-8 h-8 flexCenter  hover:scale-95 transition-all duration-300"
              >
                <Image
                  src={"/column.svg"}
                  alt="column"
                  width={16}
                  height={16}
                />
              </button>
              <button className="w-8 h-8 flexCenter  hover:translate-y-[2px] transition-all duration-300">
                <Image
                  title="download"
                  src={"/download.svg"}
                  alt="download"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-3 mx-4 h-full overflow-hidden  relative flex  ">
        {isEditOpen && <EditColumn />}
        {isFilterOpne && <FilteTable />}
        <div className="  overflow-x-auto w-full    rounded-md border-gray-100">
          <table className="table  border border-gray-100 rounded-md">
            {/* head */}
            <thead className="medium-12 text-gray-300 bg-slate-50 ">
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox  w-[14px] h-[14px] rounded-md shadow-sm"
                      width={14}
                      height={14}
                    />
                  </label>
                </th>
                <th>Created On</th>
                <th>Payer</th>
                <th>Status</th>
                <th>Email</th>
                <th>Payer Phone</th>
                <th>Services</th>
                <th>Scheduled</th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap medium-12">
              {tableData.map((item) => (
                <tr key={nanoid()}>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox rounded-[4px] w-[14px] h-[14px]  shadow-sm"
                        width={14}
                        height={14}
                      />
                    </label>
                  </th>
                  <td>
                    <div className="flexStart gap-1  ">
                      <div>{item.created.day} </div>
                      <div className="">{item.created.date}</div>
                      <div>{item.created.time}</div>
                    </div>
                  </td>
                  <td>{item.player}</td>
                  <td>
                    <StatusButton value={item.status} />
                  </td>
                  <td>{item.email}</td>
                  <td>
                    +91 <span>{item.phone}</span>
                  </td>
                  <td>{item.service}</td>
                  <td>
                    {" "}
                    <div className="flexStart gap-1 ">
                      <div>{item.scheduled.day} </div>
                      <div>{item.scheduled.date} </div>
                      <div>{item.scheduled.time}</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
      <footer className="h-14 flexBetween   pl-3 pr-6">
        <div className="flex text-gray-300">
          <h5 className="regular-14 "> Displaying</h5>
          <div className="flex gap-1 px-3">
            <span className="text-gray-400">15</span>
            <Image src={"/updown.svg"} alt="updown" width={16} height={16} />
          </div>
          <div>
            out of <span className="text-gray-800 medium-14">104</span>
          </div>
        </div>
        <div className="flexStart medium-12">
          <div className="h-8 flex">
            <button className="h-7 w-[89px] flexCenter">
              <Image
                src={"/down.svg"}
                alt="previous"
                width={16}
                height={16}
                className="rotate-90 mr-2"
              />
              <span>Previous</span>
            </button>
            <ul className="flexCenter">
              <li className="w-[29px] flexCenter h-full hover:border border-gray-100 cursor-pointer rounded-md">
                1
              </li>
              <li className="w-[29px] flexCenter h-full hover:border border-gray-100 cursor-pointer rounded-md">
                2
              </li>
              <li className="w-[29px] flexCenter h-full hover:border border-gray-100 cursor-pointer rounded-md">
                3
              </li>
            </ul>
            <button className="h-7 w-[89px] flexCenter">
              <span>Next</span>
              <Image
                src={"/down.svg"}
                alt="previous"
                width={16}
                height={16}
                className="-rotate-90 ml-2"
              />
            </button>
          </div>
          <div className="w-12 h-12 rounded-full bg-black"></div>
        </div>
      </footer>
    </section>
  );
}
