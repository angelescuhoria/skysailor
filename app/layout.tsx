import { inter, roboto } from "@/assets/fonts/fonts";
import { Footer, Header, QueryProvider } from "@/components";
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
      suppressHydrationWarning={true}
      className={`${inter.variable} ${roboto.variable}`}
    >
      <body className="w-screen relative overflow-x-hidden min-h-screen flex flex-col gap-14 px-4 md:px-8 lg:px-16 2xl:px-32 lg:gap-28">
        <div className="background-image bg-[url('/images/default.jpg')]"></div>
        <div className="overlay"></div>
        <Header />
        <QueryProvider>
          <main className="mb-24 lg:mb-0">
            {children} <ReactQueryDevtools initialIsOpen={false} />
          </main>
        </QueryProvider>
        <footer className="absolute bottom-0 left-0 w-full px-4 md:px-8 lg:px-16 2xl:px-32">
          <Footer />
        </footer>
      </body>
    </html>
  );
}