/* eslint-disable @next/next/no-img-element */
import React from "react";

function FuelingSuccess({
  expandingHorizonsModalOpen,
  setExpandingHorizonsModalOpen,
  standAlone = false,
}) {
  return (
    <div>
      {expandingHorizonsModalOpen && (
        <div className="bg-[#010417] fixed inset-0 h-full w-full z-30 px-5 py-7 lg:p-16 overflow-auto">
          {standAlone == false && (
            <div>
              <img
                onClick={() => setExpandingHorizonsModalOpen(false)}
                src="/images/hamburger.png"
                className="h-3 lg:h-5 cursor-pointer"
                alt=""
              />
            </div>
          )}
          <div className="mt-7 lg:mt-16 w-[65%]">
            <h1 className="uppercase text-2xl lg:text-5xl text-white font-extrabold">
              Expanding Horizons
            </h1>
            <div className="mt-10 text-white space-y-8">
              <div>
                <p className="mt-1 leading-7 font-poppin text-sm lg:text-bases">
                  Sharing value <br /> By marketing and developing of our
                  &apos;Ultimate Destination&apos; project, the universe <br />{" "}
                  will be enlightened with our plans, all eyes will be on
                  FROGGIES Token. <br />
                  <br /> Valued on all planets <br /> We will continue
                  collaborations with third parties to turn FROGGIES Token into
                  a <br /> means of real-life payments. Envision online stores
                  where you can check-out <br /> using your Froggies Token!{" "}
                  <br />
                  <br /> Full Booster Launch <br /> The future release of our
                  entertainment platform will be entirely powered by <br />{" "}
                  $FRGST. A whole FROGGIEVERSE of play to earn gaming systems.
                </p>
              </div>
            </div>
          </div>
          <img
            src="/images/expandingHorizons.svg"
            className={`fixed bottom-0 right-1/2 translate-x-1/2  transition-all duration-700}`}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default FuelingSuccess;
