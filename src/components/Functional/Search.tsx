import { BiChevronDown } from "react-icons/bi";

function Search() {
  return (
    <div className="xl:w-[48%] lg:w-1/2 md:w-2/3 h-fit w-full border border-gray-200 flex lg:ml-6 mr-auto items-center px-3 py-[0.8rem] lg:mt-0 mt-5 relative  ">
      <h2 className="md:flex hidden text-base items-center border-r border-gray-300 ">
        <span className="block font-semibold mr-2 ">All Departments</span>
        <BiChevronDown className="text-lg cursor-pointer mr-2 " />
      </h2>
      <input
        type="text"
        placeholder="What do u need?"
        className="px-3 md:w-3/5 w-full outline-none text-gray-400  font-extralight "
      />
      <button className="absolute right-0 bottom-0 h-full py-3 px-6 text-[0.85rem] font-semibold uppercase text-white bg-primary ">
        search
      </button>
    </div>
  );
}

export default Search;
