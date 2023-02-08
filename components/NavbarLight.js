/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";

function NavbarLight() {
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    scrollY = document.getElementById("scrollContent").scrollTop;
    if (scrollY > 0) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    document
      .getElementById("scrollContent")
      .addEventListener("scroll", controlNavbar);

    return () => {
      document
        .getElementById("scrollContent")
        .removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <div
      className={`hidden lg:flex items-center px-[80px] top-10 z-10 fixed ${
        show ? "opacity-100" : " opacity-0"
      } inset-x-0 transition-all`}
    >
      <div>
        <img src="/images/logoSecondary.svg" className="w-28" alt="" />
      </div>
      <ul className="ml-auto text-black flex space-x-4">
        <li className="bg-[#E4E8FF] rounded-md py-1 px-4 flex items-center">
          <img src="/images/everlostDark.svg" alt="" />
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

export default NavbarLight;
