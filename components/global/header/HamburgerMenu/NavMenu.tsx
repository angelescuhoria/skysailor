import React from "react";
import { useNavMenu } from "@/contexts/MobileNavMenuContext";
import Hamburger from "./Hamburger";
import NavLinks from "../NavLinks";

export default function NavMenu() {
  const { isOpen } = useNavMenu();

  return (
    <div
      className={`fixed right-0 top-0 z-[60] h-screen bg-hamburger_menu p-8 pt-7 transition-all duration-700 ease-out ${
        isOpen
          ? "w-2/3 opacity-100 visible md:w-1/2"
          : "w-0 opacity-0 invisible"
      }`}
    >
      <div className="w-full h-full flex flex-col gap-28">
        <div className="flex justify-end items-start">
          <Hamburger />
        </div>
        <NavLinks />
      </div>
    </div>
  );
}