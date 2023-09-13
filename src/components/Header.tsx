import {
  BsFillPersonFill,
  BsTwitter,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className="lg:block hidden w-full py-4 bg-sec">
        <div className="md:container flex items-center px-7">
          <div className="flex items-center ">
            <BsFillEnvelopeFill className="text-sm text-lightDark" />
            <h5 className="ml-2 text-sm font-light leading-2">
              hello@colorlib.com
            </h5>
          </div>

          <p className=" text-xs font-light ml-5 pl-5 border-l border-slate-300">
            Free Shipping for all Order of $99
          </p>

          <div className="flex items-center ml-auto mr-5 pr-5 border-r border-slate-300 ">
            <FaFacebookF className="text-xs text-lightDark hover:text-primary  cursor-pointer" />
            <BsTwitter className="text-xs text-lightDark hover:text-primary ml-6 cursor-pointer" />
            <FaLinkedinIn className="text-xs text-lightDark hover:text-primary ml-6 cursor-pointer" />
            <FaPinterestP className="text-xs text-lightDark hover:text-primary ml-6 cursor-pointer" />
          </div>

          <div className="flex items-center ml-3 cursor-pointer ">
            <BsFillPersonFill className=" text-dark hover:text-primary  " />
            <span className="text-mds ml-2 block text-lightDark hover:text-primary ">
              Login
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
