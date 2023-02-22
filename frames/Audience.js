/* eslint-disable @next/next/no-img-element */
import Completed from "@/components/events/Completed";
import InProgress from "@/components/events/inProgress";
import ToCome from "@/components/events/toCome";
import React from "react";

function Audience() {
  return (
    <div className="lg:w-[60%] lg:p-32 ">
      <h2 className="hidden lg:block text-primaryGrey text-sm font-medium">
        PROGRESS
      </h2>
      <div className="relative mt-5">
        <h1 className="text-2xl lg:text-7xl font-extrabold text-white leading-[1.3] font-berlin">
          TEAM IS CONSTANTLY
        </h1>
        <h1 className="text-2xl lg:text-7xl font-extrabold text-white leading-[1.3] font-berlin">
          BUILDING; WHATS NEXT?
        </h1>
      </div>

      <div className="deadlineScrollView h-[250px] lg:h-[300px] w-full lg:w-[600px] overflow-auto mt-10 lg:mt-16 space-y-5">
        <Completed name="P2E Beta testing" date="16th Jan 2023" />
        <Completed
          name="Migration to upgraded BSC contract"
          date="16th Jan 2023"
        />
        <Completed
          name="CoinMarketCap and Coingecko listing"
          date="16th Jan 2023"
        />
        <Completed
          name="Succesfull launch and adaptation of Ambassador program"
          date="16th Jan 2023"
        />
        <Completed name="Create our 3D mascot: Froggie" date="16th Jan 2023" />
        <Completed name="Milestone: 2,000 $FRGST holders" date="21 Feb 2023" />
        <Completed name="Kill one zero" date="22 Feb 2023" />
        <Completed name="Staking contract development" date="20 Feb 2023" />

        <InProgress
          name="Milestone: 5,000 $FRGST holders"
          date="16th Jan 2023"
        />
        <InProgress
          name="P2E Mobile compatability and Wallet Connect integration"
          date="16th Jan 2023"
        />
        <InProgress
          name="Increasing marketing opportunities"
          date="16th Jan 2023"
        />
        <InProgress name="Increase Ambassador Program" date="16th Jan 2023" />
        <InProgress name="Burn events" date="16th Jan 2023" />
        <InProgress name="Video's featuring our mascot" date="16th Jan 2023" />
        <InProgress
          name="Find more meaningful partnerships"
          date="16th Jan 2023"
        />
        <ToCome name="Testing of staking platform" date="16th Jan 2023" />
        <ToCome name="Continued development of P2E" date="16th Jan 2023" />
        <ToCome
          name="Start planning on an NFT usecase collection"
          date="16th Jan 2023"
        />
        <ToCome name="Release Staking Platform" date="16th Jan 2023" />
        <ToCome
          name="Listing on a CEX that fits our needs"
          date="16th Jan 2023"
        />
        <ToCome name="More (list will be updated)" date="16th Jan 2023" />
      </div>

      <div className="flex items-baseline mt-16 text-xs lg:text-base whitespace-nowrap font-poppins">
        <span>Ready to see even more ? </span>
        <div className="w-20 h-[1px] bg-white"></div>
        <a className="hidden lg:inline-block" href="#4">
          <div className="flex items-center relative text-black w-36 ml-5">
            <div className="flex z-10 items-center font-poppins">
              <span>Deeper Dive</span>
              <iconify-icon
                className="z-10"
                icon="ph:arrow-down"
              ></iconify-icon>
            </div>
            <div className="absolute -top-[2px] -left-4 w-auto">
              <img
                src="/images/textScribbleVector.png"
                className="w-36 h-6 z-0"
                alt=""
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Audience;
