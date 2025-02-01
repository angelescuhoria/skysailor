import { inter, roboto } from "@/assets/fonts/fonts";
import { Header } from "@/components";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sky Sailor",
  description: "Searching and purchasing flying tickets to any country",
};

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${roboto.variable}`}
    >
      <body className="w-screen px-4 relative">
        <div className="background-image bg-[url('/images/default.jpg')]"></div>
        <div className="overlay"></div>
        <div className="h-auto w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}