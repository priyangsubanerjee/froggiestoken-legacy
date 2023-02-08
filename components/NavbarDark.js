/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    scrollY = document.getElementById("scrollContent").scrollTop;
    if (scrollY > lastScrollY) {
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
        <img src="/images/logoPrimary.png" className="w-28" alt="" />
      </div>
      <ul className="ml-auto text-white flex space-x-4">
        <li className="bg-[#020726] rounded-md py-1 px-4 flex items-center">
          <span>Everlost</span>
        </li>
        <li className="bg-[#020726] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <span>interstellar</span>
        </li>

        <li className="bg-[#020726] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <Link href={"/Manifesto"}>
            <span>Manifesto</span>
          </Link>
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
