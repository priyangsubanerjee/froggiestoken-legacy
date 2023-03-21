/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";

function Vector({ active }) {
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div
      className={`${
        active == 1
          ? "opacity-100 lg:opacity-100 translate-y-0"
          : active == 4
          ? "opacity-0 lg:opacity-20 translate-y-0"
          : "opacity-0 lg:opacity-100 translate-y-52 lg:translate-y-0"
      } h-full w-full fixed inset-0 flex items-end justify-end transition-all duration-700`}
    >
      <img
        className="h-64 lg:h-[80%] w-auto object-contain translate-y-[1%]"
        src="/images/frogVector.png"
        alt=""
      />
    </div>
  );
}

export default Vector;
