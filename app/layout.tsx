import { inter, roboto } from "@/assets/fonts/fonts";
import { Header } from "@/components";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReactNode } from "react";
import Image from "next/image";

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
      <body className="w-screen px-8">
        <div className="background-image">
          <Image
            src="/images/default.jpg"
            alt="Default background image"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="overlay"></div>
        <div className="h-auto w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}