/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import InterStellarParentModal from "@/components/InterStellarParentModal";
import Link from "next/link";
import React, { useState } from "react";

function BlackHole() {
  return (
    <div>
      <div className="relative mb-10 z-0">
        <img
          src="/images/frgstLogoText.svg"
          className="absolute top-10 right-0 h-32 hidden lg:block"
          alt=""
        />
        <img
          src="/images/frgstLogoTextInverted.svg"
          className="absolute -bottom-10 -left-10 h-32 hidden lg:block"
          alt=""
        />
        <div className="lg:w-[60%] lg:p-32 ">
          <h2 className="hidden lg:block text-primaryGrey text-sm font-medium">
            BLACK HOLE
          </h2>
          <h1 className="text-2xl lg:text-7xl font-semibold text-white leading-[1.3] font-berlin uppercase  mt-5">
            Into the Black hole
          </h1>
          <p className="hidden lg:block text-sm text-white leading-7 mt-4 font-poppins">
            Brave the unknown and embark on a journey into a black hole&apos;s
            embrace to uncover secrets beyond reality. Embrace the darkness and
            <span className="inline-flex items-center relative text-black w-96 ml-3">
              <span className="inline-flex z-10 items-center font-poppins">
                <span>unlock the mysteries of the universe.</span>
                <iconify-icon
                  className="z-10"
                  icon="ph:arrow-down"
                ></iconify-icon>
              </span>
              <span className="absolute -top-3 -left-8">
                <img
                  src="/images/textScribble3.png"
                  className="w-80 h-12 z-0"
                  alt=""
                />
              </span>
            </span>
          </p>

          <div className="hidden lg:grid grid-cols-2 mt-16 w-[600px]">
            <a href="https://pancakeswap.finance/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f67&inputCurrency=BNB">
              <div className="h-20 relative flex items-center overflow-hidden cursor-pointer">
                <img
                  src="/images/borderBox.svg"
                  className="absolute -right-[1px]  -bottom-1"
                  alt=""
                />
                <div className="w-[30%]">
                  <img src="/images/buy.png" alt="" />
                </div>
                <div className="ml-6">
                  <h1 className="font-bold uppercase">BUY</h1>
                  <p className="text-sm text-secondaryGrey font-poppins">
                    Buy froggies token now
                  </p>
                </div>
              </div>
            </a>
            <a href="/InterStellar">
              <div className="relative h-20 flex items-center overflow-hidden cursor-pointer">
                <img
                  src="/images/borderBox.svg"
                  className="absolute -left-1  -bottom-1 "
                  alt=""
                />
                <div className="w-[30%]">
                  <img
                    src="/images/interstellar.png"
                    className="-mt-1"
                    alt=""
                  />
                </div>
                <div className="ml-6">
                  <h1 className="font-bold uppercase">interstellar</h1>
                  <p className="text-sm text-secondaryGrey font-poppins">
                    Learn more
                  </p>
                </div>
              </div>
            </a>
            <div className="h-20 relative flex items-center overflow-hidden cursor-pointer">
              <img
                src="/images/borderBox.svg"
                className="absolute inset-0 "
                alt=""
              />
              <div className="w-[30%]">
                <img src="/images/manifesto.png" className="mt-5" alt="" />
              </div>
              <Link href="/Manifesto">
                <div className="ml-6">
                  <h1 className="font-bold uppercase">Manifesto</h1>
                  <p className="text-sm text-secondaryGrey font-poppins">
                    Short cosmic trip
                  </p>
                </div>
              </Link>
            </div>
            <Link href="/Astronomics">
              <div className="h-20 relative flex items-center  overflow-hidden cursor-pointer">
                <img
                  src="/images/borderBox.svg"
                  className="absolute -left-1"
                  alt=""
                />
                <div className="w-[30%]">
                  <img src="/images/astronomics.png" alt="" />
                </div>
                <div className="ml-6">
                  <h1 className="font-bold uppercase">Astronomics</h1>
                  <p className="text-sm text-secondaryGrey font-poppins">
                    Outerspace finance
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid lg:hidden grid-cols-1 mt-7 lg:mt-16 w-[300px] py-2">
            <a
              rel="noopener noreferrer"
              target={"_blank"}
              href="https://pancakeswap.finance/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f67&inputCurrency=BNB"
            >
              <div className="h-20 relative flex items-center overflow-hidden cursor-pointer">
                <img
                  src="/images/borderBox.svg"
                  className="absolute left-0  -bottom-1"
                  alt=""
                />
                <div className="w-[30%]">
                  <img src="/images/buy.png" alt="" />
                </div>
                <div className="ml-6">
                  <h1 className="font-bold uppercase">BUY</h1>
                  <p className="text-sm text-secondaryGrey font-poppins">
                    Buy froggies token now
                  </p>
                </div>
              </div>
            </a>
            <a rel="noreferrer" target={"_blank"} href="/InterStellar">
              <div className="relative h-20 flex items-center overflow-hidden cursor-pointer">
                <img
                  src="/images/borderBox.svg"
                  className="absolute -left-0  -top-0 "
                  alt=""
                />
                <div className="w-[30%]">
                  <img
                    src="/images/interstellar.png"
                    className="-mt-1"
                    alt=""
                  />
                </div>
                <div className="ml-6">
                  <h1 className="font-bold uppercase">interstellar</h1>
                  <p className="text-sm text-secondaryGrey font-poppins">
                    Learn more
                  </p>
                </div>
              </div>
            </a>
            <a rel="noreferrer" target={"_blank"} href="/Manifesto">
              <div className="h-20 relative flex items-center overflow-hidden cursor-pointer">
                <img
                  src="/images/borderBox.svg"
                  className="absolute inset-0 -top-1"
                  alt=""
                />
                <div className="w-[30%]">
                  <img src="/images/manifesto.png" className="mt-5" alt="" />
                </div>
                <div className="ml-6">
                  <h1 className="font-bold uppercase">Manifesto</h1>
                  <p className="text-sm text-secondaryGrey font-poppins">
                    Short cosmic trip
                  </p>
                </div>
              </div>
            </a>
            <a rel="noreferrer" target={"_blank"} href="/Astronomics">
              <div className="h-20 relative flex items-center  overflow-hidden cursor-pointer -mt-1">
                <img
                  src="/images/borderBox.svg"
                  className="absolute -left-0 -top-1"
                  alt=""
                />
                <div className="w-[30%]">
                  <img src="/images/astronomics.png" alt="" />
                </div>
                <div className="ml-6">
                  <h1 className="font-bold uppercase">Astronomics</h1>
                  <p className="text-sm text-secondaryGrey font-poppins">
                    Outerspace finance
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="flex text-xs lg:text-sm items-baseline mt-7 lg:mt-16 whitespace-nowrap uppercase font-bold font-poppins">
            <span>To the moon and never back .</span>
            <div className="ml-1 w-20 h-[1px] bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlackHole;
