"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function SwitchButton() {
  const [rotated, setRotated] = useState<boolean>(false);
  return (
    <button
      className="bg-dark w-fit h-fit rounded-full border-[1px] border-green absolute z-[5] right-8 top-5 p-2"
      onClick={() => setRotated(!rotated)}
    >
      <Image
        src="/icons/switch-arrows.png"
        alt="switch arrows icon"
        width={24}
        height={24}
        className={`transition-transform duration-300 ${
          rotated ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>
  );
}