import { NavLinkProps } from "@/types";
import Link from "next/link";

export default function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}