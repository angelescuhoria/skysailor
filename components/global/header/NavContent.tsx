"use client";

import React from "react";
import { isMobileOnly } from "react-device-detect";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

export default function NavContent() {
  return <>{isMobileOnly ? <HamburgerMenu /> : <></>}</>;
}