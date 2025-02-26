import Link from "next/link";
import Logo from "./Logo";
import NavContent from "./NavContent";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between pt-5">
      <Link href="/" className="relative w-fit h-auto">
        <Logo />
      </Link>
      <NavContent />
    </header>
  );
}