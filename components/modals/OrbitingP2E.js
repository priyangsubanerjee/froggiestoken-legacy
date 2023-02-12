/* eslint-disable @next/next/no-img-element */
import React from "react";

function FuelingSuccess({
  orbitingP2EModalOpen,
  setOrbitingP2EModalOpen,
  standAlone = false,
}) {
  return (
    <div>
      {orbitingP2EModalOpen && (
        <div className="bg-[#010417] fixed inset-0 h-full w-full z-30 lg:p-16 px-5 py-7 overflow-auto">
          {standAlone == false && (
            <div>
              <img
                onClick={() => setOrbitingP2EModalOpen(false)}
                src="/images/hamburger.png"
                className="h-3 lg:h-5 cursor-pointer"
                alt=""
              />
            </div>
          )}
          <div className="mt-7 lg:mt-16 lg:w-[65%]">
            <h1 className="uppercase text-2xl lg:text-5xl text-white font-extrabold">
              orbiting p2e
            </h1>
            <div className="mt-10 text-white space-y-8 text-sm lg:text-base">
              <div>
                <p className="mt-1 leading-7">
                  Continuous development of our P2E <br /> More functionalities,
                  visuals, levels, and gameplay will be added to Everlost.{" "}
                  <br />
                  <br />
                  Staking platform release <br /> The time has arrived to reward
                  those that believe in us. Stake your FROGGIES <br /> Token and
                  gain more rewards with time. <br />
                  <br /> Space Entertainment <br /> We are planning and
                  development of our entertainment platform. This platform{" "}
                  <br /> will allow our holders to use their Froggies Token for
                  means of entertainment and <br /> more game play. <br />
                  <br /> Share our wealth from Galaxy <br /> We are aiming for a
                  listing on a top 50 Centralized Exchange to allow more <br />{" "}
                  $FRGST to be traded and increase our overall volume and
                  exposure.
                </p>
              </div>
            </div>
          </div>
          <img
            src="/images/orbitingP2e.svg"
            className={`fixed bottom-0 right-0 transition-all duration-700 hidden lg:block`}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default FuelingSuccess;
