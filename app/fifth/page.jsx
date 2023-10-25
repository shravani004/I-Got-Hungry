import React from "react";
import Image from "next/image";
import Nav from "@/app/components/Nav";

const page = () => {
  return (
    <div className="grid md:grid-cols-6 h-full">
      <Nav />
      <main className="bg-gray-100 md:col-span-5 max-h-max">
        <div className="bg-gray-100 space-x-8 rounded-md p-4 h-16"> </div>
        <header className="bg-gray-100 px-16 py-6">
          <h2 className="text-gray-700 text-6xl font-semibold">
            {" "}
            Chocolate faces cookies{" "}
          </h2>
          <h3 className="text-2xl font-semibold"> Food archive </h3>
        </header>
        <div className="px-8 py-6 bg-gray-100 w-full rounded-md shadow-lg text-lg text-justify">
          <Image
            class="p-8 object-cover"
            src="https://www.milkmaid.in/sites/default/files/2020-08/Chocolate-Face-590x436.jpg"
            alt="chocolate faces cookies"
            width={800}
            height={1000}
          />
          <p class="p-8 text-xl">
            {" "}
            Heat Nestlé MILKMAID, cocoa powder, and butter in a pan. Cook till
            the mixture starts leaving the sides of the pan. Remove from fire.
            Spread 1 tsp of this mixture onto each biscuit and leave to dry for
            5 minutes. Divide the coconut powder into two equal portions and
            color one green and the other yellow. Decorate each biscuit by
            making eyes with raisins, mouth with cashew halves, and hair with
            colored coconut powder.{" "}
          </p>
        </div>
      </main>
    </div>
  );
};

export default page;
