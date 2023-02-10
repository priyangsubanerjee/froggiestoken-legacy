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
        className={`fixed inset-x-0 bottom-5 h-fit w-full z-10 flex items-center justify-around text-white`}
      >
        <a
          href="#1"
          className={`${
            active == 1 ? "bg-white text-black" : "bg-[#030835] text-white"
          }  px-5 py-2 rounded-md text-center transition-all`}
        >
          <div className="space-y-1">
            <p className="text-secondaryGrey text-xs">01</p>
            <p className="uppercase text-sm font-poppins">About us</p>
          </div>
        </a>
        <a
          href="#2"
          className={`${
            active == 2 ? "bg-white text-black" : "bg-[#030835] text-white"
          }  px-5 py-2 rounded-md text-center transition-all`}
        >
          <div className="space-y-1">
            <p className="text-secondaryGrey text-xs">02</p>
            <p className="uppercase text-sm font-poppins">Team</p>
          </div>
        </a>{" "}
        <a
          href="#3"
          className={`${
            active == 3 ? "bg-white text-black" : "bg-[#030835] text-white"
          }  px-5 py-2 rounded-md text-center transition-all`}
        >
          <div className="space-y-1">
            <p className="text-secondaryGrey text-xs">03</p>
            <p className="uppercase text-sm font-poppins">Audience</p>
          </div>
        </a>
        <a
          href="#4"
          className={`${
            active == 4 ? "bg-white text-black" : "bg-[#030835] text-white"
          }  px-5 py-2 rounded-md text-center transition-all`}
        >
          <div className="space-y-1">
            <p className="text-secondaryGrey text-xs">04</p>
            <p className="uppercase text-sm font-poppins">Black Hole</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default NavigationBars;
