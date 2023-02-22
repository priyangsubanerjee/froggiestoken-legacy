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
        url: "https://frog-web-scraper.vercel.app/",
      });
      const circulatingSupply = axiosResponse.data.circulatingSupply;
      // first 3 digits of circulating supply
      const firstThreeDigits = circulatingSupply.toString().slice(0, 3);
      const amt = 1000 - parseInt(firstThreeDigits);
      // put decimal after 2nd digit
      const burntAmt = `${amt.toString().slice(0, 2)}.${amt
        .toString()
        .slice(2, 3)}`;
      setBurntAmount("36.3");
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
