/* eslint-disable @next/next/no-img-element */
import React from "react";

function Navbar() {
  return (
    <div className="hidden lg:flex items-center px-[80px] mt-5 z-10 fixed top-0 inset-x-0">
      <div>
        <h1 className="text-2xl font-bold">Logo.</h1>
      </div>
      <ul className="ml-auto text-black flex space-x-4">
        <li className="bg-[#E4E8FF] rounded-md py-1 px-4 flex items-center">
          <span>Everlost</span>
        </li>
        <li className="bg-[#E4E8FF] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <span>interstellar</span>
        </li>
        <li className="bg-[#E4E8FF] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <span>Manifesto</span>
        </li>
        <li className="bg-[#E4E8FF] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <span>Buy</span>
          <iconify-icon
            height="20"
            width="20"
            icon="gridicons:dropdown"
          ></iconify-icon>
        </li>

        <li className="bg-[#E4E8FF] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <span>Stellar Doc</span>
        </li>
        <li className="bg-[#E4E8FF] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <iconify-icon
            height="20"
            width="20"
            icon="file-icons:telegram"
          ></iconify-icon>
        </li>
        <li className="bg-[#E4E8FF] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <iconify-icon
            height="20"
            width="20"
            icon="mdi:twitter"
          ></iconify-icon>
        </li>
        <li className="bg-[#E4E8FF] rounded-md py-2 px-5 flex items-center font-poppins text-sm">
          <span>More</span>
          <iconify-icon
            height="20"
            width="20"
            icon="gridicons:dropdown"
          ></iconify-icon>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
