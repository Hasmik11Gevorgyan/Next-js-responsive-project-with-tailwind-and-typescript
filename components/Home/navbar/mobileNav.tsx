import React from "react";
import { navLinks } from "../../../constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 w-full h-screen bg-black opacity-70 z-[1049] transition-all duration-500 ${
          showNav ? "" : "hidden"
        }`}
        onClick={closeNav}
      ></div>

      {/* NavLinks */}
      <div
        className={`fixed top-0 left-0 h-full ${navOpen} transition-transform duration-500 w-[80%] sm:w-[60%] bg-blue-900 flex flex-col justify-center space-y-6 z-[1050] text-white`}
      >
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.id}
            className="text-2xl font-medium hover:text-rose-500 transition-all cursor-pointer duration-200"
          >
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-8 h-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
