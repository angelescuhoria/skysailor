import React from "react";
import { Card } from "@/components";
import Image from "next/image";

export default function Features() {
  return (
    <div className="main-card rounded-xl w-full h-auto flex flex-col px-4 gap-5 text-white">
      <h2 className="h2 mt-5">
        Discover <span className="text-green">the possibilities</span> with Sky
        Sailor:
      </h2>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
        <Card className="feature-card">
          <h3 className="h3">
            <span className="text-green">01.</span> Explore the world
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <a href="#" className="w-fit">
            <button className="feature-button">
              <p className="text-dark">Explore today</p>
              <Image
                src="/icons/right_arrow_icon.png"
                alt="arrow right"
                width={16}
                height={16}
              />
            </button>
          </a>
        </Card>
        <Card className="feature-card">
          <h3 className="h3">
            <span className="text-green">02.</span> Search hotels
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <a href="#" className="w-fit">
            <button className="feature-button">
              <p className="text-dark">Search hotels</p>
              <Image
                src="/icons/right_arrow_icon.png"
                alt="arrow right"
                width={16}
                height={16}
              />
            </button>
          </a>
        </Card>
        <Card className="feature-card">
          <h3 className="h3">
            <span className="text-green">03.</span> Car hiring
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <a href="#" className="w-fit">
            <button className="feature-button">
              <p className="text-dark">Check options</p>
              <Image
                src="/icons/right_arrow_icon.png"
                alt="arrow right"
                width={16}
                height={16}
              />
            </button>
          </a>
        </Card>
        <Card className="feature-card">
          <h3 className="h3">
            <span className="text-green">04.</span> Track trip data
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <a href="#" className="w-fit">
            <button className="feature-button">
              <p className="text-dark">Review data</p>
              <Image
                src="/icons/right_arrow_icon.png"
                alt="arrow right"
                width={16}
                height={16}
              />
            </button>
          </a>
        </Card>
      </div>
    </div>
  );
}