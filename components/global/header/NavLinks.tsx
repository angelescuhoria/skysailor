import NavLink from "./NavLink";
import { isDesktop } from "react-device-detect";
import { useState } from "react";
import { CursorProps } from "@/types";
import { motion } from "framer-motion";

export default function NavLinks() {
  const [position, setPosition] = useState<CursorProps>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <nav
      className={`w-full flex justify-between ${!isDesktop ? "flex-col gap-5" : "flex-row items-center gap-2 relative px-2"}`}
      onMouseLeave={() => {
        setPosition((prev) => ({ ...prev, opacity: 0 }));
      }}
    >
      <NavLink
        setPosition={setPosition}
        href="/public"
        className={!isDesktop ? "mobile-link" : "link"}
      >
        Home
      </NavLink>
      <NavLink
        setPosition={setPosition}
        href="/login"
        className={!isDesktop ? "mobile-link" : "link"}
      >
        Login
      </NavLink>
      <NavLink
        setPosition={setPosition}
        href="/signup"
        className={!isDesktop ? "mobile-link" : "link"}
      >
        Sign up
      </NavLink>
      <NavLink
        setPosition={setPosition}
        href="#"
        className={!isDesktop ? "mobile-link" : "link"}
      >
        Search flights
      </NavLink>

      {isDesktop && (
        <Cursor
          left={position.left}
          width={position.width}
          opacity={position.opacity}
        />
      )}
    </nav>
  );
}

const Cursor = ({ left, width, opacity }: CursorProps) => {
  return (
    <motion.div
      className="absolute z-0 h-8 rounded-full bg-gradient-to-br from-green to-dodger_blue from-20%"
      animate={{ left, width, opacity }}
    ></motion.div>
  );
};