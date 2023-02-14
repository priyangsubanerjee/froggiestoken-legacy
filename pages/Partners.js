/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Navbar from "@/components/Navbar";

import React from "react";
import Marquee from "react-fast-marquee";

function Partners() {
  return (
    <div id="scrollContent" className="h-screen overflow-auto">
      <Navbar />
      <div className="h-[150px] lg:h-[350px] bg-[#030835] lg:p-32 py-20 px-5">
        <h1 className="text-2xl lg:text-7xl text-white font-bold mt-4 lg:mt-16 font-berlin">
          OUR PARTNERS
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col mt-6 lg:mt-0">
        <div className="lg:w-[60%] px-5 lg:px-44 lg:py-20">
          <h1 className="text-xl lg:text-5xl font-medium leading-[1.4] font-berlin">
            Uniting Forces to Reach for the Stars
          </h1>
          <p className="text-xs lg:text-sm text-[#010417] leading-6 lg:leading-7 mt-5 font-poppins">
            Even in the far Galaxies permanent foundations are created through
            interplanetary connections, think of the stars; Sagittarius, Leo,
            Taurus. <br />
            <br /> We at FROGGIES connect in the same way through meaningful
            partnerships, those that really matter now, and many light-years to
            come.
          </p>
        </div>
        <div className="hidden lg:flex w-[40%] overflow-hidden relative">
          <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-white via-white/90 to-transparent z-10"></div>
          <Marquee className="rotate-90" gradient={false} speed={20}>
            <div className="-rotate-90">
              <img
                src="/partners/yahoo.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/yahoo_m.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/binance.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/coinstore.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/coingecko.png"
                className="h-32 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/crypto.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/hypemytoken.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/twitter.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img src="/partners/c.png" className="h-24 grayscale" alt="" />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/coindesk.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/nasdaq.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/bloomberg.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img src="/partners/ibt.png" className="h-24 grayscale" alt="" />
            </div>
          </Marquee>
          <Marquee
            direction="right"
            className="-ml-44 rotate-90"
            gradient={false}
            speed={20}
          >
            <div className="-rotate-90">
              <img
                src="/partners/marketwatch.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/digitaljournal.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/coinmarketcap.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/forbes.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/cointelegraph.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/pancakeswap.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/newsfile.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/coinsbit.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div className="-rotate-90">
              <img
                src="/partners/coinlore.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
          </Marquee>
          <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>
        <div className="lg:hidden mt-10">
          <Marquee gradient={false} speed={15}>
            <div>
              <img
                src="/partners/yahoo.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/yahoo_m.svg"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/binance.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/coinstore.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/coingecko.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>{" "}
            <div>
              <img
                src="/partners/crypto.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/hypemytoken.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/twitter.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img src="/partners/c.png" className="h-24 grayscale" alt="" />
            </div>
            <div>
              <img
                src="/partners/coindesk.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/nasdaq.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/bloomberg.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img src="/partners/ibt.png" className="h-24 grayscale" alt="" />
            </div>
            <div>
              <img
                src="/partners/marketwatch.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/digitaljournal.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/coinmarketcap.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/forbes.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/cointelegraph.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/pancakeswap.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/newslife.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/coinsbit.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
            <div>
              <img
                src="/partners/coinlore.png"
                className="h-24 grayscale"
                alt=""
              />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Partners;
