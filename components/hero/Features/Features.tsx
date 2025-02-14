import React from "react";
import { Card } from "@/components";
import Image from "next/image";
import { featuresData } from "@/data/features";

export default function Features() {
  return (
    <div className="main-card rounded-xl w-full h-auto flex flex-col px-4 gap-5 text-white">
      <h2 className="h2 mt-5">
        Discover <span className="text-green">the possibilities</span> with Sky
        Sailor:
      </h2>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        {featuresData.map((feature, index) => (
          <Card key={index} className="feature-card">
            <h3 className="h3">
              <span className="text-green">0{index + 1}.</span> {feature.h3}
            </h3>
            <p>{feature.paragraph}</p>
            <a href={feature.button_link}>
              <button className="feature-button">
                <p className="text-dark">{feature.button_paragraph}</p>
                <Image
                  src={feature.button_icon}
                  alt={feature.button_image_alt}
                  width={16}
                  height={16}
                />
              </button>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}