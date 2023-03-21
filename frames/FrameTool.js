/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import InterStellarParentModal from "@/components/InterStellarParentModal";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";

function FrameTool() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  return (
    <div className="">
      <div className=" mb-10 z-0">
        <div className="lg:p-32 flex lg:flex-row flex-col lg:items-center">
          <div className="lg:mx-10 lg:w-[400px] hidden lg:block rounded-2xl bg-transparent">
            <iframe
              frameborder="0"
              height="700"
              width="100%"
              className=" bg-transparent rounded-3xl"
              allow="clipboard-read ; clipboard-write; web-share ; accelerometer; autoplay ; camera; gyroscope ; payment; geolocation *"
              src="https://flooz.trade/embed/trade?swapDisabled=false&swapToTokenAddress=0x7029994f28fd39ff934A96b25591D250A2183f67&swapLockToToken=true&onRampDisabled=false&onRampAsDefault=true&onRampDefaultAmount=200&network=bsc&lightMode=false&primaryColor=%235e38f4&roundedCorners=28&padding=20"
            ></iframe>
          </div>
          <div className="lg:px-6">
            <div>
              <h1 className="text-base font-bold">BUY ON DEX</h1>
              <div className="flex items-center space-x-7 mt-3">
                <a
                  className="hover:text-slate-400 cursor-pointer"
                  href="https://pancakeswap.finance/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f67&inputCurrency=BNB"
                >
                  <div className="h-fit py-4 rounded-md overflow-hidden lg:h-32 w-32 relative flex flex-col items-center justify-center">
                    <img
                      src="/frameIconBg.png"
                      className="absolute inset-0 h-full w-full object-cover"
                      alt=""
                    />
                    <img
                      className="h-10 lg:h-16 grayscale group-hover:grayscale-0"
                      src="/pancakeIcon.png"
                      alt=""
                    />
                    <div className="flex items-center justify-center mt-4">
                      <span className="text-[11px] font-poppins font-medium">
                        Pancake Swap
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 ml-1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
                <a
                  className="hover:text-slate-400 cursor-pointer"
                  href="https://poocoin.app/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f7"
                >
                  <div className="h-fit py-4 rounded-md overflow-hidden lg:h-32  w-32 relative flex flex-col items-center justify-center">
                    <img
                      src="/frameIconBg.png"
                      className="absolute inset-0 h-full w-full object-cover"
                      alt=""
                    />
                    <img
                      className="h-10 lg:h-16 grayscale"
                      src="/pooIcon.png"
                      alt=""
                    />
                    <div className="flex items-center justify-center mt-4">
                      <span className="text-xs font-poppins font-medium">
                        Poocoin
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 ml-1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <h1 className="text-base font-bold mt-7">BUY ON CEX</h1>
              <div className="flex items-center flex-wrap">
                <a
                  href="https://www.coinstore.com/#/spot/FRGSTUSDT"
                  className="mr-7 mt-5 hover:text-slate-400 cursor-pointer"
                >
                  <div className="h-fit py-4 rounded-md overflow-hidden lg:h-32  w-32 relative flex flex-col items-center justify-center">
                    <img
                      src="/frameIconBg.png"
                      className="absolute inset-0 h-full w-full object-cover"
                      alt=""
                    />
                    <img
                      className="h-10 lg:h-16 grayscale"
                      src="/coinstore.png"
                      alt=""
                    />
                    <div className="flex items-center justify-center mt-4">
                      <span className="text-xs font-poppins font-medium">
                        Coinstore
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 ml-1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
                <a
                  href="https://p2pb2b.com/trade/FRGST_USDT/"
                  className="mr-7 mt-5 hover:text-slate-400 cursor-pointer"
                >
                  <div className="h-fit py-4 rounded-md overflow-hidden lg:h-32  w-32 relative flex flex-col items-center justify-center">
                    <img
                      src="/frameIconBg.png"
                      className="absolute inset-0 h-full w-full object-cover"
                      alt=""
                    />
                    <img
                      className="h-10 lg:h-16 grayscale"
                      src="/p28.png"
                      alt=""
                    />
                    <div className="flex items-center justify-center mt-4">
                      <span className="text-xs font-poppins font-medium">
                        P2B
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 ml-1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
                <a
                  href="https://coinsbit.io/trade_classic/FRGST_mUSDT"
                  className="mr-7 mt-5 hover:text-slate-400 cursor-pointer"
                >
                  <div className="h-fit py-4 rounded-md overflow-hidden lg:h-32  w-32 relative flex flex-col items-center justify-center">
                    <img
                      src="/frameIconBg.png"
                      className="absolute inset-0 h-full w-full object-cover"
                      alt=""
                    />
                    <img
                      className="h-10 lg:h-16 grayscale"
                      src="/coinsbit.png"
                      alt=""
                    />
                    <div className="flex items-center justify-center mt-4">
                      <span className="text-xs font-poppins font-medium">
                        Poocoin
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 ml-1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrameTool;
