/* eslint-disable @next/next/no-img-element */
import React from "react";

function FuelingSuccess({
  stellarInnovationModalOpen,
  setStellarInnovationModalOpen,
  standAlone = false,
}) {
  return (
    <div>
      {stellarInnovationModalOpen && (
        <div className="bg-[#010417] fixed inset-0 h-full w-full z-30 px-5 py-7 lg:p-16 overflow-auto">
          {standAlone == false && (
            <div>
              <img
                onClick={() => setStellarInnovationModalOpen(false)}
                src="/images/hamburger.png"
                className="h-3 lg:h-5 cursor-pointer"
                alt=""
              />
            </div>
          )}
          <div className="mt-7 lg:mt-16 lg:w-[65%] text-sm lg:text-base">
            <h1 className="uppercase text-2xl lg:text-5xl text-white font-extrabold">
              Stellar innovation
            </h1>
            <div className="mt-10 text-white space-y-8">
              <div>
                <p className="mt-1 leading-7">
                  Stellar amusement <br /> As we release our first part of the
                  entertainment platform we will provide our <br /> holders with
                  more usability for their Froggies Token <br />
                  <br /> NFT with galactic use-case <br />
                  <br /> Imagine an NFT that does not only have the value of
                  art, but also contains an <br /> actual use-case. Think of
                  rewards, staking NFTs, lotteries and more. <br />
                  <br /> Ultimate destination <br /> Prepare for the Ultimate
                  Destination by starting the development of something <br />{" "}
                  unique (we cannot disclose, others are watching). This will
                  put Froggies Token on <br /> the map for becoming one of the
                  top Memecoins on the market.
                </p>
              </div>
            </div>
          </div>
          <img
            src="/images/stellarInnovation.svg"
            className={`fixed bottom-0 right-0  transition-all duration-700 hidden lg:block`}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default FuelingSuccess;
