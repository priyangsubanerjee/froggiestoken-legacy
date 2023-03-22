import React from "react";

function NavigationBars({ active, totalBars }) {
  return (
    <div>
      <div
        className={`fixed hidden lg:left-0 lg:top-0 inset-x-0 bottom-0 h-16 lg:h-full w-full lg:w-fit z-10 lg:flex lg:flex-col items-center px-10 lg:justify-center justify-around lg:space-y-5`}
      >
        {[...Array(totalBars)].map((_, i) => {
          return (
            <a key={i} href={`#${i + 1}`}>
              <div
                className={`lg:h-20 lg:w-1 h-1 w-16 rounded-md ${
                  i + 1 == active ? "bg-white" : "bg-white/30"
                } transition-all duration-500`}
              ></div>
            </a>
          );
        })}
      </div>
      <div
        className={`fixed inset-x-0 bottom-0 h-fit w-full z-10 lg:hidden flex px-4 py-3 space-x-5 scrollbar-hide bg-[#19192e] text-white overflow-auto`}
      >
        <a
          href="#1"
          className={`${
            active == 1 ? "bg-white text-black" : "bg-[#030835] text-white"
          }  px-5 py-2 rounded-md text-center transition-all shrink-0`}
        >
          <div className="space-y-1">
            <p
              className={`text-xs ${
                active == 1 ? "text-black/60" : "text-secondaryGrey"
              }`}
            >
              01
            </p>
            <p className="uppercase font-medium text-xs font-poppins">
              About us
            </p>
          </div>
        </a>
        <a
          href="#2"
          className={`${
            active == 2 ? "bg-white text-black" : "bg-[#030835] text-white"
          }  px-5 py-2 rounded-md text-center transition-all shrink-0`}
        >
          <div className="space-y-1">
            <p
              className={`text-xs ${
                active == 2 ? "text-black/60" : "text-secondaryGrey"
              }`}
            >
              02
            </p>
            <p className="uppercase font-medium text-xs font-poppins">Team</p>
          </div>
        </a>
        <a
          href="#3"
          className={`${
            active == 3 ? "bg-white text-black" : "bg-[#030835] text-white"
          }  px-3 py-2 rounded-md text-center transition-all`}
        >
          <div className="space-y-1">
            <p
              className={` text-xs ${
                active == 3 ? "text-black/60" : "text-secondaryGrey"
              }`}
            >
              03
            </p>
            <p className="uppercase font-medium text-xs font-poppins">
              Progress
            </p>
          </div>
        </a>
        <a
          href="#4"
          className={`${
            active == 4 ? "bg-white text-black" : "bg-[#030835] text-white"
          }  px-3 py-2 rounded-md text-center transition-all shrink-0`}
        >
          <div className="space-y-1">
            <p
              className={`text-xs ${
                active == 4 ? "text-black/60" : "text-secondaryGrey"
              }`}
            >
              04
            </p>
            <p className="uppercase font-medium text-xs font-poppins">Buy</p>
          </div>
        </a>
        <a
          href="#5"
          className={`${
            active == 5 ? "bg-white text-black" : "bg-[#030835] text-white"
          }  px-3 py-2 rounded-md text-center transition-all shrink-0`}
        >
          <div className="space-y-1">
            <p
              className={`text-xs ${
                active == 5 ? "text-black/60" : "text-secondaryGrey"
              }`}
            >
              05
            </p>
            <p className="uppercase font-medium text-xs font-poppins">
              Black Hole
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default NavigationBars;
