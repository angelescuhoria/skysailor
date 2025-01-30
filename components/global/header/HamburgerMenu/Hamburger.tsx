"use client";

import React from "react";
import { useNavMenu } from "@/app/contexts/MobileNavMenuContext";

export default function Hamburger() {
  const { isOpen, toggleMenu } = useNavMenu();

  return (
    <button onClick={toggleMenu}>
      <div className="relative flex overflow-hidden items-center justify-center transform transition-all duration-200">
        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
          <div
            className={`bg-green h-0.5 w-7 transform transition-all duration-300 origin-left ${
              isOpen ? "translate-x-10" : ""
            }`}
          ></div>
          <div
            className={`bg-green h-0.5 w-7 rounded transform transition-all duration-300 delay-75 ${
              isOpen ? "translate-x-10" : ""
            }`}
          ></div>
          <div
            className={`bg-green h-0.5 w-7 transform transition-all duration-300 origin-left delay-150 ${
              isOpen ? "translate-x-10" : ""
            }`}
          ></div>

          <div
            className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${
              isOpen ? "translate-x-0 w-12" : ""
            }`}
          >
            <div
              className={`absolute bg-green h-0.5 w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                isOpen ? "rotate-45" : ""
              }`}
            ></div>
            <div
              className={`absolute bg-green h-0.5 w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                isOpen ? "-rotate-45" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </button>
  );
}