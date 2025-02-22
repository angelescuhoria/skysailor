import React from "react";
import NavLinks from "../NavLinks";

export default function NavBar() {
  return (
    <div
      className="w-auto h-auto rounded-full bg-raisin_black bg-opacity-50 py-3 text-white absolute left-1/2 -translate-x-1/2 lg:mt-32
    2xl:mt-0"
    >
      <NavLinks />
    </div>
  );
}