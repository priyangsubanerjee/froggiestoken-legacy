/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Popover } from "@headlessui/react";
import InterStellarParentModal from "./InterStellarParentModal";

function NavbarLight() {
  const [show, setShow] = useState(true);
  const [inerStellarModalOpen, setInerStellarModalOpen] = useState(false);

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
      <Link href={"/"}>
        <img src="/images/logoSecondary.svg" className="w-28" alt="" />
      </Link>
      <ul className="ml-auto text-black flex space-x-4">
        <li className="bg-[#E4E8FF] rounded-md py-1 px-4 flex items-center">
          <Link href={"https://www.everlost.io/"}>
            <img src="/images/everlostDark.svg" alt="" />
          </Link>
        </li>
        <li
          onClick={() => {
            setInerStellarModalOpen(true);
          }}
          className="bg-[#E4E8FF] rounded-md py-1 px-5 flex items-center font-poppins text-sm"
        >
          <span>interstellar</span>
        </li>

        <li className="bg-[#E4E8FF] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <Link href={"/Manifesto"}>
            <span>Manifesto</span>
          </Link>
        </li>

        <li className="bg-[#E4E8FF] rounded-md py-1 px-5 font-poppins text-sm flex items-center">
          <Popover className="relative">
            <Popover.Button className="focus:outline-none flex items-center ">
              <span>Buy</span>
              <iconify-icon
                height="20"
                width="20"
                icon="gridicons:dropdown"
              ></iconify-icon>
            </Popover.Button>
            <Popover.Panel className="absolute left-1/2 top-10 rounded p-4 -translate-x-1/2 z-10 bg-slate-100 w-44 h-fit">
              <div className="flex flex-col space-y-3">
                <a href="https://pancakeswap.finance/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f67&inputCurrency=BNB">
                  Pancakeswap
                </a>
                <a href="https://poocoin.app/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f7">
                  Poocoin
                </a>
                <a href="https://www.coinstore.com/#/spot/FRGSTUSDT">
                  Coinstore
                </a>
              </div>
            </Popover.Panel>
          </Popover>
        </li>

        <li className="bg-[#E4E8FF] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <span>Stellar Doc</span>
        </li>
        <li className="bg-[#E4E8FF] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <a href={"https://t.me/officialfroggiestoken"}>
            <iconify-icon
              height="20"
              width="20"
              icon="file-icons:telegram"
            ></iconify-icon>
          </a>
        </li>
        <li className="bg-[#E4E8FF] rounded-md py-1 px-5 flex items-center font-poppins text-sm">
          <a href={"https://www.twitter.com/froggiestoken/"}>
            <iconify-icon
              height="20"
              width="20"
              icon="mdi:twitter"
            ></iconify-icon>
          </a>
        </li>
        <li className="bg-[#E4E8FF] rounded-md py-1 px-5 font-poppins text-sm flex items-center">
          <Popover className="relative">
            <Popover.Button className="focus:outline-none flex items-center ">
              <span>More</span>
              <iconify-icon
                height="20"
                width="20"
                icon="gridicons:dropdown"
              ></iconify-icon>
            </Popover.Button>
            <Popover.Panel className="absolute left-1/2 top-10 rounded p-4 -translate-x-1/2 z-10 bg-slate-100 w-44 h-fit">
              <div className="flex flex-col space-y-3">
                <Link href="/">Partners</Link>
                <Link href="/Sitemap">Sitemap</Link>
                <Link href="/Astronomics">Astronomics</Link>
                <Link href="/FAQ">FAQ</Link>
                <a href="https://nanuqe.com/froggies-token/">KYC</a>
                <a href="https://bscscan.com/token/0x7029994f28fd39ff934a96b25591d250a2183f67">
                  BSCScan
                </a>
                <a href="https://www.coingecko.com/en/coins/froggies-token">
                  CoinGecko
                </a>
                <a href="https://coinmarketcap.com/currencies/froggies/">CMC</a>
              </div>
            </Popover.Panel>
          </Popover>
        </li>
      </ul>
      <InterStellarParentModal
        inerStellarModalOpen={inerStellarModalOpen}
        setInerStellarModalOpen={setInerStellarModalOpen}
      />
    </div>
  );
}

export default NavbarLight;
