/* eslint-disable @next/next/no-img-element */
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center px-[80px] -mt-3 z-10 fixed top-0 inset-x-0">
      <div>
        <img src="/images/logoPrimary.png" className="h-32" alt="" />
      </div>
      <ul className="ml-auto text-white flex space-x-4">
        <li className="bg-[#020726] rounded-md py-1 px-4 flex items-center">
          <span>Everlost</span>
        </li>
        <li className="bg-[#020726] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <span>interstellar</span>
        </li>
        <li className="bg-[#020726] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <span>Manifesto</span>
        </li>
        <li className="bg-[#020726] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <span>Buy</span>
          <iconify-icon
            height="20"
            width="20"
            icon="gridicons:dropdown"
          ></iconify-icon>
        </li>

        <li className="bg-[#020726] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <span>Stellar Doc</span>
        </li>
        <li className="bg-[#020726] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <iconify-icon
            height="20"
            width="20"
            icon="file-icons:telegram"
          ></iconify-icon>
        </li>
        <li className="bg-[#020726] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <iconify-icon
            height="20"
            width="20"
            icon="mdi:twitter"
          ></iconify-icon>
        </li>
        <li className="bg-[#020726] rounded-md py-2 px-5 flex items-center font-poppins text-sm">
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
