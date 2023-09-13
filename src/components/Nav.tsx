"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import { LuMenu } from "react-icons/lu";
import { BsFillSuitHeartFill, BsFillBagCheckFill } from "react-icons/bs";
import NavMenu from "./NavMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/helpers/constants";

function Nav() {
  let [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="md:container flex flex-wrap justify-between items-center py-5 px-7">
        <div>
          <Image src={logo} alt="Ogani logo" width={120} priority={false} />
        </div>

        <nav className="lg:flex items-center hidden justify-self-center xl:gap-24 gap-20  ">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                className={`${
                  isActive ? "text-primary" : ""
                } text-sm font-medium uppercase hover:text-primary cursor-pointer`}
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <LuMenu
          className="text-3xl text-dark cursor-pointer lg:hidden block"
          onClick={() => setShowMenu(true)}
        />

        <div className="flex items-center justify-center lg:w-auto w-full lg:mt-0 mt-4 lg:mx-0 mx-auto ">
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
      </div>

      {/* --------------------------Nav Mobile Menu------------------------------ */}
      {showMenu && (
        <div
          className="absolute left-0 top-0 w-screen h-screen bg-black opacity-50"
          onClick={() => setShowMenu(false)}
        ></div>
      )}
      <NavMenu visible={showMenu} />
    </>
  );
}

export default Nav;
