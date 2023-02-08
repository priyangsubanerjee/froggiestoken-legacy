import React from "react";

function NavigationBars({ active, totalBars }) {
  return (
    <div className="fixed left-0 top-0 h-full w-auto bg-red-50/0 z-10 flex flex-col items-center px-10 justify-center space-y-5">
      {[...Array(totalBars)].map((_, i) => {
        return (
          <a key={i} href={`#${i + 1}`}>
            <div
              className={`h-20 w-1 rounded-md ${
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
