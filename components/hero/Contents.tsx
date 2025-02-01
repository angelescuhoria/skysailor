import React from "react";
import Image from "next/image";
import SearchControls from "./SerachControls/SearchControls";
import Features from "./Features/Features";

export default function Contents() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="h1">
        Be the captain of your adventures with{" "}
        <span className="text-green">Sky Sailor</span>.
      </h1>
      <div>
        <div className="flex items-start">
          <Image
            src="/icons/route.png"
            alt="route icon"
            width={20}
            height={20}
            className="mt-1"
          />
          <h4 className="h4 ml-1">Create a route</h4>
        </div>
        <SearchControls />
      </div>
      <Features />
    </div>
  );
}