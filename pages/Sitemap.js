import NavbarDark from "@/components/NavbarDark";
import React from "react";

function Sitemap() {
  return (
    <div id="scrollContent" className="h-screen overflow-auto">
      <NavbarDark />
      <div className="h-[350px] bg-[#030835] p-32">
        <h1 className="text-7xl text-white font-bold mt-16">SITEMAP</h1>
      </div>
      <div className="px-44 py-16 flex">
        <div className="flex space-x-20 mx-auto">
          <div>
            <h1 className="font-bold text-2xl uppercase">ABOUT</h1>
            <ul className="space-y-2 mt-4 text-base">
              <li className="font-poppins">Stellar Doc</li>
              <li className="font-poppins">Manifesto</li>
              <li className="font-poppins">Everlost</li>
              <li className="font-poppins">Team</li>
              <li className="font-poppins">FAQ</li>
              <li className="font-poppins">Partners</li>
              <li className="font-poppins">Ambassador Program</li>
              <li className="font-poppins">Liquidity Lock</li>
              <li className="font-poppins">KYC</li>
              <li className="font-poppins">P2E</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl uppercase">Interstellar</h1>
            <ul className="space-y-2 mt-4 text-base">
              <li className="font-poppins">Fueling Success</li>
              <li className="font-poppins">Orbiting P2E</li>
              <li className="font-poppins">Stellar Innovation</li>
              <li className="font-poppins">Expanding Horizon</li>
              <li className="font-poppins">Galactic Contributions</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl uppercase">Listings</h1>
            <ul className="space-y-2 mt-4 text-base">
              <li className="font-poppins">Bsc scan</li>
              <li className="font-poppins">CoinMarketCap</li>
              <li className="font-poppins">CoinGecko</li>
              <li className="font-poppins">Crypto.com</li>
              <li className="font-poppins">Dextools</li>
              <li className="font-poppins">Coinstore</li>
            </ul>
          </div>
          <div className="">
            <h1 className="font-bold text-2xl uppercase">Socials</h1>
            <ul className="space-y-2 mt-4 text-base">
              <li className="font-poppins">Official Telegram</li>
              <li className="font-poppins">Twitter</li>
              <li className="font-poppins">Medium</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sitemap;
