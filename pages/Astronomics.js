/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Astronomics() {
  const [burntAmount, setBurntAmount] = useState(0);
  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    (async () => {
      const axiosResponse = await axios.request({
        method: "GET",
        url: "/api/get/circulatingSupply",
      });
      const { circulatingSupply } = axiosResponse.data;
      setBurntAmount(circulatingSupply);
    })();
  }, []);

  const countDownTimer = () => {
    const launchDate = new Date("October 24, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = launchDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setCountDown(
      `${Math.abs(days)} days : ${Math.abs(hours)} hrs : ${Math.abs(
        minutes
      )} mins`
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      countDownTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen overflow-auto bg-[#030835]">
      <Navbar />
      <img
        src="/images/frogVector2.png"
        className="fixed bottom-0 right-0 object-contain -0 hidden lg:block"
        alt=""
      />
      <div
        id="scrollContent"
        className="lg:p-32 px-5 py-7 w-full h-screen fixed inset-0 z-10 overflow-auto"
      >
        <div className="space-x-4 mt-10">
          <h1 className="text-2xl text-center lg:text-left lg:text-7xl text-white font-bold uppercase font-berlin">
            ASTRONOMICS
          </h1>
        </div>
        <div className="lg:border-y border-[#DCDCDC] lg:mt-7 py-7 lg:w-[60%] flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="space-y-4 text-center lg:text-left mt-8 lg:mt-0">
            <h2 className="text-white font-semibold text-sm lg:text-base">
              TOTAL SUPPLY
            </h2>
            <h1 className="font-extrabold text-base lg:text-xl uppercase text-secondaryGrey font-berlin">
              100 Quadrillion
            </h1>
            <h2 className="text-white font-bold text-sm lg:text-base">
              Launch date - 24/10/22
            </h2>
            <h1 className="font-extrabold text-base lg:text-xl uppercase text-secondaryGrey font-berlin">
              {countDown}
            </h1>
          </div>
          <div className="w-[200px] h-[100px] lg:w-[300px] lg:h-[140px] border border-[#DCDCDC] rounded-md flex flex-col items-center justify-center relative">
            <img
              src="/images/burnw1.svg"
              className="absolute bottom-0 -left-0 h-full"
              alt=""
            />
            <img
              src="/images/burnw2.svg"
              className="absolute top-0 -right-0 h-full"
              alt=""
            />
            <h1 className="text-white uppercase font-semibold">Total burn</h1>
            <h1 className="text-5xl text-white/0 font-semibold font-berlin mt-2 font-outline">
              {burntAmount}%
            </h1>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-tertiaryGrey text-center">
            Binance Smart Chain Contract :
            <span className="font-medium inline-flex items-center justify-center">
              <span className="w-[250px] text-ellipsis overflow-hidden whitespace-nowrap">
                0x7029994f28fd39ff934A96b25591D250A2183f67
              </span>
              <span
                onClick={() => {
                  const copyText = "0x7029994f28fd39ff934A96b25591D250A2183f67";
                  navigator.clipboard.writeText(copyText);
                  alert("Copied !");
                }}
                className="text-white ml-4 cursor-pointer"
              >
                <iconify-icon
                  height="20"
                  width="20"
                  icon="material-symbols:content-copy-outline"
                ></iconify-icon>
              </span>
            </span>
          </p>
        </div>
        <div className="lg:w-[600px] scale-75 lg:scale-100 -mt-20 lg:mt-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 w-[300px] lg:w-full mx-auto">
            <div className="h-20 w-full relative flex items-center justify-center overflow-hidden cursor-pointer text-white">
              <img
                src="/images/borderBox.svg"
                className="absolute -left-0  -bottom-1 "
                alt=""
              />
              <h1 className="font-poppins uppercase mt-[6px]">
                Reflections: 3%
              </h1>
            </div>
            <div className="relative h-20 flex items-center justify-center overflow-hidden cursor-pointer text-white">
              <img
                src="/images/borderBox.svg"
                className="absolute lg:-left-1 lg:-bottom-1"
                alt=""
              />
              <h1 className="font-poppins uppercase mt-[6px]">
                Dev/Marketing: 3%
              </h1>
            </div>
            <div className="h-20 relative flex items-center justify-center overflow-hidden cursor-pointer text-white">
              <img
                src="/images/borderBox.svg"
                className="absolute inset-0 "
                alt=""
              />
              <h1 className="font-poppins uppercase mt-[6px]">
                FRGST Burn: 2%
              </h1>
            </div>
            <div className="h-20 relative flex items-center justify-center overflow-hidden cursor-pointer text-white">
              <img
                src="/images/borderBox.svg"
                className="absolute lg:-left-1"
                alt=""
              />
              <h1 className="font-poppins uppercase mt-[6px]">
                Liquidity pool: 2%
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Astronomics;
