/* eslint-disable @next/next/no-img-element */
import Completed from "@/components/events/Completed";
import InProgress from "@/components/events/inProgress";
import ToCome from "@/components/events/toCome";
import React from "react";

function Audience() {
  return (
    <div className="lg:w-[60%] lg:p-32 ">
      <h2 className=" text-primaryGrey text-sm font-medium">AUDIENCE</h2>
      <div className="relative">
        <h1 className="text-6xl lg:whitespace-nowrap font-semibold text-white leading-[1.3] uppercase font-berlin">
          TEAM IS CONSTANTLY
        </h1>
        <h1 className="text-6xl lg:whitespace-nowrap font-semibold text-white leading-[1.3] uppercase font-berlin">
          BUILDING; WHATS NEXT?
        </h1>
      </div>

      <div className="deadlineScrollView h-[300px] w-full lg:w-[600px] overflow-auto mt-16 space-y-5">
        <Completed name="P2E Beta testing" date="16th Jan 2023" />
        <Completed
          name="Migration to upgraded BSC contract"
          date="16th Jan 2023"
        />
        <Completed
          name="CoinMarketCap and Coingecko listing g"
          date="16th Jan 2023"
        />
        <Completed
          name="Succesfull launch and adaptation of Ambassador program"
          date="16th Jan 2023"
        />
        <Completed name="Create our 3D mascot: Froggie" date="16th Jan 2023" />
        <InProgress
          name=" P2E Mobile comparability and Connect Wallet integration"
          date="16th Jan 2023"
        />
        <InProgress
          name="Milestone: 2,000 $FRGST holders"
          date="16th Jan 2023"
        />
        <InProgress name="Kill one zero" date="16th Jan 2023" />
        <InProgress name="Staking contract development" date="16th Jan 2023" />
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

      <div className="flex items-baseline mt-16 whitespace-nowrap font-poppins">
        <span>Ready to see even more ? </span>
        <div className="w-20 h-[1px] bg-white"></div>
        <a href="#4">
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
