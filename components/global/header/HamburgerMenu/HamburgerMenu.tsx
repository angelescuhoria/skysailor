import React from "react";
import Hamburger from "./Hamburger";
import NavMenu from "./NavMenu";
import { NavMenuProvider } from "@/app/contexts/MobileNavMenuContext";

export default function HamburgerMenu() {
  return (
    <NavMenuProvider>
      <Hamburger />
      <NavMenu />
    </NavMenuProvider>
  );
}