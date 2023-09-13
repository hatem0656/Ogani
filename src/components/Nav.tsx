"use client";
import { LuMenu } from "react-icons/lu";
import NavMenu from "./NavMenu";
import { useState } from "react";

function Nav() {
  let [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav>
        <LuMenu
          className="text-3xl text-dark cursor-pointer lg:hidden block"
          onClick={() => setShowMenu(true)}
        />

        {/* {showMenu && (
          <>
            <div
              className="absolute left-0 top-0 w-screen h-screen bg-black opacity-50"
              onClick={() => setShowMenu(false)}
            ></div>
            <NavMenu  />
          </>
        )} */}
        {showMenu && (
          <div
            className="absolute left-0 top-0 w-screen h-screen bg-black opacity-50"
            onClick={() => setShowMenu(false)}
          ></div>
        )}

        <NavMenu visible={showMenu} />
      </nav>
    </>
  );
}

export default Nav;
