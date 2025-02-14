import React from "react";
import Hamburger from "./Hamburger";
import NavMenu from "./NavMenu";
import { NavMenuProvider } from "@/contexts/MobileNavMenuContext";

export default function HamburgerMenu() {
  return (
    <NavMenuProvider>
      <Hamburger />
      <NavMenu />
    </NavMenuProvider>
  );
}