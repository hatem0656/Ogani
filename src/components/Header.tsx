import Image from "next/image";
import logo from "../assets/logo.png";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <div className="lg:block hidden w-full py-5 bg-sec"></div>
      <div className="md:container flex flex-wrap justify-between items-center py-5 px-7">
        <div>
          <Image src={logo} alt="Ogani logo" width={120} priority={false} />
        </div>
        <Nav />
      </div>
    </>
  );
}

export default Header;
