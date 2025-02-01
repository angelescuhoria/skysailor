import Link from "next/link";
import Logo from "./Logo";
import NavContent from "./NavContent";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between mt-5">
      <Link href="/" className="relative w-1/2 h-auto">
        <Logo />
      </Link>
      <NavContent />
    </header>
  );
}