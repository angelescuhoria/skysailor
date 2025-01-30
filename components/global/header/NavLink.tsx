import { CursorProps, NavLinkProps } from "@/types";
import Link from "next/link";
import { Dispatch, RefObject, SetStateAction, useRef } from "react";

const handleMouseLeave = (
  ref: RefObject<HTMLAnchorElement>,
  setPosition?: Dispatch<SetStateAction<CursorProps>>,
) => {
  if (!ref.current) return;
  const { width } = ref.current.getBoundingClientRect();
  if (setPosition) {
    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft,
    });
  }
};

export default function NavLink({
  href,
  children,
  className,
  setPosition,
}: NavLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <Link
      href={href}
      className={className}
      ref={ref}
      onMouseEnter={() => handleMouseLeave(ref, setPosition)}
    >
      {children}
    </Link>
  );
}