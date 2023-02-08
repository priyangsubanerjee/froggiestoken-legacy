/* eslint-disable @next/next/no-img-element */
import React from "react";

function Audience() {
  return (
    <div className="w-[1000px]">
      <h2 className=" text-primaryGrey text-sm font-medium">AUDIENCE</h2>
      <div className="relative">
        <h1 className="text-6xl whitespace-nowrap font-semibold text-white leading-[1.3] uppercase">
          TEAM IS CONSTANTLY
        </h1>
        <h1 className="text-6xl whitespace-nowrap font-semibold text-white leading-[1.3] uppercase">
          BUILDING; WHATS NEXT?
        </h1>
      </div>

      <div className="deadlineScrollView h-[300px] w-[600px] overflow-auto mt-16 space-y-5">
        <div className="flex items-center space-x-4 px-4">
          <div>
            <img src="/images/greenCheck.png" alt="" />
          </div>
          <div>
            <h1 className="font-poppins text-white line-through">
              Migrate successfully to BSC
            </h1>
            <p className="text-sm text-secondaryGrey">15th Jan 2023</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 px-4">
          <div>
            <img src="/images/greenCheck.png" alt="" />
          </div>
          <div>
            <h1 className="font-poppins text-white line-through">
              Launch this amazing website
            </h1>
            <p className="text-sm text-secondaryGrey">15th Jan 2023</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 px-4">
          <div>
            <img src="/images/yellowCheck.png" alt="" />
          </div>
          <div>
            <h1 className="font-poppins text-white">
              P2E mobile and wallet connect compatibility
            </h1>
            <p className="text-sm text-secondaryGrey">15th Jan 2023</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 px-4">
          <div>
            <img src="/images/yellowCheck.png" alt="" />
          </div>
          <div>
            <h1 className="font-poppins text-white">
              Our very own staking platform
            </h1>
            <p className="text-sm text-secondaryGrey">15th Jan 2023</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 px-4">
          <div>
            <img src="/images/grayCheck.png" alt="" />
          </div>
          <div>
            <h1 className="font-poppins text-white">
              Beginning of development of our entertainment platform
            </h1>
            <p className="text-sm text-secondaryGrey">15th Jan 2023</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 px-4">
          <div>
            <img src="/images/grayCheck.png" alt="" />
          </div>
          <div>
            <h1 className="font-poppins text-white">Next top 50 CEX listing</h1>
            <p className="text-sm text-secondaryGrey">15th Jan 2023</p>
          </div>
        </div>
      </div>

      <div className="flex items-baseline mt-16 whitespace-nowrap">
        <span>Ready to see even more ? </span>
        <div className="w-20 h-[1px] bg-white"></div>
        <div className="flex items-center relative text-black w-36 ml-5">
          <div className="flex z-10 items-center font-poppins">
            <span>Deeper Dive</span>
            <iconify-icon className="z-10" icon="ph:arrow-down"></iconify-icon>
          </div>
          <div className="absolute -top-[2px] -left-4 w-auto">
            <img
              src="/images/textScribbleVector.png"
              className="w-36 h-6 z-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audience;
