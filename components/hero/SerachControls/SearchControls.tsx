import React from "react";
import Image from "next/image";
import SwitchButton from "./SwitchButton";

export default function SearchControls() {
  return (
    <div className="main-card flex flex-col w-full mt-1 relative">
      <button className="py-2 rounded-t-xl">
        <div className="search-controls-div">
          <Image
            src="/icons/origin.png"
            alt="origin icon"
            width={16}
            height={16}
            className="mt-1"
          />
          <p className="search-controls-p">Choose a departure location</p>
        </div>
      </button>
      <SwitchButton />
      <button className="py-2 border-y-[1px] border-green">
        <div className="search-controls-div">
          <Image
            src="/icons/destination.png"
            alt="destination icon"
            width={16}
            height={16}
            className="mt-1"
          />
          <p className="search-controls-p">Choose destination</p>
        </div>
      </button>
      <div className="flex flex-row w-full">
        <button className="py-2 border-r-[1px] border-green w-1/2">
          <div className="search-controls-div">
            <Image
              src="/icons/calendar.png"
              alt="calendar icon"
              width={16}
              height={16}
              className="mt-1"
            />
            <p className="search-controls-p">Choose dates</p>
          </div>
        </button>
        <button className="py-2 border-green w-1/2">
          <div className="search-controls-div">
            <Image
              src="/icons/person.png"
              alt="person icon"
              width={16}
              height={16}
              className="mt-1"
            />
            <p className="search-controls-p">1 Adult</p>
          </div>
        </button>
      </div>
      <button className="py-2 bg-green rounded-b-xl text-dark">Search</button>
    </div>
  );
}