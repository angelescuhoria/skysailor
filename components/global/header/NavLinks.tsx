import NavLink from "./NavLink";
import { isDesktop } from "react-device-detect";
import { useState } from "react";
import { CursorProps } from "@/types";
import { motion } from "motion/react";
import { useAuthSession } from "@/contexts/AuthSessionContext";
import LogoutButton from "./LogoutButton";

export default function NavLinks() {
  const [position, setPosition] = useState<CursorProps>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const { session } = useAuthSession();

  return (
    <nav
      className={`w-full flex justify-between ${!isDesktop ? "flex-col gap-3" : "flex-row items-center relative px-2"}`}
      onMouseLeave={() => {
        setPosition((prev) => ({ ...prev, opacity: 0 }));
      }}
    >
      <NavLink
        setPosition={setPosition}
        href="/"
        className={!isDesktop ? "mobile-link" : "link"}
      >
        Home
      </NavLink>
      {session ? (
        <NavLink
          setPosition={setPosition}
          href="/profile"
          className={!isDesktop ? "mobile-link" : "link"}
        >
          My Profile
        </NavLink>
      ) : (
        <NavLink
          setPosition={setPosition}
          href="/auth"
          className={!isDesktop ? "mobile-link" : "link"}
        >
          Authentication
        </NavLink>
      )}
      <NavLink
        setPosition={setPosition}
        href="#"
        className={!isDesktop ? "mobile-link" : "link"}
      >
        Search flights
      </NavLink>
      <NavLink
        setPosition={setPosition}
        href="#"
        className={!isDesktop ? "mobile-link" : "link"}
      >
        Search hotels
      </NavLink>
      <NavLink
        setPosition={setPosition}
        href="#"
        className={!isDesktop ? "mobile-link" : "link"}
      >
        Car hiring
      </NavLink>
      {session && (
        <LogoutButton
          setPosition={setPosition}
          className={
            !isDesktop
              ? "mobile-link"
              : "link bg-gradient-to-br from-green to-dodger_blue from-20% rounded-full py-1"
          }
        >
          Logout
        </LogoutButton>
      )}

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