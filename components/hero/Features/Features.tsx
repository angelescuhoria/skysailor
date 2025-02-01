import React from "react";
import Card from "@/components/global/Card";

export default function Features() {
  return (
    <div className="main-card w-full h-auto flex flex-col px-4 gap-5">
      <h2 className="h2 mt-5">
        Discover <span className="text-green">the possibilities</span> with Sky
        Sailor
      </h2>
      <Card className="p-2">
        <h3 className="h3">
          <span className="text-green">01.</span> Explore the world
        </h3>
        <p className="my-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </Card>
      <Card className="p-2">
        <h3 className="h3">
          <span className="text-green">02.</span> Search hotels
        </h3>
        <p className="my-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </Card>
      <Card className="p-2">
        <h3 className="h3">
          <span className="text-green">03.</span> Car hiring
        </h3>
        <p className="my-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </Card>
      <Card className="p-2">
        <h3 className="h3">
          <span className="text-green">04.</span> Track trip data
        </h3>
        <p className="my-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </Card>
    </div>
  );
}