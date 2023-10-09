"use client";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { BiChevronDown } from "react-icons/bi";
import { departments } from "@/helpers/constants";
import { useState } from "react";
function Departments() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="lg:w-[23%] w-full relative ">
      <div className="w-full flex items-center px-9 lg:px-3 py-[0.8rem] text-white bg-primary ">
        <LuMenu className="text-lg  mr-3" />
        <h3 className="font-bold ">All Departments</h3>
        <BiChevronDown
          className="text-xl ml-auto cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      <ul
        className={`w-full lg:absolute left-0 top-[50px] flex flex-col px-10 shadow-md bg-white border-gray-200 dropdown ${
          showMenu ? "active" : ""
        }`}
      >
        {departments.map((department) => {
          return (
            <li
              key={department}
              className="w-fit py-3 font-light text-lightDark"
            >
              <Link href={"/" + department}>{department} </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Departments;
