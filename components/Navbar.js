/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Popover } from "@headlessui/react";
import InterStellarParentModal from "./InterStellarParentModal";
import { Fade } from "react-awesome-reveal";
import ExpandedNav from "./ExpandedNav";
import { useRouter } from "next/router";

function Navbar({ theme = "dark", hideOnScroll = true }) {
  const router = useRouter();
  const [show, setShow] = useState(true);
  const [ExpandedOpen, setExpandedOpen] = useState(false);
  const [inerStellarModalOpen, setInerStellarModalOpen] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(false);

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
    if (router.pathname === "/") {
      setIsFirstPage(true);
    } else {
      setIsFirstPage(false);
    }
  }, [router.pathname]);

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
      className={`flex items-center px-5 lg:px-[80px] py-4 lg:py-0 top-0 inset-x-0 lg:top-10 z-20 fixed ${
        show ? "opacity-100" : " lg:opacity-0"
      }  inset-x-0 transition-all ${
        theme == "dark" && isFirstPage ? " bg-[#010417]" : "bg-transparent"
      } lg:bg-transparent`}
    >
      <Link href={"/"}>
        <img
          src={
            theme === "dark"
              ? "/images/logoPrimary.png"
              : "/images/logoSecondary.png"
          }
          className="w-20 lg:w-28"
          alt=""
        />
      </Link>
      <ul className="ml-auto text-white hidden lg:flex space-x-4 font-poppins text-sm font-medium">
        <li
          onClick={() => {
            setInerStellarModalOpen(true);
          }}
          className={`${
            theme == "dark"
              ? "bg-[#020726] text-white"
              : "bg-[#E4E8FF] text-black"
          } rounded-md py-1 px-4 flex items-center font-semibold`}
        >
          <Link target={"_blank"} href={""}>
            {theme === "dark" ? (
              <img
                src="/images/richribbit.png"
                className="grayscale w-8 mr-1"
                alt=""
              />
            ) : (
              <img src="/images/richribbit.png" alt="" />
            )}
          </Link>
          <span>Staking (soon)</span>
        </li>
        <li
          className={`${
            theme == "dark"
              ? "bg-[#020726] text-white"
              : "bg-[#E4E8FF] text-black"
          } rounded-md py-1 px-4 flex items-center`}
        >
          <Link target={"_blank"} href={"https://www.everlost.io/"}>
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
          <Link target={"_blank"} href={"/Manifesto"}>
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
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://pancakeswap.finance/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f67&inputCurrency=BNB"
                >
                  Pancakeswap
                </a>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://poocoin.app/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f7"
                >
                  Poocoin
                </a>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.coinstore.com/#/spot/FRGSTUSDT"
                >
                  Coinstore
                </a>
              </div>
            </Popover.Panel>
          </Popover>
        </li>
        <Link
          target={"_blank"}
          href={
            "https://drive.google.com/file/d/1oGf6O1Gq6YJOdazJBeHxGK_3wO3OZSTM/view?usp=sharing"
          }
        >
          <li
            className={`${
              theme == "dark"
                ? "bg-[#020726] text-white"
                : "bg-[#E4E8FF] text-black"
            } rounded-md py-1 px-4 flex items-center h-full`}
          >
            <span>Whitepaper</span>
          </li>
        </Link>
        <li
          className={`${
            theme == "dark"
              ? "bg-[#020726] text-white"
              : "bg-[#E4E8FF] text-black"
          } rounded-md py-1 px-4 flex items-center`}
        >
          <a
            rel="noreferrer"
            target={"_blank"}
            href={"https://t.me/officialfroggiestoken"}
          >
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
          <a
            rel="noreferrer"
            target={"_blank"}
            href={"https://www.twitter.com/froggiestoken/"}
          >
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
                <Link rel="noreferrer" href="/Partners">
                  Partners
                </Link>
                <Link rel="noreferrer" href="/Sitemap">
                  Sitemap
                </Link>
                <Link rel="noreferrer" href="/Astronomics">
                  Astronomics
                </Link>
                <Link rel="noreferrer" href="/FAQ">
                  FAQ
                </Link>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://nanuqe.com/froggies-token/"
                >
                  KYC
                </a>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://bscscan.com/token/0x7029994f28fd39ff934a96b25591d250a2183f67"
                >
                  BSCScan
                </a>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.coingecko.com/en/coins/froggies-token"
                >
                  CoinGecko
                </a>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://coinmarketcap.com/currencies/froggies/"
                >
                  CMC
                </a>
              </div>
            </Popover.Panel>
          </Popover>
        </li>
      </ul>
      <button
        onClick={() => {
          setExpandedOpen(true);
        }}
        className={`${
          theme == "dark" ? "text-white" : "text-black"
        } lg:hidden ml-auto`}
      >
        <iconify-icon height="24" width="24" icon="gg:menu-left"></iconify-icon>
      </button>
      <InterStellarParentModal
        inerStellarModalOpen={inerStellarModalOpen}
        setInerStellarModalOpen={setInerStellarModalOpen}
      />
      {ExpandedOpen && <ExpandedNav setExpandedOpen={setExpandedOpen} />}
    </div>
  );
}

export default Navbar;
