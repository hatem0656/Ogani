import Departments from "./Departments";
import Search from "./Search";
import { BiSolidPhone } from "react-icons/bi";

function FunctionBar() {
  return (
    <div className="md:container px-7 flex flex-wrap ">
      <Departments />
      <Search />

      <div className="lg:mt-0 mt-5 flex gap-4">
        <span className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-sec  ">
          <BiSolidPhone className="text-primary text-lg" />
        </span>
        <div className="flex flex-col ">
          <span className="block font-bold ">+65 11.188.888</span>
          <span className="block text-mds text-gray-500">
            support 24/7 time
          </span>
        </div>
      </div>
    </div>
  );
}

export default FunctionBar;
