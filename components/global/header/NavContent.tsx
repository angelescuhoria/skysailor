"use client";

import React from "react";
import { isMobileOnly } from "react-device-detect";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import NavBar from "./NavBar/NavBar";

export default function NavContent() {
  return <>{isMobileOnly ? <HamburgerMenu /> : <NavBar />}</>;
}