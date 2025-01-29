"use client";

import NavLink from "./NavLink";
import { isMobileOnly } from "react-device-detect";

export default function NavLinks() {
  return (
    <nav
      className={`w-full flex justify-between ${isMobileOnly ? "flex-col gap-5" : "flex-row gap-2"}`}
    >
      <NavLink
        href="/public"
        className={isMobileOnly ? "mobile-link" : "link ml-12"}
      >
        Home
      </NavLink>
      <NavLink href="/login" className={isMobileOnly ? "mobile-link" : "link"}>
        Login
      </NavLink>
      <NavLink href="/signup" className={isMobileOnly ? "mobile-link" : "link"}>
        Sign up
      </NavLink>
      <NavLink href="#" className={isMobileOnly ? "mobile-link" : "link mr-12"}>
        Placeholder
      </NavLink>
    </nav>
  );
}