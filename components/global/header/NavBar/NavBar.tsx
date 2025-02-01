import React from "react";
import NavLinks from "../NavLinks";

export default function NavBar() {
  return (
    <div className="w-3/5 h-auto rounded-full bg-raisin_black bg-opacity-50 py-3 text-white absolute left-1/2 -translate-x-1/2 lg:w-1/2  xl:w-2/5 2xl:w-1/3 3xl:w-[30%]">
      <NavLinks />
    </div>
  );
}