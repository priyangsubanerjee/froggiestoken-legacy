/* eslint-disable @next/next/no-html-link-for-pages */

import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

function Sitemap() {
  return (
    <div id="scrollContent" className="h-screen overflow-auto">
      <Navbar />
      <div className="h-fit lg:h-[350px] bg-[#030835] px-5 py-7 lg:p-32">
        <h1 className="text-2xl lg:text-7xl text-white font-bold mt-16 font-berlin">
          SITEMAP
        </h1>
      </div>
      <div className="px-5 lg:px-44 py-8 lg:py-16 flex">
        <div className="flex flex-col lg:flex-row lg:space-x-20 space-y-10 lg:space-y-0 lg:mx-auto">
          <div>
            <h1 className="font-bold text-lg lg:text-2xl uppercase">ABOUT</h1>
            <ul className="space-y-2 mt-4 text-sm lg:text-base">
              <li className="font-poppins">Stellar Doc</li>
              <li className="font-poppins">
                <a rel="noopener noreferrer" href="/Manifesto">
                  Manifesto
                </a>
              </li>
              <li className="font-poppins">Everlost</li>
              <li className="font-poppins">
                <a rel="noopener noreferrer" href="/#2">
                  Team
                </a>
              </li>
              <li className="font-poppins">
                <a rel="noopener noreferrer" href="/FAQ">
                  FAQ
                </a>
              </li>
              <li className="font-poppins">Partners</li>
              <li className="font-poppins">Ambassador Program</li>
              <li className="font-poppins">Liquidity Lock</li>
              <li className="font-poppins">KYC</li>
              <li className="font-poppins">P2E</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg lg:text-2xl uppercase">
              Interstellar
            </h1>
            <ul className="space-y-2 mt-4 text-base">
              <li className="font-poppins">
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href="/dynamic/fueling-success"
                >
                  Fueling Success
                </a>
              </li>
              <li className="font-poppins">
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href="/dynamic/orbiting-p2e"
                >
                  Orbiting P2E
                </a>
              </li>
              <li className="font-poppins">
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href="/dynamic/stellar-innovation"
                >
                  Stellar Innovation
                </a>
              </li>
              <li className="font-poppins">
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href="/dynamic/expanding-horizons"
                >
                  Expanding Horizons
                </a>
              </li>
              <li className="font-poppins">
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href="/dynamic/galactic-contributions"
                >
                  Galactic Contributions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg lg:text-2xl uppercase">
              Listings
            </h1>
            <ul className="space-y-2 mt-4 text-sm lg:text-base">
              <li className="font-poppins">
                <a
                  rel="noopener noreferrer"
                  href="https://bscscan.com/token/0x7029994f28fd39ff934a96b25591d250a2183f67"
                >
                  BSC Scan
                </a>
              </li>
              <li className="font-poppins">CoinMarketCap</li>
              <li className="font-poppins">
                <a href="https://www.coingecko.com/en/coins/froggies-token">
                  CoinGecko
                </a>
              </li>
              <li className="font-poppins">Crypto.com</li>
              <li className="font-poppins">Dextools</li>
              <li className="font-poppins">
                <a href="https://www.coinstore.com/#/spot/FRGSTUSDT">
                  Coinstore
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="font-bold text-lg lg:text-2xl uppercase">Socials</h1>
            <ul className="space-y-2 mt-4 text-sm lg:text-base">
              <li className="font-poppins">
                <a href="https://t.me/officialfroggiestoken">
                  Official Telegram
                </a>
              </li>
              <li className="font-poppins">
                <a href="https://www.twitter.com/froggiestoken/">Twitter</a>
              </li>
              <li className="font-poppins">Medium</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

//https://script.google.com/macros/s/AKfycbx9nyGmD_gCLB3n8BeKktnYZuFEDC7qxNy2ABOP1ATCkPgig3FbtPTjIgeUMXu2Y5kbLw/exec

export default Sitemap;
