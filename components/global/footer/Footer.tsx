import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-dark w-full h-auto flex flex-col items-center rounded-t-xl gap-2 p-4 text-white xl:flex-row xl:justify-center xl:gap-4">
      <p>&#169; {year} Horia Angelescu</p>
      <Link href="#">Terms and Conditions</Link>
      <Link href="#">Privacy</Link>
    </div>
  );
}