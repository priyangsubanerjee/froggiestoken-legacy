/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Popover } from "@headlessui/react";
import InterStellarParentModal from "./InterStellarParentModal";
import { Fade } from "react-awesome-reveal";

function Navbar({ theme = "dark", hideOnScroll = true }) {
  const [show, setShow] = useState(true);
  const [inerStellarModalOpen, setInerStellarModalOpen] = useState(false);

  const controlNavbar = () => {
    if (hideOnScroll === false) return setShow(true);
    scrollY = document.getElementById("scrollContent").scrollTop;
    if (scrollY > 0) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    if (hideOnScroll === false) return setShow(true);
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
      className={`flex items-center  px-5 lg:px-[80px] py-7 lg:py-0 lg:top-10 z-10 fixed ${
        show ? "opacity-100" : " opacity-0"
      } bg-transparent inset-x-0 transition-all`}
    >
      <Link href={"/"}>
        <img
          src={
            theme === "dark"
              ? "/images/logoPrimary.svg"
              : "/images/logoSecondary.svg"
          }
          className="w-28"
          alt=""
        />
      </Link>
      <ul className="ml-auto text-white hidden lg:flex space-x-4">
        <li
          className={`${
            theme == "dark"
              ? "bg-[#020726] text-white"
              : "bg-[#E4E8FF] text-black"
          } rounded-md py-1 px-4 flex items-center`}
        >
          <Link href={"https://www.everlost.io/"}>
            {theme === "dark" ? (
              <img src="/images/everlostLight.svg" alt="" />
            ) : (
              <img src="/images/everlostDark.svg" alt="" />
            )}
          </Link>
        </li>
        <li
          onClick={() => {
            setInerStellarModalOpen(true);
          }}
          className={`${
            theme == "dark"
              ? "bg-[#020726] text-white"
              : "bg-[#E4E8FF] text-black"
          } rounded-md py-1 px-4 flex items-center`}
        >
          <span>Interstellar</span>
        </li>
        <li
          className={`${
            theme == "dark"
              ? "bg-[#020726] text-white"
              : "bg-[#E4E8FF] text-black"
          } rounded-md py-1 px-4 flex items-center`}
        >
          <Link href={"/Manifesto"}>
            <span>Manifesto</span>
          </Link>
        </li>
        <li
          className={`${
            theme == "dark"
              ? "bg-[#020726] text-white"
              : "bg-[#E4E8FF] text-black"
          } rounded-md py-1 px-4 flex items-center`}
        >
          <Popover className="relative">
            <Popover.Button className="focus:outline-none flex items-center ">
              <span>Buy</span>
              <iconify-icon
                height="20"
                width="20"
                icon="gridicons:dropdown"
              ></iconify-icon>
            </Popover.Button>
            <Popover.Panel className="absolute left-1/2 top-10 rounded p-4 -translate-x-1/2 z-10 bg-slate-900 w-44 h-fit">
              <div className="flex flex-col space-y-3 text-white">
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
        <li
          className={`${
            theme == "dark"
              ? "bg-[#020726] text-white"
              : "bg-[#E4E8FF] text-black"
          } rounded-md py-1 px-4 flex items-center`}
        >
          <span>Stellar Doc</span>
        </li>
        <li
          className={`${
            theme == "dark"
              ? "bg-[#020726] text-white"
              : "bg-[#E4E8FF] text-black"
          } rounded-md py-1 px-4 flex items-center`}
        >
          <a href={"https://t.me/officialfroggiestoken"}>
            <iconify-icon
              height="20"
              width="20"
              icon="file-icons:telegram"
            ></iconify-icon>
          </a>
        </li>
        <li
          className={`${
            theme == "dark"
              ? "bg-[#020726] text-white"
              : "bg-[#E4E8FF] text-black"
          } rounded-md py-1 px-4 flex items-center`}
        >
          <a href={"https://www.twitter.com/froggiestoken/"}>
            <iconify-icon
              height="20"
              width="20"
              icon="mdi:twitter"
            ></iconify-icon>
          </a>
        </li>
        <li
          className={`${
            theme == "dark"
              ? "bg-[#020726] text-white"
              : "bg-[#E4E8FF] text-black"
          } rounded-md py-1 px-4 flex items-center`}
        >
          <Popover className={`relative `}>
            <Popover.Button className="focus:outline-none flex items-center ">
              <span>More</span>
              <iconify-icon
                height="20"
                width="20"
                icon="gridicons:dropdown"
              ></iconify-icon>
            </Popover.Button>
            <Popover.Panel className="absolute left-1/2 top-10 rounded p-4 -translate-x-1/2 z-10 bg-slate-900 w-44 h-fit">
              <div className={`flex flex-col space-y-3 text-white`}>
                <Link href="/Partners">Partners</Link>
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

export default Navbar;
