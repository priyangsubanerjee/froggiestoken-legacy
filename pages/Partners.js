/* eslint-disable react/jsx-key */
import NavbarDark from "@/components/NavbarDark";
import React from "react";
import Marquee from "react-fast-marquee";

function Partners() {
  return (
    <div id="scrollContent" className="h-screen overflow-auto">
      <NavbarDark />
      <div className="h-[350px] bg-[#030835] p-32">
        <h1 className="text-7xl text-white font-bold mt-16 font-berlin">
          OUR PARTNERS
        </h1>
      </div>
      <div className="flex">
        <div className="w-[60%] px-44 py-20">
          <h1 className="text-5xl font-medium leading-[1.4] font-berlin">
            Uniting Forces to Reach for the Stars
          </h1>
          <p className="text-sm text-[#010417] leading-6 mt-5">
            Even in the far Galaxies permanent foundations are created through
            interplanetary connections, think of the stars; Sagittarius, Leo,
            Taurus. <br />
            <br /> We at FROGGIES connect in the same way through meaningful
            partnerships, those that really matter now, and many light-years to
            come.
          </p>
        </div>
        <div className="flex w-[40%] overflow-hidden relative">
          <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-white via-white/90 to-transparent z-20"></div>
          <Marquee className="rotate-90" gradient={false} speed={20}>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
          </Marquee>
          <Marquee
            direction="right"
            className="-ml-44 rotate-90"
            gradient={false}
            speed={20}
          >
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
            <h1 className="-rotate-90">heloo</h1>
          </Marquee>
          <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-white to-transparent z-20"></div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
