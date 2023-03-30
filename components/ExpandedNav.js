/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Menu } from "@headlessui/react";
import React from "react";

function ExpandedNav({ setExpandedOpen }) {
  return (
    <div className="fixed inset-0 bg-primaryBg h-full w-full z-40 overflow-auto py-5 flex flex-col">
      <div className="flex py-4 px-5 items-center fixed top-0 inset-x-0">
        <Link href={"/"}>
          <img src={"/images/logoPrimary.png"} className="w-20" alt="" />
        </Link>
        <button
          onClick={() => {
            setExpandedOpen(false);
          }}
          className="text-white ml-auto"
        >
          <iconify-icon
            height="24"
            width="24"
            icon="material-symbols:close"
          ></iconify-icon>
        </button>
      </div>
      <ul className="flex my-auto flex-col items-center justify-center text-white font-poppins space-y-9">
        <li>
          <Link href={"https://www.everlost.io/"}>
            <img src="/images/everlostLight.svg" className="h-4" alt="" />
          </Link>
        </li>
        <li className="flex space-x-2 items-center">
          <Link href={"https://froggiestoken.com"}>
            <img
              src="/images/richribbit.png"
              className="w-8 grayscale"
              alt=""
            />
          </Link>
          <span>Staking (soon)</span>
        </li>

        <li>
          <Link href={"/InterStellar"}>
            <span>Interstellar</span>
          </Link>
        </li>
        <li>
          <Link href={"/Manifesto"}>
            <span>Manifesto</span>
          </Link>
        </li>
        <li className="text-center">
          <Menu>
            <Menu.Button>Buy</Menu.Button>
            <Menu.Items>
              <ul className="text-xs text-primaryGrey space-y-5 mt-5 bg-white/10 rounded-md p-5">
                <li>
                  <Link
                    href={
                      "https://www.pancakeswap.finance/swap#/swap?outputCurrency=0x8e9f5175fD4Fb3515C85F4dAe85706A93498A93a"
                    }
                  >
                    <span>PancakeSwap</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://poocoin.app/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f7"
                    }
                  >
                    Poocoin
                  </Link>
                </li>
                <li>
                  <Link href={`https://www.coinstore.com/#/spot/FRGSTUSDT`}>
                    Coinstore
                  </Link>
                </li>
              </ul>
            </Menu.Items>
          </Menu>
        </li>
        <li>
          <Link
            href={
              "https://drive.google.com/file/d/1oGf6O1Gq6YJOdazJBeHxGK_3wO3OZSTM/view?usp=sharing"
            }
          ></Link>
          <span>Whitepaper</span>
        </li>
        <li className="text-center">
          <Menu>
            <Menu.Button>More</Menu.Button>
            <Menu.Items>
              <ul className="text-xs text-primaryGrey space-y-5 mt-5 bg-white/10 rounded-md p-5">
                <li>
                  <Link href={"/Partners"}>
                    <span>Partners</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/Sitemap"}>Sitemap</Link>
                </li>
                <li>
                  <Link href={`/Astronomics`}>Astronomics</Link>
                </li>
                <li>
                  <Link href={`/FAQ`}>FAQ</Link>
                </li>
                <li>
                  <Link
                    target={"_blank"}
                    href={`https://nanuqe.com/froggies-token/`}
                  >
                    KYC
                  </Link>
                </li>
                <li>
                  <Link
                    target={"_blank"}
                    href={`https://bscscan.com/token/0x7029994f28fd39ff934a96b25591d250a2183f67`}
                  >
                    BSC Scan
                  </Link>
                </li>
                <li>
                  <Link
                    target={"_blank"}
                    href={`https://www.coingecko.com/en/coins/froggies-token`}
                  >
                    Coin Gecko
                  </Link>
                </li>
                <li>
                  <Link
                    target={"_blank"}
                    href={`https://coinmarketcap.com/currencies/froggies/`}
                  >
                    CMC
                  </Link>
                </li>
              </ul>
            </Menu.Items>
          </Menu>
        </li>
        <li>
          <Link target={"_blank"} href={"https://t.me/officialfroggiestoken"}>
            <div>
              <span>Telegram</span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            target={"_blank"}
            href={"https://www.twitter.com/froggiestoken/"}
          >
            <div>
              <span>Twitter</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ExpandedNav;
