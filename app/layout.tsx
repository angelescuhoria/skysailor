import { inter, roboto } from "@/assets/fonts/fonts";
import { Header, QueryProvider } from "@/components";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
      <body className="w-screen min-h-screen relative overflow-x-hidden px-4 md:px-8 lg:px-16 2xl:px-32">
        <div className="background-image bg-[url('/images/default.jpg')]"></div>
        <div className="overlay"></div>
        <Header />
        <QueryProvider>
          {children} <ReactQueryDevtools initialIsOpen={false} />
        </QueryProvider>
      </body>
    </html>
  );
}