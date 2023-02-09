/* eslint-disable @next/next/no-img-element */
import React from "react";

function FuelingSuccess({
  galacticContributionsModalOpen,
  setGalacticContributionsModalOpen,
  standAlone = false,
}) {
  return (
    <div>
      {galacticContributionsModalOpen && (
        <div className="bg-[#010417] fixed inset-0 h-full w-full z-30 p-16 overflow-auto">
          {standAlone == false && (
            <div>
              <img
                onClick={() => setGalacticContributionsModalOpen(false)}
                src="/images/hamburger.png"
                className="h-5 cursor-pointer"
                alt=""
              />
            </div>
          )}
          <div className="mt-16 w-[65%]">
            <h1 className="uppercase text-5xl text-white font-extrabold">
              Galactic contributions
            </h1>
            <div className="mt-5 text-white">
              <div>
                <p className="mt-1 leading-7 font-poppins">
                  Submit your ideas and become a contributor in the galaxy.
                </p>
              </div>
              <textarea
                name=""
                id=""
                rows={7}
                className="w-[600px] text-black leading-7 bg-[#B1B3C4] font-poppins p-7 placeholder:text-black rounded-md mt-10"
                placeholder="Add a description"
              ></textarea>
            </div>
            <button className="uppercase font-medium text-sm text-black bg-[#B1B3C4] w-32 h-12 text-center cursor-pointer rounded-md mt-5">
              Send
            </button>
          </div>
          <img
            src="/images/galacticContribution.svg"
            className={`fixed top-0 right-0  transition-all duration-700}`}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default FuelingSuccess;
