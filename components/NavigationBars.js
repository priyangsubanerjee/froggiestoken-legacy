import React from "react";

function NavigationBars({ active, totalBars }) {
  return (
    <div
      className={`fixed lg:left-0 lg:top-0 inset-x-0 bottom-0 h-16 lg:h-full w-full lg:w-fit z-10 flex lg:flex-col items-center px-10 lg:justify-center justify-around lg:space-y-5`}
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
  );
}

export default NavigationBars;
