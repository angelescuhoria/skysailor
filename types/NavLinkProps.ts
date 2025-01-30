import { Dispatch, ReactNode, SetStateAction } from "react";
import { CursorProps } from "@/types/index";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  setPosition?: Dispatch<SetStateAction<CursorProps>>;
};

export default NavLinkProps;