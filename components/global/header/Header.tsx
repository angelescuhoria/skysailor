import Link from "next/link";
import Logo from "./Logo";
import NavContent from "./NavContent";

export default function Header() {
  return (
    <header className="top-5 left-0 flex w-full items-center justify-between absolute z-10 px-8">
      <Link href="/" className="relative w-1/2 h-auto">
        <Logo />
      </Link>
      <NavContent />
    </header>
  );
}