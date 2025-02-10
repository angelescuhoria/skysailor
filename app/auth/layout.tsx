import React, { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <div className="background-image bg-[url('/images/default.jpg')]"></div>
      <div className="overlay"></div>
      {children}
    </>
  );
}