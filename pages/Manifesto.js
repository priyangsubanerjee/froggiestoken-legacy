import NavbarLight from "@/components/NavbarLight";
import React from "react";

function Manifesto() {
  return (
    <div id="scrollContent" className="h-screen overflow-auto">
      <NavbarLight />
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
            Beyond the stars, beyond the night, A future bright, a cosmic sight.{" "}
            <br />
            Vast and endless, the expanse calls, With promise of discovery, and
            new horizons for <br /> us all.
            <br />
            <br />
            Through the void, we journey forth, To explore, to learn, to grow.
            With every step, we <br /> break new ground, And our understanding
            continues to flow.
            <br />
            <br />
            The mysteries of the universe, <br /> Await to be unraveled, <br />{" "}
            As we reach for the stars, <br /> Our horizons are forever traveled.
            <br />
            <br />
            With each new discovery, <br /> We take one step further, <br />{" "}
            Towards a future that&apos;s bright, <br /> And the possibilities
            that we offer.
            <br />
            <br />
            So come and join us, <br /> On this journey to the sky, <br /> For
            the future is ours, And it&apos;s time for us to fly.
            <br />
            <br />- TO THE MOON AND NEVER BACK
          </p>
        </div>
        <div className="flex items-center justify-end text-[#777777] text-sm mt-16">
          Partnered with{" "}
          <span className="cursor-pointer underline ml-1">Dtory Studios</span>
        </div>
      </div>
    </div>
  );
}

export default Manifesto;
