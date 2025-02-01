"use client";

import React from "react";
import { isDesktop } from "react-device-detect";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import NavBar from "./NavBar/NavBar";

export default function NavContent() {
  return <>{!isDesktop ? <HamburgerMenu /> : <NavBar />}</>;
}