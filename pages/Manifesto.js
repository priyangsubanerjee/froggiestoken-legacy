import Navbar from "@/components/NavbarLight";
import React from "react";

function Manifesto() {
  return (
    <div>
      <Navbar />
      <div className="p-32">
        <div className="flex items-center space-x-4">
          <h1 className="text-7xl font-bold uppercase font-poppins">
            Manifesto
          </h1>
          <div className="text-5xl mt-8">•</div>
          <div className="h-2 w-56 bg-black mt-10 block"></div>
        </div>
        <div className="mt-16 h-[2px] bg-gray-200 w-full rounded-md"></div>
        <div className="w-1/2">
          <p className="text-sm leading-6 mt-16">
            Beyond the stars, beyond the night, A future bright, a cosmic sight.
            Vast and endless, the expanse calls, With promise of discovery, and
            new horizons for us all.
            <br />
            <br />
            Through the void, we journey forth, To explore, to learn, to grow.
            With every step, we break new ground, And our understanding
            continues to flow.
            <br />
            <br />
            The mysteries of the universe, Await to be unraveled, As we reach
            for the stars, Our horizons are forever traveled.
            <br />
            <br />
            With each new discovery, We take one step further, Towards a future
            that&apos;s bright, And the possibilities that we offer.
            <br />
            <br />
            So come and join us, On this journey to the sky, For the future is
            ours, And it&apos;s time for us to fly.
            <br />
            <br />- TO THE MOON AND NEVER BACK
          </p>
        </div>
      </div>
    </div>
  );
}

export default Manifesto;
