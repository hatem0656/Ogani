import {
  BsFillSuitHeartFill,
  BsFillBagCheckFill,
  BsFillPersonFill,
  BsTwitter,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/imgs/logo.webp";
import Link from "next/link";

function NavMenu({ visible }: { visible: boolean }) {
  return (
    <>
      <aside
        className={`absolute top-0 left-0 z-50 bg-white w-[300px] h-screen py-11 px-8 flex flex-col transition-transform ease-in-out duration-500 ${
          visible ? "translate-x-0" : "translate-x-[-300px]"
        }`}
      >
        <div className="mb-3">
          <Image src={logo} alt="Ogani logo" width={120} priority={false} />
        </div>
        <div className="flex items-center mt-5">
          <span className="relative block">
            <BsFillSuitHeartFill className="text-lg text-dark cursor-pointer hover:text-primary mr-3" />
            <h5 className="number">1</h5>
          </span>
          <span className="relative block mx-2">
            <BsFillBagCheckFill className="text-lg text-dark cursor-pointer hover:text-primary mr-3" />
            <h5 className="number">3</h5>
          </span>
          <span className="ml-2 block text-lightGray text-mds">
            item:
            <strong className="text-lightDark tracking-wider ml-1">
              $150.00
            </strong>
          </span>
        </div>
        <div className="flex items-center mt-6 cursor-pointer ">
          <BsFillPersonFill className=" text-dark hover:text-primary  " />
          <span className="text-mds ml-2 block text-lightDark hover:text-primary ">
            Login
          </span>
        </div>
        <ul className="flex flex-col mt-5">
          <li className=" border-b border-gray-300 py-2 text-lightDark  hover:text-primary cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="mt-4 border-b py-2 border-gray-300 text-lightDark  hover:text-primary cursor-pointer">
            <Link href="/">Shop</Link>
          </li>
          <li className="mt-4 border-b py-2 border-gray-300 text-lightDark  hover:text-primary cursor-pointer">
            <Link href="/">Blog</Link>
          </li>
          <li className="mt-4 border-b py-2 border-gray-300 text-lightDark  hover:text-primary cursor-pointer">
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center mt-7">
          <FaFacebookF className="text-sm text-lightDark hover:text-primary  cursor-pointer" />
          <BsTwitter className="text-sm text-lightDark hover:text-primary ml-6 cursor-pointer" />
          <FaLinkedinIn className="text-sm text-lightDark hover:text-primary ml-6 cursor-pointer" />
          <FaPinterestP className="text-sm text-lightDark hover:text-primary ml-6 cursor-pointer" />
        </div>
        <div className="flex items-center mt-7">
          <BsFillEnvelopeFill className="text-sm text-lightDark" />
          <h5 className="ml-2 text-mds text-lightDark leading-4">
            hello@colorlib.com
          </h5>
        </div>
        <p className=" text-mds text-lightDark mt-3">
          Free Shipping for all Order of $99
        </p>
      </aside>
    </>
  );
}

export default NavMenu;
