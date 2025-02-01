import React from "react";
import Image from "next/image";

export default function SearchControls() {
  return (
    <div className="flex flex-col mt-1 relative">
      <button className="bg-dark py-2 rounded-t-xl">
        <div className="flex items-start opacity-80 ml-2">
          <Image
            src="/icons/origin.png"
            alt="origin icon"
            width={16}
            height={16}
            className="mt-1"
          />
          <p className="text-white ml-1 font-medium">
            Choose a departure location
          </p>
        </div>
      </button>
      <button className="bg-dark w-fit h-fit rounded-full border-[1px] border-green absolute right-8 top-5">
        <Image
          src="/icons/switch-arrows.png"
          alt="switch arrows icon"
          width={24}
          height={24}
          className="m-2"
        />
      </button>
      <button className="bg-dark py-2 border-y-[1px] border-green">
        <div className="flex items-start opacity-80 ml-2">
          <Image
            src="/icons/destination.png"
            alt="destination icon"
            width={16}
            height={16}
            className="mt-1"
          />
          <p className="text-white ml-1 font-medium">Choose destination</p>
        </div>
      </button>
      <div className="flex flex-row w-full">
        <button className="bg-dark py-2 border-r-[1px] border-green rounded-bl-xl w-1/2">
          <div className="flex items-start opacity-80 ml-2">
            <Image
              src="/icons/calendar.png"
              alt="calendar icon"
              width={16}
              height={16}
              className="mt-1"
            />
            <p className="text-white ml-1 font-medium">Choose dates</p>
          </div>
        </button>
        <button className="bg-dark py-2 border-green rounded-br-xl w-1/2">
          <div className="flex items-start opacity-80 ml-2">
            <Image
              src="/icons/person.png"
              alt="person icon"
              width={16}
              height={16}
              className="mt-1"
            />
            <p className="text-white ml-1 font-medium">1 Adult</p>
          </div>
        </button>
      </div>
    </div>
  );
}