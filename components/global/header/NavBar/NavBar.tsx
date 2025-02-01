import React from "react";
import NavLinks from "../NavLinks";

export default function NavBar() {
  return (
    <div className="w-3/5 h-auto rounded-full bg-raisin_black bg-opacity-50 py-3 text-white absolute top-16 left-1/2 -translate-x-1/2 lg:w-1/2 xl:w-2/5 xl:top-1 2xl:w-1/2 3xl:w-1/4">
      <NavLinks />
    </div>
  );
}