/* eslint-disable @next/next/no-img-element */
import React from "react";

function BlackHole() {
  return (
    <div>
      <h2 className=" text-primaryGrey text-sm font-medium">BLACK HOLE</h2>
      <h1 className="text-7xl font-semibold text-white leading-[1.3]">
        Into the Black hole
      </h1>
      <p className="text-sm text-white leading-7 mt-4 font-poppins">
        Brave the unknown and embark on a journey into a black hole&apos;s
        embrace to uncover secrets beyond reality. Embrace the darkness and
        <span className="inline-flex items-center relative text-black w-96 ml-3">
          <span className="inline-flex z-10 items-center font-poppins">
            <span>unlock the mysteries of the universe.</span>
            <iconify-icon className="z-10" icon="ph:arrow-down"></iconify-icon>
          </span>
          <span className="absolute -top-3 -left-8">
            <img
              src="/images/textScribble3.png"
              className="w-80 h-12 z-0"
              alt=""
            />
          </span>
        </span>
      </p>
      <div className="grid grid-cols-2 mt-16 w-[600px]">
        <div className="h-20 relative flex items-center overflow-hidden cursor-pointer">
          <img
            src="/images/borderBox.svg"
            className="absolute -right-[1px]  -bottom-1"
            alt=""
          />
          <div className="w-[30%]">
            <img src="/images/buy.png" alt="" />
          </div>
          <div className="ml-6">
            <h1 className="font-bold uppercase">BUY</h1>
            <p className="text-sm text-secondaryGrey font-poppins">
              Buy froggies token now
            </p>
          </div>
        </div>
        <div className="relative h-20 flex items-center overflow-hidden cursor-pointer">
          <img
            src="/images/borderBox.svg"
            className="absolute -left-1  -bottom-1 "
            alt=""
          />
          <div className="w-[30%]">
            <img src="/images/interstellar.png" className="-mt-1" alt="" />
          </div>
          <div className="ml-6">
            <h1 className="font-bold uppercase">interstellar</h1>
            <p className="text-sm text-secondaryGrey font-poppins">
              Learn more
            </p>
          </div>
        </div>
        <div className="h-20 relative flex items-center overflow-hidden cursor-pointer">
          <img
            src="/images/borderBox.svg"
            className="absolute inset-0 "
            alt=""
          />
          <div className="w-[30%]">
            <img src="/images/manifesto.png" className="mt-5" alt="" />
          </div>
          <div className="ml-6">
            <h1 className="font-bold uppercase">Manifesto</h1>
            <p className="text-sm text-secondaryGrey font-poppins">
              Outerspace finance
            </p>
          </div>
        </div>
        <div className="h-20 relative flex items-center  overflow-hidden cursor-pointer">
          <img
            src="/images/borderBox.svg"
            className="absolute -left-1"
            alt=""
          />
          <div className="w-[30%]">
            <img src="/images/astronomics.png" alt="" />
          </div>
          <div className="ml-6">
            <h1 className="font-bold uppercase">Astronomics</h1>
            <p className="text-sm text-secondaryGrey font-poppins">
              Outerspace finance
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-baseline mt-16 whitespace-nowrap uppercase font-bold font-poppins">
        <span>To the moon and never back .</span>
        <div className="ml-1 w-20 h-[1px] bg-white"></div>
      </div>
    </div>
  );
}

export default BlackHole;
