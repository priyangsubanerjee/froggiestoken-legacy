/* eslint-disable @next/next/no-img-element */
import NavbarDark from "@/components/NavbarDark";
import React from "react";

function Astronomics() {
  return (
    <div id="scrollContent" className="h-screen overflow-auto bg-[#030835]">
      <NavbarDark />
      <img
        src="/images/frogVector2.png"
        className="fixed bottom-0 right-0 object-contain"
        alt=""
      />
      <div className="p-32">
        <div className=" space-x-4 mt-10">
          <h1 className="text-7xl text-white font-bold uppercase font-poppins">
            ASTRONOMICS
          </h1>
        </div>
        <div className="border-y border-[#DCDCDC] mt-7 py-7 w-[60%] flex items-center justify-between">
          <div className="space-y-4">
            <h2 className="text-white font-semibold">TOTAL SUPPLY</h2>
            <h1 className="font-extrabold text-xl uppercase text-secondaryGrey">
              100 Quadrillion
            </h1>
            <h2 className="text-white font-bold">Launch date - 24/10/23</h2>
            <h1 className="font-extrabold text-xl uppercase text-secondaryGrey">
              246 Days : 6 hrs : 17 mins
            </h1>
          </div>
          <div className="w-[300px] h-[140px] border border-[#DCDCDC] rounded-md flex flex-col items-center justify-center relative">
            <img
              src="/images/burnw1.svg"
              className="absolute bottom-0 -left-0"
              alt=""
            />
            <img
              src="/images/burnw2.svg"
              className="absolute top-0 -right-0"
              alt=""
            />
            <h1 className="text-white uppercase font-semibold">Total burn</h1>
            <img src="/images/87p.svg" className="h-7 mt-4" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-16 w-[600px]">
          <div className="h-20 w-full relative flex items-center justify-center overflow-hidden cursor-pointer text-white">
            <img
              src="/images/borderBox.svg"
              className="absolute -left-0  -bottom-1 "
              alt=""
            />
            <h1 className="font-poppins uppercase mt-[6px]">Reflections: 3%</h1>
          </div>
          <div className="relative h-20 flex items-center justify-center overflow-hidden cursor-pointer text-white">
            <img
              src="/images/borderBox.svg"
              className="absolute -left-1 -bottom-1"
              alt=""
            />
            <h1 className="font-poppins uppercase mt-[6px]">
              Dev/Marketing: 3%
            </h1>
          </div>
          <div className="h-20 relative flex items-center justify-center overflow-hidden cursor-pointer text-white">
            <img
              src="/images/borderBox.svg"
              className="absolute inset-0 "
              alt=""
            />
            <h1 className="font-poppins uppercase mt-[6px]">FRGST Burn: 2%</h1>
          </div>
          <div className="h-20 relative flex items-center justify-center overflow-hidden cursor-pointer text-white">
            <img
              src="/images/borderBox.svg"
              className="absolute -left-1"
              alt=""
            />
            <h1 className="font-poppins uppercase mt-[6px]">
              Liquidity pool: 2%
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Astronomics;
